import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, Handshake, BookOpen, GraduationCap } from "lucide-react";
import { useState, useEffect } from "react";

function BrandMark({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-11 h-11 rounded-xl bg-white ring-1 ring-border/70 overflow-hidden flex items-center justify-center shadow-sm ${className}`}
      aria-hidden="true"
    >
      <img
        src="/images/logo.webp"
        alt=""
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 shadow-sm"
          : "bg-background/0 border-b border-transparent"
      }`}
      data-testid="header"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group" data-testid="link-home">
              <BrandMark className="group-hover:scale-105 transition-transform" />
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="font-serif font-bold text-base lg:text-lg tracking-tight text-foreground">
                  Global Bridge
                </span>
                <span className="text-[10px] lg:text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground">
                  Learning Initiative
                </span>
              </div>
            </Link>

            <nav className="hidden md:ml-12 md:flex md:space-x-9" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location === link.href ? "text-primary" : "text-foreground/75"
                  }`}
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="hidden lg:flex items-center space-x-2">
            <Link href="/apply/student">
              <Button variant="outline" size="sm" className="gap-1.5 rounded-full px-4 !font-bold" data-testid="btn-nav-student">
                <BookOpen className="w-4 h-4" />
                Find a Tutor
              </Button>
            </Link>
            <Link href="/apply/tutor">
              <Button variant="outline" size="sm" className="gap-1.5 rounded-full px-4" data-testid="btn-nav-tutor">
                <GraduationCap className="w-4 h-4" />
                Become a Tutor
              </Button>
            </Link>
            <Link href="/partnerships">
              <Button variant="outline" size="sm" className="gap-1.5 rounded-full px-4" data-testid="btn-nav-partner">
                <Handshake className="w-4 h-4" />
                Partner
              </Button>
            </Link>
            <Link href="/donate">
              <Button variant="outline" size="sm" className="gap-1.5 rounded-full px-4" data-testid="btn-nav-donate">
                <Heart className="w-4 h-4" />
                Donate
              </Button>
            </Link>
          </div>

          <div className="flex lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(true)}
              data-testid="btn-mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-background flex flex-col">
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <Link href="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
              <BrandMark />
              <div className="flex flex-col leading-tight">
                <span className="font-serif font-bold text-base tracking-tight">Global Bridge</span>
                <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-muted-foreground">Learning Initiative</span>
              </div>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(false)}
              data-testid="btn-close-mobile-menu"
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto p-6">
            <nav className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-3 pb-6 border-b">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Navigation</span>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-lg font-medium ${location === link.href ? "text-primary" : ""}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col space-y-4 pt-2">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Take Action</span>
                <Link href="/apply/student" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full justify-start gap-2 rounded-full font-bold">
                    <BookOpen className="w-4 h-4" /> Find a Tutor
                  </Button>
                </Link>
                <Link href="/apply/tutor" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full justify-start gap-2 rounded-full">
                    <GraduationCap className="w-4 h-4" /> Become a Tutor
                  </Button>
                </Link>
                <Link href="/partnerships" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full justify-start gap-2 rounded-full">
                    <Handshake className="w-4 h-4" /> Partner With Us
                  </Button>
                </Link>
                <Link href="/donate" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full justify-start gap-2 rounded-full">
                    <Heart className="w-4 h-4" /> Donate
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
