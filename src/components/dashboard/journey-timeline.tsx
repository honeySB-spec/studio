import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Timeline,
  TimelineItem,
  TimelinePoint,
  TimelineContent,
  TimelineTime,
  TimelineTitle,
  TimelineBody,
} from "@/components/ui/timeline";
import {
  ClipboardCheck,
  TestTube2,
  Stethoscope,
  FileText,
  Dumbbell,
  BarChart,
  TrendingUp,
} from "lucide-react";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

const journeyData = [
  {
    icon: <ClipboardCheck className="h-4 w-4" />,
    time: "March 2025",
    title: "Initial Health Inquiry & Onboarding",
    body: "Reached out to Elyx with concerns about elevated resting heart rate and low HRV. Underwent a multi-expert review and received a post-onboarding plan with diagnostics.",
    rationale: "Triggered by consistent red recovery scores on Whoop, Arjun's inquiry led to a structured plan to align wearable data with clinical biomarkers, moving from fragmented self-management to a systematic health journey.",
  },
  {
    icon: <TestTube2 className="h-4 w-4" />,
    time: "March 2025",
    title: "Clarification, Data Gathering & Initial Workout Plan",
    body: "After diagnostic blood draw, received interpreted lab panel (ApoB 102). Started lifestyle-first intervention with nutrition and performance experiments.",
    rationale: "To address anxiety over lab results, the team provided context and recommended a 12-week lifestyle intervention, shifting Arjun from a worried patient to an engaged co-experimenter.",
  },
  {
    icon: <TrendingUp className="h-4 w-4" />,
    time: "April 2025",
    title: "Early Wins & Refining the Plan",
    body: "Established early wins with improved HRV from structured sleep, nutrition, and training consistency, even during travel.",
    rationale: "To build motivation, this phase focused on consolidating routines. Seeing measurable improvements in HRV and consistency turned Arjun’s skepticism into confidence in the process.",
  },
  {
    icon: <Stethoscope className="h-4 w-4" />,
    time: "May 2025",
    title: "Travel Stress Test & Mid-Quarter Adjustments",
    body: "Maintained consistency during a demanding 3-week travel schedule, testing the durability of nutrition and exercise frameworks under extreme jet lag and work pressure.",
    rationale: "Framed as a resilience experiment, this phase helped Arjun learn to bend his new habits without breaking them. Partial success under pressure was a significant psychological victory.",
  },
  {
    icon: <BarChart className="h-4 w-4" />,
    time: "June 2025",
    title: "Q2 Diagnostics & Strategic Reset",
    body: "Q2 diagnostics showed significant progress: ApoB dropped from 102 to 86 mg/dL. The results validated the lifestyle-first approach, leading to a strategic reset for Q3.",
    rationale: "This critical checkpoint provided objective proof that the interventions were working. The positive results shifted Arjun's mindset from anxious to motivated, ready for a deeper commitment.",
  },
  {
    icon: <Dumbbell className="h-4 w-4" />,
    time: "July 2025",
    title: "Consolidation & Building Strength",
    body: "Shifted focus from stabilizing risks to building physical strength and cardiovascular resilience with a periodized training block.",
    rationale: "To build on the foundation of Q2's success, this phase introduced structured strength training. This helped Arjun internalize the long-term value of strength for longevity, not just short-term metrics.",
  },
  {
    icon: <FileText className="h-4 w-4" />,
    time: "August 2025",
    title: "Peak Workload, Resilience vs. Regression",
    body: "Successfully navigated the heaviest professional workload of the year, maintaining 75% adherence to workouts and preserving health gains under maximum stress.",
    rationale: "This phase tested whether Arjun's new systems could hold up under extreme pressure. By holding the line instead of collapsing, he proved his resilience and solidified his confidence in the system.",
  },
];

const JourneyTimeline = () => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="font-headline">Journey Visualization</CardTitle>
        <CardDescription>
          An interactive timeline of your health journey.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Timeline>
          {journeyData.map((item, index) => (
            <TimelineItem key={index}>
              <TimelinePoint />
              <TimelineContent>
                <TimelineTime>{item.time}</TimelineTime>
                <TimelineTitle>{item.title}</TimelineTitle>
                <TimelineBody>{item.body}</TimelineBody>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="link" size="sm" className="px-0 h-auto text-primary">View Rationale</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="font-headline">{item.title} - Rationale</DialogTitle>
                      <DialogDescription className="pt-4">
                        {item.rationale}
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </CardContent>
    </Card>
  );
};

export default JourneyTimeline;
