import { Route, Switch, useRouteMatch } from "react-router-dom";

const DashboardRoutes = () => {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <h3>Select a section</h3>
      </Route>
      <Route path={`${path}/profile`} render={() => <p>profile</p>} />
      <Route path={`${path}/settings`} render={() => <p>settings</p>} />
    </Switch>
  );
};

export default DashboardRoutes;
