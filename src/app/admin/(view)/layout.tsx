import ThemeChanger from "@/components/core/theme-changer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { ReactNode } from "react";

export default function Layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <main className="p-4 lg:p-6 h-dvh overflow-hidden flex-col w-dvw flex flex-1 gap-4 lg:gap-6">
      <nav className="h-16 w-full border rounded-lg flex justify-between px-4 items-center gap-6">
        <div className="space-x-4">
          <Button variant={"outline"} asChild>
            <Link href={"/admin/vault"}>Vault</Link>
          </Button>
          <Button variant={"outline"} asChild>
            <Link href={"/admin/box"}>Box</Link>
          </Button>
        </div>
        <Button variant={"destructive"}>Hide</Button>
      </nav>
      {children}
      <ThemeChanger />
    </main>
  );
}
