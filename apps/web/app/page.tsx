"use server";
import { getComponentDoc } from "@/lib/get-mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";

const HomePage = async () => {
  const doc = await getComponentDoc(["introduction"]);
  if (!doc) {
    return <div>Error loading content.</div>;
  }

  return <MDXRemote source={doc.content} />;
};

export default HomePage;
