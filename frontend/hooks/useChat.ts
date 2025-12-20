// import { useState } from "react";
// import { sendChatMessage } from "@/services/api";

// export function useChat(userId) {
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(false);

//   async function sendMessage(text) {
//     if (!text.trim()) return;

//     setMessages((prev) => [...prev, { type: "user", text }]);
//     setLoading(true);

//     try {
//       const data = await sendChatMessage(text, userId);

//       setMessages((prev) => [
//         ...prev,
//         { type: "bot", text: data.reply ?? "No response" },
//       ]);
//     } catch (err) {
//       setMessages((prev) => [
//         ...prev,
//         { type: "bot", text: "⚠️ Something went wrong. Please try again." },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return { messages, sendMessage, loading };
// }

// import { useState } from "react";
// import { sendChatMessage } from "@/services/chat";

// export function useChat(userId) {
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(false);

//   async function sendMessage(text) {
//     if (!text.trim()) return;

//     setMessages((m) => [...m, { type: "user", text }]);
//     setLoading(true);

//     try {
//       const data = await sendChatMessage(text, userId);
//       setMessages((m) => [...m, { type: "bot", text: data.reply }]);
//     } catch (err) {
//       setMessages((m) => [
//         ...m,
//         { type: "bot", text: "⚠️ Chat error" },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return { messages, sendMessage, loading };
// }

// "use client";

// import { useState } from "react";

// import { sendChatMessage } from "@/services/chat";

// export function useChat(userId: string) {
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(false);

//   async function sendMessage(text: string) {
//     if (!text.trim()) return;

//     setMessages((m) => [...m, { type: "user", text }]);
//     setLoading(true);

//     try {
//       const data = await sendChatMessage(text, userId);
//       setMessages((m) => [...m, { type: "bot", text: data.reply }]);
//     } catch {
//       setMessages((m) => [...m, { type: "bot", text: "⚠️ Chat error" }]);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return { messages, sendMessage, loading };
// }


"use client";

import { useState } from "react";
import { sendChatMessage } from "@/services/chat";

type ChatMessage = {
  type: "user" | "bot";
  text: string;
};

export function useChat(userId: string) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  async function sendMessage(text: string) {
    if (!text.trim()) return;

    setMessages((m) => [...m, { type: "user", text }]);
    setLoading(true);

    try {
      const data = await sendChatMessage(text);
      setMessages((m) => [
        ...m,
        { type: "bot", text: data.reply || "No response" },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        { type: "bot", text: "⚠️ Chat error" },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return { messages, sendMessage, loading };
}
