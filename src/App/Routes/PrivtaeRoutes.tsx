import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Layout";
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
import { InternshipIdPage } from "../pages/Internship/Index";
import InternshipLayout from "../pages/Internship/layout";
import { InternshipDetail } from "../pages/Internship/Internship-details";

const PrivtaeRoutes = () => {
  const location = useLocation();

  return (
    <Routes key={location.pathname} location={location}>
      <Route path="auth/*" element={<Navigate to={"/dashboard"} />} />
      <Route element={<Layout />}>
        <Route path="certificate" element={<CertificationPage />} />
        <Route path="CV" element={<CV />} />
        <Route path="performance" element={<PerformancePage />} />
        <Route path="leaderboard" element={<LeaderboardPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route element={<SidebarNav />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="earnings" element={<Earnings />} />
          <Route path="proInternships" element={<ProfessionalInternship />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Route>
      <Route element={<ProfileLayout />}></Route>
      <Route element={<CreateInternshipLayout />}>
        <Route path="createInternship" element={<CreateInternship />} />
        <Route path="createInternship/step-2/:id" element={<Description />} />
        <Route
          path="createInternship/:internshipId/editTask/:id"
          element={<EditTask />}
        />
      </Route>
      <Route path="internship/:internshipId" element={<InternshipLayout />}>
        <Route path="task/:taskId" element={<InternshipIdPage />} />
        <Route element={<InternshipDetail />} index />
      </Route>
    </Routes>
  );
};

export default PrivtaeRoutes;
