"use client";

import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
const formSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

export default function Page() {
  const [, setCookie] = useCookies(["dark_token"]);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form Data:", values);
    try {
      const call = await fetch("/api/admin/login", {
        method: "POST",
        body: JSON.stringify(values),
      });

      const res: { message: string; token?: string } = await call.json();
      if (!call.ok) {
        toast.error(res.message, {
          description: "Are you supposed to be here??",
        });
        return;
      }
      if (!res.token) {
        toast.error("Where did the token go??");
        return;
      }
      setCookie("dark_token", res.token);
      router.push("/admin/box");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="h-full w-full border flex justify-center items-center">
      <div className="w-full lg:w-1/2 flex flex-col h-full justify-center items-center space-y-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-4 px-6"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              variant="destructive"
              className="shadow-destructive shadow-sm w-full"
            >
              Blood on my eye
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
