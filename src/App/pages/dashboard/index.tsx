import { useSelector } from "react-redux";
import InternDashboard from "./InternDashboard";
import ProDashboard from "./ProDashboard";


const Dashboard = () => {
  const user = useSelector((state: any) => state.auth.user);

  if (user.position === "pro") {
    return <ProDashboard />;
  }
  if (user.position === "intern") {
    return <InternDashboard />;
  }
};

export default Dashboard;
