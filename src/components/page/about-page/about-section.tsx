import { Candy, KeyRound, ShieldCheck } from "lucide-react";
import Image from "next/image";

const AboutSection = () => {
  const materials = [
    {
      id: 1,
      Icon: Candy,
      title: "Индивидуальный подход.",
      description:
        "Мы уделяем особое внимание пожеланиям и требованиям каждого клиента, обеспечивая тем самым максимальную удовлетворенность результатом.",
    },
    {
      id: 2,
      Icon: ShieldCheck,
      title: "Качество и надежность.",
      description:
        "Используя только проверенные материалы и последние технологии, мы гарантируем высокое качество и долговечность всех наших строений и ремонтных работ.",
    },
    {
      id: 3,
      Icon: KeyRound,
      title: "Полный спектр услуг.",
      description:
        "От проектирования до сдачи объекта «под ключ» — мы предлагаем полный комплекс услуг, чтобы вы могли реализовать свою мечту о идеальном доме без лишних хлопот.",
    },
  ];
  return (
    <div className="relative bg-white lg:pt-12 pb-32">
      <div className="max-w-7xl mx-auto lg:px-8 lg:flex lg:justify-between xl:justify-end">
        <div className=" lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-[20rem] lg:ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <Image
              alt="bgPhoto"
              priority
              width={648}
              height={1476}
              src={"/image/about/a.jpg"}
              className="w-full h-full absolute inset-0 bg-gray-50 object-cover"
            />
          </div>
        </div>
        <div className="px-6 lg:contents ">
          <div className="mx-auto max-w-2xl pb-1 pt-16 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2 ">
            <p className="text-base font-semibold leading-7 text-accent-600">
              О наc
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Взгляните внутрь нашей компании
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Добро пожаловать в&nbsp;ДомЭксперт&nbsp;&mdash; вашего надежного
              партнера в&nbsp;мире строительства и&nbsp;ремонта.
            </p>
            <div className="mt-10 max-w-xl leading-7 text-gray lg:max-w-none ">
              <p>
                С&nbsp;2010 года мы&nbsp;предлагаем комплексные решения
                в&nbsp;области строительства домов и&nbsp;коттеджей, используя
                самые современные и&nbsp;экологически чистые материалы, включая
                кирпич, каркасные конструкции, газобетон
                и&nbsp;полистиролбетонные блоки.
              </p>
              <dl className="mt-10 max-w-xl lg:max-w-none text-gray-600 text-base leading-7">
                {materials.map((m) => (
                  <div key={m.id} className="relative pl-10 mt-8">
                    <m.Icon
                      className="absolute w-5 h-5 top-1 left-1 text-accent-600"
                      aria-hidden="true"
                    />
                    <span className="font-semibold text-gray-900">
                      {m.title}
                    </span>
                    <span> {m.description}</span>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mt-8">
              Наша компания также специализируется на&nbsp;качественном ремонте
              и&nbsp;отделке внутренних помещений, превращая каждое пространство
              в&nbsp;уникальное и&nbsp;функциональное решение, максимально
              отвечающее потребностям клиента.
            </div>
            <h2 className="mt-24 text-2xl font-bold -space-x-1 text-gray-900 ">
              Наша гордость.
            </h2>
            <p className="mt-6">
              В&nbsp;ДомЭксперт, мы&nbsp;гордимся тем, что можем предложить
              не&nbsp;просто услуги, но&nbsp;и&nbsp;ценные решения, которые
              обогатят вашу жизнь и&nbsp;принесут радость от&nbsp;владения
              идеальным домом. Начните свой проект с&nbsp;нами сегодня
              и&nbsp;почувствуйте разницу, работая с&nbsp;лучшими.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
