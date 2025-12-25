"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import { useProView } from "./ProViewContext";

export default function WinePhysicalStoresPage() {
  const { setView } = useProView();

  return (
    <div className="min-h-screen bg-[#EFECEC] p-4 md:p-10">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => setView("benefits")}
            className="p-2 rounded-full hover:bg-white"
          >
            <ArrowLeft className="text-[#4B2B5F]" />
          </button>

          <div>
            <h1 className="text-lg md:text-2xl font-bold text-[#4B2B5F]">
              Wine Physical Stores
            </h1>
            <p className="text-xs md:text-sm text-gray-500">
              12 Partners available
            </p>
          </div>
        </div>

        {/* SORT */}
        <div className="mb-6">
          <label className="block text-xs font-medium text-gray-500 mb-1">
            Sort by
          </label>
          <select className="w-full md:w-64 rounded-lg p-3 bg-[#F4E8FB] text-sm outline-none">
            <option>Popularity</option>
            <option>Discount</option>
            <option>Name (A–Z)</option>
          </select>
        </div>

        {/* PARTNERS LIST */}
        <div className="space-y-4">
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
        </div>
      </div>
    </div>
  );
}

/* ---------------- PARTNER CARD ---------------- */

function PartnerCard() {
  return (
    <div className="bg-[#F4E8FB] rounded-2xl p-4 flex items-center justify-between gap-4 shadow-sm">

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-[#E0D4EA] flex items-center justify-center font-bold text-[#4B2B5F]">
          JH
        </div>

        <div>
          <p className="font-semibold text-sm text-[#4B2B5F]">
            Glow Yoga Studio
          </p>
          <p className="text-xs text-gray-600 max-w-xs">
            Daily Zen Flow and Power Vinyasa classes for all levels.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-end gap-2">
        <span className="text-sm font-bold text-[#4B2B5F]">
          20% off
        </span>

        <button className="bg-[#4B2B5F] text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#361f44]">
          Partner Access
        </button>
      </div>
    </div>
  );
}
