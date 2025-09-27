import { Card } from "@/components/ui/card";
import React from "react";

export default function Home() {
  return (
    <Card className="flex-1 w-full h-full flex justify-center items-center flex-col">
      <p>Welcome to</p>
      <h1 className="text-2xl lg:text-6xl font-semibold text-center">
        Student Portal 65A eve (temporary)
      </h1>
      <p>Black & white edition</p>
    </Card>
  );
}
