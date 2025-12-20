// import { getToken } from "../lib/auth";

// const API = process.env.NEXT_PUBLIC_API_URL;

// export async function sendChatMessage(message: string, userId: string) {
//   const token = getToken();

//   const res = await fetch(`${API}/api/chat`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify({ message, userId }),
//   });

//   if (!res.ok) {
//     throw new Error("Chat failed");
//   }

//   return res.json();
// }


import { getToken } from "@/lib/auth";

const API = process.env.NEXT_PUBLIC_API_URL;

export async function sendChatMessage(message: string) {
  const token = getToken();

  const res = await fetch(`${API}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ message }),
  });

  if (!res.ok) {
    throw new Error("Chat request failed");
  }

  return res.json();
}
