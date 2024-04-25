import NavBar from "@/App/Components/NavBar";
import InternshipMobileSidebar from "./Internship-mobile-sidebar";

type Props = {
  internship: any;
  progressCount: any;
};

const InternshipNavBar = ({ internship, progressCount }: Props) => {
  return (
    <div className=" border-b h-full shadow-sm px-5 flex items-center justify-between md:justify-end">
        <InternshipMobileSidebar internship={internship} progressCount={progressCount} />
      <NavBar />
    </div>
  );
};

export default InternshipNavBar;
