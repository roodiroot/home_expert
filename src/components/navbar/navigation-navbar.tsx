import { navMenuRoutes, publicRoutes } from "@/routes";
import LinkNavbar from "./link-navbar";

const NavigationNavbar = () => {
  return (
    <nav className=" bg-gray-200/65 rounded-full h-auto backdrop-blur-sm hidden lg:block">
      <ul className="p-1 flex gap-1">
        {navMenuRoutes.map((item, index) => (
          <LinkNavbar
            key={item.name}
            link={item.link}
            name={item.name}
            index={index}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavigationNavbar;
