import { Helmet } from "react-helmet-async";
import { SITE_NAME, SITE_URL, OG_IMAGE } from "@/lib/site-config";
import { Mail, Instagram, ArrowUpRight, Heart, BookOpen, Globe2, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const CONTACT_EMAIL = "globalbridge.learning.ca@gmail.com";
const INSTAGRAM_URL =
  "https://www.instagram.com/global.bridge.ca?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
const INSTAGRAM_HANDLE = "@global.bridge.ca";

export default function Donate() {
  return (
    <>
      <Helmet>
        <title>Donate | Global Bridge Learning Initiative</title>
        <meta name="description" content="Support our mission to provide free online tutoring globally. Reach out by email or Instagram to make a donation." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content="Donate | Global Bridge Learning Initiative" />
        <meta property="og:description" content="Support our mission to provide free online tutoring globally. Reach out by email or Instagram to make a donation." />
        <meta property="og:url" content={`${SITE_URL}/donate`} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Global Bridge Learning Initiative" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Donate | Global Bridge Learning Initiative" />
        <meta name="twitter:description" content="Support our mission to provide free online tutoring globally. Reach out by email or Instagram to make a donation." />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>

      <div className="relative isolate overflow-hidden hero-gradient hero-grid pt-24 md:pt-32 pb-20 md:pb-24 border-b border-border/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Donate</span>
          <h1 className="text-5xl md:text-6xl font-bold font-serif mt-4 mb-6 tracking-tight text-balance">
            Invest in <span className="text-primary">potential.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Your support keeps our tutoring free for every student and helps us reach more learners around the world. To donate, just send us an email or reach out on Instagram &mdash; we'll take care of the rest.
          </p>
        </div>
      </div>

      <div className="section-cream">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Donation%20to%20Global%20Bridge%20Learning%20Initiative`}
              className="group relative block rounded-2xl border border-border/70 card-premium p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden"
            >
              <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0 opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-2">Donate by email</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                Email our team and we'll share donation options, tax receipt details, and answer any questions you have.
              </p>
              <p className="text-primary font-medium break-all">{CONTACT_EMAIL}</p>
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
              <h3 className="font-serif text-2xl font-bold mb-2">Reach us on Instagram</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                Send us a direct message and we'll get back to you with everything you need to make a donation.
              </p>
              <p className="text-primary font-medium">{INSTAGRAM_HANDLE}</p>
            </a>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="gold" size="lg" className="rounded-full">
              <a href={`mailto:${CONTACT_EMAIL}?subject=Donation%20to%20Global%20Bridge%20Learning%20Initiative`}>
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
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Where it goes</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif mt-4 mb-4 tracking-tight text-balance">
            How your donation helps.
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-border/70 card-premium p-6 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg font-serif mb-2 tracking-tight">Learning materials</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Workbooks, practice problem sets, and the curriculum tools our volunteer tutors use in every session.
            </p>
          </div>

          <div className="rounded-2xl border border-border/70 card-premium p-6 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
              <Globe2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg font-serif mb-2 tracking-tight">Connectivity</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Internet stipends so students with limited connectivity can reliably join their weekly tutoring sessions.
            </p>
          </div>

          <div className="rounded-2xl border border-border/70 card-premium p-6 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg font-serif mb-2 tracking-tight">Tutor training</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Onboarding, training, and ongoing support for the volunteer tutors who power every program we run.
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-10 max-w-xl mx-auto">
          Global Bridge Learning Initiative is a Canadian federally registered non-profit. Reach out by email if you need a tax receipt or specific donation details.
        </p>
      </div>
    </>
  );
}
