import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivtaeRoutes from "./App/Routes/PrivtaeRoutes";
import Router from "./landingPage/Routes/Router";
import App from "./App";
import { AnimatePresence } from "framer-motion";

// type Props = {};

const AppRouter = () => {
  const token = useSelector((state: any) => state.auth.token);
  const isAuth = useSelector((state: any) => state.auth.isAuth);

  
  console.log(token, isAuth);
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route element={<App />}>
            {token && isAuth ? (
              <Route path="/*" element={<PrivtaeRoutes />} />
            ) : (
              <Route path="/*" element={<Router />} />
            )}
          </Route>
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default AppRouter;
