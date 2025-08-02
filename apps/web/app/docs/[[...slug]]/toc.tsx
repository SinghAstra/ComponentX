import { getDocumentTOC } from "@/lib/mdx";
import TocObserver from "./toc-observer";
interface TOCProps {
  path: string;
}

export default async function TOC({ path }: TOCProps) {
  const toc = await getDocumentTOC(path);

  return (
    <div className="hidden md:block fixed border-l right-0 bottom-0 top-16 w-80">
      <div className="flex flex-col gap-3 w-full pl-2">
        <h3 className="font-medium text-sm">On this page</h3>
        <div className="pb-2 pt-0.5 overflow-y-auto">
          <TocObserver data={toc} />
        </div>
      </div>
    </div>
  );
}
