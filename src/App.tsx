import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";

import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Programs from "@/pages/programs";
import ProgramDetail from "@/pages/program-detail";
import ApplyTutor from "@/pages/apply-tutor";
import ApplyStudent from "@/pages/apply-student";
import Team from "@/pages/team";
import Donate from "@/pages/donate";
import Partnerships from "@/pages/partnerships";
import Contact from "@/pages/contact";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/BackToTop";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 1000 * 60 * 5,
    },
  },
});

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location]);
  return null;
}

function Router() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <ScrollToTop />
      <Header />
      <BackToTop />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/programs" component={Programs} />
          <Route path="/programs/:slug" component={ProgramDetail} />
          <Route path="/apply/tutor" component={ApplyTutor} />
          <Route path="/apply/student" component={ApplyStudent} />
          <Route path="/team" component={Team} />
          <Route path="/donate" component={Donate} />
          <Route path="/partnerships" component={Partnerships} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
