import React from "react";
import AppRouter from "./router/AppRouter";



const App = () => {

  
  // const isAuthenticated = useAppSelector(
  //   (state: RootState) => state.auth.isAuthenticated
  // );

  // const isAuthenticated = localStorage.getItem("isAuthenticated");

  // useEffect(() => {

  // }, [isAuthenticated]);

 
  return (
    // <Layout />
    <AppRouter />
  );
};

export default App;