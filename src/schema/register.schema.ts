import { z } from "zod";
// Regex for different country phone number formats
const phoneRegex = z
  .string()
  .regex(/^(\+?\d{1,3}[-.\s]?)?(\(?\d{1,4}\)?[-.\s]?)?[\d\s.-]{6,15}$/, {
    message: "Please enter a valid phone number",
  });

const registerValidationSchema = z.object({
  name: z
    .string({ message: "Name is required" })
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(50, { message: "Name must be no longer than 50 characters" }),

  email: z
    .string({ message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),

  password: z
    .string({ message: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(20, { message: "Password must be no longer than 20 characters" }),

  mobileNumber: phoneRegex.refine(
    (val) => val.startsWith("+") || /^[0-9]+$/.test(val),
    {
      message:
        "Phone number must include only digits and an optional country code",
    },
  ),
});

export default registerValidationSchema;
