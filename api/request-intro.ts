import type { VercelRequest, VercelResponse } from "@vercel/node";

/**
 * POST /api/request-intro
 * Sends Loops transactional email to INTRO_NOTIFY_EMAIL (Geoff) using your published template.
 *
 * Env (set in Vercel → Project → Settings → Environment Variables):
 * - LOOPS_API_KEY — API key from Loops → Settings → API
 * - LOOPS_TRANSACTIONAL_ID — Published transactional email ID from Loops
 * - INTRO_NOTIFY_EMAIL — Inbox that receives the notification (default: geoffrey@tomosolution.ai)
 *
 * Template data variables must match Loops (this project uses your “New Website Email Collected” flow):
 * - Email — visitor’s work email (same name/casing as in the Loops editor)
 */

const LOOPS_URL = "https://app.loops.so/api/v1/transactional";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const apiKey = process.env.LOOPS_API_KEY;
  const transactionalId = process.env.LOOPS_TRANSACTIONAL_ID;
  const notifyEmail =
    process.env.INTRO_NOTIFY_EMAIL || "geoffrey@tomosolutions.ai";

  if (!apiKey || !transactionalId) {
    return res.status(500).json({
      ok: false,
      error: "Server not configured for Loops (missing LOOPS_API_KEY or LOOPS_TRANSACTIONAL_ID).",
    });
  }

  let body: { email?: string } = {};
  try {
    body =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
  } catch {
    return res.status(400).json({ ok: false, error: "Invalid JSON body" });
  }

  const email = String(body.email || "").trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: "Valid work email required." });
  }

  const payload = {
    transactionalId,
    email: notifyEmail,
    dataVariables: {
      Email: email,
    },
    addToAudience: false,
  };

  const loopsRes = await fetch(LOOPS_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = (await loopsRes.json()) as {
    success?: boolean;
    message?: string;
  };

  if (!loopsRes.ok || data.success === false) {
    return res.status(502).json({
      ok: false,
      error: data.message || "Could not send notification. Try again shortly.",
    });
  }

  return res.status(200).json({ ok: true });
}
