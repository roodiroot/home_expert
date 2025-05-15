"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ButtonAction from "@/components/actions/button-action";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { TitleElement } from "@/components/ui/h2-element";

const ctaArguments = [
  {
    type: "Потолок",
    value: "potolok",
    title: "Звукоизоляция потолка",
    img: "/image/solutions/ceiling-standard.jpg",
    description:
      "Системы звукоизоляции потолка обладают высокими значениями дополнительной изоляции воздушного шума, а также в определенной мере обладают способностью защиты помещения от проникновения в него ударного шума.",
    readyMadeSystemsValue: [
      {
        title: "Под натяжной в 1 слой",
        price: "от 600-1600 ₽/м2",
      },
      {
        title: "На каркасе основа",
        price: "от 2200-3700 ₽/м2",
      },
      {
        title: "2 слоя, через рейку",
        price: "от 1200-2400 ₽/м2",
      },
      {
        title: "Максимально",
        price: "от 4100-6200 ₽/м2",
      },
    ],
    solutions: [
      {
        title: "Комплект для потолка стандарт.",
        img: "/image/solutions/ceiling-standard.jpg",
        thickness: "69/90мм.",
        noiseReduction: "69/71 дБ.",
        airborneSoundImprovementIndex: "ΔRw =18 дБ.",
        impactNoiseImprovementIndex: "ΔRw =15 дБ.",
        priceMaterial: "от 5800 р м2",
        priceService: "от 3400 р м2",
      },
      {
        title: "Комплект для потолка премиум.",
        img: "/image/solutions/ceiling-premium.jpg",
        thickness: "81/95мм.",
        noiseReduction: "72/75 дБ.",
        airborneSoundImprovementIndex: "ΔRw =20/22 дБ.",
        impactNoiseImprovementIndex: "ΔRw =16 дБ.",
        priceMaterial: "от 6500 р м2",
        priceService: "от 4100 р м2",
      },
    ],
  },
  {
    type: "Стены",
    value: "steny",
    title: "Звукоизоляция стен",
    img: "/image/solutions/walls-1.jpg",
    description:
      "Конструкции звукоизоляции стен, надежное и эффективное решение для создания тихого и комфортного пространства. Обеспечивает высокую степень поглощения шума, создавая идеальные условия для работы, отдыха или концентрации.",
    readyMadeSystemsValue: [
      {
        title: "Слим от 22мм",
        price: "от 1300 ₽/м2",
      },
      {
        title: "На каркасе основа",
        price: "от 2200 ₽/м2",
      },
      {
        title: "ЗИПС 40-52,5мм",
        price: "от 1500 ₽/м2",
      },
      {
        title: "Максимально",
        price: "от 3700 ₽/м2",
      },
    ],
    solutions: [
      {
        title: "Тонкая звукоизоляция стен 3,5см",
        img: "/image/solutions/walls-1.jpg",
        thickness: "25/35мм.",
        noiseReduction: "54/58 дБ.",
        airborneSoundImprovementIndex: "ΔRw =8/9 дБ.",
        impactNoiseImprovementIndex: null,
        priceMaterial: "от 2300 р м2",
        priceService: "от 1300 р м2",
      },
      {
        title: "Бескаркасная система ЗИПС",
        img: "/image/solutions/walls-2.png",
        thickness: "42/52мм.",
        noiseReduction: "61 дБ.",
        airborneSoundImprovementIndex: null,
        impactNoiseImprovementIndex: null,
        priceMaterial: "от 3500 р м2",
        priceService: "от 1500 р м2",
      },
      {
        title: "Комплект для стен стандарт.",
        img: "/image/solutions/walls-3.jpg",
        thickness: "69мм.",
        noiseReduction: "62/69 дБ.",
        airborneSoundImprovementIndex: null,
        impactNoiseImprovementIndex: null,
        priceMaterial: "от 5000 р м2",
        priceService: "от 3000 р м2",
      },
      {
        title: "Комплект для стен премиум.",
        img: "/image/solutions/walls-4.jpg",
        thickness: "от 81мм.",
        noiseReduction: "70/74 дБ.",
        airborneSoundImprovementIndex: "ΔRw =20/24 дБ.",
        impactNoiseImprovementIndex: null,
        priceMaterial: "от 7500 р м2",
        priceService: "от 3700 р м2",
      },
    ],
  },
  {
    type: "Полы и перегородки",
    value: "poly",
    title: "Звукоизоляция полов и перегородок",
    img: "/image/solutions/floor-1.jpg",
    description:
      'Звукоизолирующие конструкции полов с устройством "плавающей" цементно-песчаной стяжки или под чистый пол. Звукоизоляционные системы для разделения двух помещений друг от друга с одним или двойным каркасом.',
    readyMadeSystemsValue: [
      {
        title: "Пола",
        price: "от 350 ₽/м2",
      },
      {
        title: "Перегородок",
        price: "от 2000 ₽/м2",
      },
    ],
    solutions: [
      {
        title: "Шумоизоляция под плавающую стяжку.",
        img: "/image/solutions/floor-1.jpg",
        thickness: "4,5/10/15/20/40мм.",
        noiseReduction: "60/70 дБ.",
        airborneSoundImprovementIndex: null,
        impactNoiseImprovementIndex: null,
        priceMaterial: "от 500 р м2",
        priceService: "от 350 р м2",
      },
      {
        title: "Шумоизоляция под финишное покрытие.",
        img: "/image/solutions/floor-2.jpg",
        thickness: "7/16/28/36мм.",
        noiseReduction: "58/66 дБ.",
        airborneSoundImprovementIndex: null,
        impactNoiseImprovementIndex: null,
        priceMaterial: "от 1200 р м2",
        priceService: "от 700 р м2",
      },
      {
        title: "Перегородка один каркас.",
        img: "/image/solutions/partition-1.jpg",
        thickness: "104/114мм.",
        noiseReduction: "58/65 дБ.",
        airborneSoundImprovementIndex: null,
        impactNoiseImprovementIndex: null,
        priceMaterial: "от 1500 р м2",
        priceService: "от 2000 р м2",
      },
      {
        title: "Перегородка двойной каркас.",
        img: "/image/solutions/partition-2.jpg",
        thickness: "от 168/179мм.",
        noiseReduction: "66/70 дБ.",
        airborneSoundImprovementIndex: null,
        impactNoiseImprovementIndex: null,
        priceMaterial: "от 2000 р м2",
        priceService: "от 2400 р м2",
      },
    ],
  },
];

const TabsSection = () => {
  return (
    <div className="bg-white pb-24 pt-20 lg:pt-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <TitleElement text="Готовые решения" className="mt-2 text-center" />
        <Tabs defaultValue="potolok" className="mt-12">
          <TabsList className="flex w-full flex-col sm:flex-row justify-center gap-4">
            {ctaArguments.map((i) => (
              <TabsTrigger key={i.value} value={i.value} className="">
                {i.type}
              </TabsTrigger>
            ))}
          </TabsList>
          {ctaArguments.map((i) => (
            <TabsContent
              key={i.value}
              value={i.value}
              className="mt-10 -mx-6 sm:mx-0"
            >
              <div className="mx-auto flex max-w-2xl px-6 py-16 flex-col gap-16 bg-gray-50 ring-1 ring-gray-200 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20">
                <div className="relative overflow-hidden h-96 w-full flex-none rounded-2xl shadow-xl lg:aspect-square lg:h-auto lg:w-96">
                  <Image
                    width={500}
                    height={384}
                    alt="cta_image"
                    className="w-full h-full object-cover"
                    src={i.img}
                    priority
                  />

                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 to-gray-900/30"></div>
                </div>
                <div className="w-full flex-auto">
                  <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {i.title}
                  </h3>
                  <p className="mt-6 leading-8 text-gray-600">
                    {i.description}
                  </p>
                  <ul className="mt-10 bg-white p-4 rounded-lg border border-1 grid grid-cols-1 gap-y-3 gap-x-8 leading-7 text-gray-900 sm:grid-cols-2">
                    {i.readyMadeSystemsValue.map((item) => (
                      <li key={item.title}>
                        <div className="text-sm">{item.title}</div>
                        <div className="text-xl font-bold">{item.price}</div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10">
                    <ButtonAction variant="link">
                      Оставить заявку на замер
                    </ButtonAction>
                  </div>
                </div>
              </div>
              <div className="mx-auto mt-20  max-w-7xl px-6 lg:px-8">
                <ul className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                  {i.solutions.map((item) => (
                    <li key={item.title}>
                      <div className="aspect-[3/2] relative w-full rounded-2xl bg-gray-100 border-gray-200 overflow-hidden">
                        <Image
                          src={item.img}
                          width={700}
                          height={350}
                          alt="portfolio screen"
                          className={cn(
                            "w-full h-full object-cover cursor-pointer"
                          )}
                        />
                      </div>
                      <div className="mt-6">
                        <h3 className="text-base font-semibold tracking-tight">
                          {item.title}
                        </h3>
                        <div className="mt-4 text-xs text-gray-600 line-clamp-3">
                          <div className="flex gap-2 justify-between">
                            <span>Толщина:</span>
                            <span className="font-bold text-gray-900">
                              {item.thickness}
                            </span>
                          </div>
                          <div className="flex gap-2  justify-between">
                            <span>Снижение шума:</span>
                            <span className="font-bold text-gray-900">
                              {item.noiseReduction}
                            </span>
                          </div>
                          {item?.airborneSoundImprovementIndex && (
                            <div className="flex gap-2 justify-between">
                              <span>Индекс звукоизоляции:</span>
                              <span className="font-bold text-gray-900">
                                {item.airborneSoundImprovementIndex}
                              </span>
                            </div>
                          )}
                          {item?.impactNoiseImprovementIndex && (
                            <div className="flex gap-2 justify-between">
                              <span>Индекс ударного шума:</span>
                              <span className="font-bold text-gray-900">
                                {item?.impactNoiseImprovementIndex}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="mt-4 flex gap-4">
                          <div className="flex flex-col">
                            <span className="text-sm text-gray-600">
                              Материал
                            </span>
                            <span className="text-accent-600 font-semibold text-lg line-clamp-1">
                              {item.priceMaterial}
                            </span>
                          </div>
                          <div className="flex flex-col pl-4 border-l border-gray-300">
                            <span className="text-sm text-gray-600">
                              Монтаж
                            </span>
                            <span className="text-accent-600 font-semibold text-lg  line-clamp-1">
                              {item.priceService}
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      ;
    </div>
  );
};

export default TabsSection;
