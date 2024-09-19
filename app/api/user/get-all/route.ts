import { prismaClient } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await prismaClient.user.findMany();
    return NextResponse.json({ users });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error while fetching all users", error },
      { status: 500 }
    );
  }
}
