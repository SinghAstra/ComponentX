"use client";

import { useParams } from "next/navigation";

const DocsPage = () => {
  const params = useParams();
  console.log("params is ", params);
  return <main className="flex-1 md:ml-64 p-4">This is main content</main>;
};

export default DocsPage;
