import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { InternshipSideBar } from "./internship-sidebar";

type Props = {
  internship: any;
  progressCount: number;
};

const InternshipMobileSidebar = ({ internship, progressCount }: Props) => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-25 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent className="p-0 w-72 bg-white " side='left'>
        <InternshipSideBar
          internship={internship}
          progressCount={progressCount}
        />
      </SheetContent>
    </Sheet>
  );
};

export default InternshipMobileSidebar;
