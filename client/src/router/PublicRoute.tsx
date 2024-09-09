import React from "react";
import { Route, Link, Redirect } from "react-router-dom";

const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}: any) => {
  return <Route {...rest} component={(props) => <Component {...props} />} />;
};

export default PublicRoute;
