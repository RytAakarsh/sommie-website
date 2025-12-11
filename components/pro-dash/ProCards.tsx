// // components/pro-dash/ProCards.tsx
// "use client";

// import React from "react";

// function Card({ title, value, subtitle, icon }: { title: string; value: string | number; subtitle?: string; icon?: React.ReactNode }) {
//   return (
//     <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-50">
//       <div className="flex items-start justify-between gap-4">
//         <div>
//           <h4 className="text-sm font-medium text-slate-700">{title}</h4>
//           <div className="text-2xl font-bold text-[#6D3FA6] mt-3">{value}</div>
//           {subtitle && <div className="text-xs text-gray-400 mt-1">{subtitle}</div>}
//         </div>
//         <div className="text-2xl text-[#6D3FA6]">{icon}</div>
//       </div>
//     </div>
//   );
// }

// export default function ProCards() {
//   return (
//     <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//       <Card title="Wine Tourism Planning" value={3} subtitle="Trips Planned" icon={<span>✈️</span>} />
//       <Card title="Restaurant Sommelier" value={"AI"} subtitle="Pairing Guide" icon={<span>🍽️</span>} />
//       <Card title="Virtual Wine Cellar" value={145} subtitle="Wine Tracked" icon={<span>🧾</span>} />
//       <Card title="Benefits Club" value={2} subtitle="Available Coupons" icon={<span>🎁</span>} />

//       {/* extra two rows like Figma */}
//       <Card title="Sommie Game" value={"8,345"} subtitle="Current Score" icon={<span>🎮</span>} />
//       <Card title="Profile" value="Manage" subtitle="Personal Details" icon={<span>👤</span>} />
//     </section>
//   );
// }


// "use client";

// import React from "react";

// const Card = ({ title, value, subtitle, icon }: any) => (
//   <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
//     <div className="flex justify-between items-start">
//       <div>
//         <h4 className="text-sm font-medium text-slate-700">{title}</h4>
//         <div className="text-3xl font-black text-[#6D3FA6] mt-3">{value}</div>
//         {subtitle && (
//           <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
//         )}
//       </div>

//       <div className="text-3xl">{icon}</div>
//     </div>
//   </div>
// );

// export default function ProCards() {
//   return (
//     <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-10">
//       <Card title="Wine Tourism Planning" value={3} subtitle="Trips Planned" icon="✈️" />
//       <Card title="Restaurant Sommelier" value="AI" subtitle="Pairing Guide" icon="🍽️" />
//       <Card title="Virtual Wine Cellar" value={145} subtitle="Wine Tracked" icon="📄" />
//       <Card title="Benefits Club" value={2} subtitle="Available Coupons" icon="🎁" />
//       <Card title="Sommie Game" value="8,345" subtitle="Current Score" icon="🎮" />
//       <Card title="Profile" value="Manage" subtitle="Personal Details" icon="👤" />
//     </section>
//   );
// }

"use client";

import React from "react";

function Card({
  title,
  value,
  subtitle,
  icon,
}: {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-[0_4px_14px_rgba(0,0,0,0.06)] border border-gray-100 
      flex flex-col justify-between h-[150px]">
      <div className="flex items-start justify-between">
        <h4 className="text-sm font-medium text-slate-700">{title}</h4>
        <div className="text-2xl text-[#6D3FA6]">{icon}</div>
      </div>

      <div>
        <div className="text-3xl font-bold text-[#6D3FA6] leading-tight">{value}</div>
        {subtitle && (
          <div className="text-xs text-gray-400 mt-1">{subtitle}</div>
        )}
      </div>
    </div>
  );
}

export default function ProCards() {
  return (
    <section
      className="
        grid 
        grid-cols-2 
        gap-4 
        sm:grid-cols-2 
        lg:grid-cols-4 
        lg:gap-6 
      "
    >
      <Card
        title="Wine Tourism Planning"
        value={3}
        subtitle="Trips Planned"
        icon={<span>✈️</span>}
      />

      <Card
        title="Restaurant Sommelier"
        value={"AI"}
        subtitle="Pairing Guide"
        icon={<span>🍽️</span>}
      />

      <Card
        title="Virtual Wine Cellar"
        value={145}
        subtitle="Wine Tracked"
        icon={<span>📄</span>}
      />

      <Card
        title="Benefits Club"
        value={2}
        subtitle="Available Coupons"
        icon={<span>🎁</span>}
      />

      <Card
        title="Sommie Game"
        value={"8,345"}
        subtitle="Current Score"
        icon={<span>🎮</span>}
      />

      <Card
        title="Profile"
        value="Manage"
        subtitle="Personal Details"
        icon={<span>👤</span>}
      />
    </section>
  );
}
