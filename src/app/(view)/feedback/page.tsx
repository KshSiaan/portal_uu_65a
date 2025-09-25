"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

// ✅ Zod schema
const feedbackSchema = z.object({
  name: z.string().min(1, "Name is required"),
  studentId: z.string().optional(),
  whatsapp: z.string().optional().or(z.literal("")),
  feedback: z.string().min(5, "Feedback must be at least 5 characters"),
});

type FeedbackFormValues = z.infer<typeof feedbackSchema>;

export default function Page() {
  const form = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      name: "",
      studentId: "",
      whatsapp: "",
      feedback: "",
    },
  });

  const onSubmit = async (data: FeedbackFormValues) => {
    console.log("Feedback submitted:", data);
    try {
      const call = await fetch("/api/feedback", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const res = await call.json();
      if (!call.ok) {
        toast.error(res.message);
        return;
      }
      toast.success(res.message ?? "Feedback has been submitted");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-full w-full border border-foreground dark:border-border rounded-lg p-4 space-y-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 flex flex-col h-full"
        >
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name :</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Student ID */}
          <FormField
            control={form.control}
            name="studentId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>StudentID/Identity (Optional):</FormLabel>
                <FormControl>
                  <Input placeholder="Optional" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Whatsapp */}
          <FormField
            control={form.control}
            name="whatsapp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Whatsapp Number (Optional):</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="+8801..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Feedback */}
          <div className="flex-1">
            <FormField
              control={form.control}
              name="feedback"
              render={({ field }) => (
                <FormItem className="flex-1 h-full flex flex-col">
                  <FormLabel className="h-min">Your Feedback :</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write your feedback..."
                      className="flex-1 resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Submit */}
          <div className="w-full">
            <Button type="submit" className="w-fit">
              Submit Feedback to Developer
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
