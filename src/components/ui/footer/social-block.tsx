"use client";

import { Icons } from "@/components/ui/icons";

const social = [
  {
    Icon: Icons.tg,
    href: process.env.NEXT_PUBLIC_TG,
    func: () => {
      //@ts-ignore
      ym(96375985, "reachGoal", "messenger_ws");
    },
  },
  {
    Icon: Icons.wa,
    href: process.env.NEXT_PUBLIC_WS,
    func: () => {
      //@ts-ignore
      ym(96375985, "reachGoal", "messenger_ws");
    },
  },
  {
    Icon: Icons.vk,
    href: process.env.NEXT_PUBLIC_VK,
    func: () => {
      //@ts-ignore
      ym(96375985, "reachGoal", "messenger_ws");
    },
  },
  { Icon: Icons.mail, href: `mailto:${process.env.NEXT_PUBLIC_EMAIL1}` },
];

const SocialBlock = () => {
  return (
    <div className="flex gap-4">
      <div className="text-social font-semibold text-sm">Свяжитесь с нами:</div>
      <div className="flex items-center gap-4">
        {social.map((item, index) => (
          <a
            onClick={() => item.func && item.func()}
            target="_blank"
            key={item.href + `${index}`}
            href={item.href}
          >
            <item.Icon />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialBlock;
