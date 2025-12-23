

// "use client";

// import React from "react";
// import { useProView } from "./ProViewContext";

// function Card({
//   title,
//   value,
//   subtitle,
//   icon,
//   onClick,
// }: {
//   title: string;
//   value: string | number;
//   subtitle?: string;
//   icon?: React.ReactNode;
//   onClick?: () => void;
// }) {
//   return (
//     <button
//       onClick={onClick}
//       className="
//         bg-white rounded-xl p-5
//         shadow-[0_4px_14px_rgba(0,0,0,0.06)]
//         border border-gray-100
//         flex flex-col justify-between h-[150px]
//         text-left hover:scale-[1.02] transition
//       "
//     >
//       <div className="flex items-start justify-between">
//         <h4 className="text-sm font-medium text-slate-700">{title}</h4>
//         <div className="text-2xl text-[#6D3FA6]">{icon}</div>
//       </div>

//       <div>
//         <div className="text-3xl font-bold text-[#6D3FA6]">{value}</div>
//         {subtitle && (
//           <div className="text-xs text-gray-400 mt-1">{subtitle}</div>
//         )}
//       </div>
//     </button>
//   );
// }

// export default function ProCards() {
//   const { setView } = useProView();

//   return (
//     <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
//       <Card title="Wine Tourism Planning" value={3} subtitle="Trips Planned" icon="✈️" />
//       <Card title="Restaurant Sommelier" value="AI" subtitle="Pairing Guide" icon="🍽️" />
//       <Card title="Virtual Wine Cellar" value={145} subtitle="Wine Tracked" icon="📄" />
//       <Card title="Benefits Club" value={2} subtitle="Available Coupons" icon="🎁" />
//       <Card title="Sommie Game" value="8,345" subtitle="Current Score" icon="🎮" />

//       {/* PROFILE CARD */}
//       <Card
//         title="Profile"
//         value="Manage"
//         subtitle="Personal Details"
//         icon="👤"
//         onClick={() => setView("profile")}
//       />
//     </section>
//   );
// }

"use client";

import React from "react";
import { useProView } from "./ProViewContext";

function Card({ title, value, subtitle, icon, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-xl p-5 shadow border hover:scale-[1.02] transition text-left h-[150px]"
    >
      <div className="flex justify-between">
        <h4 className="text-sm font-medium">{title}</h4>
        <span className="text-2xl">{icon}</span>
      </div>
      <div>
        <div className="text-3xl font-bold text-[#4B2B5F]">{value}</div>
        <p className="text-xs text-gray-400">{subtitle}</p>
      </div>
    </button>
  );
}

export default function ProCards() {
  const { setView } = useProView();

  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <Card title="Wine Tourism Planning" value={3} subtitle="Trips Planned" icon="✈️" />
      <Card title="Restaurant Sommelier" value="AI" subtitle="Pairing Guide" icon="🍽️" />

      {/* CELLAR */}
      <Card
        title="Virtual Wine Cellar"
        value={145}
        subtitle="Wine Tracked"
        icon="📄"
        onClick={() => setView("cellar")}
      />

      <Card title="Benefits Club" value={2} subtitle="Available Coupons" icon="🎁" />
      <Card title="Sommie Game" value="8,345" subtitle="Score" icon="🎮" />
      <Card title="Profile" value="Manage" subtitle="Personal" icon="👤" onClick={() => setView("profile")} />
    </section>
  );
}
