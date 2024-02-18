"use client";

import { Icons } from "@/components/ui/icons";
import OfferForm from "@/components/absolute-elements/befor-unload-popup/offer-form";
import OfferText from "@/components/absolute-elements/befor-unload-popup/offer-text";

interface OfferSectorProps {
  handleUnsubscription: () => void;
}

const OfferSector: React.FC<OfferSectorProps> = ({ handleUnsubscription }) => (
  <div className='relative flex-1 p-6 flex items-center justify-center'>
    <Icons.ex
      className='absolute top-4 right-4 w-8 h-8 cursor-pointer'
      onClick={handleUnsubscription}
    />
    <div className='space-y-12'>
      <OfferText
        title='Скидка 35%'
        subTitle='Для Вас'
        description='Персональное предложение'
      />
      <OfferForm handleUnsubscription={handleUnsubscription} />
    </div>
  </div>
);

export default OfferSector;
