import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import PublicRoute from "./PublicRoute";

import { TailSpin } from "react-loader-spinner";
import { PublicRoutes } from "./DashboardRoutes";
import { useAppSelector, useAppDispatch } from "../store/storeHooks";
import { RootState } from "../store/store";

const AppRouter = () => {
  const dispatch = useAppDispatch();
  const today = new Date();


  return (
    <React.Suspense
      fallback={
        <TailSpin
          wrapperStyle={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
          height="100"
          width="100"
          color="#1f65ff"
          ariaLabel="loading"
        />
      }
    >
      <Router>
          <PublicRoute
            component={PublicRoutes}
          />
      </Router>
    </React.Suspense>
  );
};

export default AppRouter;