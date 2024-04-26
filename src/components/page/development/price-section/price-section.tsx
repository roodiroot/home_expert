import ButtonAction from "@/components/actions/button-action";
import { Button } from "@/components/ui/elements-button";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

interface PriceSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  head: string;
  description: string;
}

const PriceSection: React.FC<PriceSectionProps> = ({
  head,
  description,
  className,
  ...props
}) => {
  return (
    <div
      className={cn("mx-auto mt-16 max-w-7xl px-6 sm:mt-32 lg:px-8", className)}
      {...props}
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-accent-600 font-semibold leading-7">Цены</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {head}
        </p>
      </div>
      <p className="mx-auto max-w-2xl text-center mt-6 text-lg leading-8 text-gray-600">
        {description}
      </p>
      <div className=" isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
        <div className="rounded-3xl p-8 border border-grey-200">
          <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
            Полистиролбетон
          </h3>
          <p className="mt-4 text-sm leading-6 text-gray-600">
            Строительство дома из полистиролбетона
          </p>
          <p className="mt-6 flex items-baseline gap-x-1">
            <span className="text-4xl font-bold tracking-tight text-gray-900">
              ₽8000
            </span>
            <span className="text-sm font-semibold leading-6 text-gray-600">
              /м²
            </span>
          </p>
          <ButtonAction variant="default" className="mt-6 w-full">
            Заказать
          </ButtonAction>
          <ul className="mt-8 text-sm leading-6 text-gray-600">
            <li className="flex gap-x-3">
              <Icons.symbolOk2 className="flex-none text-accent-600 w-5 h-5" />{" "}
              Фундамент
            </li>
            <li className="flex gap-x-3">
              <Icons.symbolOk2 className="flex-none text-accent-600 w-5 h-5" />{" "}
              Крыша
            </li>
            <li className="flex gap-x-3">
              <Icons.symbolOk2 className="flex-none text-accent-600 w-5 h-5" />{" "}
              Перегородки стен
            </li>
            <li className="flex gap-x-3">
              <Icons.symbolOk2 className="flex-none text-accent-600 w-5 h-5" />{" "}
              Спецтехника -50%
            </li>
          </ul>
        </div>
        <div className="rounded-3xl p-8 border border-grey-200">
          <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
            Газобетон
          </h3>
          <p className="mt-4 text-sm leading-6 text-gray-600">
            Строительство дома из газобетона
          </p>
          <p className="mt-6 flex items-baseline gap-x-1">
            <span className="text-4xl font-bold tracking-tight text-gray-900">
              ₽15000
            </span>
            <span className="text-sm font-semibold leading-6 text-gray-600">
              /м²
            </span>
          </p>
          <ButtonAction variant="default" className="mt-6 w-full">
            Заказать
          </ButtonAction>
          <ul className="mt-8 text-sm leading-6 text-gray-600">
            <li className="flex gap-x-3">
              <Icons.symbolOk2 className="flex-none text-accent-600 w-5 h-5" />{" "}
              Фундамент
            </li>
            <li className="flex gap-x-3">
              <Icons.symbolOk2 className="flex-none text-accent-600 w-5 h-5" />{" "}
              Крыша
            </li>
            <li className="flex gap-x-3">
              <Icons.symbolOk2 className="flex-none text-accent-600 w-5 h-5" />{" "}
              Перегородки стен
            </li>
            <li className="flex gap-x-3">
              <Icons.symbolOk2 className="flex-none text-accent-600 w-5 h-5" />{" "}
              Отмостка
            </li>
            <li className="flex gap-x-3">
              <Icons.symbolOk2 className="flex-none text-accent-600 w-5 h-5" />{" "}
              Спецтехника -50%
            </li>
          </ul>
        </div>
        <div className="rounded-3xl p-8 border border-grey-200">
          <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
            Каркас
          </h3>
          <p className="mt-4 text-sm leading-6 text-gray-600">
            Строительство каркасного дома
          </p>
          <p className="mt-6 flex items-baseline gap-x-1">
            <span className="text-4xl font-bold tracking-tight text-gray-900">
              ₽8000
            </span>
            <span className="text-sm font-semibold leading-6 text-gray-600">
              /м²
            </span>
          </p>
          <ButtonAction variant="default" className="mt-6 w-full">
            Заказать
          </ButtonAction>
          <ul className="mt-8 text-sm leading-6 text-gray-600">
            <li className="flex gap-x-3">
              <Icons.symbolOk2 className="flex-none text-accent-600 w-5 h-5" />{" "}
              Фундамент
            </li>
            <li className="flex gap-x-3">
              <Icons.symbolOk2 className="flex-none text-accent-600 w-5 h-5" />{" "}
              Крыша
            </li>
            <li className="flex gap-x-3">
              <Icons.symbolOk2 className="flex-none text-accent-600 w-5 h-5" />{" "}
              Спецтехника -50%
            </li>
          </ul>
        </div>
        <div className="rounded-3xl p-8 border border-grey-200">
          <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
            Без фундамента
          </h3>
          <p className="mt-4 text-sm leading-6 text-gray-600">
            Фундамент уже готов? Просто поднять стены
          </p>
          <p className="mt-6 flex items-baseline gap-x-1">
            <span className="text-4xl font-bold tracking-tight text-gray-900">
              ₽6000
            </span>
            <span className="text-sm font-semibold leading-6 text-gray-600">
              /м²
            </span>
          </p>
          <ButtonAction variant="default" className="mt-6 w-full">
            Заказать
          </ButtonAction>
          <ul className="mt-8 text-sm leading-6 text-gray-600">
            <li className="flex gap-x-3">
              <Icons.symbolOk2 className="flex-none text-accent-600 w-5 h-5" />{" "}
              Крыша
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
