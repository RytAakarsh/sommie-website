// "use client";

// import { useProView } from "../ProViewContext";

// export default function CellarPage() {
//   const { setView } = useProView();

//   return (
//     <div className="max-w-4xl mx-auto">
//       <h2 className="text-xl font-semibold mb-4">My Cellar</h2>

//       {/* Filters */}
//       <div className="grid grid-cols-3 gap-3 mb-6">
//         <select className="input">All Type</select>
//         <select className="input">All Regions</select>
//         <select className="input">Name (A-Z)</select>
//       </div>

//       {/* List */}
//       {[1,2,3].map(i => (
//         <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl mb-3 shadow">
//           <img src="/wine.png" className="w-14 h-14 rounded" />
//           <div className="flex-1">
//             <p className="font-semibold">Abbazia Monte Oliveto</p>
//             <p className="text-xs text-gray-500">Vintage 06 · Tuscany</p>
//           </div>
//         </div>
//       ))}

//       {/* ADD BUTTON */}
//       <button
//         onClick={() => setView("cellar-add")}
//         className="fixed bottom-6 right-6 bg-purple-600 text-white w-14 h-14 rounded-full text-2xl shadow-lg"
//       >
//         +
//       </button>
//     </div>
//   );
// }

// "use client";
// import { useProView } from "../ProViewContext";
// import { Info, Plus, ChevronDown } from "lucide-react";

// export default function CellarPage() {
//   const { setView } = useProView();

//   const wines = [
//     { id: 1, name: "Abbazia Monte Oliveto", vintage: "06", qty: "04", region: "Tuscany", owner: "Jackson" },
//     { id: 2, name: "Abbazia Monte Oliveto", vintage: "06", qty: "04", region: "Tuscany", owner: "Jackson" },
//     { id: 3, name: "Abbazia Monte Oliveto", vintage: "06", qty: "04", region: "Tuscany", owner: "Jackson" },
//   ];

//   return (
//     <div className="max-w-6xl mx-auto pb-20">
//       <h2 className="text-2xl font-bold text-[#4B2B5F] mb-6">My Cellar</h2>

//       {/* Filter & Sort Section */}
//       <div className="mb-8 space-y-4">
//         <h3 className="text-gray-500 font-medium">Filter & Sort</h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div className="space-y-1">
//             <label className="text-xs text-gray-400 ml-1">Type</label>
//             <div className="relative">
//               <select className="w-full bg-white border-none rounded-xl p-4 shadow-sm appearance-none focus:ring-2 focus:ring-purple-200">
//                 <option>All Type</option>
//               </select>
//               <ChevronDown className="absolute right-4 top-4 text-gray-400 w-5 h-5" />
//             </div>
//           </div>
//           <div className="space-y-1">
//             <label className="text-xs text-gray-400 ml-1">Region</label>
//             <div className="relative">
//               <select className="w-full bg-white border-none rounded-xl p-4 shadow-sm appearance-none">
//                 <option>All regions</option>
//               </select>
//               <ChevronDown className="absolute right-4 top-4 text-gray-400 w-5 h-5" />
//             </div>
//           </div>
//           <div className="space-y-1">
//             <label className="text-xs text-gray-400 ml-1">Sort by</label>
//             <div className="relative">
//               <select className="w-full bg-white border-none rounded-xl p-4 shadow-sm appearance-none">
//                 <option>Name (A-Z)</option>
//               </select>
//               <ChevronDown className="absolute right-4 top-4 text-gray-400 w-5 h-5" />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-between items-center mb-4">
//         <h3 className="text-gray-500 font-medium">Total Wine (256)</h3>
//         <button className="text-sm text-gray-400 underline">See all</button>
//       </div>

//       {/* Wine List Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//         {wines.map((wine) => (
//           <div key={wine.id} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-purple-50 hover:shadow-md transition-shadow relative">
//             <div className="w-20 h-20 bg-gray-50 rounded-lg flex items-center justify-center p-2">
//               <img src="https://imgs.search.brave.com/QbRcyIwwvp7w17V1NgRg8Fw0sjlbTPWjmnknXfOJXtg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdG9t/cHN0aWNrZXJzLmNv/bS9jZG4vc2hvcC9w/cm9kdWN0cy9CT1BQ/d2luZWxhYmVscy1j/aXJjbGUtbW9ja3Vw/LTA1MDUyMF9kM2Zm/NDYyMy01Zjk2LTQz/YWQtOWFmNC00YzY3/YTIxMDJkMzNfMzAw/eC5qcGc_dj0xNzQ1/MjYxNDA3" alt="wine" className="h-full object-contain" />
//             </div>
//             <div className="flex-1">
//               <div className="flex justify-between items-start">
//                 <h4 className="font-semibold text-gray-800">{wine.name}</h4>
//                 <Info className="w-5 h-5 text-gray-400 cursor-pointer" />
//               </div>
//               <div className="text-sm text-gray-500 mt-1">
//                 <span className="font-medium">Vintage:{wine.vintage}</span> 
//                 <span className="ml-3 font-medium">Quantity: {wine.qty}</span>
//               </div>
//               <p className="text-sm text-gray-400">{wine.region}</p>
//               <span className="absolute bottom-4 right-4 text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded">
//                 {wine.owner}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ADD BUTTON */}
//       <button
//         onClick={() => setView("cellar")}
//         className="fixed bottom-25 right-8 md:bottom-12 md:right-12 bg-[#4B2B5F] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:bg-[#4B2B5F] transition-all"
//       >
//         <Plus className="w-8 h-8" />
//       </button>
//     </div>
//   );
// }

"use client";
import { useProView } from "../ProViewContext";
import { Info, Plus, ChevronDown } from "lucide-react";

export default function CellarPage() {
  const { setView } = useProView();

  const wines = [
    { id: 1, name: "Abbazia Monte Oliveto", vintage: "06", qty: "04", region: "Tuscany", owner: "Jackson" },
    { id: 2, name: "Abbazia Monte Oliveto", vintage: "06", qty: "04", region: "Tuscany", owner: "Jackson" },
    { id: 3, name: "Abbazia Monte Oliveto", vintage: "06", qty: "04", region: "Tuscany", owner: "Jackson" },
  ];

  return (
    <div className="max-w-6xl mx-auto pb-20">
      <h2 className="text-2xl font-bold text-[#4B2B5F] mb-6">My Cellar</h2>

      {/* Filter & Sort Section */}
      <div className="mb-8 space-y-4">
        <h3 className="text-gray-500 font-medium">Filter & Sort</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-1">
            <label className="text-xs text-gray-400 ml-1">Type</label>
            <div className="relative">
              <select className="w-full bg-white border-none rounded-xl p-4 shadow-sm appearance-none focus:ring-2 focus:ring-purple-200">
                <option>All Type</option>
              </select>
              <ChevronDown className="absolute right-4 top-4 text-gray-400 w-5 h-5" />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-xs text-gray-400 ml-1">Region</label>
            <div className="relative">
              <select className="w-full bg-white border-none rounded-xl p-4 shadow-sm appearance-none">
                <option>All regions</option>
              </select>
              <ChevronDown className="absolute right-4 top-4 text-gray-400 w-5 h-5" />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-xs text-gray-400 ml-1">Sort by</label>
            <div className="relative">
              <select className="w-full bg-white border-none rounded-xl p-4 shadow-sm appearance-none">
                <option>Name (A-Z)</option>
              </select>
              <ChevronDown className="absolute right-4 top-4 text-gray-400 w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <h3 className="text-gray-500 font-medium">Total Wine (256)</h3>
        <button className="text-sm text-gray-400 underline">See all</button>
      </div>

      {/* Wine List Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {wines.map((wine) => (
          <div key={wine.id} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-purple-50 hover:shadow-md transition-shadow relative">
            <div className="w-20 h-20 bg-gray-50 rounded-lg flex items-center justify-center p-2">
              <img src="https://imgs.search.brave.com/rq4kWzwJG4Ydc8gkUfTocPJmBQVyx23OIvsWtg567q8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnJl/ZGQuaXQvcmFsOTNz/Y3kzYzVmMS5qcGVn" alt="wine" className="h-full object-contain" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h4 className="font-semibold text-gray-800">{wine.name}</h4>
                <Info className="w-5 h-5 text-gray-400 cursor-pointer" />
              </div>
              <div className="text-sm text-gray-500 mt-1">
                <span className="font-medium">Vintage:{wine.vintage}</span> 
                <span className="ml-3 font-medium">Quantity: {wine.qty}</span>
              </div>
              <p className="text-sm text-gray-400">{wine.region}</p>
              <span className="absolute bottom-4 right-4 text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded">
                {wine.owner}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ADD BUTTON */}
      <button
        onClick={() => setView("cellar-add")}
        className="fixed bottom-24 right-8 md:bottom-12 md:right-12 bg-[#4B2B5F] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:bg-[#4B2B5F] transition-all"
      >
        <Plus className="w-8 h-8" />
      </button>
    </div>
  );
}