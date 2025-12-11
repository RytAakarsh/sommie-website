// // components/pro-dash/ProProfilePanel.tsx
// "use client";

// import React from "react";

// export default function ProProfilePanel() {
//   return (
//     <div className="hidden lg:block fixed left-6 top-32 w-56 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
//       <div className="flex items-center gap-3">
//         <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6D3FA6] to-[#A66EE6] text-white flex items-center justify-center font-semibold">A</div>
//         <div>
//           <div className="font-semibold">Alice</div>
//           <div className="text-xs text-gray-500">Precision Sommelier</div>
//         </div>
//       </div>

//       <div className="mt-4 text-sm space-y-2">
//         <button className="w-full text-left text-purple-600">Profile</button>
//         <button className="w-full text-left">Settings</button>
//         <button className="w-full text-left text-red-500">Log out</button>
//       </div>
//     </div>
//   );
// }


// "use client";

// import React from "react";

// export default function ProProfilePanel() {
//   return (
//     <aside className="hidden lg:block w-64 shrink-0 h-fit sticky top-32 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
//       <div className="flex items-center gap-3">
//         <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6D3FA6] to-[#A66EE6] grid place-items-center text-white font-semibold shadow-md">
//           A
//         </div>
//         <div>
//           <p className="font-semibold text-sm">Alice</p>
//           <p className="text-xs text-gray-500">Precision Sommelier</p>
//         </div>
//       </div>

//       <div className="mt-6 space-y-4 text-sm">
//         <button className="block w-full text-left font-medium text-[#6D3FA6]">Profile</button>
//         <button className="block w-full text-left">Settings</button>
//         <button className="block w-full text-left text-red-500">Log out</button>
//       </div>
//     </aside>
//   );
// }


"use client";

import {
  User,
  Bell,
  Lock,
  Globe,
  Heart,
  Headphones,
  HelpCircle,
  Clock3,
  LogOut
} from "lucide-react";

export default function ProProfilePanel() {
  return (
    <aside className="hidden xl:block fixed left-8 top-40 w-72 bg-white rounded-2xl shadow-lg border border-purple-100 p-6">
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#6D3FA6] to-[#A66EE6] text-white grid place-items-center text-xl font-semibold">
          A
        </div>
        <div>
          <h3 className="font-semibold text-slate-800">Alice</h3>
          <p className="text-xs text-purple-500">Precision Sommelier</p>
        </div>
      </div>

      {/* Menu */}
      <div className="space-y-3 text-sm">
        <ProfileItem icon={<User size={18}/>} label="Profile" />
        <ProfileItem icon={<Bell size={18}/>} label="Notification" />
        <ProfileItem icon={<Lock size={18}/>} label="Privacy" />
        <ProfileItem icon={<Globe size={18}/>} label="Language" />
        <ProfileItem icon={<Heart size={18}/>} label="Favorite" />
        <ProfileItem icon={<Headphones size={18}/>} label="Support" />
        <ProfileItem icon={<HelpCircle size={18}/>} label="FAQs" />
        <ProfileItem icon={<Clock3 size={18}/>} label="Clear History" />

        <ProfileItem
          icon={<LogOut size={18} className="text-red-500" />}
          label="Log out"
          danger
        />
      </div>
    </aside>
  );
}

function ProfileItem({ icon, label, danger=false }) {
  return (
    <button
      className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-purple-50 transition ${
        danger ? "text-red-500 font-medium" : "text-slate-700"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
