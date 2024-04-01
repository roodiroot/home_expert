const FooterAdreses = () => (
  <div className="mt-10 md:mt-0">
    <h3 className="text-sm font-semibold leading-6">Адрес</h3>
    <ul className="mt-6 space-y-4">
      <li className="flex flex-col">
        <address className="text-sm font-normal">
          Москва, улица Тимура Фрунзе, 11к2
        </address>
      </li>
      <li className="flex flex-col ">
        <span className="text-sm">карьера:</span>
        <a
          className="font-medium text-xs sm:text-sm whitespace-nowrap line-clamp-1"
          href={`mailto:${process.env.NEXT_PUBLIC_EMAIL1}`}
        >
          {process.env.NEXT_PUBLIC_EMAIL1}
        </a>
        <span className="text-sm">задать вопрос:</span>
        <a
          className="font-medium text-xs sm:text-sm  whitespace-nowrap line-clamp-1"
          href={`mailto:${process.env.NEXT_PUBLIC_EMAIL2}`}
        >
          {process.env.NEXT_PUBLIC_EMAIL2}
        </a>
      </li>
    </ul>
  </div>
);

export default FooterAdreses;
