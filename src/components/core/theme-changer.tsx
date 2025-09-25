"use client";
import React from "react";
import { Button } from "../ui/button";
import { EclipseIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeChanger() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <Button
      size={"icon"}
      variant={"secondary"}
      className="fixed bottom-8 right-8"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    >
      <EclipseIcon />
    </Button>
  );
}
