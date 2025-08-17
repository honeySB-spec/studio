"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowDown, ArrowRight, ArrowUp, Calendar, CheckCircle, FileText, FlaskConical, Heart, TestTube2, Brain, Bone } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const upcomingTests = [
    { name: "Comprehensive Blood Panel", date: "June 15, 2025", status: "Scheduled" },
    { name: "Genetic Test", date: "September 1, 2025", status: "Scheduled" },
    { name: "VO₂ Max Fitness Test", date: "Due in 2 weeks", status: "Pending" },
];

const testResults = {
    bloodMarkers: [
        { name: "ApoB", value: "86 mg/dL", range: "< 90", trend: "down", status: "green", change: "-15%" },
        { name: "hs-CRP", value: "1.5 mg/L", range: "< 1.0", trend: "down", status: "yellow", change: "-32%" },
        { name: "HbA1c", value: "5.4 %", range: "< 5.7", trend: "stable", status: "green", change: "0%" },
        { name: "Vitamin D", value: "28 ng/mL", range: "30-100", trend: "down", status: "yellow", change: "-10%" },
    ],
    cardioHealth: [
        { name: "Resting HR", value: "62 bpm", range: "60-100", trend: "down", status: "green", change: "-9%" },
        { name: "HRV (avg)", value: "70 ms", range: "> 50", trend: "up", status: "green", change: "+30%" },
    ],
};

const historicalData = [
    { date: "Q4 '24", ApoB: 102, hsCRP: 2.2 },
    { date: "Q1 '25", ApoB: 94, hsCRP: 1.8 },
    { date: "Q2 '25", ApoB: 86, hsCRP: 1.5 },
]

const testLibrary = [
    { name: "ApoB (Apolipoprotein B)", description: "Measures the primary protein on LDL cholesterol particles. It's a more accurate predictor of cardiovascular risk than LDL-C alone." },
    { name: "hs-CRP (high-sensitivity C-reactive protein)", description: "A marker of inflammation in the body. Elevated levels can indicate an increased risk for cardiovascular events." },
    { name: "HRV (Heart Rate Variability)", description: "Measures the variation in time between each heartbeat. A higher HRV is generally a sign of a well-balanced, resilient autonomic nervous system." },
];

const TestResults = () => {
    const getTrendIcon = (trend: string) => {
        if (trend === 'up') return <ArrowUp className="h-4 w-4 text-green-500" />;
        if (trend === 'down') return <ArrowDown className="h-4 w-4 text-green-500" />; // Usually down is good for markers
        return <ArrowRight className="h-4 w-4 text-gray-500" />;
    };

    const getStatusBadge = (status: string) => {
        if (status === 'green') return <Badge variant="outline" className="text-green-600 border-green-600">Optimal</Badge>;
        if (status === 'yellow') return <Badge variant="outline" className="text-yellow-600 border-yellow-600">Borderline</Badge>;
        return <Badge variant="destructive">Needs Action</Badge>;
    };

    return (
        <div className="space-y-8">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline text-3xl flex items-center gap-3">
                        <TestTube2 className="h-8 w-8 text-primary" />
                        Test Panel Results
                    </CardTitle>
                    <CardDescription>
                        A comprehensive overview of your diagnostic tests, trends, and insights.
                    </CardDescription>
                </CardHeader>
            </Card>

            <Tabs defaultValue="results">
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="upcoming">Upcoming Tests</TabsTrigger>
                    <TabsTrigger value="results">Recent Results</TabsTrigger>
                    <TabsTrigger value="history">Historical View</TabsTrigger>
                    <TabsTrigger value="library">Test Library</TabsTrigger>
                </TabsList>

                <TabsContent value="upcoming" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Upcoming & Scheduled Tests</CardTitle>
                            <CardDescription>2 of 4 quarterly tests completed this year.</CardDescription>
                            <Progress value={50} className="mt-2" />
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Test Name</TableHead>
                                        <TableHead>Due Date</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead className="text-right">Action</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {upcomingTests.map(test => (
                                        <TableRow key={test.name}>
                                            <TableCell className="font-medium">{test.name}</TableCell>
                                            <TableCell>{test.date}</TableCell>
                                            <TableCell>
                                                <Badge variant={test.status === 'Scheduled' ? 'default' : 'secondary'}>{test.status}</Badge>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <Button variant="ghost" size="sm">
                                                    <Calendar className="mr-2 h-4 w-4" />
                                                    Schedule
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="results" className="mt-6">
                    <Accordion type="multiple" defaultValue={['bloodMarkers', 'cardioHealth']} className="w-full space-y-4">
                        <AccordionItem value="bloodMarkers">
                            <AccordionTrigger className="p-4 bg-muted/50 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <FlaskConical className="h-6 w-6 text-primary" />
                                    <span className="font-headline text-xl">Blood Markers</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="p-2">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Biomarker</TableHead>
                                            <TableHead>Result</TableHead>
                                            <TableHead>Optimal Range</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead>Trend</TableHead>
                                            <TableHead>Action</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {testResults.bloodMarkers.map(marker => (
                                            <TableRow key={marker.name}>
                                                <TableCell className="font-medium">{marker.name}</TableCell>
                                                <TableCell>{marker.value}</TableCell>
                                                <TableCell>{marker.range}</TableCell>
                                                <TableCell>{getStatusBadge(marker.status)}</TableCell>
                                                <TableCell className="flex items-center gap-1">{getTrendIcon(marker.trend)} {marker.change}</TableCell>
                                                <TableCell>
                                                     <Button variant="link" size="sm" className="h-auto p-0">View Plan</Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                                <Card className="mt-4 bg-primary/5 border-primary/20">
                                    <CardHeader>
                                        <CardTitle className="text-lg flex items-center gap-2">
                                            <Brain className="h-5 w-5 text-primary" />
                                            AI Insight
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-primary/90">Your ApoB has dropped by 15% and hs-CRP by 32%, moving you closer to optimal ranges. This is likely due to your consistent intake of soluble fiber and improved exercise routine. The slight dip in Vitamin D is common and can be addressed with supplementation.</p>
                                    </CardContent>
                                </Card>
                            </AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="cardioHealth">
                            <AccordionTrigger className="p-4 bg-muted/50 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <Heart className="h-6 w-6 text-red-500" />
                                    <span className="font-headline text-xl">Cardio Health</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="p-2">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Metric</TableHead>
                                            <TableHead>Result</TableHead>
                                            <TableHead>Optimal Range</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead>Trend</TableHead>
                                            <TableHead>Action</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {testResults.cardioHealth.map(marker => (
                                            <TableRow key={marker.name}>
                                                <TableCell className="font-medium">{marker.name}</TableCell>
                                                <TableCell>{marker.value}</TableCell>
                                                <TableCell>{marker.range}</TableCell>
                                                <TableCell>{getStatusBadge(marker.status)}</TableCell>
                                                <TableCell className="flex items-center gap-1">{getTrendIcon(marker.trend)} {marker.change}</TableCell>
                                                <TableCell>
                                                     <Button variant="link" size="sm" className="h-auto p-0">View Plan</Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                                <Card className="mt-4 bg-green-500/5 border-green-500/20">
                                    <CardHeader>
                                        <CardTitle className="text-lg flex items-center gap-2">
                                            <Brain className="h-5 w-5 text-green-600" />
                                            AI Insight
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-green-700/90">Your resting heart rate and HRV show significant improvement, indicating better autonomic balance and cardiovascular fitness. This is strongly correlated with your consistent Zone 2 cardio and improved sleep quality.</p>
                                    </CardContent>
                                </Card>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </TabsContent>

                <TabsContent value="history" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Historical Comparison</CardTitle>
                            <CardDescription>Track your key biomarkers over time to see your progress.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={historicalData}>
                                        <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                                        <YAxis yAxisId="left" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                                        <YAxis yAxisId="right" orientation="right" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                                        <Tooltip />
                                        <Bar yAxisId="left" dataKey="ApoB" fill="hsl(var(--chart-1))" name="ApoB (mg/dL)" />
                                        <Bar yAxisId="right" dataKey="hsCRP" fill="hsl(var(--chart-2))" name="hs-CRP (mg/L)" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="library" className="mt-6">
                     <Card>
                        <CardHeader>
                            <CardTitle>Test Panel Library</CardTitle>
                            <CardDescription>Learn about the biomarkers we track and why they matter for your health.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {testLibrary.map(test => (
                                <div key={test.name} className="p-4 bg-muted/50 rounded-lg">
                                    <h4 className="font-semibold">{test.name}</h4>
                                    <p className="text-sm text-muted-foreground">{test.description}</p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default TestResults;
