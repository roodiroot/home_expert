import Image from "next/image";

import {
  DescriptionElement,
  H2Element,
  TitleElement,
} from "@/components/ui/h2-element";
import LinkCtaSection from "@/components/link-cta-section";

interface CTASectionProps {
  img: string;
}

const CTASection: React.FC<CTASectionProps> = ({ img }) => {
  return (
    <div className='relative'>
      <div className='relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2'>
        <Image
          className='h-full w-full object-cover'
          src={img}
          width={1920}
          height={1080}
          alt='scrin cta block'
        />
      </div>
      <div className='relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40'>
        <div className='ml-6 mr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0'>
          <H2Element text='Бесплатный замер' />
          <TitleElement text='Расчет стоимости ремонта' className='mt-2' />
          <DescriptionElement
            text='Просто введите необходимые параметры вашего помещения
            и&nbsp;получите мгновенный, предварительный расчет стоимости ремонта
            помещения за&nbsp;несколько кликов. Нажмите на&nbsp;кнопку
            рассчитать.'
            className='mt-6'
          />
          <div className='mt-8'>
            <LinkCtaSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
