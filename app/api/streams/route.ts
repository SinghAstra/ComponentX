import { prismaClient } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
const YOUTUBE_REGEX = new RegExp(
  "^((?:https?:)?//)?((?:www|m).)?((?:youtube(-nocookie)?.com|youtu.be))(/(?:[w-]+?v=|embed/|v/)?)([w-]+)(S+)?$"
);

export async function POST(req: NextRequest) {
  try {
    //   expect 2 things from data 1.creatorId and 2.url
    //   check if url has youtube or spotify
    //   check if the data is valid
    //   Add rate limiting so that a single user cannot flood the stream
    //   how to flood the stream
    //   try to bypass the regex pattern
    //   handling the case in which there is also &t
    // do i really need two routes one for upvote and other for down vote why not just make toggle route
    const data = await req.json();
    const isYoutubeUrl = YOUTUBE_REGEX.test(data.url);
    if (!isYoutubeUrl) {
      return NextResponse.json(
        { message: "Invalid URL, please enter a valid YouTube URL." },
        { status: 400 }
      );
    }
    const extractedId = data.url.split("?v=")[1];
    await prismaClient.stream.create({
      data: {
        userId: data.creatorId,
        type: "YouTube",
        url: data.url,
        extractedId,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error while creating streams", error },
      { status: 500 }
    );
  }
}
