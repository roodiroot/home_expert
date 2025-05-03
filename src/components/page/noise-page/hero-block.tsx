import Image from "next/image";

import ButtonAction from "@/components/actions/button-action";

const HeroBlock = () => {
  return (
    <div className="relative pt-24">
      <div className="relative mx-auto flex max-w-4xl text-gray-900 flex-col items-center px-6 py-32 text-center sm:py-64">
        <h1 className="text-4xl font-bold tracking-tight  lg:text-6xl">
          Тишина — это тоже комфорт
        </h1>
        <p className="mt-4 text-xl">
          Звукоизоляция для тех, кто хочет что бы было тихо.
        </p>
        <ButtonAction className="mt-8">Консультация</ButtonAction>
      </div>
    </div>
  );
};

export default HeroBlock;
