import { useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";
import { cn } from "@/lib/utils";

const SubMenu = () => {
  const location = useLocation();
  const { pathname } = location;
  const history = useNavigate();
  const [searchParams] = useSearchParams();


  const currentCategoryId = searchParams.get("categoryId");
  const currentTitle = searchParams.get("title");

  const categories = useSelector((state: any) => state.create.categorys);
  console.log(categories)
  return (
    <div className="px-5 ">
      <div className="flex gap-2 overflow-x-scroll overflow-y-hidden scroll">
        {categories?.map((category: any, index: any) => {
          const isSelected = currentCategoryId === category._id;
          const onClick = () => {
            const url = qs.stringifyUrl(
              {
                url: pathname,
                query: {
                  title: currentTitle,
                  categoryId: isSelected ? null : category._id,
                },
              },
              { skipEmptyString: true, skipNull: true }
            );
            history(url);
          };
          return (
            <div key={index} className="flex items-center pb-2">
              <p
                className={cn(
                  "py-2 px-3 text-[12px] border border-slate-200 text-nowrap rounded-full hover:border-sky-700 transition cursor-pointer flex items-center justify-center text-center",
                  isSelected && "border-sky-700 bg-sky-200/20 text-sky-800 "
                )}
                onClick={onClick}
              >
                {category?.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubMenu;
