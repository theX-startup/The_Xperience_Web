import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ComboBoxProps {
  options?: {
    label: string;
    value: string;
  }[];
  value?: string;
  onChange: (value: string) => void;
}

const ComboBox = React.forwardRef<HTMLDivElement, ComboBoxProps>(
  (props, ref) => {
    const { options, value, onChange } = props;
    const [open, setOpen] = React.useState(false);
    const [filteredOptions, setFilteredOptions] = React.useState(options);

    React.useEffect(() => {
      setFilteredOptions(options);
    }, [options]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setFilteredOptions(
        options?.filter((option) =>
          option.label.toLowerCase().includes(value.toLowerCase())
        )
      );
    };

    return (
      <div className="w-full">
        <Button
          type="button"
          variant="outline"
          role="combobox"
          onClick={() => setOpen((current) => !current)}
          className="w-[200px] justify-between text-xs"
        >
          <span className="overflow-hidden">
            {value
              ? options?.find((option) => option.value === value)?.label
              : "Select option..."}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
        {open && (
          <div
            id="dropdown"
            className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-[200px] dark:bg-gray-700"
          >
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 rounded-t-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  outline-none"
                placeholder="Search..."
                onChange={(e) => {
                  handleSearch(e);
                }}
              />
            </div>
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200 h-[200px] overflow-y-auto"
              aria-labelledby="dropdownDefaultButton"
            >
              {filteredOptions?.map((option) => (
                <li
                  key={option.value}
                  onClick={() => {
                    onChange(option.value === value ? "" : option.value);
                    setOpen(false);
                  }}
                >
                  <a
                    href=""
                    className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-xs flex"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === option.value ? "block" : "hidden"
                      )}
                    />
                    {option.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
);

export default ComboBox;
