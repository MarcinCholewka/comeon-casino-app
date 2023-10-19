import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

import { useAuth } from "@auth/AuthWrapper";

type Props = {
  children: ReactNode;
};

export const RequireAuth = ({ children }: Props) => {
  const auth = useAuth();

  if (!auth.player) {
    return <Navigate to="/login" />;
  }

  return children;
};
