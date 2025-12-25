// "use client";

// import { ArrowLeft } from "lucide-react";
// import { useProView } from "./ProViewContext";

// export default function BenefitsClubPage() {
//   const { setView } = useProView();

//   return (
//     <div className="max-w-6xl mx-auto bg-[#EFECEC] min-h-screen p-6 rounded-2xl">

//       {/* HEADER */}
//       <div className="flex items-center gap-3 mb-6">
//         <button
//           onClick={() => setView("dashboard")}
//           className="p-2 rounded-full hover:bg-white"
//         >
//           <ArrowLeft />
//         </button>
//         <h1 className="text-xl font-bold text-[#4B2B5F]">Benefits Club</h1>
//       </div>

//       {/* TOP CARD */}
//       <div className="bg-[#F4E8FB] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
//         <div>
//           <h2 className="text-4xl font-bold text-[#4B2B5F]">23</h2>
//           <p className="text-sm text-gray-600 mt-1">
//             A count of all current, active discounts you can use.
//           </p>
//           <button className="mt-4 bg-[#4B2B5F] text-white px-5 py-2 rounded-lg text-sm font-semibold">
//             Redeem Now
//           </button>
//         </div>

//         <div className="hidden md:block">
//           <img
//             src="/benefits/hero.png"
//             alt="Benefits"
//             className="w-48"
//           />
//         </div>
//       </div>

//       {/* CATEGORIES */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         <BenefitCard title="Wine E-commerce" partners="45 Partners" />
//         <BenefitCard title="Wine Physical Stores" partners="32 Partners" />
//         <BenefitCard title="Restaurants" partners="88 Partners" />
//         <BenefitCard title="Sommie Game Rewards" partners="7 Partners" />
//       </div>
//     </div>
//   );
// }

// function BenefitCard({
//   title,
//   partners,
// }: {
//   title: string;
//   partners: string;
// }) {
//   return (
//     <div className="bg-[#F4E8FB] rounded-2xl p-5 text-center shadow hover:scale-[1.03] transition">
//       <p className="text-xs text-purple-600 font-semibold mb-1">{partners}</p>
//       <h3 className="font-semibold text-[#4B2B5F] mb-4">{title}</h3>
//       <button className="bg-[#4B2B5F] text-white text-xs px-4 py-2 rounded-md">
//         Access category
//       </button>
//     </div>
//   );
// }

// "use client";

// import React from "react";
// import { 
//   ArrowLeft, 
//   Wine, 
//   Store, 
//   Utensils, 
//   Trophy, 
//   Gift 
// } from "lucide-react";
// import { useProView } from "./ProViewContext";

// export default function BenefitsClubPage() {
//   const { setView } = useProView();

//   return (
//     <div className="min-h-screen bg-[#EFECEC] p-4 md:p-8">
//       <div className="max-w-6xl mx-auto">
        
//         {/* HEADER */}
//         <div className="relative flex items-center justify-center mb-8">
//           <button
//             onClick={() => setView("dashboard")}
//             className="absolute left-0 p-2 rounded-full hover:bg-white transition-colors"
//           >
//             <ArrowLeft className="text-[#4B2B5F]" />
//           </button>
//           <h1 className="text-2xl md:text-3xl font-bold text-[#4B2B5F]">Benefits Club</h1>
//         </div>

//         {/* HERO CARD */}
//         <div className="bg-[#F4E8FB] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-10 shadow-sm">
//           <div className="text-center md:text-left flex-1">
//             <h2 className="text-6xl md:text-7xl font-bold text-[#4B2B5F] mb-2">23</h2>
//             <p className="text-lg text-gray-700 max-w-xs mx-auto md:mx-0">
//               A count of all current, active discounts you can use.
//             </p>
//             <button className="mt-6 bg-[#4B2B5F] hover:bg-[#361f44] text-white px-8 py-3 rounded-xl text-md font-bold transition-all transform active:scale-95">
//               Redeem Now
//             </button>
//           </div>

//           <div className="flex-1 flex justify-center md:justify-end">
//             {/* Replace with your specific hero.png or use this Icon container */}
//             <div className="relative w-48 h-48 md:w-64 md:h-64 bg-white/30 rounded-full flex items-center justify-center">
//                <Gift size={120} className="text-[#4B2B5F] opacity-90" />
//                <div className="absolute bottom-4 right-4 animate-bounce">
//                   <div className="w-8 h-8 bg-[#4B2B5F] rounded-full" />
//                </div>
//             </div>
//           </div>
//         </div>

//         {/* SECTION TITLE */}
//         <h2 className="text-2xl font-bold text-[#636363] mb-6 px-2">Benefits Club</h2>

//         {/* CATEGORIES GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           <BenefitCard 
//             title="Wine E-commerce" 
//             partners="45 Partners" 
//             icon={<Wine size={60} className="text-[#4B2B5F]" />}
//           />
//           <BenefitCard 
//             title="Wine Physical Stores" 
//             partners="12 Partners" 
//             icon={<Store size={60} className="text-[#4B2B5F]" />}
//           />
//           <BenefitCard 
//             title="Restaurants" 
//             partners="88 Partners" 
//             icon={<Utensils size={60} className="text-[#4B2B5F]" />}
//           />
//           <BenefitCard 
//             title="Sommie Game Rewards" 
//             partners="7 Partners" 
//             icon={<Trophy size={60} className="text-[#4B2B5F]" />}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// interface BenefitCardProps {
//   title: string;
//   partners: string;
//   icon: React.ReactNode;
// }

// function BenefitCard({ title, partners, icon }: BenefitCardProps) {
//   return (
//     <div className="relative bg-[#F4E8FB] rounded-2xl p-8 pt-12 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
      
//       {/* PARTNER BADGE */}
//       <div className="absolute top-4 right-4 bg-[#4B2B5F] text-white text-[10px] font-bold px-2 py-1 rounded-md">
//         {partners}
//       </div>

//       {/* ICON / ELEMENT CONTAINER */}
//       <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
//         <div className="p-4 bg-white/40 rounded-2xl">
//           {icon}
//         </div>
//       </div>

//       <h3 className="font-bold text-[#4B2B5F] text-lg mb-6 leading-tight min-h-[3rem] flex items-center">
//         {title}
//       </h3>

//       <button className="w-full bg-[#4B2B5F] hover:bg-[#361f44] text-white text-sm font-bold py-3 rounded-xl transition-colors">
//         Access category
//       </button>
//     </div>
//   );
// }

// "use client";

// import React from "react";
// import { 
//   ArrowLeft, 
//   Wine, 
//   Store, 
//   Utensils, 
//   Trophy, 
//   Gift 
// } from "lucide-react";
// import { useProView } from "./ProViewContext";

// export default function BenefitsClubPage() {
//   const { setView } = useProView();

//   return (
//     <div className="min-h-screen bg-[#EFECEC] p-4 md:p-8">
//       <div className="max-w-6xl mx-auto">
        
//         {/* HEADER - Matches Mobile Screenshot */}
//         <div className="relative flex items-center justify-center mb-6 md:mb-10">
//           <button
//             onClick={() => setView("dashboard")}
//             className="absolute left-0 p-2 rounded-full hover:bg-white transition-colors"
//           >
//             <ArrowLeft className="text-[#4B2B5F]" size={24} />
//           </button>
//           <h1 className="text-xl md:text-3xl font-bold text-[#4B2B5F]">Benefits Club</h1>
//         </div>

//         {/* HERO CARD - Responsive for Mobile & Desktop */}
//         <div className="bg-[#F4E8FB] rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-10 shadow-sm">
//           <div className="text-center md:text-left flex-1 order-1">
//             <h2 className="text-6xl md:text-7xl font-bold text-[#4B2B5F] mb-4">23</h2>
//             <p className="text-base md:text-lg text-[#4B2B5F] opacity-80 max-w-[240px] md:max-w-xs mx-auto md:mx-0 leading-tight">
//               A count of all current, active discounts you can use.
//             </p>
//             <button className="mt-8 bg-[#4B2B5F] hover:bg-[#361f44] text-white px-10 py-3 rounded-2xl text-md font-bold transition-all transform active:scale-95 shadow-lg">
//               Redeem Now
//             </button>
//           </div>

//           {/* ICON SECTION - Matches Mobile circular design */}
//           <div className="flex-1 flex justify-center md:justify-end order-2 mt-4 md:mt-0">
//             <div className="relative w-48 h-48 md:w-64 md:h-64 bg-[#F0E1F9] md:bg-transparent rounded-full flex items-center justify-center">
//                <Gift size={100} className="text-[#4B2B5F] md:scale-125" />
//                {/* Small dot from your mobile design */}
//                <div className="absolute bottom-6 right-6 w-6 h-6 bg-[#4B2B5F] rounded-full hidden md:block lg:block" />
//                <div className="absolute bottom-4 right-8 w-8 h-8 bg-[#4B2B5F] rounded-full md:hidden" />
//             </div>
//           </div>
//         </div>

//         {/* SECTION TITLE */}
//         <h2 className="text-xl md:text-2xl font-bold text-[#636363] mb-6 px-2">Benefits Club</h2>

//         {/* CATEGORIES GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           <BenefitCard 
//             title="Wine E-commerce" 
//             partners="45 Partners" 
//             icon={<Wine size={60} className="text-[#4B2B5F]" />}
//           />
//           <BenefitCard 
//             title="Wine Physical Stores" 
//             partners="12 Partners" 
//             icon={<Store size={60} className="text-[#4B2B5F]" />}
//           />
//           <BenefitCard 
//             title="Restaurants" 
//             partners="88 Partners" 
//             icon={<Utensils size={60} className="text-[#4B2B5F]" />}
//           />
//           <BenefitCard 
//             title="Sommie Game Rewards" 
//             partners="7 Partners" 
//             icon={<Trophy size={60} className="text-[#4B2B5F]" />}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// interface BenefitCardProps {
//   title: string;
//   partners: string;
//   icon: React.ReactNode;
// }

// function BenefitCard({ title, partners, icon }: BenefitCardProps) {
//   return (
//     <div className="relative bg-[#F4E8FB] rounded-2xl p-6 pt-12 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all group">
      
//       {/* PARTNER BADGE */}
//       <div className="absolute top-4 right-4 bg-[#4B2B5F] text-white text-[10px] font-bold px-2 py-1 rounded-md">
//         {partners}
//       </div>

//       {/* ICON CONTAINER */}
//       <div className="mb-6 h-24 flex items-center justify-center">
//         {icon}
//       </div>

//       <h3 className="font-bold text-[#4B2B5F] text-lg mb-6 leading-tight min-h-[3rem] flex items-center">
//         {title}
//       </h3>

//       <button className="w-full bg-[#4B2B5F] hover:bg-[#361f44] text-white text-sm font-bold py-3 rounded-xl transition-colors">
//         Access category
//       </button>
//     </div>
//   );
// }


// "use client";

// import React from "react";
// import { ArrowLeft, Gift, Wine, Store, Utensils, Trophy } from "lucide-react";
// import { useProView } from "./ProViewContext";

// export default function BenefitsClubPage() {
//   const { setView } = useProView();

//   return (
//     <div className="min-h-screen bg-[#EFECEC] p-4 md:p-8 font-sans">
//       <div className="max-w-6xl mx-auto">
        
//         {/* HEADER - Centered title with back arrow on left */}
//         <div className="relative flex items-center justify-center mb-6">
//           <button
//             onClick={() => setView("dashboard")}
//             className="absolute left-0 p-2 rounded-full hover:bg-white transition-colors"
//           >
//             <ArrowLeft className="text-[#4B2B5F]  md:size={24}" size={20} />
//           </button>
//           <h1 className="text-lg md:text-3xl font-bold text-[#4B2B5F]">Benefits Club</h1>
//         </div>

//         {/* MAIN HERO CARD - Mobile: Stacked & Centered (img 1) | Desktop: Horizontal (img 2) */}
//         <div className="bg-[#F4E8FB] rounded-[2rem] md:rounded-3xl p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-4 mb-8 shadow-sm">
          
//           {/* Text Content */}
//           <div className="text-center md:text-left flex flex-col items-center md:items-start order-1">
//             <h2 className="text-5xl md:text-7xl font-bold text-[#4B2B5F] mb-2">23</h2>
//             <p className="text-sm md:text-lg text-[#4B2B5F] font-medium opacity-80 max-w-[200px] md:max-w-xs leading-tight mb-6">
//               A count of all current, active discounts you can use.
//             </p>
//             <button className="bg-[#4B2B5F] hover:bg-[#361f44] text-white px-8 py-2.5 rounded-xl text-sm md:text-base font-bold transition-transform active:scale-95 shadow-md">
//               Redeem Now
//             </button>
//           </div>

//           {/* Icon Section - Circular background for mobile (img 1) */}
//           <div className="flex justify-center md:justify-end order-2 mt-4 md:mt-0">
//             <div className="relative w-40 h-40 md:w-64 md:h-64 bg-[#F0E1F9] md:bg-transparent rounded-full flex items-center justify-center">
//                <Gift size={80} className="text-[#4B2B5F] md:hidden" />
               
//                {/* Desktop Illustration Placeholder */}
//                <div className="hidden md:block">
//                  <img src="/benefits/hero.png" alt="Hero" className="w-56" 
//                       onError={(e) => (e.currentTarget.style.display = 'none')} />
//                  <Gift size={120} className="text-[#4B2B5F]" />
//                </div>

//                {/* Design Detail: The dark accent dot from img 1 mobile */}
//                <div className="absolute bottom-3 right-5 w-7 h-7 bg-[#4B2B5F] rounded-full border-4 border-[#F4E8FB] md:hidden" />
//             </div>
//           </div>
//         </div>

//         {/* SECTION TITLE */}
//         <h2 className="text-lg md:text-2xl font-bold text-[#636363] mb-5 px-1">Benefits Club</h2>

//         {/* CATEGORIES GRID - 2 columns on mobile to prevent "too big" look */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-9 md:gap-6">
//           <BenefitCard 
//             title="Wine E-commerce" 
//             partners="45 Partners" 
//             icon={<Wine size={40} className="text-[#4B2B5F]" />}
//           />
//           <BenefitCard 
//             title="Wine Physical Stores" 
//             partners="12 Partners" 
//             icon={<Store size={40} className="text-[#4B2B5F]" />}
//           />
//           <BenefitCard 
//             title="Restaurants" 
//             partners="88 Partners" 
//             icon={<Utensils size={40} className="text-[#4B2B5F]" />}
//           />
//           <BenefitCard 
//             title="Sommie Game Rewards" 
//             partners="7 Partners" 
//             icon={<Trophy size={40} className="text-[#4B2B5F]" />}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// function BenefitCard({ title, partners, icon }: { title: string; partners: string; icon: React.ReactNode }) {
//   return (
//     <div className="relative bg-[#F4E8FB] rounded-2xl p-4 md:p-6 pt-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all group">
//       {/* Partner Badge - Exactly as per design (top right) */}
//       <div className="absolute top-2 right-2 md:top-3 md:right-3 bg-[#4B2B5F] text-white text-[8px] md:text-[10px] font-bold px-1.5 py-0.5 md:px-2 md:py-1 rounded-md">
//         {partners}
//       </div>

//       {/* Icon Area */}
//       <div className="mb-3 h-16 md:h-24 flex items-center justify-center">
//         {icon}
//       </div>

//       {/* Title - Fixed height to keep buttons aligned */}
//       <h3 className="font-bold text-[#4B2B5F] text-xs md:text-lg mb-4 leading-tight h-8 md:h-12 flex items-center justify-center">
//         {title}
//       </h3>

//       {/* Button */}
//       <button className="w-full bg-[#4B2B5F] hover:bg-[#361f44] text-white text-[10px] md:text-sm font-bold py-2 md:py-3 rounded-lg md:rounded-xl transition-colors">
//         Access category
//       </button>
//     </div>
//   );
// }

"use client";

import React from "react";
import { ArrowLeft, Gift, Wine, Store, Utensils, Trophy } from "lucide-react";
import { useProView } from "./ProViewContext";

export default function BenefitsClubPage() {
  const { setView } = useProView();

  return (
    <div className="min-h-screen bg-[#EFECEC] p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div className="relative flex items-center justify-center mb-6">
          <button
            onClick={() => setView("dashboard")}
            className="absolute left-0 p-2 rounded-full hover:bg-white transition-colors"
          >
            <ArrowLeft className="text-[#4B2B5F] md:size={24}" size={20}  />
          </button>
          <h1 className="text-lg md:text-3xl font-bold text-[#4B2B5F]">Benefits Club</h1>
        </div>

        {/* MAIN HERO CARD - Adjusted for smaller mobile size */}
        <div className="bg-[#F4E8FB] rounded-[2rem] md:rounded-3xl p-9 md:p-12 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 mb-8 shadow-sm">
          
          {/* Text Content - Scaled down for mobile */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start order-1">
            <h2 className="text-4xl md:text-7xl font-bold text-[#4B2B5F] mb-1">23</h2>
            <p className="text-[13px] md:text-lg text-[#4B2B5F] font-medium opacity-80 max-w-[180px] md:max-w-xs leading-tight mb-4">
              A count of all current, active discounts you can use.
            </p>
            <button className="bg-[#4B2B5F] hover:bg-[#361f44] text-white px-6 py-2 md:px-8 md:py-2.5 rounded-xl text-xs md:text-base font-bold transition-transform active:scale-95 shadow-md">
              Redeem Now
            </button>
          </div>

          {/* Icon Section - Scaled down for mobile */}
          <div className="flex justify-center md:justify-end order-2 mt-2 md:mt-0">
            <div className="relative w-32 h-32 md:w-64 md:h-64 bg-[#F0E1F9] md:bg-transparent rounded-full flex items-center justify-center">
               <Gift size={60} className="text-[#4B2B5F] md:hidden" />
               
               {/* Desktop Illustration */}
               {/* <div className="hidden md:block">
                 <img src="/benefits/hero.png" alt="Hero" className="w-56" 
                      onError={(e) => (e.currentTarget.style.display = 'none')} />
                 <Gift size={120} className="text-[#4B2B5F]" />
               </div> */}

               {/* Design Detail: The dark accent dot */}
               <div className="absolute bottom-2 right-4 w-6 h-6 bg-[#4B2B5F] rounded-full border-4 border-[#F4E8FB] md:hidden" />
            </div>
          </div>
        </div>

        {/* SECTION TITLE */}
        <h2 className="text-lg md:text-2xl font-bold text-[#636363] mb-5 px-1">Benefits Club</h2>

        {/* CATEGORIES GRID - Remains 2 columns for mobile perfect fit */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-9 md:gap-6">
          <BenefitCard 
            title="Wine E-commerce" 
            partners="45 Partners" 
            icon={<Wine size={40} className="text-[#4B2B5F]" />}
          />
          <BenefitCard 
            title="Wine Physical Stores" 
            partners="12 Partners" 
            icon={<Store size={40} className="text-[#4B2B5F]" />}
            onAccess={() => setView("wine-stores")}
          />
          <BenefitCard 
            title="Restaurants" 
            partners="88 Partners" 
            icon={<Utensils size={40} className="text-[#4B2B5F]"
            onClick={() => setView("restaurant-pocket")}
            />}
          />
          <BenefitCard 
            title="Sommie Game Rewards" 
            partners="7 Partners" 
            icon={<Trophy size={40} className="text-[#4B2B5F]"
            onClick={() => setView("game")}
            />}
          />
        </div>
      </div>
    </div>
  );
}

// function BenefitCard({ title, partners, icon ,  onClick,  }: { title: string; partners: string; icon: React.ReactNode, onClick?: () => void; }) {
//   return (
//     <div className="relative bg-[#F4E8FB] rounded-2xl p-4 md:p-6 pt-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all group" onClick={onClick}>
//       <div className="absolute top-2 right-2 md:top-3 md:right-3 bg-[#4B2B5F] text-white text-[8px] md:text-[10px] font-bold px-1.5 py-0.5 md:px-2 md:py-1 rounded-md">
//         {partners}
//       </div>

//       <div className="mb-3 h-16 md:h-24 flex items-center justify-center">
//         {icon}
//       </div>

//       <h3 className="font-bold text-[#4B2B5F] text-xs md:text-lg mb-4 leading-tight h-8 md:h-12 flex items-center justify-center">
//         {title}
//       </h3>

//       <button className="w-full bg-[#4B2B5F] hover:bg-[#361f44] text-white text-[10px] md:text-sm font-bold py-2 md:py-3 rounded-lg md:rounded-xl transition-colors" onClick={onClick}>
//         Access category
//       </button>
//     </div>
//   );
// return (
//     <button
//       onClick={onClick}
//       className="relative bg-[#F4E8FB] rounded-2xl p-4 md:p-6 pt-10 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:scale-[1.02] transition-all"
//     >
//       <div className="absolute top-2 right-2 bg-[#4B2B5F] text-white text-[10px] font-bold px-2 py-1 rounded-md">
//         {partners}
//       </div>

//       <div className="mb-3 h-16 md:h-24 flex items-center justify-center">
//         {icon}
//       </div>

//       <h3 className="font-bold text-[#4B2B5F] text-sm md:text-lg mb-4">
//         {title}
//       </h3>

//       <span className="w-full bg-[#4B2B5F] text-white text-xs md:text-sm font-bold py-2 rounded-lg">
//         Access category
//       </span>
//     </button>
//   );
// } 
function BenefitCard({
  title,
  partners,
  icon,
  onAccess,
}: {
  title: string;
  partners: string;
  icon: React.ReactNode;
  onAccess?: () => void;
}) {
  return (
    <div className="relative bg-[#F4E8FB] rounded-2xl p-4 md:p-6 pt-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all">
      
      {/* Partner badge */}
      <div className="absolute top-2 right-2 bg-[#4B2B5F] text-white text-[10px] font-bold px-2 py-1 rounded-md">
        {partners}
      </div>

      {/* ICON (NO CLICK HERE) */}
      <div className="mb-3 h-16 flex items-center justify-center">
        {icon}
      </div>

      <h3 className="font-bold text-[#4B2B5F] text-sm md:text-lg mb-4">
        {title}
      </h3>

      {/* ✅ CLICK ONLY HERE */}
      <button
         onClick={onAccess}
        className="w-full bg-[#4B2B5F] hover:bg-[#361f44] text-white text-xs md:text-sm font-bold py-2 rounded-lg transition"
      >
        Access category
      </button>
    </div>
  );
}
