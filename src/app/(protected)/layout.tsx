"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { setAuthToken } from "../../utils/api";
import { Header } from "@/components/Header";

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/login");
    } else {
      setAuthToken(token);
      setChecked(true);
    }
  }, [router]);

  const handleLogout = () => {
    // Clear token and redirect to login
    localStorage.removeItem("token");
    router.push("/login");
  };

  if (!checked) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header onLogout={handleLogout} />
      <main className="flex-1">{children}</main>
    </div>
  );
}
