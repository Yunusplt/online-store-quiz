"use client";
import { useState } from "react";
import { useLogin } from "../../hooks/useAuth";
import { useRouter } from "next/navigation";
import Tooltip from "@mui/material/Tooltip";
import { Info } from "lucide-react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginM = useLogin();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await loginM.mutateAsync({ username, password });
      router.push("/");
    } catch {
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="p-8 bg-white rounded shadow-md w-full max-w-sm"
      >
        <h1 className="text-2xl mb-6 flex items-center">
          Login
          <Tooltip title="username: emilys, password: emilyspass" arrow>
            <Info className="ml-2 cursor-pointer text-gray-400 hover:text-gray-600" />
          </Tooltip>
        </h1>
        <div className="mb-4">
          <input
            className="w-full p-2 border rounded"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            className="w-full p-2 border rounded"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          disabled={loginM.isPending}
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {loginM.isPending ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
