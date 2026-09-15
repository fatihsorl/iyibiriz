import type { Metadata } from "next";
import { InnerPageLayout } from "@/components/inner/InnerPageLayout";
import { InnerHero } from "@/components/inner/InnerHero";
import { ModulesGrid } from "@/components/inner/ModulesGrid";
import { talentIndexPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Adaylar İçin | İyibiriz",
};

export default function TalentIndexPage() {
  return (
    <InnerPageLayout>
      <InnerHero
        kicker={talentIndexPage.kicker}
        title={talentIndexPage.title}
        titleEm={talentIndexPage.titleEm}
        lead={talentIndexPage.lead}
      />
      <section className="page-body">
        <ModulesGrid modules={talentIndexPage.modules} />
      </section>
    </InnerPageLayout>
  );
}
