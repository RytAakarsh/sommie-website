// // components/pro-dash/ProHeader.tsx
// "use client";

// import React from "react";
// import Image from "next/image";
// import { usePathname } from "next/navigation";

// export default function ProHeader() {
//   // Example user values — replace with actual user data/state
//   const userName = "Alice";
//   const greeting = `Hello ${userName}! Welcome to PRO, Good Afternoon!`;

//   return (
//     <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
//       <div className="max-w-6xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
//         <div className="flex items-center gap-4">
//           <button className="p-2 border rounded-md hidden md:inline-flex">
//             {/* back icon placeholder */}
//             ←
//           </button>

//           <div className="flex flex-col items-start md:items-center md:flex-row md:gap-4">
//             <div className="h-10 w-auto">
//               <Image src="/pro-logo.png" alt="Sommie" width={140} height={36} className="object-contain" />
//             </div>
//             <div className="hidden md:block text-sm text-gray-500 tracking-wide">Sommelier Virtual</div>
//           </div>
//         </div>

//         <div className="flex items-center gap-4">
//           <div className="text-sm text-gray-600 hidden md:block">06/06</div>
//           <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#6D3FA6] to-[#A66EE6] text-white grid place-items-center font-semibold">A</div>
//         </div>
//       </div>

//       {/* subtle progress bar */}
//       <div className="max-w-6xl mx-auto px-6 lg:px-8 pb-4">
//         <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
//           <div style={{ width: "24%" }} className="h-full bg-gradient-to-r from-[#6D3FA6] to-[#A66EE6]" />
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto px-6 lg:px-8 py-5">
//         <h2 className="text-lg md:text-xl font-semibold text-slate-800">Hello Alice! Welcome to PRO, Good Afternoon!</h2>
//       </div>
//     </header>
//   );
// }


"use client";

import React from "react";
import Image from "next/image";

export default function ProHeader() {
  const userName = "Alice";

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6 lg:px-8 h-20">
        
        {/* Left - Back Button + Logo */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex p-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50">
            ←
          </button>

          <div className="flex flex-col md:flex-row md:items-center md:gap-3">
            <Image
              src="/pro-logo.png"
              alt="Sommie"
              width={160}
              height={40}
              className="object-contain"
            />
            <p className="hidden md:block text-xs text-gray-500 tracking-wide">
              Sommelier Virtual
            </p>
          </div>
        </div>

        {/* Right - Date + Avatar */}
        <div className="flex items-center gap-4">
          <p className="hidden md:block text-sm text-gray-700">06/06</p>

          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6D3FA6] to-[#A66EE6] grid place-items-center text-white font-semibold shadow-md">
            A
          </div>
        </div>
      </div>

      {/* Purple Progress Bar */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="h-1 rounded-full bg-gray-200 overflow-hidden mb-2">
          <div className="h-full w-[100%] bg-gradient-to-r from-[#6D3FA6] to-[#A66EE6]" />
        </div>
      </div>

      {/* Greeting */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 pb-4">
        <h2 className="text-xl  font-semibold text-slate-800 mt-4">
          Hello {userName}! Welcome to PRO, Good Afternoon!
        </h2>
      </div>
    </header>
  );
}
