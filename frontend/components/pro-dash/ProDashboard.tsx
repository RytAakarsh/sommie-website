// // components/pro-dash/ProDashboard.tsx
// "use client";

// import React from "react";
// import ProHeader from "./ProHeader";
// import ProCards from "./ProCards";
// import ProHighlights from "./ProHighlights";
// import ProBottomNav from "./ProBottomNav";
// import ProProfilePanel from "./ProProfilePanel";
// import { useLanguage } from "@/app/providers/LanguageProvider";


// export default function ProDashboard() {
//   const { t, lang } = useLanguage?.() ?? { t: (k:string)=>k, lang: "en" };

//   return (
//     <div className="min-h-screen bg-[#FBF7FB] text-slate-900">
//       <ProHeader />

//       <main className="max-w-6xl mx-auto px-6 lg:px-8 py-8">
//         {/* Top overview / cards */}
//         <ProCards />

//         {/* Highlights / lists */}
//         <div className="mt-8">
//           <ProHighlights />
//         </div>
//       </main>

//       {/* Mobile bottom navigation */}
//       <ProBottomNav />

//       {/* Hidden profile drawer for desktop (component exported so you can expand) */}
//       <ProProfilePanel />
//     </div>
//   );
// }


// "use client";

// import React from "react";
// import ProHeader from "./ProHeader";
// import ProCards from "./ProCards";
// import ProHighlights from "./ProHighlights";
// import ProBottomNav from "./ProBottomNav";
// import ProProfilePanel from "./ProProfilePanel";

// export default function ProDashboard() {
//   return (
//     <div className="min-h-screen bg-[#F8F4FA] text-slate-900">
//       <ProHeader />

//       <main className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-10">
//         <div className="flex gap-6">
//           {/* Left Drawer (Desktop Only) */}
//           <ProProfilePanel />

//           {/* Main Content */}
//           <div className="flex-1">
//             <ProCards />
//             <ProHighlights />
//           </div>
//         </div>
//       </main>

//       {/* Mobile Bottom Navigation */}
//       <ProBottomNav />
//     </div>
//   );
// }


"use client";

import ProHeader from "./ProHeader";
import ProCards from "./ProCards";
import ProHighlights from "./ProHighlights";
import ProBottomNav from "./ProBottomNav";
import ProProfilePanel from "./ProProfilePanel";

export default function ProDashboard() {
  return (
    <div className="min-h-screen bg-[#FBF7FB] text-slate-900">

      <ProHeader />

      <div className="flex">

        {/* LEFT PROFILE PANEL (fixed position) */}
        <ProProfilePanel />

        {/* MAIN DASHBOARD CONTENT */}
        <main
          className="
            w-full
            px-4 lg:px-8 py-8
            xl:pl-[350px]     /* Shift dashboard RIGHT */
            max-w-[1650px] mx-auto
          "
        >
          {/* Top cards */}
          <ProCards />

          {/* Highlights section */}
          <div className="mt-8">
            <ProHighlights />
          </div>
        </main>

      </div>

      <ProBottomNav />
    </div>
  );
}
