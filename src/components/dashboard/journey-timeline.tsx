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
    time: "February 2024",
    title: "Onboarding & Initial Consult",
    body: "Comprehensive health review and goal setting with Dr. Evelyn Reed.",
    rationale: "Established a baseline of your health and aligned on long-term goals to create a personalized plan."
  },
  {
    icon: <TestTube2 className="h-4 w-4" />,
    time: "March 2024",
    title: "Diagnostic Tests",
    body: "Full blood panel and genetic markers analysis.",
    rationale: "To identify potential risks, understand your unique biological makeup, and tailor interventions precisely."
  },
  {
    icon: <Dumbbell className="h-4 w-4" />,
    time: "April 2024",
    title: "Intervention: Nutrition Plan",
    body: "Started a Mediterranean diet plan focused on cognitive health.",
    rationale: "Based on genetic markers for APOE4, this diet is proven to support brain health and reduce inflammation."
  },
  {
    icon: <Stethoscope className="h-4 w-4" />,
    time: "May 2024",
    title: "Physiotherapy Session",
    body: "First session with physiotherapist to address lower back pain.",
    rationale: "Wearable data indicated poor movement patterns during sleep. Physiotherapy aims to correct this and improve sleep quality."
  },
  {
    icon: <FileText className="h-4 w-4" />,
    time: "June 2024",
    title: "Quarterly Results Review",
    body: "Deep dive into Q1 progress, showing a 5% improvement in VO₂max.",
    rationale: "Reviewed outcomes of initial interventions to celebrate wins and adjust the plan for the next quarter, focusing on strength training."
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
