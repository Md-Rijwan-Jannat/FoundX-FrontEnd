import { z } from "zod";

export const postSchemaValidation = z.object({
  title: z
    .string({ required_error: "Title is required" })
    .min(1, "Please provide a title for the post."),

  dateFound: z
    .string({ required_error: "Date Found is required" })
    .nonempty("Please specify when the item was found."),

  location: z
    .string({ required_error: "Location is required" })
    .min(1, "Please provide the location where the item was found."),

  city: z
    .string({ required_error: "City is required" })
    .min(1, "Please select the city where the item was found."),

  category: z
    .string({ required_error: "Category is required" })
    .min(1, "Please select a valid category for the item."),

  description: z
    .string({ required_error: "Description is required" })
    .min(
      10,
      "Description must be at least 10 characters long to provide sufficient details."
    ),

  questions: z
    .array(
      z.object({
        value: z
          .string({ required_error: "This field is required" })
          .min(1, "Each question must contain some text."),
      })
    )
    .optional()
    .refine((questions) => questions === undefined || questions.length > 0, {
      message: "At least one question is required if questions are provided.",
    }),
});
