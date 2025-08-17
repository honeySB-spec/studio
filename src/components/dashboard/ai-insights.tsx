"use client";

import { useFormState, useFormStatus } from "react-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { BrainCircuit, Loader2, Sparkles, Lightbulb } from "lucide-react";
import { getHealthInsightsAction } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import React from "react";

const initialState = {
  data: null,
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <BrainCircuit className="mr-2 h-4 w-4" />
          Generate Insights
        </>
      )}
    </Button>
  );
}

const AiInsights = () => {
    const [state, formAction] = useFormState(getHealthInsightsAction, initialState);
    const { toast } = useToast();
    const formRef = React.useRef<HTMLFormElement>(null);

    React.useEffect(() => {
        if (state.error) {
            toast({
                variant: "destructive",
                title: "AI Error",
                description: state.error,
            });
        }
        if (state.data) {
            formRef.current?.reset();
        }
    }, [state, toast]);

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="font-headline flex items-center gap-2">
            <Sparkles className="text-primary" />
            AI-Powered Insights
        </CardTitle>
        <CardDescription>
          Synthesize your data to get personalized health optimizations.
        </CardDescription>
      </CardHeader>
      <form ref={formRef} action={formAction}>
        <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
                <Label htmlFor="wearableData">Wearable Data</Label>
                <Textarea
                id="wearableData"
                name="wearableData"
                placeholder="e.g., Garmin, Oura, Whoop data summary..."
                defaultValue="Avg Sleep: 7h 15m, HRV: 65ms, RHR: 52bpm."
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="labResults">Lab Results</Label>
                <Textarea
                id="labResults"
                name="labResults"
                placeholder="e.g., Blood markers, genetic results..."
                defaultValue="Cholesterol: 175 mg/dL, Vitamin D: 25 ng/mL, APOE4: negative."
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="healthGoals">Health Goals</Label>
                <Textarea
                id="healthGoals"
                name="healthGoals"
                placeholder="e.g., Improve cognitive function, run a marathon..."
                defaultValue="Improve deep sleep, increase VO2max by 10% in 6 months."
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="memberPersona">Member Persona</Label>
                <Textarea
                id="memberPersona"
                name="memberPersona"
                placeholder="e.g., Highly motivated, analytical, busy professional..."
                defaultValue="Data-driven executive, motivated by performance metrics, limited time for workouts."
                />
            </div>
            </div>
        </CardContent>
        <CardFooter className="flex justify-end">
            <SubmitButton />
        </CardFooter>
      </form>
      {state.data && (
        <CardContent className="mt-6 border-t pt-6 space-y-6">
            <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2 font-headline">
                    <Lightbulb className="text-yellow-500" />
                    Personalized Insights
                </h3>
                <div className="p-4 bg-muted/50 rounded-lg text-sm">
                    {state.data.insights}
                </div>
            </div>
            <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2 font-headline">
                    <Sparkles className="text-accent" />
                    Actionable Recommendations
                </h3>
                <div className="p-4 bg-muted/50 rounded-lg text-sm">
                    {state.data.recommendations}
                </div>
            </div>
        </CardContent>
      )}
    </Card>
  );
};

export default AiInsights;
