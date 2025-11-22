
'use server';

import { z } from 'zod';
import { icebreakerFormSchemaEn, type IcebreakerFormValues } from '@/lib/definitions';
import { generateIcebreakerQuestion, type IcebreakerOutput } from '@/ai/flows/icebreaker-suggestion';

interface ActionResponse {
  success: boolean;
  message?: string;
  data?: any;
}

export async function getIcebreakerSuggestion(
  values: IcebreakerFormValues
): Promise<ActionResponse & { icebreaker?: IcebreakerOutput }> {
  try {
    const validatedFields = icebreakerFormSchemaEn.safeParse(values);
    if (!validatedFields.success) {
      return { success: false, message: 'Invalid input for icebreaker.' };
    }

    const icebreakerOutput = await generateIcebreakerQuestion(validatedFields.data);
    
    if (icebreakerOutput && icebreakerOutput.icebreakerQuestion) {
      return { success: true, icebreaker: icebreakerOutput };
    } else {
      return { success: false, message: 'Could not generate a question.' };
    }
  } catch (error) {
    console.error('Icebreaker generation error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { success: false, message: `Failed to generate question: ${errorMessage}` };
  }
}
