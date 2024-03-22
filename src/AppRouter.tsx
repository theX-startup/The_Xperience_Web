import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivtaeRoutes from "./App/Routes/PrivtaeRoutes";
import Router from "./landingPage/Routes/Router";
import App from "./App";
import { AnimatePresence } from "framer-motion";

// type Props = {};

const AppRouter = () => {
  const token = localStorage.getItem("TheX_User_Token");
  const isAuth = useSelector((state: any) => state.auth.isAuth);

  console.log(token, isAuth);
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route element={<App />}>
            {token ? (
              <>
                <Route path="/*" element={<PrivtaeRoutes />} />
                <Route index element={<Navigate to={"/dashboard"} />} />
              </>
            ) : (
              <>
                <Route path="auth/*" element={<Router />} />
                <Route path="*" element={<Navigate to={"/auth"} />} />
              </>
            )}
          </Route>
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default AppRouter;
