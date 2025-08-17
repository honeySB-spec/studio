"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, TrendingDown, ShieldCheck, Moon } from "lucide-react";
import { Button } from "../ui/button";

const alerts = [
  {
    icon: <AlertTriangle className="h-5 w-5 text-yellow-500" />,
    title: "Rising HRV Stress Pattern",
    description: "Your 7-day average HRV has dropped by 15% while your reported stress has climbed. This pattern often precedes burnout or illness.",
    suggestion: "Prioritize a 20-minute walk or meditation today. Consider blocking 30 minutes of 'no meeting' time.",
  },
  {
    icon: <TrendingDown className="h-5 w-5 text-red-500" />,
    title: "Cholesterol Trend Alert",
    description: "Based on your last two panels, your ApoB is projected to be ~98 mg/dL by your next diagnostic if current nutritional trends continue.",
    suggestion: "Let's double down on soluble fiber. Carla suggests adding a daily psyllium husk supplement.",
  },
  {
    icon: <Moon className="h-5 w-5 text-blue-500" />,
    title: "Sleep Consistency Flag",
    description: "Your bedtime has varied by more than 90 minutes on 3 of the last 5 nights. This can disrupt your circadian rhythm, impacting deep sleep.",
    suggestion: "Aim for a consistent bedtime (within a 30-min window) for the next 5 nights to reset your rhythm.",
  },
];

const PredictiveAlerts = () => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="font-headline flex items-center gap-2">
            <ShieldCheck className="text-primary" />
            Predictive Health Alerts
        </CardTitle>
        <CardDescription>
          AI-powered forecasts to address risks before they arise.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert, index) => (
          <div key={index} className="flex items-start gap-4 p-3 bg-muted/50 rounded-lg">
            <div>{alert.icon}</div>
            <div className="flex-1">
              <p className="font-semibold">{alert.title}</p>
              <p className="text-sm text-muted-foreground">{alert.description}</p>
              <p className="text-sm font-medium text-primary mt-2">{alert.suggestion}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default PredictiveAlerts;
