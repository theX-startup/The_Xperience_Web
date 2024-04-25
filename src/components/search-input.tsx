import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/use-debounce";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";

export const SearchInput = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value);

  const [searchParams] = useSearchParams();
  const router = useNavigate();
  const pathname = useLocation().pathname;

  const currentCategoryId = searchParams.get("categoryId");

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          categoryId: currentCategoryId,
          title: debouncedValue,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );

    router(url);
  }, [debouncedValue, currentCategoryId, router, pathname]);
  return (
    <div className="relative w-full">
      <Search className="h-4 w-4 absolute top-3 left-3 text-slate-600" />
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="text_sm w-full md:w-full pl-9 rounded-full bg-slate-100 focus-visible:ring-slate-200"
        placeholder="Search for a Internship"
      />
    </div>
  );
};
