interface IconCombainProps {
  variant: "ok" | "user" | "card" | "message" | "tg" | "wa";
  className?: string;
  color?: string;
  size?: number;
}
const IconCombain: React.FC<IconCombainProps> = ({
  variant,
  className,
  color = "black",
  size = 20,
}) => {
  switch (variant) {
    case "tg":
      return (
        <svg
          width={size}
          viewBox='0 0 24 21'
          fill='none'
          className={className}
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M21.808 0.051731C21.7189 0.0751785 20.6309 0.483166 19.3929 0.956807C18.1502 1.43045 13.5076 3.20308 9.07129 4.896C4.63501 6.58891 0.902154 8.02859 0.780227 8.09894C0.480098 8.26307 0.198727 8.53975 0.0861788 8.77892C-0.0263695 9.03684 -0.0310591 9.47765 0.0861788 9.7262C0.203417 9.98412 0.592646 10.3218 0.94436 10.4718C1.10849 10.5422 2.19646 10.8704 3.36884 11.2034C4.53653 11.5363 5.50257 11.8177 5.50726 11.8224C5.51195 11.8318 6.03717 13.3324 6.67494 15.166C7.31272 16.9949 7.89422 18.5988 7.95987 18.7254C8.1709 19.1146 8.45696 19.3913 8.84619 19.5836C9.16977 19.743 9.23073 19.7571 9.60589 19.7571C10.0842 19.7571 10.4266 19.6492 10.797 19.3819C10.933 19.2834 11.6271 18.6644 12.3446 18.0079C13.0621 17.3467 13.6623 16.8027 13.6811 16.798C13.6998 16.7886 14.5908 17.492 15.6601 18.3549C17.0059 19.4429 17.7094 19.9775 17.9345 20.09C18.7317 20.4886 19.5383 20.3714 20.0963 19.7758C20.5325 19.3116 20.434 19.7289 22.3004 10.514C23.998 2.15263 24.0121 2.0776 23.998 1.58989C23.9839 1.13501 23.9699 1.07404 23.8198 0.802053C23.515 0.234622 23.0789 -0.00923268 22.3754 0.000146345C22.1503 0.000146345 21.8924 0.0235939 21.808 0.051731ZM22.5536 1.70244C22.5536 1.94161 19.2569 18.2705 19.149 18.5565C19.1068 18.6691 19.0224 18.791 18.9615 18.8332C18.8536 18.8989 18.8349 18.8989 18.6238 18.7957C18.5019 18.7348 16.8746 17.4498 15.0035 15.9445C13.1324 14.4392 11.5989 13.2058 11.5989 13.2011C11.5942 13.1964 13.2496 11.4332 15.2802 9.27131C17.3154 7.11414 19.0037 5.28523 19.0365 5.20551C19.1209 4.99448 19.074 4.6709 18.924 4.47863C18.7833 4.28636 18.5394 4.19726 18.2674 4.23009C18.1361 4.24416 17.1091 4.74593 15.0035 5.81983C7.28927 9.7684 6.03717 10.4062 5.98559 10.4062C5.90117 10.4109 1.87288 9.26194 1.87288 9.2338C1.87288 9.21973 4.31612 8.27714 7.30334 7.13759C10.2859 5.99803 14.8394 4.25823 17.4186 3.27343C19.9979 2.28863 22.1738 1.46796 22.2488 1.44921C22.4692 1.39762 22.5536 1.46796 22.5536 1.70244ZM14.7597 7.67219C14.694 7.74722 13.5826 8.93367 12.2836 10.3124C10.9893 11.6864 9.89664 12.8822 9.86381 12.962C9.8263 13.037 9.59651 13.9233 9.35266 14.9316C9.10411 15.9351 8.88839 16.798 8.86964 16.8449C8.84619 16.8965 8.53199 16.057 7.89891 14.2422C7.38775 12.7697 6.98445 11.5551 7.0079 11.5457C7.03604 11.5363 8.80867 10.636 10.9471 9.53862C13.0902 8.44596 14.8488 7.55026 14.8581 7.54557C14.8722 7.54557 14.8253 7.60185 14.7597 7.67219ZM11.7349 15.1942C12.1523 15.5271 12.4993 15.8179 12.504 15.8366C12.5087 15.8554 11.96 16.3759 11.2894 16.9903C10.6188 17.6046 10.0795 18.0688 10.0936 18.0219C10.1077 17.975 10.3046 17.1778 10.5297 16.254C10.7595 15.3349 10.9518 14.5798 10.9612 14.5798C10.9705 14.5798 11.3176 14.8565 11.7349 15.1942Z'
            fill={color}
          />
        </svg>
      );
    case "wa":
      return (
        <svg
          width={size}
          viewBox='0 0 20 21'
          fill='none'
          className={className}
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9.42625 0.00963434C7.33951 0.189454 5.59568 0.833458 4.03167 2.00856C3.53821 2.37656 2.70184 3.18784 2.2962 3.68548C1.1671 5.07385 0.43528 6.76332 0.155097 8.59915C0.067278 9.19297 0.0589143 10.6064 0.138369 11.1919C0.305643 12.4255 0.665282 13.5755 1.18383 14.5666L1.38874 14.9472L0.686191 17.5148C0.29728 18.9241 -0.0121771 20.0867 0.000368404 20.095C0.0087321 20.1034 1.19638 19.8023 2.63911 19.4218L5.26113 18.7318L5.7755 18.9785C7.79533 19.9445 10.2417 20.187 12.4372 19.6392C13.8214 19.2921 15.2056 18.6063 16.3138 17.7156C17.3927 16.8416 18.4339 15.5201 19.0236 14.2656C19.9227 12.3712 20.2029 10.3346 19.8558 8.2646C19.149 4.05766 15.745 0.733094 11.5088 0.109999C10.9903 0.0347254 9.81098 -0.0238204 9.42625 0.00963434ZM11.1994 1.80783C12.9641 2.05038 14.5532 2.84911 15.8496 4.1413C17.8359 6.13186 18.664 8.87933 18.1036 11.6184C17.8359 12.919 17.217 14.2028 16.3598 15.2274C15.0634 16.783 13.3237 17.7699 11.2872 18.1212C10.7017 18.2174 9.35098 18.2174 8.77807 18.1212C7.71169 17.933 6.77078 17.5985 5.89677 17.0925L5.52459 16.8792L4.0024 17.2807C3.16184 17.4981 2.46766 17.6696 2.45929 17.6612C2.45093 17.6528 2.62239 16.9754 2.84821 16.1557L3.25385 14.667L3.04057 14.3199C1.91147 12.4715 1.54347 10.4099 1.96165 8.32733C2.5513 5.40422 4.73422 2.99129 7.59042 2.10056C8.79897 1.72419 9.92389 1.63219 11.1994 1.80783Z'
            fill={color}
          />
          <path
            d='M6.2815 5.37518C5.81314 5.52991 5.20259 6.337 5.0395 7.01446C4.78858 8.08501 5.11477 9.15975 6.11841 10.5398C7.03005 11.7943 8.01697 12.7687 9.10007 13.4796C9.80262 13.9396 11.0237 14.4707 11.8308 14.6672C12.2532 14.7676 13.0185 14.776 13.3739 14.684C13.9259 14.5376 14.6159 14.0692 14.8376 13.6887C14.9839 13.442 15.0801 13.0238 15.0885 12.6432C15.0927 12.3463 15.0843 12.3087 14.9923 12.2418C14.7916 12.087 12.8512 11.1921 12.6714 11.167C12.4539 11.1336 12.4455 11.1419 12.0232 11.6898C11.5883 12.2501 11.3834 12.4467 11.2454 12.4467C11.0697 12.4467 10.0033 11.903 9.56425 11.5852C9.35516 11.4347 9.0248 11.1587 8.83243 10.9705C8.25115 10.3976 7.58624 9.48175 7.58624 9.25175C7.58624 9.17648 7.66569 9.03847 7.81206 8.85447C8.26788 8.28574 8.38079 8.09756 8.38079 7.91356C8.38079 7.6961 7.56533 5.71391 7.38969 5.509C7.2726 5.371 7.2726 5.371 6.83351 5.35427C6.59096 5.3459 6.34423 5.35427 6.2815 5.37518Z'
            fill={color}
          />
        </svg>
      );
    case "ok":
      return (
        <svg
          width={size}
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          className={className}
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M13 8L9 12L7 10M10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19Z'
            stroke={color}
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
    case "user":
      return (
        <svg
          width={size}
          viewBox='0 0 20 17'
          fill='none'
          className={className}
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M13 16C13 13.7909 10.3137 12 7 12C3.68629 12 1 13.7909 1 16M19 7L15 11L13 9M7 9C4.79086 9 3 7.20914 3 5C3 2.79086 4.79086 1 7 1C9.20914 1 11 2.79086 11 5C11 7.20914 9.20914 9 7 9Z'
            stroke={color}
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
    case "card":
      return (
        <svg
          width={size}
          viewBox='0 0 20 16'
          fill='none'
          className={className}
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1 7V11.8002C1 12.9203 1 13.4801 1.21799 13.9079C1.40973 14.2842 1.71547 14.5905 2.0918 14.7822C2.5192 15 3.07899 15 4.19691 15H15.8031C16.921 15 17.48 15 17.9074 14.7822C18.2837 14.5905 18.5905 14.2842 18.7822 13.9079C19 13.4805 19 12.9215 19 11.8036V7M1 7V5M1 7H19M1 5V4.2002C1 3.08009 1 2.51962 1.21799 2.0918C1.40973 1.71547 1.71547 1.40973 2.0918 1.21799C2.51962 1 3.08009 1 4.2002 1H15.8002C16.9203 1 17.4796 1 17.9074 1.21799C18.2837 1.40973 18.5905 1.71547 18.7822 2.0918C19 2.5192 19 3.07899 19 4.19691V5M1 5H19M5 11H9M19 7V5'
            stroke={color}
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
    case "message":
      return (
        <svg
          width={size}
          viewBox='0 0 24 24'
          fill='none'
          className={className}
          xmlns='http://www.w3.org/2000/svg'
        >
          <g id='Communication / Chat_Circle'>
            <path
              id='Vector'
              d='M7.50977 19.8018C8.83126 20.5639 10.3645 21 11.9996 21C16.9702 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.6351 3.43604 15.1684 4.19819 16.4899L4.20114 16.495C4.27448 16.6221 4.31146 16.6863 4.32821 16.7469C4.34401 16.804 4.34842 16.8554 4.34437 16.9146C4.34003 16.9781 4.3186 17.044 4.27468 17.1758L3.50586 19.4823L3.50489 19.4853C3.34268 19.9719 3.26157 20.2152 3.31938 20.3774C3.36979 20.5187 3.48169 20.6303 3.62305 20.6807C3.78482 20.7384 4.02705 20.6577 4.51155 20.4962L4.51758 20.4939L6.82405 19.7251C6.95537 19.6813 7.02214 19.6591 7.08559 19.6548C7.14475 19.6507 7.19578 19.6561 7.25293 19.6719C7.31368 19.6887 7.37783 19.7257 7.50563 19.7994L7.50977 19.8018Z'
              stroke={color}
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
        </svg>
      );
  }
  return null;
};

export default IconCombain;
