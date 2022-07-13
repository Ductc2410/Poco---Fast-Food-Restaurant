import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { RootState } from "../../redux/store";

export default function RequireUser({ children }: { children: any }) {
  const { isLogging } = useSelector((state: RootState) => state.auth);

  if (isLogging) {
    return children;
  }

  return <Navigate to="/login" />;
}
