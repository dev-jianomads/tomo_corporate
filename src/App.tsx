import React, { useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const LEGAL_DOC_PROSE =
  "mt-8 max-w-none text-[15px] leading-relaxed [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:scroll-mt-28 [&_h2]:font-tomo-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-[#0E141B] [&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:font-tomo-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-[#0E141B] [&_p+p]:mt-4 [&_p]:text-[#4A5766] [&_li]:text-[#4A5766] [&_ul]:mt-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:leading-relaxed [&_strong]:font-semibold [&_strong]:text-[#0E141B] [&_a]:text-[#0E141B] [&_a]:underline [&_a]:underline-offset-2 [&_a]:decoration-[#C9933A]/70 hover:[&_a]:decoration-[#C9933A] [&_table]:mt-4 [&_table]:mb-6 [&_table]:w-full [&_table]:border-collapse [&_table]:text-[14px] [&_th]:border [&_th]:border-[#D7CEB8] [&_th]:bg-[#F5F0E6] [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:font-semibold [&_th]:text-[#0E141B] [&_td]:border [&_td]:border-[#D7CEB8] [&_td]:px-3 [&_td]:py-2 [&_td]:align-top [&_td]:text-[#4A5766]";

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
      title="Terms of Service"
      metaAfterTitle={
        <>
          <p className="mt-4 text-[#4A5766]">
            Effective date: 23 July 2026 · Version 1.0
          </p>
          <p className="mt-2 text-[#4A5766]">
            Entity: Tomo Solutions Inc., a Delaware corporation (“Tomo”, “we”,
            “us”)
          </p>
          <p className="mt-1 text-[#4A5766]">
            Product: Tomo application, tomosolutions.ai, and related services
            (the “Service”)
          </p>
        </>
      }
    >
      <div className={LEGAL_DOC_PROSE}>
        <h2>1. Agreement to terms</h2>
        <p>
          These Terms of Service (“Terms”) are a binding agreement between you
          and Tomo Solutions Inc. (“Tomo”, “we”, “us”), governing your access to
          and use of the Tomo application, tomosolutions.ai, and related services
          (the “Service”). By creating an account or using the Service, you agree
          to these Terms and to our <Link to="/privacy">Privacy Policy</Link>. If
          you use the Service on behalf of an organization, you represent that
          you are authorized to bind that organization.
        </p>

        <h2>2. Definitions</h2>
        <ul>
          <li>
            <strong>“Customer Data”</strong> — data you submit to or authorize
            the Service to access, including data obtained from connected Google
            and Microsoft accounts.
          </li>
          <li>
            <strong>“Connected Account”</strong> — a Google or Microsoft account
            you authorize Tomo to access via OAuth.
          </li>
          <li>
            <strong>“AI Features”</strong> — features that use artificial
            intelligence to generate drafts or insights.
          </li>
        </ul>

        <h2>3. Eligibility and accounts</h2>
        <p>
          You must be at least 18 and capable of forming a binding contract. You
          are responsible for the security of your account credentials and for
          all activity under your account. You must provide accurate information
          and keep it current.
        </p>

        <h2>4. The Service</h2>
        <p>
          Tomo provides relationship-intelligence features for fund managers,
          including email and calendar analysis, relationship signals and
          metrics, reminders, meeting context, search, lists, workflows, and
          AI-assisted drafting. We may modify or improve the Service over time.
        </p>

        <h2>5. Third-party integrations (Google &amp; Microsoft)</h2>
        <h3>a. Your authorization</h3>
        <p>
          When you connect a Google or Microsoft account, you authorize Tomo to
          access the data covered by the scopes you approve, solely to provide
          the Service.
        </p>
        <h3>b. Compliance with provider terms</h3>
        <p>
          Tomo’s use of information received from Google APIs adheres to the{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements. Tomo’s use of Microsoft Graph
          data adheres to the Microsoft APIs Terms of Use. Details of how we
          handle this data are in our{" "}
          <Link to="/privacy">Privacy Policy</Link>.
        </p>
        <h3>c. Your responsibilities</h3>
        <p>
          You are responsible for ensuring you have the right to connect the
          relevant accounts and to allow Tomo to process the associated data, and
          for complying with your own organization’s policies and applicable law.
        </p>
        <h3>d. Provider changes</h3>
        <p>
          Google and Microsoft may change or discontinue their APIs; we are not
          liable for resulting changes to the Service.
        </p>

        <h2>6. Acceptable use</h2>
        <p>You will not, and will not permit others to:</p>
        <ul>
          <li>
            use the Service unlawfully or in violation of Google, Microsoft, or
            other provider terms;
          </li>
          <li>
            access data you are not authorized to access, or attempt to breach
            tenant isolation or security controls;
          </li>
          <li>reverse engineer, scrape, or overload the Service;</li>
          <li>
            use the Service to send spam or unlawful communications; or
          </li>
          <li>upload malware or infringe others’ rights.</li>
        </ul>

        <h2>7. Customer Data and privacy</h2>
        <p>
          As between you and Tomo, you retain all rights to Customer Data. You
          grant Tomo a limited license to process Customer Data solely to provide
          and secure the Service. Our processing of personal data is described in
          the <Link to="/privacy">Privacy Policy</Link>, which is incorporated
          into these Terms. We do not sell Customer Data and do not use Customer
          Data (including Google or Microsoft data) to train generalized or
          general-purpose AI models.
        </p>

        <h2>8. AI Features</h2>
        <p>
          AI Features generate draft content and insights for your review. All
          AI-generated communications are proposal-only and are never sent
          without your explicit, per-message approval. AI output may contain
          errors; you are responsible for reviewing it before acting. AI
          processing is performed on an enterprise configuration with no
          retention of your data for model training (see{" "}
          <Link to="/privacy">Privacy Policy</Link>, Section 6).
        </p>

        <h2>9. Intellectual property</h2>
        <p>
          The Service, including its software, design, and content (excluding
          Customer Data), is owned by Tomo and its licensors and is protected by
          intellectual-property laws. These Terms grant you a limited,
          non-exclusive, non-transferable right to use the Service. Feedback you
          provide may be used by us without obligation to you.
        </p>

        <h2>10. Fees</h2>
        <p>
          If the Service is offered on a paid basis, applicable fees, billing
          terms, and refund policy will be presented at purchase and form part of
          these Terms. Where the Service is provided at no charge, we may change
          or discontinue it at our discretion.
        </p>

        <h2>11. Confidentiality</h2>
        <p>
          Each party will protect the other’s confidential information with
          reasonable care and use it only to perform under these Terms.
        </p>

        <h2>12. Disclaimers</h2>
        <p>
          The Service is provided “as is” and “as available.” To the maximum
          extent permitted by law, Tomo disclaims all warranties, express or
          implied, including merchantability, fitness for a particular purpose,
          and non-infringement. Tomo does not warrant that the Service will be
          uninterrupted, error-free, or secure against all threats.
        </p>

        <h2>13. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, Tomo will not be liable for
          indirect, incidental, special, consequential, or punitive damages, or
          for lost profits, revenues, or data. Tomo’s total aggregate liability
          arising out of or relating to the Service will not exceed the greater
          of the amounts you paid to Tomo in the 12 months before the claim, or
          USD 100.
        </p>

        <h2>14. Indemnification</h2>
        <p>
          You will indemnify and hold Tomo harmless from claims arising out of
          your Customer Data, your use of the Service in violation of these Terms
          or applicable law, or your violation of any third-party rights or
          provider terms.
        </p>

        <h2>15. Term, termination, and data deletion</h2>
        <p>
          These Terms apply while you use the Service. You may stop using and
          delete your account at any time (
          <Link to="/privacy">Privacy Policy</Link>, Section 10). We may suspend
          or terminate access for material breach, legal requirement, or risk to
          the Service. On termination, we revoke Connected Account tokens and
          delete Customer Data in accordance with the Privacy Policy (including
          the 30-day deletion process).
        </p>

        <h2>16. Changes to these Terms</h2>
        <p>
          We may update these Terms from time to time. Material changes will be
          posted here with a revised effective date; continued use after changes
          take effect constitutes acceptance.
        </p>

        <h2>17. Governing law and disputes</h2>
        <p>
          These Terms are governed by the laws of the State of Delaware, USA,
          without regard to conflict-of-laws rules. The courts of the State of
          Delaware, USA will have exclusive jurisdiction, except where mandatory
          local law provides otherwise.
        </p>

        <h2>18. Contact</h2>
        <p>
          Tomo Solutions Inc. Email:{" "}
          <a href="mailto:privacy@tomosolutions.ai">privacy@tomosolutions.ai</a>
          . For general support:{" "}
          <a href="mailto:support@tomosolutions.ai">support@tomosolutions.ai</a>
          . Address: 1 Ferry Building, Suite 201, San Francisco, CA 94111.
        </p>
        <p>
          These Terms are designed to be consistent with the Google API Services
          User Data Policy (including Limited Use), the Microsoft APIs Terms of
          Use, and to support SOC 2 and data-protection obligations. They
          incorporate the Tomo Privacy Policy by reference.
        </p>
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
          <p className="mt-4 text-[#4A5766]">
            Effective date: 23 July 2026 · Version 1.0
          </p>
          <p className="mt-2 text-[#4A5766]">
            Entity: Tomo Solutions Inc., a Delaware corporation (“Tomo
            Solutions”, “Tomo”, “we”, “us”, or “our”)
          </p>
          <p className="mt-1 text-[#4A5766]">
            Product: TOMO — AI for fundraising (“TOMO”, “Tomo”, or “the
            Service”)
          </p>
          <p className="mt-1 text-[#4A5766]">
            Contact: privacy@tomosolutions.ai · support@tomosolutions.ai
          </p>
        </>
      }
    >
      <div className={LEGAL_DOC_PROSE}>
        <p>
          This Privacy Policy explains how we collect, use, disclose, retain, and
          protect personal information in connection with the Service and our
          websites (including tomosolutions.ai). It should be read together with
          our <Link to="/terms">Terms of Service</Link>.
        </p>
        <p>
          If you use TOMO on behalf of a fund, firm, or other organisation, that
          organisation is typically the <strong>controller</strong> (or
          “business”) of investor and pipeline personal data it instructs us to
          process, and Tomo Solutions acts as a <strong>processor</strong> (or
          “service provider”) for that Customer Content. Tomo Solutions is the
          controller of account, billing, website, and marketing data we collect
          directly about users and prospects.
        </p>

        <h2>1. Scope</h2>
        <p>This Policy covers:</p>
        <ul>
          <li>visitors to our public websites;</li>
          <li>
            users of the TOMO application (general partners, IR teammates, and
            other workspace members); and
          </li>
          <li>
            personal data contained in Customer Content that customers sync or
            upload (for example, limited partner / allocator contact details and
            correspondence), including data from Connected Accounts (Google and
            Microsoft).
          </li>
        </ul>
        <p>
          It does <strong>not</strong> cover third-party websites or services you
          connect (Microsoft, Google, CRM vendors, Slack, Stripe, etc.), which
          have their own policies.
        </p>

        <h2>2. Personal data we collect</h2>

        <h3>2.1 Account and workspace data</h3>
        <ul>
          <li>
            Name, work email, authentication identifiers, and password hashes
            (if email/password sign-in is used).
          </li>
          <li>
            Sign-in metadata from identity providers (for example Google or
            Microsoft) when you choose SSO-style sign-in.
          </li>
          <li>
            Organisation / fund / workspace names, roles, preferences,
            notification settings, and timezone.
          </li>
          <li>Team membership (who is invited to a workspace).</li>
        </ul>

        <h3>2.2 Connected mailbox, calendar, and meeting data</h3>
        <p>
          If you authorise integrations, we process data from those providers as
          needed to operate the Service, which may include:
        </p>
        <ul>
          <li>
            email metadata (participants, timestamps, subject lines,
            folders/labels as exposed by the API);
          </li>
          <li>
            email body content for messages in scope of your historical and
            ongoing sync settings;
          </li>
          <li>
            extracted text from certain attachments (for example PDF/DOCX) where
            the feature is enabled — we do <strong>not</strong> require storing
            original attachment binaries for core V1 processing;
          </li>
          <li>
            calendar events (titles, times, attendees, locations, conferencing
            links);
          </li>
          <li>
            meeting transcripts and/or AI meeting recaps when you enable
            transcript features and your provider makes them available; and
          </li>
          <li>
            contacts from connected directories where you grant that scope.
          </li>
        </ul>
        <p>
          You control which providers you connect and can disconnect them in
          Settings (where available).
        </p>

        <h3>2.3 CRM / pipeline and fundraising records</h3>
        <p>
          Data you import (CSV/Excel or similar) or sync via supported CRM
          connectors, which may include:
        </p>
        <ul>
          <li>
            organisation and contact names, titles, emails, phones, geography;
          </li>
          <li>
            pipeline stages, ticket sizes, mandate notes, owners, and related IR
            fields;
          </li>
          <li>interaction history and notes you store in TOMO; and</li>
          <li>materials you upload for drafting or workflow context.</li>
        </ul>

        <h3>2.4 Product-generated data</h3>
        <ul>
          <li>
            Drafts, summaries, classifications, signal outputs, reminders, daily
            briefs, workflow configuration, and action logs.
          </li>
          <li>
            Tone-calibration / personalisation artefacts derived from your
            writing samples so drafts can match your voice (see Section 6).
          </li>
          <li>
            Approvals, edits, skips, and related audit events for outbound
            actions.
          </li>
        </ul>

        <h3>2.5 Usage, device, and diagnostics</h3>
        <ul>
          <li>
            Log data such as IP address, browser/user agent, device type,
            approximate location derived from IP, pages/features used, and
            timestamps.
          </li>
          <li>
            Cookies and similar technologies for session continuity, security,
            and analytics (see Section 11).
          </li>
          <li>
            Error and performance telemetry (configured to minimise unnecessary
            personal data).
          </li>
        </ul>

        <h3>2.6 Billing</h3>
        <ul>
          <li>
            Billing name, email, organisation details, plan, invoices, and
            limited payment metadata from our payment processor.
          </li>
          <li>
            We do <strong>not</strong> store full payment card numbers; card data
            is handled by our payment processor (for example Stripe).
          </li>
        </ul>

        <h3>2.7 Communications with us</h3>
        <ul>
          <li>
            Emails, intro requests, support tickets, and call/meeting notes when
            you contact us.
          </li>
          <li>Marketing preferences if you subscribe to updates.</li>
        </ul>

        <h3>2.8 Data we do not intentionally seek</h3>
        <p>
          We do not require special-category data (for example health data) to
          use TOMO. Please do not upload such data unless necessary and lawful.
          If it appears incidentally in mailbox content, it is processed only as
          part of providing the Service under your instructions.
        </p>

        <h2>3. How we use personal data</h2>
        <p>We use personal data to:</p>
        <ul>
          <li>provide, operate, secure, and support the Service;</li>
          <li>authenticate users and manage workspaces;</li>
          <li>sync and index connected data sources you enable;</li>
          <li>
            compute relationship signals, reminders, metrics, and briefings;
          </li>
          <li>
            generate drafts and other AI outputs for{" "}
            <strong>your review and approval</strong>;
          </li>
          <li>
            send service notifications (in-app, email, and optional Slack);
          </li>
          <li>personalise drafting tone for your user/workspace;</li>
          <li>prevent abuse, debug issues, and maintain availability;</li>
          <li>process payments and prevent fraud;</li>
          <li>comply with law and enforce our Terms; and</li>
          <li>
            communicate product updates or marketing where permitted (you may
            opt out of non-essential marketing).
          </li>
        </ul>
        <p>
          <strong>Human-in-the-loop:</strong> outbound investor or external email
          is not sent without an explicit user approval action in the product
          (unless a future feature expressly discloses a different control model
          and you enable it).
        </p>

        <h2>4. Legal bases (GDPR / UK GDPR and similar laws)</h2>
        <p>Where these laws apply, we rely on:</p>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Purpose</th>
                <th>Typical legal basis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Providing the Service to a customer organisation</td>
                <td>
                  Performance of a contract; and/or legitimate interests of the
                  customer as controller for investor-relationship management
                </td>
              </tr>
              <tr>
                <td>Our processing of Customer Content as processor</td>
                <td>
                  Documented customer instructions + DPA; customer’s lawful basis
                </td>
              </tr>
              <tr>
                <td>
                  Account security, fraud prevention, service integrity
                </td>
                <td>
                  Legitimate interests; legal obligation where applicable
                </td>
              </tr>
              <tr>
                <td>Optional marketing emails</td>
                <td>
                  Consent or soft opt-in where permitted; legitimate interests
                  with opt-out where permitted
                </td>
              </tr>
              <tr>
                <td>Optional product analytics cookies (non-essential)</td>
                <td>Consent where required</td>
              </tr>
              <tr>
                <td>Compliance with legal process</td>
                <td>Legal obligation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>5. When we share personal data</h2>
        <p>
          We do not sell personal information for money. We do not “sell” or
          “share” personal information for cross-context behavioural advertising
          as those terms are defined under the CCPA/CPRA, and we do not use
          Customer Content for advertising networks.
        </p>
        <p>We disclose personal data only as follows:</p>

        <h3>5.1 Sub-processors / service providers</h3>
        <p>
          Vendors that process data on our instructions to run the Service.
          Current categories and representative providers:
        </p>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Sub-processor / category</th>
                <th>Purpose</th>
                <th>Typical data</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Supabase</td>
                <td>Database, file storage, related backend</td>
                <td>Workspace and product data</td>
              </tr>
              <tr>
                <td>Vercel</td>
                <td>Application hosting / edge delivery</td>
                <td>Request data in transit</td>
              </tr>
              <tr>
                <td>Amazon Web Services (AWS)</td>
                <td>
                  Workers, queues, object storage, secrets, transactional email
                  (if used)
                </td>
                <td>Workspace and operational data</td>
              </tr>
              <tr>
                <td>Google Cloud — Firebase Authentication</td>
                <td>Sign-in</td>
                <td>Account identifiers, auth metadata</td>
              </tr>
              <tr>
                <td>Google Cloud — Vertex AI</td>
                <td>LLM inference</td>
                <td>
                  Prompts/responses (zero retention where configured)
                </td>
              </tr>
              <tr>
                <td>Google (Workspace APIs)</td>
                <td>Mail/calendar/meet sync when you connect Google</td>
                <td>
                  Data already in your Google account, plus tokens we store
                </td>
              </tr>
              <tr>
                <td>Microsoft (Graph API)</td>
                <td>Mail/calendar/Teams sync when you connect Microsoft</td>
                <td>
                  Data already in your Microsoft account, plus tokens we store
                </td>
              </tr>
              <tr>
                <td>Stripe</td>
                <td>Billing</td>
                <td>Customer billing details</td>
              </tr>
              <tr>
                <td>Postmark and/or AWS SES</td>
                <td>Transactional product email</td>
                <td>Recipient email + message content</td>
              </tr>
              <tr>
                <td>Slack</td>
                <td>Optional daily brief / notifications</td>
                <td>Content you enable to send to Slack</td>
              </tr>
              <tr>
                <td>Sentry (or similar)</td>
                <td>Error monitoring</td>
                <td>Stack traces; configured to limit PII</td>
              </tr>
              <tr>
                <td>PostHog, Vercel Analytics, or similar</td>
                <td>Product analytics</td>
                <td>Pseudonymous usage events, workspace IDs</td>
              </tr>
              <tr>
                <td>Affinity / Backstop (optional)</td>
                <td>CRM connectors you enable</td>
                <td>Data per your grant with that CRM</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          We maintain a current sub-processor list for customers and aim to
          provide <strong>at least 30 days’ notice</strong> before adding a new
          sub-processor that processes Customer Content, except for urgent
          security replacements.
        </p>

        <h3>5.2 Integrations you enable</h3>
        <p>
          When you connect a third party, data flows according to the permissions
          you grant that party.
        </p>

        <h3>5.3 Workspace teammates and authorised users</h3>
        <p>
          Members of your workspace can access shared Customer Content according
          to product permissions.
        </p>

        <h3>5.4 Professional advisors and corporate transactions</h3>
        <p>
          Advisors under confidentiality obligations; or parties to a merger,
          acquisition, financing, or sale of assets, subject to appropriate
          protections.
        </p>

        <h3>5.5 Legal and safety</h3>
        <p>
          Where required by law, regulation, legal process, or to protect rights,
          safety, and security of Tomo Solutions, our users, or others.
        </p>

        <h3>5.6 Staff support access</h3>
        <p>
          In early customer programmes, authorised Tomo Solutions personnel may
          access workspace data as needed for onboarding and support, under
          internal access controls and logging. In-product “login as customer”
          impersonation is not a standard V1 feature; support is typically
          provided with your participation (for example screen share) plus
          limited backend operational access when necessary.
        </p>

        <h2>6. Artificial intelligence, training, and Google / Microsoft Limited Use</h2>

        <h3>6.1 How AI is used</h3>
        <p>
          We use AI systems (currently including Google Cloud Vertex AI / Gemini
          for production inference, subject to change with notice via our
          sub-processor disclosures) to:
        </p>
        <ul>
          <li>draft messages and summaries;</li>
          <li>classify or prioritise items;</li>
          <li>support contact suggestions and workflow drafting; and</li>
          <li>generate other in-product assistance.</li>
        </ul>
        <p>
          Prompts may include relevant Customer Content (for example recent
          correspondence excerpts, CRM fields, or transcript snippets) needed for
          the task.
        </p>

        <h3>6.2 No training on customer data for shared models</h3>
        <p>
          <strong>
            We do not use Customer Data (including Google or Microsoft user data)
            to train foundation models or to improve generalised or
            general-purpose AI models that serve other customers.
          </strong>
        </p>
        <p>
          Any future programme that would use Customer Content for shared model
          training would require <strong>explicit consent</strong> and an updated
          DPA or addendum before it begins.
        </p>

        <h3>6.3 Tone calibration (personalisation for you only)</h3>
        <p>
          To make drafts sound like you, we may build{" "}
          <strong>per-user or per-workspace personalisation artefacts</strong>{" "}
          (for example style profiles) from your sent messages and related
          writing samples. These artefacts:
        </p>
        <ul>
          <li>
            exist to provide the Service <strong>to you</strong>;
          </li>
          <li>
            are <strong>not</strong> used to train foundation models for other
            customers; and
          </li>
          <li>
            are deleted or de-identified when your account/workspace is deleted
            according to our retention rules.
          </li>
        </ul>

        <h3>6.4 Zero retention at the LLM provider (where available)</h3>
        <p>
          AI processing is performed on an enterprise configuration. We configure
          supported LLM providers for <strong>zero data retention</strong> of
          prompts and responses (process in-memory / no training use under the
          provider’s enterprise terms), subject to the provider’s then-current
          documentation and our contractual terms with them. Operational API
          metadata (for example request IDs, token counts) may still be logged by
          providers or by us for reliability and billing.
        </p>

        <h3>6.5 Google API Services User Data Policy (Limited Use)</h3>
        <p>
          Tomo’s use and transfer to any other app of information received from
          Google APIs will adhere to the{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements. Among other things, this
          means we:
        </p>
        <ul>
          <li>
            use Google user data only to provide or improve user-facing features
            that are prominent in the requesting application’s user interface;
          </li>
          <li>
            do not transfer Google user data to third parties except as necessary
            to provide or improve those features, for security purposes, or as
            required to comply with applicable law;
          </li>
          <li>
            do not use Google user data for serving advertisements; and
          </li>
          <li>
            do not allow humans to read Google user data unless we have your
            affirmative agreement for specific messages, it is necessary for
            security or compliance, or the data is aggregated and anonymised.
          </li>
        </ul>

        <h3>6.6 Microsoft Graph data</h3>
        <p>
          Tomo’s use of Microsoft Graph data adheres to the Microsoft APIs Terms
          of Use. We process Microsoft mailbox, calendar, and related data only
          as needed to provide the Service you enable, and we do not use that
          data to train generalized AI models.
        </p>

        <h3>6.7 Important clarification about storage</h3>
        <p>
          AI inference may be ephemeral at the model provider, but{" "}
          <strong>
            TOMO itself stores Customer Content as needed to operate the product
          </strong>{" "}
          — including email bodies, metadata, drafts, transcripts, signals, and
          audit logs — under the retention rules in Section 8. Claims that
          content is “never stored” apply only to certain provider-side inference
          settings, <strong>not</strong> to TOMO’s application database and
          related storage.
        </p>

        <h2>7. International transfers and data location</h2>

        <h3>7.1 Primary hosting (current)</h3>
        <p>
          <strong>
            V1 production systems are hosted primarily in the United States
          </strong>{" "}
          (for example AWS <code>us-east-1</code> and related US-region
          services). Personal data you submit will generally be processed and
          stored in the United States.
        </p>

        <h3>7.2 EU / UK customers</h3>
        <p>
          We implement GDPR/UK GDPR controls (DPA, SCCs or equivalent transfer
          tools where required, security measures, and data-subject request
          handling).{" "}
          <strong>
            Dedicated EU data residency is not guaranteed in V1
          </strong>{" "}
          and is planned as a later option (for example EU-region hosting). Do
          not rely on marketing shorthand such as “EU &amp; UK data residency”
          unless confirmed in your order form or DPA.
        </p>

        <h3>7.3 Transfer safeguards</h3>
        <p>
          Where we transfer personal data from the EEA, UK, or Switzerland to the
          US or other countries, we use appropriate safeguards such as the
          European Commission’s Standard Contractual Clauses (and UK addenda
          where applicable), plus supplementary measures as needed.
        </p>

        <h2>8. Retention</h2>
        <p>
          We retain personal data only as long as needed for the purposes
          described in this Policy, including security, dispute resolution, and
          legal compliance. Representative product rules (which may be refined in
          your DPA):
        </p>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Data class</th>
                <th>Typical retention</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Full email / transcript body text and extracted attachment text
                </td>
                <td>
                  About <strong>12 months</strong> from the interaction date,
                  then bodies are nulled or purged while metadata may remain
                </td>
              </tr>
              <tr>
                <td>Email/interaction metadata (without full body)</td>
                <td>
                  Up to about <strong>36 months</strong>, then deleted
                </td>
              </tr>
              <tr>
                <td>
                  Drafts, CRM/pipeline records, briefs, workflows, materials
                </td>
                <td>
                  While the workspace remains active; deleted on
                  workspace/account closure after any grace period
                </td>
              </tr>
              <tr>
                <td>
                  Append-only operational logs (signals, action log,
                  delivery/safety logs, auth events)
                </td>
                <td>
                  Retained while the account is active for product integrity and
                  audit; personal identifiers may be scrubbed on erasure requests
                </td>
              </tr>
              <tr>
                <td>OAuth tokens</td>
                <td>
                  Revoked on disconnect; ciphertext zeroised; residual audit row
                  may remain
                </td>
              </tr>
              <tr>
                <td>CSV import originals</td>
                <td>
                  About <strong>90 days</strong>, then auto-purged
                </td>
              </tr>
              <tr>
                <td>Account after deletion request</td>
                <td>
                  Soft-delete grace period (about <strong>30 days</strong>), then
                  hard deletion / scrubbing
                </td>
              </tr>
              <tr>
                <td>Backups</td>
                <td>
                  Per provider backup schedules (rolling windows), then expire
                </td>
              </tr>
              <tr>
                <td>Billing records</td>
                <td>As required for tax and accounting</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          When you disconnect an integration, <strong>new</strong> ingestion
          stops; data already stored remains until deletion rules or an explicit
          purge/erasure request applies.
        </p>

        <h2>9. Security</h2>
        <p>
          We apply administrative, technical, and organisational measures
          appropriate to the sensitivity of fundraising and LP relationship data,
          including:
        </p>
        <ul>
          <li>
            encryption <strong>in transit</strong> (TLS) and{" "}
            <strong>at rest</strong> for datastores and sensitive secrets;
          </li>
          <li>
            envelope encryption / vaulting for OAuth tokens and similar secrets;
          </li>
          <li>access controls, authentication, and audit logging;</li>
          <li>network and application security monitoring; and</li>
          <li>vendor diligence for material sub-processors.</li>
        </ul>
        <p>
          <strong>Clarification:</strong> “Encryption in transit and at rest” is
          not the same as classical end-to-end encryption where only you hold
          decryption keys. We (and subprocessors under our instruction) must be
          able to decrypt and process data to provide AI drafting, search,
          signals, and sync.
        </p>
        <p>
          No method of transmission or storage is 100% secure. You are
          responsible for securing your devices, upstream email/CRM accounts, and
          workspace invitations.
        </p>
        <p>
          We pursue institutional compliance attestations (for example SOC 2 Type
          1 and Google CASA Tier 2 for relevant OAuth scopes) according to our
          roadmap. Availability of a particular report on a given date is
          confirmed in diligence materials, not assumed from this Policy alone.
        </p>

        <h2>10. Your rights, choices, and account deletion</h2>

        <h3>10.1 Product controls</h3>
        <p>Depending on features available to you, you may:</p>
        <ul>
          <li>access and update profile and workspace settings;</li>
          <li>connect or disconnect integrations;</li>
          <li>control notification channels (including Slack opt-in);</li>
          <li>
            export workspace data (where the export feature is enabled); and
          </li>
          <li>approve, edit, or reject AI drafts before sending.</li>
        </ul>

        <h3>10.2 Account and data deletion</h3>
        <p>
          You may stop using the Service and request account or workspace
          deletion at any time through product settings (where available) or by
          contacting us. On deletion:
        </p>
        <ul>
          <li>
            we revoke Connected Account OAuth tokens (Google and Microsoft);
          </li>
          <li>
            Customer Data enters a soft-delete grace period of about{" "}
            <strong>30 days</strong>, then is hard-deleted or scrubbed from
            active systems; and
          </li>
          <li>
            backups expire according to provider rolling schedules.
          </li>
        </ul>

        <h3>10.3 Privacy rights (GDPR, UK GDPR, CCPA/CPRA, and similar)</h3>
        <p>
          Subject to verification and legal exceptions, you may have the right
          to:
        </p>
        <ul>
          <li>
            <strong>access</strong> personal data;
          </li>
          <li>
            <strong>correct</strong> inaccurate data;
          </li>
          <li>
            <strong>delete</strong> personal data;
          </li>
          <li>
            <strong>port</strong> data in a usable format;
          </li>
          <li>
            <strong>restrict</strong> or <strong>object</strong> to certain
            processing;
          </li>
          <li>
            <strong>withdraw consent</strong> where processing is consent-based;
            and
          </li>
          <li>
            for California residents: know, delete, correct, and opt out of
            sale/sharing (we do not sell/share as defined above), and not be
            discriminated against for exercising rights.
          </li>
        </ul>
        <p>
          <strong>How to submit a request:</strong> email{" "}
          <a href="mailto:privacy@tomosolutions.ai">privacy@tomosolutions.ai</a>{" "}
          (or support@tomosolutions.ai) with the subject line “Privacy Request”.
        </p>
        <ul>
          <li>
            If you are an <strong>end user</strong> of a customer workspace, we
            may redirect you to your organisation (the controller) for Customer
            Content requests, or act on their instructions.
          </li>
          <li>
            We aim to respond within statutory timelines (for example, about 30
            days under GDPR for many requests; CCPA timelines as applicable).
          </li>
        </ul>

        <h3>10.4 “Do Not Sell or Share”</h3>
        <p>
          We do not sell personal information or share it for cross-context
          behavioural advertising. If that changes, we will update this Policy
          and provide required opt-out mechanisms.
        </p>

        <h3>10.5 Marketing opt-out</h3>
        <p>
          You can unsubscribe from marketing emails via the link in those emails
          or by contacting us. Service/transactional messages are not marketing
          and may still be sent.
        </p>

        <h2>11. Cookies and similar technologies</h2>
        <p>We use cookies and similar technologies to:</p>
        <ul>
          <li>keep you signed in and secure sessions;</li>
          <li>remember preferences; and</li>
          <li>understand product and website usage (analytics).</li>
        </ul>
        <p>
          Where required, we request consent for non-essential cookies. You can
          control cookies through browser settings; some features may not work if
          essential cookies are blocked.
        </p>

        <h2>12. Children’s privacy</h2>
        <p>
          The Service is for business users and is not directed to children. We
          do not knowingly collect personal data from anyone under 16 (or higher
          age required in your jurisdiction). If you believe a minor’s data was
          provided, contact us and we will delete it.
        </p>

        <h2>13. Automated decision-making</h2>
        <p>
          TOMO uses automated processing to score, classify, and prioritise
          relationship signals and to generate drafts. These outputs are
          assistive. Material outbound actions require human approval. We do not
          use Customer Content for solely automated decisions that produce legal
          or similarly significant effects about individuals without human
          involvement, within the meaning of GDPR Article 22, as part of the core
          Service.
        </p>

        <h2>14. Changes to this Policy</h2>
        <p>
          We may update this Policy from time to time. The effective date and
          version will change when we do. Material changes will be communicated
          by email or in-product notice where appropriate. Continued use after
          the effective date means you acknowledge the updated Policy, except
          where law requires a different consent mechanism.
        </p>

        <h2>15. Contact and complaints</h2>
        <p>
          <strong>Tomo Solutions Inc.</strong>
        </p>
        <p>
          Address: 1 Ferry Building, Suite 201, San Francisco, CA 94111
        </p>
        <p>
          Privacy:{" "}
          <a href="mailto:privacy@tomosolutions.ai">privacy@tomosolutions.ai</a>
        </p>
        <p>
          Support:{" "}
          <a href="mailto:support@tomosolutions.ai">support@tomosolutions.ai</a>
        </p>
        <p>
          Website:{" "}
          <a href="https://tomosolutions.ai">https://tomosolutions.ai</a>
        </p>
        <p>
          For GDPR/UK GDPR matters you may also contact your organisation’s
          administrator if your data was provided through a customer workspace.
          You may have the right to lodge a complaint with a supervisory
          authority in your place of residence or work (for example an EU/EEA DPA
          or the UK ICO).
        </p>
        <p>
          If we designate an external Data Protection Officer or EU/UK
          representative, contact details will be published here or in your DPA
          when appointed.
        </p>

        <h2>16. Region-specific notices</h2>

        <h3>16.1 California (CCPA/CPRA)</h3>
        <p>
          Categories of personal information we collect track Sections 2 and 5
          (identifiers, commercial information, internet activity, professional
          information, and inferences used to personalise the Service). We
          collect this information for the business purposes in Section 3. We
          disclose personal information to service providers as described in
          Section 5. We do not sell personal information or share it for
          cross-context behavioural advertising. California residents may
          exercise rights via privacy@tomosolutions.ai. We will verify requests
          as required by law. Authorised agents may submit requests with proof of
          authorisation.
        </p>

        <h3>16.2 EEA / UK</h3>
        <p>
          Additional detail on lawful bases, transfers, retention, and
          processor/controller roles appears above. Customers requiring a signed
          DPA should contact privacy@tomosolutions.ai or support@tomosolutions.ai
          before enabling mailbox or CRM ingestion.
        </p>
      </div>
    </LegalChrome>
  );
}
