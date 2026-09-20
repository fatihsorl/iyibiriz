import type { Metadata } from "next";
import { InnerPageLayout } from "@/components/inner/InnerPageLayout";
import { InnerHero } from "@/components/inner/InnerHero";
import { IntroGrid } from "@/components/inner/IntroGrid";
import { ModulesGrid } from "@/components/inner/ModulesGrid";
import { RequestSection } from "@/components/inner/RequestSection";
import { aiSolutionPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "İnsan Kaynakları için Yapay Zeka | İyibiriz",
};

export default function AiSolutionPage() {
  return (
    <InnerPageLayout>
      <InnerHero
        kicker={aiSolutionPage.kicker}
        title={aiSolutionPage.title}
        titleEm={aiSolutionPage.titleEm}
        lead={aiSolutionPage.lead}
      />
      <section className="page-body">
        <IntroGrid kicker={aiSolutionPage.sectionKicker} title={[aiSolutionPage.title2]} intro={aiSolutionPage.intro} />
        <ModulesGrid modules={aiSolutionPage.modules} />
        <RequestSection {...aiSolutionPage.form} />
      </section>
    </InnerPageLayout>
  );
}
