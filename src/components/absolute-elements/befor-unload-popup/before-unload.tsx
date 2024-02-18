"use client";

import { useState } from "react";
import { useExitIntent } from "use-exit-intent";

import ImageSector from "@/components/absolute-elements/befor-unload-popup/image-sector";
import OfferSector from "@/components/absolute-elements/befor-unload-popup/offer-sector";

export default function BeforeUnloadComponent() {
  const { unsubscribe, registerHandler } = useExitIntent();
  const [showModal, setShowModal] = useState(false);

  registerHandler({
    id: "openModal",
    handler: () => {
      setShowModal(true);
    },
  });

  const handleUnsubscription = () => {
    unsubscribe();
    setShowModal(false);
  };

  if (!showModal) {
    return null;
  }

  return (
    <div className='fixed z-50 top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm  flex items-center justify-center z-full p-4'>
      <div className='bg-white flex  h-auto'>
        <ImageSector />
        <OfferSector handleUnsubscription={handleUnsubscription} />
      </div>
    </div>
  );
}
