import { IconBadge } from "@/components/icon-badge";
import { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  label: string;
  numberOfItems: number;
  varient?: "default" | "success";
};

const InfoCard = ({ icon, label, numberOfItems, varient }: Props) => {
  return (
    <div className="border rounded-md flex items-center gap-x-2 p-3">
      <IconBadge variant={varient} icon={icon} />
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-gray-500 text-sm">
          {numberOfItems} {numberOfItems === 1 ? "Internship" : "Internships"}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
