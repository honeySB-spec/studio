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
    { time: 'Apr 23, 9:45 AM', content: 'How’s your back feeling during strength sessions? Any flare-ups with squats or deadlifts?' },
    { time: 'Apr 23, 9:55 AM', content: 'Okay — likely form fatigue. Send me a short video clip next time. I’ll analyze your mechanics. We want to fix this before adding heavier loads.' },
  ],
  "Dr. Warren": [
    { time: 'Mar 3, 8:10 AM', content: 'Good question, Arjun. Yes, ApoB was included. Your result was 92 mg/dL — borderline elevated. This is why Carla and I have prioritized fiber + exercise consistency. We’ll re-test in 6 weeks with your next quarterly panel to see if interventions are working.' },
    { time: 'Mar 13, 11:30 AM', content: 'Thanks for flagging. Swelling can have many causes — from high salt meals (common in Japan) to prolonged sitting. Check your BP today. If it’s significantly above baseline, we’ll adjust. Otherwise, hydrate and keep legs elevated when possible.' },
    { time: 'Mar 13, 11:45 AM', content: 'Mild rise, likely diet-related. No immediate concern, but we’ll re-check after you return. Please keep logs daily.' },
    { time: 'Mar 25, 3:00 PM', content: 'Arjun, I’ve reviewed your panel. Key highlights:\n* ApoB: 94 mg/dL (still elevated, up slightly from 92).\n* Fasting glucose: 95 mg/dL (within normal).\n* hs-CRP: 1.8 (borderline inflammation).\n* BP log confirms mild elevation, but trending better post-travel.\nPlan:\n1. Carla will tighten nutrition for ApoB (more soluble fiber, less red meat).\n2. Rachel to maintain progressive Zone 2 + resistance training.\n3. Re-test in June.' },
    { time: 'Mar 25, 3:25 PM', content: 'Yes, but minor. Variability happens. What matters is sustained trend across months. Let’s reinforce consistency.' },
    { time: 'Apr 12, 8:45 AM', content: 'Good question. Beetroot is rich in nitrates, which can improve endothelial function and lower BP modestly. It’s generally safe and can be a useful adjunct. Carla can recommend a brand that doesn’t have excess sugar.' },
    { time: 'Apr 19, 10:15 AM', content: 'To add — your BP trend is encouraging (avg 125/80 last two weeks). If sustained, we’ll consider discussing a taper of your antihypertensive medication by Q3.' },
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
  ],
  Neel: [
    { time: 'Apr 13, 4:15 PM', content: 'That’s the point, Arjun. This consistency builds resilience. The Q2 review will help us lock in bigger goals — reducing ApoB by double digits and cementing exercise as a lifestyle, not just an intervention.' },
    { time: 'Apr 19, 10:00 AM', content: 'Good morning, Arjun. Thanks for joining the Q2 review. Here are the key themes:\n1. Autonomic + Cardiovascular Health: Zone 2 progression working well, target = reach 40 min stable sessions by June.\n2. Metabolic Markers: ApoB still elevated (94). New strategies: psyllium adherence + beetroot juice pre-exercise. If not improved in June labs, we may consider medication consult.\n3. Structural Health: Back pain stable. Rachel will progress you into Phase 2 strength program — introducing barbell work with form coaching.\n4. Stress Resilience: Whoop shows improvement in recovery trends; Dr. Evans’ stress-breathing exercise will remain a staple.' },
    { time: 'Apr 19, 10:40 AM', content: 'Excellent momentum, Arjun. Q2 is about consolidation. By end-June, our goal is: ApoB < 85, Zone 2 at 40 mins, and stable BP <125/80 consistently.' },
    { time: 'Apr 27, 4:10 PM', content: 'Excellent trajectory, Arjun. We’re right on track for Q2 targets. Keep the consistency — June labs will be our checkpoint.' },
  ]
};

const allMessagesFromUser: { [key: string]: any[] } = {
  Ruby: [
    { time: 'Mar 1, 9:12 AM', content: 'Morning Ruby, just noticed my Oura ring logged only 5h 20m of sleep. I went to bed at 11 but kept waking up. Is this something Advik should check?', isUser: true },
    { time: 'Mar 1, 9:22 AM', content: 'Had a late dinner with friends around 9:30. Quite a bit of wine too.', isUser: true },
    { time: 'Mar 2, 8:20 AM', content: 'Please do 6:30 PM.', isUser: true },
    { time: 'Mar 5, 6:55 AM', content: 'Home visit, please.', isUser: true },
    { time: 'Mar 6, 8:20 AM', content: 'Travel update — I’m flying to Tokyo Monday morning for a week. How do we adjust exercise and food?', isUser: true },
    { time: 'Mar 7, 4:15 PM', content: 'Appreciate the summary. Makes sense.', isUser: true },
    { time: 'Mar 8, 7:50 AM', content: 'Got it. Boarding now.', isUser: true },
    { time: 'Mar 12, 9:05 AM', content: 'Confirmed. Landing Thursday night.', isUser: true },
    { time: 'Mar 14, 3:40 PM', content: 'Thanks, clear as always.', isUser: true },
    { time: 'Mar 18, 7:57 AM', content: 'Please do, 7 PM.', isUser: true },
    { time: 'Mar 20, 9:05 AM', content: 'Acknowledged.', isUser: true },
    { time: 'Mar 21, 9:05 AM', content: 'All set, blood drawn.', isUser: true },
    { time: 'Mar 23, 10:15 AM', content: 'Understood. Looking forward to seeing my labs.', isUser: true },
    { time: 'Mar 24, 8:35 AM', content: 'Yes, 6 PM works.', isUser: true },
    { time: 'Mar 25, 7:12 AM', content: 'Great, waiting.', isUser: true },
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
  ],
  Advik: [
    { time: 'Mar 22, 8:30 AM', content: 'Whoop shows recovery 76% today, huge jump. Surprised because I didn’t sleep that long.', isUser: true },
    { time: 'Mar 22, 8:55 AM', content: 'Got a dinner party… might be tough.', isUser: true },
    { time: 'Mar 27, 7:00 AM', content: 'A bit congested, yes.', isUser: true },
    { time: 'Mar 31, 7:50 AM', content: 'First night in KL hotel. Slept only 4.5h, had late dinner with clients. HRV dropped again.', isUser: true },
    { time: 'Mar 31, 8:15 AM', content: 'Got it.', isUser: true },
    { time: 'Apr 2, 7:40 AM', content: 'Morning. Woke up with a mild headache and Whoop shows recovery at 42%. Do you think I should still do the strength session tonight?', isUser: true },
    { time: 'Apr 2, 8:05 AM', content: 'Okay, thanks both.', isUser: true },
    { time: 'Apr 7, 7:25 AM', content: 'Okay, planning to do it at 6 PM.', isUser: true },
    { time: 'Apr 8, 6:45 AM', content: 'Did the 35 mins last night — HR stable, no dizziness. Felt solid.', isUser: true },
    { time: 'Apr 16, 7:30 AM', content: 'Slept badly in hotel last night — only 4h 50m according to Oura. Recovery red zone again (33%). Do I still do a workout?', isUser: true },
    { time: 'Apr 16, 7:45 AM', content: 'Okay, treadmill it is.', isUser: true },
    { time: 'Apr 21, 7:20 AM', content: 'Will do. Evening session planned.', isUser: true },
    { time: 'Apr 25, 8:15 AM', content: 'Tried beetroot juice pre-run yesterday. Surprisingly felt more energy. Placebo?', isUser: true },
    { time: 'Apr 29, 7:00 AM', content: 'Noticed HRV dip to 39 ms last night. Could stress be the cause?', isUser: true },
    { time: 'Apr 29, 7:20 AM', content: 'Will try.', isUser: true },
  ],
  Rachel: [
    { time: 'Mar 21, 6:45 PM', content: 'Skipped workout today — felt drained after the blood draw.', isUser: true },
    { time: 'Mar 28, 11:10 AM', content: 'Done this morning actually. Felt good, less stiff.', isUser: true },
    { time: 'Mar 29, 9:15 AM', content: 'Heading to KL for 3 days of meetings. Hotel gym is small, just treadmills and dumbbells. Should I adapt workouts?', isUser: true },
    { time: 'Apr 23, 9:50 AM', content: 'A little stiffness after deadlifts, but nothing major.', isUser: true },
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
  ],
  Neel: [
    { time: 'Apr 13, 4:10 PM', content: 'This feels like momentum.', isUser: true },
    { time: 'Apr 19, 10:45 AM', content: 'Understood. Clear targets.', isUser: true },
  ]
};

const CommunicationHub = () => {
  const [selected, setSelected] = React.useState("Dr. Warren");
  const selectedMember = teamMembers.find(m => m.name === selected);
  const scrollAreaRef = React.useRef<HTMLDivElement>(null);


  const getMessagesForSelectedMember = () => {
    const memberMessages = conversations[selected as keyof typeof conversations] || [];
    const userMessagesToMember: any[] = [];
    
    if (selected && allMessagesFromUser[selected as keyof typeof allMessagesFromUser]) {
        userMessagesToMember.push(...allMessagesFromUser[selected as keyof typeof allMessagesFromUser]);
    }
    
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

    