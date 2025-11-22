// Server Actions removed for static export compatibility
// This file provides stub implementations

import { type IcebreakerFormValues } from '@/lib/definitions';
import { type IcebreakerOutput } from '@/ai/flows/icebreaker-suggestion';

interface ActionResponse {
  success: boolean;
  message?: string;
  data?: any;
}

export async function getIcebreakerSuggestion(
  values: IcebreakerFormValues
): Promise<ActionResponse & { icebreaker?: IcebreakerOutput }> {
  // Static export does not support Server Actions
  // This functionality is disabled for static deployment
  return {
    success: false,
    message: 'Server Actions are not available in static export mode. Please use client-side API routes instead.'
  };
}
