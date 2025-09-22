import Navbar from "@/components/core/navbar";
import React, { ReactNode } from "react";

export default function Layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <main className="p-6 h-dvh overflow-hidden flex-col w-dvw flex flex-1 gap-6">
      <Navbar />
      {children}
    </main>
  );
}
