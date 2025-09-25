"use client";
import React, { ReactNode } from "react";
import { CookiesProvider } from "react-cookie";

export default function ClientProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <CookiesProvider>{children}</CookiesProvider>;
}
