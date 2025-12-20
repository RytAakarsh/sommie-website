// const API_BASE = process.env.NEXT_PUBLIC_API_URL;

// export async function sendChatMessage(message, userId) {
//   const token = localStorage.getItem("token"); // JWT saved on login

//   const res = await fetch(`${API_BASE}/chat`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify({ message, userId }),
//   });

//   if (!res.ok) {
//     throw new Error("Chat API failed");
//   }

//   return res.json();
// }
// const API_BASE = process.env.NEXT_PUBLIC_API_URL;

// export async function sendChatMessage(message, userId) {
//   const token = localStorage.getItem("sommie_token");

//   const res = await fetch(`${API_BASE}/api/chat`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify({ message, userId }),
//   });

//   if (!res.ok) {
//     const text = await res.text();
//     throw new Error(text || "Chat API failed");
//   }

//   return res.json();
// }


const API = process.env.NEXT_PUBLIC_API_URL;

export async function signup(data: {
  name: string;
  email: string;
  password: string;
}) {
  const res = await fetch(`${API}/api/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
}

export async function login(data: {
  email: string;
  password: string;
}) {
  const res = await fetch(`${API}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
}
