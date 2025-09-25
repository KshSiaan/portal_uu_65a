"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { useCookies } from "react-cookie";

export default function Boxes() {
  const [{ dark_token }] = useCookies(["dark_token"]);
  const [data, setData] = useState<
    | {
        name: string;
        student_id?: string;
        whatsapp?: string;
        feedback: string;
      }[]
    | undefined
  >();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any | undefined>();

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const call = await fetch("/api/admin/feedback", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${dark_token}`,
          },
        });
        const res = await call.json();

        if (!call.ok) {
          toast.error(res.message ?? "Something went wrong");
          setError(res.message);
        } else {
          setData(res.boxes);
        }
      } catch (err: any) {
        setError(err.message);
        toast.error("Failed to load feedback");
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  if (isLoading) {
    return <p className="text-center">Loading feedback...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!data || data.length === 0) {
    return <p className="text-center">No feedback found.</p>;
  }

  return (
    <div className="space-y-4">
      {data.map((item, idx) => (
        <Card key={idx}>
          <CardHeader className="border-b">
            <CardTitle>{item.name}</CardTitle>
            {item.student_id && (
              <CardDescription>ID: {item.student_id}</CardDescription>
            )}
            {item.whatsapp && (
              <CardDescription>Phone: {item.whatsapp}</CardDescription>
            )}
          </CardHeader>
          <CardContent>
            <CardDescription>{item.feedback}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
