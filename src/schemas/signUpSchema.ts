import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(4, "username must be at least 4 characters")
  .max(12, "username must be at most 12 characters")
  .regex(
    /[a-zA-Z][a-zA-Z0-9-_]{3,32}/gi,
    "username must start with a letter and be between 3 and 32 characters long, and not contain special characters"
  );

export const signUpSchemaValidation = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
