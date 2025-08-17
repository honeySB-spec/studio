"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, Star, Trophy, Users } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const streaks = [
  {
    icon: <Flame className="h-6 w-6 text-orange-500" />,
    title: "Consistent Workout Streak",
    value: 12,
    unit: "days",
    goal: 14,
    description: "You've completed a workout 12 days in a row.",
  },
  {
    icon: <Star className="h-6 w-6 text-yellow-500" />,
    title: "Good Sleep Streak",
    value: 5,
    unit: "nights",
    goal: 7,
    description: "5 nights of >85% sleep quality.",
  },
];

const HealthStreaks = () => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="font-headline flex items-center gap-2">
            <Trophy className="text-primary" />
            Gamification & Streaks
        </CardTitle>
        <CardDescription>
          Track your progress and build healthy habits.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {streaks.map((streak, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center gap-3">
                {streak.icon}
                <div>
                    <p className="font-semibold">{streak.title}</p>
                    <p className="text-sm text-muted-foreground">{streak.description}</p>
                </div>
            </div>
            <Progress value={(streak.value / streak.goal) * 100} className="h-2" />
            <p className="text-xs text-right text-muted-foreground">{streak.value} / {streak.goal} {streak.unit}</p>
          </div>
        ))}
         <div className="space-y-2 pt-4 border-t">
            <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-green-500" />
                <div>
                    <p className="font-semibold">Team Health Score</p>
                    <p className="text-sm text-muted-foreground">Overall progress for the Mehta family.</p>
                </div>
            </div>
            <Progress value={82} className="h-2" />
            <p className="text-xs text-right text-muted-foreground">82% of weekly goals met</p>
          </div>
      </CardContent>
    </Card>
  );
};

export default HealthStreaks;
