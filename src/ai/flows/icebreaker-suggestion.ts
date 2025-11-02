// icebreaker-suggestion.ts
'use server';

/**
 * @fileOverview Generates a personalized icebreaker question based on attendee registration details.
 *
 * - generateIcebreakerQuestion - A function that generates an icebreaker question.
 * - IcebreakerInput - The input type for the generateIcebreakerQuestion function.
 * - IcebreakerOutput - The return type for the generateIcebreakerQuestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const IcebreakerInputSchema = z.object({
  name: z.string().describe('The attendee\u2019s name.'),
  phoneNumber: z.string().describe('The attendee\u2019s phone number.'),
  fishDishes: z.boolean().describe('Whether the attendee prefers fish dishes.'),
  alcoholicDrinks: z.boolean().describe('Whether the attendee prefers alcoholic drinks.'),
});
export type IcebreakerInput = z.infer<typeof IcebreakerInputSchema>;

const IcebreakerOutputSchema = z.object({
  icebreakerQuestion: z
    .string()
    .describe('A personalized icebreaker question for the attendee.'),
});
export type IcebreakerOutput = z.infer<typeof IcebreakerOutputSchema>;

export async function generateIcebreakerQuestion(
  input: IcebreakerInput
): Promise<IcebreakerOutput> {
  return icebreakerFlow(input);
}

const icebreakerPrompt = ai.definePrompt({
  name: 'icebreakerPrompt',
  input: {schema: IcebreakerInputSchema},
  output: {schema: IcebreakerOutputSchema},
  prompt: `You are an AI assistant designed to generate personalized icebreaker questions for a school reunion.

  Given the following attendee information, generate a single, engaging icebreaker question that encourages conversation and reconnection.

  Attendee Name: {{{name}}}
  Phone Number: {{{phoneNumber}}}
  Prefers Fish: {{{fishDishes}}}
  Prefers Alcohol: {{{alcoholicDrinks}}}

  Icebreaker Question:`,
});

const icebreakerFlow = ai.defineFlow(
  {
    name: 'icebreakerFlow',
    inputSchema: IcebreakerInputSchema,
    outputSchema: IcebreakerOutputSchema,
  },
  async input => {
    const {output} = await icebreakerPrompt(input);
    return output!;
  }
);
