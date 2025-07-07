import z from "zod";

export const registerSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email" }),
  password: z
    .string()
    .trim()
    .min(8, { message: "Password needs to be at least 8 characters" }),
});

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email" }),
  password: z
    .string()
    .trim()
    .min(8, { message: "Password needs to be at least 8 characters" }),
});
