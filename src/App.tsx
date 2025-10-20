import React, { useState, useCallback } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { CheckCircle2, Shield } from "lucide-react";

/* ============================
   Inlined shadcn-style UI bits
   ============================ */

// Button
function Button({
  as = "a",
  href,
  children,
  className = "",
  "aria-label": ariaLabel,
  onClick,
}: {
  as?: "a" | "button";
  href?: string;
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
  onClick?: React.MouseEventHandler;
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium shadow-sm hover:shadow-md transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10";
  const cls = `${base} ${className}`;
  if (as === "button") {
    return (
      <button aria-label={ariaLabel} onClick={onClick} className={cls}>
        {children}
      </button>
    );
  }
  return (
    <a
      aria-label={ariaLabel}
      href={href}
      className={cls}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

// Card
function Card({ className = "", children }: any) {
  return (
    <div
      className={`rounded-2xl border border-neutral-200/70 bg-gradient-to-br from-orange-50/30 to-pink-50/30 shadow-[0_1px_0_#0000000d] transition hover:shadow-md hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </div>
  );
}
function CardHeader({ className = "", children }: any) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}
function CardTitle({ className = "", children }: any) {
  return <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>;
}
function CardDescription({ className = "", children }: any) {
  return <p className={`mt-2 text-neutral-600 ${className}`}>{children}</p>;
}
function CardContent({ className = "", children }: any) {
  return <div className={`px-6 pb-6 ${className}`}>{children}</div>;
}
function CardFooter({ className = "", children }: any) {
  return <div className={`px-6 pb-6 ${className}`}>{children}</div>;
}

// Accordion
type AccordionItemType = {
  id: string;
  question: string;
  answer: string;
};
function Accordion({
  items,
  className = "",
}: {
  items: AccordionItemType[];
  className?: string;
}) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  return (
    <div className={`divide-y divide-neutral-200/70 ${className}`}>
      {items.map((it) => {
        const isOpen = openId === it.id;
        const contentId = `accordion-${it.id}`;
        return (
          <div key={it.id} className="py-4">
            <button
              className="w-full text-left flex items-center justify-between gap-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10"
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => setOpenId(isOpen ? null : it.id)}
            >
              <span className="text-base sm:text-lg font-semibold">
                {it.question}
              </span>
              <span
                className={`shrink-0 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              >
                ▾
              </span>
            </button>
            <div
              id={contentId}
              role="region"
              aria-hidden={!isOpen}
              className={`text-neutral-600 overflow-hidden transition-[max-height] duration-300 ${
                isOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="pt-2 pr-1">{it.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Minimal NavigationMenu
function NavigationMenu({
  onAnchorClick,
}: {
  onAnchorClick: (id: string) => void;
}) {
  return (
    <nav className="flex items-center gap-6">
      <a
        href="#how"
        onClick={(e) => {
          e.preventDefault();
          onAnchorClick("how");
        }}
        className="text-sm font-medium text-neutral-700 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10 rounded-md px-1 py-1"
      >
        How it works
      </a>
      <a
        href="#faq"
        onClick={(e) => {
          e.preventDefault();
          onAnchorClick("faq");
        }}
        className="text-sm font-medium text-neutral-700 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10 rounded-md px-1 py-1"
      >
        FAQ
      </a>
      <Button
        href="https://cal.hellotomo.ai/welcome"
        aria-label="Join the Tomo beta"
        className="bg-black text-white"
      >
        Join the Beta →
      </Button>
    </nav>
  );
}

/* ============================
   Landing Page
   ============================ */

function LandingPage() {
  const handleAnchor = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const faqItems: AccordionItemType[] = [
    {
      id: "q1",
      question: "How is Tomo different from tools like Calendly?",
      answer:
        "Calendly is link-first. Tomo is chat-first, agent-led, and context-aware — it feels like a partner, not a booking link.",
    },
    {
      id: "q2",
      question: "Which calendars does Tomo support?",
      answer:
        "Today: Google Calendar. Coming soon: Outlook, multi-calendar sync, and Slack/WhatsApp integration.",
    },
    {
      id: "q3",
      question: "Can Tomo suggest places to meet?",
      answer:
        "Yes. Tomo recommends coffee shops and lunch spots, and checks the weather so you don't end up outdoors in the rain.",
    },
    {
      id: "q4",
      question: "Is my data private?",
      answer:
        "Yes. Your calendar data is encrypted, only accessed with your permission, never sold, and never used to train models.",
    },
  ];

  return (
    <div className="min-h-dvh bg-[#e3e2d5] text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-[#e3e2d5]/80 backdrop-blur border-b border-neutral-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/Tomo_FileFormats-02.png" 
              alt="Tomo" 
              className="h-8 w-auto"
            />
          </div>
          <div className="flex items-center gap-4">
            <NavigationMenu onAnchorClick={handleAnchor} />
            <Link
              to="/terms"
              className="text-sm font-medium text-neutral-700 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10 rounded-md px-1 py-1"
            >
              Terms
            </Link>
            <Link
              to="/privacy"
              className="text-sm font-medium text-neutral-700 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10 rounded-md px-1 py-1"
            >
              Privacy
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section
          className="relative py-16 sm:py-20 min-h-screen bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/hero-bg.jpg'), url('/hero-bg.jpeg'), radial-gradient(circle at 50% 40%, rgba(255,137,0,0.18) 0%, rgba(255,0,85,0.12) 40%, rgba(0,0,0,0.08) 100%)",
          }}
        >
          {/* overlay */}
          <div className="absolute inset-0 bg-black/5" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-4rem)] flex items-center">
            <div className="max-w-3xl mx-auto text-center w-full">
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
                Turn Chats Into Plans Instantly
              </h1>
              <p className="mt-6 leading-relaxed max-w-2xl mx-auto text-neutral-100">
                Stop juggling links and back-and-forth. Just tell Tomo what you want — lunch with Alice, a call with the team — and it's in your calendar.
              </p>
              <div className="mt-8 flex justify-center">
                <Button
                  href="https://cal.hellotomo.ai/welcome"
                  aria-label="Join the Tomo beta"
                  className="bg-black text-white"
                >
                  Join the Beta →
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-neutral-200/70" />

        {/* How It Works */}
        <section id="how" className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              How it works
            </h2>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 text-sm">
                      1
                    </span>
                    <CardTitle>Chat</CardTitle>
                  </div>
                  <CardDescription>
                    Type it like you’d text a friend: <em>“Let’s do coffee with
                    Alice next Tuesday.”</em>
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 text-sm">
                      2
                    </span>
                    <CardTitle>Propose</CardTitle>
                  </div>
                  <CardDescription>
                    Tomo checks availability across calendars, handles time
                    zones, and suggests a time and place, even a great coffee
                    spot nearby.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 text-sm">
                      3
                    </span>
                    <CardTitle>Confirm</CardTitle>
                  </div>
                  <CardDescription>
                    One tap. Everyone gets the invite. No hunting for links, no
                    forgotten follow-ups.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Video */}
            <div className="mt-10 bg-gray-900 rounded-2xl p-8 relative overflow-hidden">
              <div className="relative">
                <div className="max-w-sm mx-auto">
                  <video
                    className="w-full rounded-2xl shadow-2xl"
                    controls
                    preload="metadata"
                    poster="/video thumbnail.jpg"
                  >
                    <source src="/Tomo%20demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Video label */}
              <div className="text-center mt-6">
                <p className="text-white font-medium">Watch Tomo Demo</p>
                <p className="text-gray-300 text-sm">See Tomo in action with real conversations</p>
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-neutral-200/70" />

        {/* Why scheduling feels harder than it should */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Why scheduling feels harder than it should
            </h2>
            <p className="mt-6 max-w-3xl text-neutral-600 leading-relaxed">
              Whether it’s a board meeting or a birthday dinner, getting people
              aligned takes too many messages and too much cognitive energy.
            </p>
            <p className="mt-4 max-w-3xl text-neutral-600 leading-relaxed">
              You jump between chat, email, calendars, time zones, and somehow
              still don’t have a confirmed time or place.
            </p>
            <p className="mt-4 max-w-3xl text-neutral-600 leading-relaxed">
              It’s slow, messy, mentally taxing — a hidden tax on focus.
            </p>
          </div>
        </section>

        {/* Product Stats */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              What early testers experience
            </h2>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="text-3xl font-semibold">5,000+ events</div>
                  <CardDescription>scheduled during beta</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-3xl font-semibold">2 hours/week</div>
                  <CardDescription>saved by early testers</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-3xl font-semibold">80% fewer messages</div>
                  <CardDescription>vs. manual scheduling</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <div className="border-t border-neutral-200/70" />

        {/* Why Different */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Why Tomo feels different
            </h2>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="max-w-3xl">
                <ul className="space-y-4">
                  <li>
                    <span className="font-semibold">Lives where you already talk.</span>{" "}
                    <span className="text-neutral-600">
                      No new app. No setup. Just connect your calendar and
                      schedule inside your everyday chats.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">Understands context, not just availability.</span>{" "}
                    <span className="text-neutral-600">
                      Learns your habits, handles time zones, protects focus,
                      and picks the moments that actually work.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">Goes beyond a booking link.</span>{" "}
                    <span className="text-neutral-600">
                      Suggests locations, remembers your preferences, follows up
                      when needed.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="relative">
                <div className="w-full max-w-sm mx-auto">
                  <img 
                    src="/Ask_Tomo_example.png" 
                    alt="Tomo AI chat interface showing daily schedule and weather recommendations"
                    className="w-full rounded-2xl border border-neutral-200/80 shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-neutral-200/70" />

        {/* Not Just Another Link */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Not just another link
            </h2>
            <p className="mt-6 max-w-2xl text-neutral-600 leading-relaxed">
              Other tools hand you a booking page. Tomo gives you a partner.
              Instead of asking others to adapt to your scheduling link, Tomo
              works with you — in chat — to coordinate smarter, faster, and
              fairer.
            </p>
          </div>
        </section>

        <div className="border-t border-neutral-200/70" />

        {/* Testimonials */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Loved by early testers
            </h2>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardDescription className="text-neutral-900">
                    "Tomo feels like texting a friend who actually gets things
                    done."
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="text-sm text-neutral-500">— Beta user, Sydney</div>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardDescription className="text-neutral-900">
                    "It just knows when not to book me at 7am. Calendly never
                    cared."
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="text-sm text-neutral-500">
                    — Freelancer, London
                  </div>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardDescription className="text-neutral-900">
                    "Suggests a coffee shop and checks the weather. Small
                    things, big difference."
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="text-sm text-neutral-500">
                    — Consultant, New York
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <div className="border-t border-neutral-200/70" />

        {/* FAQ */}
        <section id="faq" className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              FAQ
            </h2>
            <div className="mt-6">
              <Accordion items={faqItems} />
            </div>
          </div>
        </section>

        <div className="border-t border-neutral-200/70" />

        {/* Privacy & Trust */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Privacy, built-in
            </h2>

            {/* Lead promise */}
            <p className="mt-6 max-w-3xl text-neutral-800 font-medium">
              Tomo is designed to help — not to observe.
            </p>

            {/* Promise + Checklist card */}
            <Card className="mt-6 max-w-3xl">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-neutral-700" aria-hidden="true" />
                  You stay in control
                </CardTitle>
                <CardDescription className="mt-3">
                  It only sees and acts on what you explicitly allow. It can’t add anything to your
                  calendar without your approval. It creates only what you confirm, and nothing else is touched.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-neutral-700">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" aria-hidden="true" />
                    <span>Acts only on what you allow; optional contact invites require your enablement.</span>
                  </li>
                  <li className="flex items-start gap-3 text-neutral-700">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" aria-hidden="true" />
                    <span>Creates only what you confirm; the rest of your calendar is untouched.</span>
                  </li>
                  <li className="flex items-start gap-3 text-neutral-700">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" aria-hidden="true" />
                    <span>Revoke access with one click; disconnecting removes all linked data immediately.</span>
                  </li>
                </ul>

                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-neutral-900 flex items-center gap-2">
                    <Shield className="h-4 w-4 text-neutral-700" aria-hidden="true" />
                    Security Standards
                  </h3>
                  <ul className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                    <li className="flex items-center gap-2 text-neutral-700">
                      <CheckCircle2 className="h-4 w-4 text-green-600" aria-hidden="true" />
                      Encrypted in transit and at rest
                    </li>
                    <li className="flex items-center gap-2 text-neutral-700">
                      <CheckCircle2 className="h-4 w-4 text-green-600" aria-hidden="true" />
                      No data is ever sold
                    </li>
                    <li className="flex items-center gap-2 text-neutral-700">
                      <CheckCircle2 className="h-4 w-4 text-green-600" aria-hidden="true" />
                      No data is used to train models
                    </li>
                  </ul>

                  <div className="mt-6">
                    <Link
                      to="/privacy"
                      className="text-sm font-medium text-neutral-800 hover:text-black underline underline-offset-4"
                    >
                      Read full Privacy Policy →
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="border-t border-neutral-200/70" />

        {/* Closing CTA */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Ready to try?
            </h2>
            <p className="mt-4 text-neutral-600">
              Join the beta and feel what scheduling <em>should</em> feel like —
              fast, human, and handled.
            </p>
            <div className="mt-8">
              <Button
                href="https://cal.hellotomo.ai/welcome"
                aria-label="Join the Tomo beta"
                className="bg-black text-white"
              >
                Join the Beta →
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-neutral-500">
          © {new Date().getFullYear()} Tomo. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function TermsPage() {
  return (
    <div className="min-h-dvh bg-[#e3e2d5] text-neutral-900">
      <header className="sticky top-0 z-30 bg-[#e3e2d5]/80 backdrop-blur border-b border-neutral-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/Tomo_FileFormats-02.png" alt="Tomo" className="h-8 w-auto" />
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-neutral-700 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10 rounded-md px-1 py-1"
          >
            Home
          </Link>
        </div>
      </header>

      <main>
        <section className="py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Terms & Conditions</h1>
            <p className="mt-4 text-neutral-600">Last updated: October 2025</p>
            <p className="mt-1 text-neutral-600">Entity: JIA Nomads Limited (“JIA”, “we”, “us”, or “our”)</p>
            <p className="mt-1 text-neutral-600">Product: Hello Tomo AI Scheduling Assistant (“Hello Tomo”, “the Service”)</p>

            <div className="prose prose-neutral mt-8 max-w-none">
              <h2>1. Acceptance of Terms</h2>
              <p>1.1 By accessing or using Hello Tomo, you agree to be bound by these Terms &amp; Conditions (“Terms”).</p>
              <p>1.2 If you do not agree, please discontinue use immediately.</p>
              <p>1.3 These Terms form a legally binding agreement between you and JIA Hong Kong Ltd, incorporated and registered in Hong Kong SAR.</p>

              <h2>2. Description of the Service</h2>
              <p>2.1 Hello Tomo is an AI-powered scheduling assistant that helps users coordinate meetings, manage availability, and integrate calendars and messaging platforms.</p>
              <p>2.2 The Service may connect to third-party services such as Google Calendar, Outlook, WhatsApp, Slack, or Telegram. You acknowledge that such integrations are subject to the terms of those third-party providers.</p>
              <p>2.3 JIA may modify or discontinue features at any time, with or without notice.</p>

              <h2>3. Account Registration and Security</h2>
              <p>3.1 You may need to create an account to use Hello Tomo. You must provide accurate, complete, and up-to-date information.</p>
              <p>3.2 You are responsible for safeguarding your login credentials. JIA is not responsible for unauthorized access resulting from your failure to maintain security.</p>
              <p>3.3 You agree to notify JIA promptly of any breach of security or unauthorized use.</p>

              <h2>4. Use of the Service</h2>
              <p>4.1 You may use Hello Tomo only for lawful purposes and in accordance with these Terms.</p>
              <p>4.2 You agree not to:</p>
              <ul>
                <li>interfere with or disrupt the Service or its servers;</li>
                <li>use automated systems (bots, scrapers) without authorization;</li>
                <li>attempt to reverse-engineer or copy the Service;</li>
                <li>use the Service to send spam or unlawful communications.</li>
              </ul>
              <p>4.3 JIA reserves the right to suspend or terminate accounts for misuse or violation of these Terms.</p>

              <h2>5. Payment and Subscriptions</h2>
              <p>5.1 Certain features require payment. Prices, billing cycles, and refund policies are set out on our official website or payment interface.</p>
              <p>5.2 If you subscribe to a paid plan, you authorize JIA to charge the selected payment method on a recurring basis until cancellation.</p>
              <p>5.3 You may cancel at any time via your account settings; cancellations take effect at the end of the current billing period.</p>
              <p>5.4 Unless required by law, fees are non-refundable once charged.</p>

              <h2>6. Intellectual Property</h2>
              <p>6.1 All intellectual property rights in Hello Tomo (software, trademarks, design, content, algorithms, etc.) belong to JIA or its licensors.</p>
              <p>6.2 You are granted a limited, non-exclusive, non-transferable, revocable license to use the Service for personal or internal business use.</p>
              <p>6.3 You retain ownership of your own content (calendar data, messages, preferences). By using the Service, you grant JIA the right to process and display this data solely to provide the Service.</p>

              <h2>7. Privacy and Data Protection</h2>
              <p>7.1 Your privacy is important to us. Our data practices are described in the Hello Tomo Privacy Policy, which forms part of these Terms.</p>
              <p>7.2 By using the Service, you consent to our collection and processing of data as outlined in the Privacy Policy.</p>
              <p>7.3 We store and process data in compliance with applicable privacy and data-protection laws, including Hong Kong’s PDPO (Cap 486) and, where applicable, foreign equivalents (e.g. GDPR).</p>

              <h2>8. Third-Party Services</h2>
              <p>8.1 Hello Tomo may rely on third-party APIs or systems. JIA is not responsible for the accuracy, availability, or reliability of those services.</p>
              <p>8.2 You acknowledge that your use of third-party integrations is at your own risk and governed by the respective providers’ terms.</p>

              <h2>9. Disclaimers and Limitation of Liability</h2>
              <p>9.1 The Service is provided “as is” and “as available” without warranties of any kind, express or implied.</p>
              <p>9.2 JIA does not guarantee that Hello Tomo will be error-free, uninterrupted, or that defects will always be corrected.</p>
              <p>9.3 To the fullest extent permitted by law:</p>
              <ul>
                <li>JIA shall not be liable for any indirect, incidental, special, or consequential damages (including lost profits, loss of data, or business interruption);</li>
                <li>JIA’s total liability for any claim shall not exceed the total amount you paid to JIA in the twelve (12) months preceding the claim.</li>
              </ul>

              <h2>10. Indemnification</h2>
              <p>You agree to indemnify and hold harmless JIA Hong Kong Ltd, its officers, employees, and affiliates from any claims, damages, or expenses (including legal fees) arising from your use of the Service, your violation of these Terms, or your infringement of any rights of a third party.</p>

              <h2>11. Termination</h2>
              <p>11.1 You may stop using Hello Tomo at any time.</p>
              <p>11.2 JIA may suspend or terminate your access at any time if you violate these Terms, cause harm to the Service, or for any other reason at our discretion.</p>
              <p>11.3 Upon termination, your right to use the Service ceases immediately, but provisions that by nature should survive (e.g. Intellectual Property, Liability, Indemnity, Governing Law) shall remain in effect.</p>

              <h2>12. Governing Law and Dispute Resolution</h2>
              <p>12.1 These Terms are governed by and construed in accordance with the laws of Hong Kong SAR.</p>
              <p>12.2 Any dispute arising out of or in connection with these Terms shall first be attempted to be resolved amicably.</p>
              <p>12.3 If not resolved within 30 days, either party may refer the dispute to binding arbitration administered by the Hong Kong International Arbitration Centre (HKIAC) under its rules, or bring the matter before the courts of Hong Kong.</p>
              <p>12.4 Each party irrevocably submits to the exclusive jurisdiction of the Hong Kong courts.</p>

              <h2>13. Miscellaneous</h2>
              <p>13.1 Entire Agreement: These Terms, together with our Privacy Policy and any additional policies published on our website, constitute the entire agreement between you and JIA.</p>
              <p>13.2 Severability: If any provision is found invalid, the remaining provisions remain enforceable.</p>
              <p>13.3 Force Majeure: JIA shall not be liable for any delay or failure caused by circumstances beyond reasonable control (including network outages, pandemics, natural disasters, or government actions).</p>
              <p>13.4 Assignment: You may not assign these Terms; JIA may assign or transfer them without restriction.</p>
              <p>13.5 No Waiver: Failure to enforce a right does not constitute a waiver.</p>
              <p>13.6 Language: These Terms are drafted in English; translations (if provided) are for convenience only.</p>

              <h2>Contact Us</h2>
              <p>For any questions, requests, or notices regarding these Terms:</p>
              <p>JIA Nomads Limited</p>
              <p>Email: support@jia-nomads.com</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-neutral-500">
          © {new Date().getFullYear()} Tomo. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

function PrivacyPage() {
  return (
    <div className="min-h-dvh bg-[#e3e2d5] text-neutral-900">
      <header className="sticky top-0 z-30 bg-[#e3e2d5]/80 backdrop-blur border-b border-neutral-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/Tomo_FileFormats-02.png" alt="Tomo" className="h-8 w-auto" />
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-neutral-700 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10 rounded-md px-1 py-1"
          >
            Home
          </Link>
        </div>
      </header>

      <main>
        <section className="py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Privacy Policy</h1>
            <p className="mt-4 text-neutral-600">Last updated: October 2025</p>
            <p className="mt-1 text-neutral-600">Entity: JIA Nomads Limited (“JIA”, “we”, “us”, “our”)</p>
            <p className="mt-1 text-neutral-600">Product: Hello Tomo AI Scheduling Assistant (“Hello Tomo”, “the Service”)</p>
            <p className="mt-1 text-neutral-600">Contact: support@jia-nomads.com</p>

            <div className="prose prose-neutral mt-8 max-w-none">
              <h2>1. Purpose of this Policy</h2>
              <p>This Privacy Policy explains how JIA Nomads Limited collects, uses, stores, and protects personal information when you use Hello Tomo. By using the Service, you consent to the practices described below.</p>

              <h2>2. Information We Collect</h2>
              <p>We collect information to provide and improve Hello Tomo. The types of data we collect include:</p>

              <h3>2.1 Account Information</h3>
              <ul>
                <li>Name, email address, password hash, and authentication tokens (e.g. Google or Microsoft sign-in).</li>
                <li>Business or organization name if applicable.</li>
              </ul>

              <h3>2.2 Calendar &amp; Scheduling Data</h3>
              <ul>
                <li>Meeting times, titles, attendees, and availability windows synced through integrated calendars.</li>
                <li>Metadata such as time zones, meeting links, and recurrence rules.</li>
              </ul>

              <h3>2.3 Communications Data</h3>
              <ul>
                <li>Messages exchanged with Hello Tomo (via web app, email, WhatsApp, Telegram, Slack etc.).</li>
                <li>Support requests and customer service records.</li>
              </ul>

              <h3>2.4 Usage &amp; Device Information</h3>
              <ul>
                <li>Log data (browser type, IP address, device identifier, operating system).</li>
                <li>Cookies or similar technologies for session management and analytics.</li>
              </ul>

              <h3>2.5 Payment Information</h3>
              <ul>
                <li>Billing name, email, and limited payment metadata.</li>
                <li>All card processing is handled by secure third-party payment processors; we do not store full card numbers.</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <ul>
                <li>Provide, operate, and improve the Hello Tomo Service.</li>
                <li>Authenticate users and secure accounts.</li>
                <li>Integrate with connected calendars and communication apps.</li>
                <li>Send service-related notifications (confirmations, reminders, updates).</li>
                <li>Handle billing and account management.</li>
                <li>Respond to inquiries and provide customer support.</li>
                <li>Analyse usage patterns for performance and security.</li>
                <li>Comply with legal obligations.</li>
              </ul>

              <h2>4. Legal Bases for Processing (If Applicable)</h2>
              <p>Where data-protection laws such as the EU GDPR apply, we process personal data on these legal bases:</p>
              <ul>
                <li>Performance of a contract (to deliver the Service).</li>
                <li>Legitimate interests (security, analytics, improvements).</li>
                <li>Compliance with legal obligations.</li>
                <li>Consent (for optional integrations or marketing communications).</li>
              </ul>

              <h2>5. Data Sharing and Disclosure</h2>
              <p>We may share your information only as necessary:</p>
              <ul>
                <li>Service providers: Hosting, cloud storage, email, and payment vendors under confidentiality agreements.</li>
                <li>Third-party integrations: Google Calendar, Microsoft Outlook, Slack, Telegram, WhatsApp Business (where you choose to connect).</li>
                <li>Legal requirements: If required by law or court order.</li>
                <li>Business transfer: In connection with a merger, acquisition, or sale of assets (subject to equivalent protections).</li>
              </ul>
              <p>We do not sell, rent, or lease personal data.</p>

              <h2>6. International Data Transfers</h2>
              <p>Data may be stored on servers located outside Hong Kong (e.g. Singapore or the EU). We ensure appropriate safeguards such as standard contractual clauses or approved transfer mechanisms to protect your information.</p>

              <h2>7. Data Retention</h2>
              <p>We retain personal data only for as long as needed to fulfil the purposes for which it was collected or to comply with legal obligations. When data is no longer needed, it is securely deleted or anonymised.</p>

              <h2>8. Your Rights</h2>
              <p>Subject to applicable law, you may request to:</p>
              <ul>
                <li>Access a copy of your personal data.</li>
                <li>Correct inaccurate information.</li>
                <li>Delete data no longer required.</li>
                <li>Withdraw consent for optional processing.</li>
                <li>Object to certain processing activities (e.g. marketing).</li>
              </ul>
              <p>To exercise these rights, contact us at support@jia-nomads.com. We will respond within a reasonable time and in accordance with the Personal Data (Privacy) Ordinance (PDPO).</p>

              <h2>9. Data Security</h2>
              <p>We use industry-standard technical and organizational measures to protect data, including:</p>
              <ul>
                <li>Encryption of data in transit and at rest.</li>
                <li>Access controls and authentication.</li>
                <li>Regular security audits and monitoring.</li>
              </ul>
              <p>No system is completely secure; you acknowledge that transmission of data over the internet carries inherent risks.</p>

              <h2>10. Cookies and Tracking</h2>
              <p>We use cookies and similar technologies to:</p>
              <ul>
                <li>Maintain session state;</li>
                <li>Analyse traffic and performance;</li>
                <li>Remember preferences.</li>
              </ul>
              <p>You can manage or disable cookies through your browser settings. Some features may not function properly without cookies.</p>

              <h2>11. Children’s Privacy</h2>
              <p>Hello Tomo is not intended for children under 16 years of age. We do not knowingly collect personal data from minors. If you believe a child has provided data, please contact us for deletion.</p>

              <h2>12. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time to reflect changes in law or our operations. The latest version will always be available on our website, with the effective date clearly shown. Material changes will be communicated via email or in-app notice.</p>

              <h2>13. Contact Us</h2>
              <p>If you have questions or concerns about this Policy or our data handling practices, please contact:</p>
              <p>JIA Nomads Limited</p>
              <p>Email: support@jia-nomads.com</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-neutral-500">
          © {new Date().getFullYear()} Tomo. All rights reserved.
        </div>
      </footer>
    </div>
  );
}