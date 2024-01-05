import { PRIVACY_PAGE } from "@/utils/path";
import Link from "next/link";

interface PolicyText extends React.HtmlHTMLAttributes<HTMLElement> {}

const PolicyText: React.FC<PolicyText> = ({ className, ...props }) => {
  return (
    <p {...props} className={`mt-4 text-sm leading-6 ${className}`}>
      Мы заботимся о ваших данных. Прочтите нашу{" "}
      <Link className='font-semibold text-accent-600' href={PRIVACY_PAGE}>
        политику конфиденциальности.
      </Link>
    </p>
  );
};

export default PolicyText;
