import Image from "next/image";

import {
  DescriptionElement,
  H2Element,
  TitleElement,
} from "@/components/ui/h2-element";
import LinkCtaSection from "@/components/link-cta-section";
import CTAWrapper from "@/components/cta-section/cta-wrapper";

interface CTASectionProps {
  img: string;
}

const CTASection: React.FC<CTASectionProps> = ({ img }) => {
  return (
    <CTAWrapper>
      <div className="relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <Image
          className="h-full w-full object-cover"
          src={img}
          width={1920}
          height={1080}
          alt="scrin cta block"
        />
        {/* <span className='absolute text-xs text-gray-500 text-right text-white/80 max-w-xs bottom-8 right-4'>
          Дизайн и ремонт дома на ул. Ломоносова, Москва
        </span> */}
      </div>
      <div className="relative  mx-auto max-w-7xl flex flex-col justify-center py-24 lg:h-full sm:py-32 lg:px-8 lg:py-40">
        <div className="ml-6 mr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0">
          <H2Element text="Бесплатный замер" className="text-white" />
          <TitleElement
            text="Расчет стоимости ремонта"
            className="mt-2 text-white"
          />
          <DescriptionElement
            text="Просто введите необходимые параметры вашего помещения
            и&nbsp;получите мгновенный, предварительный расчет стоимости ремонта
            помещения за&nbsp;несколько кликов. Нажмите на&nbsp;кнопку
            рассчитать."
            className="mt-6 text-white/80"
          />
          <div className="mt-8">
            <LinkCtaSection className="bg-white text-gray-900 hover:text-gray-900/90" />
          </div>
        </div>
      </div>
    </CTAWrapper>
  );
};

export default CTASection;
