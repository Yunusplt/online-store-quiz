import { useMutation } from "@tanstack/react-query";
import { api, setAuthToken } from "../utils/api";

interface LoginCreds {
  username: string;
  password: string;
}
interface AuthResponse {
  accessToken: string;
}

export function useLogin() {
  return useMutation<AuthResponse, Error, LoginCreds>({
    mutationFn: (creds) =>
      api.post("/auth/login", creds).then((res) => res.data),
    onSuccess(data) {
      // 1) Persist the token
      localStorage.setItem("token", data.accessToken);
      // 2) Tell axios to send it on future requests
      setAuthToken(data.accessToken);
    },
  });
}
