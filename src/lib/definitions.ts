
import { z } from 'zod';

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
