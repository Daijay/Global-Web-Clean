import { Helmet } from "react-helmet-async";
import { SITE_NAME, SITE_URL, OG_IMAGE } from "@/lib/site-config";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe2, BookOpen, Users, HeartHandshake, GraduationCap, Sparkles, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/ScrollReveal";

export default function Home() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 600], reduceMotion ? [0, 0] : [0, 60]);
  const heroBgY = useTransform(scrollY, [0, 600], reduceMotion ? [0, 0] : [0, 120]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.85]);

  return (
    <>
      <Helmet>
        <title>Global Bridge Learning Initiative | Free Global Online Tutoring & Mentorship</title>
        <meta name="description" content="Global Bridge Learning Initiative is a Canadian federally registered, student-led non-profit providing free online tutoring and mentorship to students around the world." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content="Global Bridge Learning Initiative | Free Global Online Tutoring & Mentorship" />
        <meta property="og:description" content="Global Bridge Learning Initiative is a Canadian federally registered, student-led non-profit providing free online tutoring and mentorship to students around the world." />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Global Bridge Learning Initiative" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Global Bridge Learning Initiative | Free Global Online Tutoring & Mentorship" />
        <meta name="twitter:description" content="Global Bridge Learning Initiative is a Canadian federally registered, student-led non-profit providing free online tutoring and mentorship to students around the world." />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative isolate overflow-hidden hero-gradient hero-grid pt-24 md:pt-32 lg:pt-40 pb-24 md:pb-32"
      >
        <motion.div
          aria-hidden="true"
          style={{ y: heroBgY, opacity: heroOpacity }}
          className="absolute inset-0 -z-10"
        >
          <div className="absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full bg-secondary/10 blur-3xl" />
          <div className="absolute top-40 -left-24 w-[440px] h-[440px] rounded-full bg-primary/10 blur-3xl" />
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-background/70 backdrop-blur px-4 py-1.5 text-xs font-medium text-foreground/80 mb-8 shadow-sm"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-accent" />
              Canadian Federally Registered Non-Profit
            </motion.div>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.05 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05] mb-8 text-balance font-serif"
            >
              Bridging worlds,{" "}
              <span className="text-primary">one student at a time.</span>
            </motion.h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.18 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10 text-pretty"
            >
              Global Bridge Learning Initiative provides free, high-quality online tutoring and mentorship to students around the world, because every learner deserves a guide who helps them reach their potential.
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
            >
              <Link href="/apply/student">
                <Button variant="gold" size="lg" className="rounded-full px-7 h-12 gap-2 group transition-all">
                  <BookOpen className="w-4 h-4" />
                  Find a Free Tutor
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/apply/tutor">
                <Button variant="outline" size="lg" className="rounded-full px-7 h-12 gap-2 bg-background/80 backdrop-blur">
                  <GraduationCap className="w-4 h-4" />
                  Volunteer as a Tutor
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Hero photo placeholder */}
          <motion.div
            style={{ y: heroImageY }}
            initial={reduceMotion ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.4 }}
            className="relative mt-20 max-w-5xl mx-auto"
          >
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10" style={{background: 'linear-gradient(135deg, #1a3a6b 0%, #2d5a9e 50%, #c9a84c 100%)'}}>
              <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '28px 28px', opacity: 0.10}} />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-20 h-20 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" />
                  </svg>
                </div>
                <p className="text-white/90 text-sm font-semibold tracking-wide">Photo coming soon</p>
              </div>
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 h-24 w-3/4 bg-gradient-to-t from-accent/10 to-transparent blur-2xl" aria-hidden="true" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-24 md:py-32 section-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-foreground/70">
              <span className="text-gold-gradient">What we do</span>
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-serif mt-4 mb-5 tracking-tight text-balance">
              Education that meets students <span className="text-gold-gradient">where they are.</span>
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-transparent via-accent to-transparent mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              We run group and class-based lessons led by dedicated volunteer tutors: completely free, completely online, anywhere in the world.
            </p>
          </ScrollReveal>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: BookOpen,
                title: "Class-Based Academic Support",
                description: "Group and class-style lessons in English, Math, Science, and Public Speaking, designed to support students at a shared pace.",
              },
              {
                icon: Users,
                title: "Near-Peer Mentorship",
                description: "Our university and high-school volunteers serve as relatable role models, guiding students through academic and cultural transitions.",
              },
              {
                icon: Globe2,
                title: "Truly Global Reach",
                description: "Sessions take place online across time zones, languages, and continents, so geography is never a barrier to learning.",
              },
            ].map((pillar) => (
              <StaggerItem
                key={pillar.title}
                className="group relative card-premium rounded-2xl border border-border/70 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0 opacity-70 group-hover:opacity-100 transition-opacity" />
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center text-primary mb-6 group-hover:from-primary group-hover:to-primary group-hover:text-primary-foreground transition-all">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-serif mb-3 tracking-tight">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* MISSION + IMAGE */}
      <section className="py-24 md:py-32 section-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="right" className="order-2 lg:order-1 relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl ring-1 ring-white/10 relative" style={{background: 'linear-gradient(160deg, #1a3a6b 0%, #2d5a9e 55%, #c9a84c 100%)'}}>
                <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.10}} />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  </div>
                  <p className="text-white/90 text-sm font-semibold tracking-wide">Photo coming soon</p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-2xl bg-accent/40 -z-10" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full bg-primary/10 -z-10" />
            </ScrollReveal>

            <div className="order-1 lg:order-2">
              <ScrollReveal direction="left">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Our mission</span>
                <h2 className="text-4xl md:text-5xl font-bold font-serif mt-4 mb-6 tracking-tight text-balance">
                  Support that helps every student grow.
                </h2>
                <div className="h-1 w-20 rounded-full bg-gradient-to-r from-accent to-accent/30 mb-6" />
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
                  From mastering a tough subject to finding the confidence to speak up in class, every student deserves a guide. We connect learners around the world with dedicated volunteer mentors, so growing academically is never a question of who you know or what you can afford.
                </p>
              </ScrollReveal>

              <StaggerGroup className="space-y-5 mb-10">
                {[
                  { icon: Sparkles, title: "Always free, for every student", desc: "High-quality tutoring open to anyone, with no fees and no catch." },
                  { icon: ShieldCheck, title: "Safe, vetted volunteers", desc: "Every tutor is interviewed and trained before being matched." },
                  { icon: Globe2, title: "Welcoming to all backgrounds", desc: "Patient mentors who meet each learner where they are." },
                ].map((item) => (
                  <StaggerItem key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center text-accent">
                        <item.icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>

              <ScrollReveal delay={0.2}>
                <Link href="/about">
                  <Button variant="outline" className="rounded-full gap-2 group">
                    Learn about our mission
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* JOIN CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden section-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 tracking-tight text-balance">
              Join the movement.
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-transparent via-accent to-transparent mb-6" />
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12 text-pretty">
              Whether you have time to teach, resources to give, or a network to share, you can help us open doors for the next generation of global learners.
            </p>
          </ScrollReveal>

          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto" staggerDelay={0.1}>
            <StaggerItem>
              <Link href="/donate" className="block">
                <Button size="lg" variant="gold" className="w-full gap-2 h-14 rounded-full text-base font-semibold transition-all">
                  <HeartHandshake className="w-5 h-5" />
                  Make a Donation
                </Button>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link href="/apply/tutor" className="block">
                <Button size="lg" variant="outline" className="w-full gap-2 h-14 rounded-full text-base font-semibold">
                  <Users className="w-5 h-5" />
                  Become a Tutor
                </Button>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link href="/partnerships" className="block">
                <Button size="lg" variant="outline" className="w-full gap-2 h-14 rounded-full text-base font-semibold">
                  <Globe2 className="w-5 h-5" />
                  Partner With Us
                </Button>
              </Link>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}
