'use server';

import { z } from 'zod';
import { RegistrationFormSchema, IcebreakerFormSchema, type RegistrationFormValues, type IcebreakerFormValues } from '@/lib/definitions';
import { generateIcebreakerQuestion, type IcebreakerOutput } from '@/ai/flows/icebreaker-suggestion';

interface ActionResponse {
  success: boolean;
  message?: string;
  data?: any;
}

export async function handleRegistration(
  values: RegistrationFormValues
): Promise<ActionResponse> {
  try {
    const validatedFields = RegistrationFormSchema.safeParse(values);

    if (!validatedFields.success) {
      return { success: false, message: 'অবৈধ ফর্ম ডেটা।' };
    }

    // Simulate saving data
    console.log('Registration data:', validatedFields.data);

    // In a real app, you would save this to a database.
    // For now, we just return a success message.
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

    return { success: true, message: 'নিবন্ধন করার জন্য ধন্যবাদ! আপনার সাথে দেখা হওয়ার অপেক্ষায় রইলাম।' };
  } catch (error) {
    console.error('Registration error:', error);
    return { success: false, message: 'নিবন্ধন ব্যর্থ হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।' };
  }
}


export async function getIcebreakerSuggestion(
  values: IcebreakerFormValues
): Promise<ActionResponse & { icebreaker?: IcebreakerOutput }> {
  try {
    const validatedFields = IcebreakerFormSchema.safeParse(values);
    if (!validatedFields.success) {
      return { success: false, message: 'পরিচিতি পর্বের জন্য অবৈধ ইনপুট।' };
    }

    const icebreakerOutput = await generateIcebreakerQuestion(validatedFields.data);
    
    if (icebreakerOutput && icebreakerOutput.icebreakerQuestion) {
      return { success: true, icebreaker: icebreakerOutput };
    } else {
      return { success: false, message: 'একটি প্রশ্ন তৈরি করা যায়নি।' };
    }
  } catch (error) {
    console.error('Icebreaker generation error:', error);
    return { success: false, message: 'প্রশ্ন তৈরি করতে ব্যর্থ। অনুগ্রহ করে আবার চেষ্টা করুন।' };
  }
}
