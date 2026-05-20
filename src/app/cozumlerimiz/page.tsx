import type { Metadata } from "next";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { SolutionsPage } from "@/components/SolutionsPage";
import { solutionsPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Çözümlerimiz | İyibiriz",
  description:
    "Kurumsal ve bireysel insan kaynakları, marka danışmanlığı ve koçluk çözümleri.",
};

export default function CozumlerimizPage() {
  return (
    <SiteLayout>
      <PageHero
        title={solutionsPage.title}
        description={solutionsPage.intro}
      />
      <SolutionsPage />
    </SiteLayout>
  );
}
