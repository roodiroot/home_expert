"use client";

import useModal from "@/hooks/useModal";
import { Button } from "../ui/elements-button";

export const ActionComponentsBatton = () => {
  const { onOpen } = useModal();
  return (
    <div className='mt-10 flex items-center gap-x-6'>
      <Button onClick={onOpen}>Заказать ремонт</Button>
      <Button
        variant='link'
        item={
          <svg
            width='13'
            height='13'
            viewBox='0 0 13 13'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M4.97362 1.76843C4.78802 1.30442 4.33861 1.00015 3.83885 1.00015H2.15787C1.51839 1.00015 1 1.51842 1 2.15789C1 7.5934 5.40647 11.9999 10.842 11.9999C11.4814 11.9999 11.9997 11.4814 11.9997 10.842L12 9.1607C12 8.66094 11.6958 8.2116 11.2318 8.02599L9.62068 7.38178C9.20387 7.21506 8.72931 7.2901 8.38444 7.57748L7.96864 7.92428C7.48303 8.32895 6.76852 8.29677 6.32154 7.84979L5.1507 6.67787C4.70372 6.2309 4.67069 5.51696 5.07536 5.03136L5.42209 4.61558C5.70948 4.27071 5.78518 3.79601 5.61845 3.3792L4.97362 1.76843Z'
              stroke='#111827'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        }
      >
        +7 (987) 570 45 14
      </Button>
    </div>
  );
};
