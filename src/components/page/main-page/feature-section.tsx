import Image from "next/image";

import {
  DescriptionElement,
  H2Element,
  TitleElement,
} from "@/components/ui/h2-element";

export const FeatureSection: React.FC<{ img: string; list: any[] }> = ({
  img,
  list,
}) => {
  return (
    <div className='overflow-hidden bg-white py-24 s:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          <div className='lg:ml-auto lg:pl-4 lg:pt-4'>
            <div className='max-w-lg'>
              <H2Element text='Консультация' />
              <TitleElement
                text='Забронируйте бесплатную консультацию'
                className='mt-2'
              />
              <DescriptionElement
                text='Ответим на все ваши вопросы, поможем сформировать видение вашего идеального дома и предложим оптимальные решения для реализации вашей мечты.'
                className='mt-6 text-lg leading-8'
              />
              <div className='mt-10 max-w-xl  lg:max-w-none space-y-8'>
                {list?.map((j) => (
                  <BlockItem
                    key={j.title}
                    title={j.title}
                    text={j.text}
                    Icon={j.Icon}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className='relative pb-16 flex items-start justify-end lg:order-first'>
            <Image
              src={img}
              width={912}
              height={608}
              className='w-[48rem] max-w-none rounded-xl ring-1 ring-gray-400/10 sm:w-[57rem]'
              alt='screen'
            />
            <span className='absolute text-gray-500 text-right max-w-xs text-sm bottom-4 right-4'>
              Создание уютного современного проекта на ул. Городская, Москва
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlockItem: React.FC<{
  title: string;
  text: string;
  Icon: React.ReactNode;
}> = ({ title, text, Icon }) => (
  <div className='relative pl-9 leading-7 text-balance'>
    <div className='absolute left-1 top-1'>{Icon}</div>
    <dt className='inline font-semibold'>{title}</dt>{" "}
    <dd className='inline text-gray-600'>{text}</dd>
  </div>
);
