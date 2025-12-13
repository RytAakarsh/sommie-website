


// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import {
//   Send,
//   Plus,
//   Menu,
//   MessageSquarePlus,
//   Trash2,
//   Globe,
//   Sparkles,
//   Mic,
//   ArrowRight,
// } from "lucide-react";
// import { useLanguage } from "@/app/providers/LanguageProvider";

// interface FreemiumChatProps {
//   onClose?: () => void;
// }

// interface ChatSession {
//   id: string;
//   title: string;
//   timestamp: string;
//   messages: Array<{ type: "bot" | "user"; text: string }>;
// }

// export default function FreemiumChat({ onClose }: FreemiumChatProps) {
//   const { t, language, setLanguage } = useLanguage();

//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [chatSessions, setChatSessions] = useState<ChatSession[]>([]);
//   const [currentSession, setCurrentSession] = useState<ChatSession | null>(null);

//   const [messages, setMessages] = useState<
//     Array<{ type: "bot" | "user"; text: string }>
//   >([
//     {
//       type: "bot",
//       text: `Hi, I'm Sommie, your virtual sommelier!\n\nI'm an AI passionate about wines — I can answer questions, suggest pairings, share curiosities about grapes, regions, wineries, and recommend the best labels for your palate.`,
//     },
//   ]);

//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Layout constants
//   const SIDEBAR_WIDTH = 320;
//   const CHAT_MAX_WIDTH = 1200;
//   const HEADER_HEIGHT = 88;

//   const handleNewChat = () => {
//     const newSession: ChatSession = {
//       id: Date.now().toString(),
//       title: `New Chat ${chatSessions.length + 1}`,
//       timestamp: new Date().toLocaleTimeString(),
//       messages: [],
//     };

//     setChatSessions((prev) => [newSession, ...prev]);
//     setCurrentSession(newSession);

//     // Reset welcome message
//     setMessages([
//       {
//         type: "bot",
//         text: `Hi, I'm Sommie, your virtual sommelier!\n\nI'm an AI passionate about wines — I can answer questions, suggest pairings, share curiosities about grapes, regions, wineries, and recommend the best labels for your palate.`,
//       },
//     ]);

//     setSidebarOpen(false);
//   };

//   const suggestions = [
//     "Suggest a wine",
//     "Harmonize a dish",
//     "Learn more about wine",
//     "Plan an itinerary",
//   ];

//   return (
//     <div className="fixed inset-0 bg-[#FAF7FC] flex flex-col z-50 text-[#3A2A4A]">

//       {/* NAVBAR (Option A — PRO style) */}
//      {/* NAVBAR — PRO STYLE WITH SEARCH + HISTORY */}
// <nav
//   className="w-full bg-white shadow-sm px-8 flex items-center justify-between"
//   style={{ height: HEADER_HEIGHT }}
// >
//   {/* LEFT SECTION — LOGO + SEARCH + HISTORY */}
//   <div className="flex items-center gap-5">

//     {/* PRO LOGO */}
//     <div className="flex items-center gap-2">
//       <Image
//         src="/pro-logo.png"   // <-- use the PRO text logo
//         width={170}
//         height={49}
//         alt="Sommie Logo"
//         className="object-contain"
//       />
      
//     </div>

//     {/* SEARCH ICON */}
//     <button className="p-2 hover:bg-gray-100 rounded-full">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="22"
//         height="22"
//         fill="none"
//         stroke="#7f488b"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <circle cx="11" cy="11" r="8" />
//         <line x1="21" y1="21" x2="16.65" y2="16.65" />
//       </svg>
//     </button>

//     {/* LIBRARY / HISTORY ICON */}
//     <button className="p-2 hover:bg-gray-100 rounded-full">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="22"
//         height="22"
//         fill="none"
//         stroke="#7f488b"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <rect x="3" y="4" width="18" height="16" rx="2" />
//         <line x1="3" y1="10" x2="21" y2="10" />
//       </svg>
//     </button>
//   </div>

//   {/* RIGHT SECTION — LANGUAGE + UPGRADE */}
//   <div className="flex items-center gap-4">
//     <button
//       onClick={() => setLanguage(language === "en" ? "pt" : "en")}
//       className="flex items-center gap-2 px-3 py-1 text-[#4B2B5F] hover:text-[#7B3FB0]"
//     >
//       <Globe className="w-5 h-5" />
//       <span className="text-sm font-medium uppercase">
//         {language === "en" ? "EN" : "PT"}
//       </span>
//     </button>

//     <button className="flex items-center gap-2 bg-gradient-to-r from-[#7f488b] to-[#7f488b] text-white px-5 py-2 rounded-full shadow-md hover:opacity-95">
//       <Sparkles className="w-4 h-4" />
//       <span className="font-semibold text-sm">Upgrade to PRO</span>
//       <ArrowRight className="w-4 h-4" />
//     </button>
//   </div>
// </nav>


//       {/* MAIN LAYOUT */}
//       <div className="flex flex-1 overflow-hidden">

//         {/* SIDEBAR */}
//         <aside
//           className="bg-white border-r h-full flex flex-col transition-transform duration-300 z-40"
//           style={{
//             width: SIDEBAR_WIDTH,
//             transform: sidebarOpen ? "translateX(0)" : `translateX(-${SIDEBAR_WIDTH}px)`,
//           }}
//         >
//           {/* New Chat Button */}
//           <div className="p-4 border-b">
//             <button
//   onClick={handleNewChat}
//   className="flex items-center justify-center gap-2 w-full 
//              bg-[#7f488b] text-white py-3 rounded-xl shadow 
//              hover:bg-[#7f488b] transition">
//       <MessageSquarePlus className="w-4 h-8" />
//       <span className="font-semibold text-sm">New Chat</span>
//        </button>

//           </div>

//           {/* NO CHATS STATE */}
//           <div className="flex-1 flex flex-col items-center justify-center text-gray-400 text-sm">
//             <p>No chats yet</p>
//             <p className="text-xs mt-1">Start a new conversation</p>
//           </div>

//           {/* PROFILE */}
//           <div className="p-4 border-t flex items-center gap-3">
//             <Image
//               src="/avatar.webp"
//               width={44}
//               height={44}
//               alt="profile"
//               className="rounded-full object-cover"
//             />
//             <div>
//               <p className="font-semibold text-sm">Adela Parkson</p>
//               <p className="text-xs text-green-600">online</p>
//             </div>
//           </div>
//         </aside>

//         {/* CHAT AREA */}
//         <div className="flex-1 flex flex-col overflow-hidden">
//           <div className="flex-1 overflow-y-auto">
//             <div className="mx-auto px-6 py-10" style={{ maxWidth: CHAT_MAX_WIDTH }}>

//               {/* HERO SECTION (PRO STYLE) */}
//               <div className="text-center mb-10">
//                 <Image
//                   src="/avatar.webp"
//                   width={120}
//                   height={120}
//                   alt="Sommie"
//                   className="rounded-full mx-auto mb-4 shadow"
//                 />

//                 <h1 className="text-4xl font-bold text-[#4B2B5F] mb-3">
//                   Hi, I'm Sommie,<br />your virtual sommelier!
//                 </h1>

//                 <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
//                   I'm an AI passionate about wines — I can answer questions, suggest
//                   pairings, share curiosities about grapes, regions, wineries, and
//                   recommend the best labels for your palate.
//                 </p>
//               </div>

//               {/* SUGGESTIONS — EXACT PRO STYLE */}
//               {messages.length <= 1 && (
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
//                   {suggestions.map((s, i) => (
//                     <button
//                       key={i}
//                       className="flex items-center justify-between px-6 py-3 h-[52px] rounded-xl bg-[#F4E8FB] text-[#5B3A7C] hover:shadow-md transition"
//                     >
//                       <span className="text-sm font-medium">{s}</span>
//                       <ArrowRight className="w-5 h-5" />
//                     </button>
//                   ))}
//                 </div>
//               )}

//               {/* INPUT */}
//               <form className="sticky bottom-6">
//                 <div className="bg-white border border-gray-200 rounded-3xl px-4 py-3 shadow-lg flex items-center gap-3">
//                   <button type="button" className="p-3 rounded-full bg-[#F4E9FF] text-[#6D3FA6]">
//                     <Plus className="w-5 h-5" />
//                   </button>

//                   <button type="button" className="p-3 rounded-full bg-[#F4E9FF] text-[#6D3FA6]">
//                     <Mic className="w-5 h-5" />
//                   </button>

//                   <input
//                     className="flex-1 px-3 bg-transparent outline-none text-sm"
//                     placeholder="Ask me anything..."
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                   />

//                   <button
//                     type="submit"
//                     className="w-11 h-11 rounded-full bg-[#7f488b] text-white flex items-center justify-center shadow"
//                   >
//                     <Send className="w-4 h-4" />
//                   </button>
//                 </div>
//               </form>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import {
//   Send,
//   Plus,
//   Menu,
//   MessageSquarePlus,
//   Globe,
//   Sparkles,
//   Mic,
//   ArrowRight,
// } from "lucide-react";
// import { useLanguage } from "@/app/providers/LanguageProvider";

// export default function FreemiumChat() {
//   const { t, language, setLanguage } = useLanguage();

//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [input, setInput] = useState("");
//   const messages = [
//     {
//       type: "bot" as const,
//       text: `Hi, I'm Sommie, your virtual sommelier!

// I'm an AI passionate about wines — I can answer questions, suggest pairings, share curiosities about grapes, regions, wineries, and recommend the best labels for your palate.`,
//     },
//   ];

//   const SIDEBAR_WIDTH = 320; // only used for reference
//   const CHAT_MAX_WIDTH = 1200;
//   const HEADER_HEIGHT = 88;

//   const suggestions = [
//     "Suggest a wine",
//     "Harmonize a dish",
//     "Learn more about wine",
//     "Plan an itinerary",
//   ];

//   return (
//     <div className="fixed inset-0 bg-[#FAF7FC] flex flex-col z-50 text-[#3A2A4A]">

//       {/* NAVBAR - desktop */}
//       <nav
//         className="hidden md:flex w-full bg-white shadow-sm px-8 items-center justify-between"
//         style={{ height: HEADER_HEIGHT }}
//       >
//         <div className="flex items-center gap-5">
//           <Image src="/pro-logo.png" width={170} height={49} alt="Sommie Logo" />
//           <button className="p-2 hover:bg-gray-100 rounded-full">
//             <svg width="22" height="22" stroke="#7f488b" fill="none">
//               <circle cx="11" cy="11" r="8" />
//               <line x1="21" y1="21" x2="16.65" y2="16.65" />
//             </svg>
//           </button>
//           <button className="p-2 hover:bg-gray-100 rounded-full">
//             <svg width="22" height="22" stroke="#7f488b" fill="none">
//               <rect x="3" y="4" width="18" height="16" rx="2" />
//               <line x1="3" y1="10" x2="21" y2="10" />
//             </svg>
//           </button>
//         </div>

//         <div className="flex items-center gap-4">
//           <button
//             onClick={() => setLanguage(language === "en" ? "pt" : "en")}
//             className="flex items-center gap-2 px-3 py-1 text-[#4B2B5F]"
//             aria-label="Change language"
//           >
//             <Globe className="w-5 h-5" />
//             <span className="text-sm font-medium uppercase">{language === "en" ? "EN" : "PT"}</span>
//           </button>

//           <button className="flex items-center gap-2 bg-[#7f488b] text-white px-5 py-2 rounded-full shadow-md">
//             <Sparkles className="w-4 h-4" />
//             <span className="font-semibold text-sm">Upgrade to PRO</span>
//             <ArrowRight className="w-4 h-4" />
//           </button>
//         </div>
//       </nav>

//       {/* NAVBAR - mobile */}
//       <nav className="flex md:hidden w-full bg-white shadow-sm px-4 py-3 items-center justify-between">
//         <button onClick={() => setSidebarOpen(true)} aria-label="Open menu">
//           <Menu className="w-6 h-6 text-[#4B2B5F]" />
//         </button>

//         <div className="flex items-center gap-2">
//           <Image src="/avatar.webp" width={32} height={32} alt="avatar" className="rounded-full" />
//           <span className="font-semibold text-[#4B2B5F]">Sommie</span>
//         </div>

//         <button onClick={() => setLanguage(language === "en" ? "pt" : "en")}>
//           <Globe className="w-5 h-5 text-[#4B2B5F]" />
//         </button>
//       </nav>

//       {/* Mobile backdrop closes sidebar when open */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black/30 z-40 md:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       <div className="flex flex-1 overflow-hidden">

//         {/* Sidebar:
//             - mobile: fixed overlay (uses pt to sit under header)
//             - md+: static in flow (so content sits to its right naturally)
//         */}
//         <aside
//           className={`z-50 bg-white border-r transition-transform duration-300
//                       fixed left-0 top-0 bottom-0 w-[320px] pt-[88px] md:pt-0
//                       md:static md:translate-x-0
//                       ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
//         >
//           <div className="p-4 border-b">
//             <button
//               onClick={() => setSidebarOpen(false)}
//               className="flex items-center justify-center gap-2 w-full bg-[#7f488b] text-white py-3 rounded-xl shadow"
//             >
//               <MessageSquarePlus className="w-4 h-4" />
//               <span className="font-semibold text-sm">New Chat</span>
//             </button>
//           </div>

//           <div className="flex-1 flex flex-col items-center justify-center text-gray-400 text-sm">
//             <p>No chats yet</p>
//             <p className="text-xs mt-1">Start a new conversation</p>
//           </div>

//           <div className="p-4 border-t flex items-center gap-3">
//             <Image src="/avatar.webp" width={44} height={44} alt="profile" className="rounded-full" />
//             <div>
//               <p className="font-semibold text-sm">Adela Parkson</p>
//               <p className="text-xs text-green-600">online</p>
//             </div>
//           </div>
//         </aside>

//         {/* Content area:
//             - no md:ml; when sidebar is static (md+), flex layout places content right of sidebar
//             - when sidebar is fixed (mobile), it overlays and content covers full width
//         */}
//         <main className="flex-1 flex flex-col overflow-hidden">
//           <div className="overflow-y-auto flex-1">
//             <div className="mx-auto px-6 py-10" style={{ maxWidth: CHAT_MAX_WIDTH }}>
//               {/* HERO */}
//               <div className="text-center mb-10">
//                 <Image src="/avatar.webp" width={120} height={120} alt="Sommie" className="rounded-full mx-auto mb-4 shadow" />
//                 <h1 className="text-4xl md:text-5xl font-bold text-[#4B2B5F] mb-3 leading-tight">
//                   Hi, I'm Sommie,<br />your virtual sommelier!
//                 </h1>

//                 <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 md:px-0">
//                   I'm an AI passionate about wines — I can answer questions, suggest pairings, share curiosities about grapes, regions, wineries, and recommend the best labels for your palate.
//                 </p>
//               </div>

//               {/* SUGGESTIONS */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 px-2 md:px-0">
//                 {suggestions.map((s, i) => (
//                   <button
//                     key={i}
//                     className="flex items-center justify-between px-6 py-3 h-[52px] rounded-xl bg-[#F4E8FB] text-[#5B3A7C] hover:shadow-md transition"
//                   >
//                     <span className="text-sm font-medium">{s}</span>
//                     <ArrowRight className="w-5 h-5" />
//                   </button>
//                 ))}
//               </div>

//               {/* MESSAGES preview */}
//               <div className="space-y-4 pb-6 px-2 md:px-0">
//                 {messages.map((m, idx) => (
//                   <div key={idx} className="flex justify-start">
//                     <div className="bg-white p-4 rounded-2xl border shadow max-w-[850px]">
//                       <p className="whitespace-pre-line text-sm text-gray-800"></p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* INPUT (sticky on page) */}
//               <form className="sticky bottom-6 px-2 md:px-0">
//                 <div className="bg-white border border-gray-200 rounded-3xl px-4 py-3 shadow-lg flex items-center gap-3">
//                   <button type="button" className="p-3 rounded-full bg-[#F4E9FF] text-[#6D3FA6]">
//                     <Plus className="w-5 h-5" />
//                   </button>

//                   <button type="button" className="p-3 rounded-full bg-[#F4E9FF] text-[#6D3FA6]">
//                     <Mic className="w-5 h-5" />
//                   </button>

//                   <input
//                     className="flex-1 px-3 bg-transparent outline-none text-sm"
//                     placeholder="Ask me anything..."
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                   />

//                   <button type="submit" className="w-11 h-11 rounded-full bg-[#7f488b] text-white flex items-center justify-center shadow">
//                     <Send className="w-4 h-4" />
//                   </button>
//                 </div>
//               </form>

//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useState, useRef, useEffect  } from "react";
import Image from "next/image";
import {
   Send,
   Plus,
   Menu,
   MessageSquarePlus,
   Globe,
   Sparkles,
   Mic,
   ArrowRight,
   MoreVertical,
   LayoutDashboard,
} from "lucide-react";
import { useLanguage } from "@/app/providers/LanguageProvider";
import { useRouter } from "next/navigation";

export default function FreemiumChat() {
  const { t, language, setLanguage } = useLanguage();
  const router = useRouter();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [input, setInput] = useState("");
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const messages = [
    {
      type: "bot",
      text: `Hi, I'm Sommie, your virtual sommelier!

I'm an AI passionate about wines — I can answer questions, suggest pairings, share curiosities about grapes, regions, wineries, and recommend the best labels for your palate.`,
    },
  ];

  const CHAT_MAX_WIDTH = 1200;

   useEffect(() => {
     function handleClickOutside(e: MouseEvent) {
       if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
         setProfileMenuOpen(false);
       }
     }
     document.addEventListener("mousedown", handleClickOutside);
     return () => document.removeEventListener("mousedown", handleClickOutside);
   }, []);


  const suggestions = [
    "Suggest a wine",
    "Harmonize a dish",
    "Learn more about wine",
    "Plan an itinerary",
  ];

  return (
    <div className="fixed inset-0 bg-[#FAF7FC] flex flex-col z-50 text-[#3A2A4A]">

      {/* DESKTOP NAVBAR */}
      <nav className="hidden md:flex w-full bg-white shadow-sm px-8 items-center justify-between h-[88px]">
        <div className="flex items-center gap-5">
          <Image src="/pro-logo.png" width={170} height={49} alt="Sommie Logo" />

          {/* SEARCH */}
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <svg width="22" height="22" stroke="#7f488b" fill="none">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* HISTORY */}
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <svg width="22" height="22" stroke="#7f488b" fill="none">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setLanguage(language === "en" ? "pt" : "en")}
            className="flex items-center gap-2 px-3 py-1 text-[#4B2B5F]"
          >
            <Globe className="w-5 h-5" />
            <span className="text-sm font-medium uppercase">
              {language === "en" ? "EN" : "PT"}
            </span>
          </button>

          <button className="flex items-center gap-2 bg-[#7f488b] text-white px-5 py-2 rounded-full shadow-md">
            <Sparkles className="w-4 h-4" />
            <span className="font-semibold text-sm">Upgrade to PRO</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </nav>

      {/* MOBILE NAVBAR */}
      <nav className="md:hidden w-full bg-white shadow-sm px-4 py-3 flex items-center justify-between">
        <button onClick={() => setSidebarOpen(true)}>
          <Menu className="w-6 h-6 text-[#4B2B5F]" />
        </button>

        <div className="flex items-center gap-2">
           <Image src="/pro-logo.png" width={170} height={19} alt="Sommie Logo" />
        </div>

        <button onClick={() => setLanguage(language === "en" ? "pt" : "en")}>
          <Globe className="w-5 h-5 text-[#4B2B5F]" />
        </button>
      </nav>

      {/* BACKDROP (mobile only) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex flex-1 overflow-hidden">

        {/* SIDEBAR */}
       <aside
  className={`bg-white border-r z-50 w-[320px] 
    fixed md:static top-0 left-0 h-full 
    transition-transform duration-300
    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0
  `}
>

  {/* MOBILE SIDEBAR HEADER (Logo + Search + History) */}
  <div className="flex md:hidden items-center gap-4 px-4 py-4 border-b">
    <Image
      src="/pro-logo.png"
      width={150}
      height={40}
      alt="Sommie Logo"
      className="object-contain"
    />

    {/* SEARCH */}
    <button className="p-2 hover:bg-gray-100 rounded-full">
      <svg width="22" height="22" stroke="#7f488b" fill="none">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </button>

    {/* HISTORY */}
    <button className="p-2 hover:bg-gray-100 rounded-full">
      <svg width="22" height="22" stroke="#7f488b" fill="none">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    </button>
  </div>

  {/* New Chat */}
  <div className="p-4 border-b">
    <button
      onClick={() => setSidebarOpen(false)}
      className="flex items-center justify-center gap-2 w-full bg-[#7f488b] text-white py-3 rounded-xl shadow"
    >
      <MessageSquarePlus className="w-4 h-8" />
      <span className="font-semibold text-sm">New Chat</span>
    </button>
  </div>

  {/* EMPTY CHAT STATE */}
  <div className="flex-1 flex flex-col lg:h-[490px] h-[590px] items-center justify-center text-gray-400 text-sm">
    <p>No chats yet</p>
    <p className="text-xs mt-1">Start a new conversation</p>
  </div>

  {/* PROFILE */}
  <div className="relative p-4 border-t flex items-center justify-between" ref={menuRef}>
            <div className="flex items-center gap-3">
              <Image src="/avatar.webp" width={40} height={40} alt="profile" className="rounded-full" />
              <div>
                <p className="font-semibold text-sm">Adela Parkson</p>
                <p className="text-xs text-green-600">online</p>
              </div>
            </div>

            <button onClick={() => setProfileMenuOpen(!profileMenuOpen)}>
              <MoreVertical className="w-5 h-5" />
            </button>

            {profileMenuOpen && (
              <div className="absolute right-4 bottom-14 bg-white border rounded-xl shadow-md w-40 overflow-hidden">
                <button
                 onClick={() => router.push("/free-dash")}
                  className="flex items-center gap-2 w-full px-4 py-3 hover:bg-gray-50 text-sm"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </button>
              </div>
            )}
          </div>
</aside>


        {/* CHAT AREA */}
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto px-6 py-10" style={{ maxWidth: CHAT_MAX_WIDTH }}>

            {/* HERO SECTION */}
            <div className="text-center mb-10">
              <Image src="/avatar.webp" width={120} height={120} alt="Sommie" className="rounded-full mx-auto mb-4 shadow" />

              <h1 className="text-3xl md:text-5xl font-bold text-[#4B2B5F] mb-3 leading-snug">
                Hi, I'm Sommie,<br />your virtual sommelier!
              </h1>

              <p className="text-lg text-gray-600 max-w-3xl mx-auto px-2 md:px-0">
                I'm an AI passionate about wines — I can answer questions, suggest pairings,
                share curiosities about grapes, regions, wineries, and recommend the best labels
                for your palate.
              </p>
            </div>

            {/* SUGGESTIONS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 px-2 md:px-0">
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  className="flex items-center justify-between px-6 py-3 h-[52px] rounded-xl bg-[#F4E8FB] text-[#5B3A7C]"
                >
                  <span className="text-sm font-medium">{s}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              ))}
            </div>

            {/* INPUT BAR */}
            <form className="sticky bottom-6 px-2 md:px-0">
              <div className="bg-white border border-gray-200 rounded-3xl px-4 py-3 shadow-lg flex items-center gap-3">
                <button type="button" className="p-3 rounded-full bg-[#F4E9FF] text-[#6D3FA6]">
                  <Plus className="w-5 h-5" />
                </button>

                <button type="button" className="p-3 rounded-full bg-[#F4E9FF] text-[#6D3FA6]">
                  <Mic className="w-5 h-5" />
                </button>

                <input
                  className="flex-1 px-3 bg-transparent outline-none text-sm"
                  placeholder="Ask me anything..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />

                <button type="submit" className="w-11 h-11 rounded-full bg-[#7f488b] text-white flex items-center justify-center shadow">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>

          </div>
        </main>
      </div>
    </div>
  );
}

// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import Image from "next/image";
// import {
//   Send,
//   Plus,
//   Menu,
//   MessageSquarePlus,
//   Globe,
//   Sparkles,
//   Mic,
//   ArrowRight,
//   MoreVertical,
//   LayoutDashboard,
// } from "lucide-react";
// import { useLanguage } from "@/app/providers/LanguageProvider";
// import { useRouter } from "next/navigation";

// export default function FreemiumChat() {
//   const { language, setLanguage, t } = useLanguage();
//   const router = useRouter();

//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [profileMenuOpen, setProfileMenuOpen] = useState(false);
//   const menuRef = useRef<HTMLDivElement>(null);

//   const CHAT_MAX_WIDTH = 1200;

//   // close profile menu on outside click
//   useEffect(() => {
//     function handleClickOutside(e: MouseEvent) {
//       if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
//         setProfileMenuOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const suggestions = [
//     "Suggest a wine",
//     "Harmonize a dish",
//     "Learn more about wine",
//     "Plan an itinerary",
//   ];

//   return (
//     <div className="fixed inset-0 bg-[#FAF7FC] flex flex-col text-[#3A2A4A]">

//       {/* ================= DESKTOP NAVBAR ================= */}
//       <nav className="hidden md:flex h-[88px] bg-white shadow-sm px-8 items-center justify-between">
//         <div className="flex items-center gap-5">
//           <Image src="/pro-logo.png" width={170} height={49} alt="Sommie" />

//           <button className="p-2 hover:bg-gray-100 rounded-full">
//             <svg width="22" height="22" stroke="#7f488b" fill="none">
//               <circle cx="11" cy="11" r="8" />
//               <line x1="21" y1="21" x2="16.65" y2="16.65" />
//             </svg>
//           </button>

//           <button className="p-2 hover:bg-gray-100 rounded-full">
//             <svg width="22" height="22" stroke="#7f488b" fill="none">
//               <rect x="3" y="4" width="18" height="16" rx="2" />
//               <line x1="3" y1="10" x2="21" y2="10" />
//             </svg>
//           </button>
//         </div>

//         <div className="flex items-center gap-4">
//           <button
//             onClick={() => setLanguage(language === "en" ? "pt" : "en")}
//             className="flex items-center gap-2"
//           >
//             <Globe className="w-5 h-5" />
//             <span className="text-sm uppercase">{language}</span>
//           </button>

//           <button className="flex items-center gap-2 bg-[#7f488b] text-white px-5 py-2 rounded-full">
//             <Sparkles className="w-4 h-4" />
//             Upgrade to PRO
//             <ArrowRight className="w-4 h-4" />
//           </button>
//         </div>
//       </nav>

//       {/* ================= MOBILE NAVBAR ================= */}
//       <nav className="md:hidden h-[64px] bg-white shadow-sm px-4 flex items-center justify-between">
//         <button onClick={() => setSidebarOpen(true)}>
//           <Menu className="w-6 h-6" />
//         </button>

//         <div className="flex items-center gap-2">
//           <Image src="/avatar.webp" width={28} height={28} alt="avatar" className="rounded-full" />
//           <span className="font-semibold">Sommie</span>
//         </div>

//         <button onClick={() => setLanguage(language === "en" ? "pt" : "en")}>
//           <Globe className="w-5 h-5" />
//         </button>
//       </nav>

//       {/* ================= BACKDROP ================= */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black/30 z-40 md:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       <div className="flex flex-1 overflow-hidden">

//         {/* ================= SIDEBAR ================= */}
//         <aside
//           className={`bg-white border-r z-50 w-[320px]
//             fixed md:static top-0 left-0 h-full
//             transition-transform duration-300
//             ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
//             md:translate-x-0`}
//         >
//           {/* MOBILE SIDEBAR HEADER (NO GAP FIXED) */}
//           <div className="md:hidden flex items-center gap-4 px-4 py-4 border-b">
//             <Image src="/pro-logo.png" width={140} height={36} alt="logo" />
//             <button className="p-2 hover:bg-gray-100 rounded-full">
//               <svg width="22" height="22" stroke="#7f488b" fill="none">
//                 <circle cx="11" cy="11" r="8" />
//                 <line x1="21" y1="21" x2="16.65" y2="16.65" />
//               </svg>
//             </button>
//             <button className="p-2 hover:bg-gray-100 rounded-full">
//               <svg width="22" height="22" stroke="#7f488b" fill="none">
//                 <rect x="3" y="4" width="18" height="16" rx="2" />
//                 <line x1="3" y1="10" x2="21" y2="10" />
//               </svg>
//             </button>
//           </div>

//           <div className="p-4 border-b">
//             <button className="w-full bg-[#7f488b] text-white py-3 rounded-xl flex justify-center gap-2">
//               <MessageSquarePlus className="w-4 h-4" />
//               New Chat
//             </button>
//           </div>

//           <div className="flex-1 flex flex-col items-center justify-center text-gray-400 text-sm">
//             <p>No chats yet</p>
//             <p className="text-xs">Start a new conversation</p>
//           </div>

//           {/* PROFILE + 3 DOT MENU */}
//           <div className="relative p-4 border-t flex items-center justify-between" ref={menuRef}>
//             <div className="flex items-center gap-3">
//               <Image src="/avatar.webp" width={40} height={40} alt="profile" className="rounded-full" />
//               <div>
//                 <p className="font-semibold text-sm">Adela Parkson</p>
//                 <p className="text-xs text-green-600">online</p>
//               </div>
//             </div>

//             <button onClick={() => setProfileMenuOpen(!profileMenuOpen)}>
//               <MoreVertical className="w-5 h-5" />
//             </button>

//             {profileMenuOpen && (
//               <div className="absolute right-4 bottom-14 bg-white border rounded-xl shadow-md w-40 overflow-hidden">
//                 <button
//                   onClick={() => router.push("/dashboard")}
//                   className="flex items-center gap-2 w-full px-4 py-3 hover:bg-gray-50 text-sm"
//                 >
//                   <LayoutDashboard className="w-4 h-4" />
//                   Dashboard
//                 </button>
//               </div>
//             )}
//           </div>
//         </aside>

//         {/* ================= CHAT AREA ================= */}
//         <main className="flex-1 overflow-y-auto">
//           <div className="mx-auto px-6 py-10" style={{ maxWidth: CHAT_MAX_WIDTH }}>
//             <div className="text-center mb-10">
//               <Image src="/avatar.webp" width={120} height={120} alt="Sommie" className="rounded-full mx-auto mb-4" />
//               <h1 className="text-3xl md:text-5xl font-bold mb-3">
//                 Hi, I'm Sommie,<br />your virtual sommelier!
//               </h1>
//               <p className="text-gray-600 max-w-3xl mx-auto">
//                 I'm an AI passionate about wines — I can answer questions, suggest pairings,
//                 share curiosities about grapes, regions, wineries, and recommend the best labels.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
//               {suggestions.map((s) => (
//                 <button key={s} className="h-[52px] bg-[#F4E8FB] rounded-xl px-6 flex justify-between items-center">
//                   <span>{s}</span>
//                   <ArrowRight />
//                 </button>
//               ))}
//             </div>

//             <form className="sticky bottom-6">
//               <div className="bg-white border rounded-3xl px-4 py-3 flex items-center gap-3 shadow">
//                 <button className="p-3 rounded-full bg-[#F4E9FF]">
//                   <Plus />
//                 </button>
//                 <button className="p-3 rounded-full bg-[#F4E9FF]">
//                   <Mic />
//                 </button>
//                 <input className="flex-1 outline-none" placeholder="Ask me anything..." />
//                 <button className="w-11 h-11 rounded-full bg-[#7f488b] text-white flex items-center justify-center">
//                   <Send />
//                 </button>
//               </div>
//             </form>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }
