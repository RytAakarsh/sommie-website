import axios from "axios";

export const chat = async (req, res) => {
  const { message } = req.body;
  const response = await axios.post(process.env.AI_API_URL, { message });
  res.json({ reply: response.data.reply || response.data });
};
