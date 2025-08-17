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
  HelpCircle,
  GitMerge,
} from "lucide-react";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
  } from "@/components/ui/dialog"
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import Link from "next/link";
import { Badge } from "../ui/badge";

const journeyData = [
    {
        icon: <ClipboardCheck className="h-4 w-4" />,
        time: "March 10–14, 2025",
        title: "Initial Health Inquiry & Onboarding",
        body: "Reached out to Elyx with concerns about elevated resting heart rate and low HRV. Underwent a multi-expert review and received a post-onboarding plan with diagnostics.",
        details: {
            primaryGoal: "Arjun reached out to the Elyx team after reviewing his recent wearable data from Whoop and Garmin, which showed consistently elevated resting heart rate (74–77 bpm), suboptimal HRV scores (~40 ms baseline) despite regular morning runs, and high levels of work-related stress during long-haul travel weeks. His main concern was whether these patterns indicated early cardiovascular risk, especially given his family history of hypertension and high cholesterol.",
            triggeredBy: "The inquiry was initiated by Arjun after noticing consistent red recovery scores in Whoop. He expressed curiosity and concern in a WhatsApp message to Elyx Concierge Ruby.",
            frictionPoints: [
                "Data interpretation: Arjun wasn’t sure how to connect his wearable metrics with medical risk markers.",
                "Time zone communication: Due to his late arrival from London, his first message reached the Elyx team outside of Singapore office hours.",
                "Skepticism about process: Arjun asked whether Elyx could provide more action-oriented insights rather than “general lifestyle advice.”",
            ],
            interventions: [
                { expert: "Dr. Warren (Medical Strategist)", action: "Recommended a baseline advanced blood panel (lipids, ApoB, HbA1c, hs-CRP) to align wearable data with clinical biomarkers.", justification: "Wearable data provides signals, but clinical biomarkers are needed for a definitive risk assessment. An advanced lipid panel, including ApoB, offers a more accurate picture of cardiovascular risk than a standard cholesterol test.", evidenceLink: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8722165/" },
                { expert: "Carla (Nutritionist)", action: "Suggested food logging for 5 days to understand possible contributors to his recovery dips.", justification: "Nutrition has a direct impact on HRV and resting heart rate. Logging meals helps identify patterns related to timing, macronutrient balance, and specific food triggers (like alcohol or processed foods) that may be affecting recovery.", evidenceLink: "https://www.frontiersin.org/articles/10.3389/fnut.2021.704449/full" },
                { expert: "Advik (Performance Scientist)", action: "Proposed a stress-recovery correlation study, tracking Arjun’s HRV across different travel and work intensity phases.", justification: "This establishes a personalized baseline, showing how Arjun's nervous system responds to specific stressors like travel and high-stakes meetings. It helps differentiate between physical and psychological stress, enabling more targeted interventions.", evidenceLink: "https://www.whoop.com/us/en/the-locker/heart-rate-variability-hrv/" },
                { expert: "Ruby (Concierge)", action: "Coordinated scheduling, arranging a lifestyle consultation with Dr. Warren and Advik for March 14.", justification: "Efficiently scheduling consultations with multiple experts ensures a cohesive and timely response, which builds member trust and momentum from the outset.", evidenceLink: "" },
            ],
            finalOutcome: "Arjun received his post-onboarding plan, outlining diagnostics, data collection, and next steps. He felt engaged with the Elyx process, shifting from feeling “uncoordinated” to feeling that there was a system and team behind his health journey.",
            personaAnalysis: {
                before: "Proactive, curious, and data-driven but felt his self-management was fragmented and “too reactive.” Anxious about long-term health risks.",
                after: "Engaged with the Elyx process. His concerns were acknowledged, and a structured plan was presented. Shifted from feeling 'uncoordinated' to feeling supported.",
            },
            metricValues: [
                { metric: "Response Time", value: "40 minutes" },
                { metric: "Time to Resolution", value: "4 days" },
            ],
        }
    },
    {
        icon: <TestTube2 className="h-4 w-4" />,
        time: "March 15–28, 2025",
        title: "Clarification, Data Gathering & Initial Workout Plan",
        body: "After diagnostic blood draw, received interpreted lab panel (ApoB 102). Started lifestyle-first intervention with nutrition and performance experiments.",
        details: {
            primaryGoal: "Clarify his baseline health status and begin testing structured interventions. His top questions were about the correlation between blood markers and wearables, whether he could avoid medication, and how to manage his health during travel.",
            triggeredBy: "Arjun initiated follow-ups via WhatsApp voice notes. Elyx experts (Dr. Warren and Carla) triggered further actions once lab results were in.",
            frictionPoints: [
                "Interpretation anxiety: Seeing his ApoB at 102 mg/dL caused anxiety.",
                "Travel disruption: A trip to Hong Kong limited his ability to follow the food logging protocol.",
                "Skepticism about food tracking: Initially dismissed logging meals as 'tedious.'",
            ],
            interventions: [
                { expert: "Dr. Warren", action: "Interpreted lab panel (ApoB 102, hs-CRP 2.2). Recommended a 12-week lifestyle-first intervention, targeting ApoB < 80 mg/dL.", justification: "An ApoB of 102 is borderline high. Clinical guidelines support a 3-month intensive lifestyle intervention (nutrition, exercise) as the first line of defense before considering statin therapy, especially in a motivated individual.", evidenceLink: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000000678" },
                { expert: "Carla", action: "Analyzed food logs, identified low fiber. Introduced 'Travel Plate Framework' and recommended 25-30g fiber/day.", justification: "Soluble fiber has a proven, dose-dependent effect on lowering ApoB and LDL cholesterol. The 'Travel Plate Framework' is a simple heuristic that makes healthy eating decisions easier under cognitive load, improving adherence.", evidenceLink: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6566984/" },
                { expert: "Advik", action: "Mapped HRV vs. workload, discovered HRV crashed after red-eye flights. Recommended a sleep consistency experiment.", justification: "Consistent sleep timing is the single most powerful lever for stabilizing the circadian rhythm and improving HRV. An experiment makes the cause-and-effect relationship clear to the user, increasing buy-in for behavior change.", evidenceLink: "https://www.sleepfoundation.org/sleep-hygiene/sleep-consistency" },
                { expert: "Ruby", action: "Coordinated lab logistics and organized a summary call to present findings.", justification: "A coordinated call prevents fragmented communication and ensures the member understands how different aspects of their plan (medical, nutrition, performance) are interconnected.", evidenceLink: "" },
            ],
            finalOutcome: "Arjun's anxiety reduced after Dr. Warren contextualized the results. He began experimenting with the Travel Plate Framework and completed the sleep consistency trial, improving his HRV. His mindset shifted from 'worried patient' to 'engaged co-experimenter.'",
            personaAnalysis: {
                before: "Anxious, skeptical, and distracted by travel logistics.",
                after: "More confident, engaged, and reassured. Began to see himself as a partner in Elyx’s experiments.",
            },
            metricValues: [
                { metric: "ApoB", value: "102 mg/dL (baseline)" },
                { metric: "HRV", value: "Improved from low 30s to 45-48 ms" },
                { metric: "Fiber Intake", value: "18g/day → 25g/day" },
            ],
        }
    },
    {
        icon: <TrendingUp className="h-4 w-4" />,
        time: "April 1–21, 2025",
        title: "Early Wins & Refining the Plan",
        body: "Established early wins with improved HRV from structured sleep, nutrition, and training consistency, even during travel.",
        details: {
            primaryGoal: "Establish early wins that proved lifestyle adjustments were working. Focus areas were consolidating sleep hygiene, adopting fiber/protein-rich meals, and testing a structured exercise program.",
            triggeredBy: "Arjun initiated check-ins. Carla and Rachel triggered specific interventions. Ruby coordinated calendar reminders.",
            frictionPoints: [
                "Late-night work spillovers disrupting sleep.",
                "Skepticism about Zone 2 cardio feeling 'too easy.'",
                "Business dining in Dubai making nutrition adherence challenging.",
            ],
            interventions: [
                { expert: "Dr. Warren", action: "Reassured Arjun and approved an experiment with omega-3 supplementation.", justification: "Omega-3 fatty acids have anti-inflammatory properties and have been shown to support cardiovascular health, including lipid management. Approving a controlled experiment empowers the user while ensuring it's done safely.", evidenceLink: "https://www.ahajournals.org/doi/10.1161/JAHA.119.013543" },
                { expert: "Carla", action: "Designed a 'Protein Priority System' and a 'Dubai Dining Guide.' Introduced a psyllium hack for fiber.", justification: "Prioritizing protein increases satiety and helps maintain muscle mass. The 'Dining Guide' and 'Psyllium Hack' are practical tools that reduce decision fatigue and increase adherence in challenging environments.", evidenceLink: "" },
                { expert: "Advik", action: "Ran data analysis showing HRV improvement with Zone 2 cardio. Recommended a structured 4-week training block.", justification: "Zone 2 training specifically targets mitochondrial efficiency and improves the aerobic base, which directly translates to better cardiovascular health and higher HRV. Showing the user their own data is the most effective way to overcome skepticism.", evidenceLink: "https://www.peterattiamd.com/ama27/" },
                { expert: "Rachel", action: "Introduced a mobility sequence and coached on strength training form via video.", justification: "Good mobility is the foundation for safe and effective strength training. Video feedback allows for remote form correction, ensuring safety and effectiveness without an in-person session." },
            ],
            finalOutcome: "Arjun’s early skepticism was replaced with confidence. He saw measurable progress in his HRV and energy levels, and began to trust the process. He started proactively asking questions about optimizing his plan.",
            personaAnalysis: {
                before: "Skeptical, needed proof, and felt his time was too constrained for new habits.",
                after: "Data-driven, confident, and proactive. Shifted from asking “if” the plan would work to “how” it could be optimized.",
            },
            metricValues: [
                { metric: "HRV (weekly avg)", value: "54 ms" },
                { metric: "Subjective Energy", value: "7/10" },
                { metric: "Zone 2 Adherence", value: "100% (3 sessions)" },
            ],
        }
    }
];


const JourneyTimeline = () => {
    return (
        <Card className="shadow-md">
        <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2">
                <GitMerge className="text-primary" />
                Member Journey
            </CardTitle>
            <CardDescription>
            A chronological timeline of member interactions, interventions, and outcomes.
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
                                <Button variant="link" size="sm" className="h-auto p-0 mt-2">View Details</Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl h-[90vh]">
                                <DialogHeader>
                                    <DialogTitle className="font-headline text-3xl">{item.title}</DialogTitle>
                                    <DialogDescription>{item.time}</DialogDescription>
                                </DialogHeader>
                                <ScrollArea className="flex-1 -mx-6">
                                    <div className="px-6 space-y-6">
                                        <Separator />
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-4">
                                                <div>
                                                    <h4 className="font-semibold text-lg mb-2">Primary Goal</h4>
                                                    <p className="text-sm text-muted-foreground">{item.details.primaryGoal}</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-lg mb-2">Triggered By</h4>
                                                    <p className="text-sm text-muted-foreground">{item.details.triggeredBy}</p>
                                                </div>

                                                <div>
                                                    <h4 className="font-semibold text-lg mb-2">Friction Points</h4>
                                                    <ul className="list-disc list-outside pl-5 space-y-1 text-sm text-muted-foreground">
                                                        {item.details.frictionPoints.map((point, i) => <li key={i}>{point}</li>)}
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-lg mb-2">Persona Analysis</h4>
                                                    <div className="space-y-2 text-sm">
                                                        <p><span className="font-semibold">Before:</span> <span className="text-muted-foreground">{item.details.personaAnalysis.before}</span></p>
                                                        <p><span className="font-semibold">After:</span> <span className="text-muted-foreground">{item.details.personaAnalysis.after}</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space-y-4">

                                                <div>
                                                    <h4 className="font-semibold text-lg mb-2">Interventions by Elyx Team</h4>
                                                    <div className="space-y-4">
                                                        {item.details.interventions.map((intervention, i) => (
                                                            <div key={i} className="p-3 bg-muted/50 rounded-lg text-sm">
                                                                <p><span className="font-semibold">{intervention.expert}:</span> {intervention.action}</p>
                                                                <div className="flex items-center gap-2 mt-2">
                                                                    <TooltipProvider>
                                                                        <Tooltip>
                                                                            <TooltipTrigger asChild>
                                                                                <Badge variant="outline" className="cursor-pointer">Why this?</Badge>
                                                                            </TooltipTrigger>
                                                                            <TooltipContent className="max-w-xs">
                                                                                <p>{intervention.justification}</p>
                                                                                {intervention.evidenceLink && (
                                                                                    <Link href={intervention.evidenceLink} target="_blank" className="text-primary text-xs hover:underline mt-2 block">
                                                                                        Supporting Evidence
                                                                                    </Link>
                                                                                )}
                                                                            </TooltipContent>
                                                                        </Tooltip>
                                                                    </TooltipProvider>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-lg mb-2">Final Outcome</h4>
                                                    <p className="text-sm text-muted-foreground">{item.details.finalOutcome}</p>
                                                </div>

                                                <div>
                                                    <h4 className="font-semibold text-lg mb-2">Key Metric Changes</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {item.details.metricValues.map((metric, i) => (
                                                            <Badge key={i} variant="secondary">{metric.metric}: {metric.value}</Badge>
                                                        ))}
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <Separator />
                                    </div>
                                </ScrollArea>
                                <DialogClose />
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
