import Link from "next/link";

import Logo from "@/components/ui/logo";
import SocialBlock from "./social-block";
import FooterMain from "./footer-main";
import FooterDevelopment from "./footer-development";
import FooterAdreses from "./footer-adreses";
import FooterPhones from "./footer-phones";
import FooterSiteMap from "./footer-site-map";

const FooterSection = () => {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32 border-t border-gray-100">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <FooterMain />
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <FooterSiteMap />
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <FooterPhones />
              <FooterAdreses />
            </div>
          </div>
        </div>
        <div className="mt-20">
          <FooterDevelopment />
        </div>
        <div className="mt-16 border-t  pt-8 sm:mt-20 lg:mt-20">
          <p className="text-xs leading-5 text-gray-600">
            © 2023 - 2024 ДомЭксперт,{" "}
            <Link href={"/doc/privacy-policy"} className="underline">
              Политика конфиденциальности
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
