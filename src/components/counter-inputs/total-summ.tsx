import CounterTitleElement from "../counter-page-components/counter-title-element";

interface TotalSummProps extends React.HtmlHTMLAttributes<HTMLElement> {
  title: string;
  description?: string;
  value: number;
}

const TotalSumm: React.FC<TotalSummProps> = ({
  title,
  description,
  className,
  value,
  ...props
}) => {
  return (
    <div className={className} {...props}>
      <CounterTitleElement title={title} description={description} />
      <div className='relative block mt-4'>
        <span>{value} ₽</span>
      </div>
    </div>
  );
};

export default TotalSumm;
