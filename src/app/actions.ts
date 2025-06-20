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
      return { success: false, message: 'Invalid form data.' };
    }

    // Simulate saving data
    console.log('Registration data:', validatedFields.data);

    // In a real app, you would save this to a database.
    // For now, we just return a success message.
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

    return { success: true, message: 'Thank you for registering! We look forward to seeing you.' };
  } catch (error) {
    console.error('Registration error:', error);
    return { success: false, message: 'Registration failed. Please try again.' };
  }
}


export async function getIcebreakerSuggestion(
  values: IcebreakerFormValues
): Promise<ActionResponse & { icebreaker?: IcebreakerOutput }> {
  try {
    const validatedFields = IcebreakerFormSchema.safeParse(values);
    if (!validatedFields.success) {
      return { success: false, message: 'Invalid input for icebreaker.' };
    }

    const icebreakerOutput = await generateIcebreakerQuestion(validatedFields.data);
    
    if (icebreakerOutput && icebreakerOutput.icebreakerQuestion) {
      return { success: true, icebreaker: icebreakerOutput };
    } else {
      return { success: false, message: 'Could not generate an icebreaker question.' };
    }
  } catch (error) {
    console.error('Icebreaker generation error:', error);
    return { success: false, message: 'Failed to generate icebreaker. Please try again.' };
  }
}
