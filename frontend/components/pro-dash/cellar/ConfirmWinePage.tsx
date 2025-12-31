// "use client";

// import { useProView } from "../ProViewContext";

// export default function ConfirmWinePage() {
//   const { setView } = useProView();

//   return (
//     <div className="max-w-xl mx-auto">
//       <h2 className="text-xl font-semibold mb-4">Addition Confirmation</h2>

//       <img src="/wine.png" className="w-40 mb-6 rounded" />

//       <div className="space-y-3">
//         <input className="input" placeholder="Wine Name" />
//         <input className="input" placeholder="Producer" />
//         <input className="input" placeholder="Region" />
//         <input className="input" placeholder="Vintage" />
//       </div>

//       <button
//         onClick={() => setView("cellar")}
//         className="w-full mt-6 py-3 bg-purple-600 text-white rounded-lg"
//       >
//         Confirm Addition
//       </button>
//     </div>
//   );
// }

// "use client";
// import { useProView } from "../ProViewContext";
// import { ChevronLeft, XCircle } from "lucide-react";

// export default function ConfirmWinePage() {
//   const { setView } = useProView();

//   return (
//     <div className="max-w-3xl mx-auto pb-12">
//       <div className="flex items-center justify-between mb-6">
//         <button onClick={() => setView("cellar")} className="flex items-center text-gray-500">
//           <ChevronLeft /> Back
//         </button>
//         <h2 className="text-2xl ml-6 font-bold text-[#4B2B5F]">Addition Confirmation</h2>
//         <div className="w-10"></div> {/* Spacer */}
//       </div>

//       <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm space-y-8">
//         {/* Label Preview */}
//         <section>
//           <h3 className="text-gray-500 font-medium mb-3">Bottle Label Photo</h3>
//           <div className="bg-[#F3E8FF] rounded-2xl p-4 flex justify-center">
//             <img src="https://imgs.search.brave.com/rq4kWzwJG4Ydc8gkUfTocPJmBQVyx23OIvsWtg567q8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnJl/ZGQuaXQvcmFsOTNz/Y3kzYzVmMS5qcGVn" className="h-48 rounded shadow-md" alt="Label" />
//           </div>
//         </section>

//         {/* Extracted Info Section */}
//         <section className="space-y-4">
//           <h3 className="text-gray-500 font-medium border-b pb-2">Extracted Information</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="space-y-1">
//               <label className="text-xs text-gray-400">Wine Name</label>
//               <input className="w-full bg-[#F3F4F6] border-none rounded-xl p-3" defaultValue="Wine" />
//             </div>
//             <div className="space-y-1">
//               <label className="text-xs text-gray-400">Producer</label>
//               <input className="w-full bg-[#F3F4F6] border-none rounded-xl p-3" placeholder="Producer name..." />
//             </div>
//             <div className="space-y-1 md:col-span-2">
//               <label className="text-xs text-gray-400">Description (AI-generated)</label>
//               <textarea 
//                 className="w-full bg-[#F3F4F6] border-none rounded-xl p-3 h-24 text-sm"
//                 defaultValue="A rich, complex blend of Cabernet Sauvignon and Merlot..."
//               />
//             </div>
//             {/* Split row for small inputs */}
//             <div className="grid grid-cols-2 gap-4 md:col-span-2">
//                <div className="space-y-1">
//                  <label className="text-xs text-gray-400">Alcohol (%)</label>
//                  <select className="w-full bg-[#F3F4F6] border-none rounded-xl p-3"><option>13.5</option></select>
//                </div>
//                <div className="space-y-1">
//                  <label className="text-xs text-gray-400">Serving Temp (°C)</label>
//                  <select className="w-full bg-[#F3F4F6] border-none rounded-xl p-3"><option>18</option></select>
//                </div>
//             </div>
//           </div>
//         </section>

//         {/* Cellar Details */}
//         <section className="space-y-4">
//           <h3 className="text-gray-500 font-medium border-b pb-2">Cellar Details</h3>
//           <div className="space-y-4">
//             <div className="space-y-1">
//               <label className="text-xs text-gray-400">Number of Bottles</label>
//               <input className="w-full bg-[#F3F4F6] border-none rounded-xl p-3" type="number" defaultValue="1" />
//             </div>
//             <div className="space-y-1">
//               <label className="text-xs text-gray-400">Personal Notes (Optional)</label>
//               <textarea className="w-full bg-[#F3F4F6] border-none rounded-xl p-3 h-20" placeholder="Write here..." />
//             </div>
//           </div>
//         </section>

//         {/* Action Buttons */}
//         <div className="flex flex-col gap-3 pt-4">
//           <button
//             onClick={() => setView("cellar")}
//             className="w-full py-4 bg-[#4B2B5F] text-white font-bold rounded-2xl hover:bg-[#351036] shadow-lg transition"
//           >
//             Confirm Addition
//           </button>
//           <button className="w-full py-4 bg-[#F3E8FF] text-[#4B2B5F] font-semibold rounded-2xl hover:bg-[#E9D5FF] transition">
//             Edit Information
//           </button>
//           <button className="flex items-center justify-center gap-2 text-red-400 text-sm mt-2">
//             <XCircle className="w-4 h-4" /> Cancel Registration
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import { useProView } from "../ProViewContext";
import { ChevronLeft, XCircle } from "lucide-react";

export default function ConfirmWinePage() {
  const { setView } = useProView();

  return (
    <div className="max-w-3xl mx-auto pb-12">
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => setView("cellar-preview")} className="flex items-center text-gray-500">
          <ChevronLeft /> Back
        </button>
        <h2 className="text-2xl font-bold text-[#4B2B5F]">Addition Confirmation</h2>
        <div className="w-10"></div> {/* Spacer */}
      </div>

      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm space-y-8">
        {/* Label Preview */}
        <section>
          <h3 className="text-gray-500 font-medium mb-3">Bottle Label Photo</h3>
          <div className="bg-[#F3E8FF] rounded-2xl p-4 flex justify-center">
            <img src="https://imgs.search.brave.com/rq4kWzwJG4Ydc8gkUfTocPJmBQVyx23OIvsWtg567q8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnJl/ZGQuaXQvcmFsOTNz/Y3kzYzVmMS5qcGVn" className="h-48 rounded shadow-md" alt="Label" />
          </div>
        </section>

        {/* Extracted Info Section */}
        <section className="space-y-4">
          <h3 className="text-gray-500 font-medium border-b pb-2">Extracted Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs text-gray-400">Wine Name</label>
              <input className="w-full bg-[#F3F4F6] border-none rounded-xl p-3" defaultValue="Wine" />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-gray-400">Producer</label>
              <input className="w-full bg-[#F3F4F6] border-none rounded-xl p-3" placeholder="Producer name..." />
            </div>
            <div className="space-y-1 md:col-span-2">
              <label className="text-xs text-gray-400">Description (AI-generated)</label>
              <textarea 
                className="w-full bg-[#F3F4F6] border-none rounded-xl p-3 h-24 text-sm"
                defaultValue="A rich, complex blend of Cabernet Sauvignon and Merlot..."
              />
            </div>
            {/* Split row for small inputs */}
            <div className="grid grid-cols-2 gap-4 md:col-span-2">
               <div className="space-y-1">
                 <label className="text-xs text-gray-400">Alcohol (%)</label>
                 <select className="w-full bg-[#F3F4F6] border-none rounded-xl p-3"><option>13.5</option></select>
               </div>
               <div className="space-y-1">
                 <label className="text-xs text-gray-400">Serving Temp (°C)</label>
                 <select className="w-full bg-[#F3F4F6] border-none rounded-xl p-3"><option>18</option></select>
               </div>
            </div>
          </div>
        </section>

        {/* Cellar Details */}
        <section className="space-y-4">
          <h3 className="text-gray-500 font-medium border-b pb-2">Cellar Details</h3>
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs text-gray-400">Number of Bottles</label>
              <input className="w-full bg-[#F3F4F6] border-none rounded-xl p-3" type="number" defaultValue="1" />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-gray-400">Personal Notes (Optional)</label>
              <textarea className="w-full bg-[#F3F4F6] border-none rounded-xl p-3 h-20" placeholder="Write here..." />
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 pt-4">
          <button
            onClick={() => setView("cellar")}
            className="w-full py-4 bg-[#4B2B5F] text-white font-bold rounded-2xl hover:bg-[#4B2B5F] shadow-lg transition"
          >
            Confirm Addition
          </button>
          <button className="w-full py-4 bg-[#F3E8FF] text-[#4B2B5F] font-semibold rounded-2xl hover:bg-[#E9D5FF] transition">
            Edit Information
          </button>
          <button className="flex items-center justify-center gap-2 text-red-400 text-sm mt-2">
            <XCircle className="w-4 h-4" /> Cancel Registration
          </button>
        </div>
      </div>
    </div>
  );
}