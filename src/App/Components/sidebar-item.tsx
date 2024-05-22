import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  icon?: LucideIcon;
  label: string;
  href: string;
  sub_menu?: { label: string; path: string }[];
};

const SidebarItem = ({ icon: Icon, label, href, sub_menu }: Props) => {
  const pathname = useLocation().pathname;
  const router = useNavigate();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router(href);
  };

  return (
    <div>
      <button
        onClick={onClick}
        type="button"
        className={cn(
          "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20 w-full",
          isActive &&
            Icon &&
            "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
        )}
      >
        <div className="flex items-center gap-x-2 py-4">
          {Icon && (
            <Icon
              size={22}
              className={cn(
                "text-slate-500",
                isActive && Icon !== undefined && "text-sky-700"
              )}
            />
          )}
          <div className="flex items-center gap-x-5">
            <span>{label}</span>
            {sub_menu && sub_menu?.length > 0 && (
              <div>
                {isActive ? (
                  <IoIosArrowUp
                    size={20}
                    className={cn(
                      "text-slate-500 transition-all",
                      isActive && "text-sky-700"
                    )}
                  />
                ) : (
                  <IoIosArrowDown
                    size={20}
                    className={cn(
                      "text-slate-500 transition-all",
                      isActive && "text-sky-700"
                    )}
                  />
                )}
              </div>
            )}
          </div>
        </div>
        <div
          className={cn(
            "ml-auto opacity-0 border-2 border-sky-700 h-full transition-all",
            isActive && Icon && "opacity-100"
          )}
        />
      </button>
      {isActive && sub_menu && sub_menu?.length > 0 && (
        <div className="md:pl-6 w-full">
          {sub_menu.map((item, index) => (
            <button
              key={index}
              onClick={() => router(item.path)}
              type="button"
              className={cn(
                "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 w-full",
                pathname === item.path &&
                  "text-sky-700"
              )}
            >
              <div className="flex items-center gap-x-2 py-4">
                <span>{item.label}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
