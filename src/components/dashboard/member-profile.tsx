import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { User, Cake, MapPin, Briefcase, Plane, Target, Zap, HeartPulse, Brain, GitMerge, Shield, MessageSquare, Mail, Calendar, Ship, Settings } from "lucide-react";

const profileData = {
    snapshot: {
        name: "Arjun Mehta",
        dob: "22 July 1983",
        age: 42,
        gender: "Male",
        residence: "Singapore",
        travelHubs: "Hong Kong, Dubai, London, San Francisco",
        occupation: "Senior Vice President at a Global Consulting Firm",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxwb3J0cmFpdCUyMG1hbGV8ZW58MHx8fHwxNzU1NDQyNjc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
        fallback: "AM",
    },
    outcomes: {
        goals: [
            "Lower ApoB consistently under 80 mg/dL by March 2026.",
            "Improve VO₂max and cardiovascular endurance by September 2026.",
            "Establish sustainable, travel-proof nutrition and exercise routines by December 2025.",
        ],
        motivation: "Strong family history of hypertension and cardiovascular disease. Motivated by career longevity and a desire to be present for his two teenage children.",
        metrics: ["ApoB, LDL-C", "VO₂max, Resting HR", "HRV", "Sleep quality, Energy levels", "Biological age, Stress resilience"],
    },
    persona: {
        personality: "Strategic, ambitious, and analytical. Thrives on structured routines and measurable progress.",
        stageOfChange: "Highly motivated, though adherence is ~50% due to work-travel. Responds best to flexible plans.",
        support: "Married with two teenage children; supportive spouse and domestic help for meal prep.",
        mentalHealth: "No formal history. Manages stress with journaling, mindfulness, and workouts.",
    },
    tech: {
        wearables: "Whoop band, Garmin Fenix",
        apps: "MyFitnessPal, Whoop dashboard, Trainerize",
        dataSharing: "Full API integration permissions granted.",
        reporting: "Weekly WhatsApp summaries, monthly detailed reports, quarterly deep-dive reviews.",
    },
    preferences: {
        channels: "WhatsApp for quick check-ins, Email for in-depth reports.",
        responseTime: "24 hours for non-urgent queries.",
        detailDepth: "Prefers data-driven summaries with access to granular data.",
        cultural: "Indian cultural background, no major dietary restrictions beyond health goals.",
    },
    logistics: {
        availability: "~5 hours/week for health routines, usually mornings.",
        travelRhythm: "Travels internationally 1 of every 4 weeks on average.",
        appointments: "Prefers virtual sessions; open to on-site diagnostics in Singapore.",
        transport: "Arranges his own transport.",
    },
};

const SectionCard = ({ title, description, icon, children }: { title: string, description?: string, icon: React.ReactNode, children: React.ReactNode }) => (
    <Card className="shadow-md">
        <CardHeader className="flex flex-row items-center gap-4">
            <div className="bg-primary/10 text-primary p-3 rounded-full">{icon}</div>
            <div>
                <CardTitle className="font-headline">{title}</CardTitle>
                {description && <CardDescription>{description}</CardDescription>}
            </div>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
    </Card>
);


const MemberProfile = () => {
  return (
    <div className="space-y-8">
        <Card className="shadow-lg">
            <CardContent className="p-6 flex flex-col md:flex-row items-center gap-6">
                <Avatar className="h-24 w-24 border-4 border-primary">
                    <AvatarImage src={profileData.snapshot.avatar} data-ai-hint="Arjun Mehta profile picture" />
                    <AvatarFallback className="text-3xl">{profileData.snapshot.fallback}</AvatarFallback>
                </Avatar>
                <div className="text-center md:text-left">
                    <h1 className="text-4xl font-bold font-headline">{profileData.snapshot.name}</h1>
                    <p className="text-muted-foreground text-lg">{profileData.snapshot.occupation}</p>
                    <div className="flex gap-4 mt-2 justify-center md:justify-start text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5"><Cake className="h-4 w-4" /> {profileData.snapshot.age} years ({profileData.snapshot.dob})</div>
                        <div className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {profileData.snapshot.residence}</div>
                    </div>
                </div>
            </CardContent>
        </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
            <SectionCard title="Core Outcomes & Timelines" icon={<Target className="h-6 w-6"/>}>
                <div className="space-y-4">
                    <div>
                        <h4 className="font-semibold mb-2">Top 3 Goals</h4>
                        <ul className="list-disc list-outside pl-5 space-y-1 text-muted-foreground text-sm">
                            {profileData.outcomes.goals.map((goal, i) => <li key={i}>{goal}</li>)}
                        </ul>
                    </div>
                    <Separator/>
                    <div>
                        <h4 className="font-semibold mb-2">Motivation ("Why Now?")</h4>
                        <p className="text-muted-foreground text-sm">{profileData.outcomes.motivation}</p>
                    </div>
                    <Separator/>
                    <div>
                        <h4 className="font-semibold mb-2">Success Metrics</h4>
                        <div className="flex flex-wrap gap-2">
                            {profileData.outcomes.metrics.map((metric, i) => <Badge key={i} variant="secondary">{metric}</Badge>)}
                        </div>
                    </div>
                </div>
            </SectionCard>
            <SectionCard title="Tech Stack & Data Feeds" icon={<Settings className="h-6 w-6"/>}>
                 <div className="space-y-4 text-sm">
                    <div className="flex justify-between items-center">
                        <span className="font-semibold">Wearables:</span>
                        <span className="text-muted-foreground">{profileData.tech.wearables}</span>
                    </div>
                    <Separator/>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold">Health Apps:</span>
                        <span className="text-muted-foreground">{profileData.tech.apps}</span>
                    </div>
                     <Separator/>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold">Data Sharing:</span>
                         <Badge variant="outline" className="text-green-600 border-green-600">{profileData.tech.dataSharing}</Badge>
                    </div>
                     <Separator/>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold">Reporting Cadence:</span>
                        <span className="text-muted-foreground text-right">{profileData.tech.reporting}</span>
                    </div>
                </div>
            </SectionCard>
        </div>
        <div className="lg:col-span-1 space-y-8">
            <SectionCard title="Behavioural & Psychosocial" icon={<Brain className="h-6 w-6"/>}>
                <div className="space-y-4 text-sm">
                    <div>
                        <h4 className="font-semibold mb-1">Personality</h4>
                        <p className="text-muted-foreground">{profileData.persona.personality}</p>
                    </div>
                    <Separator/>
                     <div>
                        <h4 className="font-semibold mb-1">Stage of Change</h4>
                        <p className="text-muted-foreground">{profileData.persona.stageOfChange}</p>
                    </div>
                    <Separator/>
                    <div>
                        <h4 className="font-semibold mb-1">Social Support</h4>
                        <p className="text-muted-foreground">{profileData.persona.support}</p>
                    </div>
                     <Separator/>
                     <div>
                        <h4 className="font-semibold mb-1">Mental Health</h4>
                        <p className="text-muted-foreground">{profileData.persona.mentalHealth}</p>
                    </div>
                </div>
            </SectionCard>
            <SectionCard title="Service & Logistics" icon={<Ship className="h-6 w-6"/>}>
                <div className="space-y-4 text-sm">
                     <div>
                        <h4 className="font-semibold mb-1">Communication Channels</h4>
                        <p className="text-muted-foreground">{profileData.preferences.channels}</p>
                    </div>
                    <Separator/>
                     <div>
                        <h4 className="font-semibold mb-1">Availability</h4>
                        <p className="text-muted-foreground">{profileData.logistics.availability}</p>
                    </div>
                    <Separator/>
                     <div>
                        <h4 className="font-semibold mb-1">Travel Rhythm</h4>
                        <p className="text-muted-foreground">{profileData.logistics.travelRhythm}</p>
                    </div>
                     <Separator/>
                     <div>
                        <h4 className="font-semibold mb-1">Appointments</h4>
                        <p className="text-muted-foreground">{profileData.logistics.appointments}</p>
                    </div>
                </div>
            </SectionCard>
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;
