// "use client";

// import { useProView } from "./ProViewContext";
// import { ArrowLeft } from "lucide-react";

// const avatars = [
//   { name: "Lucia Herrera", role: "Regional Specialist" },
//   { name: "Hakuto Akiyama", role: "Precision Sommelier" },
//   { name: "Karim Al-Nassir", role: "Global Pairing Expert" },
//   { name: "Ama Kumasi", role: "Warm-Climate Enthusiast" },
//   { name: "Dom Aurelius", role: "Expert in classic Wines" },
//   { name: "Amelie", role: "Trend Enthusiast" },
// ];

// export default function EditProfilePage() {
//   const { setView } = useProView();

//   return (
//     <div className="max-w-3xl bg-white rounded-2xl shadow-sm border p-6">

//       {/* Mobile Back */}
//       <button
//         onClick={() => setView("profile")}
//         className="xl:hidden mb-4 flex items-center gap-2"
//       >
//         <ArrowLeft /> Back
//       </button>

//       <h2 className="text-lg font-semibold mb-4">Edit Your Profile</h2>
//       <p className="text-sm text-gray-500 mb-6">
//         Select the Avatar that better represent you
//       </p>

//       {/* Avatar List */}
//       <div className="space-y-3">
//         {avatars.map(a => (
//           <div
//             key={a.name}
//             className="flex items-center justify-between p-4 rounded-xl bg-purple-50"
//           >
//             <div>
//               <p className="font-semibold">{a.name}</p>
//               <p className="text-xs text-purple-600">{a.role}</p>
//             </div>
//             <button className="text-xs text-purple-700 border px-3 py-1 rounded-lg">
//               Read More
//             </button>
//           </div>
//         ))}
//       </div>

//       <button className="w-full bg-purple-700 text-white py-3 rounded-xl mt-6">
//         Apply
//       </button>

//       {/* Edit Form */}
//       <div className="mt-8 space-y-4">
//         <input placeholder="Name" className="input" />
//         <input placeholder="Email" className="input" />
//         <input placeholder="Phone Number" className="input" />
//         <input placeholder="Address" className="input" />
//       </div>

//       <div className="flex gap-3 mt-6">
//         <button className="flex-1 border rounded-xl py-3">Cancel</button>
//         <button className="flex-1 bg-purple-700 text-white rounded-xl py-3">
//           Save Changes
//         </button>
//       </div>

//       <button className="w-full mt-4 text-red-500">Logout</button>
//     </div>
//   );
// }


"use client";

import React from "react";
import { useProView } from "./ProViewContext";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

// Assuming you save the individual character images into your public/assets folder:

const avatars = [
  { 
    name: "Lucía Herrera", 
    role: "Regional Specialist", 
    img: "/avatars/lucia-herrera.png.png" 
  },
  { 
    name: "Hakuto Akiyama", 
    role: "Precision Sommelier", 
    img: "/avatars/hakuto-akiyama.png.png" 
  },
  { 
    name: "Karim Al-Nassir", 
    role: "Global Pairing Expert", 
    img: "/avatars/karim-al-nassir.png.png" 
  },
  { 
    name: "Ama Kumasi", 
    role: "Warm-Climate Enthusiast", 
    img: "/avatars/ama-kumasi.png.png" 
  },
  { 
    name: "Dom Aurelius", 
    role: "Expert in classic Wines", 
    img: "/avatars/dom-aurelius.png.png" 
  },
  { 
    name: "Amelie", 
    role: "Trend Enthusiast", 
    img: "/avatars/amelie.png.png" 
  },
];


export default function EditProfilePage() {
  const { setView } = useProView();

  return (
    <div className="max-w-6xl mx-auto bg-[#F3F1F1] min-h-screen pb-10">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white xl:bg-transparent">
        <button
          onClick={() => setView("profile")}
          className="flex items-center gap-2 text-gray-600"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-bold text-[#4B2B5F]">Edit Your Profile</h1>
        <div className="w-8" /> {/* Spacer for centering */}
      </div>

      <div className="px-4 lg:px-8 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* LEFT COLUMN: AVATAR SELECTION */}
          <section>
            <h2 className="text-gray-700 font-medium mb-1">Select the Avatar that better represent you</h2>
            <div className="space-y-3 mt-4">
              {avatars.map((a) => (
                <div
                  key={a.name}
                  className="flex items-center justify-between p-3 rounded-xl bg-[#EBE5F0] border border-transparent hover:border-purple-300 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <img src={a.img} alt={a.name} className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                    <div>
                      <p className="font-bold text-[#4B2B5F]">{a.name}</p>
                      <p className="text-xs text-purple-600 font-medium">{a.role}</p>
                    </div>
                  </div>
                  <button className="text-[10px] font-bold text-[#4B2B5F] border border-[#4B2B5F] px-3 py-1 rounded-md bg-transparent">
                    Read More
                  </button>
                </div>
              ))}
            </div>

            <button className="w-full bg-[#4B2B5F] text-white py-3 rounded-xl mt-6 font-bold shadow-md hover:bg-[#350a38] transition-colors">
              Apply
            </button>
          </section>

          {/* RIGHT COLUMN: USER INFO & SUBSCRIPTION */}
          <section className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-bold text-gray-700">Edit User info</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputGroup label="Name" placeholder="Jack" />
                <InputGroup label="Email" placeholder="jack@gmail.com" />
                <InputGroup label="Phone number" placeholder="+1 23 456 7890" />
                <InputGroup label="CPF" placeholder="23.987.343.34" />
              </div>
              
              <InputGroup label="Address" placeholder="123 Wine St., Napa Valley" />

              <div className="grid grid-cols-2 gap-4">
                <InputGroup label="Date of birth" placeholder="01/02/1990" />
                <InputGroup label="Gender" placeholder="Male" />
              </div>
            </div>

            {/* Subscription Section */}
            <div className="bg-transparent space-y-4">
              <h3 className="font-bold text-gray-700">Subscription Plan</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputGroup label="Current Plan" placeholder="Pro Elite Sommelier" disabled />
                <InputGroup label="Renewal date" placeholder="2026-03-01" disabled />
              </div>
              <button className="w-full border border-gray-400 text-gray-600 py-3 rounded-md font-medium bg-[#E8E8E8]">
                Manage Subscription
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button className="flex-1 bg-[#F5EEF8] text-[#4B2B5F] rounded-xl py-4 font-bold border border-purple-100">
                Cancel
              </button>
              <button className="flex-1 bg-[#4B2B5F] text-white rounded-xl py-4 font-bold shadow-lg">
                Save Changes
              </button>
            </div>

            <button className="w-full bg-[#FFE5E5] text-[#FF4D4D] py-4 rounded-xl font-bold mt-2">
              Logout
            </button>
          </section>

        </div>
      </div>
    </div>
  );
}

// Helper Component for inputs to keep code clean
function InputGroup({ label, placeholder, disabled = false }: { label: string; placeholder: string; disabled?: boolean }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-semibold text-gray-500 ml-1">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        className={`p-3 rounded-lg bg-[#F5EEF8] text-gray-700 border-none focus:ring-2 focus:ring-purple-400 outline-none transition-all placeholder:text-gray-400 ${
          disabled ? "opacity-70 cursor-not-allowed" : ""
        }`}
      />
    </div>
  );
}