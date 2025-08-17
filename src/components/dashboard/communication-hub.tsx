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
        sender: "Elyx Team",
        avatar: "https://placehold.co/100x100/673AB7/FFFFFF.png",
        fallback: "ET",
        text: "Hi Jane, your latest lab results are in. Dr. Reed has reviewed them and everything looks great. She noted a slight dip in Vitamin D and recommends a supplement.",
        time: "10:30 AM",
        isUser: false,
    },
    {
        sender: "Jane Doe",
        avatar: "https://placehold.co/100x100.png",
        fallback: "JD",
        text: "Thanks for the update! Any specific brand of Vitamin D you'd recommend?",
        time: "10:32 AM",
        isUser: true,
    },
    {
        sender: "Elyx Team",
        avatar: "https://placehold.co/100x100/673AB7/FFFFFF.png",
        fallback: "ET",
        text: "We recommend Thorne Vitamin D-5000. We've added it to your plan. You can approve it from the 'Interventions' tab.",
        time: "10:35 AM",
        isUser: false,
    },
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
                            <AvatarImage src={message.avatar} data-ai-hint="logo" />
                            <AvatarFallback>{message.fallback}</AvatarFallback>
                        </Avatar>
                    )}
                    <div className={`rounded-lg px-3 py-2 max-w-xs lg:max-w-md ${message.isUser ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                        <p className="text-sm">{message.text}</p>
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
