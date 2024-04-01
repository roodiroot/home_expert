const FooterPhones = () => (
  <div>
    <h3 className="text-sm font-semibold leading-6">Телефоны</h3>
    <ul className="mt-6 space-y-4">
      <li className="flex flex-col">
        <span className="text-sm">Консультация:</span>
        <a
          className="font-medium"
          href={`tel:${process.env.NEXT_PUBLIC_PHONE1}`}
        >
          {process.env.NEXT_PUBLIC_PHONE1}
        </a>
      </li>
      <li className="flex flex-col">
        <span className="text-sm">Оставить отзыв:</span>
        <a
          className="font-medium"
          href={`tel:${process.env.NEXT_PUBLIC_PHONE2}`}
        >
          {process.env.NEXT_PUBLIC_PHONE2}
        </a>
      </li>
    </ul>
  </div>
);

export default FooterPhones;
