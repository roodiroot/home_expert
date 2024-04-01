import Logo from "../logo";
import SocialBlock from "./social-block";

const FooterMain = () => (
  <div className="space-y-8">
    <Logo className="h-14" />
    <p className="text-sm leading-6 text-gray-600 text-balance">
      Строительство и комплексный ремонт помещений. Индивидуальное
      проектирование и дизайн.
    </p>
    <div className="">
      <SocialBlock />
    </div>
  </div>
);

export default FooterMain;
