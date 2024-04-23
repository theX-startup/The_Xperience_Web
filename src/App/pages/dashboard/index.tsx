import InternDashboard from "./InternDashboard";
import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Dashboard = () => {
  const [cookies] = useCookies(["state"]);

  if (cookies.state === "PROFESSIONAL") {
    return <Navigate to={"/proInternships"} />;
  } else {
    return <InternDashboard />;
  }
};

export default Dashboard;
