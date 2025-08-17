"use client"

import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const bloodMarkerData = [
  { name: "Jan", Cholesterol: 180, Glucose: 90 },
  { name: "Feb", Cholesterol: 185, Glucose: 92 },
  { name: "Mar", Cholesterol: 182, Glucose: 88 },
  { name: "Apr", Cholesterol: 178, Glucose: 85 },
  { name: "May", Cholesterol: 175, Glucose: 86 },
  { name: "Jun", Cholesterol: 172, Glucose: 84 },
]

const cognitiveScoreData = [
  { name: "Q1 '23", score: 80 },
  { name: "Q2 '23", score: 82 },
  { name: "Q3 '23", score: 85 },
  { name: "Q4 '23", score: 88 },
  { name: "Q1 '24", score: 92 },
]

const ProgressReport = () => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="font-headline">Progress & Reports</CardTitle>
        <CardDescription>Monthly summaries and quarterly deep-dives on key metrics.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div>
          <h4 className="font-semibold text-lg mb-2">Blood Marker Trends</h4>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={bloodMarkerData}>
                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false}/>
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                    contentStyle={{
                        background: "hsl(var(--background))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)",
                    }}
                />
                <Legend iconSize={10} />
                <Bar dataKey="Cholesterol" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Glucose" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-2">Cognitive Score</h4>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={cognitiveScoreData}>
                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false}/>
                <Tooltip 
                    contentStyle={{
                        background: "hsl(var(--background))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)",
                    }}
                />
                <Line type="monotone" dataKey="score" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 4, fill: "hsl(var(--primary))" }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProgressReport;
