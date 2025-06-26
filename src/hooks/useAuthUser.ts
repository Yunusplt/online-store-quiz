import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";

export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
}

export function useAuthUser() {
  return useQuery<User, Error>({
    queryKey: ["auth", "user"],
    queryFn: () => api.get("/auth/me").then((res) => res.data),
    retry: false,
  });
}
