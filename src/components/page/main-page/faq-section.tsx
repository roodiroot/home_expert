export const FaqSection: React.FC<{ faqList: any[] }> = ({ faqList }) => {
  return (
    <div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40'>
      <h2 className='text-2xl font-bold leading-10 tracking-tight text-balance'>
        Частые вопросы которые задают наши клиенты
      </h2>
      <div className='mt-10 space-y-8'>
        {faqList?.map((i) => (
          <FaqRow key={i.question} q={i.question} a={i.answer} />
        ))}
      </div>
    </div>
  );
};

const FaqRow: React.FC<{ q: string; a: string }> = ({ q, a }) => (
  <div className='pt-8 lg:grid lg:grid-cols-12 lg:gap-8 border-t '>
    <dt className='font-semibold leading-7 lg:col-span-5 text-balance'>{q}</dt>
    <dd className='mt-4 lg:col-span-7 lg:mt-0'>
      <p className='leading-7 text-gray-600 text-balance'>{a}</p>
    </dd>
  </div>
);
