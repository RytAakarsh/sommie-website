// "use client";

// import {
//   User,
//   Bell,
//   Lock,
//   Globe,
//   Heart,
//   Headphones,
//   HelpCircle,
//   Clock3,
//   LogOut,
//   ArrowLeft,
//   Settings
// } from "lucide-react";

// export default function ProProfilePage() {
//   return (
//     <div className="min-h-screen bg-[#F7F2FB] pb-20 xl:pl-80">
      
//       {/* Header */}
//       <div className="bg-white px-6 py-4 flex items-center justify-between border-b">
//         <button className="xl:hidden"><ArrowLeft /></button>
//         <h2 className="font-semibold text-lg">Profile</h2>
//         <button><Settings className="text-purple-500"/></button>
//       </div>

//       <div className="px-6 py-6">
//         {/* User Info */}
//         <div className="flex items-center gap-4 mb-8">
//           <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6D3FA6] to-[#A66EE6] text-white grid place-items-center text-2xl font-semibold">
//             A
//           </div>
//           <div>
//             <h3 className="font-semibold text-xl text-slate-800">Alice</h3>
//             <p className="text-sm text-purple-500">Precision Sommelier</p>
//           </div>
//         </div>

//         {/* Menu */}
//         <div className="rounded-xl overflow-hidden bg-white shadow-md border border-purple-100">
//           <ProfileRow icon={<User />} label="Role (User)" />
//           <ProfileRow icon={<Bell />} label="Notification" />
//           <ProfileRow icon={<Lock />} label="Privacy" />
//           <ProfileRow icon={<Globe />} label="Language" />
//           <ProfileRow icon={<Heart />} label="Favorite" />
//           <ProfileRow icon={<Headphones />} label="Support" />
//           <ProfileRow icon={<HelpCircle />} label="FAQs" />
//           <ProfileRow icon={<Clock3 />} label="Clear History" />

//           <ProfileRow
//             icon={<LogOut className="text-red-500" />}
//             label="Log out"
//             danger
//           />
//         </div>

//       </div>
//     </div>
//   );
// }

// function ProfileRow({ icon, label, danger=false }) {
//   return (
//     <button
//       className={`flex items-center justify-between px-5 py-4 border-b last:border-none ${
//         danger ? "text-red-500 font-medium" : "text-slate-700"
//       }`}
//     >
//       <div className="flex items-center gap-4">
//         {icon}
//         <span>{label}</span>
//       </div>
//       <ArrowLeft className="rotate-180 text-gray-400" />
//     </button>
//   );
// }


// "use client";

// import { ArrowLeft, Settings } from "lucide-react";
// import { useProView } from "./ProViewContext";

// export default function ProProfilePage() {
//   const { setView } = useProView();

//   return (
//     <div className="bg-[#F7F2FB] rounded-2xl p-6 shadow-sm border border-purple-100">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-6">
//         <button className="xl:hidden" onClick={() => setView("dashboard")}>
//           <ArrowLeft />
//         </button>
//         <h2 className="text-lg font-semibold">Profile</h2>
//         <Settings className="text-purple-500" />
//       </div>

//       {/* User */}
//       <div className="flex items-center gap-4 mb-8">
//         <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6D3FA6] to-[#A66EE6] text-white grid place-items-center text-2xl font-semibold">
//           A
//         </div>
//         <div>
//           <h3 className="font-semibold text-xl">Alice</h3>
//           <p className="text-sm text-purple-500">Precision Sommelier</p>
//         </div>
//       </div>

//       {/* Menu */}
//       <div className="bg-white rounded-xl shadow border divide-y">
//         {[
//           "Role (User)",
//           "Notification",
//           "Privacy",
//           "Language",
//           "Favorite",
//           "Support",
//           "FAQs",
//           "Clear History",
//         ].map((item) => (
//           <button
//             key={item}
//             className="w-full px-5 py-4 flex justify-between hover:bg-purple-50"
//           >
//             <span>{item}</span>
//             <span>→</span>
//           </button>
//         ))}

//         <button className="w-full px-5 py-4 text-red-500 font-medium hover:bg-red-50">
//           Log out
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

import { useProView } from "./ProViewContext";
import { ArrowRight } from "lucide-react";

export default function ProProfilePage() {
  const { setView } = useProView();

  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6 max-w-3xl">

      <h2 className="text-lg font-semibold mb-6">Profile</h2>

      <button
        onClick={() => setView("edit-profile")}
        className="w-full flex items-center justify-between px-4 py-4 border rounded-xl hover:bg-purple-50"
      >
        <span>Role (User)</span>
        <ArrowRight />
      </button>

      {["Notification","Privacy","Language","Favorite","Support"].map(item => (
        <div key={item} className="mt-3 w-full px-4 py-4 border rounded-xl">
          {item}
        </div>
      ))}

    </div>
  );
}
