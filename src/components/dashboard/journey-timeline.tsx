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
                { expert: "Rachel", action: "Introduced a mobility sequence and coached on strength training form via video.", justification: "Good mobility is the foundation for safe and effective strength training. Video feedback allows for precise, remote coaching, preventing injury and ensuring the user gets the maximum benefit from their workouts.", evidenceLink: "" },
            ],
            finalOutcome: "Successfully hit 5 hours/week of exercise. HRV climbed to 50-52 ms. Zone 2 skepticism turned into curiosity. Completed his first 4-week training block with high consistency.",
            personaAnalysis: {
                before: "Enthusiastic but doubtful whether small shifts would yield real impact.",
                after: "Gained confidence in early wins. Began to trust his own ability to execute consistently.",
            },
            metricValues: [
                { metric: "HRV", value: "50–52 ms average (↑)" },
                { metric: "Sleep", value: "Avg 6h 55m/night" },
                { metric: "Exercise Consistency", value: "11/12 sessions completed" },
            ],
        }
    },
    {
        icon: <Stethoscope className="h-4 w-4" />,
        time: "May 1–23, 2025",
        title: "Travel Stress Test & Mid-Quarter Adjustments",
        body: "Maintained consistency during a demanding 3-week travel schedule, testing the durability of new habits under extreme jet lag and work pressure.",
        details: {
            primaryGoal: "Maintain at least 3 exercise sessions/week and test the durability of his nutrition framework during a 3-week, multi-continent business trip.",
            triggeredBy: "Arjun proactively alerted the team about his 'May madness' schedule. Advik framed it as a 'travel resilience experiment.'",
            frictionPoints: [
                "Severe jet lag, with HRV plunging to 29 ms.",
                "Client dinners in New York and London threatened nutrition consistency.",
                "Hotel gym in Dubai was unexpectedly closed.",
                "Mental fatigue and 'cognitive fog' during presentations.",
            ],
            interventions: [
                { expert: "Dr. Warren", action: "Advised treating May as a 'damage control' month. Recommended daily BP tracking.", justification: "High stress and jet lag can elevate blood pressure. Daily tracking provides crucial data to ensure safety and adjust the plan if readings become concerning. Framing it as 'damage control' manages expectations and reduces performance anxiety.", evidenceLink: "" },
                { expert: "Carla", action: "Reinforced 'Travel Plate Framework' with a '2:1 rule' for balancing indulgent meals. Suggested a travel supplement kit.", justification: "Simple rules and pre-packed supplements reduce cognitive load during a stressful period, making adherence more likely. The goal is to make the healthy choice the easy choice.", evidenceLink: "" },
                { expert: "Advik", action: "Created a 'Travel Recovery Playbook' with minimum/maximum workout options and a 'Flight Reset Protocol.'", justification: "A playbook provides clear, pre-defined options for different energy levels, preventing the 'all-or-nothing' mindset that often derails routines during travel. The Flight Reset Protocol uses light exposure and movement to accelerate circadian adaptation.", evidenceLink: "" },
                { expert: "Rachel", action: "Provided a hotel-room band circuit as a backup for gym closures.", justification: "Having a backup plan is critical for maintaining consistency when external factors (like a closed gym) are unpredictable. A band workout is portable and effective for maintaining muscle activation.", evidenceLink: "" },
            ],
            finalOutcome: "Completed 8/12 workouts. HRV rebounded to mid-40s. Avoided major carb overload. Reported sharper focus after applying flight protocols. Felt pride in salvaging progress under pressure.",
            personaAnalysis: {
                before: "Concerned, almost defeatist, anticipating travel would derail progress.",
                after: "Energized by reframing May as an experiment in resilience. Gained confidence he could carry protocols into any environment.",
            },
            metricValues: [
                { metric: "HRV", value: "Range 29–47 ms" },
                { metric: "Exercise Adherence", value: "8/12 sessions (67%)" },
                { metric: "Nutrition Adherence", value: "75% of meals aligned" },
            ],
        }
    },
    {
        icon: <BarChart className="h-4 w-4" />,
        time: "June 2–20, 2025",
        title: "Q2 Diagnostics & Strategic Reset",
        body: "Q2 diagnostics showed significant progress: ApoB dropped from 102 to 86 mg/dL. The results validated the lifestyle-first approach, leading to a strategic reset for Q3.",
        details: {
            primaryGoal: "Validate whether ApoB and lipid profile improved, assess recovery metrics, and realign the Q3 strategy based on findings.",
            triggeredBy: "Ruby coordinated diagnostics. Arjun initiated follow-ups. Dr. Warren led the interpretation and strategy reset.",
            frictionPoints: [
                "Lab anxiety before reviewing results.",
                "Data overload from diagnostics, wearables, and logs.",
                "Unrealistic expectations for 'perfect' labs after one quarter.",
            ],
            interventions: [
                { expert: "Dr. Warren", action: "Interpreted results: ApoB dropped to 86, hs-CRP to 1.5. Framed it as 'clear early progress' and continued lifestyle-first approach.", justification: "A 15% reduction in ApoB from lifestyle alone is a significant clinical win. Reinforcing this success builds self-efficacy and motivation to continue with the plan before escalating to pharmaceuticals.", evidenceLink: "https://my.clevelandclinic.org/health/diseases/24689-apolipoprotein-b-apob" },
                { expert: "Carla", action: "Celebrated fiber intake as the primary driver of improvements. Suggested tightening evening nutrition for Q3.", justification: "Attributing success to a specific behavior (fiber intake) reinforces that action. Targeting evening nutrition is a high-leverage next step, as it can improve both metabolic health and sleep quality.", evidenceLink: "" },
                { expert: "Advik", action: "Analyzed 90 days of Whoop data showing improved HRV, RHR, and sleep. Proposed a Q3 periodized training block.", justification: "Presenting a 90-day trend analysis makes progress tangible. Periodization is a systematic way to manage training stress, ensuring continued adaptation while minimizing burnout or injury risk. It moves from ad-hoc workouts to a strategic training plan.", evidenceLink: "" },
                { expert: "Ruby", action: "Organized a team strategy session and summarized results into a one-page dashboard for Arjun.", justification: "A unified team session ensures all experts are aligned on the go-forward strategy. A one-page summary distills complex information into a simple, actionable format, reducing the member's cognitive load.", evidenceLink: "" },
            ],
            finalOutcome: "ApoB progress validated lifestyle changes. Arjun shifted from anxious to motivated. A clear Q3 roadmap was set. He felt his health metrics were 'levers I can influence.'",
            personaAnalysis: {
                before: "Nervous, outcome-dependent, questioning if lifestyle changes were enough.",
                after: "Empowered by tangible improvement, more patient, and ready to commit deeper.",
            },
            metricValues: [
                { metric: "ApoB", value: "102 → 86 mg/dL (↓ 15%)" },
                { metric: "HRV", value: "40 → 52 ms average (↑ 30%)" },
                { metric: "Resting HR", value: "74 → 67 bpm (↓ 9%)" },
            ],
        }
    },
    {
        icon: <Dumbbell className="h-4 w-4" />,
        time: "July 1–26, 2025",
        title: "Consolidation & Building Strength",
        body: "Shifted focus from stabilizing risks to building physical strength and cardiovascular resilience with a periodized training block.",
        details: {
            primaryGoal: "Establish a structured strength routine, test recovery-aware progression, and consolidate nutrition improvements by relying less on supplements.",
            triggeredBy: "The Elyx team rolled out the Q3 plan. Arjun checked in after noticing new muscular soreness.",
            frictionPoints: [
                "Muscular fatigue from new strength sessions.",
                "Sleep discipline slips due to late-night client dinners.",
                "Mid-month motivation dip, questioning the 'feel' of progress from strength training.",
            ],
            interventions: [
                { expert: "Carla", action: "Helped transition from fiber/magnesium supplements to food sources. Introduced a post-strength recovery snack plan.", justification: "A 'food first' approach is more sustainable long-term. A targeted post-workout snack (protein + carbs) is timed to optimize muscle protein synthesis and glycogen replenishment, reducing soreness.", evidenceLink: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3905295/" },
                { expert: "Advik", action: "Rolled out a 4-week training block. Reassured Arjun that HRV dips after strength work were normal adaptation.", justification: "Strength training creates a different type of stress than cardio. Educating the user that a temporary HRV dip is a normal part of the adaptation process prevents them from misinterpreting it as a negative signal and stopping the program.", evidenceLink: "" },
                { expert: "Rachel", action: "Coached form via video review and prescribed pre-strength mobility drills.", justification: "Correct form is paramount for injury prevention, especially when progressing load. Pre-workout mobility activates the correct muscles and improves range of motion, leading to a more effective and safer session.", evidenceLink: "" },
                { expert: "Ruby", action: "Organized a mid-month feedback call to address the motivation dip, reframing strength as a long-term foundation.", justification: "Motivation is not constant. Proactively addressing a dip with a feedback call and reframing the goal (from short-term metrics to long-term resilience) helps the user stay engaged through challenging periods.", evidenceLink: "" },
            ],
            finalOutcome: "Completed 14/16 sessions. HRV remained stable. Resting HR dipped further to 66 bpm. Reported improved posture and less back stiffness. Internalized the value of strength for longevity.",
            personaAnalysis: {
                before: "Confident but impatient, uncertain if strength was as 'measurable' as cardio.",
                after: "Patient, committed, and more future-oriented. Saw strength as an investment in resilience.",
            },
            metricValues: [
                { metric: "Resting HR", value: "66 bpm (↓ from 67)" },
                { metric: "Exercise Adherence", value: "14/16 sessions (87%)" },
                { metric: "Alcohol", value: "Reduced to 3–4 drinks/week" },
            ],
        }
    },
    {
        icon: <FileText className="h-4 w-4" />,
        time: "August 3–28, 2025",
        title: "Peak Workload, Resilience vs. Regression",
        body: "Successfully navigated the heaviest professional workload of the year, maintaining 75% adherence to workouts and preserving health gains under maximum stress.",
        details: {
            primaryGoal: "Maintain at least 70% adherence to workouts and nutrition guardrails during a month of peak professional workload and travel. Prevent regression.",
            triggeredBy: "Arjun texted Ruby: 'This month will break me if I don’t have a game plan.' The team framed it as a 'resilience vs. regression experiment.'",
            frictionPoints: [
                "Sleep deprivation from overnight flights.",
                "Cognitive load causing mental fatigue.",
                "Dining indulgence during a trip to Frankfurt.",
                "Workout drop-off risk and frustration over 'slipping back.'",
            ],
            interventions: [
                { expert: "Dr. Warren", action: "Monitored BP spikes. Reassured that temporary fluctuations were expected, not regression.", justification: "During high-stress periods, reassurance from a medical expert is key. It helps the member differentiate between a temporary, expected physiological response and a genuine health regression, preventing unnecessary anxiety.", evidenceLink: "" },
                { expert: "Carla", action: "Reintroduced the 80/20 rule for flexibility. Suggested portable nutrition hacks like protein bars and electrolyte sachets.", justification: "Rigid plans fail under high stress. The 80/20 rule provides psychological flexibility, while portable hacks ensure the member is prepared and not forced into poor choices by their environment.", evidenceLink: "" },
                { expert: "Advik", action: "Reframed workouts as 'maintenance minimums.' Shared quick 15-min routines for busy days. Showed data of HRV dip and rebound.", justification: "Lowering the barrier to exercise ('maintenance minimums') increases the likelihood of adherence during low-resource periods. Showing the data of a dip followed by a rebound visually reinforces the concept of resilience.", evidenceLink: "" },
                { expert: "Ruby", action: "Sent motivational nudges like 'Think consistency, not perfection.' Organized an end-of-month reflection call.", justification: "Targeted motivational messages can interrupt negative thought patterns (e.g., 'I'm failing'). An end-of-month reflection call helps the member process the experience and recognize their own resilience, turning a hard month into a learned success.", evidenceLink: "" },
            ],
            finalOutcome: "Completed 9/12 sessions (75%). HRV dipped but rebounded. Nutrition adherence was ~80%. Arjun felt he 'held the line' instead of collapsing, which he considered a win.",
            personaAnalysis: {
                before: "Anxious, fearing regression would undo his hard-earned gains.",
                after: "More resilient, learning that sustainability under pressure matters more than perfection.",
            },
            metricValues: [
                { metric: "HRV", value: "Rebounded to 52 ms after dips" },
                { metric: "Resting HR", value: "Stable ~66 bpm" },
                { metric: "Exercise Adherence", value: "9/12 (75%)" },
            ],
        }
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
                    <Button variant="link" size="sm" className="px-0 h-auto text-primary">View Details</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle className="font-headline text-2xl">{item.title}</DialogTitle>
                      <DialogDescription>
                        {item.time}
                      </DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="max-h-[70vh] pr-6">
                        <div className="space-y-6 text-sm">
                            <div className="space-y-2">
                                <h4 className="font-semibold text-base">Primary Goal / Trigger</h4>
                                <p className="text-muted-foreground">{item.details.primaryGoal}</p>
                            </div>

                            <Separator />
                            
                            <div className="space-y-2">
                                <h4 className="font-semibold text-base">Triggered by Whom</h4>
                                <p className="text-muted-foreground">{item.details.triggeredBy}</p>
                            </div>

                            <Separator />

                            <div className="space-y-2">
                                <h4 className="font-semibold text-base">Friction Points</h4>
                                <ul className="list-disc list-outside pl-4 space-y-1 text-muted-foreground">
                                    {item.details.frictionPoints.map((point, i) => <li key={i}>{point}</li>)}
                                </ul>
                            </div>
                            
                            <Separator />

                            <div className="space-y-2">
                                <h4 className="font-semibold text-base">Interventions & Actions Taken</h4>
                                <ul className="space-y-3 text-muted-foreground">
                                    {item.details.interventions.map((intervention, i) => (
                                        <li key={i} className="flex flex-col gap-1">
                                            <div>
                                                <span className="font-semibold text-foreground/90">{intervention.expert}:</span> {intervention.action}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                 <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground">
                                                                <HelpCircle className="h-4 w-4" />
                                                            </Button>
                                                        </TooltipTrigger>
                                                        <TooltipContent className="max-w-xs" side="right">
                                                            <p className="font-bold mb-2">Why this intervention?</p>
                                                            <p>{intervention.justification}</p>
                                                            {intervention.evidenceLink && <Link href={intervention.evidenceLink} target="_blank" className="text-primary hover:underline text-xs mt-2 block">View Evidence</Link>}
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                                <Badge variant="outline">Why this?</Badge>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Separator />

                            <div className="space-y-2">
                                <h4 className="font-semibold text-base">Final Outcome</h4>
                                <p className="text-muted-foreground">{item.details.finalOutcome}</p>
                            </div>
                            
                            <Separator />

                            <div className="space-y-2">
                                <h4 className="font-semibold text-base">Stateful Persona Analysis</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="font-semibold text-foreground/90">Before</p>
                                        <p className="text-muted-foreground">{item.details.personaAnalysis.before}</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground/90">After</p>
                                        <p className="text-muted-foreground">{item.details.personaAnalysis.after}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <Separator />

                            <div className="space-y-2">
                                <h4 className="font-semibold text-base">Metric Values</h4>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {item.details.metricValues.map((metric, i) => (
                                        <div key={i} className="p-3 bg-muted/50 rounded-lg">
                                            <p className="font-semibold text-foreground/90">{metric.metric}</p>
                                            <p className="text-muted-foreground">{metric.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </ScrollArea>
                    <DialogClose asChild>
                        <Button type="button" variant="secondary" className="mt-4">
                          Close
                        </Button>
                    </DialogClose>
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
