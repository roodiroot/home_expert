import LogoNavbar from "./logo-navbar";
import NavigationNavbar from "./navigation-navbar";
import ActionNavbar from "./action-navbar";
import Burger from "./burger";

const Navbar = () => {
  return (
    <div className="fixed top-0 inset-x-0 z-50 py-2 drop-shadow-md backdrop-blur-sm bg-white/60 ">
      <div className="mx-auto max-w-7xl px-2 lg:px-4 flex items-center justify-between">
        <div className="relative md:w-[147px]">
          <LogoNavbar />
        </div>
        <NavigationNavbar />
        <div className="flex items-center gap-6 sm:gap-8">
          <ActionNavbar />
          <Burger />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
