export type SOCIALType = {
  icon: "vk" | "ws" | "tg";
  bg: string;
  link: string | undefined;
  func?: () => void;
};
export const link_list: SOCIALType[] = [
  {
    icon: "ws",
    bg: "#25D366",
    link: process.env.NEXT_PUBLIC_WS,
    func: () => {
      //@ts-ignore
      ym(96375985, "reachGoal", "messenger_ws");
    },
  },
  {
    icon: "tg",
    bg: "#0088cc",
    link: process.env.NEXT_PUBLIC_TG,
    func: () => {
      //@ts-ignore
      ym(96375985, "reachGoal", "messenger_tg");
    },
  },
  {
    icon: "vk",
    bg: "#0077FF",
    link: process.env.NEXT_PUBLIC_VK,
    func: () => {
      //@ts-ignore
      ym(96375985, "reachGoal", "messenger_vk");
    },
  },
];
