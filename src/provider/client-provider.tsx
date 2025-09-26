"use client";
import React, { ReactNode } from "react";
import { CookiesProvider } from "react-cookie";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function ClientProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>{children}</CookiesProvider>
    </QueryClientProvider>
  );
}
