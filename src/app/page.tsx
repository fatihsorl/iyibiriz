import { SiteLayout } from "@/components/SiteLayout";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Company } from "@/components/Company";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <About />
      <Company />
      <Contact />
    </SiteLayout>
  );
}
