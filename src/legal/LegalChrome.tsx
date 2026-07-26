import React from "react";

export const LEGAL_DOC_PROSE =
  "mt-8 max-w-none text-[15px] leading-relaxed [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:scroll-mt-28 [&_h2]:font-tomo-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-[#0E141B] [&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:font-tomo-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-[#0E141B] [&_p+p]:mt-4 [&_p]:text-[#4A5766] [&_li]:text-[#4A5766] [&_ul]:mt-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:leading-relaxed [&_strong]:font-semibold [&_strong]:text-[#0E141B] [&_a]:text-[#0E141B] [&_a]:underline [&_a]:underline-offset-2 [&_a]:decoration-[#C9933A]/70 hover:[&_a]:decoration-[#C9933A] [&_table]:mt-4 [&_table]:mb-6 [&_table]:w-full [&_table]:border-collapse [&_table]:text-[14px] [&_th]:border [&_th]:border-[#D7CEB8] [&_th]:bg-[#F5F0E6] [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:font-semibold [&_th]:text-[#0E141B] [&_td]:border [&_td]:border-[#D7CEB8] [&_td]:px-3 [&_td]:py-2 [&_td]:align-top [&_td]:text-[#4A5766]";

export function LegalChrome({
  title,
  metaAfterTitle,
  children,
}: {
  title: string;
  metaAfterTitle: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-[#FBF8F1] font-tomo text-[#0E141B] antialiased">
      <header className="sticky top-0 z-30 border-b border-[#D7CEB8]/60 bg-[#FBF8F1]/92 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a
            href="/home.html"
            className="font-tomo-logo text-[22px] font-medium tracking-[-0.03em] text-[#0E141B] no-underline"
          >
            tomo<span className="text-[#C9933A]">.</span>
          </a>
          <a
            href="/home.html"
            className="text-[13.5px] font-normal text-[#4A5766] hover:text-[#0E141B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10 rounded-md px-1 py-1"
          >
            Home
          </a>
        </div>
      </header>

      <main>
        <section className="py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-tomo-display text-4xl font-medium tracking-[-0.02em] text-[#0E141B]">
              {title}
            </h1>
            {metaAfterTitle}
            {children}
          </div>
        </section>
      </main>

      <footer className="border-t border-[#D7CEB8]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-[#7A8896]">
          © {new Date().getFullYear()} Tomo. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
