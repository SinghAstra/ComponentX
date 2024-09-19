import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
// import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  try {
    const session = await getServerSession();
    return NextResponse.json({ session });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error while fetching user info", error },
      { status: 500 }
    );
  }
}
