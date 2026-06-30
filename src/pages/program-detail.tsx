import { Helmet } from "react-helmet-async";
import { SITE_NAME, SITE_URL, OG_IMAGE } from "@/lib/site-config";
import { Link, useParams } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, CheckCircle2, Microscope, Pi, Presentation, Users } from "lucide-react";
import { PROGRAMS } from "@/data/static-data";

const getIcon = (slug: string) => {
  switch (slug) {
    case "english": return <BookOpen className="w-10 h-10" />;
    case "mathematics": return <Pi className="w-10 h-10" />;
    case "science": return <Microscope className="w-10 h-10" />;
    case "public-speaking": return <Presentation className="w-10 h-10" />;
    default: return <BookOpen className="w-10 h-10" />;
  }
};

export default function ProgramDetail() {
  const { slug } = useParams<{ slug: string }>();
  const program = PROGRAMS.find((p) => p.slug === slug);

  if (!program) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-center space-y-4">
        <h2 className="text-2xl font-bold">Program not found</h2>
        <Link href="/programs">
          <Button variant="outline">View all programs</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{program.name} | Global Bridge Learning Initiative</title>
        <meta name="description" content={program.description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={`${program.name} | Global Bridge Learning Initiative`} />
        <meta property="og:description" content={program.description} />
        <meta property="og:url" content={`${SITE_URL}/programs/${program.slug}`} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`${program.name} | Global Bridge Learning Initiative`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${program.name} | Global Bridge Learning Initiative`} />
        <meta name="twitter:description" content={program.description} />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>

      <div className="relative isolate overflow-hidden hero-gradient hero-grid pt-20 md:pt-24 pb-12 md:pb-16 border-b border-border/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative">
          <Link href="/programs" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Programs
          </Link>

          <div className="flex flex-col md:flex-row gap-6 md:items-center">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 shadow-sm">
              {getIcon(program.slug)}
            </div>
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Program</span>
              <h1 className="text-4xl md:text-5xl font-bold font-serif mt-2 mb-2 tracking-tight">{program.name}</h1>
              <p className="text-xl text-muted-foreground">{program.tagline}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="text-2xl font-bold font-serif mb-4">About the Program</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {program.description}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-serif mb-6">Core Topics Covered</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {program.topics.map((topic, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="font-medium text-foreground">{topic}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-secondary/10 p-6 rounded-2xl border border-secondary/20">
              <div className="flex items-start gap-4">
                <Users className="w-8 h-8 text-secondary-foreground shrink-0" />
                <div>
                  <h3 className="text-xl font-bold font-serif mb-2">Lesson Format</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Group and class-based lessons designed to support students together at a shared pace, with guided instruction and interactive participation.
                  </p>
                </div>
              </div>
            </section>

            {program.mentorshipFocus && (
              <section>
                <h2 className="text-2xl font-bold font-serif mb-4">Mentorship Focus</h2>
                <p className="text-muted-foreground leading-relaxed">{program.mentorshipFocus}</p>
              </section>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-card border rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold uppercase tracking-wider text-sm text-muted-foreground mb-4">Program Details</h3>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Grade Levels</p>
                  <p className="font-medium">{program.gradeLevels}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Format</p>
                  <p className="font-medium">Group / Class Lessons</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Cost</p>
                  <Badge variant="secondary" className="mt-1">100% Free</Badge>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t space-y-4">
                <Link href="/apply/student" className="block">
                  <Button className="w-full gap-2 shadow-sm hover-elevate">
                    Apply for a Tutor
                  </Button>
                </Link>
                <Link href="/apply/tutor" className="block">
                  <Button variant="outline" className="w-full gap-2">
                    Volunteer to Teach
                  </Button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
