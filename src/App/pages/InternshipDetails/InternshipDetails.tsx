import { useParams } from "react-router-dom";
import Internshipdetails from "../../Components/Internshipdetails";

const InternshipDetails = () => {
  const params = useParams();
  const id = params.id;

  return (
    <Internshipdetails id={id ? id : ""} />
  );
};

export default InternshipDetails;
