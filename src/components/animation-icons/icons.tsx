"use client";

import { motion } from "framer-motion";

// анимация для фона с кольцами
const scaleBg = {
  hover: { scale: 1.1 },
};
// анимация одного кольца
const circle = {
  hover: {
    opacity: [0, 1],
    transition: { duration: 0.8, ease: "easeInOut" },
  },
  rest: { opacity: 1 },
};

// анимации домика
const rotateHome = {
  hover: { rotate: -6, scale: 1.2 },
};
const smouk = {
  hover: {
    opacity: [0, 1],
    pathLength: [0, 1],
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  rest: { opacity: 1, pathLength: 1 },
};

// анимации портфеля
const portfell = {
  hover: {
    rotate: 9,
    scale: 1.2,
  },
};

// анимация календаря
const okay = {
  hover: {
    opacity: [0, 1],
    pathLength: [0, 1],
    transition: { delay: 0.2, duration: 0.4, ease: "easeInOut" },
  },
  rest: { opacity: 1, pathLength: 1 },
};

// анимация щита
const shield = {
  hover: {
    scale: 1.2,
  },
};

const stars = {
  hover: {
    opacity: [0, 1],
    scale: [1.2, 1.3, 1.2],
    pathLength: [0, 1],
    transition: { delay: 0.6, duration: 0.4, ease: "easeInOut" },
  },
  rest: { opacity: 1, pathLength: 1 },
};

// анимация чистоты
const star1 = {
  hover: {
    opacity: [0, 1],
    scale: [1.2, 1.5, 1.2],
    pathLength: [0, 1],
    transition: { delay: 0.6, duration: 0.4, ease: "easeInOut" },
  },
  rest: { opacity: 1, pathLength: 1 },
};
const star2 = {
  hover: {
    opacity: [0, 1],
    scale: [1.2, 1.5, 1.2],
    pathLength: [0, 1],
    transition: { delay: 0.7, duration: 0.4, ease: "easeInOut" },
  },
  rest: { opacity: 1, pathLength: 1 },
};
const star3 = {
  hover: {
    opacity: [0, 1],
    scale: [1.2, 1.5, 1.2],
    pathLength: [0, 1],
    transition: { delay: 0.4, duration: 0.4, ease: "easeInOut" },
  },
  rest: { opacity: 1, pathLength: 1 },
};

// анимация молнии
const molniya = {
  hover: {
    opacity: [0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1],
    scale: [1.1, 1.0, 1.1],
  },
  rest: { opacity: 1, scale: 1 },
};

//анимация шестеренок
const six = {
  hover: {
    rotate: 360,
    transition: { duration: 2 },
  },
  rest: { rotate: 0 },
};
const six2 = {
  hover: {
    rotate: -360,
    transition: { duration: 2 },
  },
  rest: { rotate: 0 },
};

const IconHome = (props: React.SVGAttributes<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 82 83"
    fill="none"
    {...props}
  >
    <g stroke="#E5E7EB" strokeWidth={3} clipPath="url(#a)">
      <motion.circle
        variants={circle}
        cx={41.806}
        cy={41.841}
        r={20.884}
        strokeOpacity={0.42}
      />
      <motion.circle
        variants={circle}
        cx={41.08}
        cy={41.739}
        r={30.345}
        strokeOpacity={0.46}
      />
      <motion.circle
        variants={circle}
        cx={41}
        cy={41.635}
        r={39.202}
        strokeOpacity={0.21}
      />
    </g>
    <motion.g variants={rotateHome} clipPath="url(#b)">
      <g filter="url(#c)">
        <path
          fill="#fff"
          d="M24.375 33.76 42 20.053l17.625 13.709v21.541a3.916 3.916 0 0 1-3.917 3.917H28.292a3.916 3.916 0 0 1-3.917-3.917V33.761Z"
        />
        <path
          stroke="#E5E7EB"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M24.375 33.76 42 20.053l17.625 13.709v21.541a3.916 3.916 0 0 1-3.917 3.917H28.292a3.916 3.916 0 0 1-3.917-3.917V33.761Z"
        />
      </g>
      <path
        fill="#F3F4F6"
        d="M57.447 35.112 27.326 56.374c-.277.207.423.967.62.967h27.89c1.29-.516 1.611-1.504 1.611-1.933V35.112Z"
      />
      <path fill="#fff" d="M36.125 58.219V38.635h11.75V58.22" />
      <path
        stroke="#E5E7EB"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M36.125 58.219V38.635h11.75V58.22"
      />
      <path
        stroke="#E5E7EB"
        strokeLinecap="round"
        strokeWidth={2}
        d="m54.404 29.494-4.469-3.475V23.66h4.469v5.833Z"
      />
      <motion.path
        variants={smouk}
        stroke="#4F46E5"
        strokeLinecap="round"
        strokeWidth={2}
        d="M51.782 20.682c-2.283-1.589-.951-2.648 0-2.979 1.159-.414 3.054-1.539 1.366-2.73"
      />
    </motion.g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h82v83H0z" />
      </clipPath>
      <clipPath id="b">
        <path fill="#fff" d="M18.979 13.036h47v50h-47z" />
      </clipPath>
      <filter
        id="c"
        width={45.85}
        height={49.767}
        x={19.075}
        y={16.752}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={2} />
        <feGaussianBlur stdDeviation={2.15} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.309804 0 0 0 0 0.27451 0 0 0 0 0.898039 0 0 0 0.2 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_542_1189"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_542_1189"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const IconCase = (props: React.SVGAttributes<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <g stroke="#E5E7EB" strokeWidth={3} clipPath="url(#a)">
      <motion.circle
        variants={circle}
        cx={41.806}
        cy={41.841}
        r={20.884}
        strokeOpacity={0.42}
      />
      <motion.circle
        variants={circle}
        cx={41.08}
        cy={41.739}
        r={30.345}
        strokeOpacity={0.46}
      />
      <motion.circle
        variants={circle}
        cx={41}
        cy={41.635}
        r={39.202}
        strokeOpacity={0.21}
      />
    </g>
    <motion.g variants={portfell} clipPath="url(#a)">
      <motion.path
        variants={smouk}
        stroke="#4F46E5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M49.167 28.385v-4.083a4.083 4.083 0 0 0-4.084-4.083h-8.166a4.083 4.083 0 0 0-4.084 4.083v4.083"
      />
      <g filter="url(#b)">
        <path
          fill="#fff"
          d="M57.333 28.386H24.667a4.083 4.083 0 0 0-4.084 4.083v20.416a4.083 4.083 0 0 0 4.084 4.084h32.666a4.083 4.083 0 0 0 4.084-4.084V32.47a4.083 4.083 0 0 0-4.084-4.084Z"
        />
        <path
          stroke="#E5E7EB"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M57.333 28.386H24.667a4.083 4.083 0 0 0-4.084 4.083v20.416a4.083 4.083 0 0 0 4.084 4.084h32.666a4.083 4.083 0 0 0 4.084-4.084V32.47a4.083 4.083 0 0 0-4.084-4.084Z"
        />
      </g>
      <path
        fill="#F3F4F6"
        d="M59.735 41.598c-11.252 5.817-15.07 5.509-19.518 5.273 5.706-2.558 15.02-9.922 19.518-14.992v9.72ZM35.826 50.213c12.556.966 21.328-2.755 24.145-4.736v7.569c-.446 1.3-1.486 2.46-3.39 2.46H24.345a.895.895 0 0 1-.173 0h.173c1.68-.14 8.637-3.774 11.482-5.293Z"
      />
      <motion.path
        variants={smouk}
        stroke="#4F46E5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M41 40.636h.02"
      />
      <path
        stroke="#E5E7EB"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M61.417 42.677a37.056 37.056 0 0 1-40.834 0"
      />
    </motion.g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M16.5 16.136h49v49h-49z" />
      </clipPath>
      <filter
        id="b"
        width={51.433}
        height={39.183}
        x={15.283}
        y={27.085}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2.15} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.309804 0 0 0 0 0.27451 0 0 0 0 0.898039 0 0 0 0.2 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_546_1190"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_546_1190"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const IconCalendar = (props: React.SVGAttributes<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={82}
    height={83}
    viewBox="0 0 83 83"
    fill="none"
    {...props}
  >
    <g stroke="#E5E7EB" strokeWidth={3} clipPath="url(#a)">
      <motion.circle
        variants={circle}
        cx={41.806}
        cy={41.841}
        r={20.884}
        strokeOpacity={0.42}
      />
      <motion.circle
        variants={circle}
        cx={41.08}
        cy={41.739}
        r={30.345}
        strokeOpacity={0.46}
      />
      <motion.circle
        variants={circle}
        cx={41}
        cy={41.635}
        r={39.202}
        strokeOpacity={0.21}
      />
    </g>
    <motion.g variants={rotateHome} clipPath="url(#a)">
      <g filter="url(#b)">
        <path
          fill="#fff"
          d="M23.901 58.96a4.083 4.083 0 0 1-1.196-2.888V35.587h36.75v20.485c0 1.678-.333 2.025-1.196 2.888s-2.887 1.196-2.887 1.196H26.788a4.083 4.083 0 0 1-2.887-1.196Z"
        />
        <path
          stroke="#E5E7EB"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M23.901 58.96a4.083 4.083 0 0 1-1.196-2.888V35.587h36.75v20.485c0 1.678-.333 2.025-1.196 2.888s-2.887 1.196-2.887 1.196H26.788a4.083 4.083 0 0 1-2.887-1.196Z"
        />
      </g>
      <path
        fill="#4F46E5"
        stroke="#4F46E5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M58.26 24.602a4.083 4.083 0 0 1 1.195 2.887v7.991h-36.75v-7.99a4.083 4.083 0 0 1 4.083-4.084h28.584c1.083 0 2.121.43 2.887 1.196Z"
      />
      <path
        stroke="#E5E7EB"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M32.914 19.322v8.167M49.247 19.322v8.167"
      />
      <path
        fill="#F3F4F6"
        d="M44.789 37.364 25.305 57.373c-.77.79.32 1.028.96 1.048 8.884.03 27.104.07 28.92 0 1.818-.07 2.39-1.544 2.447-2.272V37.364H44.79Z"
      />
      <motion.path
        variants={okay}
        stroke="#4F46E5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m43.122 51.995 4.083 4.084 8.167-8.167"
      />
    </motion.g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M16.58 15.239h49v49h-49z" />
      </clipPath>
      <filter
        id="b"
        width={47.35}
        height={35.169}
        x={17.405}
        y={31.287}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={2.15} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.309804 0 0 0 0 0.27451 0 0 0 0 0.898039 0 0 0 0.2 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_550_1193"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_550_1193"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const IconGarant = (props: React.SVGAttributes<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={82}
    height={83}
    fill="none"
    {...props}
  >
    <g stroke="#E5E7EB" strokeWidth={3}>
      <motion.circle
        variants={circle}
        cx={41.806}
        cy={41.883}
        r={20.884}
        strokeOpacity={0.42}
      />
      <motion.circle
        variants={circle}
        cx={41.08}
        cy={41.781}
        r={30.345}
        strokeOpacity={0.46}
      />
      <motion.circle
        variants={circle}
        cx={41}
        cy={41.677}
        r={39.202}
        strokeOpacity={0.21}
      />
    </g>
    <g clipPath="url(#a)">
      <g filter="url(#b)">
        <path
          fill="#fff"
          d="M57.805 43.925c0 10.208-7 15.312-15.32 18.273-.435.15-.908.143-1.34-.02-8.34-2.94-15.34-8.045-15.34-18.253V29.633c0-.541.211-1.06.586-1.444a1.98 1.98 0 0 1 1.414-.598c4 0 9-2.45 12.48-5.553.424-.37.963-.572 1.52-.572.558 0 1.097.203 1.52.572 3.5 3.124 8.48 5.553 12.48 5.553.53 0 1.04.216 1.415.598.375.383.585.903.585 1.444v14.292Z"
        />
        <motion.path
          variants={shield}
          stroke="#E5E7EB"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M57.805 43.925c0 10.208-7 15.312-15.32 18.273-.435.15-.908.143-1.34-.02-8.34-2.94-15.34-8.045-15.34-18.253V29.633c0-.541.211-1.06.586-1.444a1.98 1.98 0 0 1 1.414-.598c4 0 9-2.45 12.48-5.553.424-.37.963-.572 1.52-.572.558 0 1.097.203 1.52.572 3.5 3.124 8.48 5.553 12.48 5.553.53 0 1.04.216 1.415.598.375.383.585.903.585 1.444v14.292Z"
        />
      </g>
      <path
        fill="#F3F4F6"
        d="M55.475 29.505c-6.294-.647-11.544-4.387-13.382-6.176-4.637 12.826-1.932 30.392 0 37.572 19.013-7.976 13.382-17.92 14.044-30.66.038-.735-.515-.736-.662-.736Z"
      />
      <motion.path
        variants={okay}
        stroke="#4F46E5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m35.805 41.886 4 4.083 8-8.167"
      />
    </g>
    <motion.path
      variants={stars}
      fill="#4F46E5"
      d="M65.51 20.76c.057-.331.533-.331.591 0l.435 2.507a.3.3 0 0 0 .244.245l2.507.435c.332.057.332.533 0 .59l-2.507.436a.3.3 0 0 0-.244.244l-.435 2.507c-.058.332-.534.332-.591 0l-.435-2.507a.3.3 0 0 0-.244-.244l-2.507-.435c-.332-.058-.332-.534 0-.591l2.507-.435a.3.3 0 0 0 .244-.245l.435-2.507ZM17.258 55.48c.057-.331.533-.331.59 0l.673 3.878a.3.3 0 0 0 .245.245l3.878.672c.331.058.331.534 0 .591l-3.878.673a.3.3 0 0 0-.245.244l-.672 3.878c-.058.332-.534.332-.591 0l-.673-3.878a.3.3 0 0 0-.244-.244l-3.878-.673c-.332-.057-.332-.533 0-.59l3.878-.673a.3.3 0 0 0 .244-.245l.673-3.878Z"
    />
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M17.805 17.383h48v49h-48z" />
      </clipPath>
      <filter
        id="b"
        width={42.6}
        height={51.44}
        x={20.505}
        y={18.166}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={2} />
        <feGaussianBlur stdDeviation={2.15} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.309804 0 0 0 0 0.27451 0 0 0 0 0.898039 0 0 0 0.2 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_551_1196"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_551_1196"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const IconClean = (props: React.SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="82"
      height="82"
      fill="none"
      viewBox="0 0 82 82"
      {...props}
    >
      <g>
        <g stroke="#E5E7EB" strokeWidth="3">
          <motion.circle
            variants={circle}
            cx="41.806"
            cy="41.123"
            r="20.884"
            strokeOpacity="0.42"
          ></motion.circle>
          <motion.circle
            variants={circle}
            cx="41.08"
            cy="41.02"
            r="30.345"
            strokeOpacity="0.46"
          ></motion.circle>
          <motion.circle
            variants={circle}
            cx="41"
            cy="40.917"
            r="39.202"
            strokeOpacity="0.21"
          ></motion.circle>
        </g>
        <motion.g variants={shield}>
          <path
            stroke="#E5E7EB"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M41 18.75l-4.94 15.017a5.167 5.167 0 01-3.293 3.294L17.75 42l15.017 4.94a5.167 5.167 0 013.294 3.293L41 65.25l4.94-15.017a5.167 5.167 0 013.293-3.294L64.25 42l-15.017-4.94a5.167 5.167 0 01-3.294-3.293L41 18.75z"
          ></path>
          <path
            fill="#F3F4F6"
            d="M40.947 23.082c.072.312.142.653.21 1.02.819 3.706 2.796 10.366 5.025 12.902 2.452 2.791 10.095 3.827 13.262 4.95-12.669 3.562-13.724 5.278-13.724 5.278s-4.091 7.785-4.773 12.828L37.01 48.55c5.988-4.63 5.31-18.255 4.148-24.45a35.422 35.422 0 01-.21-1.018z"
          ></path>
        </motion.g>
        <motion.g variants={star1}>
          <path
            fill="#4F46E5"
            d="M20.343 14.606c.057-.332.534-.332.591 0l.988 5.697a.3.3 0 00.244.245l5.698.988c.331.057.331.533 0 .59l-5.698.989a.3.3 0 00-.244.244l-.988 5.698c-.058.331-.534.331-.591 0l-.988-5.698a.3.3 0 00-.245-.244l-5.697-.988c-.332-.058-.332-.534 0-.591l5.697-.988a.3.3 0 00.245-.245l.988-5.697z"
          ></path>
        </motion.g>
        <motion.g variants={star2}>
          <path
            fill="#4F46E5"
            d="M21.725 48.598c.057-.331.533-.331.59 0l.3 1.727a.3.3 0 00.245.244l1.726.3c.332.057.332.533 0 .59l-1.726.3a.3.3 0 00-.245.244l-.3 1.727c-.057.332-.533.331-.59 0l-.3-1.727a.3.3 0 00-.244-.244l-1.727-.3c-.331-.057-.331-.533 0-.59l1.727-.3a.3.3 0 00.244-.244l.3-1.727z"
          ></path>
        </motion.g>
        <motion.g variants={star3}>
          <path
            fill="#4F46E5"
            d="M60.903 53.881c.058-.332.534-.332.591 0l.673 3.878a.3.3 0 00.244.244l3.878.673c.332.057.332.533 0 .591l-3.878.672a.3.3 0 00-.244.245l-.673 3.878c-.057.332-.533.332-.59 0l-.673-3.878a.3.3 0 00-.245-.244l-3.878-.673c-.331-.058-.331-.534 0-.591l3.878-.673a.3.3 0 00.245-.244l.672-3.878z"
          ></path>
        </motion.g>
      </g>
    </svg>
  );
};

const IconEquipment = (props: React.SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="83"
      height="83"
      fill="none"
      viewBox="0 0 83 83"
      {...props}
    >
      <g>
        <g stroke="#E5E7EB" strokeWidth="3">
          <motion.circle
            variants={circle}
            cx="42.131"
            cy="41.885"
            r="20.884"
            strokeOpacity="0.42"
          ></motion.circle>
          <motion.circle
            variants={circle}
            cx="41.406"
            cy="41.782"
            r="30.345"
            strokeOpacity="0.46"
          ></motion.circle>
          <motion.circle
            variants={circle}
            cx="41.326"
            cy="41.679"
            r="39.202"
            strokeOpacity="0.21"
          ></motion.circle>
        </g>
        <g>
          <g filter="url(#filter0_d_676_71)">
            <rect
              width="42"
              height="41"
              x="20.326"
              y="21.179"
              fill="#fff"
              rx="9"
            ></rect>
            <rect
              width="40"
              height="39"
              x="21.326"
              y="22.179"
              stroke="#E5E7EB"
              strokeWidth="2"
              rx="8"
            ></rect>
          </g>
          <path
            fill="#F3F4F6"
            d="M27.939 58.11c8.574-9.964 23.952-26.1 30.035-32.376 2.55 8.11 1.062 25.328 0 32.377-11.587 2.085-25.208.869-30.035 0z"
          ></path>
          <g stroke="#E5E7EB" strokeWidth="2">
            <path
              fill="#fff"
              d="M54.495 41.679c0 2.106-1.755 3.854-3.972 3.854s-3.973-1.748-3.973-3.854 1.756-3.854 3.973-3.854c2.216 0 3.972 1.748 3.972 3.854z"
            ></path>
            <path d="M35.95 41.679c0 2.106-1.756 3.854-3.973 3.854-2.216 0-3.972-1.748-3.972-3.854s1.756-3.854 3.972-3.854c2.217 0 3.973 1.748 3.973 3.854z"></path>
          </g>
        </g>
        <motion.path
          variants={molniya}
          stroke="#4F46E5"
          strokeWidth="2"
          d="M62.039 18.964l-7.797 9.339 6.427-.9-7.737 7.94"
        ></motion.path>
      </g>
      <defs>
        <filter
          id="filter0_d_676_71"
          width="50.6"
          height="49.6"
          x="16.026"
          y="20.879"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2.15"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.309804 0 0 0 0 0.27451 0 0 0 0 0.898039 0 0 0 0.2 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_676_71"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_676_71"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
};

const IconSettings = (props: React.SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="82"
      height="83"
      fill="none"
      viewBox="0 0 82 83"
      {...props}
    >
      <g>
        <g stroke="#E5E7EB" strokeWidth="3">
          <motion.circle
            variants={circle}
            cx="42.051"
            cy="41.885"
            r="20.884"
            strokeOpacity="0.42"
          ></motion.circle>
          <motion.circle
            variants={circle}
            cx="41.325"
            cy="41.782"
            r="30.345"
            strokeOpacity="0.46"
          ></motion.circle>
          <motion.circle
            variants={circle}
            cx="41.245"
            cy="41.679"
            r="39.202"
            strokeOpacity="0.21"
          ></motion.circle>
        </g>
        <motion.g variants={six} clipPath="url(#clip0_678_85)">
          <g filter="url(#filter0_d_678_85)">
            <path
              fill="#fff"
              d="M32.902 29.762h-.844a3.834 3.834 0 00-3.833 3.834v.345a3.834 3.834 0 01-1.917 3.315l-.824.48a3.833 3.833 0 01-3.833 0l-.288-.154a3.833 3.833 0 00-5.232 1.4l-.422.728a3.833 3.833 0 001.4 5.232l.287.192a3.833 3.833 0 011.916 3.297v.977a3.833 3.833 0 01-1.916 3.335l-.288.172a3.834 3.834 0 00-1.399 5.233l.422.728a3.833 3.833 0 005.232 1.4l.288-.154a3.834 3.834 0 013.833 0l.824.48a3.833 3.833 0 011.917 3.315v.345a3.834 3.834 0 003.833 3.834h.844a3.833 3.833 0 003.833-3.834v-.345a3.833 3.833 0 011.917-3.316l.824-.479a3.834 3.834 0 013.833 0l.288.154a3.833 3.833 0 005.232-1.4l.422-.747a3.834 3.834 0 00-1.4-5.233l-.287-.153a3.833 3.833 0 01-1.916-3.335v-.958a3.834 3.834 0 011.916-3.335l.288-.173a3.834 3.834 0 001.399-5.232l-.422-.729a3.834 3.834 0 00-5.232-1.399l-.288.154a3.832 3.832 0 01-3.833 0l-.824-.48a3.833 3.833 0 01-1.917-3.316v-.344a3.833 3.833 0 00-3.833-3.834z"
            ></path>
            <path
              stroke="#E5E7EB"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M32.902 29.762h-.844a3.834 3.834 0 00-3.833 3.834v.345a3.834 3.834 0 01-1.917 3.315l-.824.48a3.833 3.833 0 01-3.833 0l-.288-.154a3.833 3.833 0 00-5.232 1.4l-.422.728a3.833 3.833 0 001.4 5.232l.287.192a3.833 3.833 0 011.916 3.297v.977a3.833 3.833 0 01-1.916 3.335l-.288.172a3.834 3.834 0 00-1.399 5.233l.422.728a3.833 3.833 0 005.232 1.4l.288-.154a3.834 3.834 0 013.833 0l.824.48a3.833 3.833 0 011.917 3.315v.345a3.834 3.834 0 003.833 3.834h.844a3.833 3.833 0 003.833-3.834v-.345a3.833 3.833 0 011.917-3.316l.824-.479a3.834 3.834 0 013.833 0l.288.154a3.833 3.833 0 005.232-1.4l.422-.747a3.834 3.834 0 00-1.4-5.233l-.287-.153a3.833 3.833 0 01-1.916-3.335v-.958a3.834 3.834 0 011.916-3.335l.288-.173a3.834 3.834 0 001.399-5.232l-.422-.729a3.834 3.834 0 00-5.232-1.399l-.288.154a3.832 3.832 0 01-3.833 0l-.824-.48a3.833 3.833 0 01-1.917-3.316v-.344a3.833 3.833 0 00-3.833-3.834z"
            ></path>
          </g>
          <path
            stroke="#E5E7EB"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M32.48 54.679a5.75 5.75 0 100-11.5 5.75 5.75 0 000 11.5z"
          ></path>
        </motion.g>
        <motion.g
          variants={six2}
          stroke="#4F46E5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path
            fill="#fff"
            d="M55.746 13.846h-.532a2.417 2.417 0 00-2.417 2.416v.218a2.416 2.416 0 01-1.208 2.09l-.52.302a2.417 2.417 0 01-2.416 0l-.182-.096a2.416 2.416 0 00-3.298.882l-.266.459a2.416 2.416 0 00.882 3.299l.181.12a2.418 2.418 0 011.209 2.079v.616a2.416 2.416 0 01-1.209 2.103l-.181.108a2.416 2.416 0 00-.882 3.3l.266.458a2.416 2.416 0 003.298.882l.182-.096a2.416 2.416 0 012.416 0l.52.302a2.416 2.416 0 011.208 2.09v.218a2.417 2.417 0 002.417 2.416h.532a2.416 2.416 0 002.416-2.416v-.218a2.417 2.417 0 011.209-2.09l.52-.302a2.416 2.416 0 012.416 0l.181.096a2.417 2.417 0 003.299-.882l.266-.471a2.417 2.417 0 00-.882-3.299l-.182-.096a2.416 2.416 0 01-1.208-2.103v-.604a2.416 2.416 0 011.208-2.102l.182-.11a2.417 2.417 0 00.882-3.298l-.266-.46a2.417 2.417 0 00-3.299-.881l-.181.096a2.417 2.417 0 01-2.417 0l-.52-.302a2.417 2.417 0 01-1.208-2.09v-.218a2.417 2.417 0 00-2.416-2.416z"
          ></path>
          <path d="M55.48 29.554a3.625 3.625 0 100-7.25 3.625 3.625 0 000 7.25z"></path>
        </motion.g>
      </g>
      <defs>
        <filter
          id="filter0_d_678_85"
          width="45.167"
          height="48.933"
          x="9.896"
          y="25.462"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="1"></feOffset>
          <feGaussianBlur stdDeviation="2.15"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.309804 0 0 0 0 0.27451 0 0 0 0 0.898039 0 0 0 0.2 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_678_85"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_678_85"
            result="shape"
          ></feBlend>
        </filter>
        <clipPath id="clip0_678_85">
          <path
            fill="#fff"
            d="M0 0H46V46H0z"
            transform="translate(9.48 25.929)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
};

const IconHeart = (props: React.SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="83"
      height="83"
      fill="none"
      viewBox="0 0 83 83"
      {...props}
    >
      <motion.circle
        variants={circle}
        cx="42.267"
        cy="41.885"
        r="20.884"
        stroke="#E5E7EB"
        strokeOpacity="0.42"
        strokeWidth="3"
      ></motion.circle>
      <motion.circle
        variants={circle}
        cx="41.542"
        cy="41.782"
        r="30.345"
        stroke="#E5E7EB"
        strokeOpacity="0.46"
        strokeWidth="3"
      ></motion.circle>
      <motion.circle
        variants={circle}
        cx="41.462"
        cy="41.679"
        r="39.202"
        stroke="#E5E7EB"
        strokeOpacity="0.21"
        strokeWidth="3"
      ></motion.circle>
      <motion.g variants={shield} clipPath="url(#clip0_679_99)">
        <g filter="url(#filter0_d_679_99)">
          <path
            fill="#fff"
            d="M24.601 63.762h30.917a4.417 4.417 0 004.416-4.416V30.637L48.893 19.596H29.018a4.417 4.417 0 00-4.417 4.416v4.417"
          ></path>
          <path
            stroke="#E5E7EB"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M24.601 63.762h30.917a4.417 4.417 0 004.416-4.416V30.637L48.893 19.596H29.018a4.417 4.417 0 00-4.417 4.416v4.417"
          ></path>
        </g>
        <path
          stroke="#E5E7EB"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M46.684 19.596v8.833a4.417 4.417 0 004.417 4.417h8.833"
        ></path>
        <path
          fill="#F3F4F6"
          d="M44.687 29.852v-8.23C39.48 50.415 30.806 60.153 27.12 61.422c9.336.041 28.18.098 28.869 0 .688-.098 1.433-1.187 1.72-1.72V34.888h-8.354c-3.93-.294-4.75-3.48-4.668-5.036z"
        ></path>
      </motion.g>
      <motion.path
        variants={smouk}
        fill="#fff"
        stroke="#4F46E5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M38.491 38.808a5.366 5.366 0 00-5.874-1.148 5.078 5.078 0 00-1.722 1.17l-.773.751-.773-.75a5.366 5.366 0 00-5.852-1.171 5.166 5.166 0 00-1.745 1.17c-2.098 2.076-2.208 5.587.442 8.26l7.928 7.839 7.95-7.84c2.65-2.672 2.517-6.183.42-8.259v-.022z"
      ></motion.path>
      <defs>
        <filter
          id="filter0_d_679_99"
          width="45.934"
          height="54.767"
          x="19.301"
          y="15.296"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="1"></feOffset>
          <feGaussianBlur stdDeviation="2.15"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.309804 0 0 0 0 0.27451 0 0 0 0 0.898039 0 0 0 0.2 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_679_99"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_679_99"
            result="shape"
          ></feBlend>
        </filter>
        <clipPath id="clip0_679_99">
          <path
            fill="#fff"
            d="M0 0H53V53H0z"
            transform="translate(15.768 15.179)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export {
  IconCalendar,
  IconCase,
  IconGarant,
  IconHome,
  IconClean,
  IconEquipment,
  IconSettings,
  IconHeart,
};
