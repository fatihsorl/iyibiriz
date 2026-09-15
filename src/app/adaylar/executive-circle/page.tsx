import type { Metadata } from "next";
import { InnerPageLayout } from "@/components/inner/InnerPageLayout";
import { InnerHero } from "@/components/inner/InnerHero";
import { ModulesGrid } from "@/components/inner/ModulesGrid";
import { RequestSection } from "@/components/inner/RequestSection";
import { executiveCirclePage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Executive Circle | İyibiriz",
};

export default function ExecutiveCirclePage() {
  return (
    <InnerPageLayout>
      <InnerHero
        kicker={executiveCirclePage.kicker}
        title={executiveCirclePage.title}
        titleEm={executiveCirclePage.titleEm}
        lead={executiveCirclePage.lead}
      />
      <section className="page-body">
        <ModulesGrid modules={executiveCirclePage.modules} />
        <RequestSection {...executiveCirclePage.form} />
      </section>
    </InnerPageLayout>
  );
}
