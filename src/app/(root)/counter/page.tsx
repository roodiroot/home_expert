import { Metadata } from "next";
import Image from "next/image";

import CounterForm from "@/components/counter-page-components/counter-form";
import { DescriptionElement, TitleElement } from "@/components/ui/h2-element";
import Logo from "@/components/ui/logo";

export const metadata: Metadata = {
  title: "Расчет стоимости ремонта",
  description:
    "Узнайте сколько будет стоить сделать ремонт в вашем доме, создание дизайн проекта",
};

export default function Counter() {
  return (
    <div className="bg-white relative">
      <div className="lg:absolute lg:inset-0 lg:left-1/2 ">
        <Image
          alt="design screnshot"
          src="/image/counter.jpg"
          width={700}
          height={1300}
          className="h-[16rem] w-full bg-gray-50 object-cover sm:h-[20rem] lg:absolute lg:h-full"
        />
      </div>
      <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-64">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            {/* <Logo className='h-11' /> */}
            <TitleElement text="Расчет стоимости ремонта" className="mt-16" />
            <DescriptionElement
              className="mt-2"
              text="Просто введите необходимые параметры вашего помещения и получите предварительный расчет стоимости ремонта помещения за несколько кликов."
            />
            <CounterForm className="mt-16" />
          </div>
        </div>
      </div>
    </div>
  );
}
