import Image from "next/image";

import {
  ActionComponents,
  // ActionComponentsBatton,
} from "@/components/hero-block-components/action-components";
import { ActionComponentsBatton } from "@/components/hero-block-components/action-components-button";

interface HeroBlockProps {
  img: string;
  pattern?: React.ReactNode;
}

const HeroBlock: React.FC<HeroBlockProps> = ({ img, pattern }) => {
  return (
    <div className="relative w-full overflow-hidden">
      {pattern}
      <div className="mx-auto max-w-7xl px-6  pt-10 sm:pt-32 lg:flex lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:shrink-0 lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <ActionComponents />
            <h1 className="mt-10 text-4xl font-bold tracking-tight sm:text-6xl text-balance">
              Превращаем Ваше пространство в мечту
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-balance">
              Доверьте нам ремонт и отделку вашего помещения. Мы гарантируем
              современный дизайн и безупречное качество, превращая ваш дом или
              офис в уютное пространство.
            </p>
            <ActionComponentsBatton />
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="relative pb-4 max-w-3xl flex-none sm:max-w-5xl xl:max-w-none">
            <div className="-m-2  rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl xl:p-4">
              <Image
                className="h-auto max-w-full w-[76rem] rounded-md right-1 ring-gray-900/10"
                src={img}
                priority
                width={1216}
                height={721}
                alt="App screenshot"
              />
            </div>
            {/* <span className="absolute text-gray-500 max-w-xs text-sm bottom-0">
              Дизайн и ремонт дома на ул. Ломоносова, Москва
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;
