'use server';

/**
 * @fileOverview An AI agent that generates personalized health insights and recommendations based on user data.
 *
 * - generateHealthInsights - A function that generates health insights and recommendations.
 * - GenerateHealthInsightsInput - The input type for the generateHealthInsights function.
 * - GenerateHealthInsightsOutput - The return type for the generateHealthInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHealthInsightsInputSchema = z.object({
  wearableData: z
    .string()
    .describe('Wearable data from devices like Garmin, Oura, and Whoop.'),
  labResults: z.string().describe('Lab test results, including blood markers.'),
  healthGoals: z.string().describe('The health goals of the member.'),
  memberPersona: z
    .string()
    .describe(
      'Behavioral and psychosocial insights about the member (motivation, stage of change, values, personality)'
    ),
});
export type GenerateHealthInsightsInput = z.infer<
  typeof GenerateHealthInsightsInputSchema
>;

const GenerateHealthInsightsOutputSchema = z.object({
  insights: z.string().describe('Personalized health insights.'),
  recommendations: z.string().describe('Personalized health recommendations.'),
});
export type GenerateHealthInsightsOutput = z.infer<
  typeof GenerateHealthInsightsOutputSchema
>;

export async function generateHealthInsights(
  input: GenerateHealthInsightsInput
): Promise<GenerateHealthInsightsOutput> {
  return generateHealthInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateHealthInsightsPrompt',
  input: {schema: GenerateHealthInsightsInputSchema},
  output: {schema: GenerateHealthInsightsOutputSchema},
  prompt: `You are an AI health advisor. You will use the provided wearable data, lab results, member persona and health goals to provide personalized insights and recommendations to improve the member's health and well-being.

Wearable Data: {{{wearableData}}}
Lab Results: {{{labResults}}}
Health Goals: {{{healthGoals}}}
Member Persona: {{{memberPersona}}}

Insights and Recommendations:
`,
});

const generateHealthInsightsFlow = ai.defineFlow(
  {
    name: 'generateHealthInsightsFlow',
    inputSchema: GenerateHealthInsightsInputSchema,
    outputSchema: GenerateHealthInsightsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
