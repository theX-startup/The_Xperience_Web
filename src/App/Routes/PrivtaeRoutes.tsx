import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Layout";
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
import Analytics from "../pages/Analytics/Index";
import Earnings from "../pages/Earnings/Index";
import ProfessionalInternship from "../pages/UserInternships/ProfessionalInternship";
import Orders from "../pages/orders/Index";
import ProfileLayout from "./ProfileLayout";
import SidebarNav from "../Components/Sidebar";
import Dashboard from "../pages/dashboard";
import CreateInternshipLayout from "./CreateInternshipLayout";
import CreateInternship from "../pages/createInternship/Index";
import Description from "../pages/createInternship/Description";
import EditTask from "../pages/createInternship/EditTask";

const PrivtaeRoutes = () => {
  const location = useLocation();
  const [active, setActive] = useState("inProgress");

  return (
    <Routes key={location.pathname} location={location}>
      <Route path="auth/*" element={<Navigate to={'/dashboard'} />} />
      <Route element={<Layout />}>
        <Route path="payment/:id" element={<PaymentPage />} />
        <Route element={<SideBar setActive={setActive} />}>
          <Route
            path="internships"
            element={<UserInternships active={active} />}
          />
        </Route>
        <Route path="details/:id" element={<InternshipDetails />} />
        <Route path="certificate" element={<CertificationPage />} />
        <Route path="CV" element={<CV />} />
        <Route path="performance" element={<PerformancePage />} />
        <Route path="leaderboard" element={<LeaderboardPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="profileDetails" element={<ProfileDetails />} />
        <Route element={<SidebarNav />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="earnings" element={<Earnings />} />
          <Route path="proInternships" element={<ProfessionalInternship />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Route>

      <Route path="internships/tasks/:id/*" element={<Tasks />} />
      <Route element={<ProfileLayout />}></Route>
      <Route element={<CreateInternshipLayout />}>
        <Route path="createInternship" element={<CreateInternship />} />
        <Route path="createInternship/step-2/:id" element={<Description />} />
        <Route
          path="createInternship/:internshipId/editTask/:id"
          element={<EditTask />}
        />
      </Route>
    </Routes>
  );
};

export default PrivtaeRoutes;
