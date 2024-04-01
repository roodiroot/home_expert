import ButtonAction from "@/components/actions/button-action";
import { LinkButton } from "@/components/animation-component/link-button";
import { Icons } from "@/components/ui/icons";
import Image from "next/image";

const ctaArguments = [
  "Персонализированный дизайн",
  "Качественное выполнение",
  "Экономия времени и средств",
  "Современные решения",
  "Юридическая защита",
  "Психологическое спокойствие",
];

const CTASection = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="relative isolate ">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl px-6 py-16 flex-col gap-16 bg-gray-50 ring-1 ring-gray-200 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20">
            <div className="relative overflow-hidden h-96 w-full flex-none rounded-2xl shadow-xl lg:aspect-square lg:h-auto lg:w-96">
              <Image
                width={500}
                height={384}
                alt="cta_image"
                className="w-full h-full object-cover"
                src="/image/renovation/types/cta.jpg"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 to-gray-900/30"></div>
            </div>
            <div className="w-full flex-auto">
              <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Бесплатное архитектурное исследование
              </h3>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Строя дом с нами, вы так же получите уникальный авторский надзор
                от выбранного архитектора на всех этапах работы, гарантируя
                идеальное воплощение вашего проекта.
              </p>
              <ul className="mt-10 grid grid-cols-1 gap-y-3 gap-x-8 leading-7 text-gray-900 sm:grid-cols-2">
                {ctaArguments.map((i) => (
                  <li key={i} className="flex items-center gap-x-3 font-medium">
                    <Icons.symbolOk className="w-5 h-5 flex-none fill-accent-600/60" />
                    {i}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <ButtonAction variant="link">
                  Записаться на встречу с архитктором
                </ButtonAction>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
