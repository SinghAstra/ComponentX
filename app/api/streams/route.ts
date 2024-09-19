import { NextRequest, NextResponse } from "next/server";

export function POST(req: NextRequest) {
  try {
    const data = req.json();
    // expect 2 things from data 1.creatorId and 2.url
    // check if url has youtube or spotify
    // check if the data is valid
    // Add rate limiting so that a single user cannot flood the stream
    // how to flood the stream
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error while creating streams", error },
      { status: 500 }
    );
  }
}
