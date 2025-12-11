// "use client"

// import type React from "react"
// import { useState } from "react"
// import { useLanguage } from "@/app/page"
// import { Send, Plus, ArrowUpRight, Menu, X, MessageSquarePlus, Trash2, Globe, Sparkles } from "lucide-react"

// interface FreemiumChatProps {
//   onClose?: () => void
// }

// interface ChatSession {
//   id: string
//   title: string
//   timestamp: string
//   messages: Array<{ type: "bot" | "user"; text: string }>
// }

// export default function FreemiumChat({ onClose }: FreemiumChatProps) {
//   const { t, language, setLanguage } = useLanguage()
//   const [sidebarOpen, setSidebarOpen] = useState(true)
//   const [chatSessions, setChatSessions] = useState<ChatSession[]>([])
//   const [currentSession, setCurrentSession] = useState<ChatSession | null>(null)
//   const [messages, setMessages] = useState<Array<{ type: "bot" | "user"; text: string }>>([
//     {
//       type: "bot",
//       text: `${t("chat.greeting")}\n\n${t("chat.desc")}\n\n${t("chat.explore")}`,
//     },
//   ])
//   const [input, setInput] = useState("")
//   const [loading, setLoading] = useState(false)

//   const handleNewChat = () => {
//     const newSession: ChatSession = {
//       id: Date.now().toString(),
//       title: `${t("chat.newChat")} ${chatSessions.length + 1}`,
//       timestamp: new Date().toLocaleTimeString(),
//       messages: [],
//     }
//     setChatSessions((prev) => [newSession, ...prev])
//     setCurrentSession(newSession)
//     setMessages([
//       {
//         type: "bot",
//         text: `${t("chat.greeting")}\n\n${t("chat.desc")}\n\n${t("chat.explore")}`,
//       },
//     ])
//   }

//   const handleSelectChat = (session: ChatSession) => {
//     setCurrentSession(session)
//     setMessages(
//       session.messages.length > 0
//         ? session.messages
//         : [
//             {
//               type: "bot",
//               text: `${t("chat.greeting")}\n\n${t("chat.desc")}\n\n${t("chat.explore")}`,
//             },
//           ],
//     )
//   }

//   const handleDeleteChat = (id: string) => {
//     setChatSessions((prev) => prev.filter((s) => s.id !== id))
//     if (currentSession?.id === id) {
//       setCurrentSession(null)
//       setMessages([])
//     }
//   }

//   const handleSuggestedClick = (suggestion: string) => {
//     const newMessages = [...messages, { type: "user" as const, text: suggestion }]
//     setMessages(newMessages)
//     setLoading(true)
//     setTimeout(() => {
//       const updatedMessages = [
//         ...newMessages,
//         {
//           type: "bot" as const,
//           text: "This is a demo response from Sommie. Your premium experience will include full AI-powered wine recommendations!",
//         },
//       ]
//       setMessages(updatedMessages)
//       if (currentSession) {
//         setCurrentSession({ ...currentSession, messages: updatedMessages })
//         setChatSessions((prev) =>
//           prev.map((s) => (s.id === currentSession.id ? { ...s, messages: updatedMessages } : s)),
//         )
//       }
//       setLoading(false)
//     }, 1000)
//   }

//   const handleSendMessage = (e: React.FormEvent) => {
//     e.preventDefault()
//     if (!input.trim()) return

//     const newMessages = [...messages, { type: "user" as const, text: input }]
//     setMessages(newMessages)
//     setInput("")
//     setLoading(true)

//     setTimeout(() => {
//       const updatedMessages = [
//         ...newMessages,
//         { type: "bot" as const, text: "Thank you for your message! Explore more by selecting suggestions below." },
//       ]
//       setMessages(updatedMessages)
//       if (currentSession) {
//         setCurrentSession({ ...currentSession, messages: updatedMessages })
//         setChatSessions((prev) =>
//           prev.map((s) => (s.id === currentSession.id ? { ...s, messages: updatedMessages } : s)),
//         )
//       }
//       setLoading(false)
//     }, 1000)
//   }

//   const suggestions = [
//     t("chat.suggestWine") || "Suggest a wine for me today",
//     t("chat.harmonize") || "How do I harmonize this dish?",
//     t("chat.learnMore") || "I want to learn more about wines",
//     t("chat.itinerary") || "Plan a wine tourism itinerary",
//   ]

//   return (
//     <div className="fixed inset-0 bg-background flex flex-col z-50">
//       {/* Navbar */}
//       <nav className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-40">
//         <div className="px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between h-16">
//           {/* Left: Menu and Logo */}
//           <div className="flex items-center gap-4">
//             <button
//               onClick={() => setSidebarOpen(!sidebarOpen)}
//               className="p-2 hover:bg-secondary rounded-lg transition-colors lg:hidden text-foreground"
//             >
//               {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//             </button>
//             <div className="flex items-center gap-3 flex-shrink-0">
//               <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-md">
//                 <span className="text-primary-foreground font-bold text-lg">S</span>
//               </div>
//               <div className="hidden sm:block">
//                 <h1 className="text-base font-semibold text-foreground leading-5">Sommie</h1>
//                 <p className="text-xs text-muted-foreground">{t("plan.freemium") || "Freemium"}</p>
//               </div>
//             </div>
//           </div>

//           {/* Right: Language toggle and Upgrade button */}
//           <div className="flex items-center gap-2 sm:gap-4">
//             <button
//               onClick={() => setLanguage(language === "en" ? "pt" : "en")}
//               className="p-2 rounded-lg text-sm font-medium hover:bg-secondary transition-colors flex items-center gap-2 text-muted-foreground hover:text-foreground"
//               title={language === "en" ? "Português" : "English"}
//             >
//               <Globe className="w-4 h-4" />
//               <span className="hidden sm:inline">{language === "en" ? "PT" : "EN"}</span>
//             </button>
//             <button className="px-3 sm:px-5 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center gap-2 text-sm whitespace-nowrap">
//               <Sparkles className="w-4 h-4" />
//               <span className="hidden sm:inline">{t("plan.upgrade") || "Upgrade"}</span>
//               <ArrowUpRight className="w-3.5 h-3.5" />
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Main content with sidebar */}
//       <div className="flex-1 overflow-hidden flex flex-row">
//         {/* Sidebar */}
//         <aside
//           className={`${
//             sidebarOpen ? "translate-x-0" : "-translate-x-full"
//           } fixed lg:translate-x-0 lg:static w-64 h-full bg-background border-r border-border flex flex-col transition-transform duration-300 z-30 shadow-lg lg:shadow-none`}
//         >
//           {/* New Chat Button */}
//           <div className="p-4 border-b border-border">
//             <button
//               onClick={handleNewChat}
//               className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-105"
//             >
//               <MessageSquarePlus className="w-4 h-4" />
//               <span>{t("chat.newChat") || "New Chat"}</span>
//             </button>
//           </div>

//           {/* Chat History */}
//           <div className="flex-1 overflow-y-auto p-3 space-y-2">
//             {chatSessions.length === 0 ? (
//               <div className="text-center py-12 text-muted-foreground">
//                 <MessageSquarePlus className="w-8 h-8 mx-auto mb-2 opacity-40" />
//                 <p className="text-sm font-medium">{t("chat.noChats") || "No chats yet"}</p>
//                 <p className="text-xs mt-1 opacity-70">Start a new chat to begin</p>
//               </div>
//             ) : (
//               chatSessions.map((session) => (
//                 <div
//                   key={session.id}
//                   className="group relative"
//                   onClick={() => {
//                     handleSelectChat(session)
//                     setSidebarOpen(false)
//                   }}
//                 >
//                   <button
//                     className={`w-full text-left px-3 py-2.5 rounded-lg transition-all text-sm truncate font-medium ${
//                       currentSession?.id === session.id
//                         ? "bg-primary text-primary-foreground shadow-md"
//                         : "text-foreground hover:bg-secondary/60 hover:text-foreground"
//                     }`}
//                   >
//                     {session.title}
//                   </button>
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation()
//                       handleDeleteChat(session.id)
//                     }}
//                     className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded opacity-0 group-hover:opacity-100 hover:bg-destructive/15 transition-all"
//                   >
//                     <Trash2 className="w-3.5 h-3.5 text-destructive" />
//                   </button>
//                 </div>
//               ))
//             )}
//           </div>
//         </aside>

//         {/* Chat area */}
//         <div className="flex-1 overflow-hidden flex flex-col bg-gradient-to-b from-background to-background">
//           <div className="max-w-3xl mx-auto w-full h-full flex flex-col px-4 sm:px-6 lg:px-8 py-6">
//             {/* Chat messages */}
//             <div className="flex-1 overflow-y-auto space-y-5 mb-6 pr-4">
//               {messages.map((message, idx) => (
//                 <div
//                   key={idx}
//                   className={`flex ${message.type === "user" ? "justify-end" : "justify-start"} animate-fade-in-up`}
//                 >
//                   <div
//                     className={`max-w-md ${
//                       message.type === "user"
//                         ? "bg-primary text-primary-foreground rounded-3xl rounded-tr-none shadow-md"
//                         : "bg-secondary text-secondary-foreground rounded-3xl rounded-tl-none shadow-sm"
//                     } px-5 py-3 text-sm leading-relaxed`}
//                   >
//                     <p className="whitespace-pre-line">{message.text}</p>
//                   </div>
//                 </div>
//               ))}
//               {loading && (
//                 <div className="flex justify-start animate-fade-in-up">
//                   <div className="bg-secondary text-secondary-foreground px-5 py-3 rounded-3xl rounded-tl-none shadow-sm">
//                     <div className="flex gap-2">
//                       <div className="w-2 h-2 bg-secondary-foreground rounded-full animate-bounce"></div>
//                       <div
//                         className="w-2 h-2 bg-secondary-foreground rounded-full animate-bounce"
//                         style={{ animationDelay: "0.1s" }}
//                       ></div>
//                       <div
//                         className="w-2 h-2 bg-secondary-foreground rounded-full animate-bounce"
//                         style={{ animationDelay: "0.2s" }}
//                       ></div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Suggestions grid - only show if no messages or initial state */}
//             {messages.length <= 1 && (
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
//                 {suggestions.map((suggestion, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => handleSuggestedClick(suggestion)}
//                     className="text-left px-4 py-3 rounded-lg text-sm bg-secondary/70 text-foreground hover:bg-primary hover:text-primary-foreground transition-all font-medium border border-border/50 hover:border-primary shadow-sm hover:shadow-md"
//                   >
//                     {suggestion}
//                   </button>
//                 ))}
//               </div>
//             )}

//             {/* Input area */}
//             <form onSubmit={handleSendMessage} className="sticky bottom-0 bg-background pt-4">
//               <div className="flex gap-3">
//                 <button
//                   type="button"
//                   className="p-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all flex-shrink-0 shadow-sm hover:shadow-md"
//                 >
//                   <Plus className="w-5 h-5" />
//                 </button>
//                 <input
//                   type="text"
//                   value={input}
//                   onChange={(e) => setInput(e.target.value)}
//                   placeholder={t("chat.message") || "Type your message..."}
//                   className="flex-1 px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm"
//                 />
//                 <button
//                   type="submit"
//                   className="p-3 rounded-lg bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/30 transition-all flex-shrink-0 hover:scale-105"
//                 >
//                   <Send className="w-5 h-5" />
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }



// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import {
//   Send,
//   Plus,
//   ArrowUpRight,
//   Menu,
//   X,
//   MessageSquarePlus,
//   Trash2,
//   Globe,
//   Sparkles,
// } from "lucide-react";
// import { useLanguage } from "@/app/page";

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
//       text: `${t("chat.greeting")}\n\n${t("chat.desc")}\n\n${t("chat.explore")}`,
//     },
//   ]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleNewChat = () => {
//     const newSession: ChatSession = {
//       id: Date.now().toString(),
//       title: `${t("chat.newChat")} ${chatSessions.length + 1}`,
//       timestamp: new Date().toLocaleTimeString(),
//       messages: [],
//     };
//     setChatSessions((prev) => [newSession, ...prev]);
//     setCurrentSession(newSession);
//     setMessages([
//       {
//         type: "bot",
//         text: `${t("chat.greeting")}\n\n${t("chat.desc")}\n\n${t("chat.explore")}`,
//       },
//     ]);
//     // on mobile, close sidebar to show chat
//     setSidebarOpen(false);
//   };

//   const handleSelectChat = (session: ChatSession) => {
//     setCurrentSession(session);
//     setMessages(
//       session.messages.length > 0
//         ? session.messages
//         : [
//             {
//               type: "bot",
//               text: `${t("chat.greeting")}\n\n${t("chat.desc")}\n\n${t("chat.explore")}`,
//             },
//           ]
//     );
//     setSidebarOpen(false);
//   };

//   const handleDeleteChat = (id: string) => {
//     setChatSessions((prev) => prev.filter((s) => s.id !== id));
//     if (currentSession?.id === id) {
//       setCurrentSession(null);
//       setMessages([]);
//     }
//   };

//   const handleSuggestedClick = (suggestion: string) => {
//     const newMessages = [...messages, { type: "user" as const, text: suggestion }];
//     setMessages(newMessages);
//     setLoading(true);
//     setTimeout(() => {
//       const updatedMessages = [
//         ...newMessages,
//         {
//           type: "bot" as const,
//           text: t("chat.demoResponse") ||
//             "This is a demo response from Sommie. Your premium experience will include full AI-powered wine recommendations!",
//         },
//       ];
//       setMessages(updatedMessages);
//       if (currentSession) {
//         setCurrentSession({ ...currentSession, messages: updatedMessages });
//         setChatSessions((prev) =>
//           prev.map((s) => (s.id === currentSession.id ? { ...s, messages: updatedMessages } : s))
//         );
//       }
//       setLoading(false);
//     }, 900);
//   };

//   const handleSendMessage = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     const newMessages = [...messages, { type: "user" as const, text: input.trim() }];
//     setMessages(newMessages);
//     setInput("");
//     setLoading(true);

//     // demo bot response
//     setTimeout(() => {
//       const updatedMessages = [
//         ...newMessages,
//         {
//           type: "bot" as const,
//           text:
//             t("chat.thankYou") ||
//             "Thank you for your message! Explore more by selecting the suggestions below.",
//         },
//       ];
//       setMessages(updatedMessages);
//       if (currentSession) {
//         setCurrentSession({ ...currentSession, messages: updatedMessages });
//         setChatSessions((prev) =>
//           prev.map((s) => (s.id === currentSession.id ? { ...s, messages: updatedMessages } : s))
//         );
//       }
//       setLoading(false);
//     }, 900);
//   };

//   const suggestions = [
//     t("chat.suggestWine") || "Me indique um vinho para hoje.",
//     t("chat.harmonize") || "Como harmonizo esse prato?",
//     t("chat.learnMore") || "Quero aprender mais sobre vinhos.",
//     t("chat.itinerary") || "Planeje um roteiro de enoturismo para mim.",
//   ];

//   return (
//     <div className="fixed inset-0 bg-[#FAF8FB] flex flex-col z-50">
//       {/* NAVBAR */}
//       <nav className="border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-40">
//         <div className="px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between h-16">
//           <div className="flex items-center gap-3">
//             {/* menu toggle visible on mobile */}
//             <button
//               onClick={() => setSidebarOpen(!sidebarOpen)}
//               className="p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden text-gray-700"
//               aria-label="Toggle menu"
//             >
//               {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//             </button>

//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 relative">
//                 <Image
//                   src="/sommie-text-logo.png"
//                   alt="Sommie"
//                   fill
//                   sizes="(max-width: 640px) 120px, 160px"
//                   style={{ objectFit: "contain" }}
//                 />
//               </div>
//               <div className="hidden sm:block">
//                 <h1 className="text-base font-semibold text-[#5B3A7C] leading-5">Sommie</h1>
//                 <p className="text-xs text-gray-500">{t("plan.freemium") || "Freemium"}</p>
//               </div>
//             </div>
//           </div>

//           <div className="flex items-center gap-2 sm:gap-4">
//             <button
//               onClick={() => setLanguage(language === "en" ? "pt" : "en")}
//               className="p-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors flex items-center gap-2 text-gray-600"
//               title={language === "en" ? "Português" : "English"}
//             >
//               <Globe className="w-4 h-4" />
//               <span className="hidden sm:inline text-sm">{language === "en" ? "PT" : "EN"}</span>
//             </button>

//             <button
//               className="px-3 sm:px-5 py-2 rounded-lg bg-[#6D3FA6] text-white font-medium hover:shadow-lg transition-all flex items-center gap-2 text-sm whitespace-nowrap"
//               aria-label="Upgrade"
//             >
//               <Sparkles className="w-4 h-4" />
//               <span className="hidden sm:inline">{t("plan.upgrade") || "Upgrade"}</span>
//               <ArrowUpRight className="w-3.5 h-3.5" />
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* MAIN */}
//       <div className="flex-1 overflow-hidden flex flex-row">
//         {/* SIDEBAR */}
//         <aside
//           className={`transform top-0 left-0 w-72 bg-white border-r border-gray-200 h-full flex flex-col transition-transform duration-300 z-30
//             ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
//             lg:translate-x-0 lg:relative lg:block`}
//         >
//           <div className="p-4 border-b border-gray-100">
//             <button
//               onClick={handleNewChat}
//               className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#6D3FA6] text-white font-medium hover:shadow-md transition-transform hover:scale-[1.02]"
//             >
//               <MessageSquarePlus className="w-4 h-4" />
//               <span>{t("chat.newChat") || "Nova conversa"}</span>
//             </button>
//           </div>

//           <div className="flex-1 overflow-y-auto p-3 space-y-2">
//             {chatSessions.length === 0 ? (
//               <div className="text-center py-12 text-gray-400">
//                 <MessageSquarePlus className="w-8 h-8 mx-auto mb-2 opacity-40" />
//                 <p className="text-sm font-medium">{t("chat.noChats") || "Sem conversas"}</p>
//                 <p className="text-xs mt-1 opacity-70">{t("chat.startHint") || "Inicie uma nova conversa"}</p>
//               </div>
//             ) : (
//               chatSessions.map((session) => (
//                 <div key={session.id} className="group relative" onClick={() => handleSelectChat(session)}>
//                   <button
//                     className={`w-full text-left px-3 py-2.5 rounded-lg transition-all text-sm truncate font-medium ${
//                       currentSession?.id === session.id
//                         ? "bg-[#6D3FA6] text-white shadow-md"
//                         : "text-gray-800 hover:bg-[#F4E9FF] hover:text-[#5B3A7C]"
//                     }`}
//                   >
//                     {session.title}
//                   </button>
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleDeleteChat(session.id);
//                     }}
//                     className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded opacity-0 group-hover:opacity-100 hover:bg-gray-100 transition"
//                     aria-label="Delete chat"
//                   >
//                     <Trash2 className="w-3.5 h-3.5 text-red-500" />
//                   </button>
//                 </div>
//               ))
//             )}
//           </div>

//           <div className="p-4 border-t border-gray-100 flex items-center gap-3">
//             <div className="w-10 h-10 rounded-full overflow-hidden">
//               <Image src="/sommie-text-logo.png" alt="Sommie" width={40} height={40} />
//             </div>
//             <div>
//               <div className="text-sm font-medium text-gray-800">Adela Parkson</div>
//               <div className="text-xs text-gray-500">online</div>
//             </div>
//             <div className="ml-auto">
//               <button className="p-2 rounded-md hover:bg-gray-100">
//                 <Menu className="w-4 h-4 text-gray-600" />
//               </button>
//             </div>
//           </div>
//         </aside>

//         {/* CHAT AREA */}
//         <div className="flex-1 overflow-hidden flex flex-col bg-transparent">
//           <div className="max-w-3xl mx-auto w-full h-full flex flex-col px-4 sm:px-6 lg:px-8 py-6">
//             {/* MESSAGES */}
//             <div className="flex-1 overflow-y-auto space-y-5 mb-6 pr-4">
//               {messages.map((message, idx) => (
//                 <div
//                   key={idx}
//                   className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
//                 >
//                   <div
//                     className={`max-w-md px-5 py-3 text-sm leading-relaxed ${
//                       message.type === "user"
//                         ? "bg-[#6D3FA6] text-white rounded-3xl rounded-tr-none shadow-md"
//                         : "bg-white text-gray-800 rounded-3xl rounded-tl-none shadow-sm border border-gray-100"
//                     }`}
//                   >
//                     <p className="whitespace-pre-line">{message.text}</p>
//                     <div className="text-xs text-gray-400 mt-2 text-right">
//                       {/* timestamp not tracked for demo messages */}
//                     </div>
//                   </div>
//                 </div>
//               ))}

//               {loading && (
//                 <div className="flex justify-start">
//                   <div className="bg-white text-gray-800 px-5 py-3 rounded-3xl rounded-tl-none shadow-sm border border-gray-100">
//                     <div className="flex gap-2 items-center">
//                       <div className="w-2 h-2 bg-[#6D3FA6] rounded-full animate-bounce" />
//                       <div className="w-2 h-2 bg-[#6D3FA6] rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
//                       <div className="w-2 h-2 bg-[#6D3FA6] rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* SUGGESTIONS (show when initial state or low messages) */}
//             {messages.length <= 1 && (
//               <div className="grid grid-cols-1 gap-3 mb-6">
//                 {suggestions.map((suggestion, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => handleSuggestedClick(suggestion)}
//                     className="w-full text-left px-4 py-3 bg-[#F1E6FA] rounded-xl text-[#5B3A7C] flex justify-between items-center"
//                   >
//                     <span>{suggestion}</span>
//                     <Send className="w-4 h-4 text-[#5B3A7C]" />
//                   </button>
//                 ))}
//               </div>
//             )}

//             {/* INPUT */}
//             <form onSubmit={handleSendMessage} className="sticky bottom-0 bg-transparent pt-4">
//               <div className="flex gap-3 items-center">
//                 <button
//                   type="button"
//                   className="p-3 rounded-full bg-[#F4E9FF] text-[#6D3FA6] hover:scale-[1.02] transition"
//                 >
//                   <Plus className="w-5 h-5" />
//                 </button>

//                 <button
//                   type="button"
//                   className="p-3 rounded-full bg-[#F4E9FF] text-[#6D3FA6] hover:scale-[1.02] transition"
//                 >
//                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6D3FA6" strokeWidth="2"><path d="M4 14h16M4 10h16" /></svg>
//                 </button>

//                 <input
//                   type="text"
//                   value={input}
//                   onChange={(e) => setInput(e.target.value)}
//                   placeholder={t("chat.message") || "Mensagem"}
//                   className="flex-1 px-4 py-3 rounded-2xl bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D9B8FF] transition"
//                 />

//                 <button
//                   type="submit"
//                   className="w-10 h-10 rounded-full bg-[#6D3FA6] text-white flex items-center justify-center hover:scale-[1.03] transition"
//                   aria-label="Send"
//                 >
//                   <Send className="w-4 h-4" />
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Send,
  Plus,
  ArrowUpRight,
  Menu,
  X,
  MessageSquarePlus,
  Trash2,
  Globe,
  Sparkles,
  Mic,
} from "lucide-react";
import { useLanguage } from "@/app/providers/LanguageProvider";


interface FreemiumChatProps {
  onClose?: () => void;
}

interface ChatSession {
  id: string;
  title: string;
  timestamp: string;
  messages: Array<{ type: "bot" | "user"; text: string }>;
}

export default function FreemiumChat({ onClose }: FreemiumChatProps) {
  const { t, language, setLanguage } = useLanguage();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([]);
  const [currentSession, setCurrentSession] = useState<ChatSession | null>(null);
  const [messages, setMessages] = useState<
    Array<{ type: "bot" | "user"; text: string }>
  >([
    {
      type: "bot",
      text: `${t("chat.greeting")}\n\n${t("chat.desc")}\n\n${t("chat.explore")}`,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNewChat = () => {
    const newSession: ChatSession = {
      id: Date.now().toString(),
      title: `${t("chat.newChat")} ${chatSessions.length + 1}`,
      timestamp: new Date().toLocaleTimeString(),
      messages: [],
    };
    setChatSessions((prev) => [newSession, ...prev]);
    setCurrentSession(newSession);
    setMessages([
      {
        type: "bot",
        text: `${t("chat.greeting")}\n\n${t("chat.desc")}\n\n${t("chat.explore")}`,
      },
    ]);
    setSidebarOpen(false);
  };

  const handleSelectChat = (session: ChatSession) => {
    setCurrentSession(session);
    setMessages(
      session.messages.length > 0
        ? session.messages
        : [
            {
              type: "bot",
              text: `${t("chat.greeting")}\n\n${t("chat.desc")}\n\n${t("chat.explore")}`,
            },
          ]
    );
    setSidebarOpen(false);
  };

  const handleDeleteChat = (id: string) => {
    setChatSessions((prev) => prev.filter((s) => s.id !== id));
    if (currentSession?.id === id) {
      setCurrentSession(null);
      setMessages([]);
    }
  };

  const handleSuggestedClick = (text: string) => {
    const newMessages = [...messages, { type: "user", text }];
    setMessages(newMessages);
    setLoading(true);

    setTimeout(() => {
      const botMsg = {
        type: "bot" as const,
        text:
          t("chat.demoResponse") ||
          "This is a demo response from Sommie. Your premium experience will include full AI-powered wine recommendations!",
      };

      const updated = [...newMessages, botMsg];
      setMessages(updated);

      if (currentSession) {
        setCurrentSession({ ...currentSession, messages: updated });
        setChatSessions((prev) =>
          prev.map((s) => (s.id === currentSession.id ? { ...s, messages: updated } : s))
        );
      }

      setLoading(false);
    }, 800);
  };

  const handleSendMessage = (e: any) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { type: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      const botMsg = {
        type: "bot" as const,
        text: t("chat.thankYou") || "Thank you! Select suggestions below to explore more.",
      };

      const updated = [...newMessages, botMsg];
      setMessages(updated);

      if (currentSession) {
        setCurrentSession({ ...currentSession, messages: updated });
        setChatSessions((prev) =>
          prev.map((s) => (s.id === currentSession.id ? { ...s, messages: updated } : s))
        );
      }

      setLoading(false);
    }, 800);
  };

  const suggestions = [
    t("chat.suggestWine"),
    t("chat.harmonize"),
    t("chat.learnMore"),
    t("chat.itinerary"),
  ];

  return (
    <div className="fixed inset-0 bg-[#FAF7FC] flex flex-col z-50">
      {/* NAVBAR */}
      <nav className="border-b bg-white py-3 px-6 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>

          <div className="flex items-center gap-3">
            <Image
              src="/sommie-text-logo.png"
              width={150}
              height={40}
              alt="Sommie Logo"
              className="object-contain"
            />
            <span className="text-xs text-gray-500 -ml-3">Freemium</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setLanguage(language === "en" ? "pt" : "en")}
            className="flex items-center gap-2 text-gray-700 hover:text-purple-600"
          >
            <Globe className="w-5 h-5" />
            <span>{language === "en" ? "EN" : "PT"}</span>
          </button>

          <button className="flex items-center gap-2 bg-[#6D3FA6] text-white px-4 py-2 rounded-xl shadow hover:shadow-md">
            <Sparkles className="w-4 h-4" />
            {t("plan.upgrade")}
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </nav>

      {/* MAIN SECTION */}
      <div className="flex flex-1 overflow-hidden">
        {/* SIDEBAR (desktop only) */}
        <aside
          className={`bg-white border-r w-72 h-full flex flex-col transition-transform duration-300 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 lg:static fixed z-40`}
        >
          <div className="p-4 border-b">
            <button
              onClick={handleNewChat}
              className="flex items-center justify-center gap-2 w-full bg-[#6D3FA6] text-white py-2.5 rounded-xl"
            >
              <MessageSquarePlus className="w-4 h-4" />
              {t("chat.newChat")}
            </button>
          </div>

          {/* CHAT HISTORY */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {chatSessions.length === 0 ? (
              <div className="text-center text-gray-400 mt-10">
                <MessageSquarePlus className="w-8 h-8 mx-auto mb-2 opacity-40" />
                <p>{t("chat.noChats")}</p>
                <p className="text-xs opacity-70">{t("chat.startHint")}</p>
              </div>
            ) : (
              chatSessions.map((s) => (
                <div
                  key={s.id}
                  onClick={() => handleSelectChat(s)}
                  className="group relative"
                >
                  <button
                    className={`w-full text-left px-3 py-2 rounded-lg font-medium
                      ${
                        currentSession?.id === s.id
                          ? "bg-[#6D3FA6] text-white"
                          : "hover:bg-[#F4E9FF]"
                      }
                    `}
                  >
                    {s.title}
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteChat(s.id);
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-red-500"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* PROFILE BLOCK */}
          <div className="p-4 border-t flex items-center gap-3">
            <Image
              src="/sommie-text-logo.png"
              width={40}
              height={40}
              alt="profile"
              className="rounded-full"
            />
            <div>
              <p className="font-medium text-sm">Adela Parkson</p>
              <p className="text-xs text-green-600">online</p>
            </div>
            <Menu className="w-5 h-5 ml-auto text-gray-500" />
          </div>
        </aside>

        {/* CHAT AREA */}
        <div className="flex-1 flex flex-col px-6 py-6 overflow-hidden">
          {/* CHAT MESSAGES */}
          <div className="flex-1 overflow-y-auto space-y-5 px-4 max-w-3xl mx-auto w-full">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`px-5 py-3 rounded-3xl max-w-[85%] text-sm leading-relaxed 
                    ${
                      m.type === "user"
                        ? "bg-[#6D3FA6] text-white rounded-tr-none"
                        : "bg-white text-gray-800 border shadow rounded-tl-none"
                    }
                  `}
                >
                  <p className="whitespace-pre-line">{m.text}</p>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white px-5 py-3 rounded-3xl border shadow">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-[#6D3FA6] rounded-full animate-bounce" />
                    <div
                      className="w-2 h-2 bg-[#6D3FA6] rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    />
                    <div
                      className="w-2 h-2 bg-[#6D3FA6] rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* SUGGESTIONS */}
          {messages.length <= 1 && (
            <div className="max-w-3xl mx-auto w-full space-y-3 mt-6">
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => handleSuggestedClick(s!)}
                  className="flex justify-between items-center bg-[#F1E6FA] text-[#5B3A7C] px-4 py-3 rounded-xl w-full"
                >
                  <span>{s}</span>
                  <Send className="w-4 h-4" />
                </button>
              ))}
            </div>
          )}

          {/* INPUT AREA */}
          <form
            onSubmit={handleSendMessage}
            className="max-w-3xl mx-auto w-full mt-4"
          >
            <div className="flex items-center gap-3 bg-white border border-gray-200 shadow rounded-3xl px-4 py-3">
              <button
                type="button"
                className="p-2 rounded-full bg-[#F4E9FF] text-[#6D3FA6]"
              >
                <Plus className="w-5 h-5" />
              </button>

              <button
                type="button"
                className="p-2 rounded-full bg-[#F4E9FF] text-[#6D3FA6]"
              >
                <Mic className="w-5 h-5" />
              </button>

              <input
                className="flex-1 px-3 bg-transparent outline-none"
                placeholder={t("chat.message") || "Mensagem"}
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />

              <button
                type="submit"
                className="w-10 h-10 rounded-full bg-[#6D3FA6] text-white flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
