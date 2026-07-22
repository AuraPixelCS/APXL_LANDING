import Link from "next/link";
import LegalLayout, {
  Callout,
  H2,
  LI,
  P,
  UL,
  type LegalSection,
} from "@/components/legal/LegalLayout";

/**
 * Terms of Service.
 *
 * The commercial terms in sections 5 and 12 (payment, deposit, interest,
 * liability cap) are the defaults recommended in the compliance pack. They are
 * plausible for a studio of this size but they are NOT confirmed against
 * AuraPixel's actual contracts — confirm before relying on them.
 */

const UPDATED = "21 July 2026";

const SECTIONS: LegalSection[] = [
  { id: "terms", title: "These terms" },
  { id: "who", title: "Who we are" },
  { id: "using", title: "Using the site" },
  { id: "enquiries", title: "Enquiries and proposals" },
  { id: "fees", title: "Services, fees and payment" },
  { id: "your-obligations", title: "Your responsibilities" },
  { id: "ip", title: "Intellectual property" },
  { id: "results", title: "Results and third-party platforms" },
  { id: "events", title: "Event registration and passes" },
  { id: "confidentiality", title: "Confidentiality" },
  { id: "privacy", title: "Privacy" },
  { id: "liability", title: "Limitation of liability" },
  { id: "termination", title: "Termination" },
  { id: "force-majeure", title: "Force majeure" },
  { id: "general", title: "General" },
  { id: "law", title: "Governing law" },
  { id: "contact", title: "Contact" },
];

export default function Terms() {
  return (
    <LegalLayout
      title="Terms of Service"
      metaTitle="Terms of Service — AuraPixel"
      description="The terms governing use of aurapixel.live, our event registration platform, and our provision of creative and marketing services in Malaysia."
      path="/terms"
      updated={UPDATED}
      intro="The terms governing your use of our site, our event registration platform, and the services we provide."
      sections={SECTIONS}
    >
      <H2 id="terms">1. These terms</H2>
      <P>
        These terms govern your use of aurapixel.live and aurapixel.live/rsvp
        (the &ldquo;Site&rdquo;) and, where applicable, our provision of
        services to you. By using the Site or registering for an event through
        it, you accept these terms. If you do not accept them, please do not use
        the Site.
      </P>
      <P>
        Where we have signed a separate written agreement, statement of work or
        proposal with you,{" "}
        <strong className="text-white">that document prevails</strong> over
        these terms to the extent of any inconsistency.
      </P>

      <H2 id="who">2. Who we are</H2>
      <P>
        <strong className="text-white">
          Aura Pixel Creative Studio Sdn. Bhd.
        </strong>{" "}
        (Registration No. 202601009966 (1672064-D)) is a creative and marketing
        studio registered in Malaysia, with its registered office at 11-07, The
        Boulevard Office, Lingkaran Syed Putra, Mid Valley City, 59200 Kuala
        Lumpur, Malaysia.
      </P>
      <P>
        Contact:{" "}
        <a
          href="mailto:info@aurapixel.live"
          className="text-primary transition hover:text-primary/80"
        >
          info@aurapixel.live
        </a>{" "}
        ·{" "}
        <a
          href="tel:+60102841290"
          className="text-primary transition hover:text-primary/80"
        >
          +6010-284 1290
        </a>
      </P>

      <H2 id="using">3. Using the site</H2>
      <P>You may use the Site for lawful purposes only. You must not:</P>
      <UL>
        <LI>interfere with or disrupt the Site or its infrastructure;</LI>
        <LI>
          attempt to gain unauthorised access to any part of the Site or to any
          account;
        </LI>
        <LI>
          submit false or misleading information, or another person&rsquo;s data
          without their authority;
        </LI>
        <LI>scrape or harvest data from the Site;</LI>
        <LI>introduce malicious code; or</LI>
        <LI>use the Site to send unsolicited communications.</LI>
      </UL>
      <P>
        We may suspend or withdraw access to the Site at any time without
        notice. We do not guarantee that the Site will always be available or
        uninterrupted.
      </P>

      <H2 id="enquiries">4. Enquiries and proposals</H2>
      <P>
        Information on the Site — including service descriptions, indicative
        results and any figures given in case studies — is provided for general
        information and does not constitute an offer.{" "}
        <strong className="text-white">
          Nothing on the Site is a quotation or a binding price.
        </strong>{" "}
        Submitting an enquiry does not create a contract. A contract arises only
        when we issue a written proposal or statement of work and you accept it
        in writing.
      </P>

      <H2 id="fees">5. Services, fees and payment</H2>
      <P>
        Scope, deliverables, timelines and fees are set out in the applicable
        proposal or statement of work. Unless that document says otherwise:
      </P>
      <UL>
        <LI>
          fees are quoted in Malaysian Ringgit and are{" "}
          exclusive of applicable taxes, which will be added
          where chargeable;
        </LI>
        <LI>
          invoices are payable within 14 days of the invoice
          date;
        </LI>
        <LI>
          we may require a deposit of 50% before work begins,
          which is non-refundable once work has commenced;
        </LI>
        <LI>
          third-party costs — media and advertising spend, talent fees, venue
          hire, licensed stock and software subscriptions — are billed
          separately at cost and are your responsibility;
        </LI>
        <LI>
          we may charge interest of 1.5% per month on overdue
          amounts, and may suspend work while an invoice remains unpaid;
        </LI>
        <LI>
          retainers are billed monthly in advance, and either party may
          terminate a retainer on 30 days&rsquo; written notice.
        </LI>
      </UL>

      <H2 id="your-obligations">6. Your responsibilities</H2>
      <P>
        To deliver on time we depend on you. You agree to provide materials,
        approvals, access and feedback promptly, and to nominate a single point
        of contact authorised to approve work. Delays in your approvals shift
        our delivery dates accordingly.
      </P>
      <P>
        You warrant that any material you supply to us — logos, images, copy,
        music, footage, trade marks or customer data — is either owned by you or
        properly licensed, and that our agreed use of it will not infringe any
        third party&rsquo;s rights or breach any law.{" "}
        <strong className="text-white">
          You agree to indemnify us against any claim arising from material you
          supply.
        </strong>
      </P>

      <H2 id="ip">7. Intellectual property</H2>
      <P>
        All content on the Site — including text, graphics, logos, the AuraPixel
        name and marks, photography, video and code — belongs to us or our
        licensors and is protected by law. You may not reproduce or reuse it
        without our written permission.
      </P>
      <P>
        For commissioned work:{" "}
        <strong className="text-white">
          on full payment of all sums due
        </strong>
        , we assign to you the intellectual property rights in the final
        deliverables produced specifically for you. Until payment in full we
        retain all rights, and any use of the deliverables is unlicensed.
      </P>
      <P>We retain ownership of:</P>
      <UL>
        <LI>
          our pre-existing materials, tools, templates, frameworks and know-how;
        </LI>
        <LI>
          working files, raw footage, project files and unused concepts, unless
          expressly purchased; and
        </LI>
        <LI>
          any third-party assets, which remain subject to their own licences.
        </LI>
      </UL>
      <Callout title="Portfolio rights">
        Unless you tell us otherwise in writing, we may display completed work —
        including your name and logo — in our portfolio, on our website, in our
        social media and in pitches. If confidentiality matters to you, tell us
        before the engagement begins.
      </Callout>

      <H2 id="results">8. Results and third-party platforms</H2>
      <P>
        Marketing outcomes depend on factors outside our control, including
        market conditions, your pricing and offer, your sales follow-up, and the
        policies and algorithms of third-party platforms. Any figures we quote
        from previous campaigns are historical examples,{" "}
        <strong className="text-white">
          not a forecast or a guarantee of your results
        </strong>
        . We do not warrant any particular number of leads, cost per lead,
        reach, ranking or conversion rate unless a specific written guarantee is
        given in a signed statement of work.
      </P>
      <P>
        We are not responsible for the acts or omissions of third-party
        platforms — including Meta, Google, TikTok and LinkedIn — or for account
        suspensions, policy changes, ad disapprovals, pricing changes or service
        outages on those platforms.
      </P>

      <H2 id="events">9. Event registration and passes</H2>
      <P>
        These terms apply where you register for an event through
        aurapixel.live/rsvp:
      </P>
      <UL>
        <LI>
          We operate the registration platform on behalf of the{" "}
          <strong className="text-white">event organiser</strong>. Where we are
          not the organiser, the event itself — its content, conduct,
          cancellation and any admission decision — is the organiser&rsquo;s
          responsibility.
        </LI>
        <LI>
          Registration is a request to attend and is{" "}
          <strong className="text-white">
            not confirmed until we issue your pass
          </strong>
          . Places may be limited and the organiser may decline or revoke a
          registration.
        </LI>
        <LI>
          Your QR pass is{" "}
          <strong className="text-white">
            personal to you and must not be shared, forwarded, resold or
            published
          </strong>
          . Anyone holding your pass link can view your registration details and
          may be admitted in your place. Passes are valid only within the stated
          time window.
        </LI>
        <LI>
          You must register your guest (&ldquo;+1&rdquo;) in advance, and you
          confirm you have their agreement to share their name with us.
        </LI>
        <LI>
          Please tell us as soon as possible if you can no longer attend, so
          your place can be reallocated.
        </LI>
        <LI>
          Events may be photographed, filmed or livestreamed by the organiser.
          Where this is planned you will be told at registration or on arrival.
          Requests not to be filmed should be directed to the organiser.
        </LI>
        <LI>
          The organiser may change the date, venue, programme or speakers, or
          cancel the event. We are not liable for your travel, accommodation or
          other costs if this happens.
        </LI>
        <LI>
          You must comply with the venue&rsquo;s rules and any security or
          safety instruction, and may be refused entry or removed for failing to
          do so.
        </LI>
      </UL>

      <H2 id="confidentiality">10. Confidentiality</H2>
      <P>
        Each party will keep the other&rsquo;s confidential information
        confidential, use it only for the purposes of the engagement, and
        protect it with at least reasonable care. This does not apply to
        information that is public through no fault of the receiving party, was
        already lawfully known, or must be disclosed by law.
      </P>

      <H2 id="privacy">11. Privacy</H2>
      <P>
        Our handling of personal data is governed by our{" "}
        <Link
          href="/privacy"
          className="text-primary transition hover:text-primary/80"
        >
          Privacy Policy
        </Link>
        , which forms part of these terms.
      </P>

      <H2 id="liability">12. Limitation of liability</H2>
      <P>
        Nothing in these terms excludes or limits liability for death or
        personal injury caused by negligence, for fraud or fraudulent
        misrepresentation, or for any liability that cannot lawfully be
        excluded.
      </P>
      <P>Subject to that, we are not liable for:</P>
      <UL>
        <LI>
          loss of profit, revenue, business, goodwill, anticipated savings or
          opportunity;
        </LI>
        <LI>loss or corruption of data; or</LI>
        <LI>any indirect or consequential loss,</LI>
      </UL>
      <P>in each case however arising.</P>
      <P>
        Subject to the above,{" "}
        <strong className="text-white">
          our total aggregate liability arising out of or in connection with an
          engagement is limited to the total fees paid by you to us under that
          engagement in the 12 months preceding the event giving
          rise to the claim
        </strong>
        . In relation to use of the Site where no fees have been paid, our total
        liability is limited to RM 500.
      </P>

      <H2 id="termination">13. Termination</H2>
      <P>
        Either party may terminate an engagement on 30 days&rsquo;
        written notice, or immediately if the other party commits a material
        breach that is not remedied within 14 days of written
        notice, or becomes insolvent. On termination you must pay for all work
        performed and all third-party commitments incurred up to the termination
        date.
      </P>

      <H2 id="force-majeure">14. Force majeure</H2>
      <P>
        Neither party is liable for failure or delay caused by events beyond its
        reasonable control, including natural disaster, epidemic, war, civil
        unrest, government action, strike, utility or telecommunications
        failure, or failure of a third-party platform.
      </P>

      <H2 id="general">15. General</H2>
      <P>
        We may update these terms from time to time; the current version is
        always at aurapixel.live/terms. Continued use of the Site after a change
        constitutes acceptance. You may not assign your rights without our
        written consent. If any provision is found unenforceable, the remainder
        continues in force. No failure to enforce a right waives it. These
        terms, together with any signed proposal, constitute the entire
        agreement between us. A person who is not a party has no right to
        enforce these terms.
      </P>

      <H2 id="law">16. Governing law and jurisdiction</H2>
      <P>
        These terms are governed by the laws of{" "}
        <strong className="text-white">Malaysia</strong>. The parties submit to
        the exclusive jurisdiction of the courts of{" "}
        <strong className="text-white">Kuala Lumpur, Malaysia</strong>.
      </P>

      <H2 id="contact">17. Contact</H2>
      <P>
        <strong className="text-white">
          Aura Pixel Creative Studio Sdn. Bhd.
        </strong>{" "}
        (Registration No. 202601009966 (1672064-D))
        <br />
        11-07, The Boulevard Office, Lingkaran Syed Putra,
        <br />
        Mid Valley City, 59200 Kuala Lumpur, Malaysia
        <br />
        <a
          href="mailto:info@aurapixel.live"
          className="text-primary transition hover:text-primary/80"
        >
          info@aurapixel.live
        </a>{" "}
        ·{" "}
        <a
          href="tel:+60102841290"
          className="text-primary transition hover:text-primary/80"
        >
          +6010-284 1290
        </a>
      </P>
    </LegalLayout>
  );
}
