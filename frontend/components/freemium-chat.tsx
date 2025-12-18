

// "use client";

// import React, { useState, useRef, useEffect  } from "react";
// import Image from "next/image";
// import {
//    Send,
//    Plus,
//    Menu,
//    MessageSquarePlus,
//    Globe,
//    Sparkles,
//    Mic,
//    ArrowRight,
//    MoreVertical,
//    LayoutDashboard,
// } from "lucide-react";
// import { useLanguage } from "@/app/providers/LanguageProvider";
// import { useRouter } from "next/navigation";

// export default function FreemiumChat() {
//   const { t, language, setLanguage } = useLanguage();
//   const router = useRouter();

//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [input, setInput] = useState("");
//   const [profileMenuOpen, setProfileMenuOpen] = useState(false);
//   const menuRef = useRef<HTMLDivElement>(null);

//   const messages = [
//     {
//       type: "bot",
//       text: `Hi, I'm Sommie, your virtual sommelier!

// I'm an AI passionate about wines — I can answer questions, suggest pairings, share curiosities about grapes, regions, wineries, and recommend the best labels for your palate.`,
//     },
//   ];

//   const CHAT_MAX_WIDTH = 1200;

//    useEffect(() => {
//      function handleClickOutside(e: MouseEvent) {
//        if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
//          setProfileMenuOpen(false);
//        }
//      }
//      document.addEventListener("mousedown", handleClickOutside);
//      return () => document.removeEventListener("mousedown", handleClickOutside);
//    }, []);


//   const suggestions = [
//     "Suggest a wine",
//     "Harmonize a dish",
//     "Learn more about wine",
//     "Plan an itinerary",
//   ];

//   return (
//     <div className="fixed inset-0 bg-[#FAF7FC] flex flex-col z-50 text-[#3A2A4A]">

//       {/* DESKTOP NAVBAR */}
//       <nav className="hidden md:flex w-full bg-white shadow-sm px-8 items-center justify-between h-[88px]">
//         <div className="flex items-center gap-5">
//           <Image src="/pro-logo.png" width={170} height={49} alt="Sommie Logo" />

//           {/* SEARCH */}
//           <button className="p-2 hover:bg-gray-100 rounded-full">
//             <svg width="22" height="22" stroke="#7f488b" fill="none">
//               <circle cx="11" cy="11" r="8" />
//               <line x1="21" y1="21" x2="16.65" y2="16.65" />
//             </svg>
//           </button>

//           {/* HISTORY */}
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
//           >
//             <Globe className="w-5 h-5" />
//             <span className="text-sm font-medium uppercase">
//               {language === "en" ? "EN" : "PT"}
//             </span>
//           </button>

//           <button className="flex items-center gap-2 bg-[#7f488b] text-white px-5 py-2 rounded-full shadow-md">
//             <Sparkles className="w-4 h-4" />
//             <span className="font-semibold text-sm">Upgrade to PRO</span>
//             <ArrowRight className="w-4 h-4" />
//           </button>
//         </div>
//       </nav>

//       {/* MOBILE NAVBAR */}
//       <nav className="md:hidden w-full bg-white shadow-sm px-4 py-3 flex items-center justify-between">
//         <button onClick={() => setSidebarOpen(true)}>
//           <Menu className="w-6 h-6 text-[#4B2B5F]" />
//         </button>

//         <div className="flex items-center gap-2">
//            <Image src="/pro-logo.png" width={170} height={19} alt="Sommie Logo" />
//         </div>

//         <button onClick={() => setLanguage(language === "en" ? "pt" : "en")}>
//           <Globe className="w-5 h-5 text-[#4B2B5F]" />
//         </button>
//       </nav>

//       {/* BACKDROP (mobile only) */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black/30 z-40 md:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       <div className="flex flex-1 overflow-hidden">

//         {/* SIDEBAR */}
//        <aside
//   className={`bg-white border-r z-50 w-[320px] 
//     fixed md:static top-0 left-0 h-full 
//     transition-transform duration-300
//     ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
//     md:translate-x-0
//   `}
// >

//   {/* MOBILE SIDEBAR HEADER (Logo + Search + History) */}
//   <div className="flex md:hidden items-center gap-4 px-4 py-4 border-b">
//     <Image
//       src="/pro-logo.png"
//       width={150}
//       height={40}
//       alt="Sommie Logo"
//       className="object-contain"
//     />

//     {/* SEARCH */}
//     <button className="p-2 hover:bg-gray-100 rounded-full">
//       <svg width="22" height="22" stroke="#7f488b" fill="none">
//         <circle cx="11" cy="11" r="8" />
//         <line x1="21" y1="21" x2="16.65" y2="16.65" />
//       </svg>
//     </button>

//     {/* HISTORY */}
//     <button className="p-2 hover:bg-gray-100 rounded-full">
//       <svg width="22" height="22" stroke="#7f488b" fill="none">
//         <rect x="3" y="4" width="18" height="16" rx="2" />
//         <line x1="3" y1="10" x2="21" y2="10" />
//       </svg>
//     </button>
//   </div>

//   {/* New Chat */}
//   <div className="p-4 border-b">
//     <button
//       onClick={() => setSidebarOpen(false)}
//       className="flex items-center justify-center gap-2 w-full bg-[#7f488b] text-white py-3 rounded-xl shadow"
//     >
//       <MessageSquarePlus className="w-4 h-8" />
//       <span className="font-semibold text-sm">New Chat</span>
//     </button>
//   </div>

//   {/* EMPTY CHAT STATE */}
//   <div className="flex-1 flex flex-col lg:h-[490px] h-[590px] items-center justify-center text-gray-400 text-sm">
//     <p>No chats yet</p>
//     <p className="text-xs mt-1">Start a new conversation</p>
//   </div>

//   {/* PROFILE */}
//   <div className="relative p-4 border-t flex items-center justify-between" ref={menuRef}>
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
//                  onClick={() => router.push("/free-dash")}
//                   className="flex items-center gap-2 w-full px-4 py-3 hover:bg-gray-50 text-sm"
//                 >
//                   <LayoutDashboard className="w-4 h-4" />
//                   Dashboard
//                 </button>
//               </div>
//             )}
//           </div>
// </aside>


//         {/* CHAT AREA */}
//         <main className="flex-1 overflow-y-auto">
//           <div className="mx-auto px-6 py-10" style={{ maxWidth: CHAT_MAX_WIDTH }}>

//             {/* HERO SECTION */}
//             <div className="text-center mb-10">
//               <Image src="/avatar.webp" width={120} height={120} alt="Sommie" className="rounded-full mx-auto mb-4 shadow" />

//               <h1 className="text-3xl md:text-5xl font-bold text-[#4B2B5F] mb-3 leading-snug">
//                 Hi, I'm Sommie,<br />your virtual sommelier!
//               </h1>

//               <p className="text-lg text-gray-600 max-w-3xl mx-auto px-2 md:px-0">
//                 I'm an AI passionate about wines — I can answer questions, suggest pairings,
//                 share curiosities about grapes, regions, wineries, and recommend the best labels
//                 for your palate.
//               </p>
//             </div>

//             {/* SUGGESTIONS */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 px-2 md:px-0">
//               {suggestions.map((s, i) => (
//                 <button
//                   key={i}
//                   className="flex items-center justify-between px-6 py-3 h-[52px] rounded-xl bg-[#F4E8FB] text-[#5B3A7C]"
//                 >
//                   <span className="text-sm font-medium">{s}</span>
//                   <ArrowRight className="w-5 h-5" />
//                 </button>
//               ))}
//             </div>

//             {/* INPUT BAR */}
//             <form className="sticky bottom-6 px-2 md:px-0">
//               <div className="bg-white border border-gray-200 rounded-3xl px-4 py-3 shadow-lg flex items-center gap-3">
//                 <button type="button" className="p-3 rounded-full bg-[#F4E9FF] text-[#6D3FA6]">
//                   <Plus className="w-5 h-5" />
//                 </button>

//                 <button type="button" className="p-3 rounded-full bg-[#F4E9FF] text-[#6D3FA6]">
//                   <Mic className="w-5 h-5" />
//                 </button>

//                 <input
//                   className="flex-1 px-3 bg-transparent outline-none text-sm"
//                   placeholder="Ask me anything..."
//                   value={input}
//                   onChange={(e) => setInput(e.target.value)}
//                 />

//                 <button type="submit" className="w-11 h-11 rounded-full bg-[#7f488b] text-white flex items-center justify-center shadow">
//                   <Send className="w-4 h-4" />
//                 </button>
//               </div>
//             </form>

//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }



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
// import { sendMessage } from "@/lib/chat";

// type ChatMessage = {
//   type: "user" | "bot";
//   text: string;
// };

// export default function FreemiumChat() {
//   const { language, setLanguage } = useLanguage();
//   const router = useRouter();

//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [profileMenuOpen, setProfileMenuOpen] = useState(false);

//   const menuRef = useRef<HTMLDivElement>(null);
//   const bottomRef = useRef<HTMLDivElement>(null);

//   const [messages, setMessages] = useState<ChatMessage[]>([
//     {
//       type: "bot",
//       text: `Hi, I'm Sommie, your virtual sommelier!\n\nI'm an AI passionate about wines — I can answer questions, suggest pairings, share curiosities about grapes, regions, wineries, and recommend the best labels for your palate.`,
//     },
//   ]);

//   const CHAT_MAX_WIDTH = 1200;

//   const suggestions = [
//     "Suggest a wine",
//     "Harmonize a dish",
//     "Learn more about wine",
//     "Plan an itinerary",
//   ];

//   /* ---------------- CLICK OUTSIDE PROFILE MENU ---------------- */
//   useEffect(() => {
//     function handleClickOutside(e: MouseEvent) {
//       if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
//         setProfileMenuOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   /* ---------------- AUTO SCROLL ---------------- */
//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, loading]);

//   /* ---------------- SEND MESSAGE ---------------- */
//   const handleSend = async (text?: string) => {
//     const message = text ?? input;
//     if (!message.trim() || loading) return;

//     setInput("");
//     setLoading(true);

//     setMessages((prev) => [...prev, { type: "user", text: message }]);

//     try {
//       const data = await sendMessage(message, language);
//       setMessages((prev) => [...prev, { type: "bot", text: data.reply }]);
//     } catch (err) {
//       setMessages((prev) => [
//         ...prev,
//         { type: "bot", text: "⚠️ Something went wrong. Please try again." },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-[#FAF7FC] flex flex-col z-50 text-[#3A2A4A]">

//       {/* ---------- NAVBARS (UNCHANGED) ---------- */}
//       {/* Desktop Navbar */}
//       <nav className="hidden md:flex w-full bg-white shadow-sm px-8 items-center justify-between h-[88px]">
//         <Image src="/pro-logo.png" width={170} height={49} alt="Sommie Logo" />
//         <div className="flex items-center gap-4">
//           <button onClick={() => setLanguage(language === "en" ? "pt" : "en")} className="flex gap-2">
//             <Globe className="w-5 h-5" />
//             {language.toUpperCase()}
//           </button>
//           <button className="bg-[#7f488b] text-white px-5 py-2 rounded-full flex gap-2">
//             <Sparkles className="w-4 h-4" />
//             Upgrade to PRO
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Navbar */}
//       <nav className="md:hidden bg-white shadow-sm px-4 py-3 flex justify-between">
//         <button onClick={() => setSidebarOpen(true)}>
//           <Menu className="w-6 h-6" />
//         </button>
//         <Image src="/pro-logo.png" width={140} height={20} alt="logo" />
//         <button onClick={() => setLanguage(language === "en" ? "pt" : "en")}>
//           <Globe className="w-5 h-5" />
//         </button>
//       </nav>

//       <div className="flex flex-1 overflow-hidden">

//         {/* ---------- SIDEBAR (UNCHANGED) ---------- */}
//         {/* (keeping your sidebar exactly as-is) */}
//         {/* ... sidebar code remains same ... */}

//         {/* ---------- CHAT AREA ---------- */}
//         <main className="flex-1 overflow-y-auto">
//           <div className="mx-auto px-6 py-10" style={{ maxWidth: CHAT_MAX_WIDTH }}>

//             {/* HERO (only before first user message) */}
//             {messages.length === 1 && (
//               <>
//                 <div className="text-center mb-10">
//                   <Image src="/avatar.webp" width={120} height={120} alt="Sommie" className="rounded-full mx-auto mb-4 shadow" />
//                   <h1 className="text-3xl md:text-5xl font-bold mb-3">
//                     Hi, I'm Sommie,<br />your virtual sommelier!
//                   </h1>
//                 </div>

//                 {/* Suggestions */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
//                   {suggestions.map((s) => (
//                     <button
//                       key={s}
//                       onClick={() => handleSend(s)}
//                       className="flex justify-between px-6 py-3 h-[52px] rounded-xl bg-[#F4E8FB]"
//                     >
//                       {s}
//                       <ArrowRight />
//                     </button>
//                   ))}
//                 </div>
//               </>
//             )}

//             {/* MESSAGES */}
//             <div className="space-y-4">
//               {messages.map((m, i) => (
//                 <div
//                   key={i}
//                   className={`flex ${m.type === "user" ? "justify-end" : "justify-start"}`}
//                 >
//                   <div className={`max-w-[80%] px-4 py-3 rounded-2xl shadow bg-white`}>
//                     <p className="whitespace-pre-line text-sm">{m.text}</p>
//                   </div>
//                 </div>
//               ))}

//               {loading && (
//                 <div className="flex justify-start text-sm text-gray-400">
//                   Sommie is thinking…
//                 </div>
//               )}

//               <div ref={bottomRef} />
//             </div>

//             {/* INPUT */}
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 handleSend();
//               }}
//               className="sticky bottom-6 mt-6"
//             >
//               <div className="bg-white border rounded-3xl px-4 py-3 flex gap-3">
//                 <input
//                   className="flex-1 bg-transparent outline-none"
//                   placeholder="Ask me anything..."
//                   value={input}
//                   onChange={(e) => setInput(e.target.value)}
//                 />
//                 <button type="submit" disabled={loading}>
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


"use client";

import React, { useState, useRef, useEffect } from "react";
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
import { sendMessage } from "@/lib/chat";

type ChatMessage = {
  type: "user" | "bot";
  text: string;
};

export default function FreemiumChat() {
  const { language, setLanguage } = useLanguage();
  const router = useRouter();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      type: "bot",
      text: `Hi, I'm Sommie, your virtual sommelier!

I'm an AI passionate about wines — I can answer questions, suggest pairings, share curiosities about grapes, regions, wineries, and recommend the best labels for your palate.`,
    },
  ]);

  const CHAT_MAX_WIDTH = 1200;

  const suggestions = [
    "Suggest a wine",
    "Harmonize a dish",
    "Learn more about wine",
    "Plan an itinerary",
  ];

  /* Close profile menu on outside click */
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setProfileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* Auto scroll */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  /* Send message */
  const handleSend = async (text?: string) => {
    const message = text ?? input;
    if (!message.trim() || loading) return;

    setInput("");
    setLoading(true);

    setMessages((prev) => [...prev, { type: "user", text: message }]);

    try {
      const data = await sendMessage(message);
      setMessages((prev) => [...prev, { type: "bot", text: data.reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "⚠️ Something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#FAF7FC] flex flex-col z-50 text-[#3A2A4A]">

      {/* DESKTOP NAVBAR */}
      <nav className="hidden md:flex w-full bg-white shadow-sm px-8 items-center justify-between h-[88px]">
        <Image src="/pro-logo.png" width={170} height={49} alt="Sommie Logo" />

        <div className="flex items-center gap-4">
          <button
            onClick={() => setLanguage(language === "en" ? "pt" : "en")}
            className="flex items-center gap-2"
          >
            <Globe className="w-5 h-5" />
            {language.toUpperCase()}
          </button>

          <button className="flex items-center gap-2 bg-[#7f488b] text-white px-5 py-2 rounded-full shadow-md">
            <Sparkles className="w-4 h-4" />
            Upgrade to PRO
          </button>
        </div>
      </nav>

      {/* MOBILE NAVBAR */}
      <nav className="md:hidden bg-white shadow-sm px-4 py-3 flex justify-between">
        <button onClick={() => setSidebarOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
        <Image src="/pro-logo.png" width={140} height={20} alt="logo" />
        <button onClick={() => setLanguage(language === "en" ? "pt" : "en")}>
          <Globe className="w-5 h-5" />
        </button>
      </nav>

      <div className="flex flex-1 overflow-hidden">

        {/* SIDEBAR (unchanged UI) */}
        <aside
          className={`bg-white border-r z-50 w-[320px] fixed md:static top-0 left-0 h-full transition-transform duration-300
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
        >
          <div className="p-4 border-b">
            <button className="w-full bg-[#7f488b] text-white py-3 rounded-xl flex gap-2 justify-center">
              <MessageSquarePlus className="w-4 h-4" />
              New Chat
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">
            No chats yet
          </div>

          <div className="relative p-4 border-t flex justify-between" ref={menuRef}>
            <div className="flex gap-3">
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
              <div className="absolute right-4 bottom-14 bg-white border rounded-xl shadow-md w-40">
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

            {/* HERO + SUGGESTIONS (only first message) */}
            {messages.length === 1 && (
              <>
                <div className="text-center mb-10">
                  <Image src="/avatar.webp" width={120} height={120} alt="Sommie" className="rounded-full mx-auto mb-4" />
                  <h1 className="text-3xl md:text-5xl font-bold mb-3">
                    Hi, I'm Sommie,<br />your virtual sommelier!
                  </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {suggestions.map((s) => (
                    <button
                      key={s}
                      onClick={() => handleSend(s)}
                      className="flex justify-between px-6 py-3 h-[52px] rounded-xl bg-[#F4E8FB]"
                    >
                      {s}
                      <ArrowRight />
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* MESSAGES */}
            <div className="space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div className="max-w-[80%] px-4 py-3 rounded-2xl bg-white shadow">
                    <p className="whitespace-pre-line text-sm">{m.text}</p>
                  </div>
                </div>
              ))}

              {loading && <p className="text-sm text-gray-400">Sommie is thinking…</p>}
              <div ref={bottomRef} />
            </div>

            {/* INPUT */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="sticky bottom-6 mt-6"
            >
              <div className="bg-white border rounded-3xl px-4 py-3 flex gap-3">
                <input
                  className="flex-1 bg-transparent outline-none"
                  placeholder="Ask me anything..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit" disabled={loading}>
                  <Send />
                </button>
              </div>
            </form>

          </div>
        </main>
      </div>
    </div>
  );
}
