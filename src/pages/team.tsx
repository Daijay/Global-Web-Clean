import { Helmet } from "react-helmet-async";
import { SITE_NAME, SITE_URL, OG_IMAGE } from "@/lib/site-config";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MapPin } from "lucide-react";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/ScrollReveal";
import { TEAM_MEMBERS } from "@/data/static-data";

export default function Team() {
  return (
    <>
      <Helmet>
        <title>Our Team | Global Bridge Learning Initiative</title>
        <meta name="description" content="Meet the executive team behind Global Bridge Learning Initiative." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content="Our Team | Global Bridge Learning Initiative" />
        <meta property="og:description" content="Meet the executive team behind Global Bridge Learning Initiative." />
        <meta property="og:url" content={`${SITE_URL}/team`} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Global Bridge Learning Initiative" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Team | Global Bridge Learning Initiative" />
        <meta name="twitter:description" content="Meet the executive team behind Global Bridge Learning Initiative." />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>

      <section className="relative isolate overflow-hidden hero-gradient hero-grid pt-24 md:pt-32 pb-20 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative">
          <ScrollReveal>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Our team</span>
            <h1 className="text-5xl md:text-6xl font-bold font-serif mt-4 mb-6 tracking-tight text-balance">
              The people behind <span className="text-primary">the mission.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
              Driven by a shared belief that every student deserves a great mentor. Meet the people making it happen.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-20 section-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.05}>
            {TEAM_MEMBERS.map((member) => (
              <StaggerItem
                key={member.id}
                className="group relative card-premium border border-border/70 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0 opacity-70 group-hover:opacity-100 transition-opacity" />
                <div className="flex flex-col items-center text-center space-y-4">
                  <Avatar className="h-24 w-24 ring-4 ring-accent/20 group-hover:ring-accent/40 transition-all">
                    <AvatarFallback className="bg-gradient-to-br from-primary/15 to-accent/20 text-primary text-2xl font-serif font-bold">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <h3 className="text-xl font-bold font-serif text-foreground tracking-tight">{member.name}</h3>
                    <p className="text-sm font-medium text-primary mt-1">{member.role}</p>
                  </div>

                  <div className="flex items-center text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3 mr-1" />
                    {member.location}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                    {member.bio}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}
