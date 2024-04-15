import { z } from "zod";

export const messageSchemaValidation = z.object({
  content: z
    .string()
    .min(6, "content must be at least 6 characters")
    .max(300, "content must be at least 300 characters"),
});
