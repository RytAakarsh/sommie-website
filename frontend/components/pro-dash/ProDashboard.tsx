
// "use client";

// import ProHeader from "./ProHeader";
// import ProCards from "./ProCards";
// import ProHighlights from "./ProHighlights";
// import ProBottomNav from "./ProBottomNav";
// import ProProfilePanel from "./ProProfilePanel";

// export default function ProDashboard() {
//   return (
//     <div className="min-h-screen bg-[#FBF7FB] text-slate-900">

//       <ProHeader />

//       <div className="flex">

//         {/* LEFT PROFILE PANEL (fixed position) */}
//         <ProProfilePanel />

//         {/* MAIN DASHBOARD CONTENT */}
//         <main
//           className="
//             w-full
//             px-4 lg:px-8 py-8
//             xl:pl-[350px]     /* Shift dashboard RIGHT */
//             max-w-[1650px] mx-auto
//           "
//         >
//           {/* Top cards */}
//           <ProCards />

//           {/* Highlights section */}
//           <div className="mt-8">
//             <ProHighlights />
//           </div>
//         </main>

//       </div>

//       <ProBottomNav />
//     </div>
//   );
// }

// "use client";

// import ProHeader from "./ProHeader";
// import ProCards from "./ProCards";
// import ProHighlights from "./ProHighlights";
// import ProBottomNav from "./ProBottomNav";
// import ProProfilePanel from "./ProProfilePanel";
// import ProProfilePage from "./ProProfilePage";
// import { ProViewProvider, useProView } from "./ProViewContext";

// function DashboardContent() {
//   const { view } = useProView();

//   if (view === "profile") {
//     return <ProProfilePage />;
//   }

//   return (
//     <>
//       <ProCards />
//       <div className="mt-8">
//         <ProHighlights />
//       </div>
//     </>
//   );
// }

// export default function ProDashboard() {
//   return (
//     <ProViewProvider>
//       <div className="min-h-screen bg-[#FBF7FB] text-slate-900">
//         <ProHeader />

//         <div className="flex">
//           {/* LEFT SIDEBAR (desktop only) */}
//           <ProProfilePanel />

//           {/* MAIN CONTENT */}
//           <main
//             className="
//               w-full
//               px-4 lg:px-8 py-8
//               xl:pl-[350px]
//               max-w-[1650px] mx-auto
//             "
//           >
//             <DashboardContent />
//           </main>
//         </div>

//         <ProBottomNav />
//       </div>
//     </ProViewProvider>
//   );
// }

import { ProViewProvider } from "./ProViewContext";
import ProDashboardContent from "./ProDashboardContent";

export default function ProDashboard() {
  return (
    <ProViewProvider>
      <ProDashboardContent />
    </ProViewProvider>
  );
}
