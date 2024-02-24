import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "../pages/dashboard";
import AddPhone from "../../landingPage/pages/Auth/AddPhone";
import AuthLayout from "../../landingPage/Routes/AuthLayout";
import ProfileDetails from "../../landingPage/pages/Auth/ProfileDetails";
import PaymentPage from "../pages/StartInternship/PaymentPage";
import UserInternships from "../pages/UserInternships/UserInternships";
import SideBar from "../pages/UserInternships/SideBar";
import { useState } from "react";
import Tasks from "../pages/Tasks/Tasks";
import InternshipDetails from "../pages/InternshipDetails/InternshipDetails";
import ProfilePage from "../pages/Profile/ProfilePage";
import CertificationPage from "../pages/certificate/CertificationPage";
import CV from "../pages/certificate/CV";
import PerformancePage from "../pages/performance/PerformancePage";
import LeaderboardPage from "../pages/performance/LeaderboardPage";

const PrivtaeRoutes = () => {
  const [active, setActive] = useState("inProgress");
  console.log(active);
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="addPhone" element={<AddPhone />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route index element={<Navigate to={"dashboard"} />} />
        <Route path="profileDetails" element={<ProfileDetails />} />
        <Route path="payment/:id" element={<PaymentPage />} />
        <Route element={<SideBar setActive={setActive} />}>
          <Route
            path="internships"
            element={<UserInternships active={active} />}
          />
        </Route>
        <Route path="details/:id" element={<InternshipDetails />} />
      </Route>
      <Route path="internships/tasks/:id/*" element={<Tasks />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route>
        <Route path="certificate" element={<CertificationPage />} />
        <Route path="CV" element={<CV />} />
        <Route path="performance" element={<PerformancePage />} />
        <Route path="leaderboard" element={<LeaderboardPage />} />
      </Route>
    </Routes>
  );
};

export default PrivtaeRoutes;
