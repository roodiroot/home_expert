import { LinkButton } from "@/components/animation-component/link-button";
import TypeCard from "./type-card";
import ButtonAction from "@/components/actions/button-action";

const types = [
  {
    title: "Строительство каркасных домов",
    description:
      "Мы гарантируем строительство вашего дома всего за 3-4 месяца, обеспечивая при этом экономию до 20% на эксплуатационных расходах благодаря высокой теплоизоляции и долговечности материалов.",
    image: "/image/k.jpeg",
    price: "от 960 000 ₽",
  },
  {
    title: "Строительство домов из газобетона",
    description:
      "Срок возведения такого дома составляет всего 4-5 месяцев, при этом газобетон обеспечивает высокую звукоизоляцию и долговечность, гарантируя комфорт и спокойствие на десятилетия вперед.",
    image: "/image/renovation/types/t2.jpg",
    price: "от 3 490 000 ₽",
  },
  {
    title: "Строительство домов из кирпича",
    description:
      "Благодаря нашему уникальному подходу, мы обеспечиваем увеличение энергоэффективности на 25% по сравнению с традиционными кирпичными домами, а сроки строительства сокращаются до 6 месяцев, что позволяет вам быстрее насладиться комфортом и теплом вашего нового дома.",
    image: "/image/renovation/types/t3.jpg",
    price: "от 4 640 000 ₽",
  },
  {
    title: "Строительство домов из полистиролбетонных блоков",
    description:
      "Наши дома возводятся на 50% быстрее, чем традиционные каменные сооружения, позволяя вам въехать в свой новый дом всего за 4 месяца. Мы делаем доступным комфорт и экологичность, предлагая долговечное жильё с превосходными звукоизоляционными свойствами.",
    image: "/image/renovation/types/t4.jpg",
    price: "от 1 200 000 ₽",
  },
];

const TypesSection = () => {
  return (
    <div className="relative">
      <div className="absolute -z-10 inset-0 bg-gray-100 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" />
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32  lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:px-8">
        <div className="lg:sticky lg:top-32">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-balance">
            От идеи до Вашего порога
          </h2>
          <p className="mt-4 text-gray-500 text-xl">
            Мы воплощаем ваши мечты в жизнь, предлагая эксклюзивные проекты от
            строительства новых домов до реализации уникальных индивидуальных
            заказов.
          </p>
          <div className="mt-4">
            <ButtonAction variant="link">
              Заказать строительство дома
            </ButtonAction>
          </div>
        </div>
        <div className="flex flex-col gap-10 sm:gap-14 lg:gap-16">
          {types.map((type) => (
            <TypeCard
              key={type.title}
              title={type.title}
              description={type.description}
              image={type.image}
              price={type.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TypesSection;
