import { z } from "zod";

export const verifySchemaValidation = z.object({
  code: z.string().min(6, "verification code must be at least 6 digits"),
});
