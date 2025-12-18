import { getToken } from "./auth";

const API = process.env.NEXT_PUBLIC_API_URL;

export async function sendMessage(message: string) {
  const token = getToken();

  const res = await fetch(`${API}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ message }),
  });

  return res.json();
}
