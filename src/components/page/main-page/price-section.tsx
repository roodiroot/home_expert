import ButtonAction from "@/components/actions/button-action";
import { Button } from "@/components/ui/elements-button";
import { CheckIcon } from "lucide-react";

const includedFeatures = [
  "Профессиональная команда",
  "Соблюдение сроков",
  "Гарантийное обслуживание",
  "Полный контроль и прозрачность",
];

const PriceSection = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Оценка Стоимости кв. метра
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Мы предлагаем прозрачную ценовую политику без скрытых платежей,
            обеспечивая вас полным контролем над бюджетом вашего проекта.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Профессиональный ремонт квартир
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Запишитесь на консультацию с нашими экспертами, чтобы обсудить ваш
              проект и узнать, как мы можем помочь воплотить ваши идеи в жизнь.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                Вы получите
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  за 1м² от
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    3 890
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    РУБ.
                  </span>
                </p>
                <div className="w-full mt-10">
                  <ButtonAction className=" mx-auto">
                    Заказать ремонт
                  </ButtonAction>
                </div>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Снимем с Вас все заботы по поводу ремонта Вашей квартиры
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
