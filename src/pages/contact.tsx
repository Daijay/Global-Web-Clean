import { Helmet } from "react-helmet-async";
import { SITE_NAME, SITE_URL, OG_IMAGE } from "@/lib/site-config";
import { Link } from "wouter";
import { Mail, Instagram, ArrowUpRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const CONTACT_EMAIL = "globalbridge.learning.ca@gmail.com";
const INSTAGRAM_URL =
  "https://www.instagram.com/global.bridge.ca?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
const INSTAGRAM_HANDLE = "@global.bridge.ca";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Global Bridge Learning Initiative</title>
        <meta name="description" content="Get in touch with the Global Bridge team via email or Instagram." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content="Contact Us | Global Bridge Learning Initiative" />
        <meta property="og:description" content="Get in touch with the Global Bridge team via email or Instagram." />
        <meta property="og:url" content={`${SITE_URL}/contact`} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Global Bridge Learning Initiative" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Global Bridge Learning Initiative" />
        <meta name="twitter:description" content="Get in touch with the Global Bridge team via email or Instagram." />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>

      <div className="relative isolate overflow-hidden hero-gradient hero-grid pt-24 md:pt-32 pb-20 md:pb-24 border-b border-border/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
            Get in touch
          </span>
          <h1 className="text-5xl md:text-6xl font-bold font-serif mt-4 mb-6 tracking-tight text-balance">
            We'd love to <span className="text-primary">hear from you.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Have a question, suggestion, or media inquiry? Reach out to us by
            email or send us a message on Instagram &mdash; we usually reply
            within two business days.
          </p>
        </div>
      </div>

      <div className="section-cream">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group relative block rounded-2xl border border-border/70 card-premium p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden"
            >
              <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0 opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-2">Email us</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                The best way to reach our team for tutoring requests, partnership
                inquiries, donations, or anything else.
              </p>
              <p className="text-primary font-medium break-all">
                {CONTACT_EMAIL}
              </p>
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-2xl border border-border/70 card-premium p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden"
            >
              <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0 opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-primary/15 text-accent-foreground flex items-center justify-center">
                  <Instagram className="w-6 h-6" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-2">DM us on Instagram</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                Follow our story, see student highlights, and send us a direct
                message any time.
              </p>
              <p className="text-primary font-medium">{INSTAGRAM_HANDLE}</p>
            </a>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="gold" size="lg" className="rounded-full">
              <a href={`mailto:${CONTACT_EMAIL}`}>
                <Mail className="w-4 h-4" />
                Email {CONTACT_EMAIL}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                <Instagram className="w-4 h-4" />
                Open Instagram
              </a>
            </Button>
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            By reaching out, you agree to how we handle your information. Read our{" "}
            <Link
              href="/privacy"
              className="inline-flex items-center gap-1 font-medium text-primary underline-offset-4 hover:underline"
            >
              <ShieldCheck className="w-4 h-4" />
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
