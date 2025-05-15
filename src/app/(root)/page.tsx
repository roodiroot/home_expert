import HeroBlock from "@/components/page/noise-page/hero-block";
import ContactSection from "@/components/page/noise-page/contact-section";
import FeaturesSection from "@/components/page/noise-page/features-section/features-section";
import PriceSection from "@/components/page/noise-page/price-section/price-section";
import ProjectSection from "@/components/page/noise-page/project-section/project-section";

import { FaqSection } from "@/components/page/noise-page/faq-section";
import { getAllFAQBlock } from "@/data/faq-api";
import { getAllProjects } from "@/data/projects-api";
import { getAllServicesPrice } from "@/data/serviceprice-api";
import { getAllNoiseContent } from "@/data/type-noise-api";
import { Metadata } from "next";
import SendMessageSection from "@/components/page/noise-page/send-message-section";
import ContentSection from "@/components/page/noise-page/content-page";
import TabsSection from "@/components/page/noise-page/tabs-section";

export const metadata: Metadata = {
  title: "Готовые решения шумоизоляции в Москве — Эффективно и Под Ключ",
  description:
    "Предлагаем готовые решения для шумоизоляции квартир, домов и коммерческих помещений в Москве. Быстрый подбор, монтаж за 1 день, проверенные материалы. Бесплатный замер и расчет.",
  openGraph: {
    title: "Готовые решения шумоизоляции в Москве — Эффективно и Под Ключ",
    description:
      "Предлагаем готовые решения для шумоизоляции квартир, домов и коммерческих помещений в Москве. Быстрый подбор, монтаж за 1 день, проверенные материалы. Бесплатный замер и расчет.",
    url: "https://home-expert.su/",
    siteName: "Шумоизоляция",
    images: [
      {
        url: "/public/image/openGraph/noise.jpg", // Replace with your actual image URL
        width: 825,
        height: 440,
        alt: "Шумоизоляция в Москве",
      },
    ],
    locale: "ru_RU",
  },
};

export default async function HomePage() {
  const noiseContent = await getAllNoiseContent();
  const projects = await getAllProjects();
  const faqs = await getAllFAQBlock();
  const servisesPrice = await getAllServicesPrice();

  return (
    <>
      <HeroBlock />
      <ContentSection />
      <PriceSection priceList={servisesPrice} />
      <TabsSection />
      <FeaturesSection noiseContent={noiseContent} />
      <SendMessageSection />
      <ProjectSection projectList={projects} />
      <FaqSection faqList={faqs} />
      <ContactSection />
    </>
  );
}
