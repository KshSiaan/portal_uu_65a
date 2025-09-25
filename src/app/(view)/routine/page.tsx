"use client";
import React, { useEffect } from "react";
import { toast } from "sonner";
export default function Page() {
  useEffect(() => {
    async function seeData() {
      const call = await fetch("/api/routine");
      const res = await call.json();

      if (!call.ok) {
        toast.error(res.message ?? "Failed to get Routine data");
      }
      console.log(res);
    }
    seeData();
  }, []);
  return <div>Page</div>;
}
