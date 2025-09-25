import React, { Suspense } from "react";
import Boxes from "./boxes";
import { Skeleton } from "@/components/ui/skeleton";

export default async function Page() {
  return (
    <div>
      <Suspense fallback={<Skeleton className="w-full aspect-[8/2]" />}>
        <Boxes />
      </Suspense>
    </div>
  );
}
