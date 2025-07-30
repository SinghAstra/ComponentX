declare module "rehype-pretty-code" {
  import { Options } from "@shikijs/compat";
  import { Plugin } from "unified";

  const rehypePrettyCode: Plugin<[Options?]>;
  export = rehypePrettyCode;
}
