"use client";

import { useRouter } from "next/navigation";

import { COUNTER_PAGE } from "@/utils/path";
import { Button } from "./ui/elements-button";

const LinkCtaSection = () => {
  const router = useRouter();
  return <Button onClick={() => router.push(COUNTER_PAGE)}>Рассчитать</Button>;
};

export default LinkCtaSection;
