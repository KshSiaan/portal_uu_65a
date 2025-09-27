"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getChatApi } from "@/lib/api/base";
import { useQuery } from "@tanstack/react-query";
import { CircleChevronRightIcon } from "lucide-react";
import Image from "next/image";

export default function Page() {
  const { data, isPending } = useQuery({
    queryKey: ["chat"],
    queryFn: getChatApi,
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
    <main className="w-full mx-auto lg:px-6 py-8 flex flex-col h-full ">
      <header className="mb-8 flex flex-col lg:flex-row justify-between items-center">
        <h1 className="text-4xl font-bold text-balance leading-tight">
          {data.page.properties.title.title[0].plain_text}
        </h1>
        <p className="text-sm text-muted-foreground">
          Last updated: {new Date(data.page.last_edited_time).toLocaleString()}
        </p>
      </header>
      <div className="flex-1 overflow-y-auto lg:px-12">
        <div className="space-y-8">
          {data.content.map((item: any, index: number) => {
            if (item.type === "heading_2") {
              return (
                <section key={`${item.data}-${index}`} className="">
                  <h2 className="text-2xl font-semibold border-b border-border pb-2">
                    {item.data}
                  </h2>
                </section>
              );
            } else if (item.type === "bulleted_list_item") {
              return (
                <div key={index} className="space-y-4 overflow-x-auto">
                  <div className="bg-muted/50 rounded-lg p-6">
                    <h3 className="text-lg font-medium mb-3 break-words">
                      {item.text}
                    </h3>
                    {item.data && item.data.length > 0 && (
                      <ul className="space-y-2 ml-4">
                        {item.data.map((subItem: any, subIndex: number) => (
                          <li
                            key={`${subItem.data}-${subIndex}`}
                            className="flex items-center w-full justify-start"
                          >
                            <span className="text-muted-foreground mr-3 mb-1">
                              <CircleChevronRightIcon className="size-5" />
                            </span>
                            <span className="text-muted-foreground ">
                              {subItem.data}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="h-24"></div>
      </div>
    </main>
  );
}
