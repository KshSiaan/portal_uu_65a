import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { MailIcon, PhoneIcon } from "lucide-react";
import React from "react";

export default function Page() {
  return (
    <Card className="h-full w-full p-6 lg:px-[20%] flex flex-col justify-around">
      {Array(3)
        .fill("")
        .map((_, i) => (
          <div className="flex justify-start items-center gap-6" key={i}>
            <Card
              className={cn(
                "aspect-[1/1] size-[64px] lg:size-[140px] rounded-full border-2 border-foreground border-dashed bg-background",
                i % 2 === 0 ? "order-1" : "order-2"
              )}
            ></Card>
            <div className={cn("flex-1", i % 2 === 0 ? "order-2" : "order-1")}>
              <div
                className={cn(
                  "w-full",
                  i % 2 !== 0 && "flex flex-col justify-center items-end"
                )}
              >
                <h3 className="text-xl lg:text-4xl">Name</h3>
                <p className="flex items-center text-xs lg:text-lg">
                  <MailIcon className="size-3 lg:size-4 mr-2" />{" "}
                  <a>email.123456@email.com</a>
                </p>
                <p className="flex items-center text-xs lg:text-lg">
                  <PhoneIcon className="size-3 lg:size-4 mr-2" />{" "}
                  <a>01235678910</a>
                </p>
              </div>
            </div>
          </div>
        ))}
    </Card>
  );
}
