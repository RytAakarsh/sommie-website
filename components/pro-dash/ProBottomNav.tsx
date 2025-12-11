// // components/pro-dash/ProBottomNav.tsx
// "use client";

// import React from "react";

// export default function ProBottomNav() {
//   return (
//     <nav className="fixed bottom-4 left-0 right-0 w-full md:hidden z-40">
//       <div className="max-w-3xl mx-auto px-4">
//         <div className="bg-gradient-to-r from-[#6D3FA6] to-[#A66EE6] rounded-full px-3 py-2 flex justify-between items-center text-white shadow-lg">
//           <button className="flex-1 text-center py-2">Home</button>
//           <button className="flex-1 text-center py-2">Cellar</button>
//           <button className="flex-1 text-center py-2">Chat</button>
//           <button className="flex-1 text-center py-2">Benefit Club</button>
//         </div>
//       </div>
//     </nav>
//   );
// }

"use client";

import React from "react";

export default function ProBottomNav() {
  return (
    <nav className="fixed bottom-5 left-0 right-0 md:hidden z-50">
      <div className="max-w-md mx-auto px-2">
        <div className="bg-gradient-to-r from-[#6D3fa6] to-[#6d3fa6] text-white flex justify-between rounded-full py-4 px-6 shadow-lg">
          <button className="flex-1 text-center">Home</button>
          <button className="flex-1 text-center">Cellar</button>
          <button className="flex-1 text-center">Chat</button>
          <button className="flex-1 text-center">Benefits</button>
        </div>
      </div>
    </nav>
  );
}
