import type { Metadata } from "next";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { TrainingsList } from "@/components/TrainingsList";
import { trainings } from "@/lib/content";

export const metadata: Metadata = {
  title: "Eğitimlerimiz | İyibiriz",
  description:
    "NLP, İK danışmanlığı, işveren markası, kişisel marka koçluğu ve mülakat hazırlık eğitimleri.",
};

export default function EgitimlerimizPage() {
  return (
    <SiteLayout>
      <PageHero title={trainings.title} description={trainings.intro} />
      <TrainingsList />
    </SiteLayout>
  );
}
