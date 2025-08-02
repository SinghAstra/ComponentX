import fs from "fs";
import path from "path";
const contentDirectory = path.join(process.cwd(), "content");

export async function getComponentDoc(slug: string[] | undefined) {
  try {
    let parsedFilePath;
    let filePath;
    if (!slug) {
      filePath = path.join(contentDirectory, `introduction/index.mdx`);
      // console.log("filePath is ", filePath);
    } else {
      parsedFilePath = slug.join("/");
      // console.log("parsedFilePath is ", parsedFilePath);
      filePath = path.join(contentDirectory, `${parsedFilePath}/index.mdx`);
      // console.log("filePath is ", filePath);
    }
    const fileContent = fs.readFileSync(filePath, "utf8");
    console.log("fileContent is ", fileContent);
    // const { data, content: rawMdxContent } = matter(fileContent);

    // Compile MDX content with plugins

    // console.log("rawMdXContent is ", rawMdxContent);

    return {
      title: "title",
      description: "Description",
      // title: data.title || slug,
      // description: data.description || "",
      content: fileContent,
    };
  } catch (error) {
    if (error instanceof Error) {
      console.log("error.stack is ", error.stack);
      console.log("error.message is ", error.message);
    }
    return null;
  }
}
