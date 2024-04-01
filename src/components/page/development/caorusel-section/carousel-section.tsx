import CarouselBlock from "./carousel-block";

const carusel = [
  {
    img: "/image/renovation/slider/c1.jpg",
    material: "Газобетон",
    square: "250",
    price: "7 300 000",
    title: "Дом с мансардой, террасой и балконом",
  },
  {
    img: "/image/renovation/slider/c2.jpg",
    material: "Газобетон",
    square: "340",
    price: "13 800 000",
    title: "Дом с гаражем и баней",
  },
  {
    img: "/image/renovation/slider/c3.jpg",
    material: "Кирпич",
    square: "260",
    price: "7 230 000",
    title: "Дом в европейском классическом стиле",
  },
  {
    img: "/image/renovation/slider/c6.jpg",
    material: "Газобетон",
    square: "320",
    price: "8 860 000",
    title: "Таунхаус с террасой",
  },
  {
    img: "/image/renovation/slider/c5.jpg",
    material: "Газобетон",
    square: "290",
    price: "11 900 000",
    title: "Дом с мансардой, минимализм",
  },
];

export const CarouselSection = () => {
  return (
    <div className="w-full flex flex-col gap-4 py-24 sm:py-32">
      <CarouselBlock carusel={carusel} />
    </div>
  );
};

export default CarouselSection;
