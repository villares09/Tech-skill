import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useAppDispatch } from "../store/storeHooks";
import { getCountry } from "store/createTurnDisponible/createSlice";

// Carga dinámica de componentes
const CountryList = React.lazy(() => import("../components/pages/country"));
const CountryInfo = React.lazy(() => import("../components/pages/countryInfo"));

export const PublicRoutes = () => {
  const dispatch = useAppDispatch();
  const location = useLocation(); // Necesario para la animación

  useEffect(() => {
    dispatch(getCountry());
  }, [dispatch]);

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        classNames="fade"
        timeout={700}
      >
        <Switch location={location}>
          <Route exact path="/" component={CountryList} />
          <Route path="/country/:code" component={CountryInfo} />
          {/* <Redirect to="/home" /> */}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};