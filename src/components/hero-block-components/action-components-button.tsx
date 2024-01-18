"use client";

import useModal from "@/hooks/useModal";
import { Button } from "../ui/elements-button";
import LinkButton from "../ui/link-button";

export const ActionComponentsBatton = () => {
  const { onOpen } = useModal();
  return (
    <div className='mt-10 flex items-center sm:gap-x-6'>
      <Button onClick={onOpen}>Заказать ремонт</Button>
      <LinkButton href={`tel:${process.env.NEXT_PUBLIC_PHONE1}`}>
        {process.env.NEXT_PUBLIC_PHONE1p}
      </LinkButton>
    </div>
  );
};
