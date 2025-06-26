"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { setAuthToken } from "../../utils/api";
import Navbar from "@/components/Navbar";

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

  if (!checked) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Navbar>{children}</Navbar>
      </main>
    </div>
  );
}
