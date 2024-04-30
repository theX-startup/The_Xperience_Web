import InternDashboard from "./InternDashboard";
import { useCookies } from "react-cookie";
import ProDashboard from "./ProDashboard";

const Dashboard = () => {
  const [cookies] = useCookies(["state"]);

  if (cookies.state === "PROFESSIONAL") {
    return <ProDashboard />;
  } else {
    return <InternDashboard />;
  }
};

export default Dashboard;
