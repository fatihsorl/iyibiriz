import type { Metadata } from "next";
import { InnerPageLayout } from "@/components/inner/InnerPageLayout";
import { InnerHero } from "@/components/inner/InnerHero";
import { ModulesGrid } from "@/components/inner/ModulesGrid";
import { RequestSection } from "@/components/inner/RequestSection";
import { futureTalentPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Future Talent Studio | İyibiriz",
};

export default function FutureTalentPage() {
  return (
    <InnerPageLayout>
      <InnerHero
        kicker={futureTalentPage.kicker}
        title={futureTalentPage.title}
        titleEm={futureTalentPage.titleEm}
        lead={futureTalentPage.lead}
      />
      <section className="page-body">
        <ModulesGrid modules={futureTalentPage.modules} />
        <RequestSection {...futureTalentPage.form} />
      </section>
    </InnerPageLayout>
  );
}
