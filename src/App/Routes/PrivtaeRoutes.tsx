import { Route, Routes } from "react-router-dom";
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
        <Route index element={<Dashboard />} />
        <Route path="profileDetails" element={<ProfileDetails />} />
        <Route path="payment/:id" element={<PaymentPage />} />
        <Route element={<SideBar setActive={setActive} />}>
          <Route
            path="internships"
            element={<UserInternships active={active} />}
          />
        </Route>
      </Route>
      <Route path="internships/tasks/:id/*" element={<Tasks />} />
    </Routes>
  );
};

export default PrivtaeRoutes;
