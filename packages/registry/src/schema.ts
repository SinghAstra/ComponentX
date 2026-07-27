import { z } from "zod";

export const registryItemFileSchema = z.object({
  name: z.string(),
  content: z.string(),
});

export const registryItemSchema = z.object({
  name: z.string(),
  type: z.enum(["components:component-x", "components:ui", "components:lib"]),
  dependencies: z.array(z.string()).optional(),
  registryDependencies: z.array(z.string()).optional(),
  files: z.array(registryItemFileSchema),
});

export type RegistryItem = z.infer<typeof registryItemSchema>;
