"use client";

import FreemiumChat from "@/components/freemium-chat";

export default function ProChatPanel() {
  return (
    <div className="relative w-full h-[calc(100vh-160px)] bg-[#FAF7FC] rounded-2xl overflow-hidden border shadow-sm">
      <div className="absolute inset-0">
        <FreemiumChat hideUpgradeButton />
      </div>
    </div>
  );
}
