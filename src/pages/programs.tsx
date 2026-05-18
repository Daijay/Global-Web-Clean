import { Helmet } from "react-helmet-async";
import { SITE_NAME, SITE_URL, OG_IMAGE } from "@/lib/site-config";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Microscope, Pi, Presentation } from "lucide-react";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/ScrollReveal";
import { PROGRAMS } from "@/data/static-data";

const getIcon = (slug: string) => {
  switch (slug) {
    case "english": return <BookOpen className="w-6 h-6" />;
    case "mathematics": return <Pi className="w-6 h-6" />;
    case "science": return <Microscope className="w-6 h-6" />;
    case "public-speaking": return <Presentation className="w-6 h-6" />;
    default: return <BookOpen className="w-6 h-6" />;
  }
};

export default function Programs() {
  return (
    <>
      <Helmet>
        <title>Our Programs | Global Bridge Learning Initiative</title>
        <meta name="description" content="Explore our free online tutoring programs in English, Mathematics, Science, and Public Speaking." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content="Our Programs | Global Bridge Learning Initiative" />
        <meta property="og:description" content="Explore our free online tutoring programs in English, Mathematics, Science, and Public Speaking." />
        <meta property="og:url" content={`${SITE_URL}/programs`} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Global Bridge Learning Initiative" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Programs | Global Bridge Learning Initiative" />
        <meta name="twitter:description" content="Explore our free online tutoring programs in English, Mathematics, Science, and Public Speaking." />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>

      <section className="relative isolate overflow-hidden hero-gradient hero-grid pt-24 md:pt-32 pb-20 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative">
          <ScrollReveal>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Our programs</span>
            <h1 className="text-5xl md:text-6xl font-bold font-serif mt-4 mb-6 tracking-tight text-balance">
              Free programs for <span className="text-primary">every learner.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
              Comprehensive academic support designed to empower students at every level of their educational journey.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 section-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {PROGRAMS.map((program) => (
              <StaggerItem
                key={program.id}
                className="group relative flex flex-col h-full card-premium border border-border/70 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0 opacity-70 group-hover:opacity-100 transition-opacity" />
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary flex items-center justify-center mb-6 group-hover:from-primary group-hover:to-primary group-hover:text-primary-foreground transition-all">
                  {getIcon(program.slug)}
                </div>
                <h2 className="text-2xl font-bold font-serif tracking-tight mb-2">{program.name}</h2>
                <p className="text-base text-foreground/75 mb-5">{program.tagline}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  <Badge variant="secondary" className="rounded-full">{program.gradeLevels}</Badge>
                  <Badge variant="outline" className="rounded-full">{program.topics.length} core topics</Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed line-clamp-3 mb-6 flex-grow">
                  {program.description}
                </p>
                <Link href={`/programs/${program.slug}`}>
                  <Button variant="ghost" className="pl-0 gap-2 hover:bg-transparent hover:text-primary group/btn">
                    View Program Details
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}
