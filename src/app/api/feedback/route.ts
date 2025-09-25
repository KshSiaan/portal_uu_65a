import { supabase } from "@/lib/config";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  // request: NextRequest
  //   const req = await request.json();
  //   console.log(req);
  return NextResponse.json({ message: "Feedback route!" });
}

export async function POST(request: NextRequest) {
  const req: {
    name: string;
    feedback: string;
    studentId?: string | undefined;
    whatsapp?: string | undefined;
  } = await request.json();
  // console.log(req);
  if (!req.name) {
    return NextResponse.json(
      {
        message: "Name wasn't provided",
      },
      { status: 406 }
    );
  }
  if (!req.feedback) {
    return NextResponse.json(
      {
        message: "Feedback was not provided",
      },
      { status: 406 }
    );
  }

  const { data, error } = await supabase.from("Feedback").insert([
    {
      name: req.name,
      student_id: req.studentId,
      whatsapp: req.whatsapp,
      feedback: req.feedback,
    },
  ]);
  if (error) {
    return NextResponse.json(error, { status: 422 });
  }
  console.log(data);

  return NextResponse.json(
    { message: `Feedback of ${req.name} has been saved` },
    { status: 201 }
  );
}
