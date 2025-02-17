import { Route, Switch } from "react-router-dom";
import DashboardRoutes from "./dashboardRoutes";
import Home from "@/pages/home";
import Dashboard from "@/pages/dashboard";
import NotFound from "@/pages/notfound";
import { ROUTER } from "@/config/router";
import PostDetail from "@/pages/post/PostDetail";
import Post from "@/pages/post";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTER.HOME} component={Home} />

      <Route path={ROUTER.DASHBOARD}>
        <Dashboard />
        <DashboardRoutes />
      </Route>
      <Route exact path={ROUTER.POST} component={Post} />
      <Route exact path={`${ROUTER.POST}/:id`} component={PostDetail} />

      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
