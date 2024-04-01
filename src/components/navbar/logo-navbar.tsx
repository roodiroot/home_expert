"use client";

import { usePathname } from "next/navigation";
import Logo from "../ui/logo";

const LogoNavbar = () => {
  const path = usePathname();

  const subTitleLogo = () => {
    if (path === "/") return "construction";
    if (path === "/renovation" || path === "/projects" || path === "/counter")
      return "renovation";

    return;
  };
  return (
    <div className="">
      <Logo className="hidden h-14 sm:block" type={subTitleLogo()} />
    </div>
  );
};

export default LogoNavbar;
