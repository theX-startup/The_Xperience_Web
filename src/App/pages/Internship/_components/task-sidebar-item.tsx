import { cn } from "@/lib/utils";
import { CheckCircle, Lock, PlayCircle } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

interface props {
  id: string;
  label: string;
  isCompleted: boolean;
  isLocked: boolean;
  internshipId: string;
}

export const TaskSideBarItem = ({
  id,
  isCompleted,
  isLocked,
  label,
  internshipId,
}: props) => {
  const Icon = isLocked ? Lock : isCompleted ? CheckCircle : PlayCircle;

  const { taskId } = useParams();
  const navigation = useNavigate();

  const isActive = taskId === id;

  const onClick = () => {
    navigation(`../details/internship/${internshipId}/task/${id}`);
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
        isActive &&
          "text-slate-700 bg-slate-200/20 hover:bg-slate-200/20 hover:text-slate-700",
        isCompleted && "text-emerald-700 hover:text-emerald-700",
        isActive && isCompleted && "bg-emerald-200"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn(
            "text-slate-500 ",
            isActive && "text-slate-700",
            isCompleted && "text-emerald-700"
          )}
        />
        <span className="text-nowrap">{label}</span>
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-slate-700 h-full transition-all",
          isActive && "opacity-100",
          isCompleted && "border-emerald-700"
        )}
      />
    </button>
  );
};
