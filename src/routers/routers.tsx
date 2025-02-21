import { Routes, Route } from "react-router-dom";
import Home from "@/pages/home";
import Dashboard from "@/pages/dashboard";
import NotFound from "@/pages/notfound";
import { ROUTER } from "@/config/router";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTER.HOME} element={<Home />}>
        <Route path={ROUTER.DASHBOARD} element={<Dashboard />} />
      </Route>
      <Route path={ROUTER.LOGIN}>
        <p>LOGIN</p>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
