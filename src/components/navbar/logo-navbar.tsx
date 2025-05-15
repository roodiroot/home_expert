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
    <div className="absolute left-0 top-1/2 -translate-y-1/2">
      <Logo className="h-10 sm:h-12" type={subTitleLogo()} />
    </div>
  );
};

export default LogoNavbar;
