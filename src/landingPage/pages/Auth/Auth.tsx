import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { AuthContent } from "./AuthContent";
import { LogInIcon } from "lucide-react";

export const Auth = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          type="button"
          variant="outline"
          className=" items-center gap-x-2 hidden md:flex"
        >
          <span className="">Login/Register</span>
          <LogInIcon className="md:h-4 md:w-4 " />
        </Button>
        <Button type="button" variant="ghost" className=" md:hidden">
          <LogInIcon className="h-5 w-5 " />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="right-0 absolute min-w-[250px]  md:w-[500px] top-0">
        <AuthContent />
      </PopoverContent>
    </Popover>
  );
};
