"use client";

import React from "react";
import { ArrowLeft, Camera, ImageIcon, X } from "lucide-react";
import { useProView } from "./ProViewContext";

export default function RestaurantPocketPage() {
  const { setView } = useProView();

  return (
    <div className="min-h-screen bg-[#EFECEC] p-4 md:p-10">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => setView("benefits")}
            className="p-2 rounded-full hover:bg-white"
          >
            <ArrowLeft className="text-[#4B2B5F]" />
          </button>

          <h1 className="text-lg md:text-2xl font-bold text-[#4B2B5F]">
            Restaurant Pocket Sommelier
          </h1>
        </div>

        {/* TIPS CARD */}
        <div className="bg-[#F4E8FB] rounded-2xl p-4 md:p-6 mb-6 relative">
          <button className="absolute top-3 right-3">
            <X className="w-4 h-4 text-gray-500" />
          </button>

          <h2 className="text-sm font-semibold text-[#4B2B5F] mb-2">
            Tips for capturing menu and wine list
          </h2>

          <ul className="text-xs md:text-sm text-[#4B2B5F] space-y-2 list-disc pl-4">
            <li>Ensure the Menu page is flat and well-lit.</li>
            <li>Hold the phone steady to avoid blur.</li>
            <li>Take or upload first the Menu Photo/Image and indicate the dish chosen.</li>
            <li>Ensure the Wine list page is flat and well-lit.</li>
          </ul>
        </div>

        {/* ACTION BUTTONS */}
        <div className="space-y-4 mb-6">
          <ActionButton icon={<Camera />} label="Take Menu Photo" />
          <ActionButton icon={<Camera />} label="Take Dish List Photo" />

          <div className="text-center text-xs text-gray-500">Or</div>

          <ActionButton icon={<ImageIcon />} label="Upload images from gallery" />
        </div>

        {/* FOOTER ACTIONS */}
        <div className="flex gap-4">
          <button
            onClick={() => setView("benefits")}
            className="flex-1 bg-[#F5EEF8] text-[#4B2B5F] py-3 rounded-xl font-bold"
          >
            Cancel
          </button>

          <button className="flex-1 bg-[#4B2B5F] text-white py-3 rounded-xl font-bold hover:bg-[#361f44]">
            Analyze
          </button>
        </div>

      </div>
    </div>
  );
}

/* ---------------- BUTTON ---------------- */

function ActionButton({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button className="w-full flex items-center justify-center gap-3 bg-[#F4E8FB] py-4 rounded-xl font-semibold text-[#4B2B5F] hover:bg-[#E9DDF3] transition">
      {icon}
      {label}
    </button>
  );
}
