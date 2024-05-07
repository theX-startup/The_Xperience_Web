import { CheckCircle, Clock } from "lucide-react";
import { useSelector } from "react-redux";
import { redirect } from "react-router-dom";
import InfoCard from "../../Profile/components/info-card";
import InternshipComponent from "@/App/Components/InternshipComponent";

// type Props = {};

const EnrolledInternship = () => {
  const { _id, completedInternships, InternshipsInProgress } = useSelector(
    (state: any) => state.auth.user
  );

  const allInternships = [...completedInternships, ...InternshipsInProgress];

  if (!_id) {
    redirect("/");
    return null;
  }
  return (
    <div className="p-6 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InfoCard
          icon={Clock}
          label={"In Progress"}
          numberOfItems={InternshipsInProgress?.length}
        />
        <InfoCard
          icon={CheckCircle}
          label={"Completed"}
          numberOfItems={completedInternships?.length}
          varient="success"
        />
      </div>
      <div className="space-y-4">
        {allInternships.map((internship: any) => (
          <InternshipComponent
            key={internship._id}
            data={internship}
            index={internship._id}
          />
        ))}
      </div>
      {allInternships.length === 0 && (
        <p className="text-gray-500 text-center pt-5">
          You have not enrolled in any internships yet
        </p>
      )}
    </div>
  );
};

export default EnrolledInternship;
