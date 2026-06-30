import { Helmet } from "react-helmet-async";
import { SITE_NAME, SITE_URL, OG_IMAGE } from "@/lib/site-config";
import { Mail } from "lucide-react";

const CONTACT_EMAIL = "globalbridge.learning.ca@gmail.com";
const LAST_UPDATED = "June 29, 2026";

type Section = {
  title: string;
  body: React.ReactNode;
};

const SECTIONS: Section[] = [
  {
    title: "Information We Collect",
    body: (
      <>
        <p>When you use the contact form on our website, we collect:</p>
        <ul>
          <li>Your name</li>
          <li>Your email address</li>
          <li>The message you submit</li>
        </ul>
        <p>
          If you choose to donate, you'll be directed to contact us via Instagram DM or email
          &mdash; we do not collect payment information directly through this site.
        </p>
        <p>
          We do not use tracking cookies, analytics, or third-party advertising tools at this time.
        </p>
      </>
    ),
  },
  {
    title: "How We Use Your Information",
    body: (
      <>
        <p>We use the information submitted through the contact form solely to:</p>
        <ul>
          <li>Respond to your inquiry</li>
          <li>
            Follow up regarding tutoring, volunteering, or partnership opportunities you've
            expressed interest in
          </li>
        </ul>
        <p>
          We do not sell, rent, or share your information with third parties for marketing purposes.
        </p>
      </>
    ),
  },
  {
    title: "Children's Privacy",
    body: (
      <>
        <p>
          Global Bridge serves students of all ages, including children. We do not knowingly
          collect personal information directly from children without the involvement of a parent
          or guardian. If a parent or guardian believes their child has submitted personal
          information to us without consent, please contact us using the information below and we
          will delete it.
        </p>
        <p>
          We encourage parents and guardians to supervise their children's online activity and to
          reach out to us directly, rather than have their child submit information independently.
        </p>
      </>
    ),
  },
  {
    title: "Data Storage and Retention",
    body: (
      <p>
        Information submitted through our contact form is retained only as long as necessary to
        respond to your inquiry and maintain reasonable records of communication. We take
        reasonable steps to protect the information you share with us, though no method of
        transmission over the internet is completely secure.
      </p>
    ),
  },
  {
    title: "International Visitors",
    body: (
      <p>
        While our team operates out of Canada, Global Bridge serves students and families
        internationally. By submitting information through our site, you understand that it will be
        processed in Canada, in line with this policy.
      </p>
    ),
  },
  {
    title: "Your Rights",
    body: (
      <>
        <p>You may contact us at any time to:</p>
        <ul>
          <li>Request a copy of the information we hold about you</li>
          <li>Request correction or deletion of your information</li>
          <li>Withdraw consent for us to contact you</li>
        </ul>
      </>
    ),
  },
  {
    title: "Changes to This Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. Changes will be posted on this page
        with an updated &ldquo;Last updated&rdquo; date.
      </p>
    ),
  },
];

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Global Bridge Learning Initiative</title>
        <meta
          name="description"
          content="How Global Bridge Learning Initiative collects, uses, and protects the information you share through our website."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content="Privacy Policy | Global Bridge Learning Initiative" />
        <meta
          property="og:description"
          content="How Global Bridge Learning Initiative collects, uses, and protects the information you share through our website."
        />
        <meta property="og:url" content={`${SITE_URL}/privacy`} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Global Bridge Learning Initiative" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | Global Bridge Learning Initiative" />
        <meta
          name="twitter:description"
          content="How Global Bridge Learning Initiative collects, uses, and protects the information you share through our website."
        />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>

      {/* Hero */}
      <div className="relative isolate overflow-hidden hero-gradient hero-grid pt-24 md:pt-32 pb-16 md:pb-20 border-b border-border/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
            Legal
          </span>
          <h1 className="text-5xl md:text-6xl font-bold font-serif mt-4 mb-6 tracking-tight text-balance">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-accent to-transparent mb-6" />
          <p className="text-sm font-medium tracking-wide text-muted-foreground">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="section-cream">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-3xl">
          <div className="rounded-2xl border border-border/70 card-premium p-8 md:p-12 shadow-sm">
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Global Bridge Learning Initiative (&ldquo;Global Bridge,&rdquo; &ldquo;we,&rdquo;
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is a non-profit organization providing tutoring
              and educational support. This Privacy Policy explains what information we collect
              through our website, how we use it, and the choices you have.
            </p>

            <div className="mt-10 space-y-10">
              {SECTIONS.map((section) => (
                <section key={section.title}>
                  <h2 className="text-2xl font-bold font-serif tracking-tight mb-3">
                    {section.title}
                  </h2>
                  <div className="h-1 w-12 rounded-full bg-gradient-to-r from-accent to-accent/30 mb-5" />
                  <div className="space-y-4 text-muted-foreground leading-relaxed text-pretty [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:marker:text-accent">
                    {section.body}
                  </div>
                </section>
              ))}

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-bold font-serif tracking-tight mb-3">Contact Us</h2>
                <div className="h-1 w-12 rounded-full bg-gradient-to-r from-accent to-accent/30 mb-5" />
                <p className="text-muted-foreground leading-relaxed text-pretty mb-5">
                  If you have questions about this Privacy Policy or how your information is handled,
                  please contact us at:
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group inline-flex items-center gap-3 rounded-xl border border-border/70 bg-background px-5 py-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/15 to-accent/15 text-primary flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </span>
                  <span className="text-primary font-medium break-all">{CONTACT_EMAIL}</span>
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
