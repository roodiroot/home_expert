import BenefitsSection from "@/components/page/development/benefits/benefits-section";
import CarouselSection from "@/components/page/development/caorusel-section/carousel-section";
import CTASection from "@/components/page/development/cta-section";
import HeroBlock from "@/components/page/development/hero-block";
import TypesSection from "@/components/page/development/types/types-section";
import ContactSection from "@/components/page/main-page/contact-section";
import { FaqSection } from "@/components/page/main-page/faq-section";
import { FAQListDew } from "@/utils/constance";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Выполненный работы",
  description:
    "Ремонты в Москве, которые мы уже выполнили. Фотографии наших работ. Эксперты в мире ремонта и отделки.",
};

export default function Home() {
  return (
    <>
      <HeroBlock />
      <BenefitsSection />
      <TypesSection />
      <CTASection />
      <CarouselSection />
      <FaqSection faqList={FAQListDew} />
      <ContactSection />
    </>
  );
}
