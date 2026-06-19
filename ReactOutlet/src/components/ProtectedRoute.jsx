import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const user = localStorage.getItem("isLoggedIn");

  return user === "true"
    ? children
    : <Navigate to="/login" replace />;
}

export default ProtectedRoute;