// "use client";

// import { useProView } from "../ProViewContext";

// export default function AddWinePage() {
//   const { setView } = useProView();

//   return (
//     <div className="max-w-md mx-auto">
//       <h2 className="text-xl font-semibold mb-4">Add Wine</h2>

//       <div className="bg-purple-50 p-4 rounded-lg mb-6 text-sm">
//         <p>• Ensure label is clear</p>
//         <p>• Avoid blur</p>
//       </div>

//       <button
//         onClick={() => setView("cellar-preview")}
//         className="w-full py-3 bg-purple-600 text-white rounded-lg mb-3"
//       >
//         Take Photo
//       </button>

//       <button className="w-full py-3 border rounded-lg">
//         Upload from Gallery
//       </button>
//     </div>
//   );
// }

// "use client";
// import { useProView } from "../ProViewContext";
// import { Camera, Image as ImageIcon, ChevronLeft } from "lucide-react";

// export default function AddWinePage() {
//   const { setView } = useProView();

//   return (
//     <div className="max-w-xl mx-auto">
//       <button onClick={() => setView("cellar")} className="flex items-center text-gray-500 mb-6">
//         <ChevronLeft /> Back
//       </button>
      
//       <h2 className="text-2xl font-bold text-[#4A154B] text-center mb-8">Add Wine</h2>

//       <div className="bg-[#F3E8FF] p-6 rounded-2xl mb-10">
//         <h3 className="font-semibold text-gray-700 mb-4">Tips for best capture:</h3>
//         <ul className="space-y-4 text-sm text-gray-600">
//           <li className="flex gap-3">
//             <span className="text-[#4B2B5F]">•</span> Ensure the label is flat and well-lit.
//           </li>
//           <li className="flex gap-3">
//             <span className="text-[#4B2B5F]">•</span> Hold the phone steady to avoid blur.
//           </li>
//           <li className="flex gap-3">
//             <span className="text-[#4B2B5F]">•</span> Only the label should be in the frame (minimal background).
//           </li>
//         </ul>
//       </div>

//       <div className="space-y-4">
//         <button
//           onClick={() => setView("cellar")}
//           className="w-full py-4 bg-[#F3E8FF] text-[#4B2B5F] font-semibold rounded-2xl flex items-center justify-center gap-3 hover:bg-[#E9D5FF] transition"
//         >
//           <Camera className="w-6 h-6" /> Take Photo
//         </button>

//         <button className="w-full py-4 bg-[#F3E8FF] text-[#4B2B5F] font-semibold rounded-2xl flex items-center justify-center gap-3 hover:bg-[#E9D5FF] transition">
//           <ImageIcon className="w-6 h-6" /> Upload from gallery
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";
import { useProView } from "../ProViewContext";
import { Camera, Image as ImageIcon, ChevronLeft } from "lucide-react";

export default function AddWinePage() {
  const { setView } = useProView();

  return (
    <div className="max-w-xl mx-auto">
      <button onClick={() => setView("cellar")} className="flex items-center text-gray-500 mb-6">
        <ChevronLeft /> Back
      </button>
      
      <h2 className="text-2xl font-bold text-[#4B2B5F] text-center mb-8">Add Wine</h2>

      <div className="bg-[#F3E8FF] p-6 rounded-2xl mb-10">
        <h3 className="font-semibold text-gray-700 mb-4">Tips for best capture:</h3>
        <ul className="space-y-4 text-sm text-gray-600">
          <li className="flex gap-3">
            <span className="text-[#4B2B5F]">•</span> Ensure the label is flat and well-lit.
          </li>
          <li className="flex gap-3">
            <span className="text-[#4B2B5F]">•</span> Hold the phone steady to avoid blur.
          </li>
          <li className="flex gap-3">
            <span className="text-[#4B2B5F]">•</span> Only the label should be in the frame (minimal background).
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <button
          onClick={() => setView("cellar-preview")}
          className="w-full py-4 bg-[#F3E8FF] text-[#4B2B5F] font-semibold rounded-2xl flex items-center justify-center gap-3 hover:bg-[#E9D5FF] transition"
        >
          <Camera className="w-6 h-6" /> Take Photo
        </button>

        <button className="w-full py-4 bg-[#F3E8FF] text-[#4B2B5F] font-semibold rounded-2xl flex items-center justify-center gap-3 hover:bg-[#E9D5FF] transition">
          <ImageIcon className="w-6 h-6" /> Upload from gallery
        </button>
      </div>
    </div>
  );
}