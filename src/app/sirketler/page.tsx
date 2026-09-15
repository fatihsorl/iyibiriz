import type { Metadata } from "next";
import { InnerPageLayout } from "@/components/inner/InnerPageLayout";
import { InnerHero } from "@/components/inner/InnerHero";
import { IntroGrid } from "@/components/inner/IntroGrid";
import { ModulesGrid } from "@/components/inner/ModulesGrid";
import { RequestSection } from "@/components/inner/RequestSection";
import { companiesPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Şirketler İçin | İyibiriz",
};

export default function CompaniesPage() {
  return (
    <InnerPageLayout>
      <InnerHero
        kicker={companiesPage.kicker}
        title={companiesPage.title}
        titleEm={companiesPage.titleEm}
        lead={companiesPage.lead}
      />
      <section className="page-body">
        <IntroGrid kicker={companiesPage.sectionKicker} title={companiesPage.title2} intro={companiesPage.intro} />
        <ModulesGrid modules={companiesPage.modules} />
        <RequestSection {...companiesPage.forms.critical} />
        <RequestSection {...companiesPage.forms.roadmap} />
      </section>
    </InnerPageLayout>
  );
}
