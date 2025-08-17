"use client";

import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const teamMembers = [
    { name: "Dr. Warren", description: "MD", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxQUk9GSUxFJTIwUElDfGVufDB8fHx8MTc1NTQ0MTEzNHww&ixlib=rb-4.1.0&q=80&w=1080", fallback: "DW" },
    { name: "Rachel", description: "PT", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxQUk9GSUxFJTIwUElDfGVufDB8fHx8MTc1NTQ0MTEzNHww&ixlib=rb-4.1.0&q=80&w=1080", fallback: "R" },
    { name: "Carla", description: "Nutritionist", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxM3x8R0lSTHxlbnwwfHx8fDE3NTU0NDEyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080", fallback: "C" },
    { name: "Advik", description: "Performance Scientist", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxNRU58ZW58MHx8fHwxNzU1NDQxMzEzfDA&ixlib=rb-4.1.0&q=80&w=1080", fallback: "A" },
    { name: "Ruby", description: "Concierge", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxQUk9GSUxFJTIwUElDfGVufDB8fHx8MTc1NTQ0MTEzNHww&ixlib=rb-4.1.0&q=80&w=1080", fallback: "R" },
    { name: "Neel", description: "Concierge Lead", avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxQUk9GSUxFJTIwUElDfGVufDB8fHx8MTc1NTQ0MTEzNHww&ixlib=rb-4.1.0&q=80&w=1080", fallback: "N" },
];

const conversations = {
    "Dr. Warren": [
        { from: "Dr. Warren", time: "Mar 1, 8:10 AM", content: "Good question, Arjun. Yes, ApoB was included. Your result was 92 mg/dL — borderline elevated. This is why Carla and I have prioritized fiber + exercise consistency. We’ll re-test in 6 weeks with your next quarterly panel to see if interventions are working.", isUser: false },
        { from: "Arjun", time: "Mar 11, 11:30 AM", content: "Thanks for flagging. Swelling can have many causes — from high salt meals (common in Japan) to prolonged sitting. Check your BP today. If it’s significantly above baseline, we’ll adjust. Otherwise, hydrate and keep legs elevated when possible.", isUser: true },
        { from: "Dr. Warren", time: "Mar 25, 3:00 PM", content: "Arjun, I’ve reviewed your panel. Key highlights:\nApoB: 94 mg/dL (still elevated, up slightly from 92).\nFasting glucose: 95 mg/dL (within normal).\nhs-CRP: 1.8 (borderline inflammation).\nBP log confirms mild elevation, but trending better post-travel.\nPlan:\n1. Carla will tighten nutrition for ApoB (more soluble fiber, less red meat).\n2. Rachel to maintain progressive Zone 2 + resistance training.\n3. Re-test in June.", isUser: false },
    ],
    "Rachel": [
        { from: "Rachel", time: "Mar 2, 8:25 AM", content: "Arjun, quick note — focus on form for the goblet squats. Keep heels grounded. Send me a quick video if you feel any discomfort.", isUser: false },
        { from: "Rachel", time: "Mar 6, 9:00 AM", content: "Arjun, while traveling, aim for 20–25 mins bodyweight circuits daily. I’ll prep a “hotel room workout” for you. No excuses 😉", isUser: false },
        { from: "Rachel", time: "Mar 9, 7:40 AM", content: "Agreed. Just do 10 mins hip openers + core activation. Sending you a short video now.", isUser: false },
        { from: "Rachel", time: "Mar 20, 4:30 PM", content: "Arjun, since you’re fasting tomorrow morning, avoid intense exercise pre-blood draw. Just do gentle mobility or skip training entirely.", isUser: false },
        { from: "Rachel", time: "Mar 21, 6:50 PM", content: "That’s okay, expected. Do light walking or mobility tomorrow, and resume strength routine Sunday.", isUser: false },
        { from: "Rachel", time: "Mar 24, 8:40 AM", content: "Perfect, I’ll send short demos for deadlifts and overhead press — two lifts we’ll emphasize this block.", isUser: false },
        { from: "Rachel", time: "Mar 28, 11:00 AM", content: "Since your recovery is still low, let’s pivot this week. Instead of pushing progression, we’ll focus on maintaining baseline movement. Please try the 15-min mobility circuit I shared earlier. It keeps joints active without stressing the system.", isUser: false },
        { from: "Rachel", time: "Mar 29, 9:25 AM", content: "Yes — I’ll build a “hotel version” of your current block. Focus: dumbbell rows, goblet squats, push-ups, planks. 25–30 mins total.", isUser: false },
    ],
    "Carla": [
        { from: "Carla", time: "Mar 4, 11:05 AM", content: "Hi Arjun, I noticed from your food log photo yesterday you had chicken rice for lunch. Delicious 😋, but it was quite high in saturated fat. For blood pressure + ApoB, let’s aim for more oily fish and beans this week. Would you like me to send a simple lunch swap list that works around hawker food in Singapore?", isUser: false },
        { from: "Carla", time: "Mar 10, 12:25 PM", content: "Enjoy the dinner! Here’s what you can do:\nChoose leaner cuts (sirloin > short rib).\nPair with rice + veggies, avoid creamy sides.\nDrink water or tea, skip sugary drinks.\nStop when 80% full (Japanese “Hara Hachi Bu” principle).", isUser: false },
        { from: "Carla", time: "Mar 19, 8:15 AM", content: "Morning Arjun. Welcome back. For post-travel recovery + BP stability, let’s keep sodium low for 2–3 days. I’ve shared a meal plan with more fruits, vegetables, and whole grains. Have Suzane coordinate with your chef.", isUser: false },
        { from: "Carla", time: "Mar 26, 9:20 AM", content: "Following Dr. Warren’s analysis, I’ve updated your plan with weekly “fiber targets.” We’ll aim for 30g/day. I’ll coordinate with your chef to include oats, lentils, and chia puddings.", isUser: false },
    ],
    "Advik": [
        { from: "Advik", time: "Mar 1, 9:30 AM", content: "Hi Arjun. I’m looking at your data now. Elevated resting HR and suppressed HRV overnight confirm your poor sleep. Alcohol + late meals are usually the culprits. Let’s log this as a learning point. Try to stop meals 3h before bed this week and let’s see if sleep rebounds.", isUser: false },
        { from: "Advik", time: "Mar 9, 7:35 AM", content: "Given recovery <40%, today stick to mobility + walking. No intense training. The goal is to bounce back quickly from travel stress.", isUser: false },
        { from: "Advik", time: "Mar 11, 6:45 AM", content: "Excellent signal ✅. Your HR zone is well calibrated now. We’ll compare with your data back in Singapore next week.", isUser: false },
        { from: "Advik", time: "Mar 18, 7:50 AM", content: "Yes, very normal. Long-haul travel disrupts circadian rhythm and increases sympathetic drive. Your elevated resting HR confirms it. Today → light activity only. Walk 20–25 mins outside, plenty of water, and try a 15-min sunlight exposure before 10 AM. This accelerates circadian reset.", isUser: false },
        { from: "Advik", time: "Mar 22, 8:45 AM", content: "That’s interesting. Your HRV spiked back to 52 ms (vs. 40 average), suggesting your body is bouncing back from travel fatigue. Quality > duration sometimes. Let’s lock in the progress — no late meals, no alcohol tonight.", isUser: false },
        { from: "Advik", time: "Mar 27, 6:55 AM", content: "Looking at your data → respiratory rate up, resting HR elevated. Likely mild infection or stress load. Any sore throat, congestion?", isUser: false },
        { from: "Advik", time: "Mar 31, 8:10 AM", content: "Travel + late meals again showing up in data. Let’s keep today’s target minimal — a 20-min treadmill Zone 2 session, then early bedtime. We’ll try to stabilize your system before you return to Singapore.", isUser: false },
    ],
    "Ruby": [
        { from: "Ruby", time: "Mar 1, 9:20 AM", content: "Good morning, Arjun 🌞 Yes, I’ll flag this to Advik. Thank you for sharing. Any late caffeine or heavy meals yesterday?", isUser: false },
        { from: "Ruby", time: "Mar 2, 8:15 AM", content: "Gentle reminder — Rachel has updated your 2-week exercise block in the app. Today’s session is a mobility + strength circuit. Would you like me to block a 30-min slot in your calendar?", isUser: false },
        { from: "Ruby", time: "Mar 5, 6:45 AM", content: "Good morning. Quick note — we’re due for your 3-month diagnostic panel at the end of next week. I’ll schedule a home phlebotomy visit unless you prefer the lab clinic.", isUser: false },
        { from: "Ruby", time: "Mar 6, 8:35 AM", content: "Thanks for letting us know. I’ll coordinate a “Tokyo Travel Plan” for you by tomorrow — includes hotel gym options, portable snack suggestions, and timing adjustments.", isUser: false },
        { from: "Ruby", time: "Mar 7, 4:00 PM", content: "Weekly Elyx Report 📊\n* Sleep: 2 nights disrupted (late meals, alcohol).\n* Exercise: 3/4 planned sessions completed 👍\n* Nutrition: Logged 4/7 days. Still room to reduce saturated fat.\n* Blood pressure: Morning averages improved — 132/84 → 126/81.\nNext week focus: travel protocol, diagnostic panel prep.", isUser: false },
        { from: "Ruby", time: "Mar 8, 7:45 AM", content: "Safe travels today ✈️. Tokyo Travel Plan attached (PDF + calendar reminders). Includes recommended restaurants near your hotel with heart-healthy menus.", isUser: false },
        { from: "Ruby", time: "Mar 12, 8:50 AM", content: "Friendly reminder — diagnostic panel scheduled next Friday at your residence, 9 AM. Please confirm once back in Singapore.", isUser: false },
        { from: "Ruby", time: "Mar 14, 3:30 PM", content: "Weekly Elyx Report 📊\n* Travel week summary: 2 proper workouts, 3 mobility sessions.\n* Sleep: Below baseline (average recovery 42%).\n* Nutrition: Managed well despite work dinners.\n* BP: Slightly elevated, monitoring continues.\nFocus for next week: Diagnostic panel, reset post-travel, ApoB-targeted nutrition.", isUser: false },
        { from: "Ruby", time: "Mar 18, 7:55 AM", content: "I’ll also block a 30-min evening slot for stretching. Helps with circulation post-flight.", isUser: false },
        { from: "Ruby", time: "Mar 20, 9:00 AM", content: "Reminder — tomorrow morning at 9 AM, phlebotomist will arrive at your residence for your 3-month diagnostic panel. Please fast from midnight tonight (water allowed).", isUser: false },
        { from: "Ruby", time: "Mar 21, 9:00 AM", content: "Phlebotomist is at your residence now. They’ll need ~20 mins. I’ll follow up once the samples are dispatched.", isUser: false },
        { from: "Ruby", time: "Mar 23, 10:00 AM", content: "Weekly Elyx Report 📊\n* Exercise: 3/5 planned sessions completed (one skipped post-blood draw).\n* Sleep: Recovery improved after Tokyo return.\n* Nutrition: Sodium-heavy meals noted during travel. Post-trip adjustment underway.\n* BP: Averaged 129/82 this week, slight improvement from last week’s elevated readings.\nNext week → review blood panel results, reset structured plan for Q2.", isUser: false },
        { from: "Ruby", time: "Mar 24, 8:30 AM", content: "Good morning! Rachel has released your updated 2-week workout block (March 24 – April 6). It includes progressive resistance sessions + mobility work. Would you like a quick video walkthrough today?", isUser: false },
        { from: "Ruby", time: "Mar 25, 7:10 AM", content: "Preliminary blood test results are in. Dr. Warren will review them in detail and share later today.", isUser: false },
        { from: "Ruby", time: "Mar 27, 7:10 AM", content: "I’ll cancel today’s gym slot so you can focus on rest.", isUser: false },
        { from: "Ruby", time: "Mar 29, 9:30 AM", content: "I’ll also send Carla’s list of KL restaurants with lighter options near your hotel. That way your plan stays intact while traveling.", isUser: false },
        { from: "Ruby", time: "Mar 30, 3:00 PM", content: "Weekly Elyx Report 📊\n* Diagnostics: Completed, results reviewed.\n* ApoB: Slight rise, interventions strengthened.\n* Exercise: 4/6 sessions completed, 1 missed due to low recovery.\n* Nutrition: Logged 5/7 days, improving variety of whole foods.\n* Sleep: 2 poor nights, 2 strong recoveries.\nNext week → KL travel plan, maintaining momentum despite meetings.", isUser: false },
    ],
    "Neel": [],
};

const CommunicationHub = () => {
  const [selected, setSelected] = React.useState("Dr. Warren");
  const selectedMember = teamMembers.find(m => m.name === selected);

  const getMessagesForSelectedMember = () => {
    const memberMessages = conversations[selected as keyof typeof conversations] || [];
    const userMessagesToMember: any[] = [];
    
    // A bit of a hack to get user messages "to" a specific person.
    // In a real app this would be structured differently.
    const allMessagesFromUser: { [key: string]: { from: string, time: string, content: string, isUser: boolean }[] } = {
        "Dr. Warren": [
             { from: "Arjun", time: "Mar 3, 7:50 AM", content: "I was reading an article on ApoB being a better marker than LDL. Did we check mine in the last panel?", isUser: true },
             { from: "Arjun", time: "Mar 13, 11:35 AM", content: "BP was 138/86 this morning. Usually it’s ~126/80.", isUser: true },
             { from: "Arjun", time: "Mar 25, 3:15 PM", content: "ApoB went up even after all that effort?", isUser: true },
        ],
        "Rachel": [
             { from: "Arjun", time: "Mar 2, 8:20 AM", content: "Please do 6:30 PM.", isUser: true },
             { from: "Arjun", time: "Mar 6, 9:05 AM", content: "Fair enough.", isUser: true },
             { from: "Arjun", time: "Mar 21, 6:45 PM", content: "Skipped workout today — felt drained after the blood draw.", isUser: true },
             { from: "Arjun", time: "Mar 24, 8:35 AM", content: "Yes, 6 PM works.", isUser: true },
             { from: "Arjun", time: "Mar 28, 11:10 AM", content: "Done this morning actually. Felt good, less stiff.", isUser: true },
             { from: "Arjun", time: "Mar 29, 9:15 AM", content: "Heading to KL for 3 days of meetings. Hotel gym is small, just treadmills and dumbbells. Should I adapt workouts?", isUser: true },
        ],
        "Carla": [
            { from: "Arjun", time: "Mar 4, 11:15 AM", content: "Yes please, that would help.", isUser: true },
            { from: "Arjun", time: "Mar 10, 12:10 PM", content: "Quick qn — my Japanese client invited me for yakiniku tonight. Lots of red meat. Carla, any hacks so I don’t blow the plan?", isUser: true },
            { from: "Arjun", time: "Mar 19, 8:20 AM", content: "Good idea. Last week was soy sauce overload in Japan.", isUser: true },
            { from: "Arjun", time: "Mar 26, 9:25 AM", content: "Can you give me portable snack options too? I often eat in the office.", isUser: true },
        ],
        "Advik": [
             { from: "Arjun", time: "Mar 1, 9:12 AM", content: "Morning Ruby, just noticed my Oura ring logged only 5h 20m of sleep. I went to bed at 11 but kept waking up. Is this something Advik should check?", isUser: true },
             { from: "Arjun", time: "Mar 9, 7:20 AM", content: "Morning from Tokyo. Didn’t sleep well again — new hotel bed. Whoop says recovery 36%. Should I still try Rachel’s workout?", isUser: true },
             { from: "Arjun", time: "Mar 11, 6:30 AM", content: "Did 25 mins in the hotel gym treadmill Zone 2 yesterday. HR stayed stable around 125. Felt good.", isUser: true },
             { from: "Arjun", time: "Mar 18, 7:40 AM", content: "Back from Tokyo late last night. Woke up groggy, Whoop recovery only 38%. Is this normal after flights?", isUser: true },
             { from: "Arjun", time: "Mar 22, 8:30 AM", content: "Whoop shows recovery 76% today, huge jump. Surprised because I didn’t sleep that long.", isUser: true },
             { from: "Arjun", time: "Mar 22, 8:55 AM", content: "Got a dinner party… might be tough.", isUser: true },
             { from: "Arjun", time: "Mar 27, 6:40 AM", content: "Whoop shows only 5h sleep again, recovery red at 28%. No alcohol last night. Why so low?", isUser: true },
             { from: "Arjun", time: "Mar 31, 7:50 AM", content: "First night in KL hotel. Slept only 4.5h, had late dinner with clients. HRV dropped again.", isUser: true },
        ],
        "Ruby": [
            { from: "Arjun", time: "Mar 1, 9:22 AM", content: "Had a late dinner with friends around 9:30. Quite a bit of wine too.", isUser: true },
            { from: "Arjun", time: "Mar 5, 6:55 AM", content: "Home visit, please.", isUser: true },
            { from: "Arjun", time: "Mar 6, 8:20 AM", content: "Travel update — I’m flying to Tokyo Monday morning for a week. How do we adjust exercise and food?", isUser: true },
            { from: "Arjun", time: "Mar 7, 4:15 PM", content: "Appreciate the summary. Makes sense.", isUser: true },
            { from: "Arjun", time: "Mar 8, 7:50 AM", content: "Got it. Boarding now.", isUser: true },
            { from: "Arjun", time: "Mar 12, 9:05 AM", content: "Confirmed. Landing Thursday night.", isUser: true },
            { from: "Arjun", time: "Mar 14, 3:40 PM", content: "Thanks, clear as always.", isUser: true },
            { from: "Arjun", time: "Mar 18, 7:57 AM", content: "Please do, 7 PM.", isUser: true },
            { from: "Arjun", time: "Mar 20, 9:05 AM", content: "Acknowledged.", isUser: true },
            { from: "Arjun", time: "Mar 21, 9:05 AM", content: "All set, blood drawn.", isUser: true },
            { from: "Arjun", time: "Mar 23, 10:15 AM", content: "Understood. Looking forward to seeing my labs.", isUser: true },
            { from: "Arjun", time: "Mar 25, 7:12 AM", content: "Great, waiting.", isUser: true },
            { from: "Arjun", time: "Mar 27, 7:00 AM", content: "A bit congested, yes.", isUser: true },
            { from: "Arjun", time: "Mar 30, 3:20 PM", content: "Thanks, clear summary.", isUser: true },
            { from: "Arjun", time: "Mar 31, 8:15 AM", content: "Got it.", isUser: true },
        ],
        "Neel": []
    };

    if (selected && allMessagesFromUser[selected as keyof typeof allMessagesFromUser]) {
        userMessagesToMember.push(...allMessagesFromUser[selected as keyof typeof allMessagesFromUser]);
    }
    
    return [...memberMessages, ...userMessagesToMember].sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());
  };

  const messages = getMessagesForSelectedMember();
  const user = { name: "Arjun Mehta", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxwb3J0cmFpdCUyMG1hbGV8ZW58MHx8fHwxNzU1NDQyNjc3fDA&ixlib=rb-4.1.0&q=80&w=1080", fallback: "AM" };

  return (
    <Card className="shadow-md flex h-[700px] w-full">
        <div className="flex flex-col w-[300px] border-r bg-muted/20">
            <div className="p-4 border-b">
                <h2 className="text-2xl font-headline font-bold">Messages</h2>
            </div>
            <ScrollArea className="flex-1">
                <nav className="p-2 space-y-1">
                    {teamMembers.map(member => {
                        const lastMessage = conversations[member.name as keyof typeof conversations]?.filter(m => !m.isUser).at(-1);
                        return (
                            <Button
                                key={member.name}
                                variant={selected === member.name ? "secondary" : "ghost"}
                                className="w-full justify-start gap-3 h-auto py-3 px-4"
                                onClick={() => setSelected(member.name)}
                            >
                                <Avatar className="h-10 w-10">
                                    <AvatarImage src={member.avatar} data-ai-hint={`${member.name} profile`} />
                                    <AvatarFallback>{member.fallback}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1 text-left">
                                    <p className="font-semibold text-base">{member.name}</p>
                                    <p className="font-normal text-sm text-muted-foreground truncate">
                                        {lastMessage ? lastMessage.content : "No new messages"}
                                    </p>
                                </div>
                            </Button>
                        )
                    })}
                </nav>
            </ScrollArea>
        </div>
        <div className="flex flex-col flex-1">
            {selectedMember ? (
                <>
                <div className="p-4 border-b flex items-center gap-4">
                     <Avatar className="h-10 w-10">
                        <AvatarImage src={selectedMember.avatar} data-ai-hint={`${selectedMember.name} profile`} />
                        <AvatarFallback>{selectedMember.fallback}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-bold text-lg">{selectedMember.name}</p>
                        <p className="text-sm text-muted-foreground">{selectedMember.description}</p>
                    </div>
                </div>
                <CardContent className="flex-1 p-6 overflow-y-auto">
                    <div className="space-y-6">
                        {messages.map((message, index) => (
                            <div key={index} className={`flex items-end gap-2 ${message.isUser ? "justify-end" : "justify-start"}`}>
                                {!message.isUser && (
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={selectedMember.avatar} data-ai-hint={`${selectedMember.name} profile`} />
                                        <AvatarFallback>{selectedMember.fallback}</AvatarFallback>
                                    </Avatar>
                                )}
                                <div className={`rounded-lg px-3 py-2 max-w-xs lg:max-w-md ${message.isUser ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                                    <p className="text-sm">{message.content}</p>
                                    <p className={`text-xs mt-1 ${message.isUser ? 'text-primary-foreground/70' : 'text-muted-foreground'} text-right`}>{message.time}</p>
                                </div>
                                {message.isUser && (
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={user.avatar} data-ai-hint="user profile" />
                                        <AvatarFallback>{user.fallback}</AvatarFallback>
                                    </Avatar>
                                )}
                            </div>
                        ))}
                    </div>
                </CardContent>
                <div className="p-4 border-t bg-background">
                    <div className="relative">
                    <Input placeholder="Type your message..." className="pr-12" />
                    <Button type="submit" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8">
                        <Send className="h-4 w-4" />
                        <span className="sr-only">Send</span>
                    </Button>
                    </div>
                </div>
                </>
            ) : (
                <div className="flex-1 flex items-center justify-center text-muted-foreground">Select a conversation</div>
            )}
        </div>
    </Card>
  );
};

export default CommunicationHub;
