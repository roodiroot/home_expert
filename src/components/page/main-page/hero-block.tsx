import Image from "next/image";

import { LogoProps } from "@/components/ui/logo";
import {
  ActionComponents,
  // ActionComponentsBatton,
} from "@/components/hero-block-components/action-components";
import { ActionComponentsBatton } from "@/components/hero-block-components/action-components-button";

interface HeroBlockProps {
  img: string;
  Logo: React.FC<LogoProps>;
  pattern?: React.ReactNode;
}

const HeroBlock: React.FC<HeroBlockProps> = ({ img, Logo, pattern }) => {
  return (
    <div className='relative w-full overflow-hidden'>
      {pattern}
      <div className='mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pt-32 lg:flex lg:px-8 lg:py-40'>
        <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:shrink-0 lg:pt-8'>
          <Logo size={197} className='h-11 ' />
          <div className='mt-24 sm:mt-32 lg:mt-16'>
            <ActionComponents />
            <h1 className='mt-10 text-4xl font-bold tracking-tight sm:text-6xl text-balance'>
              Комплексный ремонт "Под ключ"
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-600 text-balance'>
              Мы&nbsp;специализируется на&nbsp;ремонте и&nbsp;внутренней отделке
              квартир.Основные направления&nbsp;&mdash; комплексный ремонт
              &laquo;под ключ&raquo; и&nbsp;индивидуальное проектирование
              интерьеров.
            </p>
            <ActionComponentsBatton />
          </div>
        </div>
        <div className='mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32'>
          <div className='relative pb-16 max-w-3xl flex-none sm:max-w-5xl xl:max-w-none'>
            <div className='-m-2  rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl xl:p-4'>
              <Image
                className='h-auto max-w-full w-[76rem] rounded-md right-1 ring-gray-900/10'
                src={img}
                width={1216}
                height={721}
                alt='App screenshot'
              />
            </div>
            <span className='absolute text-gray-500 max-w-xs text-sm bottom-0'>
              Создание уютного современного проекта на ул. Городская, Москва
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;
