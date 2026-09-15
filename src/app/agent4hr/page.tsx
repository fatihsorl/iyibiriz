import type { Metadata } from "next";
import { InnerPageLayout } from "@/components/inner/InnerPageLayout";
import { InnerHero } from "@/components/inner/InnerHero";
import { IntroGrid } from "@/components/inner/IntroGrid";
import { ModulesGrid } from "@/components/inner/ModulesGrid";
import { RequestSection } from "@/components/inner/RequestSection";
import { agent4hrPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Agent4HR | İyibiriz",
};

export default function Agent4HRPage() {
  return (
    <InnerPageLayout>
      <InnerHero
        kicker={agent4hrPage.kicker}
        title={agent4hrPage.title}
        titleEm={agent4hrPage.titleEm}
        lead={agent4hrPage.lead}
      />
      <section className="page-body">
        <IntroGrid kicker={agent4hrPage.sectionKicker} title={[agent4hrPage.title2]} intro={agent4hrPage.intro} />
        <ModulesGrid modules={agent4hrPage.modules} />
        <RequestSection {...agent4hrPage.form} />
      </section>
    </InnerPageLayout>
  );
}
