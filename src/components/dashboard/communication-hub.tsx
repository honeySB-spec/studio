"use client";

import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Send, Search, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const teamMembers = [
    { name: "Dr. Warren", description: "MD", avatar: "https://placehold.co/100x100/3F51B5/FFFFFF.png", fallback: "DW" },
    { name: "Rachel", description: "PT", avatar: "https://placehold.co/100x100/F44336/FFFFFF.png", fallback: "R" },
    { name: "Carla", description: "Nutritionist", avatar: "https://placehold.co/100x100/4CAF50/FFFFFF.png", fallback: "C" },
    { name: "Advik", description: "Performance Scientist", avatar: "https://placehold.co/100x100/009688/FFFFFF.png", fallback: "A" },
    { name: "Ruby", description: "Concierge", avatar: "https://placehold.co/100x100/FFC107/FFFFFF.png", fallback: "R" },
    { name: "Neel", description: "Concierge Lead", avatar: "https://placehold.co/100x100/9C27B0/FFFFFF.png", fallback: "N" },
];

const CommunicationHub = () => {
  const [selected, setSelected] = React.useState("Dr. Warren");
  const selectedMember = teamMembers.find(m => m.name === selected);

  return (
    <Card className="shadow-md flex h-[700px] w-full">
        <div className="flex flex-col w-[300px] border-r bg-muted/20">
            <div className="p-4 border-b">
                <h2 className="text-2xl font-headline font-bold">Messages</h2>
                <div className="relative mt-2">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search messages..." className="pl-8" />
                </div>
            </div>
            <div className="flex-1 overflow-y-auto">
                <nav className="p-2 space-y-1">
                    <Button variant="ghost" className="w-full justify-start gap-3 h-auto py-3 px-4">
                        <MessageSquare className="h-5 w-5" />
                        <div>
                            <p className="font-semibold text-base">All Messages</p>
                        </div>
                    </Button>
                    {teamMembers.map(member => (
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
                            <div>
                                <p className="font-semibold text-base text-left">{member.name}</p>
                                <p className="font-normal text-sm text-muted-foreground text-left">{member.description}</p>
                            </div>
                        </Button>
                    ))}
                </nav>
            </div>
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
                <CardContent className="flex-1 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                        <p>No messages yet.</p>
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
