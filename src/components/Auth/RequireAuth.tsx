import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { RootState } from "../../store/store";

export default function RequireAdmin({ children }: { children: any }) {
  const { isLogging, user } = useSelector((state: RootState) => state.auth);

  if (isLogging && user.id === 1) {
    return children;
  }

  return <Navigate to="/auth/login" />;
}
