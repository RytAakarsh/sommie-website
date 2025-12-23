// "use client";

// import ProHeader from "./ProHeader";
// import ProCards from "./ProCards";
// import ProHighlights from "./ProHighlights";
// import ProBottomNav from "./ProBottomNav";
// import ProProfilePanel from "./ProProfilePanel";
// import ProProfilePage from "./ProProfilePage";
// import EditProfilePage from "./EditProfilePage";
// import { useProView } from "./ProViewContext";

// export default function ProDashboardContent() {
//   const { view } = useProView();

//   return (
//     <div className="min-h-screen bg-[#FBF7FB]">

//       <ProHeader />

//       <div className="flex">
//         {/* LEFT PANEL */}
//         <ProProfilePanel />

//         {/* RIGHT CONTENT */}
//         <main className="w-full xl:pl-[350px] px-4 lg:px-8 py-8 max-w-[1650px] mx-auto">

//           {view === "dashboard" && (
//             <>
//               <ProCards />
//               <div className="mt-8">
//                 <ProHighlights />
//               </div>
//             </>
//           )}

//           {view === "profile" && <ProProfilePage />}

//           {view === "edit-profile" && <EditProfilePage />}

//         </main>
//       </div>

//       <ProBottomNav />
//     </div>
//   );
// }

"use client";

import { useProView } from "./ProViewContext";
import ProHeader from "./ProHeader";
import ProCards from "./ProCards";
import ProHighlights from "./ProHighlights";
import ProProfilePanel from "./ProProfilePanel";
import ProBottomNav from "./ProBottomNav";

import ProProfilePage from "./ProProfilePage";
import EditProfilePage from "./EditProfilePage";

import CellarPage from "./cellar/CellarPage";
import AddWinePage from "./cellar/AddWinePage";
import PreviewWinePage from "./cellar/PreviewWinePage";
import ConfirmWinePage from "./cellar/ConfirmWinePage";

export default function ProDashboardContent() {
  const { view } = useProView();

  return (
    <div className="min-h-screen bg-[#FBF7FB]">
      <ProHeader />

      <div className="flex">
        <ProProfilePanel />

        <main className="w-full xl:pl-[350px] px-4 lg:px-8 py-8 max-w-[1650px] mx-auto">
          {view === "dashboard" && (
            <>
              <ProCards />
              <div className="mt-8">
                <ProHighlights />
              </div>
            </>
          )}

          {view === "profile" && <ProProfilePage />}
          {view === "edit-profile" && <EditProfilePage />}

          {view === "cellar" && <CellarPage />}
          {view === "cellar-add" && <AddWinePage />}
          {view === "cellar-preview" && <PreviewWinePage />}
          {view === "cellar-confirm" && <ConfirmWinePage />}
        </main>
      </div>

      <ProBottomNav />
    </div>
  );
}
