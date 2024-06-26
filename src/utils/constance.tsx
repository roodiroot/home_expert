import {
  IconCalendar,
  IconClean,
  IconEquipment,
  IconHeart,
  IconSettings,
} from "@/components/animation-icons/icons";
import IconCombain from "./icon-combain";

export interface PortfolioListType {
  img: string[];
  title?: string;
  shortTitle?: string;
  time?: string;
  description: string;
  date: string;
  tags?: string[];
  author?: { img: string; name: string; work: string };
}

export const consultationBlocks = [
  {
    title: "Индивидуальный подход.",
    text: "Получите индивидуальные рекомендации и советы, полностью соответствующие вашим потребностям и стилю.",
    Icon: <IconCombain variant="user" color="#4f46e5" />,
  },
  {
    title: "Оценка бюджета.",
    text: "Понимание потенциальных затрат и оптимальных путей реализации проекта, что поможет вам планировать ремонт без неожиданных расходов.",
    Icon: <IconCombain variant="card" color="#4f46e5" />,
  },
  {
    title: "Профессиональные советы.",
    text: "Используйте экспертные знания для выбора лучших материалов и решений, которые сделают ваш ремонт уникальным и функциональным.",
    Icon: <IconCombain variant="message" size={24} color="#4f46e5" />,
  },
];
export const qualityList = [
  {
    name: "Проверка качества",
    description:
      "Включает в себя визуальный осмотр, проверку качества отделочных работ и функциональности установленного оборудования.",
    Icon: <IconHeart className="w-24 h-24" />,
  },
  {
    name: "Тестирование оборудования",
    description:
      "Включает в себя тестирование розеток, светильников, сантехники, отопления и других инженерных систем.",
    Icon: <IconEquipment className="w-24 h-24" />,
  },
  {
    name: "Детальная проверка",
    description:
      "Тщательный осмотр качества отделочных работ, включая покраску, обои, плитку, полы и потолки.",
    Icon: <IconSettings className="w-24 h-24" />,
  },
  {
    name: "Контроль чистоты и уборка",
    description:
      "Полная уборка после ремонта, удаление строительного мусора, пыли и грязи. Обеспечение чистоты помещения перед сдачей.",
    Icon: <IconClean className="w-24 h-24" />,
  },
];
export const FAQListDew = [
  {
    question: "Как происходит процесс строительства в вашей компании?",
    answer:
      "Мы строим в строгом соответствии с заранее утверждённым планом, разделяя процесс на ключевые этапы: от планирования и подготовки участка до основного строительства и отделочных работ. Это обеспечивает высокое качество и позволяет клиентам быть в курсе всех этапов работы, гарантируя их уверенность в соблюдении сроков и требований.",
  },
  {
    question: "Как происходит расчёт стоимости строительства?",
    answer:
      "Расчёт стоимости строительства — это первый и один из самых важных этапов вашего проекта. Для точности расчёта необходимо учесть множество факторов: тип здания, материалы, сложность конструкций, и многие другие. Мы приглашаем вас обратиться к нашим экспертам, которые с учётом всех нюансов и особенностей вашего проекта проведут детальный и точный расчёт. Это позволит вам получить реалистичное представление о стоимости ещё до начала работ и гарантирует прозрачность и контроль над бюджетом проекта.",
  },
  {
    question: "Каковы сроки строительства?",
    answer:
      "Сроки строительства варьируются от нескольких месяцев до года и зависят от сложности проекта и индивидуальных требований. Мы предоставим вам предварительную оценку после первоначального обсуждения проекта, стремясь обеспечить оптимальное сочетание скорости и качества.",
  },
  {
    question: "Есть ли гарантии на выполненные работы?",
    answer:
      "Да, мы предоставляем гарантию на все выполненные работы и используемые материалы. Эта гарантия подтверждает нашу уверенность в качестве и надёжности нашего строительства, а также обеспечивает дополнительную защиту и спокойствие для наших клиентов.",
  },
  {
    question: "Можете ли вы адаптировать проект под мои потребности?",
    answer:
      "Конечно, мы гибко подходим к каждому проекту и готовы адаптировать или разработать индивидуальный дизайн, учитывая все ваши пожелания и требования. Наша цель — создать функциональное и удобное пространство, которое будет полностью соответствовать вашим ожиданиям.",
  },
];
export const FAQList = [
  {
    question: "Сколько времени занимает стандартный ремонт квартиры?",
    answer:
      "Средний срок ремонта квартиры варьируется от 1 до 3 месяцев, в зависимости от масштаба работ и сложности дизайна. Мы стараемся оптимизировать процесс, чтобы уложиться в минимальные сроки, не теряя в качестве.",
  },
  {
    question: "Какова примерная стоимость ремонта?",
    answer:
      "Стоимость ремонта зависит от множества факторов, включая площадь помещения, выбранные материалы и сложность работ. Мы предлагаем бесплатную оценку проекта, чтобы дать вам точное представление о затратах.",
  },
  {
    question: "Предоставляете ли вы гарантию на выполненные работы?",
    answer:
      "Да, мы предоставляем гарантию на все выполненные нами работы. Это подтверждает нашу уверенность в качестве и надежности предоставляемых услуг.",
  },
  {
    question: "Можем ли мы вносить изменения в проект в процессе ремонта?",
    answer:
      "Мы всегда готовы идти навстречу пожеланиям наших клиентов. Любые изменения возможны, но они могут повлиять на сроки выполнения и стоимость проекта.",
  },
  {
    question: "Как вы обеспечиваете безопасность и чистоту во время ремонта?",
    answer:
      "Мы строго соблюдаем меры безопасности и используем защитные покрытия для мебели и полов, чтобы минимизировать беспорядок и загрязнение. Каждый день производится уборка рабочей зоны.",
  },
];
export const testimonialsList = [
  {
    text: "“Я в восторге от работы Дом Эксперт! Они не только превратили мою старую квартиру в современное и уютное пространство, но и сделали весь процесс невероятно легким для меня. Команда была внимательна к моим пожеланиям, и результат превзошел все ожидания!”",
    name: "Федор Д., Подмосковье",
    date: "3х комнатная квартира",
    img: "/image/face/f1.jpg",
  },
  {
    text: "“Благодарю за прекрасный ремонт! Мне особенно понравилось, как дизайнеры с учетом всех моих пожеланий создали уникальный интерьер. Все работы были выполнены аккуратно и качественно. Это был лучший выбор для моего дома.”",
    name: "Елена В., Химки",
    date: "Квартира в новостройке",
    img: "/image/face/f7.jpg",
  },
  {
    text: "“Дом Эксперт сделал ремонт в моем доме, и я полностью доволен результатом. От начала до конца, вся команда проявила себя как истинные профессионалы. Особая благодарность за соблюдение сроков и бюджета.”",
    name: "Алексей Г., Москва",
    date: "Дом на ул. Ломоносова",
    img: "/image/face/f3.jpg",
  },
  {
    text: "“Профессионализм, качество, внимание к деталям – вот что отличает эту компанию. Работа была выполнена точно в срок, а команда всегда была на связи, чтобы обсудить любые вопросы. Рекомендую всем, кто ищет надежного подрядчика.”",
    name: "Анна К., Москва",
    date: "Квартира в новостройке",
    img: "/image/face/f8.jpg",
  },
  {
    text: "“Я осталась впечатлена уровнем сервиса и качеством работы. Ремонт был сделан не только красиво, но и функционально. Все мои идеи были учтены, и я рада, что обратилась именно в эту компанию.”",
    name: "Ирина Г., Зеленоград",
    date: "Квартира в новостройке",
    img: "/image/face/f5.jpg",
  },
  {
    text: "“Отличная работа! С начала до конца, команда показала высокий уровень профессионализма. Ремонт выполнен в срок, а качество работы превзошло все мои ожидания. Теперь я точно знаю, к кому обращаться за ремонтными работами.”",
    name: "Семен Семенович Н., Мытищи",
    date: "Квартира в новостройке",
    img: "/image/face/f2.jpg",
  },
];
