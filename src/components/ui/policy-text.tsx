import { cn } from "@/lib/utils";
import { PRIVACY_PAGE } from "@/utils/path";
import Link from "next/link";

interface PolicyText extends React.HtmlHTMLAttributes<HTMLElement> {
  variant?: "light" | "dark";
}

const PolicyText: React.FC<PolicyText> = ({ className, variant, ...props }) => {
  return (
    <p
      {...props}
      className={cn(
        "mt-4 text-sm leading-6",
        variant === "dark" ? "text-white/90" : "text-gray-900",
        className
      )}
    >
      Мы заботимся о ваших данных. Прочтите нашу{" "}
      <Link
        className={cn(
          "font-semibold",
          variant === "dark" ? "text-white" : "text-accent-600"
        )}
        href={PRIVACY_PAGE}
      >
        политику конфиденциальности.
      </Link>
    </p>
  );
};

export default PolicyText;
