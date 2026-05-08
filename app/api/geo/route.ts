export const runtime = "edge";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({
    country: "Available on Vercel Production",
    city: "Available on Vercel Production",
    runtime: "edge",
  });
}