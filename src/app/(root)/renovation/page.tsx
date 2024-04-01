import { Metadata } from "next";

import BunnerKondish from "@/components/bunners/bunner-kondish";
import BenefitsSection from "@/components/page/main-page/benefits-section";
import ContactSection from "@/components/page/main-page/contact-section";
import CTASection from "@/components/page/main-page/cta-section";
import { FaqSection } from "@/components/page/main-page/faq-section";
import { FeatureSection } from "@/components/page/main-page/feature-section";
import HeroBlock from "@/components/page/main-page/hero-block";
import PortfolioListSection from "@/components/page/main-page/portfolio-list-section";
import PriceSection from "@/components/page/main-page/price-section";
import SendMessageSection from "@/components/page/main-page/send-message-section";
import { InfoSectionTwo } from "@/components/ui/info-block-venus";
import { TestemonialsKuiperBeltBlock } from "@/components/ui/testimonials-kuiper-belt";
import {
  consultationBlocks,
  qualityList,
  FAQList,
  testimonialsList,
} from "@/utils/constance";
import portfolioList from "@/utils/projects.json";

const pattern = (
  <svg
    className="absolute -z-10 top-0 left-0 right-0 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_at_center,white,transparent)]"
    aria-hidden="true"
  >
    <defs>
      <pattern
        id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
        width="200"
        height="200"
        x="50%"
        y="-1"
        patternUnits="userSpaceOnUse"
      >
        <path d="M.5 200V.5H200" fill="none"></path>
      </pattern>
    </defs>
    <rect
      width="100%"
      height="100%"
      strokeWidth="0"
      fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
    ></rect>
  </svg>
);

export const metadata: Metadata = {
  title: "Выполненный работы",
  description:
    "Ремонты в Москве, которые мы уже выполнили. Фотографии наших работ. Эксперты в мире ремонта и отделки.",
};

const RenovationsPage: React.FC = () => {
  return (
    <>
      <main className="font-medium">
        <HeroBlock img="/image/m2.jpg" pattern={pattern} />
        <BenefitsSection />
        <CTASection img="/image/m1.jpg" />
        <FeatureSection
          img="/image/portfolio/p10/6.jpg"
          list={consultationBlocks}
        />
        <PriceSection />
        <SendMessageSection />
        <PortfolioListSection list={portfolioList.slice(0, 3)} />
        <InfoSectionTwo
          pattern={pattern}
          subtitle="Проверка качества"
          title="Контроль выполнения работ"
          description="Перед финальным осмотром с заказчиком. Объект пройдет несколько этапов проверки. Которые гарантируют результат."
          adv_list={qualityList}
        />
        <FaqSection faqList={FAQList} />
        <TestemonialsKuiperBeltBlock
          title="Отзывы"
          description="Что пишут о нас наши клиенты"
          testimonials_list={testimonialsList}
        />
        <ContactSection pattern={pattern} />
        <BunnerKondish />
      </main>
    </>
  );
};

export default RenovationsPage;
