// import axios from "axios";

// export const chat = async (req, res) => {
//   const { message } = req.body;
//   const response = await axios.post(process.env.AI_API_URL, { message });
//   res.json({ reply: response.data.reply || response.data });
// };


import axios from "axios";

export const chat = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ message: "Message is required" });
    }

    const response = await axios.post(
      process.env.AI_API_URL,
      {
        input: message, // 👈 IMPORTANT (AWS usually expects `input`)
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return res.json({
      reply: response.data.reply || response.data.output || response.data,
    });
  } catch (err) {
    console.error("AI API ERROR:", err.response?.data || err.message);
    return res.status(500).json({ message: "AI service failed" });
  }
};
