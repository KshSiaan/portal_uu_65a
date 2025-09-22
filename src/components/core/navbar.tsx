import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
export default function Navbar() {
  const navs = [
    {
      title: "Routine",
      to: "routine",
      hasChild: false,
    },
    {
      title: "Notices",
      to: "notices",
      hasChild: false,
    },
    {
      title: "Semester Essentials",
      to: "essentials",
      hasChild: false,
    },
    {
      title: "Links & Resources",
      to: "resources",
      hasChild: false,
    },

    {
      title: "FAQ",
      to: "faq",
      hasChild: false,
    },
    {
      title: "Chat / Group Links",
      to: "chat",
      hasChild: false,
    },

    {
      title: "Others",
      hasChild: true,
      childs: [
        {
          title: "Feedback Box",
          to: "feedback",
          hasChild: false,
        },
        {
          title: "Quick Tools & Suggestions",
          to: "tools",
          hasChild: false,
        },
      ],
    },
    {
      title: "Contacts",
      hasChild: true,
      childs: [
        {
          title: "Teachers",
          to: "teachers",
        },
        {
          title: "Faculty Advisor",
          to: "faculty",
        },
        {
          title: "Class Representative",
          to: "cr",
        },
      ],
    },
  ];

  return (
    <nav className="flex w-full gap-6">
      <Card className="h-16 aspect-auto lg:aspect-[6/2]! w-full lg:w-min p-3! order-2">
        <Image
          src={"/logo.png"}
          height={200}
          width={800}
          alt="logo"
          draggable={false}
          className="object-contain w-full h-full!"
        />
      </Card>
      <Card className="order-2 hidden xl:flex h-16 flex-1 rounded-lg p-2! w-full flex-row justify-center items-center">
        <NavigationMenu className="">
          <NavigationMenuList className="">
            {navs.map((x) =>
              x.hasChild ? (
                <NavigationMenuItem key={x.title} className="relative!">
                  <NavigationMenuTrigger>{x.title}</NavigationMenuTrigger>
                  <NavigationMenuContent className="w-full! absolute h-[20dvh]">
                    <div className="w-full grid grid-cols-2 p-2 gap-4 h-full">
                      <Card className="w-full max-w-lg mx-auto p-4 grid gap-2 text-center">
                        <div className="flex items-center justify-center">
                          <Image
                            src="/logo.png"
                            alt="UU Logo"
                            width={300}
                            height={100}
                            draggable={false}
                            className="object-contain max-h-16"
                          />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Visit the{" "}
                          <Link
                            href="http://uttarauniversity.edu.bd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-primary underline-offset-4 hover:underline"
                          >
                            Official UU Website
                          </Link>
                        </p>
                      </Card>
                      <div className="w-full h-fit grid grid-cols-2 gap-4">
                        {x.hasChild &&
                          x.childs?.map((x) => (
                            <Button variant={"secondary"} key={x.to}>
                              {x.title}
                            </Button>
                          ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={x.title}>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href={`/${x.to}`}>{x.title}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </Card>

      <Card className="text-xs order-1 lg:order-3 lg:text-base h-16 aspect-[4/2] lg:aspect-[6/2] p-2! gap-0! text-center! flex justify-center items-center font-semibold">
        <h4>65A Eve</h4>
        <p className="text-amber-400">The Golden Batch</p>
      </Card>
      <Card className="order-3 aspect-[4/2]! flex items-center justify-center p-0!">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="w-full h-full!" variant={"ghost"}>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>UU Portal Menu</SheetTitle>
            </SheetHeader>
            <div className="flex-1 h-full w-full space-y-6 p-6 overflow-y-auto">
              {navs.map((x) =>
                x.hasChild ? (
                  x.childs?.map((y) => (
                    <Button
                      key={y.title}
                      className="w-full"
                      variant={"secondary"}
                    >
                      {y.title}
                    </Button>
                  ))
                ) : (
                  <Button
                    key={x.title}
                    className="w-full"
                    variant={"secondary"}
                  >
                    {x.title}
                  </Button>
                )
              )}
            </div>
          </SheetContent>
        </Sheet>
      </Card>
    </nav>
  );
}
