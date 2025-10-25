import express from "express";
import bodyParser from "body-parser";
import twilio from "twilio";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config({ path: "c.env" }); // ensure this file exists and has your keys

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ✅ Twilio client
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// ✅ OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// ✅ Health check route
app.get("/", (req, res) => {
  res.send("🚀 ChatGPT WhatsApp bot is running successfully!");
});

// ✅ Twilio webhook route
app.post("/webhook", async (req, res) => {
  try {
    const incomingMsg = req.body.Body;
    const from = req.body.From;

    console.log("📩 Message from:", from);
    console.log("💬 Message:", incomingMsg);

    // 💡 Generate a response using OpenAI
    const gptResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: incomingMsg }],
    });

    const reply = gptResponse.choices[0].message.content;

    // 💬 Send back via Twilio
    await client.messages.create({
      from: "whatsapp:+14155238886", // Twilio Sandbox number
      to: from,
      body: reply,
    });

    res.sendStatus(200);
  } catch (error) {
    console.error("❌ Webhook error:", error);
    res.status(500).send("Internal Server Error");
  }
});

// ✅ Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
