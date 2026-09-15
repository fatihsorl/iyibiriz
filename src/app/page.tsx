import { Nav } from "@/components/Nav";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Hero } from "@/components/home/Hero";
import { Focus } from "@/components/home/Focus";
import { Statement } from "@/components/home/Statement";
import { CorporateSolutions } from "@/components/home/CorporateSolutions";
import { Method } from "@/components/home/Method";
import { TalentPaths } from "@/components/home/TalentPaths";
import { Agent4HRSection } from "@/components/home/Agent4HRSection";
import { Executives } from "@/components/home/Executives";
import { Founder } from "@/components/home/Founder";
import { CtaBand } from "@/components/home/CtaBand";

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <Hero />
        <Focus />
        <Statement />
        <CorporateSolutions />
        <Method />
        <TalentPaths />
        <Agent4HRSection />
        <Executives />
        <Founder />
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
