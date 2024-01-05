"use client";

import { useRouter } from "next/navigation";

import { COUNTER_PAGE } from "@/utils/path";
import ButtonChip from "../ui/button-chip";
import useModal from "@/hooks/useModal";

export const ActionComponents = () => {
  const { onOpen } = useModal();
  const router = useRouter();
  return (
    <div className='inline-flex space-x-3'>
      <ButtonChip onClick={() => router.push(COUNTER_PAGE)}>
        <span>Расчитать</span>{" "}
        <span className='hidden sm:inline-block'>стоимость</span>
      </ButtonChip>
      <ButtonChip no_bg onClick={onOpen}>
        <span className='hidden sm:inline-block'>Бесплатная</span>{" "}
        <span>консультация</span>
      </ButtonChip>
    </div>
  );
};
