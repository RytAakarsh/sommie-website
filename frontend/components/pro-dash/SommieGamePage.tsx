"use client";

import { ArrowLeft, Trophy } from "lucide-react";
import { useProView } from "./ProViewContext";

export default function SommieGamePage() {
  const { setView } = useProView();

  return (
    <div className="min-h-screen bg-[#EFECEC] p-4 md:p-8">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => setView("benefits")}
            className="p-2 rounded-full hover:bg-white"
          >
            <ArrowLeft />
          </button>
          <h1 className="text-lg md:text-2xl font-bold text-[#4B2B5F]">
            VinophileVivian
          </h1>
        </div>

        {/* SCORE CARD */}
        <div className="bg-[#F4E8FB] rounded-3xl p-6 text-center mb-6">
          <p className="text-sm text-gray-500 mb-1">Current Score</p>
          <h2 className="text-4xl font-bold text-[#4B2B5F]">12,450</h2>
          <p className="text-xs text-gray-500 mt-1">
            Points until Level 6: 2,550 Pts
          </p>

          <div className="flex justify-between text-xs text-gray-500 mt-4">
            <span>Lvl 5 Start</span>
            <span>Lvl 6 Target (15,000)</span>
          </div>

          <button className="mt-5 w-full bg-[#4B2B5F] text-white py-3 rounded-xl font-bold">
            Play Now
          </button>
        </div>

        {/* UPCOMING REWARDS */}
        <Section title="Upcoming Rewards (Lvl 6)">
          <RewardItem text="Unlock Wine Critic Achievement" />
          <RewardItem text="Access to Advanced Bordeaux Tasting Module" />
          <RewardItem text="+500 Bonus Points Next Game" />
        </Section>

        {/* GLOBAL RANKING */}
        <Section title="Global Ranking">
          <RankingItem label="Your Position" value="#14" />
          <RankingItem label="MasterSomn (25,120)" value="#1" />
          <RankingItem label="ChampagneCharlie (23,005)" value="#2" />
          <RankingItem label="RieslingRider (20,500)" value="#3" />
        </Section>

        {/* ACTION POINTS */}
        <Section title="Action" >
          <ActionRow label="Correctly identify grape" value="+100" />
          <ActionRow label="Identify region/vintage" value="+50" />
          <ActionRow label="Guess wrong (Penalty)" value="-25" />
          <ActionRow label="Complete tasting flight" value="+250" />
          <ActionRow label="Achieve perfect score" value="+500" />
        </Section>
      </div>
    </div>
  );
}

/* ---------- helpers ---------- */

function Section({ title, children }: any) {
  return (
    <div className="bg-white rounded-2xl mb-9 p-5 mb-6">
      <h3 className="font-semibold text-[#4B2B5F] mb-3">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function RewardItem({ text }: { text: string }) {
  return <p className="text-sm text-gray-600">• {text}</p>;
}

function RankingItem({ label, value }: any) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-gray-600">{label}</span>
      <span className="font-semibold text-[#4B2B5F]">{value}</span>
    </div>
  );
}

function ActionRow({ label, value }: any) {
  return (
    <div className="flex justify-between  text-sm">
      <span>{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}
