

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
//   LogOut
// } from "lucide-react";

// export default function ProProfilePanel() {
//   return (
//     <aside className="hidden xl:block fixed left-8 top-40 w-72 bg-white rounded-2xl shadow-lg border border-purple-100 p-6">
      
//       {/* Header */}
//       <div className="flex items-center gap-4 mb-6">
//         <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#6D3FA6] to-[#A66EE6] text-white grid place-items-center text-xl font-semibold">
//           A
//         </div>
//         <div>
//           <h3 className="font-semibold text-slate-800">Alice</h3>
//           <p className="text-xs text-purple-500">Precision Sommelier</p>
//         </div>
//       </div>

//       {/* Menu */}
//       <div className="space-y-3 text-sm">
//         <ProfileItem icon={<User size={18}/>} label="Profile" />
//         <ProfileItem icon={<Bell size={18}/>} label="Notification" />
//         <ProfileItem icon={<Lock size={18}/>} label="Privacy" />
//         <ProfileItem icon={<Globe size={18}/>} label="Language" />
//         <ProfileItem icon={<Heart size={18}/>} label="Favorite" />
//         <ProfileItem icon={<Headphones size={18}/>} label="Support" />
//         <ProfileItem icon={<HelpCircle size={18}/>} label="FAQs" />
//         <ProfileItem icon={<Clock3 size={18}/>} label="Clear History" />

//         <ProfileItem
//           icon={<LogOut size={18} className="text-red-500" />}
//           label="Log out"
//           danger
//         />
//       </div>
//     </aside>
//   );
// }

// function ProfileItem({ icon, label, danger=false }) {
//   return (
//     <button
//       className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-purple-50 transition ${
//         danger ? "text-red-500 font-medium" : "text-slate-700"
//       }`}
//     >
//       {icon}
//       <span>{label}</span>
//     </button>
//   );
// }


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
// } from "lucide-react";
// import { useProView } from "./ProViewContext";

// export default function ProProfilePanel() {
//   const { setView } = useProView();

//   return (
//     <aside className="hidden xl:block fixed left-8 top-40 w-72 bg-white rounded-2xl shadow-lg border border-purple-100 p-6">
//       <div className="flex items-center gap-4 mb-6">
//         <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#6D3FA6] to-[#A66EE6] text-white grid place-items-center text-xl font-semibold">
//           A
//         </div>
//         <div>
//           <h3 className="font-semibold">Alice</h3>
//           <p className="text-xs text-purple-500">Precision Sommelier</p>
//         </div>
//       </div>

//       <div className="space-y-3 text-sm">
//         <SidebarItem icon={<User />} label="Profile" onClick={() => setView("profile")} />
//         <SidebarItem icon={<Bell />} label="Notification" />
//         <SidebarItem icon={<Lock />} label="Privacy" />
//         <SidebarItem icon={<Globe />} label="Language" />
//         <SidebarItem icon={<Heart />} label="Favorite" />
//         <SidebarItem icon={<Headphones />} label="Support" />
//         <SidebarItem icon={<HelpCircle />} label="FAQs" />
//         <SidebarItem icon={<Clock3 />} label="Clear History" />
//         <SidebarItem icon={<LogOut className="text-red-500" />} label="Log out" danger />
//       </div>
//     </aside>
//   );
// }

// function SidebarItem({ icon, label, onClick, danger=false }: any) {
//   return (
//     <button
//       onClick={onClick}
//       className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-purple-50 transition ${
//         danger ? "text-red-500 font-medium" : "text-slate-700"
//       }`}
//     >
//       {icon}
//       <span>{label}</span>
//     </button>
//   );
// }


import { useProView } from "./ProViewContext";

export default function ProProfilePanel() {
  const { setView } = useProView();

  return (
    <aside className="hidden xl:block fixed left-8 top-40 w-72 bg-white rounded-2xl shadow-lg border border-purple-100 p-6">

      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4B2B5F] to-[#4B2B5F] text-white grid place-items-center text-xl font-semibold">
          A
        </div>
        <div>
          <h3 className="font-semibold text-slate-800">Alice</h3>
          <p className="text-xs text-purple-500">Precision Sommelier</p>
        </div>
      </div>

      <div className="space-y-3 text-sm">
        <button onClick={() => setView("profile")} className="menu-item">Profile</button>
        <button className="menu-item">Notification</button>
        <button className="menu-item">Privacy</button>
        <button className="menu-item">Language</button>
        <button className="menu-item">Favorite</button>
        <button className="menu-item">Support</button>
        <button className="menu-item text-red-500">Log out</button>
      </div>
    </aside>
  );
}
