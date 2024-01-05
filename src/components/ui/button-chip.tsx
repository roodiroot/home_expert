"use client";

interface ButtonChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  no_bg?: boolean;
  props?: any;
}
const ButtonChip: React.FC<ButtonChipProps> = ({
  children,
  no_bg,
  ...props
}) => {
  return (
    <span
      {...props}
      className={`
  rounded-full  px-3 py-1 text-sm  leading-6 flex items-center gap-2 cursor-pointer whitespace-nowrap
  ${
    no_bg
      ? "text-gray-600 font-medium"
      : "bg-indigo-600/10 text-indigo-600 ring-indigo-600/10 ring-1 ring-inset font-semibold"
  }
  `}
    >
      <span>{children}</span>
      {no_bg && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          aria-hidden='true'
          className='w-5 h-5 fill-gray-400'
        >
          <path
            fillRule='evenodd'
            d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
            clipRule='evenodd'
          ></path>
        </svg>
      )}
    </span>
  );
};

export default ButtonChip;
