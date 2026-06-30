import { Helmet } from "react-helmet-async";
import { SITE_NAME, SITE_URL, OG_IMAGE } from "@/lib/site-config";
import { Building2, GraduationCap, Handshake, Instagram, Mail } from "lucide-react";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/ScrollReveal";

const INSTAGRAM_URL = "https://www.instagram.com/global.bridge.ca?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
const EMAIL_ADDRESS = "globalbridge.learning.ca@gmail.com";
const EMAIL_SUBJECT = "Partnership Inquiry: Global Bridge Learning Initiative";

export default function Partnerships() {
  return (
    <>
      <Helmet>
        <title>Partnerships | Global Bridge Learning Initiative</title>
        <meta name="description" content="Partner with Global Bridge to expand educational access worldwide." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content="Partnerships | Global Bridge Learning Initiative" />
        <meta property="og:description" content="Partner with Global Bridge to expand educational access worldwide." />
        <meta property="og:url" content={`${SITE_URL}/partnerships`} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Global Bridge Learning Initiative" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Partnerships | Global Bridge Learning Initiative" />
        <meta name="twitter:description" content="Partner with Global Bridge to expand educational access worldwide." />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>

      {/* Hero */}
      <div className="relative isolate overflow-hidden hero-gradient hero-grid pt-24 md:pt-32 pb-20 md:pb-24 border-b border-border/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative">
          <ScrollReveal>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Partnerships</span>
            <h1 className="text-5xl md:text-6xl font-bold font-serif mt-4 mb-6 tracking-tight text-balance">
              Build pathways <span className="text-primary">together.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
              Join our network of schools, NGOs, and corporate sponsors helping us bring free, high-quality tutoring to more students worldwide.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left column - Ways to Collaborate + Our Commitment */}
          <div className="lg:col-span-5 space-y-12">
            <ScrollReveal>
              <h2 className="text-2xl font-bold font-serif mb-6">Ways to Collaborate</h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-foreground shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Schools & NGOs</h3>
                    <p className="text-muted-foreground text-sm">Refer students in need of academic support, or integrate our tutoring into your existing programs.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-accent-foreground shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Universities</h3>
                    <p className="text-muted-foreground text-sm">Establish a volunteer pipeline, allowing your students to gain service hours and teaching experience.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary-foreground shrink-0">
                    <Handshake className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Corporate Sponsors</h3>
                    <p className="text-muted-foreground text-sm">Fund vital infrastructure, sponsor curriculum development, or arrange corporate volunteering days.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="bg-card border p-6 rounded-2xl shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Our Commitment</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We value mutually beneficial partnerships. Global Bridge provides comprehensive impact reporting, dedicated relationship managers, and transparent communication for all our formal partners.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right column - Get In Touch */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <div className="relative bg-card border border-border/70 rounded-3xl p-10 md:p-12 shadow-sm overflow-hidden">
                <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0" />

                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Get in touch</span>
                <h2 className="text-3xl md:text-4xl font-bold font-serif mt-3 mb-4 tracking-tight text-balance">
                  Ready to Partner With Us?
                </h2>
                <div className="h-1 w-16 rounded-full bg-gradient-to-r from-accent to-accent/30 mb-5" />
                <p className="text-muted-foreground leading-relaxed text-pretty mb-10">
                  We'd love to hear from you. Reach out directly and our team will get back to you within 2 business days.
                </p>

                <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Instagram */}
                  <StaggerItem>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center gap-4 bg-background border border-border/70 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 text-center"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/15 text-primary flex items-center justify-center group-hover:from-primary group-hover:to-primary group-hover:text-primary-foreground transition-all duration-300">
                        <Instagram className="w-7 h-7" />
                      </div>
                      <div>
                        <p className="font-bold text-lg font-serif tracking-tight">Instagram</p>
                        <p className="text-sm text-muted-foreground mt-1">@global.bridge.ca</p>
                      </div>
                      <span className="text-xs font-semibold tracking-wide uppercase text-primary group-hover:underline">Send a DM →</span>
                    </a>
                  </StaggerItem>

                  {/* Email */}
                  <StaggerItem>
                    <a
                      href={`mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`}
                      className="group flex flex-col items-center gap-4 bg-background border border-border/70 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 text-center"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/15 text-primary flex items-center justify-center group-hover:from-primary group-hover:to-primary group-hover:text-primary-foreground transition-all duration-300">
                        <Mail className="w-7 h-7" />
                      </div>
                      <div>
                        <p className="font-bold text-lg font-serif tracking-tight">Email</p>
                        <p className="text-sm text-muted-foreground mt-1 break-all">globalbridge.learning.ca@gmail.com</p>
                      </div>
                      <span className="text-xs font-semibold tracking-wide uppercase text-primary group-hover:underline">Send an email →</span>
                    </a>
                  </StaggerItem>
                </StaggerGroup>

                <p className="text-xs text-muted-foreground/70 text-center mt-8">
                  Not sure where to start? Either channel works, and our team monitors both regularly.
                </p>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </>
  );
}
