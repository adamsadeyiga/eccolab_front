import { Route } from "react-router-dom";
import AuthGuard from "./AuthGuard";

const ProtectedRoute = ({ path, children }) => {
  return <Route path={path} element={<AuthGuard>{children}</AuthGuard>} />;
};

export default ProtectedRoute;
