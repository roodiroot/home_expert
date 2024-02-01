import { PortfolioListType } from "@/utils/constance";
import PortfolioItem from "./portfolio-item";
import Link from "next/link";
import { MoveRight } from "lucide-react";

interface PortfolioListSection {
  list: PortfolioListType[];
}

const PortfolioListSection: React.FC<PortfolioListSection> = ({ list }) => (
  <div className='py-24 sm:py-32'>
    <div className='mx-auto max-w-7xl px-6 lg:px-8'>
      <div className='mx-auto max-w-2xl text-center'>
        <h2 className='text-3xl font-bold tracking-tight sm:text-4xl text-balance'>
          Портфолио готовых проектов
        </h2>
        <p className='mt-2 text-lg leading-8 text-gray-600 text-balance'>
          Тут несколько из многих проектов, которыми мы гордимся.
        </p>
      </div>
      <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
        {list?.map((i) => (
          <PortfolioItem key={i.title} {...i} />
        ))}
      </div>
      <div className='mt-16'>
        <Link
          className='text-accent-600 font-medium flex gap-x-1 items-center'
          href='/projects'
        >
          Смотреть все проекты
          <MoveRight className='w-4' />
        </Link>
      </div>
    </div>
  </div>
);

export default PortfolioListSection;
