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
  Heart,
  TrendingDown,
  LineChart,
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
        title: "Episode 1: Initial Health Inquiry & Onboarding",
        body: "Arjun reached out with concerns about elevated resting heart rate and suboptimal HRV scores, triggered by consistent red recovery scores on his Whoop. The team initiated a multi-expert review and delivered a structured onboarding plan.",
        details: {
            primaryGoal: "Arjun reached out to the Elyx team after reviewing his recent wearable data from Whoop and Garmin, which showed: consistently elevated resting heart rate (74–77 bpm), suboptimal HRV scores (~40 ms baseline) despite regular morning runs, and high levels of work-related stress during long-haul travel weeks, particularly after a back-to-back trip from Singapore → Dubai → London. His main concern was whether these patterns indicated early cardiovascular risk, especially given his family history of hypertension and high cholesterol. He wanted clarity on whether he should consider medication or double down on lifestyle interventions.",
            triggeredBy: "The inquiry was initiated by Arjun after noticing consistent red recovery scores in Whoop. He expressed curiosity and concern in a WhatsApp message to Elyx Concierge Ruby.",
            frictionPoints: [
                "Data interpretation: Arjun wasn’t sure how to connect his wearable metrics (HRV, recovery, strain) with medical risk markers.",
                "Time zone communication: Due to his late arrival from London, his first message reached the Elyx team outside of Singapore office hours.",
                "Skepticism about process: Arjun asked whether Elyx could provide more action-oriented insights rather than “general lifestyle advice.”",
            ],
            interventions: [
                { expert: "Dr. Warren (Medical Strategist)", action: "Recommended a baseline advanced blood panel (lipids, ApoB, HbA1c, hs-CRP) within the week to align wearable data with clinical biomarkers.", justification: "Align wearable data with clinical biomarkers.", evidenceLink: "" },
                { expert: "Carla (Nutritionist)", action: "Suggested food logging for 5 days to understand possible contributors to his recovery dips.", justification: "Understand possible contributors to recovery dips.", evidenceLink: "" },
                { expert: "Advik (Performance Scientist)", action: "Proposed a stress-recovery correlation study, tracking Arjun’s HRV across different travel and work intensity phases.", justification: "Track HRV across different travel and work intensity phases.", evidenceLink: "" },
                { expert: "Ruby (Concierge)", action: "Coordinated scheduling, arranging a lifestyle consultation with Dr. Warren and Advik for March 14.", justification: "Efficiently schedule consultations.", evidenceLink: "" },
            ],
            finalOutcome: "Arjun received his post-onboarding plan, outlining diagnostics, data collection, and next steps.",
            personaAnalysis: {
                before: "Proactive, curious, and data-driven about his health. He was already tracking fitness and sleep metrics but felt his self-management was fragmented and “too reactive.” He was anxious about whether his elevated stress signals indicated long-term health risks.",
                after: "Felt engaged with the Elyx process. His concerns were acknowledged seriously, and a structured plan with specific diagnostics was presented. He shifted from feeling “uncoordinated” to feeling that there was a system and team behind his health journey.",
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
        title: "Episode 2: Clarification, Data Gathering & Initial Workout Plan",
        body: "Following his onboarding, Arjun underwent diagnostics. The team analyzed his labs (ApoB 102) and wearable data, creating a lifestyle-first intervention plan to address cardiovascular risk and improve recovery.",
        details: {
            primaryGoal: "Following his onboarding consultation, Arjun’s central objective for this phase was to clarify his baseline health status and begin testing structured interventions. He wanted more than surface-level advice: clear evidence-based correlations between his lifestyle choices, biomarker readings, and wearable data. His top questions were: 1. How do my blood markers correlate with my wearable recovery metrics? 2. Should I start medication for cardiovascular risk, or can I stabilize through lifestyle first? 3. What realistic adjustments can I make while managing constant travel?",
            triggeredBy: "Arjun initiated follow-ups via WhatsApp voice notes to Ruby and Advik after his diagnostic blood draw on March 15. Elyx experts (Dr. Warren and Carla) triggered further actions once the lab results were uploaded on March 20.",
            frictionPoints: [
                "Interpretation anxiety: When Arjun saw his ApoB at 102 mg/dL, he Googled “ApoB over 100” and grew anxious, asking if this meant he was already in high-risk territory.",
                "Travel disruption: Between March 18–21, he was on a short but intense business trip to Hong Kong, which limited his ability to follow the food logging protocol fully.",
                "Skepticism about food tracking: Arjun initially dismissed logging every meal as “tedious,” though Carla later reframed it as a short-term diagnostic tool.",
            ],
            interventions: [
                { expert: "Dr. Warren", action: "Interpreted lab panel: ApoB at 102 (mildly above optimal), LDL-C borderline, hs-CRP slightly elevated at 2.2 mg/L, fasting glucose normal. Recommended lifestyle-first intervention for 12 weeks before reconsidering medication. Set target: ApoB < 80 mg/dL by Q2 diagnostics in June.", justification: "Provide a clear risk assessment and a manageable, non-pharmaceutical path forward to build confidence.", evidenceLink: "" },
                { expert: "Carla", action: "Analyzed partial food logs + travel meals. Identified low fiber intake (~18g/day) and higher-than-expected refined carbs during travel. Introduced “Travel Plate Framework”: half vegetables, quarter protein, quarter carbs. Recommended 25–30g fiber/day and inclusion of soluble fiber sources like oats, flaxseed, and psyllium.", justification: "Address the key dietary levers for ApoB reduction and provide simple, actionable heuristics that work during travel.", evidenceLink: "" },
                { expert: "Advik", action: "Mapped HRV vs. workload → discovered HRV crashed (low 30s ms) after 2 consecutive red-eye flights but rebounded with two nights of >7h sleep. Recommended Arjun run a sleep consistency experiment: no late-night laptop use, in-bed by 11 PM for 5 nights straight post-trip. Provided a simple workout flow for travel weeks: 20-min Zone 2 treadmill + 15-min mobility circuit.", justification: "Demonstrate the direct link between sleep consistency and autonomic recovery, empowering Arjun with a clear cause-and-effect understanding.", evidenceLink: "" },
                { expert: "Ruby", action: "Coordinated lab logistics and synced results with Elyx medical dashboard. Sent reminders to Arjun’s calendar for workout scheduling during travel. Organized a summary call on March 22 to present findings from Dr. Warren, Carla, and Advik together.", justification: "Ensure a seamless, integrated experience, reducing administrative friction for Arjun and reinforcing the value of a coordinated team.", evidenceLink: "" },
            ],
            finalOutcome: "Arjun's anxiety reduced after Dr. Warren contextualized the results as “addressable within 3 months.” He began experimenting with the Travel Plate Framework and completed the sleep consistency trial, improving his HRV. His mindset shifted from “worried patient” to “engaged co-experimenter.”",
            personaAnalysis: {
                before: "Anxious, skeptical, and distracted by travel logistics. Felt burdened by food logging and uncertain about whether lifestyle change would be enough.",
                after: "More confident, engaged, and reassured. Began to see himself as a partner in Elyx’s experiments. Developed trust that metrics could be improved with structured interventions.",
            },
            metricValues: [
                { metric: "Response Time", value: "< 2 hours (urgent)" },
                { metric: "Time to Resolution", value: "13 days" },
                { metric: "ApoB", value: "102 mg/dL" },
                { metric: "HRV", value: "30s -> 48ms" },
                { metric: "Fiber Intake", value: "18g -> 25g/day" },
            ],
        }
    },
    {
        icon: <TrendingUp className="h-4 w-4" />,
        time: "April 1–21, 2025",
        title: "Episode 3: Early Wins & Refining the Plan",
        body: "Arjun established early wins with improved HRV from structured sleep, nutrition, and training consistency. His skepticism was replaced with confidence as he saw measurable progress.",
        details: {
            primaryGoal: "Establish early wins that proved lifestyle adjustments were working. Focus areas were consolidating sleep hygiene, adopting fiber/protein-rich meals, and testing a structured exercise program.",
            triggeredBy: "Arjun initiated several WhatsApp check-ins after observing morning recovery trends on his Whoop. Carla (Nutritionist) and Rachel (Physiotherapist) triggered specific interventions once Arjun shared food logs and gym availability during travel. Ruby coordinated calendar reminders around Arjun’s scheduled Dubai trip in mid-April.",
            frictionPoints: [
                "Late-night work spillovers disrupting sleep.",
                "Skepticism about Zone 2 cardio feeling 'too easy.'",
                "Business dining in Dubai making nutrition adherence challenging.",
            ],
            interventions: [
                { expert: "Dr. Warren", action: "Reassured Arjun and approved an experiment with omega-3 supplementation (2g/day) to further support lipid control.", justification: "Maintain confidence and empower Arjun with controlled self-experimentation.", evidenceLink: "" },
                { expert: "Carla", action: "Designed a Protein Priority System and a “Dubai Dining Guide.” Introduced a travel fiber hack: carrying psyllium sachets.", justification: "Provide practical tools to reduce decision fatigue in challenging environments.", evidenceLink: "" },
                { expert: "Advik", action: "Ran a data analysis showing HRV was consistently higher (+6–8 ms) on weeks with regular Zone 2. Recommended a structured 4-week training block.", justification: "Use Arjun's own data to overcome skepticism and demonstrate the physiological benefits of Zone 2 training.", evidenceLink: "" },
                { expert: "Rachel", action: "Introduced a mobility sequence for hotel rooms and coached on strength training form via video review.", justification: "Good mobility is the foundation for safe and effective strength training. Video feedback allows for remote course correction, preventing injury and building confidence, especially when introducing new movement patterns during travel.", evidenceLink: "" },
            ],
            finalOutcome: "Arjun’s early skepticism was replaced with confidence. He saw measurable progress in his HRV and energy levels, and began to trust the process. He started proactively asking questions about optimizing his plan, completing his first 4-week structured block of training without missing more than one session.",
            personaAnalysis: {
                before: "Enthusiastic but still doubtful whether these smaller lifestyle shifts would yield real impact. Felt trapped by high-stakes travel dining and inconsistent schedules.",
                after: "Gained confidence in early wins. Began to trust not just the Elyx team but also his own ability to execute consistently, even in high-pressure contexts.",
            },
            metricValues: [
                { metric: "Response Time", value: "Avg 1 hour" },
                { metric: "Time to Resolution", value: "3 weeks" },
                { metric: "HRV", value: "50-52 ms average" },
                { metric: "Sleep", value: "Avg 6h 55m/night" },
                { metric: "Exercise Adherence", value: "11/12 sessions" },
                { metric: "Fiber Intake", value: "~28g/day" },
            ],
        }
    },
    {
        icon: <TrendingDown className="h-4 w-4" />,
        time: "May 1–23, 2025",
        title: "Episode 4: Travel Stress Test & Mid-Quarter Adjustments",
        body: "May was a real-world stress test with three back-to-back business trips. The goal was to maintain consistency under extreme travel demands. Despite dips, Arjun successfully salvaged progress under pressure.",
        details: {
            primaryGoal: "Maintain minimum exercise consistency (at least 3 sessions/week) and test the durability of his nutrition framework during three back-to-back business trips (Singapore → New York → London → Dubai).",
            triggeredBy: "Arjun proactively alerted Ruby about his intense May travel schedule, prompting the Elyx team to frame the month as a travel resilience experiment.",
            frictionPoints: [
                "Severe jet lag, with HRV plunging to a low of 29 ms.",
                "Indulgent client dinners in New York and London.",
                "Unexpected hotel gym closure in Dubai.",
                "Mental fatigue and 'cognitive fog' during presentations.",
            ],
            interventions: [
                { expert: "Dr. Warren", action: "Advised Arjun to treat May as a “damage control” month, not a progression phase, and recommended daily BP tracking.", justification: "Reframe expectations to prevent demoralization and maintain focus on consistency over peak performance.", evidenceLink: "" },
                { expert: "Carla", action: "Reinforced the 'Travel Plate Framework' with a '2:1 rule' (balance every indulgent meal with two controlled ones) and suggested a travel supplement kit.", justification: "Provide flexible but structured guardrails to manage nutrition in high-variance environments.", evidenceLink: "" },
                { expert: "Advik", action: "Created a 'Travel Recovery Playbook' with minimum and maximum workout options and a 'Flight Reset Protocol' (hydration, in-flight movement).", justification: "Equip Arjun with a flexible toolkit to adapt his routine to his energy levels and environment.", evidenceLink: "" },
                { expert: "Rachel", action: "Provided a hotel-room resistance band circuit as a backup for when gym access failed.", justification: "Ensure no workout is ever truly missed due to external constraints.", evidenceLink: "" },
                { expert: "Ruby", action: "Coordinated time-zone adjusted motivational nudges and arranged last-minute access to a partner gym in Dubai.", justification: "Provide proactive, high-touch support to remove logistical barriers and maintain morale.", evidenceLink: "" },
            ],
            finalOutcome: "Arjun completed 8 of 12 workouts (67%) and maintained 75% nutrition adherence. His HRV, though it dipped to 29 ms, rebounded to the mid-40s. He expressed pride in salvaging progress under pressure, a major psychological shift.",
            personaAnalysis: {
                before: "Concerned, almost defeatist, anticipating that travel would derail his progress. Saw May as 'damage month.'",
                after: "Energized by reframing May as an experiment in resilience. Even partial success felt validating. Gained confidence that he could carry Elyx protocols into any environment.",
            },
            metricValues: [
                { metric: "Response Time", value: "30 mins (wake-up nudges)" },
                { metric: "HRV", value: "Range 29–47 ms" },
                { metric: "Sleep", value: "Avg 6h 20m/night" },
                { metric: "Resting HR", value: "72 -> 68 bpm" },
                { metric: "Exercise Adherence", value: "67%" },
            ],
        }
    },
    {
        icon: <LineChart className="h-4 w-4" />,
        time: "June 2–20, 2025",
        title: "Episode 5: Q2 Diagnostics & Strategic Reset",
        body: "June's quarterly diagnostic panel showed an impressive 15% reduction in ApoB. This tangible proof of progress shifted Arjun's mindset from anxious to motivated, setting a clear, data-driven roadmap for Q3.",
        details: {
            primaryGoal: "Validate whether three months of lifestyle interventions improved his ApoB and lipid profile, and realign his Q3 strategy based on diagnostic findings.",
            triggeredBy: "Ruby scheduled Arjun’s diagnostics for June 5. Dr. Warren, Carla, and Advik led the strategic reset after results were in.",
            frictionPoints: [
                "Lab anxiety and worry that his efforts hadn't been enough.",
                "Feeling overwhelmed by the volume of integrated data (diagnostics, wearables, logs).",
                "Unrealistic expectations for a 'perfect' lab report after just one quarter.",
            ],
            interventions: [
                { expert: "Dr. Warren", action: "Interpreted results: ApoB down to 86 mg/dL (from 102), hs-CRP down to 1.5 mg/L. Framed the ~15% ApoB drop as a significant win for a lifestyle-first approach.", justification: "Provide expert validation and contextualize the results to build Arjun's confidence and commitment.", evidenceLink: "" },
                { expert: "Carla", action: "Attributed lipid improvements to fiber intake. Designed a Q3 Nutrient Priority Plan focusing on omega-3, magnesium, and consistent soluble fiber.", justification: "Connect specific dietary actions to positive outcomes and create a clear, targeted plan for the next phase.", evidenceLink: "" },
                { expert: "Advik", action: "Analyzed 90 days of Whoop data, showing HRV baseline climb from 40 to 52 ms and resting HR drop from 74 to 67 bpm. Proposed a periodized Q3 training block with scheduled 'deload' weeks.", justification: "Use long-term wearable data to quantify physiological improvements and introduce a more advanced, sustainable training structure.", evidenceLink: "" },
                { expert: "Ruby", action: "Summarized all results and plans into a one-page executive dashboard to reduce data overwhelm.", justification: "Synthesize complex information into an easily digestible format to enhance clarity and focus.", evidenceLink: "" },
            ],
            finalOutcome: "Arjun's ApoB progress to 86 mg/dL validated his efforts. His mindset shifted from anxious to motivated. The team set a clear Q3 roadmap combining nutrition fine-tuning and structured strength progression.",
            personaAnalysis: {
                before: "Nervous, outcome-dependent, and questioning if lifestyle changes were enough.",
                after: "Empowered by tangible improvement, more patient with the long-term process, and ready to commit deeper to structured training.",
            },
            metricValues: [
                { metric: "Time to Resolution", value: "10 days" },
                { metric: "ApoB", value: "102 -> 86 mg/dL" },
                { metric: "HRV", value: "40 -> 52 ms" },
                { metric: "Resting HR", value: "74 -> 67 bpm" },
                { metric: "hs-CRP", value: "2.2 -> 1.5 mg/L" },
            ],
        }
    },
    {
        icon: <Dumbbell className="h-4 w-4" />,
        time: "July 1–26, 2025",
        title: "Episode 6: Consolidation & Building Strength",
        body: "The focus shifted to building foundational strength. Despite initial soreness and a motivation dip, Arjun completed 87% of his sessions, improving his posture and reducing back stiffness.",
        details: {
            primaryGoal: "Establish a structured strength routine, test recovery-aware progression, and consolidate nutrition improvements by building them naturally into meals.",
            triggeredBy: "The Elyx team rolled out the Q3 plan. Arjun initiated check-ins after noticing new muscular soreness from strength progression.",
            frictionPoints: [
                "Muscular fatigue and underestimating the feel of strength sessions.",
                "Two late-night dinners breaking his sleep consistency streak.",
                "A mid-month motivation dip, questioning the slower-feeling progress of strength training.",
            ],
            interventions: [
                { expert: "Carla", action: "Helped transition fiber and magnesium intake from supplements to food sources. Introduced a post-strength recovery snack plan.", justification: "Promote sustainable, whole-food-based nutrition.", evidenceLink: "" },
                { expert: "Advik", action: "Compared recovery on strength vs. cardio days, explaining that the short-term HRV dip after strength was a normal, positive adaptation.", justification: "Educate Arjun on training physiology to manage expectations and maintain motivation.", evidenceLink: "" },
                { expert: "Rachel", action: "Focused on form correction via video review and prescribed pre-strength mobility drills to minimize soreness.", justification: "Ensure safe and effective progression to prevent injury.", evidenceLink: "" },
                { expert: "Ruby", action: "Organized a mid-month feedback call and sent nudges reframing strength training as a long-term investment in resilience.", justification: "Provide psychological support and strategic reframing to overcome motivation hurdles.", evidenceLink: "" },
            ],
            finalOutcome: "Arjun completed 14 of 16 sessions. His HRV remained stable (50-54 ms), and resting HR dipped to 66 bpm. He reported noticeable improvements in posture and reduced back stiffness. He began to internalize the value of strength for longevity.",
            personaAnalysis: {
                before: "Confident but impatient, uncertain if strength was as 'measurable' as cardio.",
                after: "Patient, committed, and more future-oriented. Began seeing strength as an investment in resilience, not just performance metrics.",
            },
            metricValues: [
                { metric: "HRV", value: "52-54 ms avg" },
                { metric: "Resting HR", value: "66 bpm" },
                { metric: "Exercise Adherence", value: "87%" },
                { metric: "Alcohol", value: "3-4 drinks/week" },
            ],
        }
    },
    {
        icon: <Heart className="h-4 w-4" />,
        time: "August 3–28, 2025",
        title: "Episode 7: Peak Workload, Resilience vs. Regression",
        body: "August was a resilience checkpoint with extreme work travel. The team reframed it as a 'resilience vs. regression experiment,' helping Arjun maintain 75% adherence and prevent regression under maximum stress.",
        details: {
            primaryGoal: "Maintain at least 70% adherence to workouts and recovery routines during a month of intense, multi-city travel and high-stakes board meetings.",
            triggeredBy: "Arjun proactively texted Ruby, 'This month will break me if I don’t have a game plan.'",
            frictionPoints: [
                "Sleep deprivation from three overnight flights.",
                "Cognitive load and mental fatigue from back-to-back negotiations.",
                "Heavy corporate dinners in Frankfurt threatening his nutrition framework.",
                "A mid-month workout drop-off, causing frustration.",
            ],
            interventions: [
                { expert: "Dr. Warren", action: "Monitored BP for stress-related spikes and reinforced that temporary fluctuations were expected and not a sign of failure.", justification: "Provide medical reassurance to prevent anxiety-driven regression.", evidenceLink: "" },
                { expert: "Carla", action: "Reintroduced the 80/20 rule for dining flexibility and suggested portable nutrition hacks to course-correct after indulgent meals.", justification: "Offer practical, non-rigid strategies that work under extreme pressure.", evidenceLink: "" },
                { expert: "Advik", action: "Reframed workouts as 'maintenance minimums' (2 mandatory sessions/week) and provided 15-min routines for in-between meetings.", justification: "Lower the barrier to consistency and make exercise feel achievable even on the busiest days.", evidenceLink: "" },
                { expert: "Ruby", action: "Sent motivational nudges: 'Think consistency, not perfection,' and organized a reflection call to frame the month as a win.", justification: "Deliver targeted psychological support to build a resilient mindset.", evidenceLink: "" },
            ],
            finalOutcome: "Arjun completed 75% of his workouts. His HRV dipped mid-month but rebounded successfully. He managed nutrition with strategic corrections. He ended the month feeling resilient, stating, 'I didn’t collapse—I held the line. That’s a win.'",
            personaAnalysis: {
                before: "Anxious, fearing that a tough month would erase all his progress.",
                after: "More resilient, learning that sustainability under pressure matters more than perfection. Gained confidence that his systems could bend without breaking.",
            },
            metricValues: [
                { metric: "HRV", value: "Rebounded to 52 ms" },
                { metric: "Resting HR", value: "Stable ~66 bpm" },
                { metric: "BP", value: "Managed fluctuations" },
                { metric: "Exercise Adherence", value: "75%" },
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
                                                                                <Button variant="outline" size="sm" className="h-auto px-2 py-1 text-xs">Why this?</Button>
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
