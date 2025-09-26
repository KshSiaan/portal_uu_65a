"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getNoticeApi } from "@/lib/api/base";
import { useQuery } from "@tanstack/react-query";
import {
  ChevronRightCircleIcon,
  CircleChevronRightIcon,
  X,
} from "lucide-react";
// import { CircleChevronRightIcon } from "lucide-react";
import Image from "next/image";

export default function Page() {
  const { data, isPending } = useQuery({
    queryKey: ["notice"],
    queryFn: getNoticeApi,
  });

  if (isPending) {
    return (
      <div className="h-full flex items-center justify-center">
        <Image
          src={"/logo.png"}
          height={200}
          width={800}
          alt="logo"
          draggable={false}
          className="object-contain w-[140px] animate-pulse"
        />
      </div>
    );
  }

  return (
    <main className="w-full mx-auto px-6 py-8 flex flex-col h-full ">
      <header className="mb-8 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-balance leading-tight">
          {data.page.properties.title.title[0].plain_text}
        </h1>
        <p className="text-sm text-muted-foreground">
          Last updated: {new Date(data.page.last_edited_time).toLocaleString()}
        </p>
      </header>
      <div className="flex-1 overflow-y-auto">
        <div className="space-y-8">
          {data.content.map((item: any, index: number) => {
            return (
              <div key={index} className="">
                <div className="bg-muted/50 rounded-lg p-6 flex gap-2 justify-start items-start">
                  <div className="">
                    <ChevronRightCircleIcon />
                  </div>
                  <h3 className="text-lg font-medium text-foreground">
                    {item}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
        <div className="h-24"></div>
      </div>
    </main>
  );
}
