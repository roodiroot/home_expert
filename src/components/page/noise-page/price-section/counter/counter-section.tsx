import Image from "next/image";
import CounterForm from "./counter-form";
import { TitleElement } from "@/components/ui/h2-element";

const CounterSection = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <div className="flex-1 max-w-2xl mx-auto lg:mx-0">
        <TitleElement text="Расчет цены" className="mt-2 " />
        <CounterForm className="lg:pr-10 mt-10" />
      </div>
      <div className="flex-1 min-h-full">
        <div className="bg-gray-50 w-full h-full relative overflow-hidden shadow-xl sm:rounded-[40px]">
          <Image
            src="/image/noise-page/counter.jpg"
            alt="Noise content image"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
