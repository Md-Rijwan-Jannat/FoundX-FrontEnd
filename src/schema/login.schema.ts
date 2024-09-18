import { z } from "zod";

// Define the validation schema
const loginValidationSchema = z.object({
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Please enter a valid email" }),
  password: z
    .string({ message: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(20, { message: "Password must be no longer than 20 characters" }),
});

export default loginValidationSchema;
