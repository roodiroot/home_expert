import BenefitsSection from "@/components/page/development/benefits/benefits-section";
import CarouselSection from "@/components/page/development/caorusel-section/carousel-section";
import CTASection from "@/components/page/development/cta-section";
import HeroBlock from "@/components/page/development/hero-block";
import PriceSection from "@/components/page/development/price-section/price-section";
import TypesSection from "@/components/page/development/types/types-section";
import ContactSection from "@/components/page/main-page/contact-section";

import { FaqSection } from "@/components/page/main-page/faq-section";
import { FAQListDew } from "@/utils/constance";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Загородное строительство",
  description:
    "Строим каркасные дома, дома из кирпича и газобетона. С индивидуальной и типовой архитектурой.",
};

export default function СonstructionPage() {
  return (
    <>
      <HeroBlock />
      <BenefitsSection />
      <TypesSection />
      <PriceSection
        head="Доступное качество для вашего будущего дома"
        description="Ознакомьтесь с нашими актуальными ценами на строительство домов. Мы
        предлагаем гибкие ценовые планы для различных типов и размеров домов."
      />
      <CTASection />
      <CarouselSection />
      <FaqSection faqList={FAQListDew} />
      <ContactSection />
    </>
  );
}
