import { useContext } from "react";
import { AuthContext } from "../store/authStore";

export default function useAuth() {
  return useContext(AuthContext);
}