import { publicRoutes } from "@/routes";
import Link from "next/link";

const FooterSiteMap = () => (
  <>
    <div>
      <h3 className="text-sm font-semibold leading-6">Карта сайта</h3>
      <ul className="mt-6 space-y-4">
        {publicRoutes.slice(0, publicRoutes.length / 2 + 1).map((route) => (
          <LinkRoute name={route.name} link={route.link} key={route.name} />
        ))}
      </ul>
    </div>
    <div>
      <h3 className="text-sm font-semibold leading-6 hidden md:block md:invisible">
        Карта сайта
      </h3>
      <ul className="mt-4 md:mt-6 space-y-4">
        {publicRoutes.slice(publicRoutes.length / 2 + 1).map((route) => (
          <LinkRoute name={route.name} link={route.link} key={route.name} />
        ))}
      </ul>
    </div>
  </>
);

export default FooterSiteMap;

const LinkRoute = ({ name, link }: { name: string; link: string }) => (
  <li key={name} className="flex flex-col">
    <Link href={link} className="text-sm">
      {name}
    </Link>
  </li>
);
