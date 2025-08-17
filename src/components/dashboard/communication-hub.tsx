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
        { from: "Dr. Warren", time: "Yesterday", content: "Hi Jane, your latest lab results are in and they look excellent. I noted a slight dip in Vitamin D, so I recommend a high-quality supplement. I've added Thorne D-5000 to your plan for approval.", isUser: false },
        { from: "Jane Doe", time: "Yesterday", content: "Thanks for the quick update, Dr. Warren. I'll approve that now. Should I be concerned about the Vitamin D?", isUser: true },
        { from: "Dr. Warren", time: "Yesterday", content: "Not at all. It's a minor dip, common in this season. The supplement should correct it efficiently. We'll re-test in your next quarterly panel to confirm.", isUser: false },
    ],
    "Rachel": [
        { from: "Rachel", time: "Monday", content: "Jane, great work in our session today. Your form on the deadlifts has improved significantly. Let's focus on hip mobility this week; I've added some new exercises to your program.", isUser: false },
        { from: "Jane Doe", time: "Monday", content: "Felt that! Thanks, Rachel. The new mobility work feels challenging but good.", isUser: true },
    ],
    "Carla": [
        { from: "Carla", time: "Tuesday", content: "Morning Jane! I've analyzed your food log. Great consistency. I see an opportunity to increase protein intake post-workout to optimize recovery. A smoothie with whey protein could be a simple addition.", isUser: false },
        { from: "Jane Doe", time: "Tuesday", content: "Good idea, I can do that. Any brand you recommend?", isUser: true },
        { from: "Carla", time: "Tuesday", content: "I recommend Momentous. It's third-party tested and very high quality. I've sent you a link.", isUser: false },
    ],
    "Advik": [
        { from: "Advik", time: "Sunday", content: "Jane, your Whoop data shows a consistent 20% drop in HRV on nights you have wine. This pattern suggests alcohol is significantly impacting your restorative sleep. Let's run an experiment: no alcohol for 2 weeks and see how your metrics respond.", isUser: false },
    ],
    "Ruby": [
        { from: "Ruby", time: "10:30 AM", content: "Good morning, Jane! Just a friendly reminder about your quarterly review with Dr. Warren and Neel tomorrow at 11 AM. The video link is in your calendar. Is there anything you need to prepare?", isUser: false },
        { from: "Jane Doe", time: "10:32 AM", content: "Thanks, Ruby! All set on my end.", isUser: true },
    ],
    "Neel": [
        { from: "Neel", time: "Last Month", content: "Jane, following up on our Q1 review. The team is aligned on the new focus of improving deep sleep. We're all excited to support you in this next phase. Remember, this is a long-term investment in your healthspan.", isUser: false },
    ],
};

const CommunicationHub = () => {
  const [selected, setSelected] = React.useState("Dr. Warren");
  const selectedMember = teamMembers.find(m => m.name === selected);
  const messages = conversations[selected as keyof typeof conversations] || [];
  const user = { name: "Jane Doe", avatar: "https://images.unsplash.com/photo-1584999734482-0361aecad844?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMnx8UFJPRklMRSUyMFBJQ3xlbnwwfHx8fDE3NTU0NDExMzR8MA&ixlib=rb-4.1.0&q=80&w=1080", fallback: "JD" };

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
