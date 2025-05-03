import { ServiceNode } from "@/data/serviceprice-api";
import PriceItem from "./price-item";

interface PriceListProps extends React.HtmlHTMLAttributes<HTMLUListElement> {
  priceList?: ServiceNode[];
}
const PriceList: React.FC<PriceListProps> = ({ priceList }) => {
  return (
    <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
      {priceList?.map((item) => (
        <PriceItem
          key={item.id}
          title={item.fieldsServicePrice.title}
          description={item.fieldsServicePrice.description}
          price={item.fieldsServicePrice.price}
          img={item.fieldsServicePrice.image.node.link}
        />
      ))}
    </ul>
  );
};

export default PriceList;
