import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { MailIcon, PhoneIcon } from "lucide-react";
import React from "react";

const people = [
  {
    name: "Md Ashraful Kabir",
    email: "ashraful.kabir@uttara.ac.bd",
    phone: "N/A",
    avatar: "/ava/Ashraful.svg",
  },
  {
    name: "Md Monowar Hossain",
    email: "monowar@uttara.ac.bd",
    phone: "N/A",
    avatar: "/ava/Monwar.svg",
  },
  {
    name: "Md. Mijanur Rahman Nijam",
    email: "mijanur.nijam@uttarauniversity.edu.bd",
    phone: "N/A",
    avatar: "/ava/Nijam.svg",
  },
];

export default function Page() {
  return (
    <Card className="h-full w-full p-6 lg:px-[20%] flex flex-col justify-around">
      {people.map((person, i) => (
        <div className="flex justify-start items-center gap-6" key={i}>
          <Card
            className={cn(
              "aspect-[1/1] size-[64px] lg:size-[140px] rounded-full border-2 border-foreground border-dashed bg-background bg-contain bg-center",
              i % 2 === 0 ? "order-1" : "order-2"
            )}
            style={{ backgroundImage: `url('${person.avatar}')` }}
          />
          <div className={cn("flex-1", i % 2 === 0 ? "order-2" : "order-1")}>
            <div
              className={cn(
                "w-full",
                i % 2 !== 0 && "flex flex-col justify-center items-end"
              )}
            >
              <h3 className="text-xl lg:text-4xl">{person.name}</h3>
              <p className="flex items-center text-xs lg:text-lg">
                <MailIcon className="size-3 lg:size-4 mr-2" />{" "}
                <a>{person.email}</a>
              </p>
              <p className="flex items-center text-xs lg:text-lg">
                <PhoneIcon className="size-3 lg:size-4 mr-2" />{" "}
                <a>{person.phone}</a>
              </p>
            </div>
          </div>
        </div>
      ))}
    </Card>
  );
}
