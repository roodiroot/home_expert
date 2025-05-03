import { cn } from "@/lib/utils";
import { PDCONTENT_PAGE } from "@/utils/path";
import { Checkbox } from "@/components/ui/checkbox";

interface PolicyText extends React.HtmlHTMLAttributes<HTMLElement> {
  setChanged?: (changed: boolean) => void;
  checked?: boolean;
  variant?: "light" | "dark";
}

const PolicyText: React.FC<PolicyText> = ({
  className,
  variant,
  checked,
  setChanged,
  ...props
}) => {
  return (
    <div className={cn("flex items-center space-x-2", className)} {...props}>
      <Checkbox
        checked={checked}
        onCheckedChange={() => setChanged && setChanged(!checked)}
      />
      <div
        className={cn(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          variant === "dark" ? "text-white" : "text-gray-900"
        )}
      >
        Согласие на обработку{" "}
        <a
          target="_blank"
          className={cn(
            "font-semibold text-accent-600",
            variant === "dark" && "text-white underline"
          )}
          href={PDCONTENT_PAGE}
        >
          персональных данных.
        </a>
      </div>
    </div>
  );
};

export default PolicyText;
