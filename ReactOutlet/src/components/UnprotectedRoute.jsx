import { Navigate } from "react-router-dom";

function UnprotectedRoute({ children }) {

  const user = localStorage.getItem("isLoggedIn");

  return user === "true"
    ? <Navigate to="/dashboard" replace />
    : children;
}

export default UnprotectedRoute;