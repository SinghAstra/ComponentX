import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error while down-voting stream", error },
      { status: 500 }
    );
  }
}
