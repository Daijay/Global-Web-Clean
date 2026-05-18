import { Helmet } from "react-helmet-async";
import { SITE_NAME, SITE_URL, OG_IMAGE } from "@/lib/site-config";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/ScrollReveal";
import { Compass, Eye, ShieldCheck, Globe2, GraduationCap, HeartHandshake } from "lucide-react";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Global Bridge Learning Initiative</title>
        <meta name="description" content="Learn about Global Bridge Learning Initiative, a Canadian federally registered, student-led non-profit dedicated to free online tutoring and mentorship." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content="About Us | Global Bridge Learning Initiative" />
        <meta property="og:description" content="Learn about Global Bridge Learning Initiative, a Canadian federally registered, student-led non-profit dedicated to free online tutoring and mentorship." />
        <meta property="og:url" content={`${SITE_URL}/about`} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Global Bridge Learning Initiative" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Global Bridge Learning Initiative" />
        <meta name="twitter:description" content="Learn about Global Bridge Learning Initiative, a Canadian federally registered, student-led non-profit dedicated to free online tutoring and mentorship." />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>

      {/* Hero */}
      <section className="relative isolate overflow-hidden hero-gradient hero-grid pt-24 md:pt-32 pb-20 md:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative">
          <ScrollReveal>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">About the organization</span>
            <h1 className="text-5xl md:text-6xl font-bold font-serif mt-4 mb-6 tracking-tight text-balance">
              Global Bridge <span className="text-primary">Learning Initiative</span>
            </h1>
            <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-accent to-transparent mb-6" />
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
              A Canadian federally registered, student-led non-profit organization committed to helping students connect, learn, and grow across communities around the world through free online tutoring and mentorship.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-20 items-center">
            <ScrollReveal direction="left" className="space-y-6">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Our story</span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif tracking-tight text-balance">
                Built by students, for students.
              </h2>
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-accent to-accent/30" />
              <div className="space-y-5 text-muted-foreground leading-relaxed text-pretty">
                <p>
                  Global Bridge Learning Initiative was founded by students who believed that consistent, high-quality tutoring should be within reach for anyone who wants to learn and improve.
                </p>
                <p>
                  The idea was simple: pair university and high-school students who want to give back with younger learners looking for steady, friendly academic support. Whether a student is preparing for a big exam, adjusting to a new school, or just wants someone in their corner, we make a match.
                </p>
                <p>
                  What began as a small student-led effort has grown into a community shaped by a shared goal: connecting students across the globe through education that is open, welcoming, and high quality.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-xl relative" style={{background: 'linear-gradient(145deg, #1a3a6b 0%, #2d5a9e 50%, #c9a84c 100%)'}}>
                  <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.10}} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                      </svg>
                    </div>
                    <p className="text-white/90 text-sm font-semibold tracking-wide">Photo coming soon</p>
                  </div>
                </div>
                <div className="absolute -top-5 -right-5 w-28 h-28 rounded-2xl bg-accent/30 -z-10" />
                <div className="absolute -bottom-5 -left-5 w-32 h-32 rounded-full bg-primary/10 -z-10" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 md:py-28 section-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">What guides us</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif mt-4 tracking-tight text-balance">
              Our mission, vision, and values.
            </h2>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-transparent via-accent to-transparent" />
          </ScrollReveal>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Compass,
                title: "Our Mission",
                desc: "To help every student reach their potential by providing free, high-quality online tutoring and mentorship, and by building academic confidence and communication skills for every learner we serve.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                desc: "To become a student-led education network where any learner, anywhere, can find a mentor and the support they need to thrive.",
              },
              {
                icon: ShieldCheck,
                title: "Our Values",
                desc: "Openness, dignity, and trust. We believe great mentorship should be available to every student, and that every learner deserves a patient and respectful guide.",
              },
            ].map((card) => (
              <StaggerItem
                key={card.title}
                className="relative bg-card border border-border/70 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0" />
                <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center mb-6">
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-serif mb-3 tracking-tight">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Core focus */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Our focus</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif mt-4 tracking-tight text-balance">
              Four commitments that anchor our work.
            </h2>
          </ScrollReveal>

          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                icon: Globe2,
                title: "Tutoring open to every student",
                desc: "We design programs that any student can join, in every subject we offer, no matter where they live or what they can pay.",
              },
              {
                icon: HeartHandshake,
                title: "Welcoming to all backgrounds",
                desc: "We support students adjusting to new schools, languages, or education systems, and offer mentorship from peers who understand the journey.",
              },
              {
                icon: GraduationCap,
                title: "Build academic confidence",
                desc: "Our tutors focus on long-term mastery and communication skills, not short-term grades or test prep alone.",
              },
              {
                icon: ShieldCheck,
                title: "Always free, no qualifications required",
                desc: "Every program is fully free for every student. Our work is sustained by volunteers, partner organizations, and community donations.",
              },
            ].map((item) => (
              <StaggerItem
                key={item.title}
                className="flex gap-5 bg-card border border-border/70 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg font-serif tracking-tight mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}
