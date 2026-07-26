/**
 * Exports privacy/terms from src/legal/*.tsx as static HTML for crawlers.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

function extractReturnJsx(src, fnName) {
  const fnIdx = src.indexOf(`function ${fnName}`);
  if (fnIdx < 0) throw new Error(`Missing ${fnName}`);
  const returnIdx = src.indexOf("return (", fnIdx);
  if (returnIdx < 0) throw new Error(`No return in ${fnName}`);
  let paren = 1;
  let j = returnIdx + "return (".length;
  for (; j < src.length && paren > 0; j++) {
    if (src[j] === "(") paren++;
    else if (src[j] === ")") paren--;
  }
  return src.slice(returnIdx + "return (".length, j - 1).trim();
}

function jsxToHtml(jsx) {
  const titleMatch = jsx.match(/title="([^"]+)"/);
  const title = titleMatch ? titleMatch[1] : "Legal";

  const metaMatch = jsx.match(
    /metaAfterTitle=\{\s*<>\s*([\s\S]*?)\s*<\/>\s*\}/
  );
  let meta = metaMatch ? metaMatch[1] : "";

  const proseMatch = jsx.match(
    /<div className=\{LEGAL_DOC_PROSE\}>([\s\S]*)<\/div>\s*<\/LegalChrome>/
  );
  if (!proseMatch) throw new Error("Could not find LEGAL_DOC_PROSE body");
  let body = proseMatch[1];

  const convert = (fragment) =>
    fragment
      .replace(/\{\/\*[\s\S]*?\*\/\}/g, "")
      .replace(/<Link\s+to="([^"]+)">/g, '<a href="$1">')
      .replace(/<\/Link>/g, "</a>")
      .replace(/className=/g, "class=")
      .replace(/\{LEGAL_DOC_PROSE\}/g, '"prose"')
      .replace(/\{\s*"\s*"\s*\}/g, " ")
      .replace(/\{\s*`([^`]*)`\s*\}/g, "$1")
      .replace(/\{(\d{4})\}/g, "$1")
      .replace(/\n[ \t]+/g, "\n")
      .trim();

  meta = convert(meta)
    .replace(/class="mt-4 text-\[#4A5766\]"/g, 'class="meta"')
    .replace(/class="mt-2 text-\[#4A5766\]"/g, 'class="meta"')
    .replace(/class="mt-1 text-\[#4A5766\]"/g, 'class="meta"');

  body = convert(body).replace(/class="overflow-x-auto"/g, 'class="table-wrap"');
  body = body.replace(/\{\s*\}/g, "");
  meta = meta.replace(/\{\s*\}/g, "");

  if (/<[A-Z]/.test(body) || /className=/.test(body) || /\{["']/.test(body)) {
    const bad = body.match(/<[A-Z][\w.]*|className=|\{["'][^}]{0,40}/);
    throw new Error(`Unconverted JSX leftover near: ${bad?.[0]}`);
  }

  return { title, meta, body };
}

function shell({ pageTitle, description, canonicalPath, h1, meta, body }) {
  const year = new Date().getFullYear();
  const canonical = `https://www.tomosolutions.ai${canonicalPath}`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${pageTitle}</title>
<meta name="description" content="${description}" />
<link rel="canonical" href="${canonical}" />
<meta property="og:type" content="website" />
<meta property="og:url" content="${canonical}" />
<meta property="og:title" content="${pageTitle}" />
<meta property="og:description" content="${description}" />
<meta property="og:image" content="https://www.tomosolutions.ai/og-image.jpg" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${pageTitle}" />
<meta name="twitter:description" content="${description}" />
<meta name="twitter:image" content="https://www.tomosolutions.ai/og-image.jpg" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&family=Inter+Tight:wght@400;500;600&display=swap" rel="stylesheet" />
<style>
:root{
  --ink:#0E141B;--ink-quiet:#4A5766;--ink-whisper:#7A8896;
  --paper:#FBF8F1;--rule:#D7CEB8;--amber:#C9933A;--table-bg:#F5F0E6;
  --display:'Newsreader',Georgia,serif;--logo:'Fraunces',Georgia,serif;
  --sans:'Inter Tight',-apple-system,sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0}
body{background:var(--paper);color:var(--ink);font-family:var(--sans);font-size:16px;line-height:1.55;-webkit-font-smoothing:antialiased}
a{color:inherit}
.nav{position:sticky;top:0;z-index:30;border-bottom:1px solid rgba(215,206,184,.6);background:rgba(251,248,241,.92);backdrop-filter:blur(16px)}
.nav-inner{max-width:80rem;margin:0 auto;padding:0 1rem;height:4rem;display:flex;align-items:center;justify-content:space-between}
@media(min-width:640px){.nav-inner{padding:0 1.5rem}}
@media(min-width:1024px){.nav-inner{padding:0 2rem}}
.logo{font-family:var(--logo);font-size:22px;font-weight:500;letter-spacing:-.03em;text-decoration:none;color:var(--ink)}
.logo .dot{color:var(--amber)}
.nav-home{font-size:13.5px;color:var(--ink-quiet);text-decoration:none}
.nav-home:hover{color:var(--ink)}
main{padding:4rem 0 5rem}
@media(min-width:640px){main{padding:5rem 0}}
.wrap{max-width:48rem;margin:0 auto;padding:0 1rem}
@media(min-width:640px){.wrap{padding:0 1.5rem}}
@media(min-width:1024px){.wrap{padding:0 2rem}}
h1{font-family:var(--display);font-size:2.25rem;font-weight:500;letter-spacing:-.02em;line-height:1.15}
.meta{margin-top:1rem;color:var(--ink-quiet)}
.meta + .meta{margin-top:.5rem}
.prose{margin-top:2rem;font-size:15px;line-height:1.7;color:var(--ink-quiet)}
.prose h2{margin:2.5rem 0 .75rem;scroll-margin-top:7rem;font-family:var(--display);font-size:1.25rem;font-weight:600;color:var(--ink)}
.prose h3{margin:2rem 0 .5rem;font-family:var(--display);font-size:1.125rem;font-weight:600;color:var(--ink)}
.prose p+p{margin-top:1rem}
.prose ul{margin:1rem 0;padding-left:1.5rem;list-style:disc}
.prose li{margin:.5rem 0;line-height:1.7}
.prose strong{font-weight:600;color:var(--ink)}
.prose a{color:var(--ink);text-decoration:underline;text-underline-offset:2px;text-decoration-color:rgba(201,147,58,.7)}
.prose a:hover{text-decoration-color:var(--amber)}
.prose code{font-size:.9em}
.table-wrap{overflow-x:auto}
.prose table{margin:1rem 0 1.5rem;width:100%;border-collapse:collapse;font-size:14px}
.prose th,.prose td{border:1px solid var(--rule);padding:.5rem .75rem;vertical-align:top;text-align:left}
.prose th{background:var(--table-bg);font-weight:600;color:var(--ink)}
.prose td{color:var(--ink-quiet)}
footer{border-top:1px solid rgba(215,206,184,.6)}
.foot-inner{max-width:80rem;margin:0 auto;padding:2rem 1rem;font-size:.875rem;color:var(--ink-whisper)}
@media(min-width:640px){.foot-inner{padding:2rem 1.5rem}}
@media(min-width:1024px){.foot-inner{padding:2rem 2rem}}
</style>
</head>
<body>
<header class="nav">
  <div class="nav-inner">
    <a class="logo" href="/home.html">tomo<span class="dot">.</span></a>
    <a class="nav-home" href="/home.html">Home</a>
  </div>
</header>
<main>
  <div class="wrap">
    <h1>${h1}</h1>
${meta}
    <div class="prose">
${body}
    </div>
  </div>
</main>
<footer>
  <div class="foot-inner">© ${year} Tomo. All rights reserved.</div>
</footer>
</body>
</html>
`;
}

const pages = [
  {
    file: "src/legal/PrivacyPage.tsx",
    fn: "PrivacyPage",
    out: "assets/privacy.html",
    path: "/privacy",
    pageTitle: "Privacy Policy — Tomo Solutions",
    description:
      "How Tomo Solutions Inc. collects, uses, discloses, retains, and protects personal information in connection with TOMO.",
  },
  {
    file: "src/legal/TermsPage.tsx",
    fn: "TermsPage",
    out: "assets/terms.html",
    path: "/terms",
    pageTitle: "Terms of Service — Tomo Solutions",
    description:
      "Terms of Service governing access to and use of TOMO by Tomo Solutions Inc.",
  },
];

for (const page of pages) {
  const src = fs.readFileSync(path.join(root, page.file), "utf8");
  const jsx = extractReturnJsx(src, page.fn);
  const { title, meta, body } = jsxToHtml(jsx);
  const html = shell({
    pageTitle: page.pageTitle,
    description: page.description,
    canonicalPath: page.path,
    h1: title,
    meta,
    body,
  });
  fs.writeFileSync(path.join(root, page.out), html);
  console.log("Wrote", page.out, `(${html.length} bytes)`);
}
