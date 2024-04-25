import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

type Props = {
  variant: "default" | "success";
  value?: number;
  size?: "default" | "sm";
};

const colorByVariant = {
  default: "text-sky-700",
  success: "text-emerald-700",
};

const sizeByVariant = {
  default: "text-sm",
  sm: "text-xl",
};
const InternshipProgress = ({ variant, value, size }: Props) => {
  return (
    <div className="w-full">
      <Progress className="h-2" value={value} variant={variant} />
      <p
        className={cn(
          "font-medium mt-2 text-sky-700",
          colorByVariant[variant || "default"],
          sizeByVariant[size || "default"]
        )}
      >
        {Math.round(value || 0)}% Complete
      </p>
    </div>
  );
};

export default InternshipProgress;
