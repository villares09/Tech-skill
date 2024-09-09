import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}: any) => {
  return <Route {...rest} component={(props) => <Component {...props} />} />;
};

export default ProtectedRoute;
