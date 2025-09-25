import { supabase } from "@/lib/config";
import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const token = authHeader?.split(" ")[1];
  if (!token) {
    return NextResponse.json(
      {
        message: "You're not him, Are you?",
      },
      { status: 401 }
    );
  }

  const secret = new TextEncoder().encode("Raven");
  try {
    await jwtVerify(token, secret, {
      issuer: "Raven",
      audience: "Raven",
    });
  } catch {
    return NextResponse.json(
      { message: "You're not him are you? so why??" },
      { status: 401 }
    );
  }
  const dataset = await supabase.from("Feedback").select("*");

  return NextResponse.json({ message: "Feedback route!", boxes: dataset.data });
}
