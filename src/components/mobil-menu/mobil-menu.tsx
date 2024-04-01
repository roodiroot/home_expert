"use client";

import { motion, AnimatePresence } from "framer-motion";

import useMenu from "@/hooks/use-menu";
import { publicRoutes } from "@/routes";
import { usePathname, useRouter } from "next/navigation";
import { useDisableBodyScroll } from "@/hooks/use-disable-body-scroll";
import { cn } from "@/lib/utils";

interface MenuMobilProps extends React.HtmlHTMLAttributes<HTMLElement> {}

const MenuMobil: React.FC<MenuMobilProps> = ({ className }) => {
  const pathname = usePathname();
  const { isOpen, onClose } = useMenu();
  const router = useRouter();

  useDisableBodyScroll(isOpen);

  const handleClick = (path: string) => {
    router.push(path);
    onClose();
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white "
          >
            <div className="mx-auto max-w-7xl h-full px-6 pt-36 pb-6 ">
              <nav>
                <ul className="flex flex-col gap-4 pt-12">
                  {publicRoutes.map((route) => (
                    <li
                      key={route.name}
                      onClick={() => handleClick(route.link)}
                      className="relative cursor-pointer text-xl font-semibold text-gray-900"
                    >
                      <span
                        className={cn(
                          "relative py-1 px-1",
                          pathname === route.link &&
                            "before:w-full before:h-0.5 before:bg-accent-600 before:absolute before:bottom-0 before:left-0"
                        )}
                      >
                        {" "}
                        {route.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MenuMobil;
