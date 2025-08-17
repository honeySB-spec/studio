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

const conversations: { [key: string]: any[] } = {
  Ruby: [
    { time: 'Mar 1, 9:20 AM', content: 'Good morning, Arjun 🌞 Yes, I’ll flag this to Advik. Thank you for sharing. Any late caffeine or heavy meals yesterday?' },
    { time: 'Mar 2, 8:15 AM', content: 'Gentle reminder — Rachel has updated your 2-week exercise block in the app. Today’s session is a mobility + strength circuit. Would you like me to block a 30-min slot in your calendar?' },
    { time: 'Mar 2, 8:22 AM', content: 'Done ✅ Invite sent.' },
    { time: 'Mar 5, 6:45 AM', content: 'Good morning. Quick note — we’re due for your 3-month diagnostic panel at the end of next week. I’ll schedule a home phlebotomy visit unless you prefer the lab clinic.' },
    { time: 'Mar 5, 7:00 AM', content: 'Confirmed. Friday next week at 9 AM. Fasting required.' },
    { time: 'Mar 6, 8:35 AM', content: 'Thanks for letting us know. I’ll coordinate a “Tokyo Travel Plan” for you by tomorrow — includes hotel gym options, portable snack suggestions, and timing adjustments.' },
    { time: 'Mar 7, 4:00 PM', content: 'Weekly Elyx Report 📊\n* Sleep: 2 nights disrupted (late meals, alcohol).\n* Exercise: 3/4 planned sessions completed 👍\n* Nutrition: Logged 4/7 days. Still room to reduce saturated fat.\n* Blood pressure: Morning averages improved — 132/84 → 126/81.\nNext week focus: travel protocol, diagnostic panel prep.' },
    { time: 'Mar 8, 7:45 AM', content: 'Safe travels today ✈️. Tokyo Travel Plan attached (PDF + calendar reminders). Includes recommended restaurants near your hotel with heart-healthy menus.' },
    { time: 'Mar 12, 8:50 AM', content: 'Friendly reminder — diagnostic panel scheduled next Friday at your residence, 9 AM. Please confirm once back in Singapore.' },
    { time: 'Mar 14, 3:30 PM', content: 'Weekly Elyx Report 📊\n* Travel week summary: 2 proper workouts, 3 mobility sessions.\n* Sleep: Below baseline (average recovery 42%).\n* Nutrition: Managed well despite work dinners.\n* BP: Slightly elevated, monitoring continues.\nFocus for next week: Diagnostic panel, reset post-travel, ApoB-targeted nutrition.' },
    { time: 'Mar 18, 7:55 AM', content: 'I’ll also block a 30-min evening slot for stretching. Helps with circulation post-flight.' },
    { time: 'Mar 20, 9:00 AM', content: 'Reminder — tomorrow morning at 9 AM, phlebotomist will arrive at your residence for your 3-month diagnostic panel. Please fast from midnight tonight (water allowed).' },
    { time: 'Mar 21, 9:00 AM', content: 'Phlebotomist is at your residence now. They’ll need ~20 mins. I’ll follow up once the samples are dispatched.' },
    { time: 'Mar 21, 11:15 AM', content: 'Samples have been sent to the lab. We should have results by mid-next week. Dr. Warren will then consolidate and share recommendations.' },
    { time: 'Mar 23, 10:00 AM', content: 'Weekly Elyx Report 📊\n* Exercise: 3/5 planned sessions completed (one skipped post-blood draw).\n* Sleep: Recovery improved after Tokyo return.\n* Nutrition: Sodium-heavy meals noted during travel. Post-trip adjustment underway.\n* BP: Averaged 129/82 this week, slight improvement from last week’s elevated readings.\nNext week → review blood panel results, reset structured plan for Q2.' },
    { time: 'Mar 24, 8:30 AM', content: 'Good morning! Rachel has released your updated 2-week workout block (March 24 – April 6). It includes progressive resistance sessions + mobility work. Would you like a quick video walkthrough today?' },
    { time: 'Mar 25, 7:10 AM', content: 'Preliminary blood test results are in. Dr. Warren will review them in detail and share later today.' },
    { time: 'Mar 27, 7:10 AM', content: 'I’ll cancel today’s gym slot so you can focus on rest.' },
    { time: 'Mar 29, 9:30 AM', content: 'I’ll also send Carla’s list of KL restaurants with lighter options near your hotel. That way your plan stays intact while traveling.' },
    { time: 'Mar 30, 3:00 PM', content: 'Weekly Elyx Report 📊\n* Diagnostics: Completed, results reviewed.\n* ApoB: Slight rise, interventions strengthened.\n* Exercise: 4/6 sessions, 1 missed due to low recovery.\n* Nutrition: Logged 5/7 days, improving variety of whole foods.\n* Sleep: 2 poor nights, 2 strong recoveries.\nNext week → KL travel plan, maintaining momentum despite meetings.' },
    { time: 'Apr 1, 8:15 AM', content: 'Good morning Arjun 🌞 Hope your trip to KL is going smoothly. Quick reminder: tomorrow you have a scheduled coaching session with Rachel at 7 PM SGT. She’ll focus on reviewing your form for dumbbell rows and squats.' },
    { time: 'Apr 3, 10:35 AM', content: 'I’ll order and have it delivered by Saturday morning.' },
    { time: 'Apr 4, 9:00 AM', content: 'Checking in — any issues with logistics from this week? Travel went smoothly, chef coordinated with Carla’s food plan?' },
    { time: 'Apr 6, 5:00 PM', content: 'Weekly Elyx Report 📊\n* Exercise: 4 sessions completed (2 gym, 2 hotel modifications).\n* Sleep: Average recovery 55%, improving since travel.\n* Nutrition: Psyllium trial started, 1 sodium-heavy day in KL.\n* BP: Avg 127/81 this week, more stable.\n* Stress: One flagged low recovery day, managed adaptively.\nFocus for next week → consistency at home, monitor psyllium tolerance, progress Zone 2 duration.' },
    { time: 'Apr 9, 8:20 AM', content: 'Of course. I’ll create a Jakarta Travel Protocol with: hotel gym adaptations, nearby healthy dining options, hydration strategies for the hot/humid climate. You’ll have it by Sunday.' },
    { time: 'Apr 11, 7:50 AM', content: 'Good morning. Just confirming — your Q2 review call with Dr. Warren and Neel is scheduled for April 19 at 10 AM SGT, after you return from Jakarta. Agenda: review labs, update interventions, and refine targets for the next quarter.' },
    { time: 'Apr 13, 4:00 PM', content: 'Weekly Elyx Report 📊\n* Exercise: 5/6 sessions completed, first full 35-min Zone 2 week.\n* Sleep: Average recovery 61% (best in 2 months).\n* Nutrition: Psyllium integrated, no GI issues. Exploring beetroot trial.\n* BP: Week avg 125/80, very stable.\n* Travel Prep: Jakarta protocol drafted, review tomorrow.' },
    { time: 'Apr 14, 7:00 AM', content: 'Good morning. Jakarta protocol has been uploaded to your app. Includes:\n1. Hydration + salt strategy for humid conditions.\n2. Hotel gym adaptation plan.\n3. Meal guide for local restaurants.\n4. 10-min morning mobility flow for travel days.' },
    { time: 'Apr 15, 6:15 AM', content: 'Good morning, Arjun. ✈️ Safe travels to Jakarta today. Just a reminder: follow the hydration protocol — 500ml water with electrolytes before boarding, and stand up every 45 mins during flight if possible.' },
    { time: 'Apr 18, 6:45 AM', content: 'Reminder — flight back tonight at 9:20 PM. Don’t forget to switch back to Singapore time cues quickly: dinner by 7:30 PM local, then no food until breakfast at SG time. Helps with circadian reset.' },
    { time: 'Apr 19, 10:35 AM', content: 'I’ll handle scheduling + travel planning. Updated Q2 plan will be uploaded by EOD.' },
    { time: 'Apr 20, 5:00 PM', content: 'Weekly Elyx Report 📊\n* Travel: Jakarta protocol mostly followed, 3/4 workouts completed.\n* Sleep: Recovery disrupted on 2 nights, improving on return.\n* Nutrition: 1–2 fried meals/day in Jakarta, otherwise managed.\n* BP: Stable, average 126/80.\n* Major milestone: Q2 strategy formalized.' },
    { time: 'Apr 24, 7:30 AM', content: 'Just a heads-up — May 3rd is available for Rachel’s in-person barbell coaching at your home gym. Shall I book?' },
    { time: 'Apr 24, 7:35 AM', content: 'Confirmed. Invite sent.' },
    { time: 'Apr 30, 8:30 AM', content: 'End of April summary uploaded to your Plan. Highlights:\n* ApoB-focused nutrition interventions launched.\n* Zone 2 duration steadily increasing.\n* BP trending downward.\n* Stress resilience strategies in place.\nMay → deeper strength training progression, tighter nutrition tracking, and preparation for June diagnostics.' },
    { time: 'May 2, 9:10 AM', content: 'Just confirming — Rachel’s in-person coaching session is tomorrow at 10 AM in your home gym. She’ll focus on barbell technique and progressions.' },
    { time: 'May 4, 4:30 PM', content: 'Weekly Elyx Report 📊\n* Exercise: 5/6 sessions completed, first barbell coaching successful.\n* Sleep: Avg recovery 65%, no red-zone days.\n* Nutrition: Psyllium well tolerated, beetroot pre-exercise ongoing.\n* BP: Avg 124/79 this week, stable.\nFocus next week → strength increments, meal variety expansion, and prep for mid-June diagnostics.' },
    { time: 'May 8, 8:05 AM', content: 'Friendly reminder — your June diagnostic panel is due in 5 weeks. I’ll schedule a home phlebotomy slot for June 13. Does that date work?' },
    { time: 'May 8, 8:15 AM', content: 'Done ✅. Booked at 8:30 AM. Fasting required.' },
    { time: 'May 11, 4:00 PM', content: 'Weekly Elyx Report 📊\n* Exercise: 5/6 sessions, first proper week with barbell lifts.\n* Sleep: Avg recovery 62%. Two late-night work calls affected HRV.\n* Nutrition: Variety added at breakfast, psyllium adherence 6/7 days.\n* BP: Avg 122/78, excellent 👏.' },
    { time: 'May 14, 7:15 AM', content: 'Thanks for the heads-up. I’ll prepare a Bangkok Travel Protocol by Sunday — hotel gym adaptations, restaurant guide, and hydration strategy for the hot climate.' },
    { time: 'May 18, 5:00 PM', content: 'Weekly Elyx Report 📊\n* Exercise: 4/6 sessions, one intentionally swapped for recovery.\n* Sleep: Avg recovery 58% (one red zone day).\n* Nutrition: Fiber improved (avg 31g/day), beetroot continued.\n* BP: Avg 123/79, steady.\nFocus → Prepare for Bangkok travel, sustain momentum, avoid overtraining.' },
    { time: 'May 20, 8:20 AM', content: 'Bangkok Travel Protocol ready ✅\n1. Hotel gym adaptation (DB + treadmill sessions).\n2. Restaurant guide (focus on grilled fish, papaya salad, tom yum without coconut cream).\n3. Hydration → 2.5L/day, especially in heat.\n4. Jet-lag minimizer routine uploaded.' },
    { time: 'May 21, 6:30 AM', content: 'Safe travels today, Arjun. Stick to water + protein-rich snacks on flight. Avoid heavy carbs that may cause sluggishness.' },
    { time: 'May 24, 6:45 AM', content: 'Morning. Reminder for return flight: same hydration protocol as Jakarta. Also, push dinner earlier in SG time once you land to ease circadian rhythm.' },
    { time: 'May 25, 4:30 PM', content: 'Weekly Elyx Report 📊\n* Travel: 3/4 planned workouts completed in Bangkok.\n* Nutrition: Mostly clean, 2 high-sodium meals noted.\n* BP: Slight travel-related spike, back to baseline on return.\n* Sleep: Avg recovery 55% (disrupted hotel nights).\nNext focus → ramp back training load, sustain nutrition for June labs.' },
    { time: 'Jun 1, 4:00 PM', content: 'Weekly Elyx Report 📊\n* Exercise: 5/6 sessions, 1 red-zone recovery day observed.\n* Zone 2: First full week at 40 mins per session ✅.\n* Strength: Squat/deadlift form stable at current loads.\n* Nutrition: Fiber intake consistent (avg 33g/day).\n* BP: Avg 122/78, very controlled.\nFocus → prepare for June 13 diagnostic panel. Maintain hydration + minimize alcohol until labs.' },
    { time: 'Jun 9, 9:00 AM', content: 'Just a reminder — phlebotomist booked for Friday, June 13 at 8:30 AM. Please fast from midnight Thursday. Only water allowed.' },
    { time: 'Jun 13, 8:25 AM', content: 'Good morning. Phlebotomist will be at your residence in 5 mins. Setup is ready.' },
    { time: 'Jun 13, 9:10 AM', content: 'Blood draw completed successfully. Samples dispatched to the lab. Expected turnaround: 3 business days. Dr. Warren will review as soon as results arrive.' },
    { time: 'Jun 14, 10:00 AM', content: 'Weekly Elyx Report 📊\n* Exercise: 5/6 sessions, deloaded today post-labs.\n* Sleep: Avg recovery 64%, stable.\n* Nutrition: Fiber + beetroot consistently followed.\n* BP: Avg 121/77, best so far.\n* Labs: Draw complete, results expected mid-next week.' },
    { time: 'Jun 15, 5:00 PM', content: 'Weekly Elyx Report 📊\n* Exercise: 4/6 sessions (deload due to lab week).\n* Sleep: Avg recovery 61%, stable.\n* Nutrition: Compliance strong — psyllium daily, beetroot pre-exercise.\n* BP: Avg 122/78.\n* Labs: Results expected tomorrow, review call to be scheduled mid-week.' },
    { time: 'Jun 16, 11:45 AM', content: 'Lab results are in ✅. Dr. Warren is reviewing with the team today. We’ll schedule your lab review call for Wednesday at 7 PM. Does that time work?' },
    { time: 'Jun 21, 9:00 AM', content: 'Just confirming — Q3 strategy summary uploaded in your app:\n1. ApoB target: <80 by September.\n2. Exercise: Maintain Zone 2, add weekly HIIT, progress strength lifts.\n3. Nutrition: Mediterranean + 2 plant-based nights.\n4. Stress: Reinforce digital cut-off routine (9 PM).' },
    { time: 'Jun 22, 5:00 PM', content: 'Weekly Elyx Report 📊\n* Exercise: 5/6 sessions (first week with HIIT).\n* Sleep: Avg recovery 60%, one red day after HIIT.\n* Nutrition: Fiber + Mediterranean compliance high.\n* BP: Avg 121/76.\n* Labs: Reviewed, targets updated.' },
    { time: 'Jul 1, 7:30 AM', content: 'Good morning, Arjun 🌞. Welcome to Q3! Here’s your July overview:\n1. Maintain Zone 2 (40 mins, 3×/week).\n2. Add structured HIIT (1×/week, short intervals).\n3. Continue barbell progressions — focus on form & incremental load.\n4. Nutrition: Mediterranean + 2 plant-based dinners per week.\n5. Stress reset: Digital cut-off at 9 PM, daily 10-min breathing.\nI’ll also confirm logistics for your Hong Kong business trip (July 9–12).' },
    { time: 'Jul 5, 9:00 AM', content: 'Prepping your Hong Kong Travel Protocol:\n* Hotel gym assessment: They have DBs up to 25 kg + cardio machines. Rachel will adapt workouts.\n* Meals: Suggested restaurants near your hotel → lean Cantonese options (steamed fish, congee, stir-fried greens).\n* Hydration: Weather is hot + humid, target 3L/day.\n* Sleep: Avoid late dim sum dinners with clients; meals past 9 PM hurt HRV.\nI’ll send the full PDF by Monday.' },
    { time: 'Jul 6, 5:00 PM', content: 'Weekly Elyx Report 📊\n* Exercise: 5/6 sessions (including first HIIT).\n* Zone 2: All 3 sessions completed at 40 mins.\n* Strength: Squat now at 75 kg, form safe.\n* Nutrition: Mostly Mediterranean; 2 indulgent meals logged.\n* BP: Avg 122/77.\nNext week → travel-proof the program, manage late meals during Hong Kong trip.' },
    { time: 'Jul 9, 6:45 AM', content: 'Safe travels, Arjun. ✈️ Same hydration protocol: 500ml water + electrolytes pre-flight, avoid alcohol in the air.' },
    { time: 'Jul 12, 8:30 AM', content: 'Return flight today ✈️. Adjust back to Singapore time ASAP: dinner before 8 PM SG time, no screens after landing.' },
    { time: 'Jul 13, 5:00 PM', content: 'Weekly Elyx Report 📊\n* Travel: Hong Kong trip — 2 banquets, 2 hotel gym workouts.\n* Sleep: Disrupted during trip (avg 5h 40m).\n* Nutrition: Banquets were heavy, but breakfasts/lunches balanced.\n* BP: Slight spike during travel, back to 124/79 on return.\nNext focus → strengthen sleep hygiene, sustain HIIT progression.' },
    { time: 'Jul 15, 7:30 AM', content: 'Good morning, Arjun 🌞. Now that you’re back from Hong Kong, this week’s focus is:\n1. Re-establish sleep rhythm (target: 7h+ nightly).\n2. Resume structured HIIT (Thursday).\n3. Increment barbell lifts safely.\n4. Stress reset routine (daily 10-min breathing or journaling).\nI’ll also confirm your August Manila trip dates later this week.' },
    { time: 'Jul 20, 5:00 PM', content: 'Weekly Elyx Report 📊\n* Exercise: 5/6 sessions, including 1 HIIT + 3 strength + 2 Zone 2.\n* Strength: Deadlift up to 72.5 kg, squat steady at 75 kg.\n* Recovery: Avg 63% (improved with breathing drills).\n* Nutrition: High compliance; 1 late-night heavy meal logged.\n* BP: Avg 122/78.\nFocus next week → 7 HIIT intervals, introduce hip thrusts, sustain sleep hygiene.' },
    { time: 'Jul 21, 8:15 AM', content: 'Confirmed — your Manila trip is August 6–10. I’ll start preparing a Manila Travel Protocol (hotel gym, dining strategies, hydration). Expect it next week.' },
    { time: 'Jul 27, 5:00 PM', content: 'Weekly Elyx Report 📊\n* Exercise: 6/6 sessions ✅ (first week with 7 HIIT intervals).\n* Strength: Squat 77.5 kg, deadlift 72.5 kg, hip thrusts introduced.\n* Recovery: Avg 65%, breathing routine adherence 5/7 nights.\n* Nutrition: 2 plant-based dinners (chickpea + lentil).\n* BP: Avg 121/76.\nExcellent consistency this week, Arjun. 👏' },
    { time: 'Jul 31, 8:30 AM', content: 'End of month snapshot 📊\n* July was your strongest month yet:\n• HIIT progressed from 6 → 7 intervals.\n• Squat now at 77.5 kg, deadlift steady.\n• Plant-based nutrition integrated smoothly.\n• Average BP 121/77 across July.\n• Recovery trendline upward.\nNext phase → August travel-proofing + sustaining momentum toward September labs.' },
    { time: 'Aug 1, 7:30 AM', content: 'Good morning, Arjun 🌞. August priorities are:\n1. Manila trip support (Aug 6–10).\n2. Sustain 7 HIIT intervals weekly (possible to adapt on road).\n3. Progress squat to 80 kg if form remains crisp.\n4. Maintain ≥2 plant-based dinners/week.\n5. Reinforce nightly stress reset (breathing or journaling).\nThis month is about resilience in variable environments.' },
    { time: 'Aug 5, 9:00 AM', content: 'Manila Travel Protocol ready ✅. Key points:\n1. Hotel gym: Treadmills, DBs up to 25 kg, resistance bands. Rachel will provide a minimalist strength + Zone 2 template.\n2. Dining strategy: Prioritize grilled bangus, vegetable adobo, mongo soup, chicken tinola. Avoid deep-fried street snacks + excess lechon.\n3. Alcohol: Limit to 2 glasses max on client dinners.\n4. Hydration: 3L/day in humid climate.\n5. Recovery: Try 15-min walk post-dinners to blunt glucose spikes.' },
    { time: 'Aug 6, 6:20 AM', content: 'Safe travels today ✈️. Same hydration protocol: 500ml electrolytes pre-flight, water only onboard, avoid alcohol.' },
    { time: 'Aug 10, 9:00 AM', content: 'Safe flight back today, Arjun. Remember → dinner at home before 8 PM SG time to re-anchor circadian rhythm.' },
    { time: 'Aug 11, 7:30 AM', content: 'Quick recap from Manila 🌍:\n* 3 banquets → 2 navigated with smart swaps, 1 heavier meal (noted).\n* 2 hotel gym sessions completed.\n* BP spiked only mildly, back to 122/78 this morning.\n* Alcohol intake within limits.\nGreat resilience overall.' },
    { time: 'Aug 14, 5:00 PM', content: 'Weekly Elyx Report 📊\n* Travel: Manila trip navigated well.\n* Exercise: 4 structured sessions, 2 adapted hotel workouts.\n* Nutrition: Smart swaps at 2/3 banquets, 2 plant-based meals achieved.\n* BP: Avg 123/78.\n* Recovery: Slight dips during client dinners, but rebounded quickly.\nOverall → resilient execution.' },
    { time: 'Aug 15, 7:15 AM', content: 'Welcome back into home rhythm, Arjun 🌞. Focus for this week:\n1. Prioritize consistent sleep (7.5h+ per night).\n2. Resume HIIT progression (aim: 7 intervals this week, 8 next).\n3. Consolidate squat at 80 kg, introduce accessory work.\n4. Hit ≥2 plant-based dinners.\n5. Psyllium + hydration routine daily.' },
    { time: 'Aug 21, 5:00 PM', content: 'Weekly Elyx Report 📊\n* Exercise: 5/6 sessions (3 strength, 2 Zone 2, 1 HIIT).\n* Strength: Squat consolidated at 80 kg; hip thrusts introduced.\n* Sleep: Avg 6h 55m — trending up, but still below target.\n* Nutrition: 2 plant-based dinners completed.\n* BP: Avg 122/78.\nNext focus → test 8 HIIT intervals, aim for ≥7h sleep average.' },
    { time: 'Aug 22, 9:00 AM', content: 'Checking in on sleep — any improvements with magnesium + box breathing?' },
    { time: 'Aug 31, 5:00 PM', content: 'End of August Elyx Summary 📊\n* Exercise: 21 structured sessions completed (12 strength, 7 Zone 2, 2 HIIT).\n* Strength: Squat consolidated at 80 kg, deadlift 75 kg, hip thrust 60 kg.\n* HIIT: Progressed to 8 intervals, milestone achieved.\n* Sleep: Avg 7h 10m, improved consistency.\n* Nutrition: 8 plant-based dinners, psyllium daily, salt intake mostly controlled.\n* BP: Monthly avg 122/77.\n* Mindset: Resilience tools (breathing, micro-breaks) now integrated.\nNext → early September diagnostic panel to quantify ApoB progress.' },
    { time: 'Sep 1, 7:15 AM', content: 'Good morning, Arjun 🌞. Today’s your quarterly diagnostic panel. Reminder: 12h fasting (only water, black coffee allowed). Lab slot is confirmed at 8:30 AM at Raffles Medical, Orchard.' },
    { time: 'Sep 2, 9:30 AM', content: 'Labs collected successfully ✅. Results expected by Thursday. Dr. Warren will review and we’ll schedule a full team debrief for Friday evening.' },
    { time: 'Sep 4, 2:10 PM', content: 'Results are in 📑. Highlights:\n* ApoB: 79 mg/dL (down from 86 in June 🎉).\n* LDL-C: dropped another 10%.\n* hs-CRP: 1.6 (improved from 2.1).\n* HbA1c: 5.3 (stable, normal).\n* BP (24h monitor): 121/76.\nWe’ll review in detail tomorrow.' },
    { time: 'Sep 7, 5:00 PM', content: 'Weekly Elyx Report 📊\n* Labs: ApoB hit 79 mg/dL (target achieved).\n* Exercise: 5/6 sessions, HIIT capped at 8 intervals.\n* Strength: Squat stable at 80 kg, hip thrust 60 kg.\n* Sleep: Avg 7h 20m.\n* BP: Avg 121/77.\nNext week → begin performance stretch phase (new HIIT protocol + unilateral work).' },
    { time: 'Sep 14, 5:00 PM', content: 'Weekly Elyx Report 📊\n* Exercise: 6/6 sessions ✅ (including new HIIT format).\n* Strength: Squat steady at 80 kg, deadlift 77.5 kg, unilateral training added.\n* Nutrition: Chia/flax now daily, 2 plant-based dinners achieved.\n* Sleep: Avg 7h 15m (late dinners reduced).\n* BP: Avg 123/78, slight stress spikes noted.\nBig picture: ApoB target achieved and maintained, performance progression on track, stress tools being applied.' },
    { time: 'Sep 15, 7:20 AM', content: 'Good morning, Arjun 🌞. This week’s anchor points:\n1. Consolidate new mixed HIIT (4×30s + 2×1min).\n2. Deadlift progression toward 80 kg.\n3. At least 2 plant-based dinners.\n4. Daily stress resets (box breathing, micro-walks).\n5. Prioritize pre-8:30 PM dinners for sleep quality.' },
    { time: 'Sep 21, 5:00 PM', content: 'Weekly Elyx Report 📊\n* Exercise: 5/6 sessions. Deadlift milestone: 80 kg.\n* HIIT: 2 mixed sessions (both completed).\n* Strength: Added unilateral work, progressing well.\n* Nutrition: 2 plant-based dinners, fermented food started.\n* BP: Avg 124/78 (mild spikes with stress).\n* Sleep: Avg 7h 05m.\nFocus for next week → grip strength, more consistent stress resets, integrate fermented foods smoothly.' },
    { time: 'Sep 22, 7:25 AM', content: 'New week focus 🌿:\n1. Farmer’s carries for grip + stability.\n2. Repeat mixed HIIT, then attempt 3×1min intervals by Sunday.\n3. Maintain pre-8:30 PM dinner cutoff.\n4. 3 fermented food servings.\n5. Consistent micro-stress breaks at work.' },
    { time: 'Sep 30, 7:30 AM', content: 'End of Quarter Report 📊\n* ApoB: Achieved <80 (currently 79).\n* Strength: Deadlift 80 kg, squat stable at 80 kg, unilateral work added.\n* HIIT: Progressed to 3×1min intervals + 4×30s sprints.\n* Nutrition: Psyllium daily, plant-based dinners consistent, fermented foods integrated.\n* Sleep: Avg 7h 15m (best trend since program start).\n* BP: Controlled, avg 123/78 with fewer stress spikes.\n* Mindset: Journaling + micro-breaks showing real-time impact.\nNext phase → Q4 will emphasize longevity layering: refining recovery, optimizing body composition, and preparing for year-end diagnostics.' },
    { time: 'Oct 1, 7:20 AM', content: 'Happy October, Arjun 🍂. New quarter priorities:\n1. Refine body composition — target slight fat reduction while preserving strength.\n2. Expand recovery toolkit (contrast showers, guided breathwork nights).\n3. Progress strength: deadlift → 82.5 kg, squat hold at 80 kg.\n4. HIIT: stabilize mixed sessions (3×1min + 4×30s).\n5. Mindset: continue journaling + integrate “Sunday reset ritual.”' },
    { time: 'Oct 7, 5:00 PM', content: 'Weekly Elyx Report 📊\n* Strength: Deadlift 82.5 kg milestone, grip stronger.\n* HIIT: 2 mixed sessions complete.\n* Recovery: Contrast showers introduced, HRV avg 53 ms.\n* Nutrition: Evening carbs reduced, protein intact, 2 plant-based meals.\n* Sleep: Avg 7h 20m.\n* BP: 122/77.\nFocus next week → tempo squats, sustain calorie shift, Sunday ritual v2.' },
    { time: 'Oct 14, 5:00 PM', content: 'Weekly Elyx + mid-October Report 📊\n* Strength: Tempo squats added, deadlift steady at 82.5 kg.\n* HIIT: Consistent mixed sessions, HRV dipped slightly post-Saturday but recovered.\n* Recovery: 2 contrast showers, avg HRV 52 ms.\n* Nutrition: Evenings lighter, sodium balanced with potassium foods.\n* Sleep: Avg 7h 05m (some dips from workload).\n* BP: 123/78, stable.\n* Mindset: Sunday ritual now routine.\nStrategic note: You’ve now entered longevity layering — refining the small margins that compound. Q4 will be about sustainability and depth, not chasing big new numbers.' },
    { time: 'Oct 15, 7:10 AM', content: 'Good morning, Arjun 🌞. This week’s Q4 priorities:\n1. Maintain HIIT load (3×1min + 4×30s).\n2. Progress tempo squats to 70 kg.\n3. Keep dinners pre-8:30 PM.\n4. Include fermented foods 3x/week.\n5. Practice Sunday reset + journaling.' },
    { time: 'Oct 21, 5:00 PM', content: 'Weekly Elyx Report 📊\n* Exercise: 5/6 sessions, tempo squats 70 kg achieved.\n* HIIT: 2 mixed sessions complete.\n* Nutrition: 2 plant-based dinners + kimchi + kombucha added.\n* Recovery: 2 contrast showers; HRV avg 52 ms.\n* Sleep: Avg 6h 55m (dips due to restlessness midweek).\n* BP: 123/78.\nFocus next week → business trip to Kuala Lumpur, maintain travel protocols.' },
    { time: 'Oct 22, 9:00 AM', content: 'Reminder: Kuala Lumpur trip Oct 24–28. Travel pack prepared:\n* Supplements + psyllium sachets.\n* Elastic bands for hotel workouts.\n* Travel meal guide uploaded (hotel breakfast swaps, local food options).' },
    { time: 'Oct 28, 9:30 PM', content: 'Welcome back! How was KL?' },
  ],
  Advik: [
    { time: 'Mar 1, 9:30 AM', content: 'Hi Arjun. I’m looking at your data now. Elevated resting HR and suppressed HRV overnight confirm your poor sleep. Alcohol + late meals are usually the culprits. Let’s log this as a learning point. Try to stop meals 3h before bed this week and let’s see if sleep rebounds.' },
    { time: 'Mar 9, 7:35 AM', content: 'Given recovery <40%, today stick to mobility + walking. No intense training. The goal is to bounce back quickly from travel stress.' },
    { time: 'Mar 11, 6:45 AM', content: 'Excellent signal ✅. Your HR zone is well calibrated now. We’ll compare with your data back in Singapore next week.' },
    { time: 'Mar 18, 7:50 AM', content: 'Yes, very normal. Long-haul travel disrupts circadian rhythm and increases sympathetic drive. Your elevated resting HR confirms it. Today → light activity only. Walk 20–25 mins outside, plenty of water, and try a 15-min sunlight exposure before 10 AM. This accelerates circadian reset.' },
    { time: 'Mar 22, 8:45 AM', content: 'That’s interesting. Your HRV spiked back to 52 ms (vs. 40 average), suggesting your body is bouncing back from travel fatigue. Quality > duration sometimes. Let’s lock in the progress — no late meals, no alcohol tonight.' },
    { time: 'Mar 22, 8:57 AM', content: 'If unavoidable, at least stop eating 2h before bed and stick to water after dinner.' },
    { time: 'Mar 27, 6:55 AM', content: 'Looking at your data → respiratory rate up, resting HR elevated. Likely mild infection or stress load. Any sore throat, congestion?' },
    { time: 'Mar 27, 7:05 AM', content: 'Okay — take today light. Avoid strenuous training, hydrate aggressively, and do a short walk outside. Your body is signaling it needs recovery.' },
    { time: 'Mar 31, 8:10 AM', content: 'Travel + late meals again showing up in data. Let’s keep today’s target minimal — a 20-min treadmill Zone 2 session, then early bedtime. We’ll try to stabilize your system before you return to Singapore.' },
    { time: 'Apr 2, 7:55 AM', content: 'Looking at your data — your HRV dropped 10 ms overnight, and resting HR is elevated. That points toward systemic stress, maybe from travel. I’d recommend keeping the intensity lower. Rachel can adapt the session to focus more on mobility + form drills rather than heavy lifts.' },
    { time: 'Apr 7, 7:20 AM', content: 'Morning, Arjun. Based on your Whoop trend, we can progress Zone 2 training to 35 mins today. Keep pre-hydration protocol. If dizziness occurs, stop immediately.' },
    { time: 'Apr 8, 7:00 AM', content: 'Excellent 👏 This confirms your system is tolerating progression well. We’ll hold at 35 mins for 3 more sessions this week, then reassess.' },
    { time: 'Apr 16, 7:40 AM', content: 'Looking at your data feed — elevated resting HR + suppressed HRV. Today keep it light: 20 min Zone 2 treadmill only. Skip strength. Goal = stabilize nervous system.' },
    { time: 'Apr 21, 7:15 AM', content: 'Morning, Arjun. Ready to progress Zone 2 to 38 mins today. Please hydrate before and after — weather is very humid this week in Singapore.' },
    { time: 'Apr 25, 8:25 AM', content: 'Not placebo. Beetroot-derived nitrates improve blood vessel dilation → better oxygen delivery. Your HRV post-session was 12% higher than baseline. Promising signal.' },
    { time: 'Apr 29, 7:15 AM', content: 'Yes, your Whoop journal showed late-night work emails + screen time. Cortisol spikes can suppress HRV. Let’s make tonight a strict digital cut-off at 9 PM. Add 10 mins of Dr. Evans’ breathing exercise before bed.' },
    { time: 'May 7, 7:00 AM', content: 'Yes, but keep it easy. Cap HR at 120 bpm (bottom of Zone 2). Think “recovery cardio” today, not performance.' },
    { time: 'May 15, 7:55 AM', content: 'Reviewing your data → HRV dropped, resting HR slightly elevated. This could be cumulative load from strength + Zone 2 sessions. Today, swap barbell work for a 30-min walk outdoors. Let’s give your system a buffer before Bangkok.' },
    { time: 'May 30, 6:45 AM', content: 'Data check → recovery trending up (avg 66% this week), HRV 49 ms (your best in 2 months). Let’s extend Zone 2 to 40 min sessions starting tomorrow. This will be your new standard.' },
    { time: 'May 31, 9:15 AM', content: 'Fantastic. This shows cardiovascular efficiency improving. You’ve hit one of our Q2 targets early.' },
    { time: 'Jun 7, 7:15 AM', content: 'Data check → recovery 70% average this week, HRV at 50 ms (your best baseline yet). This tells me your nervous system has fully adapted to the load. June results should reflect this positive shift.' },
    { time: 'Jun 14, 6:40 AM', content: 'No intense exercise today, Arjun. Just 20–30 min light movement. After a blood draw, your body benefits from recovery.' },
    { time: 'Jun 20, 6:55 AM', content: 'That’s expected. We’ll cap HIIT at 1 session/week for now. It’s a nervous system stressor — balance with recovery.' },
    { time: 'Jun 28, 9:30 AM', content: 'Reviewing your Whoop — HRV baseline creeping upward (52 ms avg this week). This shows your nervous system is adapting to the new load. Very promising heading into Q3.' },
    { time: 'Jul 2, 7:00 PM', content: 'Perfect start 💪. HR peaked at 172 bpm, recovery between sets looked good. Keep it capped at 6 intervals for now. Over July, we’ll build toward 8.' },
    { time: 'Jul 7, 7:40 AM', content: 'Correct — blue light + late emails. Tonight → strict digital cut-off 9 PM. Add 10-min breathing drill before bed. Let’s test if recovery rebounds.' },
    { time: 'Jul 11, 7:35 AM', content: 'Excellent recovery strategy. Data shows HRV ticked back up to 44 ms. Movement offset the banquet stress.' },
    { time: 'Jul 14, 7:10 AM', content: 'Recovery 61% this morning — much better than during travel. Let’s reintroduce HIIT this Thursday. Stick with 6 intervals, no jump yet.' },
    { time: 'Jul 17, 7:05 AM', content: 'Great trend 👏. Cardiovascular adaptation is kicking in. Next week we’ll progress to 7 intervals. Important: keep sleep consistent so recovery supports this load.' },
    { time: 'Jul 19, 8:40 AM', content: 'Yes — breathing lowers sympathetic drive before sleep. Even modest shifts can nudge HRV upward. Consistency will compound.' },
    { time: 'Jul 24, 7:15 AM', content: 'Fantastic 👏. That’s a big cardiovascular stressor. Make today’s nutrition recovery-friendly → protein + carbs post-session, avoid heavy fats. Your nervous system will thank you.' },
    { time: 'Aug 8, 7:15 AM', content: 'Excellent counterbalance. Zone 2 after banquet dinners is powerful for recovery + metabolic reset. Data shows HRV rebounded to 46 ms this morning.' },
    { time: 'Aug 13, 7:00 AM', content: 'Makes sense. Skip HIIT today, swap for a 30-min evening walk. Protect nervous system first. Tomorrow → resume normal programming.' },
    { time: 'Aug 16, 10:40 AM', content: 'This is common after travel. Try:\n* 5 min box breathing before bed (4-4-4-4 cycle).\n* Bedroom at 20–21°C.\n* Magnesium glycinate with dinner.\nIf you wake at night → avoid phone, just slow breathe until drift back.' },
    { time: 'Aug 21, 7:15 AM', content: 'Completed 7×30s sprints, 90s rest. HR peaked 178 bpm. Felt smoother than before.' },
    { time: 'Aug 22, 9:20 AM', content: 'That’s a breakthrough. Deep sleep pushes parasympathetic balance, which lowers long-term cardiovascular risk. Keep ritualized.' },
    { time: 'Aug 27, 7:00 AM', content: 'Phenomenal milestone 👏. That’s true VO₂ expansion territory. Very few can sustain this consistently. Monitor recovery tonight — it will be a nervous system stressor.' },
    { time: 'Sep 5, 7:35 PM', content: 'Sleep gains are translating directly to recovery scores. HRV has held in the 50s — excellent adaptation. Since you’re tolerating 8 HIIT intervals, next step is exploring mixed-intensity sessions (4 intervals short, 2 intervals longer at 1 min each). Variety builds VO₂ more efficiently.' },
    { time: 'Sep 8, 7:15 AM', content: 'Reviewing data — late dinner at 9:45 PM caused elevated overnight HR (avg 64 vs 58). Digestion pushed back deep sleep. Tonight, eat by 8 PM latest. We’ll compare HR overnight.' },
    { time: 'Sep 11, 7:25 AM', content: 'That’s exactly the adaptation we want. Short + long intervals expand both anaerobic power and aerobic base. Watch recovery — hydrate well + carb-protein refuel within 60 min.' },
    { time: 'Sep 18, 6:45 AM', content: 'Perfectly executed. Today, prioritize nutrient timing: protein + carbs within 30 min, hydration with electrolytes. Nervous system load is high, so recovery rituals matter.' },
    { time: 'Sep 25, 6:55 AM', content: 'That’s excellent threshold work. We’ll cap it there — no need to push beyond. This level builds VO₂ + lactate tolerance. Critical for long-term performance.' },
    { time: 'Sep 28, 10:25 AM', content: 'Beautiful adaptation. Shows your nervous system is stabilizing under higher training loads. This is where true longevity gains happen.' },
    { time: 'Oct 4, 9:10 AM', content: 'Perfect response. Contrast showers improve circulation, lower inflammation, and can boost HRV. Great tool post-intense sessions. Use max 2–3x/week.' },
    { time: 'Oct 8, 6:55 AM', content: 'On red recovery days → skip HIIT. Do Zone 2 walk instead. Nervous system needs downshift. That balance is what creates long-term gains.' },
    { time: 'Oct 11, 7:45 AM', content: 'That’s elite adaptation. Your VO₂ ceiling is climbing. Very few maintain this consistently. Ensure today’s post-workout recovery is strict (contrast shower + carb/protein refuel).' },
    { time: 'Oct 16, 6:50 AM', content: 'Understood. Two things:\n1. Cut caffeine post-2 PM.\n2. Add 10 min guided breathwork at 9 PM.\nYour sleep latency data shows restlessness; this will downshift your nervous system.' },
    { time: 'Oct 23, 6:45 AM', content: 'Excellent pre-travel buffer. Now during KL trip → minimum 2 Zone 2 walks and 1 bodyweight circuit. We’ll reassess HIIT after return.' },
    { time: 'Oct 30, 7:00 AM', content: 'That rebound is excellent. Confirms your baseline resilience has improved dramatically.' },
  ],
  Rachel: [
    { time: 'Mar 2, 8:25 AM', content: 'Arjun, quick note — focus on form for the goblet squats. Keep heels grounded. Send me a quick video if you feel any discomfort.' },
    { time: 'Mar 6, 9:00 AM', content: 'Arjun, while traveling, aim for 20–25 mins bodyweight circuits daily. I’ll prep a “hotel room workout” for you. No excuses 😉' },
    { time: 'Mar 9, 7:40 AM', content: 'Agreed. Just do 10 mins hip openers + core activation. Sending you a short video now.' },
    { time: 'Mar 20, 4:30 PM', content: 'Arjun, since you’re fasting tomorrow morning, avoid intense exercise pre-blood draw. Just do gentle mobility or skip training entirely.' },
    { time: 'Mar 21, 6:50 PM', content: 'That’s okay, expected. Do light walking or mobility tomorrow, and resume strength routine Sunday.' },
    { time: 'Mar 24, 8:40 PM', content: 'Perfect, I’ll send short demos for deadlifts and overhead press — two lifts we’ll emphasize this block.' },
    { time: 'Mar 28, 11:00 AM', content: 'Since your recovery is still low, let’s pivot this week. Instead of pushing progression, we’ll focus on maintaining baseline movement. Please try the 15-min mobility circuit I shared earlier. It keeps joints active without stressing the system.' },
    { time: 'Mar 29, 9:25 AM', content: 'Yes — I’ll build a “hotel version” of your current block. Focus: dumbbell rows, goblet squats, push-ups, planks. 25–30 mins total.' },
    { time: 'Apr 1, 8:25 AM', content: 'Perfect. Bring any questions you have from the hotel workouts — I’ll tailor the session to make sure you’re confident with substitutions.' },
    { time: 'Apr 2, 8:00 AM', content: 'Agreed. We’ll make it a “movement quality” session, not a load progression. The idea is to keep your joints and posture aligned without stressing recovery further.' },
    { time: 'Apr 9, 8:25 AM', content: 'I’ll also design a short “jet-lag minimizer” routine you can do in the hotel room on arrival — 15 mins mobility + light cardio bursts.' },
    { time: 'Apr 15, 9:40 AM', content: 'Once you land, try the 10-min mobility flow I uploaded: hip openers + spinal rotations + 2 mins plank. It’ll shake off stiffness from the flight.' },
    { time: 'Apr 19, 10:30 AM', content: 'Structurally, I’d like one in-person session in May to ensure barbell technique is safe. Ruby can coordinate.' },
    { time: 'Apr 23, 9:55 AM', content: 'Okay — likely form fatigue. Send me a short video clip next time. I’ll analyze your mechanics. We want to fix this before adding heavier loads.' },
    { time: 'May 1, 8:25 AM', content: 'Since recovery looks good (green zone, 72% today), let’s go for your strength session. Use the extra time to film your squat and deadlift for me. We’ll analyze technique ahead of our in-person session this weekend.' },
    { time: 'May 3, 10:05 AM', content: 'Great session today, Arjun. Key notes:\n* Your squat depth is fine, but brace harder at the bottom.\n* Deadlift → keep bar closer to shins, avoid rounding.\n* We’ll add 2.5 kg increments weekly if form stays solid.' },
    { time: 'May 10, 10:40 AM', content: 'Your video from yesterday’s squats looks much improved — knees tracking better. Deadlift still rounding slightly at heavier loads. Next week, reduce to 60 kg until form is locked in. Safety first.' },
    { time: 'May 15, 8:00 AM', content: 'Good call. No heavy lifts today. Just mobility + light movement.' },
    { time: 'May 17, 10:30 AM', content: 'Checked your squat video — form looks excellent now. Let’s progress deadlifts back to 65 kg next week, but stop immediately if you feel rounding.' },
    { time: 'May 22, 7:30 AM', content: 'No problem. Here’s a travel workout:\n* Goblet squats 3×12\n* DB rows 3×10/side\n* Push-ups 3×15\n* Plank 3×45s\nFinish with 15–20 min treadmill Zone 2.' },
    { time: 'May 27, 8:15 AM', content: 'That’s excellent 👏. We’ll add 2.5 kg next week if form stays clean. Please send me another video at 70 kg.' },
    { time: 'Jun 4, 6:45 AM', content: 'Reviewing your last video — deadlifts are much tighter now. Core brace has improved. Next step: add paused squats (hold 2 sec at bottom). This builds stability for heavier loads later.' },
    { time: 'Jun 18, 7:25 PM', content: 'Structurally, your barbell work is strong. This month, we’ll shift focus slightly toward unilateral balance work (lunges, step-ups) to bulletproof joints. This prevents asymmetry as loads rise.' },
    { time: 'Jun 24, 7:25 AM', content: 'Send me a quick video. Likely an alignment tweak — don’t push through pain. For now, reduce to bodyweight paused squats until I analyze.' },
    { time: 'Jul 4, 6:55 PM', content: 'Excellent 👏. Depth is good, core engagement solid. Next week add paused squats at 65 kg for stability. Think of them as “control builders.”' },
    { time: 'Jul 18, 6:55 PM', content: 'Excellent progression 💪. From here → we’ll add hip thrusts once a week. Strong glutes = safer deadlifts + BP-friendly posture improvements. I’ll share a video guide.' },
    { time: 'Jul 25, 6:55 PM', content: 'That’s expected. Paused squats are stability builders. Think of them as insurance for heavier lifts. Next week → maintain 65 kg paused, but let’s nudge your regular squat to 80 kg if form remains crisp.' },
    { time: 'Aug 4, 6:50 PM', content: 'Excellent milestone 👏. At this stage, consistency > chasing max loads. We’ll hold 80 kg for 2 weeks to solidify form. Meanwhile, continue paused squats at 65 kg.' },
    { time: 'Aug 12, 6:50 PM', content: 'That’s a great sign 👏. Shows your base strength is holding steady. Next week, let’s add accessory work: single-leg step-ups + hip thrusts. This will keep structural balance.' },
    { time: 'Aug 18, 7:00 PM', content: 'Excellent execution 👏. Hip thrusts will accelerate posterior chain strength. Next week → increase hip thrusts to 60 kg if form remains clean.' },
    { time: 'Aug 25, 6:50 PM', content: 'Excellent. Let’s maintain squats steady, deadlifts can progress +2.5 kg weekly. Goal = safe structural progression, not chasing max loads.' },
    { time: 'Sep 9, 6:40 PM', content: 'That’s exactly why we’re adding them. Barbell strength builds load tolerance, but unilateral work builds control and stability. Expect soreness tomorrow.' },
    { time: 'Sep 17, 7:05 PM', content: 'Excellent progression 👏. To support grip, we’ll add farmer’s carries next week. These build grip + core simultaneously.' },
    { time: 'Sep 23, 7:00 PM', content: 'Exactly the point. These will bulletproof grip + shoulders. Keep it at 3 sets, progress to longer carries over weeks.' },
    { time: 'Oct 3, 6:55 PM', content: 'Brilliant 👏. You’re building both load tolerance and stability. Next → add tempo squats (lowering phase 3 seconds). Builds control + muscle endurance.' },
    { time: 'Oct 9, 7:00 PM', content: 'Exactly! Tempo training exposes weaknesses and builds control. Keep it at 3 sets × 5 reps @ 65 kg for now. We’ll build gradually.' },
    { time: 'Oct 17, 7:00 PM', content: 'That’s exactly the adaptation we want 👏. You’re building endurance + control. Keep load steady at 70 kg for 2 weeks before progressing.' },
    { time: 'Oct 24, 7:30 PM', content: 'No problem. I’ll send you a travel circuit:\n* Dumbbell goblet squats 3×12\n* Push-ups 3×15\n* Band rows 3×12\n* Plank 3×45s\nSimple but effective.' },
    { time: 'Oct 25, 8:45 AM', content: 'Excellent. Keep intensity high since load is lower. Focus on form + tempo.' },
  ],
  "Dr. Warren": [
    { time: 'Mar 3, 8:10 AM', content: 'Good question, Arjun. Yes, ApoB was included. Your result was 92 mg/dL — borderline elevated. This is why Carla and I have prioritized fiber + exercise consistency. We’ll re-test in 6 weeks with your next quarterly panel to see if interventions are working.' },
    { time: 'Mar 13, 11:30 AM', content: 'Thanks for flagging. Swelling can have many causes — from high salt meals (common in Japan) to prolonged sitting. Check your BP today. If it’s significantly above baseline, we’ll adjust. Otherwise, hydrate and keep legs elevated when possible.' },
    { time: 'Mar 13, 11:45 AM', content: 'Mild rise, likely diet-related. No immediate concern, but we’ll re-check after you return. Please keep logs daily.' },
    { time: 'Mar 25, 3:00 PM', content: 'Arjun, I’ve reviewed your panel. Key highlights:\n* ApoB: 94 mg/dL (still elevated, up slightly from 92).\n* Fasting glucose: 95 mg/dL (within normal).\n* hs-CRP: 1.8 (borderline inflammation).\n* BP log confirms mild elevation, but trending better post-travel.\nPlan:\n1. Carla will tighten nutrition for ApoB (more soluble fiber, less red meat).\n2. Rachel to maintain progressive Zone 2 + resistance training.\n3. Re-test in June.' },
    { time: 'Mar 25, 3:25 PM', content: 'Yes, but minor. Variability happens. What matters is sustained trend across months. Let’s reinforce consistency.' },
    { time: 'Apr 12, 8:45 AM', content: 'Good question. Beetroot is rich in nitrates, which can improve endothelial function and lower BP modestly. It’s generally safe and can be a useful adjunct. Carla can recommend a brand that doesn’t have excess sugar.' },
    { time: 'Apr 19, 10:15 AM', content: 'To add — your BP trend is encouraging (avg 125/80 last two weeks). If sustained, we’ll consider discussing a taper of your antihypertensive medication by Q3.' },
    { time: 'May 9, 9:15 AM', content: 'Red yeast rice contains monacolin K (a natural statin). It can lower LDL/ApoB, but potency varies and some formulations are unregulated. Since you’re tolerating lifestyle interventions well, I suggest holding off for now. If ApoB remains elevated in June, we can revisit.' },
    { time: 'May 23, 8:20 AM', content: 'Likely salt-driven. Short-term spikes happen during travel. Hydrate well today, aim for light meals. No clinical concern as long as baseline trends remain stable.' },
    { time: 'Jun 3, 8:05 AM', content: 'Great question. Beetroot doesn’t interfere with cholesterol or ApoB labs. You can continue. Just avoid supplements like biotin or high-dose vitamin C 48h before as they can distort results.' },
    { time: 'Jun 18, 7:00 PM', content: 'Evening, Arjun. Let’s review your results:\n* ApoB: Down from 94 → 86. Significant improvement 👏.\n* LDL-C: Reduced by 15%.\n* BP (24h monitor): Avg 121/77. Controlled.\n* hs-CRP: Slightly elevated at 2.1 → likely travel-related inflammation.\n* Fasting glucose & HbA1c: Both normal.\nOverall, excellent progress. ApoB is trending in the right direction, validating psyllium + dietary shifts.' },
    { time: 'Jun 18, 7:15 PM', content: 'Correct. No meds needed at this stage. We’ll continue lifestyle-first, reassess in September.' },
    { time: 'Jul 10, 10:40 PM', content: 'That’s fine, expected post high-salt meal. Hydrate before sleep, and take a light breakfast tomorrow (fruit + porridge). Trend matters, not one reading.' },
    { time: 'Aug 2, 12:15 PM', content: 'Great question. Fish oil (EPA/DHA) can help lower triglycerides, but ApoB responds more strongly to dietary fiber + reduced saturated fat. Since your triglycerides are already normal, focus remains on fiber and Mediterranean diet. Supplements aren’t priority yet.' },
    { time: 'Aug 7, 11:30 PM', content: 'That’s within acceptable range. Smart swaps helped. Hydrate well tonight, and keep breakfast light tomorrow. Good resilience.' },
    { time: 'Aug 24, 4:10 PM', content: 'Excellent question. Poor sleep → increases cortisol → worsens lipid metabolism + endothelial stress. Chronic short sleep can blunt benefits of diet/exercise on ApoB. That’s why Elyx insists on making sleep a non-negotiable pillar.' },
    { time: 'Sep 5, 7:00 PM', content: 'Arjun, congratulations. ApoB under 80 is a major milestone — you’ve reached optimal cardiovascular risk territory. Your lipid particle count is now aligned with longevity protocols.' },
  ],
  Carla: [
    { time: 'Mar 4, 11:05 AM', content: 'Hi Arjun, I noticed from your food log photo yesterday you had chicken rice for lunch. Delicious 😋, but it was quite high in saturated fat. For blood pressure + ApoB, let’s aim for more oily fish and beans this week. Would you like me to send a simple lunch swap list that works around hawker food in Singapore?' },
    { time: 'Mar 4, 11:20 AM', content: 'Sending you a list now. One easy option: Sliced fish soup (no fried bits, go light on the MSG broth). It’s heart-friendly and easy when you’re out.' },
    { time: 'Mar 10, 12:25 PM', content: 'Enjoy the dinner! Here’s what you can do:\n* Choose leaner cuts (sirloin > short rib).\n* Pair with rice + veggies, avoid creamy sides.\n* Drink water or tea, skip sugary drinks.\n* Stop when 80% full (Japanese “Hara Hachi Bu” principle).' },
    { time: 'Mar 19, 8:15 AM', content: 'Morning Arjun. Welcome back. For post-travel recovery + BP stability, let’s keep sodium low for 2–3 days. I’ve shared a meal plan with more fruits, vegetables, and whole grains. Have Suzane coordinate with your chef.' },
    { time: 'Mar 19, 8:25 AM', content: 'Exactly. That likely explains the ankle swelling you noticed. Hydration + potassium-rich foods (bananas, spinach, avocado) will help rebalance.' },
    { time: 'Mar 26, 9:20 AM', content: 'Following Dr. Warren’s analysis, I’ve updated your plan with weekly “fiber targets.” We’ll aim for 30g/day. I’ll coordinate with your chef to include oats, lentils, and chia puddings.' },
    { time: 'Mar 26, 9:30 AM', content: 'Absolutely — roasted chickpeas, high-fiber protein bars, apple + almond butter packs. I’ll send you a list with brands available in Singapore supermarkets.' },
    { time: 'Apr 3, 10:20 AM', content: 'Arjun, following up from your latest labs — ApoB was slightly elevated. To address this, I want to introduce a 2-week trial of psyllium husk supplement (5g daily, mixed in water). Evidence shows it lowers ApoB and LDL by binding cholesterol in the gut.' },
    { time: 'Apr 3, 10:28 AM', content: 'Neutral taste, just gritty texture. Best to mix in a smoothie or shake. Alternatively, I can recommend capsules, though powder is usually more effective.' },
    { time: 'Apr 4, 9:15 AM', content: 'That’s great feedback. Quinoa is a good soluble fiber source and provides magnesium, which also helps with BP regulation.' },
    { time: 'Apr 5, 11:25 AM', content: 'Yes, that’s the fiber expanding. It increases satiety, which can also help reduce snacking. Make sure you’re drinking at least 2L of water daily when taking it to avoid digestive discomfort.' },
    { time: 'Apr 10, 9:30 AM', content: 'Quick nutrition tip: Jakarta meals often come fried or heavy in oils. I recommend you look for grilled satay (skip the peanut sauce if it’s too sweet) and gado-gado salad with dressing on the side. I’ll add a printable guide for common dishes.' },
    { time: 'Apr 12, 8:50 AM', content: 'Yes, I’ll shortlist a couple of cold-pressed options available locally. You could try 100ml pre-exercise to also support endurance.' },
    { time: 'Apr 17, 12:15 PM', content: 'That’s fine, one meal won’t undo progress. For dinner → look for grilled fish or gado-gado salad with dressing on the side. Limit fried foods to once a day max while here. I’ll message you 3 restaurant options near your hotel that have good lighter menus.' },
    { time: 'Apr 19, 10:25 AM', content: 'Nutrition next step — I’ll work with your chef to build a Mediterranean rotation (fish, olive oil, legumes, nuts). Evidence-based for ApoB and BP.' },
    { time: 'Apr 22, 8:10 AM', content: 'Common at the start. Your gut is adjusting to increased fiber load. Try splitting into 2 doses (morning + evening). And keep water >2.5L/day. That usually resolves it.' },
    { time: 'Apr 26, 10:00 AM', content: 'Chef Javier sent me his new menu plan. Highlights:\n* Dinner: Grilled seabass with lentils.\n* Breakfast: Oat-chia bowls with berries.\n* Snacks: Roasted chickpeas, mixed nuts.\nThis aligns well with Mediterranean + ApoB goals. Any preferences you’d like me to add?' },
    { time: 'Apr 26, 10:15 AM', content: 'Got it. I’ll add rotation: Greek yogurt parfaits, avocado + wholegrain toast, and egg-white omelets with veggies.' },
    { time: 'May 5, 7:20 AM', content: 'Morning, Arjun. Chef Javier and I updated your breakfast plan:\n* Mon/Wed/Fri → Greek yogurt with berries + flaxseed.\n* Tue/Thu → Egg-white omelet + avocado toast.\n* Sat/Sun → Oat-chia bowl rotation.\nThis keeps fiber intake high without monotony.' },
    { time: 'May 12, 8:25 AM', content: 'Quick update: beetroot juice trial looks positive (better endurance + HRV recovery). Let’s continue daily 100 ml before Zone 2 sessions until June labs.' },
    { time: 'May 16, 9:15 AM', content: 'Arjun, before Bangkok I want you to tighten fiber intake. We’re aiming for 32–35g/day consistently. I’ve asked Javier to add lentil soups at lunch and an extra fruit serving at dinner. This should help ApoB trajectory for June.' },
    { time: 'May 28, 7:00 AM', content: 'Checking in — any digestive discomfort from psyllium recently?' },
    { time: 'May 28, 7:10 AM', content: 'Great! That satiety effect is what helps both ApoB and weight control. Keep at it daily until June labs.' },
    { time: 'Jun 6, 8:30 AM', content: 'Arjun, since diagnostics are next week, keep sodium intake <2g/day for the next 5 days. This will give the most accurate reflection of your BP control. Javier has adjusted menus accordingly.' },
    { time: 'Jun 18, 7:20 PM', content: 'Next step — I want to tighten your Mediterranean rotation further. Adding 2 plant-based dinners/week (lentils, chickpeas, olive oil). Javier has already drafted recipes. This should push ApoB under 80 by Q3.' },
    { time: 'Jul 3, 12:25 PM', content: 'One indulgence won’t derail things. But yes, fried noodles = high refined carbs + oils. Think of it as 20% flexibility. Just balance dinner tonight with high fiber: lentil soup + mixed greens. The weekly average matters more than the single meal.' },
    { time: 'Jul 22, 12:15 PM', content: 'Absolutely ✅. Chickpeas provide soluble fiber + plant protein. We’re aiming for 2 plant-based dinners per week. This was perfect. Ask Javier to rotate lentils, kidney beans, black beans for variety.' },
    { time: 'Jul 24, 7:20 AM', content: 'I’ll ask Javier to prepare salmon + quinoa salad for lunch today. That’s ideal refuel.' },
    { time: 'Jul 29, 7:50 AM', content: 'I’ll prep a “smart swap” list for common Filipino dishes (grilled fish, vegetable adobo, mongo soup). Limit alcohol to 1–2 glasses max. Salt is the bigger concern than calories.' },
    { time: 'Aug 5, 9:10 AM', content: 'I’ll also prepare a “banquet smart swap list” so you don’t have to think in the moment.' },
    { time: 'Aug 9, 12:40 PM', content: 'Adobo is fine occasionally, but sodium is the challenge. Balance it by loading up on veggies tonight + psyllium at dinner. One salty meal isn’t an issue if the overall week stays balanced.' },
    { time: 'Aug 19, 12:30 PM', content: 'Fasting helps some people control weight and glucose, but for ApoB your current Mediterranean + fiber plan is stronger. Skipping meals may risk under-fueling strength + HIIT. Instead, focus on meal timing: keep dinners lighter, avoid eating past 9 PM. This supports both ApoB and sleep quality.' },
    { time: 'Aug 28, 12:30 PM', content: 'Reviewing your logs — sodium intake crept up earlier this week (restaurant meals). Let’s recalibrate with low-salt dinners Thurs–Sat. Suggested: grilled salmon + quinoa, lentil soup, veggie stir-fry. This will normalize BP before month-end.' },
    { time: 'Sep 5, 7:15 PM', content: 'Nutrition is clearly working — psyllium + Mediterranean + 2 plant-based nights are delivering. Next, I want to add flaxseed or chia seeds daily for additional soluble fiber + omega-3. Easy to blend into breakfast smoothies.' },
    { time: 'Sep 10, 12:30 PM', content: '2 tbsp/day is perfect. That’s ~10g fiber + omega-3 boost. More than 3 tbsp can cause GI issues. Rotate chia, flax, hemp seeds to keep nutrients varied.' },
    { time: 'Sep 18, 6:55 AM', content: 'I’ll message Javier to prep a post-workout shake (banana + whey + flaxseed). Quick absorption, plus omega-3 benefit.' },
    { time: 'Sep 19, 12:20 PM', content: 'Absolutely. Fermented foods (kimchi, sauerkraut, miso) improve microbiome balance, reduce systemic inflammation (which ties into CRP). Let’s add 3 servings/week. Easy starter: kimchi side at lunch.' },
    { time: 'Sep 24, 1:00 PM', content: 'Reviewing logs — salt slightly high last 2 days (sushi + hotpot). Balance with low-salt dinners for rest of week. Suggest miso soup + grilled tofu, light on soy sauce.' },
    { time: 'Sep 27, 9:40 AM', content: 'Not placebo. Fermented foods improve gut motility and microbiome diversity. Over months, this reduces systemic inflammation (hs-CRP). Keep it consistent.' },
    { time: 'Oct 2, 12:25 PM', content: 'We’ll use a slight calorie deficit (~200 kcal/day), focused on trimming evening carbs. No drastic cuts. Protein stays ≥1.6g/kg to protect muscle. Add 1 extra serving of greens at dinner. Target = slow fat reduction without strength loss.' },
    { time: 'Oct 10, 1:00 PM', content: 'Reviewing your logs — overall calories aligned, protein consistent, but sodium crept higher with 2 hawker meals this week. Suggest balance with potassium-rich foods: spinach, avocado, bananas. Helps stabilize BP.' },
    { time: 'Oct 18, 12:40 PM', content: 'Yes, but choose low-sugar varieties (≤5g/serving). Kombucha adds beneficial polyphenols + probiotics, but many commercial ones are sugar traps. 2–3x/week max.' },
    { time: 'Oct 26, 1:15 PM', content: 'Enjoy, but balance tonight with light dinner: steamed fish + greens. Travel isn’t about perfection, it’s about balance. ApoB won’t shift from a few heavy meals if weekly rhythm stays intact.' },
  ],
  Neel: [
    { time: 'Apr 13, 4:15 PM', content: 'That’s the point, Arjun. This consistency builds resilience. The Q2 review will help us lock in bigger goals — reducing ApoB by double digits and cementing exercise as a lifestyle, not just an intervention.' },
    { time: 'Apr 19, 10:00 AM', content: 'Good morning, Arjun. Thanks for joining the Q2 review. Here are the key themes:\n1. Autonomic + Cardiovascular Health: Zone 2 progression working well, target = reach 40 min stable sessions by June.\n2. Metabolic Markers: ApoB still elevated (94). New strategies: psyllium adherence + beetroot juice pre-exercise. If not improved in June labs, we may consider medication consult.\n3. Structural Health: Back pain stable. Rachel will progress you into Phase 2 strength program — introducing barbell work with form coaching.\n4. Stress Resilience: Whoop shows improvement in recovery trends; Dr. Evans’ stress-breathing exercise will remain a staple.' },
    { time: 'Apr 19, 10:40 AM', content: 'Excellent momentum, Arjun. Q2 is about consolidation. By end-June, our goal is: ApoB < 85, Zone 2 at 40 mins, and stable BP <125/80 consistently.' },
    { time: 'May 11, 4:15 PM', content: 'Arjun, this is your best BP trend since we started. June labs will show if ApoB responds as well. Keep this consistency — it’s paying off.' },
    { time: 'May 31, 9:20 AM', content: 'Exactly, Arjun. This is how we build long-term resilience. June labs will confirm if ApoB is finally trending down. Very proud of the consistency.' },
    { time: 'Jun 11, 7:45 AM', content: 'Totally natural to feel that way. Remember, we’re measuring progress over quarters, not weeks. Even if ApoB hasn’t shifted much yet, the foundation you’ve built (exercise, BP stability, fiber intake) will pay off over time. This is a long-term trajectory.' },
    { time: 'Jun 18, 7:35 PM', content: 'Strategically, Arjun, you’re on track. Q2 was about stabilizing; Q3 will be about performance expansion while continuing to lower ApoB.' },
    { time: 'Jun 30, 8:00 AM', content: 'Arjun, congratulations on a very strong Q2 🎉\nKey outcomes:\n* ApoB down 9%.\n* BP stabilized below 125/80.\n* Zone 2 progressed to 40 mins.\n* Strength training advanced safely with barbell lifts.\n* Travel-proofed routines (Tokyo, Jakarta, Bangkok).\nQ3 will be about performance expansion + further ApoB reduction. You’re well on your way to sustainable health independence.' },
    { time: 'Jul 13, 5:15 PM', content: 'Arjun, the big win here is resilience. Despite travel and late banquets, you didn’t lose momentum. That’s the difference between a “program” and a “lifestyle.”' },
    { time: 'Jul 19, 8:45 AM', content: 'Think of it like compound interest, Arjun. Each small recovery habit strengthens the foundation for long-term performance.' },
    { time: 'Jul 29, 8:00 AM', content: 'Arjun, you’ve proven you can adapt on the road (Tokyo, Jakarta, Hong Kong). Manila will just be another test of consistency. Think of it as resilience training.' },
    { time: 'Aug 11, 7:45 AM', content: 'That’s exactly the point, Arjun. We want travel to add experiences, not setbacks. You’re learning to bend, not break.' },
    { time: 'Aug 30, 9:00 AM', content: 'Exactly. Stress physiology often outweighs diet/exercise acutely. Try micro-breaks:\n* 5 min walk between calls.\n* Box breathing before difficult meetings.\n* Reframing stressful situations (zoom out to long-term goals).\nThis is performance psychology as much as physiology.' },
    { time: 'Sep 5, 7:45 PM', content: 'Arjun, Q2 was stabilization. Q3 so far has been optimization. Now we’re entering Q3.5 — performance stretch phase: sustaining ApoB <80 while enhancing your athletic engine. The labs confirm we’re on the right track.' },
    { time: 'Sep 12, 3:15 PM', content: 'That’s acute stress load. Insert micro resets: 5 min walk outside after lunch, or 10 box breaths before intense calls. These reduce sympathetic drive. Long-term, BP averages are what matter — and yours are strong.' },
    { time: 'Sep 16, 3:25 PM', content: 'That’s acute reactivity. Try 2×5 min resets: one mid-afternoon, one pre-dinner. Add gratitude journaling tonight — mental decompression helps blunt cortisol spikes. Long-term, the goal is a calmer baseline despite stress.' },
    { time: 'Sep 26, 4:35 PM', content: 'Exactly. That’s progress — not avoiding stress, but recovering faster from it. Over time, this resilience matters as much as diet and exercise.' },
    { time: 'Oct 1, 7:40 AM', content: 'A weekly ritual to close your week with intention: short journaling, reviewing metrics, planning meals/workouts for next 7 days. This shifts you into proactive mode, reducing weekly friction.' },
    { time: 'Oct 5, 6:15 PM', content: 'That’s the exact purpose. Consistency here compounds — it reduces cognitive load during hectic weeks. A small habit, big ripple effect.' },
    { time: 'Oct 19, 6:15 PM', content: 'That’s a powerful mental shift, Arjun. True longevity work isn’t about chasing bigger metrics every week but embedding systems that keep you strong decades ahead. You’ve crossed into that mindset.' },
    { time: 'Oct 31, 7:00 PM', content: 'Arjun, let’s step back. Q4 is off to a strong start despite travel:\n* HIIT maintained pre-trip, circuits during KL.\n* Tempo squats steady at 70 kg.\n* Nutrition mostly on track, fermented foods consistent.\n* Stress rituals embedded (reset journaling + micro-breaks).\n* Recovery: HRV stable at 52–54 ms.\nNext phase → mid-November we’ll focus on body composition refinement with slightly tighter nutrition and progressive overload in strength training. Goal = enter December diagnostics with ApoB maintained <80 and overall resilience even higher.' },
  ]
};

const allMessagesFromUser: { [key: string]: any[] } = {
  Ruby: [
    { time: 'Mar 1, 9:12 AM', content: 'Morning Ruby, just noticed my Oura ring logged only 5h 20m of sleep. I went to bed at 11 but kept waking up. Is this something Advik should check?', isUser: true },
    { time: 'Mar 2, 8:20 AM', content: 'Please do 6:30 PM.', isUser: true },
    { time: 'Mar 5, 6:55 AM', content: 'Home visit, please.', isUser: true },
    { time: 'Mar 6, 8:20 AM', content: 'Travel update — I’m flying to Tokyo Monday morning for a week. How do we adjust exercise and food?', isUser: true },
    { time: 'Mar 6, 9:05 AM', content: 'Fair enough.', isUser: true },
    { time: 'Mar 7, 4:15 PM', content: 'Appreciate the summary. Makes sense.', isUser: true },
    { time: 'Mar 8, 7:50 AM', content: 'Got it. Boarding now.', isUser: true },
    { time: 'Mar 9, 7:20 AM', content: 'Morning from Tokyo. Didn’t sleep well again — new hotel bed. Whoop says recovery 36%. Should I still try Rachel’s workout?', isUser: true },
    { time: 'Mar 12, 9:05 AM', content: 'Confirmed. Landing Thursday night.', isUser: true },
    { time: 'Mar 14, 3:40 PM', content: 'Thanks, clear as always.', isUser: true },
    { time: 'Mar 18, 7:40 AM', content: 'Back from Tokyo late last night. Woke up groggy, Whoop recovery only 38%. Is this normal after flights?', isUser: true },
    { time: 'Mar 18, 7:57 AM', content: 'Please do, 7 PM.', isUser: true },
    { time: 'Mar 20, 9:05 AM', content: 'Acknowledged.', isUser: true },
    { time: 'Mar 21, 9:05 AM', content: 'All set, blood drawn.', isUser: true },
    { time: 'Mar 23, 10:15 AM', content: 'Understood. Looking forward to seeing my labs.', isUser: true },
    { time: 'Mar 24, 8:35 AM', content: 'Yes, 6 PM works.', isUser: true },
    { time: 'Mar 25, 7:12 AM', content: 'Great, waiting.', isUser: true },
    { time: 'Mar 27, 7:10 AM', content: 'I’ll cancel today’s gym slot so you can focus on rest.', isUser: true },
    { time: 'Mar 30, 3:20 PM', content: 'Thanks, clear summary.', isUser: true },
    { time: 'Apr 1, 8:20 AM', content: 'Thanks Ruby. KL schedule has been hectic. I’ll be back late tonight but should be fine for tomorrow.', isUser: true },
    { time: 'Apr 3, 10:30 AM', content: 'Let’s try powder for now.', isUser: true },
    { time: 'Apr 4, 9:10 AM', content: 'All good. Javier (chef) has been trying new recipes — had grilled salmon with quinoa yesterday. Quite good actually.', isUser: true },
    { time: 'Apr 6, 5:15 PM', content: 'Very clear summary, thank you.', isUser: true },
    { time: 'Apr 9, 8:10 AM', content: 'I have a work trip to Jakarta April 15–18. Can you build me a travel plan like we did for Tokyo?', isUser: true },
    { time: 'Apr 11, 7:55 AM', content: 'Locked in.', isUser: true },
    { time: 'Apr 14, 7:10 AM', content: 'Perfect. Will review tonight.', isUser: true },
    { time: 'Apr 15, 6:20 AM', content: 'Thanks Ruby, boarding now. Will do.', isUser: true },
    { time: 'Apr 18, 6:50 AM', content: 'Copy that.', isUser: true },
    { time: 'Apr 20, 5:10 PM', content: 'Good wrap-up, thanks.', isUser: true },
    { time: 'Apr 24, 7:32 AM', content: 'Yes, that works.', isUser: true },
    { time: 'Apr 30, 8:40 AM', content: 'Excellent. Feeling much more in control now than two months ago.', isUser: true },
    { time: 'May 2, 9:15 AM', content: 'Confirmed 👍.', isUser: true },
    { time: 'May 4, 4:40 PM', content: 'Feeling good, thanks team.' },
    { time: 'May 8, 8:10 AM', content: 'Yes, June 13 is fine.' },
    { time: 'May 14, 7:10 AM', content: 'Travel note — I’ll be in Bangkok May 21–24 for meetings. Need a short travel plan.' },
    { time: 'May 14, 7:20 AM', content: 'Perfect. Appreciate the planning.' },
    { time: 'May 18, 5:10 PM', content: 'Clear. Let’s keep building.' },
    { time: 'May 20, 8:25 AM', content: 'Perfect timing, I fly tomorrow.' },
    { time: 'May 21, 6:40 AM', content: 'Thanks Ruby, will follow.' },
    { time: 'May 25, 4:40 PM', content: 'Understood. Let’s reset this week.' },
    { time: 'Jun 1, 4:15 PM', content: 'Got it, thanks Ruby. Feels like I’m in good rhythm now.' },
    { time: 'Jun 9, 9:05 AM', content: 'Confirmed ✅.' },
    { time: 'Jun 13, 8:30 AM', content: 'All set.' },
    { time: 'Jun 13, 9:15 AM', content: 'Great, smooth process.' },
    { time: 'Jun 14, 10:10 AM', content: 'Waiting eagerly for the results.' },
    { time: 'Jun 15, 5:10 PM', content: 'Thanks, looking forward to seeing the results.' },
    { time: 'Jun 16, 11:50 AM', content: 'Yes, that’s good.' },
    { time: 'Jun 21, 9:05 AM', content: 'Downloaded. Thanks for keeping this so organized.' },
    { time: 'Jun 22, 5:10 PM', content: 'Good balance overall. I’ll keep refining sleep.' },
    { time: 'Jul 1, 7:40 AM', content: 'Great, clear structure. Excited for Q3.' },
    { time: 'Jul 5, 9:10 AM', content: 'Perfect. Clients already booked me for late banquets though — might be tough.' },
    { time: 'Jul 6, 5:10 PM', content: 'Very clear. Thanks, team.' },
    { time: 'Jul 9, 6:55 AM', content: 'Copy that. Already packed my psyllium too.' },
    { time: 'Jul 12, 8:40 AM', content: 'Noted. Will reset quickly.' },
    { time: 'Jul 15, 7:40 AM', content: 'Thanks Ruby. Feeling back in rhythm already.' },
    { time: 'Jul 21, 8:20 AM', content: 'Perfect, thanks.' },
    { time: 'Aug 1, 7:40 AM', content: 'Love the clarity, Ruby. Manila will be tricky, but let’s do this.' },
    { time: 'Aug 6, 6:30 AM', content: 'Copy that. Bags packed with psyllium too.' },
    { time: 'Aug 11, 7:40 AM', content: 'Honestly feel less guilty compared to past trips. That balance helped.' },
    { time: 'Aug 14, 5:10 PM', content: 'Thanks Ruby, feeling stronger in how I handle travel now.' },
    { time: 'Aug 15, 7:25 AM', content: 'Thanks Ruby. Really want to dial in sleep this cycle.' },
    { time: 'Aug 21, 5:10 PM', content: 'On it. Feeling stronger and steadier.' },
    { time: 'Aug 22, 9:10 AM', content: 'Yes! Past 3 nights avg 7h 20m. HRV mornings 50–53 ms. Definitely deeper sleep.' },
    { time: 'Aug 31, 5:10 PM', content: 'Thanks team 🙏. Feeling prepared and more balanced than ever. Bring on the labs.' },
    { time: 'Sep 1, 7:20 AM', content: 'Thanks Ruby, already fasting. Looking forward to seeing progress.' },
    { time: 'Sep 2, 9:35 AM', content: 'Perfect. Let’s hope ApoB keeps dropping.' },
    { time: 'Sep 4, 2:20 PM', content: 'YES 🙌! Under 80 — that was the goal.' },
    { time: 'Sep 7, 5:10 PM', content: 'Couldn’t have asked for a better week. Thanks, team.' },
    { time: 'Sep 15, 7:30 AM', content: 'Thanks Ruby. Let’s aim to hit all 5 this week.' },
    { time: 'Sep 21, 5:10 PM', content: 'Solid week overall. Journaling actually helped calm my evenings.' },
    { time: 'Sep 22, 7:35 AM', content: 'Copy that. I’ll push toward those 1-min intervals this week.' },
    { time: 'Oct 1, 7:30 AM', content: 'Great reset. “Sunday reset ritual” sounds interesting — what’s that?' },
    { time: 'Oct 7, 5:10 PM', content: 'Great flow. I feel like my toolkit keeps expanding.' },
    { time: 'Oct 15, 7:20 AM', content: 'Thanks Ruby. This feels like it’s becoming routine now, not just effort.' },
    { time: 'Oct 21, 5:05 PM', content: 'Got it, feeling prepared for KL.' },
    { time: 'Oct 22, 9:10 AM', content: 'Thanks, Ruby. I’ll stick as close as possible to routine.' },
    { time: 'Oct 28, 9:35 PM', content: 'Productive but tiring. Glad I managed 2 circuits + daily walking.' },
  ],
  Advik: [
    { time: 'Mar 1, 9:22 AM', content: 'Had a late dinner with friends around 9:30. Quite a bit of wine too.', isUser: true },
    { time: 'Mar 11, 6:30 AM', content: 'Did 25 mins in the hotel gym treadmill Zone 2 yesterday. HR stayed stable around 125. Felt good.', isUser: true },
    { time: 'Mar 22, 8:30 AM', content: 'Whoop shows recovery 76% today, huge jump. Surprised because I didn’t sleep that long.', isUser: true },
    { time: 'Mar 22, 8:55 AM', content: 'Got a dinner party… might be tough.', isUser: true },
    { time: 'Mar 27, 6:40 AM', content: 'Whoop shows only 5h sleep again, recovery red at 28%. No alcohol last night. Why so low?', isUser: true },
    { time: 'Mar 27, 7:00 AM', content: 'A bit congested, yes.', isUser: true },
    { time: 'Mar 31, 7:50 AM', content: 'First night in KL hotel. Slept only 4.5h, had late dinner with clients. HRV dropped again.', isUser: true },
    { time: 'Mar 31, 8:15 AM', content: 'Got it.', isUser: true },
    { time: 'Apr 2, 7:40 AM', content: 'Morning. Woke up with a mild headache and Whoop shows recovery at 42%. Do you think I should still do the strength session tonight?', isUser: true },
    { time: 'Apr 7, 7:25 AM', content: 'Okay, planning to do it at 6 PM.', isUser: true },
    { time: 'Apr 8, 6:45 AM', content: 'Did the 35 mins last night — HR stable, no dizziness. Felt solid.', isUser: true },
    { time: 'Apr 16, 7:30 AM', content: 'Slept badly in hotel last night — only 4h 50m according to Oura. Recovery red zone again (33%). Do I still do a workout?', isUser: true },
    { time: 'Apr 16, 7:45 AM', content: 'Okay, treadmill it is.', isUser: true },
    { time: 'Apr 21, 7:20 AM', content: 'Will do. Evening session planned.', isUser: true },
    { time: 'Apr 25, 8:15 AM', content: 'Tried beetroot juice pre-run yesterday. Surprisingly felt more energy. Placebo?', isUser: true },
    { time: 'Apr 29, 7:00 AM', content: 'Noticed HRV dip to 39 ms last night. Could stress be the cause?', isUser: true },
    { time: 'Apr 29, 7:20 AM', content: 'Will try.', isUser: true },
    { time: 'May 7, 6:45 AM', content: 'HRV dipped to 38 ms last night. Stressful late calls. Should I still push today’s 38-min Zone 2?', isUser: true },
    { time: 'May 15, 7:40 AM', content: 'Morning — feeling fatigued even though I got 7h sleep. Recovery only 48% today. Could this be training load?', isUser: true },
    { time: 'May 30, 6:50 AM', content: 'Big milestone then. Will hit 40 mins tomorrow.' },
    { time: 'May 31, 9:00 AM', content: 'Completed first 40 min Zone 2 🎉. HR stable, no dizziness, actually felt strong.' },
    { time: 'Jun 7, 7:20 AM', content: 'That’s encouraging. Looking forward to the labs.' },
    { time: 'Jun 14, 6:45 AM', content: 'Understood. I’ll take it easy.' },
    { time: 'Jun 20, 6:45 AM', content: 'Tried the first HIIT session yesterday. Legs are sore 😅 but felt energizing.' },
    { time: 'Jul 2, 6:45 PM', content: 'Completed my first structured HIIT — 6×30s sprints, 90s rest. Legs on fire!' },
    { time: 'Jul 2, 7:10 PM', content: 'Felt tough but doable. Sweated buckets.' },
    { time: 'Jul 7, 7:25 AM', content: 'Bad night. Slept 5h 20m. HRV crashed to 36 ms. Probably too much screen time.' },
    { time: 'Jul 7, 7:50 AM', content: 'Deal.' },
    { time: 'Jul 11, 7:20 AM', content: 'Managed a 35-min treadmill Zone 2 in hotel gym. HR steady at 124 bpm. Felt good to move after banquet.' },
    { time: 'Jul 14, 7:15 AM', content: 'Got it. Back on track.' },
    { time: 'Jul 17, 6:50 AM', content: 'Completed HIIT this morning: 6×30s sprints, 90s rest. HR peaked at 176 bpm. Felt slightly easier than last week.' },
    { time: 'Jul 17, 7:15 AM', content: 'Got it. Will lock down sleep schedule.' },
    { time: 'Jul 19, 8:30 AM', content: 'Tried the 10-min breathing drill last night. Slept deeper, woke up with 68% recovery. Could this small thing really make such a difference?', isUser: true },
    { time: 'Jul 24, 7:00 AM', content: 'Did 7×30s sprints, 90s rest. Exhausting but manageable. HR peaked 179 bpm.' },
    { time: 'Aug 8, 7:00 AM', content: 'Managed 40 min treadmill Zone 2. HR avg 126 bpm. Felt energizing after late night.' },
    { time: 'Aug 13, 6:50 AM', content: 'Recovery only 42% today. Maybe from back-to-back work dinners.' },
    { time: 'Aug 13, 7:05 AM', content: 'Okay, will adjust.' },
    { time: 'Aug 16, 10:30 AM', content: 'Slept 6h 15m last night despite being in bed by 10. Any tricks to stay asleep?' },
    { time: 'Aug 16, 10:50 AM', content: 'I’ll test these tonight.' },
    { time: 'Aug 21, 7:05 AM', content: 'Completed 7×30s sprints, 90s rest. HR peaked 178 bpm. Felt smoother than before.' },
    { time: 'Aug 27, 6:45 AM', content: 'Just did 8×30s sprints, 90s rest. Felt tough but doable. HR peaked 182 bpm.' },
    { time: 'Aug 27, 7:05 AM', content: 'Feeling accomplished (and sweaty).' },
    { time: 'Sep 8, 7:00 AM', content: 'Woke up sluggish, even after 7h sleep. Recovery at 48%. Why?' },
    { time: 'Sep 8, 7:25 AM', content: 'Makes sense. Lesson learned.' },
    { time: 'Sep 11, 7:10 AM', content: 'Tried the mixed HIIT session: 4×30s sprints + 2×1min pushes. Completely gassed at the end.' },
    { time: 'Sep 11, 7:30 AM', content: 'Will have salmon + quinoa post-workout.' },
    { time: 'Sep 18, 6:30 AM', content: 'Did the mixed HIIT: 4×30s + 2×1min. HR peaked 184 bpm. Recovery tough — sweating buckets.' },
    { time: 'Sep 25, 6:40 AM', content: 'Tried 3×1min intervals after 4×30s sprints. HR hit 186 bpm. Felt on edge of max.' },
    { time: 'Sep 25, 7:00 AM', content: 'Felt like a breakthrough session.' },
    { time: 'Sep 28, 10:15 AM', content: 'Slept 8h 10m last night. HRV 55 ms, my best ever.' },
    { time: 'Oct 4, 9:00 AM', content: 'Tried a contrast shower after workout (hot/cold cycles). Felt alert but relaxed. Is that good for recovery?' },
    { time: 'Oct 4, 9:20 AM', content: 'Adding it to routine then.' },
    { time: 'Oct 8, 6:40 AM', content: 'Slept only 6h 10m last night, lots on mind. Recovery at 46%. Should I still train today?' },
    { time: 'Oct 8, 7:00 AM', content: 'Got it, will switch to an evening walk.' },
    { time: 'Oct 11, 7:30 AM', content: 'Completed 3×1min intervals + 4×30s sprints. HR peaked 187 bpm, recovery tough but satisfying.' },
    { time: 'Oct 11, 7:50 AM', content: 'Already prepping shake.' },
    { time: 'Oct 16, 6:40 AM', content: 'Slept 5h 45m last night, brain wouldn’t shut off. Recovery red this morning.' },
    { time: 'Oct 16, 7:00 AM', content: 'Noted. Will try tonight.' },
    { time: 'Oct 23, 6:30 AM', content: 'Finished HIIT before leaving tomorrow. 3×1min + 4×30s. HR peaked 186 bpm.' },
    { time: 'Oct 23, 6:55 AM', content: 'Clear plan.' },
    { time: 'Oct 30, 6:50 AM', content: 'Back in rhythm. Slept 7h 25m last night, HRV 54 ms. Travel fatigue gone.' },
  ],
  Rachel: [
    { time: 'Mar 21, 6:45 PM', content: 'Skipped workout today — felt drained after the blood draw.', isUser: true },
    { time: 'Mar 28, 11:10 AM', content: 'Done this morning actually. Felt good, less stiff.', isUser: true },
    { time: 'Mar 29, 9:15 AM', content: 'Heading to KL for 3 days of meetings. Hotel gym is small, just treadmills and dumbbells. Should I adapt workouts?', isUser: true },
    { time: 'Apr 2, 8:05 AM', content: 'Okay, thanks both.', isUser: true },
    { time: 'Apr 23, 9:50 AM', content: 'A little stiffness after deadlifts, but nothing major.', isUser: true },
    { time: 'May 1, 8:20 AM', content: 'Public holiday today in SG 🇸🇬. Should I still train or take it easy?', isUser: true },
    { time: 'May 1, 8:30 AM', content: 'Done, I’ll record.', isUser: true },
    { time: 'May 3, 10:10 AM', content: 'Thanks, felt more confident with corrections.', isUser: true },
    { time: 'May 10, 10:45 AM', content: 'Okay, I’ll drop weight and focus on form.', isUser: true },
    { time: 'May 17, 10:35 AM', content: 'Thanks, will try mid-week.', isUser: true },
    { time: 'May 22, 7:15 AM', content: 'Hotel gym is basic — just treadmills, a cable machine, and DBs up to 20 kg. Rachel, how should I adapt?', isUser: true },
    { time: 'May 22, 7:35 AM', content: 'Perfect. I’ll do that tonight.', isUser: true },
    { time: 'May 27, 8:05 AM', content: 'Tried 65 kg deadlifts yesterday — felt smoother than before. No pain.', isUser: true },
    { time: 'Jun 4, 6:55 AM', content: 'Sounds brutal 😅 but I’ll try.', isUser: true },
    { time: 'Jun 24, 7:15 AM', content: 'Noticed some knee discomfort after paused squats yesterday. Should I scale back?', isUser: true },
    { time: 'Jun 24, 7:30 AM', content: 'Will record next session.', isUser: true },
    { time: 'Jul 4, 6:20 PM', content: 'Squats at 75 kg today. Felt strong, no pain.', isUser: true },
    { time: 'Jul 18, 6:40 PM', content: 'Deadlifts at 72.5 kg today. Core felt stable, no rounding.', isUser: true },
    { time: 'Jul 18, 7:00 PM', content: 'Nice, something new to learn.', isUser: true },
    { time: 'Aug 4, 6:40 PM', content: 'Squats at 80 kg today 🎉. Felt heavy but controlled.', isUser: true },
    { time: 'Aug 4, 6:55 PM', content: 'Okay, feels good to hit that round number.', isUser: true },
    { time: 'Aug 12, 6:40 PM', content: 'Back in Singapore gym — squats at 80 kg again. Felt solid despite travel gap.', isUser: true },
    { time: 'Aug 18, 6:45 PM', content: 'Squats at 80 kg, paused squats still at 65. Added hip thrusts 2×12 at 50 kg. Legs felt strong.', isUser: true },
    { time: 'Aug 25, 6:35 PM', content: 'Deadlifts at 75 kg, hip thrusts up to 60 kg. Felt good. Squats still 80 kg.', isUser: true },
    { time: 'Sep 9, 6:30 PM', content: 'Did lunges + step-ups as Rachel suggested. Balance tougher than expected. Legs felt wobbly.', isUser: true },
    { time: 'Sep 9, 6:45 PM', content: 'Already feeling it 😅.', isUser: true },
    { time: 'Sep 17, 6:50 PM', content: 'Deadlifts at 80 kg today 🎉. Felt heavy but solid. Grip endurance is limiting factor.', isUser: true },
    { time: 'Sep 17, 7:15 PM', content: 'Sounds brutal but effective.', isUser: true },
    { time: 'Sep 23, 6:50 PM', content: 'Tried farmer’s carries with 24 kg dumbbells. Only lasted 20m walks x 3 sets. Grip was screaming.', isUser: true },
    { time: 'Sep 23, 7:05 PM', content: 'Definitely humbling.', isUser: true },
    { time: 'Oct 3, 6:40 PM', content: 'Deadlifted 82.5 kg today. Felt heavy, but grip improving. Farmer’s carries at 24 kg also smoother.', isUser: true },
    { time: 'Oct 3, 7:05 PM', content: 'That sounds challenging — but up for it.', isUser: true },
    { time: 'Oct 9, 6:45 PM', content: 'First day with tempo squats — 3s descent. Legs on fire 🔥. Way harder than I expected.', isUser: true },
    { time: 'Oct 9, 7:10 PM', content: 'Understood. Definitely humbling.', isUser: true },
    { time: 'Oct 17, 6:50 PM', content: 'Tempo squats at 70 kg done. Legs shook like crazy on 3s descent.', isUser: true },
    { time: 'Oct 17, 7:10 PM', content: 'Understood.', isUser: true },
    { time: 'Oct 24, 7:15 PM', content: 'Arrived in KL. Hotel gym is tiny, just a treadmill and some light dumbbells.', isUser: true },
    { time: 'Oct 24, 7:35 PM', content: 'Perfect, will do tomorrow.', isUser: true },
    { time: 'Oct 25, 8:30 AM', content: 'Completed circuit. Sweat poured, but felt good to move.', isUser: true },
  ],
  "Dr. Warren": [
    { time: 'Mar 3, 7:50 AM', content: 'I was reading an article on ApoB being a better marker than LDL. Did we check mine in the last panel?', isUser: true },
    { time: 'Mar 3, 8:20 AM', content: 'Got it. Thanks for explaining.', isUser: true },
    { time: 'Mar 13, 11:15 AM', content: 'Woke up with slight ankle swelling. Could it be BP-related?', isUser: true },
    { time: 'Mar 13, 11:35 AM', content: 'BP was 138/86 this morning. Usually it’s ~126/80.', isUser: true },
    { time: 'Mar 25, 3:15 PM', content: 'ApoB went up even after all that effort?', isUser: true },
    { time: 'Apr 12, 8:30 AM', content: 'Random question: I read that beetroot juice helps lower BP. Worth trying?', isUser: true },
    { time: 'Apr 12, 8:55 AM', content: 'Sounds good.', isUser: true },
    { time: 'Apr 19, 10:20 AM', content: 'That’s motivating. I’d love to reduce meds long-term.', isUser: true },
    { time: 'May 9, 9:00 AM', content: 'Read about “red yeast rice” supplements for cholesterol. Is that worth considering for ApoB?', isUser: true },
    { time: 'May 9, 9:20 AM', content: 'Makes sense, thanks.', isUser: true },
    { time: 'May 23, 8:10 AM', content: 'Had tom yum soup last night — pretty salty. BP this morning 132/85. Should I worry?', isUser: true },
    { time: 'May 23, 8:25 AM', content: 'Okay, will flush it out with water.', isUser: true },
    { time: 'Jun 3, 7:50 AM', content: 'Quick qn — does beetroot juice affect lab results? Should I stop before June 13?', isUser: true },
    { time: 'Jun 3, 8:10 AM', content: 'Noted. I’ll pause supplements 2 days before.', isUser: true },
    { time: 'Jun 18, 7:10 PM', content: 'That’s a relief. So we don’t need meds yet?', isUser: true },
    { time: 'Aug 2, 12:00 PM', content: 'Reading about omega-3 supplements — would they help ApoB reduction?', isUser: true },
    { time: 'Aug 2, 12:20 PM', content: 'Got it. Will stick with the food-first approach.', isUser: true },
    { time: 'Aug 7, 11:15 PM', content: 'Banquet tonight — lots of roast pork and fried dishes. I stuck mostly to grilled fish + veggies. 2 glasses wine. BP back at hotel: 128/82.', isUser: true },
    { time: 'Aug 7, 11:35 PM', content: 'Thanks, feels like I navigated better than Tokyo/HK trips.', isUser: true },
    { time: 'Aug 24, 4:00 PM', content: 'Just curious — why does sleep matter so much for ApoB if diet/exercise are the main levers?', isUser: true },
    { time: 'Aug 24, 4:20 PM', content: 'Makes sense. I’ll stop treating sleep as optional.', isUser: true },
  ],
  Carla: [
    { time: 'Mar 4, 11:15 AM', content: 'Yes please, that would help.', isUser: true },
    { time: 'Mar 10, 12:10 PM', content: 'Quick qn — my Japanese client invited me for yakiniku tonight. Lots of red meat. Carla, any hacks so I don’t blow the plan?', isUser: true },
    { time: 'Mar 10, 12:28 PM', content: 'Nice, I’ll try.', isUser: true },
    { time: 'Mar 19, 8:20 AM', content: 'Good idea. Last week was soy sauce overload in Japan.', isUser: true },
    { time: 'Mar 26, 9:25 AM', content: 'Can you give me portable snack options too? I often eat in the office.', isUser: true },
    { time: 'Apr 3, 10:25 AM', content: 'Does it taste awful?', isUser: true },
    { time: 'Apr 5, 11:15 AM', content: 'Tried psyllium this morning in a protein shake. Felt very full after, almost heavy. Is that normal?', isUser: true },
    { time: 'Apr 5, 11:28 AM', content: 'Got it, will up water intake.', isUser: true },
    { time: 'Apr 10, 9:35 AM', content: 'That’s very practical. Please share before I go.', isUser: true },
    { time: 'Apr 17, 12:05 PM', content: 'Lunch with clients — ended up with fried noodles and satay. Carla, not the cleanest. Any tips for dinners here?', isUser: true },
    { time: 'Apr 17, 12:20 PM', content: 'Perfect, thanks.', isUser: true },
    { time: 'Apr 22, 8:00 AM', content: 'Quick qn — why does psyllium sometimes make me bloated?', isUser: true },
    { time: 'Apr 26, 10:05 AM', content: 'Maybe more variety at breakfast — oats every day gets boring.', isUser: true },
    { time: 'May 5, 7:25 AM', content: 'Excellent, much better.', isUser: true },
    { time: 'May 12, 8:30 AM', content: 'No problem. I actually like the taste now.', isUser: true },
    { time: 'May 16, 9:20 AM', content: 'Got it. Lentil soup sounds good.', isUser: true },
    { time: 'May 28, 7:05 AM', content: 'None now. Gut feels adapted. Actually less snacking between meals.', isUser: true },
    { time: 'Jun 6, 8:40 AM', content: 'Perfect. Thanks for staying ahead of this.', isUser: true },
    { time: 'Jul 3, 12:15 PM', content: 'At lunch, had mee goreng with colleagues. Felt heavy after. Is this messing with my ApoB progress?', isUser: true },
    { time: 'Jul 3, 12:30 PM', content: 'Makes sense. I’ll keep balance in mind.', isUser: true },
    { time: 'Jul 22, 12:00 PM', content: 'Chef Javier made chickpea curry yesterday — delicious. Do beans/legumes count as plant-based dinners for my ApoB target?', isUser: true },
    { time: 'Jul 22, 12:20 PM', content: 'Will do.', isUser: true },
    { time: 'Aug 9, 12:30 PM', content: 'Had chicken adobo at lunch. Tasty but salty. How bad is that?', isUser: true },
    { time: 'Aug 9, 12:45 PM', content: 'Okay, I’ll ask hotel chef to prep a veggie soup tonight.', isUser: true },
    { time: 'Aug 19, 12:20 PM', content: 'Reading about intermittent fasting. Would it help lower ApoB further?', isUser: true },
    { time: 'Aug 19, 12:40 PM', content: 'Got it, no drastic changes then.', isUser: true },
    { time: 'Aug 28, 12:40 PM', content: 'Noted. Will ask Javier to adjust menus.', isUser: true },
    { time: 'Sep 10, 12:20 PM', content: 'Added chia seeds to breakfast smoothie. Any limit I should watch for?', isUser: true },
    { time: 'Sep 10, 12:35 PM', content: 'Got it. Will keep it at 2 tbsp.', isUser: true },
    { time: 'Sep 19, 12:10 PM', content: 'Read an article about fermented foods improving gut health and inflammation. Worth adding?', isUser: true },
    { time: 'Sep 19, 12:30 PM', content: 'Done. I like kimchi anyway.', isUser: true },
    { time: 'Sep 24, 1:10 PM', content: 'Got it. Will ask Javier to prepare that tonight.', isUser: true },
    { time: 'Sep 27, 9:30 AM', content: 'Tried kimchi daily this week. Gut feels lighter, less bloated. Placebo?', isUser: true },
    { time: 'Sep 27, 9:50 AM', content: 'Great, will make it a staple.', isUser: true },
    { time: 'Oct 2, 12:15 PM', content: 'What’s the best way to lower body fat without messing up strength?', isUser: true },
    { time: 'Oct 2, 12:35 PM', content: 'Understood. No crash diets — slow burn.', isUser: true },
    { time: 'Oct 10, 1:10 PM', content: 'Will stock up on avocados for weekend.', isUser: true },
    { time: 'Oct 18, 12:30 PM', content: 'Quick question — is it okay to add kombucha as another fermented source?', isUser: true },
    { time: 'Oct 18, 12:50 PM', content: 'Will check labels carefully.', isUser: true },
    { time: 'Oct 26, 1:00 PM', content: 'Work lunch today was Malaysian curry. Delicious but heavy. How to balance?', isUser: true },
    { time: 'Oct 26, 1:25 PM', content: 'That reassurance helps.', isUser: true },
  ],
  Neel: [
    { time: 'Apr 13, 4:10 PM', content: 'This feels like momentum.', isUser: true },
    { time: 'Apr 19, 10:45 AM', content: 'Understood. Clear targets.', isUser: true },
    { time: 'Jun 11, 7:30 AM', content: 'Feeling slightly anxious about labs. Been consistent but ApoB last time still went up a little.', isUser: true },
    { time: 'Jun 11, 7:50 AM', content: 'Appreciate that perspective.', isUser: true },
    { time: 'Jun 18, 7:40 PM', content: 'Very clear. Appreciate the structured plan.', isUser: true },
    { time: 'Jun 30, 8:10 AM', content: 'Thank you, Neel. Honestly feels like a lifestyle shift now, not just a plan.', isUser: true },
    { time: 'Jul 13, 5:20 PM', content: 'That’s a good point. Feels more sustainable now.', isUser: true },
    { time: 'Jul 19, 8:45 AM', content: 'Think of it like compound interest, Arjun. Each small recovery habit strengthens the foundation for long-term performance.', isUser: true },
    { time: 'Jul 29, 7:40 AM', content: 'Manila trip coming up. Honestly, worried about late dinners and drinks with clients.', isUser: true },
    { time: 'Jul 29, 8:05 AM', content: 'That reframing helps. Thanks, team.', isUser: true },
    { time: 'Aug 30, 8:45 AM', content: 'Curious — I’ve noticed when work stress spikes, my BP goes up even if diet/exercise are perfect. Any tricks for in-the-moment stress?', isUser: true },
    { time: 'Aug 30, 9:10 AM', content: 'Will start using these micro-breaks.', isUser: true },
    { time: 'Sep 12, 3:20 PM', content: 'Will integrate those mini-breaks.', isUser: true },
    { time: 'Sep 16, 3:15 PM', content: 'Workload intense today, BP at 132/84. I squeezed in a walk but still felt heavy pressure.', isUser: true },
    { time: 'Sep 16, 3:30 PM', content: 'Will try journaling tonight. Haven’t done that in years.', isUser: true },
    { time: 'Oct 5, 6:00 PM', content: 'Just finished my first Sunday reset. Reviewed Whoop data, set training/dinners for week, journaled intentions. Honestly feels grounding.', isUser: true },
    { time: 'Oct 5, 6:20 PM', content: 'Makes sense. I feel less rushed, more grounded.', isUser: true },
    { time: 'Oct 19, 6:00 PM', content: 'Did my Sunday reset earlier. Journaling included reflecting on patience with progress. I realize I was chasing numbers before; now it feels more about sustainability.', isUser: true },
    { time: 'Oct 19, 6:20 PM', content: 'Makes sense. I feel less rushed, more grounded.', isUser: true },
    { time: 'Oct 31, 7:15 PM', content: 'Appreciate the big-picture perspective. It feels sustainable now, not forced.', isUser: true },
  ]
};

const CommunicationHub = () => {
  const [selected, setSelected] = React.useState("Dr. Warren");
  const selectedMember = teamMembers.find(m => m.name === selected);
  const scrollAreaRef = React.useRef<HTMLDivElement>(null);

  const getMessagesForSelectedMember = () => {
    const memberMessages = conversations[selected as keyof typeof conversations] || [];
    const userMessagesToMember: any[] = allMessagesFromUser[selected as keyof typeof allMessagesFromUser] || [];
    
    return [...memberMessages, ...userMessagesToMember].sort((a, b) => {
        const dateA = new Date(`2025-${a.time}`).getTime();
        const dateB = new Date(`2025-${b.time}`).getTime();
        return dateA - dateB;
    });
  };

  const messages = getMessagesForSelectedMember();
  const user = { name: "Arjun Mehta", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxwb3J0cmFpdCUyMG1hbGV8ZW58MHx8fHwxNzU1NDQyNjc3fDA&ixlib=rb-4.1.0&q=80&w=1080", fallback: "AM" };
  
  React.useEffect(() => {
    if (scrollAreaRef.current) {
        const scrollViewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
        if (scrollViewport) {
          scrollViewport.scrollTop = scrollViewport.scrollHeight;
        }
    }
  }, [messages, selected]);


  return (
    <Card className="flex h-full w-full rounded-none border-0 shadow-none">
        <div className="flex flex-col w-[300px] border-r bg-muted/20">
            <div className="p-4 border-b">
                <h2 className="text-2xl font-headline font-bold">Messages</h2>
            </div>
            <ScrollArea className="flex-1">
                <nav className="p-2 space-y-1">
                    {teamMembers.map(member => {
                        const allConvoMessages = [...(conversations[member.name as keyof typeof conversations] || []), ...(allMessagesFromUser[member.name as keyof typeof allMessagesFromUser] || [])]
                        const lastMessage = allConvoMessages.sort((a, b) => new Date(`2025-${b.time}`).getTime() - new Date(`2025-${a.time}`).getTime()).at(0);
                        
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
                <ScrollArea className="flex-1" ref={scrollAreaRef}>
                    <CardContent className="p-6">
                        <div className="space-y-6">
                            {messages.length > 0 ? messages.map((message, index) => (
                                <div key={index} className={`flex items-end gap-2 ${message.isUser ? "justify-end" : "justify-start"}`}>
                                    {!message.isUser && (
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src={selectedMember.avatar} data-ai-hint={`${selectedMember.name} profile`} />
                                            <AvatarFallback>{selectedMember.fallback}</AvatarFallback>
                                        </Avatar>
                                    )}
                                    <div className={`rounded-lg px-3 py-2 max-w-xs lg:max-w-md ${message.isUser ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                                        <p className={`text-xs mt-1 ${message.isUser ? 'text-primary-foreground/70' : 'text-muted-foreground'} text-right`}>{message.time}</p>
                                    </div>
                                    {message.isUser && (
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src={user.avatar} data-ai-hint="user profile" />
                                            <AvatarFallback>{user.fallback}</AvatarFallback>
                                        </Avatar>
                                    )}
                                </div>
                            )) : <div className="text-center text-muted-foreground">No messages yet.</div>}
                        </div>
                    </CardContent>
                </ScrollArea>
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
