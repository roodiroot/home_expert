"use client";

import { useRouter } from "next/navigation";

import { COUNTER_PAGE, PROJECTS_PAGE } from "@/utils/path";
import ButtonChip from "../ui/button-chip";

export const ActionComponents = () => {
  const router = useRouter();
  return (
    <div className='inline-flex space-x-3'>
      <ButtonChip onClick={() => router.push(COUNTER_PAGE)}>
        <span>Рассчитать</span>{" "}
        <span className='hidden sm:inline-block'>стоимость</span>
      </ButtonChip>
      <ButtonChip no_bg onClick={() => router.push(PROJECTS_PAGE)}>
        <span className=''>Готовые</span> <span>проекты</span>
      </ButtonChip>
    </div>
  );
};
