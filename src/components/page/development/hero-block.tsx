import ButtonAction from "@/components/actions/button-action";
import { Button } from "@/components/animation-component/button";
import Image from "next/image";

const HeroBlock = () => {
  return (
    <div className="bg-gray-900 relative pt-24">
      <div className="absolute overflow-hidden inset-0">
        <Image
          fill={true}
          quality={90}
          priority
          className="h-full w-full object-cover object-center"
          src={"/image/renovation/m1.jpg"}
          alt="Главная картинка"
        />
      </div>
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64">
        <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
          Загородное строительство
        </h1>
        <p className="mt-4 text-xl text-white">
          Мы создаём дома, наполненные счастьем и любовью, отражающие нашу
          страсть в каждой детали - ДомЭксперт.
        </p>
        <ButtonAction className="mt-8">Консультация</ButtonAction>
      </div>
    </div>
  );
};

export default HeroBlock;
