import {
  IconCalendar,
  IconCase,
  IconGarant,
  IconHome,
} from "@/components/animation-icons/icons";
import BenefitItem from "./benefit-item";

const benefits = [
  {
    title: "Больше 14 лет опыта",
    description:
      "Работаем в области строительства, и имеем в штате только квалефицировнных специалистов",
    Icon: IconHome,
  },
  {
    title: "500 проектов",
    description:
      "Более 500 типовых и индивидуальных проектов было реалезовано за это время.",
    Icon: IconCase,
  },
  {
    title: "Соблюдение сроков",
    description:
      "Мы гарантируем что всегда выполняем работу в срок, в противном случае вернем деньги",
    Icon: IconCalendar,
  },
  {
    title: "10 лет гарантии",
    description:
      "Средний срок гарантии на предоставляемые нами работы. Все строго прописано в договоре.",
    Icon: IconGarant,
  },
];

const BenefitsSection = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
        {benefits.map((benefit, index) => (
          <BenefitItem
            key={benefit.title + index}
            title={benefit.title}
            description={benefit.description}
          >
            <benefit.Icon className="-my-1 mx-auto w-24 h-24" />
          </BenefitItem>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
