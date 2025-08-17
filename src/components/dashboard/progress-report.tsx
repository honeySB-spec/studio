"use client"

import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid, AreaChart, Area } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const vo2MaxData = [
  { name: "Jan", vo2Max: 42.1 },
  { name: "Feb", vo2Max: 42.5 },
  { name: "Mar", vo2Max: 43.2 },
  { name: "Apr", vo2Max: 44.1 },
  { name: "May", vo2Max: 44.8 },
  { name: "Jun", vo2Max: 45.2 },
]

const biologicalAgeData = [
    { name: "Q1 '23", age: 34.2 },
    { name: "Q2 '23", age: 33.8 },
    { name: "Q3 '23", age: 33.5 },
    { name: "Q4 '23", age: 33.1 },
    { name: "Q1 '24", age: 32.8 },
    { name: "Q2 '24", age: 32.5 },
]

const sleepQualityData = [
  { name: "Jan", score: 82 },
  { name: "Feb", score: 85 },
  { name: "Mar", score: 84 },
  { name: "Apr", score: 86 },
  { name: "May", score: 88 },
  { name: "Jun", score: 89 },
]

const stressResilienceData = [
  { name: "Jan", score: 72 },
  { name: "Feb", score: 68 },
  { name: "Mar", score: 75 },
  { name: "Apr", score: 78 },
  { name: "May", score: 76 },
  { name: "Jun", score: 75 },
]

const heartRateData = [
    { name: "Jan", restingHR: 70, hrv: 55 },
    { name: "Feb", restingHR: 68, hrv: 58 },
    { name: "Mar", restingHR: 66, hrv: 62 },
    { name: "Apr", restingHR: 65, hrv: 65 },
    { name: "May", restingHR: 64, hrv: 68 },
    { name: "Jun", restingHR: 62, hrv: 70 },
]

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg border bg-background p-2 shadow-sm">
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col space-y-1">
              <span className="text-[0.70rem] uppercase text-muted-foreground">
                {label}
              </span>
              {payload.map((pld: any, index: number) => (
                <span key={index} className="font-bold" style={{ color: pld.color }}>
                  {pld.value}
                </span>
              ))}
            </div>
          </div>
        </div>
      );
    }
  
    return null;
  };

const ProgressReport = () => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="font-headline">Progress & Reports</CardTitle>
        <CardDescription>Monthly summaries and quarterly deep-dives on key metrics.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-2">VO₂max Trend</h4>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={vo2MaxData}>
                    <defs>
                        <linearGradient id="colorVo2Max" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} domain={['dataMin - 1', 'dataMax + 1']}/>
                    <Tooltip content={<CustomTooltip />} />
                    <Area type="monotone" dataKey="vo2Max" stroke="hsl(var(--chart-1))" strokeWidth={2} fillOpacity={1} fill="url(#colorVo2Max)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Biological Age</h4>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={biologicalAgeData}>
                    <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} domain={['dataMin - 1', 'dataMax + 1']}/>
                    <Tooltip content={<CustomTooltip />} />
                    <Line type="monotone" dataKey="age" stroke="hsl(var(--chart-2))" strokeWidth={2} dot={{ r: 4, fill: "hsl(var(--chart-2))" }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Sleep Quality Score</h4>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sleepQualityData}>
                    <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false}/>
                    <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="score" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Stress Resilience</h4>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={stressResilienceData}>
                    <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false}/>
                    <Tooltip content={<CustomTooltip />} />
                    <Line type="monotone" dataKey="score" stroke="hsl(var(--chart-4))" strokeWidth={2} dot={{ r: 4, fill: "hsl(var(--chart-4))" }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
        </div>
        <div>
            <h4 className="font-semibold text-lg mb-2">Heart Rate Trends</h4>
            <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                <LineChart data={heartRateData}>
                    <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis yAxisId="left" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis yAxisId="right" orientation="right" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend iconSize={10} />
                    <Line yAxisId="left" type="monotone" dataKey="restingHR" name="Resting HR" stroke="hsl(var(--chart-1))" strokeWidth={2} />
                    <Line yAxisId="right" type="monotone" dataKey="hrv" name="HRV" stroke="hsl(var(--chart-5))" strokeWidth={2} />
                </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProgressReport;
