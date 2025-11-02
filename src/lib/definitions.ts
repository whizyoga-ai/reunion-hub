
import { z } from 'zod';

export const registrationFormSchemaEn = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format." }),
  tShirtSize: z.enum(["XS", "S", "M", "L", "XL", "XXL"], { required_error: "Please select a t-shirt size." }),
});

export const registrationFormSchemaBn = z.object({
  name: z.string().min(2, { message: "নাম কমপক্ষে ২টি অক্ষরের হতে হবে।" }),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "অবৈধ ফোন নম্বর ফরম্যাট।" }),
  tShirtSize: z.enum(["XS", "S", "M", "L", "XL", "XXL"], { required_error: "অনুগ্রহ করে একটি টি-শার্ট সাইজ নির্বাচন করুন।" }),
});

export type RegistrationFormValues = z.infer<typeof registrationFormSchemaEn>;


export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const icebreakerFormSchemaEn = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  phoneNumber: z.string().min(1, { message: "Phone number is required." }),
  fishDishes: z.boolean().default(false),
  alcoholicDrinks: z.boolean().default(false),
});

export const icebreakerFormSchemaBn = z.object({
  name: z.string().min(1, { message: "নাম আবশ্যক।" }),
  phoneNumber: z.string().min(1, { message: "ফোন নম্বর আবশ্যক।" }),
  fishDishes: z.boolean().default(false),
  alcoholicDrinks: z.boolean().default(false),
});


export type IcebreakerFormValues = z.infer<typeof icebreakerFormSchemaEn>;
