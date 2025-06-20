import { z } from 'zod';

export const RegistrationFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format." }),
  tShirtSize: z.enum(["XS", "S", "M", "L", "XL", "XXL"], { required_error: "Please select a T-shirt size." }),
});

export type RegistrationFormValues = z.infer<typeof RegistrationFormSchema>;

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const IcebreakerFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  phoneNumber: z.string().min(1, { message: "Phone number is required." }), // Simplified for icebreaker
  tShirtSize: z.enum(["XS", "S", "M", "L", "XL", "XXL"], { required_error: "Please select a T-shirt size." }),
});

export type IcebreakerFormValues = z.infer<typeof IcebreakerFormSchema>;
