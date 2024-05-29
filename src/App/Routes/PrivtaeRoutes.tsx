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
import Dashboard from "../pages/dashboard";
import CreateInternshipLayout from "./CreateInternshipLayout";
import CreateInternship from "../pages/createInternship/Index";
import Description from "../pages/createInternship/Description";
import EditTask from "../pages/createInternship/EditTask";
import { InternshipIdPage } from "../pages/Internship/Index";
import InternshipLayout from "../pages/Internship/layout";
import { InternshipDetail } from "../pages/Internship/Internship-details";
import Internships from "../pages/UserInternships/Internships";

const PrivtaeRoutes = () => {
  const location = useLocation();

  return (
    <Routes key={location.pathname} location={location}>
      <Route path="auth/*" element={<Navigate to={"/"} />} />

      {/* Main Routes */}
      <Route element={<Layout />}>
        <Route path="certificate" element={<CertificationPage />} />
        <Route path="CV" element={<CV />} />
        <Route path="performance" element={<PerformancePage />} />
        <Route path="leaderboard" element={<LeaderboardPage />} />

        <Route
          path="professional/profile/:userId/:path"
          element={<ProfilePage />}
        />
        <Route path="/" element={<Dashboard />} />
        <Route path="professional/analytics" element={<Analytics />} />
        <Route path="professional/earnings" element={<Earnings />} />
        <Route path="internships" element={<Internships />} />
        <Route
          path="professional/internships"
          element={<ProfessionalInternship />}
        />
      </Route>

      {/* Create Internship Routes */}
      <Route element={<CreateInternshipLayout />}>
        <Route
          path="professional/createInternship"
          element={<CreateInternship />}
        />
        <Route
          path="professional/createInternship/step-2/:id"
          element={<Description />}
        />
        <Route
          path="professional/createInternship/:internshipId/editTask/:id"
          element={<EditTask />}
        />
      </Route>

      {/* Intenship Routes */}
      <Route path="details/internship/:internshipId" element={<InternshipLayout />}>
        <Route path="task/:taskId" element={<InternshipIdPage />} />
        <Route element={<InternshipDetail />} index />
      </Route>
    </Routes>
  );
};

export default PrivtaeRoutes;
