import { useSelector } from "react-redux";
import InternshipComponent from "../../Components/InternshipComponent";

const Dashboard = () => {
  const loading = useSelector(
    (state: any) => state.internships.internshipLoading
  );
  const internships = useSelector(
    (state: any) => state.internships.internships
  );


  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-wrap gap-5 items-center justify-center p-5">
      {internships.map((internship: any, index: any) => {
        return <InternshipComponent data={internship} key={index} />;
      })}
    </div>
  );
};

export default Dashboard;
