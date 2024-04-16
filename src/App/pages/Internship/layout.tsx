import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchInternship } from "./_request";
import Loader from "@/App/Components/Loader";
import { InternshipSideBar } from "./_components/internship-sidebar";
import InternshipNavBar from "./_components/Internship-navbar";

const InternshipLayout = () => {
  const { internshipId } = useParams();
  const internship = useSelector((state: any) => state.internships.internship);
  const isLoading = useSelector(
    (state: any) => state.internships.internshipLoading
  );
  const dispatch = useDispatch<any>();
  const user = useSelector((state: any) => state.auth.user);

  useEffect(() => {
    dispatch(fetchInternship(internshipId || ""));
  }, []);

  const progress = internship.progress;
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="h-screen flex ">
      <div className="hidden md:flex h-full w-80 flex-col inset-y-0 z-50">
        <InternshipSideBar internship={internship} progressCount={progress} />
      </div>
      <div className="w-full">
        <div className="h-[80px]  w-full inset-y-0 z-50">
          <InternshipNavBar internship={internship} progressCount={progress} />
        </div>
        <main className=" h-full w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default InternshipLayout;
