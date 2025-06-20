
import { z } from 'zod';

export const RegistrationFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format." }),
  tShirtSize: z.enum(["XS", "S", "M", "L", "XL", "XXL"], { required_error: "Please select a t-shirt size." }),
});

export type RegistrationFormValues = z.infer<typeof RegistrationFormSchema>;

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const IcebreakerFormSchema = z.object({
  name: z.string().min(1, { message: "নাম আবশ্যক।" }),
  phoneNumber: z.string().min(1, { message: "ফোন নম্বর আবশ্যক।" }),
  tShirtSize: z.enum(["XS", "S", "M", "L", "XL", "XXL"], { required_error: "অনুগ্রহ করে একটি টি-শার্ট সাইজ নির্বাচন করুন।" }),
});

export type IcebreakerFormValues = z.infer<typeof IcebreakerFormSchema>;
