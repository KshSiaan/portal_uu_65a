import { ConstructionIcon } from "lucide-react";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <ConstructionIcon />
      <p className="text-center text-muted-foreground">Under Development</p>
    </div>
  );
}
