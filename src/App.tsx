import React, { useState, useCallback } from "react";

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

export default function LandingPage() {
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
    <div className="min-h-dvh bg-white text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-neutral-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/Tomo_FileFormats-02.png" 
              alt="Tomo" 
              className="h-8 w-auto"
            />
          </div>
          <NavigationMenu onAnchorClick={handleAnchor} />
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
                    Type it like you'd text a friend: "Let's do coffee with Sam
                    next week."
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
                    Tomo checks calendars, handles time zones, and suggests a
                    nearby spot.
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
                    One tap and it's in everyone's calendar.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Video Placeholder */}
            <div className="mt-10 bg-gray-900 rounded-2xl p-8 relative overflow-hidden">
              {/* Content */}
              <div className="relative">
                {/* Video thumbnail */}
                <div className="max-w-sm mx-auto">
                  <img 
                    src="/video thumbnail.jpg" 
                    alt="Tomo chat interface video thumbnail"
                    className="w-full rounded-2xl shadow-2xl"
                  />
                </div>
                
                {/* Play button overlay */}
                <div 
                  className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer group hover:bg-black/50 transition-colors rounded-2xl"
                  onClick={() => window.open('https://youtu.be/U--ZNq4RNrI?si=oRh9zvvHnV7PdAQm', '_blank')}
                >
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
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

        {/* Product Stats */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              What early testers see
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
                  <div className="text-3xl font-semibold">12 hours/week</div>
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
                    <span className="font-semibold">Agent-first.</span>{" "}
                    <span className="text-neutral-600">
                      Tomo doesn't just sync calendars — it reasons about them.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">Smarter choices.</span>{" "}
                    <span className="text-neutral-600">
                      Suggests the best times, not just open slots.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">Context aware.</span>{" "}
                    <span className="text-neutral-600">
                      Learns your habits and preferences.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">Beyond time.</span>{" "}
                    <span className="text-neutral-600">
                      Finds coffee shops, lunch spots, and adds contextual
                      weather recommendations so your plans fit the day.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">Lightweight.</span>{" "}
                    <span className="text-neutral-600">
                      Connect your calendar, start chatting. No setup rituals.
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
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Privacy, built-in
            </h2>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <li className="text-neutral-600">Only access what you approve</li>
              <li className="text-neutral-600">Fully encrypted</li>
              <li className="text-neutral-600">Never sold</li>
              <li className="text-neutral-600">Never used to train models</li>
            </ul>
            <p className="mt-6 text-neutral-600">Trust is the foundation.</p>
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
              Join the beta today and see how effortless scheduling can feel.
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