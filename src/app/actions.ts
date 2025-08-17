"use server";

import { generateHealthInsights, type GenerateHealthInsightsInput } from "@/ai/flows/generate-health-insights";

export async function getHealthInsightsAction(
    prevState: {
      data?: any;
      error?: string | null;
    },
    formData: FormData
  ) {
    const input: GenerateHealthInsightsInput = {
        wearableData: formData.get("wearableData") as string,
        labResults: formData.get("labResults") as string,
        healthGoals: formData.get("healthGoals") as string,
        memberPersona: formData.get("memberPersona") as string,
      };

  try {
    const result = await generateHealthInsights(input);
    return { data: result, error: null };
  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    return { data: null, error: `Failed to generate insights: ${errorMessage}` };
  }
}
