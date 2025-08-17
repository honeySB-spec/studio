import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send } from "lucide-react";

const messages = [
    {
        sender: "Ruby",
        avatar: "https://placehold.co/100x100/FFC107/FFFFFF.png",
        fallback: "R",
        text: "Morning, Jane! Just a friendly reminder that your quarterly review with Dr. Warren and Neel is scheduled for tomorrow at 10 AM. I've already sent the calendar invite with the video link.",
        time: "9:00 AM",
        isUser: false,
    },
    {
        sender: "Jane Doe",
        avatar: "https://placehold.co/100x100.png",
        fallback: "JD",
        text: "Thanks, Ruby! I saw that. Can you please add Carla to the meeting as well? I have some questions about my latest CGM data.",
        time: "9:02 AM",
        isUser: true,
    },
    {
        sender: "Ruby",
        avatar: "https://placehold.co/100x100/FFC107/FFFFFF.png",
        fallback: "R",
        text: "Of course. I've just updated the invite to include Carla. She's looking forward to it!",
        time: "9:03 AM",
        isUser: false,
    },
    {
        sender: "Advik",
        avatar: "https://placehold.co/100x100/009688/FFFFFF.png",
        fallback: "A",
        text: "Jane, Advik here. I noticed a consistent dip in your HRV on nights following your evening strength sessions with Rachel. I have a hypothesis that a post-workout sauna session could help with your parasympathetic rebound. Want to run an experiment for the next two weeks?",
        time: "11:15 AM",
        isUser: false,
    },
     {
        sender: "Jane Doe",
        avatar: "https://placehold.co/100x100.png",
        fallback: "JD",
        text: "Interesting! Yes, let's try it. What's the protocol?",
        time: "11:17 AM",
        isUser: true,
    },
    {
        sender: "Rachel",
        avatar: "https://placehold.co/100x100/F44336/FFFFFF.png",
        fallback: "R",
        text: "Hey Jane, Rachel here. Great session today! Your form on the deadlifts was perfect. Remember to focus on engaging your lats. I've added a new mobility routine to your plan to work on that hip tightness we talked about.",
        time: "1:30 PM",
        isUser: false,
    },
    {
        sender: "Dr. Warren",
        avatar: "https://placehold.co/100x100/3F51B5/FFFFFF.png",
        fallback: "DW",
        text: "Jane, Dr. Warren. I've reviewed your latest blood panel. Your ApoB levels have decreased by 15% since implementing Carla's nutrition plan - a fantastic result. However, your Vitamin D is still suboptimal. I concur with Carla's recommendation to increase your daily dosage to 5000 IU.",
        time: "3:45 PM",
        isUser: false,
    }
];


const CommunicationHub = () => {
  return (
    <Card className="shadow-md flex flex-col h-[500px]">
      <CardHeader>
        <CardTitle className="font-headline">Communication Hub</CardTitle>
        <CardDescription>
          Chat with your concierge, doctors, and specialists. 4 queries remaining this week.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden">
        <ScrollArea className="h-full pr-4">
            <div className="space-y-4">
            {messages.map((message, index) => (
                <div key={index} className={`flex items-end gap-2 ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                    {!message.isUser && (
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={message.avatar} data-ai-hint={`${message.sender} profile`} />
                            <AvatarFallback>{message.fallback}</AvatarFallback>
                        </Avatar>
                    )}
                    <div className={`rounded-lg px-3 py-2 max-w-xs lg:max-w-md ${message.isUser ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                        <p className="text-sm font-semibold">{message.sender}</p>
                        <p className="text-sm mt-1">{message.text}</p>
                        <p className={`text-xs mt-1 ${message.isUser ? 'text-primary-foreground/70' : 'text-muted-foreground'} text-right`}>{message.time}</p>
                    </div>
                     {message.isUser && (
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={message.avatar} data-ai-hint="profile user" />
                            <AvatarFallback>{message.fallback}</AvatarFallback>
                        </Avatar>
                    )}
                </div>
            ))}
            </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="p-4 border-t">
        <div className="flex w-full items-center space-x-2">
            <Input type="text" placeholder="Type your message..." className="flex-1" />
            <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
            </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CommunicationHub;
