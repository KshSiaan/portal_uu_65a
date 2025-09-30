import { MailIcon, PhoneIcon } from "lucide-react";
import React from "react";

export default function Page() {
  return (
    <div className="h-full w-full grid grid-rows-2 lg:grid-rows-3 gap-6">
      <div className="h-full w-full lg:row-span-2 flex justify-center items-center">
        <div className="bg-card w-[80%] lg:w-fit lg:h-full aspect-square rounded-full shadow border-2 border-dashed"></div>
      </div>
      <div className="text-center!">
        <h2 className="text-center text-2xl lg:text-5xl">
          Most. Jebun Nahar Juthy
        </h2>
        <p className="w-fit flex justify-center items-center mx-auto gap-2">
          <MailIcon className="size-4" />
          juthy@uttara.ac.bd
        </p>
        <p className="w-fit flex justify-center items-center mx-auto gap-2">
          <PhoneIcon className="size-4" />
          +880 1302-466867
        </p>

        <p className="lg:text-3xl">
          Lecturer, Department of Computer Science and Engineering
        </p>
      </div>
    </div>
  );
}
