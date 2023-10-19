import { createContext, useContext, useMemo, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import { useLocalStorage } from "@hooks/useLocalStorage";

type PlayerData = {
  name: string;
  avatar: string;
  event: string;
};

type AuthContextType = {
  player: PlayerData | null;
  login: (data: PlayerData) => void;
  logout: () => void;
};

type Props = {
  children: ReactNode;
};

const AuthContext = createContext({} as AuthContextType);

export const AuthWrapper = ({ children }: Props) => {
  const [player, setPlayer] = useLocalStorage("player", "");
  const navigate = useNavigate();

  const login = async (data: PlayerData) => {
    setPlayer(data);
    navigate("/", { replace: true });
  };

  const logout = () => {
    setPlayer(null);
    navigate("/login", { replace: true });
  };

  const value = useMemo(
    () => ({
      player,
      login,
      logout,
    }),
    [player]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
