import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Link
        href={"https://www.linkedin.com/in/shahibul-hasan-777395302/"}
        className="hover:bg-foreground hover:text-background px-6 py-4 transition-colors text-6xl font-semibold"
      >
        Ksh Siaan
      </Link>
      <p>ID: 2253091031</p>
    </div>
  );
}
