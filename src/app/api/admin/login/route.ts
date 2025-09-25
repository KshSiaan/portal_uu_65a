import { decodeJwt, SignJWT } from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  // request: NextRequest
  //   const req = await request.json();
  //   console.log(req);
  return NextResponse.json({ message: "Welcome Raven!" });
}
export async function POST(request: NextRequest) {
  const req = await request.json();
  if (!req.username || !req.password) {
    return NextResponse.json(
      { message: "Not enough verification", req_data: { req } },
      { status: 401, statusText: "Invalid Login Attempt" }
    );
  }
  const correctName = "raven@raven.com";
  const correctPass = "manhunter";

  if (req.username !== correctName || req.password !== correctPass) {
    return NextResponse.json(
      { message: "You're not Him. are you?" },
      { status: 401, statusText: "Invalid Login Attempt" }
    );
  }

  const secret = new TextEncoder().encode("Raven");
  const alg = "HS256";

  const jwt = await new SignJWT({
    warning: "Smart people dies faster!",
    joker: "alive",
  })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setIssuer("Raven")
    .setAudience("Raven")
    .sign(secret);

  return NextResponse.json({ token: jwt, message: "Welcome to hell, Raven!" });
}
