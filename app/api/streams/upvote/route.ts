import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // check that data must have streamId
    const data = await req.json();
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error while up-voting stream", error },
      { status: 500 }
    );
  }
}
