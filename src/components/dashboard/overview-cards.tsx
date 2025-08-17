import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HeartPulse, Activity, BedDouble, Shield, ArrowUp, ArrowDown } from "lucide-react";

const overviewData = [
  {
    title: "VO₂max",
    value: "45.2",
    unit: "ml/kg/min",
    change: "+1.2%",
    changeType: "increase",
    icon: HeartPulse,
    color: "text-red-500",
  },
  {
    title: "Biological Age",
    value: "32.5",
    unit: "years",
    change: "-0.8 years",
    changeType: "decrease",
    icon: Activity,
    color: "text-green-500",
  },
  {
    title: "Sleep Quality",
    value: "88%",
    unit: "score",
    change: "+3%",
    changeType: "increase",
    icon: BedDouble,
    color: "text-blue-500",
  },
  {
    title: "Stress Resilience",
    value: "75",
    unit: "/ 100",
    change: "-2 points",
    changeType: "decrease",
    icon: Shield,
    color: "text-yellow-500",
  },
];

const OverviewCards = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {overviewData.map((item, index) => (
        <Link href="/reports" key={index} className="transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-md hover:shadow-xl rounded-lg">
          <Card className="h-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {item.title}
              </CardTitle>
              <item.icon className={`h-5 w-5 ${item.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-headline">
                {item.value}
                <span className="text-lg font-normal text-muted-foreground ml-1">{item.unit}</span>
              </div>
              <p className="text-xs text-muted-foreground flex items-center">
                <span className={`flex items-center mr-1 ${item.changeType === 'increase' ? 'text-green-600' : 'text-red-600'}`}>
                  {item.changeType === 'increase' ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                </span>
                {item.change} from last month
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default OverviewCards;
