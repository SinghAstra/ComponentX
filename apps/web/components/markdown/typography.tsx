import { PropsWithChildren } from "react";

export function Typography({ children }: PropsWithChildren) {
  return (
    <div className="prose sm:prose-base prose-sm prose-invert prose-code:font-normal prose-code:font-code  prose-pre:bg-muted/10 prose-headings:scroll-m-20 w-[85vw] sm:w-full sm:mx-auto  prose-pre:m-0 prose-code:text-sm prose-code:leading-6 prose-code:text-white  prose-code:p-[0.085rem]  prose-code:rounded prose-code:border pt-2 !min-w-full prose-img:rounded-md prose-img:border prose-code:before:content-none prose-code:after:content-none prose-code:px-1.5 prose-code:overflow-x-auto !max-w-[500px] prose-img:my-3 prose-h2:my-4 prose-h2:mt-8 prose-code:break-all md:prose-code:break-normal  prose-td:px-4">
      {children}
    </div>
  );
}
