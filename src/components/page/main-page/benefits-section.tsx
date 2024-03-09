const stats = [
  { id: 1, name: "Опыт на рынке строительных услуг", value: "более 14 лет" },
  {
    id: 2,
    name: "Различной сложности, включая жилые комплексы",
    value: "500 проектов",
  },
  { id: 3, name: "Гарантия на выполненные работы", value: "до 5 лет" },
];

const BenefitsSection = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default BenefitsSection;
