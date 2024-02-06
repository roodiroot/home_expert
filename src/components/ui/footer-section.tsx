import Logo from "@/components/ui/logo";
import IconCombain from "@/utils/icon-combain";
import Link from "next/link";

const FooterSection = () => {
  return (
    <div className='mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32'>
      <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
        <div className='space-y-8'>
          <Logo className='h-14' />
          <p className='text-sm leading-6 text-gray-600 text-balance'>
            Комплексный ремонт помещений и индивидуальное проектирование
            интерьеров.
          </p>
          <div className='flex space-x-6'>
            <a href={process.env.NEXT_PUBLIC_TG}>
              <IconCombain variant='tg' color='#9CA3AF' size={24} />
            </a>
            <a href={process.env.NEXT_PUBLIC_WS}>
              <IconCombain variant='wa' color='#9CA3AF' />
            </a>
          </div>
        </div>
        <div className='mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
          <div className='md:grid md:grid-cols-2 md:gap-8'>
            <div>
              <h3 className='text-sm font-semibold leading-6'>Телефоны</h3>
              <ul className='mt-6 space-y-4'>
                <li className='flex flex-col'>
                  <span className='text-sm'></span>
                  <a
                    className='font-medium'
                    href={`tel:${process.env.NEXT_PUBLIC_PHONE1}`}
                  >
                    {process.env.NEXT_PUBLIC_PHONE1}
                  </a>
                </li>
                <li className='flex flex-col'>
                  <span className='text-sm'></span>
                  <a
                    className='font-medium'
                    href={`tel:${process.env.NEXT_PUBLIC_PHONE2}`}
                  >
                    {process.env.NEXT_PUBLIC_PHONE2}
                  </a>
                </li>
              </ul>
            </div>
            <div className='mt-10 md:mt-0'>
              <h3 className='text-sm font-semibold leading-6'>Почты</h3>
              <ul className='mt-6 space-y-4'>
                <li className='flex flex-col '>
                  <span className='text-sm'>карьера:</span>
                  <a
                    className='font-medium whitespace-nowrap'
                    href={`mailto:${process.env.NEXT_PUBLIC_EMAIL1}`}
                  >
                    {process.env.NEXT_PUBLIC_EMAIL1}
                  </a>
                </li>
                <li className='flex flex-col'>
                  <span className='text-sm'>задать вопрос:</span>
                  <a
                    className='font-medium  whitespace-nowrap'
                    href={`mailto:${process.env.NEXT_PUBLIC_EMAIL2}`}
                  >
                    {process.env.NEXT_PUBLIC_EMAIL2}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='md:grid md:grid-cols-1 md:gap-8'>
            <div className='mt-10 md:mt-0'>
              <h3 className='text-sm font-semibold leading-6'>Разработка</h3>
              <ul className='mt-6 space-y-4 text-sm leading-5'>
                <li className=''>
                  <a href='https://matryoshka-studio.ru'>
                    Этот сайт придумала и разработала веб студия{" "}
                    <span className='font-semibold'>"Матрёшка"</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-16 border-t  pt-8 sm:mt-20 lg:mt-24'>
        <p className='text-xs leading-5 text-gray-600'>
          © 2023 ДомЭксперт,{" "}
          <Link href={"/doc/privacy-policy"} className='underline'>
            Политика конфиденциальности
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FooterSection;
