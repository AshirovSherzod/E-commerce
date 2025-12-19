import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const Auth = () => {
  const token = useSelector((state) => state.auth.token);
  const isAuthenticated = token === "qwertyASDsdfQSXbhjiWDCFghjk1223qwsdc2";

  if (!isAuthenticated) {
    return <Navigate replace to="/sign-in" />;
  }

  return <Outlet />;
};

export default Auth;
