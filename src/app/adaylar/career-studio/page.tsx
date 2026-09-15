import type { Metadata } from "next";
import { InnerPageLayout } from "@/components/inner/InnerPageLayout";
import { InnerHero } from "@/components/inner/InnerHero";
import { ModulesGrid } from "@/components/inner/ModulesGrid";
import { RequestSection } from "@/components/inner/RequestSection";
import { careerStudioPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Career Studio | İyibiriz",
};

export default function CareerStudioPage() {
  return (
    <InnerPageLayout>
      <InnerHero
        kicker={careerStudioPage.kicker}
        title={careerStudioPage.title}
        titleEm={careerStudioPage.titleEm}
        lead={careerStudioPage.lead}
      />
      <section className="page-body">
        <ModulesGrid modules={careerStudioPage.modules} />
        <RequestSection {...careerStudioPage.form} />
      </section>
    </InnerPageLayout>
  );
}
