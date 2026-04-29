import React, { useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const LEGAL_DOC_PROSE =
  "mt-8 max-w-none text-[15px] leading-relaxed [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:scroll-mt-28 [&_h2]:font-tomo-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-[#0E141B] [&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:font-tomo-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-[#0E141B] [&_p+p]:mt-4 [&_p]:text-[#4A5766] [&_li]:text-[#4A5766] [&_ul]:mt-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:leading-relaxed";

function LegalChrome({
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

function TermsPage() {
  return (
    <LegalChrome
      title="Terms & Conditions"
      metaAfterTitle={
        <>
          <p className="mt-4 text-[#4A5766]">Last updated: April 2026</p>
          <p className="mt-2 text-[#4A5766]">
            Entity: Tomo Solutions Inc., a Delaware corporation (“Tomo
            Solutions”, “we”, “us”, or “our”)
          </p>
          <p className="mt-1 text-[#4A5766]">
            Product: Tomo AI for fundraising (“Tomo”, “the Service”)
          </p>
        </>
      }
    >
      <div className={LEGAL_DOC_PROSE}>
        <h2>1. Acceptance of Terms</h2>
        <p>
          1.1 By accessing or using Tomo, you agree to be bound by these Terms
          &amp; Conditions (“Terms”).
        </p>
        <p>1.2 If you do not agree, please discontinue use immediately.</p>
        <p>
          1.3 These Terms form a legally binding agreement between you and Tomo
          Solutions Inc., incorporated in Delaware, United States.
        </p>

        <h2>2. Description of the Service</h2>
        <p>
          2.1 Tomo is an AI-powered fundraising assistant that helps institutional
          fundraisers work across email, calendars, and CRM-related workflows—
          surfacing signals about investor relationships, drafts, and priorities
          consistent with your approvals and settings.
        </p>
        <p>
          2.2 The Service may connect to third-party services such as email
          providers (e.g. Gmail, Microsoft 365), calendars (e.g. Google Calendar,
          Outlook), and CRM or data systems you choose to integrate. You
          acknowledge that such integrations are subject to the terms of those
          third-party providers.
        </p>
        <p>
          2.3 Tomo Solutions may modify or discontinue features at any time, with
          or without notice.
        </p>

        <h2>3. Account Registration and Security</h2>
        <p>
          3.1 You may need to create an account to use Tomo. You must provide
          accurate, complete, and up-to-date information.
        </p>
        <p>
          3.2 You are responsible for safeguarding your login credentials. Tomo
          Solutions is not responsible for unauthorized access resulting from
          your failure to maintain security.
        </p>
        <p>
          3.3 You agree to notify Tomo Solutions promptly of any breach of
          security or unauthorized use.
        </p>

        <h2>4. Use of the Service</h2>
        <p>
          4.1 You may use Tomo only for lawful purposes and in accordance with
          these Terms.
        </p>
        <p>4.2 You agree not to:</p>
        <ul>
          <li>interfere with or disrupt the Service or its servers;</li>
          <li>use automated systems (bots, scrapers) without authorization;</li>
          <li>attempt to reverse-engineer or copy the Service;</li>
          <li>use the Service to send spam or unlawful communications.</li>
        </ul>
        <p>
          4.3 Tomo Solutions reserves the right to suspend or terminate
          accounts for misuse or violation of these Terms.
        </p>

        <h2>5. Payment and Subscriptions</h2>
        <p>
          5.1 Certain features require payment. Prices, billing cycles, and
          refund policies are set out on our official website or payment
          interface.
        </p>
        <p>
          5.2 If you subscribe to a paid plan, you authorize Tomo Solutions to
          charge the selected payment method on a recurring basis until
          cancellation.
        </p>
        <p>
          5.3 You may cancel at any time via your account settings; cancellations
          take effect at the end of the current billing period.
        </p>
        <p>5.4 Unless required by law, fees are non-refundable once charged.</p>

        <h2>6. Intellectual Property</h2>
        <p>
          6.1 All intellectual property rights in Tomo (software, trademarks,
          design, content, algorithms, etc.) belong to Tomo Solutions or its
          licensors.
        </p>
        <p>
          6.2 You are granted a limited, non-exclusive, non-transferable,
          revocable license to use the Service for personal or internal
          business use.
        </p>
        <p>
          6.3 You retain ownership of your own content (emails, investor
          correspondence, calendar events, CRM or pipeline data, and preferences
          you submit). By using the Service, you grant Tomo Solutions the right
          to process and display this data solely to provide the Service.
        </p>

        <h2>7. Privacy and Data Protection</h2>
        <p>
          7.1 Your privacy is important to us. Our data practices are described
          in the Tomo Privacy Policy, which forms part of these Terms.
        </p>
        <p>
          7.2 By using the Service, you consent to our collection and processing
          of data as outlined in the Privacy Policy.
        </p>
        <p>
          7.3 We store and process data in compliance with applicable U.S. federal
          and state privacy laws and, where applicable, international frameworks
          (such as the GDPR for individuals in applicable regions).
        </p>

        <h2>8. Third-Party Services</h2>
        <p>
          8.1 Tomo may rely on third-party APIs or systems. Tomo Solutions is
          not responsible for the accuracy, availability, or reliability of
          those services.
        </p>
        <p>
          8.2 You acknowledge that your use of third-party integrations is at
          your own risk and governed by the respective providers’ terms.
        </p>

        <h2>9. Disclaimers and Limitation of Liability</h2>
        <p>
          9.1 The Service is provided “as is” and “as available” without
          warranties of any kind, express or implied.
        </p>
        <p>
          9.2 Tomo Solutions does not guarantee that Tomo will be error-free,
          uninterrupted, or that defects will always be corrected.
        </p>
        <p>9.3 To the fullest extent permitted by law:</p>
        <ul>
          <li>
            Tomo Solutions shall not be liable for any indirect, incidental,
            special, or consequential damages (including lost profits, loss of
            data, or business interruption);
          </li>
          <li>
            Tomo Solutions’ total liability for any claim shall not exceed the
            total amount you paid to Tomo Solutions in the twelve (12) months
            preceding the claim.
          </li>
        </ul>

        <h2>10. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless Tomo Solutions Inc., its
          officers, employees, and affiliates from any claims, damages, or
          expenses (including legal fees) arising from your use of the Service,
          your violation of these Terms, or your infringement of any rights of a
          third party.
        </p>

        <h2>11. Termination</h2>
        <p>11.1 You may stop using Tomo at any time.</p>
        <p>
          11.2 Tomo Solutions may suspend or terminate your access at any time if
          you violate these Terms, cause harm to the Service, or for any other
          reason at our discretion.
        </p>
        <p>
          11.3 Upon termination, your right to use the Service ceases
          immediately, but provisions that by nature should survive (e.g.
          Intellectual Property, Liability, Indemnity, Governing Law) shall
          remain in effect.
        </p>

        <h2>12. Governing Law and Dispute Resolution</h2>
        <p>
          12.1 These Terms are governed by and construed in accordance with the
          laws of the State of Delaware, USA, without regard to its conflict of
          law principles.
        </p>
        <p>
          12.2 Any dispute arising out of or in connection with these Terms shall
          first be attempted to be resolved amicably between the parties.
        </p>
        <p>
          12.3 If not resolved within 30 days of written notice from either
          party, either party may bring a claim exclusively in the state or
          federal courts located in Delaware; each party consents to the personal
          jurisdiction and venue of those courts.
        </p>

        <h2>13. Miscellaneous</h2>
        <p>
          13.1 Entire Agreement: These Terms, together with our Privacy Policy
          and any additional policies published on our website, constitute the
          entire agreement between you and Tomo Solutions.
        </p>
        <p>
          13.2 Severability: If any provision is found invalid, the remaining
          provisions remain enforceable.
        </p>
        <p>
          13.3 Force Majeure: Tomo Solutions shall not be liable for any delay
          or failure caused by circumstances beyond reasonable control (including
          network outages, pandemics, natural disasters, or government actions).
        </p>
        <p>
          13.4 Assignment: You may not assign these Terms; Tomo Solutions may
          assign or transfer them without restriction.
        </p>
        <p>
          13.5 No Waiver: Failure to enforce a right does not constitute a
          waiver.
        </p>
        <p>
          13.6 Language: These Terms are drafted in English; translations (if
          provided) are for convenience only.
        </p>

        <h2>Contact Us</h2>
        <p>For any questions, requests, or notices regarding these Terms:</p>
        <p>Tomo Solutions Inc.</p>
        <p>Email: support@tomosolutions.ai</p>
      </div>
    </LegalChrome>
  );
}

function RedirectToHomeHtml() {
  useLayoutEffect(() => {
    window.location.replace(
      "/home.html" + window.location.search + window.location.hash
    );
  }, []);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RedirectToHomeHtml />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

function PrivacyPage() {
  return (
    <LegalChrome
      title="Privacy Policy"
      metaAfterTitle={
        <>
          <p className="mt-4 text-[#4A5766]">Last updated: April 2026</p>
          <p className="mt-2 text-[#4A5766]">
            Entity: Tomo Solutions Inc., a Delaware corporation (“Tomo Solutions”,
            “we”, “us”, “our”)
          </p>
          <p className="mt-1 text-[#4A5766]">
            Product: Tomo AI for fundraising (“Tomo”, “the Service”)
          </p>
          <p className="mt-1 text-[#4A5766]">Contact: support@tomosolutions.ai</p>
        </>
      }
    >
      <div className={LEGAL_DOC_PROSE}>
        <h2>1. Purpose of this Policy</h2>
        <p>
          This Privacy Policy explains how Tomo Solutions Inc. collects, uses,
          stores, and protects personal information when you use Tomo. By using
          the Service, you consent to the practices described below.
        </p>

        <h2>2. Information We Collect</h2>
        <p>We collect information to provide and improve Tomo. The types of data we collect include:</p>

        <h3>2.1 Account Information</h3>
        <ul>
          <li>Name, email address, password hash, and authentication tokens (e.g. Google or Microsoft sign-in).</li>
          <li>Business or organization name if applicable.</li>
        </ul>

        <h3>2.2 Fundraising workspace data</h3>
        <ul>
          <li>
            Investor and stakeholder information you or your integrations provide
            (e.g. names, firms, titles, stages, reminders, pipeline notes)—including
            data linked to fundraising campaigns or relationships where applicable.
          </li>
          <li>
            Calendar and meeting context synced through integrated calendars relevant
            to fundraising (titles, attendees, timing, conferencing metadata).
          </li>
        </ul>

        <h3>2.3 Communications data</h3>
        <ul>
          <li>
            Content from connected mailboxes or accounts that you authorize (e.g.
            threads with prospective or existing limited partners)—only as needed to
            deliver the Service and subject to your controls.
          </li>
          <li>
            Prompts and responses within the Tomo product, including drafts you
            review or approve, and support requests or customer service records.
          </li>
        </ul>

        <h3>2.4 Usage &amp; device information</h3>
        <ul>
          <li>Log data (browser type, IP address, device identifier, operating system).</li>
          <li>Cookies or similar technologies for session management and analytics.</li>
        </ul>

        <h3>2.5 Payment information</h3>
        <ul>
          <li>Billing name, email, and limited payment metadata.</li>
          <li>All card processing is handled by secure third-party payment processors; we do not store full card numbers.</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <ul>
          <li>Provide, operate, and improve the Tomo Service for fundraising workflows.</li>
          <li>Authenticate users and secure accounts.</li>
          <li>Integrate with connected email, calendars, and other systems you enable.</li>
          <li>Send service-related notifications (confirmations, reminders, updates).</li>
          <li>Handle billing and account management.</li>
          <li>Respond to inquiries and provide customer support.</li>
          <li>Analyse usage patterns for performance and security.</li>
          <li>Comply with legal obligations.</li>
        </ul>

        <h2>4. Legal Bases for Processing (If Applicable)</h2>
        <p>
          Where data-protection laws such as the EU GDPR apply, we process
          personal data on these legal bases:
        </p>
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
          <li>
            Third-party integrations you enable: e.g. Google Workspace, Microsoft
            365 (email and calendar), and other CRM or productivity tools we support
            (where available).
          </li>
          <li>Legal requirements: If required by law or court order.</li>
          <li>Business transfer: In connection with a merger, acquisition, or sale of assets (subject to equivalent protections).</li>
        </ul>
        <p>We do not sell, rent, or lease personal data.</p>

        <h2>6. International Data Transfers</h2>
        <p>
          Data may be stored or processed in the United States and in other countries
          where our service providers operate (including regions such as the EEA).
          Where we transfer personal data internationally, we use appropriate safeguards
          (such as Standard Contractual Clauses or equivalent mechanisms when required).
        </p>

        <h2>7. Data Retention</h2>
        <p>
          We retain personal data only for as long as needed to fulfil the purposes
          for which it was collected or to comply with legal obligations. When data
          is no longer needed, it is securely deleted or anonymised.
        </p>

        <h2>8. Your Rights</h2>
        <p>
          Subject to applicable law—including U.S. state privacy laws where they apply
          to you—you may request to:
        </p>
        <ul>
          <li>Access a copy of your personal data.</li>
          <li>Correct inaccurate information.</li>
          <li>Delete data no longer required.</li>
          <li>Withdraw consent for optional processing.</li>
          <li>Object to certain processing activities (e.g. marketing).</li>
        </ul>
        <p>
          Residents of certain jurisdictions (including California and EU/EEA residents,
          where the GDPR applies) may have additional rights; we honor those rights as
          required by law.
        </p>
        <p>
          To exercise these rights, contact us at support@tomosolutions.ai. We will
          respond within a reasonable timeframe in line with applicable law.
        </p>

        <h2>9. Data Security</h2>
        <p>We use industry-standard technical and organizational measures to protect data, including:</p>
        <ul>
          <li>Encryption of data in transit and at rest.</li>
          <li>Access controls and authentication.</li>
          <li>Regular security audits and monitoring.</li>
        </ul>
        <p>
          No system is completely secure; you acknowledge that transmission of data over
          the internet carries inherent risks.
        </p>

        <h2>10. Cookies and Tracking</h2>
        <p>We use cookies and similar technologies to:</p>
        <ul>
          <li>Maintain session state;</li>
          <li>Analyse traffic and performance;</li>
          <li>Remember preferences.</li>
        </ul>
        <p>
          You can manage or disable cookies through your browser settings. Some
          features may not function properly without cookies.
        </p>

        <h2>11. Children’s Privacy</h2>
        <p>
          Tomo is not directed at children under 13 (or the minimum age required in your
          jurisdiction where higher). We do not knowingly collect personal data from minors.
          If you believe we have collected a child’s information, please contact us at
          support@tomosolutions.ai so we can delete it.
        </p>

        <h2>12. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in law or
          our operations. The latest version will always be available on our website, with
          the effective date clearly shown. Material changes will be communicated via email or
          in-app notice when appropriate.
        </p>

        <h2>13. Contact Us</h2>
        <p>
          If you have questions or concerns about this Policy or our data handling
          practices, please contact:
        </p>
        <p>Tomo Solutions Inc.</p>
        <p>Email: support@tomosolutions.ai</p>
      </div>
    </LegalChrome>
  );
}