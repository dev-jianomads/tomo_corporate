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
      title="Terms & Conditions"
      metaAfterTitle={
        <>
          <p className="mt-4 text-[#4A5766]">Last updated: July 2026</p>
          <p className="mt-2 text-[#4A5766]">
            Entity: Tomo Solutions Inc., a Delaware corporation (“Tomo
            Solutions”, “we”, “us”, or “our”)
          </p>
          <p className="mt-1 text-[#4A5766]">
            Product: TOMO — AI for fundraising (“TOMO”, “Tomo”, or “the
            Service”)
          </p>
          <p className="mt-1 text-[#4A5766]">Contact: support@tomosolutions.ai</p>
        </>
      }
    >
      <div className={LEGAL_DOC_PROSE}>
        <p>
          These Terms &amp; Conditions (“Terms”) govern access to and use of the
          Service. By accessing or using the Service, creating an account, or
          clicking to accept these Terms, you agree to be bound by them. If you
          do not agree, do not use the Service.
        </p>
        <p>
          If you use the Service on behalf of an organisation, you represent that
          you have authority to bind that organisation, and “you” includes that
          organisation.
        </p>

        <h2>1. The Service</h2>

        <h3>1.1 What TOMO is</h3>
        <p>
          TOMO is an AI-assisted execution workspace for institutional
          fundraising and investor relations. Depending on your plan and enabled
          features, the Service may:
        </p>
        <ul>
          <li>connect to your email, calendar, and meeting tools;</li>
          <li>ingest pipeline or CRM data you import or connect;</li>
          <li>
            analyse relationship and engagement signals across those sources;
          </li>
          <li>surface priorities, reminders, and daily briefings;</li>
          <li>
            draft outbound messages, follow-ups, and related materials in your
            voice;
          </li>
          <li>
            support workflows, lists, relationship records, insights, and
            activity history; and
          </li>
          <li>
            deliver notifications in-product, by email, and (if you enable it)
            via Slack or similar channels.
          </li>
        </ul>
        <p>
          TOMO is designed to sit alongside your existing CRM and other systems
          of record. Unless we expressly agree otherwise in writing, your CRM
          (or equivalent) remains authoritative for compliance, legal, and audit
          records of commitments and investor documentation.
        </p>

        <h3>1.2 Human approval for outbound communications</h3>
        <p>
          <strong>
            Nothing is sent on your behalf without your explicit approval.
          </strong>{" "}
          Drafts, suggested follow-ups, scheduling proposals, and other outbound
          communications are presented for your review. You decide whether to
          approve, edit, skip, or discard them. TOMO does not auto-send investor
          or other external email.
        </p>
        <p>
          When you approve a send, the message is generally sent from your
          connected mailbox (for example, your Microsoft 365 or Google Workspace
          account), not from a Tomo-operated mailbox, unless a different delivery
          path is expressly configured and disclosed for a specific feature.
        </p>

        <h3>1.3 AI-generated content — important limitations</h3>
        <p>
          The Service uses machine learning and large language models to generate
          drafts, summaries, classifications, signals, and recommendations. You
          acknowledge that:
        </p>
        <ul>
          <li>
            AI output may be incomplete, inaccurate, outdated, or inappropriate
            for your situation;
          </li>
          <li>
            you are solely responsible for reviewing all drafts and actions
            before approving them;
          </li>
          <li>
            TOMO does <strong>not</strong> provide investment, legal, tax,
            accounting, regulatory, or fiduciary advice;
          </li>
          <li>
            TOMO does <strong>not</strong> guarantee fundraising outcomes,
            capital raised, LP conversions, response rates, or time saved; and
          </li>
          <li>
            metrics, signals, and “heating / cooling” style indicators are
            assistive analytics, not warranties of investor intent.
          </li>
        </ul>

        <h3>1.4 Changes to the Service</h3>
        <p>
          We may add, modify, or discontinue features at any time. Where a change
          materially reduces core paid functionality, we will provide reasonable
          notice where practicable. We may offer beta or early-access features
          that are provided “as is” and may change or end without notice.
        </p>

        <h3>1.5 Founding Circle and custom agreements</h3>
        <p>
          If you participate in a Founding Circle, pilot, or other custom
          commercial programme, a separate order form, pilot letter, or master
          services agreement may apply. In the event of conflict between that
          agreement and these Terms on commercial terms (fees, term, service
          levels, or special commitments), the signed agreement controls for
          those topics. These Terms still govern use of the Service unless
          expressly overridden.
        </p>

        <h2>2. Accounts, workspaces, and security</h2>

        <h3>2.1 Registration</h3>
        <p>
          You must provide accurate, complete, and current account information.
          You may sign in with email/password or supported identity providers
          (for example, Google or Microsoft), as offered.
        </p>

        <h3>2.2 Workspaces and teammates</h3>
        <p>
          The Service is organised around <strong>workspaces</strong> (teams).
          Members of a workspace may access shared fundraising data,
          integrations, drafts, and settings according to the permissions model
          then in effect. In early releases, workspace members may have
          substantially equivalent access; role-based restriction may be
          introduced later. You are responsible for:
        </p>
        <ul>
          <li>who you invite to your workspace;</li>
          <li>their compliance with these Terms; and</li>
          <li>activity under your workspace accounts.</li>
        </ul>

        <h3>2.3 Credentials and OAuth grants</h3>
        <p>
          You are responsible for safeguarding login credentials and for OAuth
          (or similar) grants you authorise to email, calendar, CRM, Slack, or
          other data sources. You must notify us promptly of any suspected
          unauthorised access. We are not responsible for unauthorised access
          resulting from your failure to maintain security of credentials,
          devices, or upstream accounts.
        </p>

        <h3>2.4 Age and eligibility</h3>
        <p>
          The Service is for business users. You must be at least 18 years old
          (or the age of majority in your jurisdiction) and able to form a
          binding contract. The Service is not directed to consumers acting in a
          personal capacity for non-business use where restricted by law.
        </p>

        <h2>3. Acceptable use</h2>

        <h3>3.1 Lawful use only</h3>
        <p>
          You may use the Service only for lawful purposes and in accordance with
          these Terms and applicable law (including securities, privacy,
          anti-spam, and export laws).
        </p>

        <h3>3.2 Prohibited conduct</h3>
        <p>You agree not to:</p>
        <ul>
          <li>
            interfere with or disrupt the Service, its infrastructure, or other
            customers;
          </li>
          <li>
            attempt to gain unauthorised access to systems, accounts, or data;
          </li>
          <li>
            reverse-engineer, decompile, or create derivative works of the
            Service except to the extent such restriction is prohibited by law;
          </li>
          <li>
            use scrapers, bots, or automated access except through documented
            APIs we expressly make available to you;
          </li>
          <li>
            use the Service to send spam, unlawful, deceptive, or harassing
            communications;
          </li>
          <li>upload or process data you do not have rights to use;</li>
          <li>
            circumvent usage limits, safety controls, approval gates, or billing
            mechanisms;
          </li>
          <li>
            misrepresent that AI-generated content was solely human-authored
            where disclosure is required; or
          </li>
          <li>
            use the Service to build a competing product by systematically
            extracting non-public features, prompts, or datasets.
          </li>
        </ul>

        <h3>3.3 Suspension</h3>
        <p>
          We may suspend or terminate access for misuse, security risk,
          non-payment, legal obligation, or material breach of these Terms.
        </p>

        <h2>4. Customer content and data licence</h2>

        <h3>4.1 Your ownership</h3>
        <p>
          You (and your licensors) retain ownership of content and data you
          submit to or sync into the Service, including emails, calendar events,
          CRM/pipeline records, transcripts, notes, drafts you create or edit,
          materials you upload, and workspace configuration (“Customer Content”).
        </p>

        <h3>4.2 Licence to Tomo Solutions</h3>
        <p>
          You grant Tomo Solutions a worldwide, non-exclusive licence to host,
          store, process, transmit, display, and create derivative works from
          Customer Content{" "}
          <strong>
            solely as needed to provide, secure, maintain, and support the
            Service
          </strong>
          , including:
        </p>
        <ul>
          <li>syncing and indexing connected data sources;</li>
          <li>generating signals, metrics, reminders, and briefs;</li>
          <li>generating and storing drafts for your approval;</li>
          <li>running AI inference through our subprocessors;</li>
          <li>delivering notifications you enable; and</li>
          <li>
            creating backups, logs, and security/abuse monitoring artefacts.
          </li>
        </ul>
        <p>
          This licence ends when Customer Content is deleted from our systems in
          accordance with our Privacy Policy and retention practices, except for
          copies retained as required by law or for legitimate residual purposes
          described in the Privacy Policy (for example, scrubbed audit records).
        </p>

        <h3>4.3 Your responsibilities for Customer Content</h3>
        <p>
          You represent that you have all rights, consents, and lawful bases
          needed to provide Customer Content to us and to instruct us to process
          it (including personal data about limited partners, prospects,
          colleagues, and other contacts). You are responsible for the accuracy
          of data you enter and for how you use outputs in your fundraising
          activities.
        </p>

        <h3>4.4 Feedback</h3>
        <p>
          If you provide feedback or suggestions about the Service, we may use
          them without restriction or obligation to you.
        </p>

        <h2>5. Privacy, training, and data protection</h2>

        <h3>5.1 Privacy Policy</h3>
        <p>
          Our <Link to="/privacy">Privacy Policy</Link> explains how we collect
          and process personal data and forms part of these Terms.
        </p>

        <h3>5.2 No training on your Customer Content (current practice)</h3>
        <p>
          <strong>
            We do not use your Customer Content to train our foundation models or
            to improve generalised models that serve other customers
          </strong>
          , except:
        </p>
        <ul>
          <li>
            where you give explicit written consent and (if required) a separate
            data processing addendum for a future programme; or
          </li>
          <li>
            for{" "}
            <strong>
              tone calibration and personalisation for your own user/workspace
            </strong>{" "}
            — limited profiles or embeddings derived from your sent-mail and
            related writing samples so drafts sound like you. These
            personalisation artefacts are used to provide the Service to you and
            are not used to train foundation models for other customers.
          </li>
        </ul>
        <p>
          We configure our LLM providers for{" "}
          <strong>zero retention of prompts and responses</strong> where that
          option is available and contractually supported, as further described
          in the Privacy Policy.
        </p>

        <h3>5.3 Data processing agreement</h3>
        <p>
          Where required by law (for example, GDPR) or by your institutional
          diligence, we will enter into a Data Processing Agreement (“DPA”). If a
          DPA is executed, it governs processing of personal data to the extent
          of conflict with these Terms on that subject.
        </p>

        <h3>5.4 Confidentiality</h3>
        <p>
          We will treat Customer Content as confidential and use it only as
          permitted by these Terms and the Privacy Policy, except for information
          that is or becomes public through no fault of ours, was independently
          developed, or was rightfully received from a third party without duty
          of confidentiality.
        </p>

        <h2>6. Third-party services and integrations</h2>

        <h3>6.1 Optional integrations</h3>
        <p>
          The Service may integrate with third-party providers you choose to
          connect, which may include (as available over time):
        </p>
        <ul>
          <li>
            Microsoft 365 / Outlook (mail, calendar, contacts, Teams
            meetings/transcripts);
          </li>
          <li>Google Workspace (Gmail, Calendar, Contacts, Meet);</li>
          <li>
            CRM or pipeline sources via file import (CSV/Excel and similar) and,
            where offered, native read connectors (for example Affinity or
            Backstop);
          </li>
          <li>Slack (for notifications you enable);</li>
          <li>payment processors (for example Stripe); and</li>
          <li>
            other providers listed in our Privacy Policy or product
            documentation.
          </li>
        </ul>
        <p>
          Availability of a connector depends on product roadmap, your licence
          with the third party, and successful OAuth or credential setup.
          Marketing references to future or planned connectors do not create a
          contractual obligation to ship them on a particular date.
        </p>

        <h3>6.2 Third-party terms</h3>
        <p>
          Your use of third-party services is subject to those providers’ terms
          and privacy policies. Tomo Solutions is not responsible for the
          availability, accuracy, security, or acts of third-party services. If a
          provider changes APIs, scopes, or pricing, related TOMO features may
          degrade or require reconfiguration.
        </p>

        <h3>6.3 Permissions you grant upstream</h3>
        <p>
          Connecting a data source requires you to grant permissions via that
          provider’s consent screen. You can disconnect integrations in product
          settings (where available). Disconnecting stops new ingestion;
          historical data already processed is retained until deleted under our
          retention and deletion practices unless you request earlier purge as
          described in the Privacy Policy.
        </p>

        <h2>7. Fees and payment</h2>

        <h3>7.1 Plans and pricing</h3>
        <p>
          Certain features require payment. Prices, billing cycles, taxes, and
          refund rules are as stated on our website, checkout flow, order form,
          or invoice at the time of purchase.
        </p>

        <h3>7.2 Authorisation</h3>
        <p>
          If you subscribe to a paid plan, you authorise us (and our payment
          processor) to charge the selected payment method on a recurring basis
          until you cancel. You must keep billing information current.
        </p>

        <h3>7.3 Cancellation</h3>
        <p>
          You may cancel as described in account settings or your order form.
          Unless stated otherwise, cancellation takes effect at the end of the
          then-current billing period. Fees already charged are non-refundable
          except where required by law or expressly stated in writing.
        </p>

        <h3>7.4 Trials and special commercial terms</h3>
        <p>
          Any trial, pilot, “value guarantee,” Founding Circle pricing, or
          introduction-only commercial arrangement applies only as set out in the
          applicable order form or written offer. Public website marketing
          language does not, by itself, create a refund or termination right
          beyond what is stated in these Terms or your signed agreement.
        </p>

        <h3>7.5 Late payment</h3>
        <p>
          We may suspend the Service for overdue amounts after notice. You remain
          responsible for fees incurred before suspension or termination.
        </p>

        <h2>8. Intellectual property</h2>

        <h3>8.1 Our IP</h3>
        <p>
          The Service — including software, interfaces, workflows, models we
          provide (excluding Customer Content), documentation, trademarks, and
          branding — is owned by Tomo Solutions or its licensors. These Terms do
          not transfer ownership to you.
        </p>

        <h3>8.2 Licence to you</h3>
        <p>
          Subject to these Terms and timely payment of applicable fees, we grant
          you a limited, non-exclusive, non-transferable, non-sublicensable,
          revocable licence to access and use the Service for your internal
          business fundraising and IR operations.
        </p>

        <h3>8.3 Restrictions</h3>
        <p>
          You may not copy, modify, distribute, sell, lease, or publicly display
          the Service except as allowed by these Terms or written permission from
          us.
        </p>

        <h2>9. Support and institutional diligence</h2>
        <p>
          We provide support via the channels we publish (for example, email at
          support@tomosolutions.ai). Founding Circle or enterprise customers may
          receive additional onboarding or review sessions as agreed in writing.
        </p>
        <p>
          For security diligence, we may make documentation available under NDA
          (for example, architecture summaries, control descriptions, or
          attestation reports when available). SOC 2, CASA, or similar
          attestations are pursued according to our compliance roadmap and are
          not automatically warranted as complete on any given date unless
          confirmed in writing.
        </p>

        <h2>10. Disclaimers</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SERVICE IS PROVIDED “AS IS”
          AND “AS AVAILABLE,” WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS,
          IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY,
          FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
        </p>
        <p>
          We do not warrant that the Service will be uninterrupted, error-free,
          or free of harmful components, or that defects will be corrected. We do
          not warrant that integrations will remain available on unchanged terms
          from third parties.
        </p>
        <p>
          Some jurisdictions do not allow certain disclaimers; in those
          jurisdictions, disclaimers apply to the fullest extent permitted.
        </p>

        <h2>11. Limitation of liability</h2>
        <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
        <ul>
          <li>
            Tomo Solutions and its officers, directors, employees, and agents
            will not be liable for any indirect, incidental, special,
            consequential, exemplary, or punitive damages, or for lost profits,
            lost revenue, lost capital commitments, loss of data, business
            interruption, or cost of substitute services, even if advised of the
            possibility of such damages; and
          </li>
          <li>
            Tomo Solutions’ total aggregate liability arising out of or relating
            to the Service or these Terms will not exceed the amounts you paid to
            Tomo Solutions for the Service in the twelve (12) months preceding
            the claim.
          </li>
        </ul>
        <p>
          The above limitations apply regardless of theory of liability
          (contract, tort, including negligence, strict liability, or otherwise)
          and form an essential basis of the bargain. Some jurisdictions do not
          allow certain limitations; in those cases, our liability is limited to
          the maximum extent permitted by law.
        </p>

        <h2>12. Indemnification</h2>
        <p>
          You will indemnify, defend, and hold harmless Tomo Solutions and its
          officers, directors, employees, and agents from and against any claims,
          damages, losses, liabilities, costs, and expenses (including reasonable
          legal fees) arising out of or related to:
        </p>
        <ul>
          <li>your Customer Content;</li>
          <li>
            your use of the Service in violation of these Terms or law;
          </li>
          <li>
            your communications with investors or other third parties (including
            messages you approve and send);
          </li>
          <li>
            disputes between you and your investors, limited partners, employees,
            or counterparties; or
          </li>
          <li>
            your infringement or violation of third-party rights.
          </li>
        </ul>

        <h2>13. Term and termination</h2>

        <h3>13.1 Term</h3>
        <p>
          These Terms apply from your first access or acceptance until
          terminated.
        </p>

        <h3>13.2 Termination by you</h3>
        <p>
          You may stop using the Service at any time and may request account or
          workspace closure through product settings or by contacting
          support@tomosolutions.ai.
        </p>

        <h3>13.3 Termination by us</h3>
        <p>
          We may suspend or terminate access immediately for material breach,
          unlawful use, security risk, or as otherwise stated in these Terms. We
          may also terminate for convenience with reasonable notice if we
          discontinue the Service generally.
        </p>

        <h3>13.4 Effect of termination</h3>
        <p>
          Upon termination, your licence to use the Service ends. Provisions that
          by their nature should survive — including ownership, Customer Content
          licence for residual retention/deletion wind-down, confidentiality,
          disclaimers, limitations of liability, indemnities, and governing law —
          survive termination. Deletion of Customer Content follows the Privacy
          Policy (including any soft-delete grace period).
        </p>

        <h2>14. Governing law and disputes</h2>

        <h3>14.1 Governing law</h3>
        <p>
          These Terms are governed by the laws of the State of Delaware, USA,
          without regard to conflict-of-law principles.
        </p>

        <h3>14.2 Informal resolution</h3>
        <p>
          Before filing a claim, either party must attempt in good faith to
          resolve the dispute informally by written notice to the other party. If
          not resolved within thirty (30) days of notice, either party may
          proceed as below.
        </p>

        <h3>14.3 Venue</h3>
        <p>
          Subject to mandatory consumer or data-protection rights that cannot be
          waived, exclusive jurisdiction and venue lie in the state or federal
          courts located in Delaware, and each party consents to personal
          jurisdiction there.
        </p>

        <h2>15. Miscellaneous</h2>
        <p>
          <strong>15.1 Entire agreement.</strong> These Terms, the Privacy
          Policy, any DPA, and any applicable order form or signed commercial
          agreement constitute the entire agreement between you and Tomo
          Solutions regarding the Service and supersede prior or contemporaneous
          understandings on that subject.
        </p>
        <p>
          <strong>15.2 Conflicts.</strong> Order of precedence for conflicts:
          (1) signed order form / MSA commercial terms; (2) DPA (for
          personal-data processing); (3) these Terms; (4) Privacy Policy (for
          privacy disclosures); (5) product documentation.
        </p>
        <p>
          <strong>15.3 Severability.</strong> If any provision is unenforceable,
          the remainder remains in effect.
        </p>
        <p>
          <strong>15.4 Force majeure.</strong> We are not liable for delays or
          failures caused by events beyond reasonable control, including outages
          of cloud or identity providers, network failures, labour disputes,
          pandemics, natural disasters, war, or government action.
        </p>
        <p>
          <strong>15.5 Assignment.</strong> You may not assign these Terms
          without our prior written consent. We may assign them in connection
          with a merger, acquisition, corporate reorganisation, or sale of
          assets.
        </p>
        <p>
          <strong>15.6 No waiver.</strong> Failure to enforce a provision is not
          a waiver.
        </p>
        <p>
          <strong>15.7 Notices.</strong> We may notify you via email, in-product
          message, or posting on our website. Legal notices to us should be sent
          to support@tomosolutions.ai with a copy retained for your records,
          unless we designate another address.
        </p>
        <p>
          <strong>15.8 Export and sanctions.</strong> You must comply with
          applicable export control and sanctions laws and may not use the
          Service if you are prohibited from receiving US or other applicable
          services under those laws.
        </p>
        <p>
          <strong>15.9 Language.</strong> These Terms are in English. Any
          translation is for convenience only.
        </p>
        <p>
          <strong>15.10 Changes to Terms.</strong> We may update these Terms from
          time to time. The “Last updated” date will change when we do. Material
          changes will be notified by email or in-product notice where
          appropriate. Continued use after the effective date constitutes
          acceptance of the updated Terms, except where applicable law requires a
          different method of acceptance.
        </p>

        <h2>Contact</h2>
        <p>
          <strong>Tomo Solutions Inc.</strong>
        </p>
        <p>Email: support@tomosolutions.ai</p>
        <p>
          Website:{" "}
          <a href="https://tomosolutions.ai">https://tomosolutions.ai</a>
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
          <p className="mt-4 text-[#4A5766]">Last updated: July 2026</p>
          <p className="mt-2 text-[#4A5766]">
            Entity: Tomo Solutions Inc., a Delaware corporation (“Tomo
            Solutions”, “we”, “us”, or “our”)
          </p>
          <p className="mt-1 text-[#4A5766]">
            Product: TOMO — AI for fundraising (“TOMO”, “Tomo”, or “the
            Service”)
          </p>
          <p className="mt-1 text-[#4A5766]">Contact: support@tomosolutions.ai</p>
        </>
      }
    >
      <div className={LEGAL_DOC_PROSE}>
        <p>
          This Privacy Policy explains how we collect, use, disclose, retain, and
          protect personal information in connection with the Service and our
          websites (including tomosolutions.ai). It should be read together with
          our <Link to="/terms">Terms &amp; Conditions</Link>.
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
            correspondence).
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
          <li>
            materials you upload for drafting or workflow context.
          </li>
        </ul>

        <h3>2.4 Product-generated data</h3>
        <ul>
          <li>
            Drafts, summaries, classifications, signal outputs, reminders, daily
            briefs, workflow configuration, and action logs.
          </li>
          <li>
            Tone-calibration / personalisation artefacts derived from your
            writing samples so drafts can match your voice (see Section 5).
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

        <h2>5. Artificial intelligence, training, and model providers</h2>

        <h3>5.1 How AI is used</h3>
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

        <h3>5.2 No training on customer data for shared models</h3>
        <p>
          <strong>
            We do not use Customer Content to train foundation models or to
            improve generalised models that serve other customers.
          </strong>
        </p>
        <p>
          Any future programme that would use Customer Content for shared model
          training would require <strong>explicit consent</strong> and an updated
          DPA or addendum before it begins.
        </p>

        <h3>5.3 Tone calibration (personalisation for you only)</h3>
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

        <h3>5.4 Zero retention at the LLM provider (where available)</h3>
        <p>
          We configure supported LLM providers for{" "}
          <strong>zero data retention</strong> of prompts and responses (process
          in-memory / no training use under the provider’s enterprise terms),
          subject to the provider’s then-current documentation and our
          contractual terms with them. Operational API metadata (for example
          request IDs, token counts) may still be logged by providers or by us
          for reliability and billing.
        </p>

        <h3>5.5 Important clarification about storage</h3>
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

        <h2>6. When we share personal data</h2>
        <p>
          We do not sell personal information for money. We do not “sell” or
          “share” personal information for cross-context behavioural advertising
          as those terms are defined under the CCPA/CPRA, and we do not use
          Customer Content for advertising networks.
        </p>
        <p>We disclose personal data only as follows:</p>

        <h3>6.1 Sub-processors / service providers</h3>
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

        <h3>6.2 Integrations you enable</h3>
        <p>
          When you connect a third party, data flows according to the permissions
          you grant that party.
        </p>

        <h3>6.3 Workspace teammates and authorised users</h3>
        <p>
          Members of your workspace can access shared Customer Content according
          to product permissions.
        </p>

        <h3>6.4 Professional advisors and corporate transactions</h3>
        <p>
          Advisors under confidentiality obligations; or parties to a merger,
          acquisition, financing, or sale of assets, subject to appropriate
          protections.
        </p>

        <h3>6.5 Legal and safety</h3>
        <p>
          Where required by law, regulation, legal process, or to protect rights,
          safety, and security of Tomo Solutions, our users, or others.
        </p>

        <h3>6.6 Staff support access</h3>
        <p>
          In early customer programmes, authorised Tomo Solutions personnel may
          access workspace data as needed for onboarding and support, under
          internal access controls and logging. In-product “login as customer”
          impersonation is not a standard V1 feature; support is typically
          provided with your participation (for example screen share) plus
          limited backend operational access when necessary.
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

        <h2>10. Your rights and choices</h2>

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

        <h3>10.2 Privacy rights (GDPR, UK GDPR, CCPA/CPRA, and similar)</h3>
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
          <strong>How to submit a request:</strong> email
          support@tomosolutions.ai with the subject line “Privacy Request”.
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

        <h3>10.3 “Do Not Sell or Share”</h3>
        <p>
          We do not sell personal information or share it for cross-context
          behavioural advertising. If that changes, we will update this Policy
          and provide required opt-out mechanisms.
        </p>

        <h3>10.4 Marketing opt-out</h3>
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
          We may update this Policy from time to time. The “Last updated” date
          will change when we do. Material changes will be communicated by email
          or in-product notice where appropriate. Continued use after the
          effective date means you acknowledge the updated Policy, except where
          law requires a different consent mechanism.
        </p>

        <h2>15. Contact and complaints</h2>
        <p>
          <strong>Tomo Solutions Inc.</strong>
        </p>
        <p>Email: support@tomosolutions.ai</p>
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
          Categories of personal information we collect track Sections 2 and 6
          (identifiers, commercial information, internet activity, professional
          information, and inferences used to personalise the Service). We
          collect this information for the business purposes in Section 3. We
          disclose personal information to service providers as described in
          Section 6. We do not sell personal information or share it for
          cross-context behavioural advertising. California residents may
          exercise rights via support@tomosolutions.ai. We will verify requests
          as required by law. Authorised agents may submit requests with proof of
          authorisation.
        </p>

        <h3>16.2 EEA / UK</h3>
        <p>
          Additional detail on lawful bases, transfers, retention, and
          processor/controller roles appears above. Customers requiring a signed
          DPA should contact support@tomosolutions.ai before enabling mailbox or
          CRM ingestion.
        </p>
      </div>
    </LegalChrome>
  );
}
