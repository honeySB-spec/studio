import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Clock, UserCheck } from "lucide-react";

const stats = [
    {
        icon: <UserCheck className="h-8 w-8 text-accent" />,
        label: "Doctor Consults",
        value: "3",
        description: "This quarter"
    },
    {
        icon: <Clock className="h-8 w-8 text-accent" />,
        label: "Coaching Hours",
        value: "12",
        description: "This quarter"
    },
    {
        icon: <Calendar className="h-8 w-8 text-accent" />,
        label: "Next Appointment",
        value: "Jul 25, '24",
        description: "with Dr. Reed"
    }
]

const TeamStats = () => {
  return (
    <Card className="shadow-md h-[500px]">
      <CardHeader>
        <CardTitle className="font-headline">Team & Resource Coordination</CardTitle>
        <CardDescription>
          Internal metrics and scheduling assistance.
        </CardDescription>
      </CardHeader>
      <CardContent className="h-full flex flex-col justify-around">
        <div className="grid gap-8 grid-cols-1">
            {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-4">
                    {stat.icon}
                    <div>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <p className="text-xs text-muted-foreground">{stat.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamStats;
