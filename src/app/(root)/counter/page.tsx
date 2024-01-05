import Image from "next/image";

import CounterFormProps from "@/components/counter-page-components/counter-form";
import { DescriptionElement, TitleElement } from "@/components/ui/h2-element";
import Logo from "@/components/ui/logo";

export default function Counter() {
  return (
    <div className='bg-white'>
      <div className='lg:absolute lg:inset-0 lg:left-1/2'>
        <Image
          alt='design screnshot'
          src='/image/counter.jpg'
          width={700}
          height={1300}
          className='h-[16rem] w-full bg-gray-50 object-cover sm:h-[20rem] lg:absolute lg:h-full'
        />
      </div>
      <div className='pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32'>
        <div className='px-6 lg:px-8'>
          <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg'>
            <Logo className='h-11' />
            <TitleElement text='Расчет стоимости ремонта' className='mt-16' />
            <DescriptionElement
              className='mt-2'
              text='Просто введите необходимые параметры вашего помещения и получите мгновенный, предварительный расчет стоимости ремонта помещения за несколько кликов. Нажмите на кнопку рассчитать.'
            />
            <CounterFormProps className='mt-16' />
          </div>
        </div>
      </div>
    </div>
  );
}
