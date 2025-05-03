import { ServiceNode } from "@/data/serviceprice-api";
import PriceList from "./price-list";
import CounterSection from "./counter/counter-section";

interface PriceSectionProps extends React.HtmlHTMLAttributes<HTMLUListElement> {
  priceList?: ServiceNode[];
}

const PriceSection: React.FC<PriceSectionProps> = ({ priceList }) => {
  return (
    <div className="bg-white pb-24 pt-20 lg:pt-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <CounterSection />
        <PriceList priceList={priceList} />
      </div>
    </div>
  );
};

export default PriceSection;
