# 🚀 WhatsApp ChatGPT Bot

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)
[![OpenAI](https://img.shields.io/badge/OpenAI-API-blue)](https://platform.openai.com/)
[![Twilio](https://img.shields.io/badge/Twilio-WhatsApp-red)](https://www.twilio.com/whatsapp)

A **Node.js WhatsApp bot** using **Twilio** and **OpenAI GPT-3.5**.  
Send WhatsApp messages to your bot, and it replies automatically using AI.

---

## ⚡ Features

- Receive WhatsApp messages via Twilio Sandbox  
- Generate AI responses with OpenAI
- Run locally using Node.js & ngrok  
- Easy to set up and customize  

---

## 🛠️ Setup Instructions

1. **Clone the repository** 
```bash
git clone https://github.com/alirezahkim/whatsapp-chatgpt-bot.git
cd whatsapp-chatgpt-bot

2. **Install dependencies**
npm install

3.  **Configure environment variables**
Create a .env file (or c.env) in the root directory and add your credentials

Edit c.env with your credentials:
OPENAI_API_KEY=your_openai_key
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
TWILIO_PHONE_NUMBER=whatsapp:+14155238886
MY_PHONE_NUMBER=your_phone_number
PORT=3000

4.  **Run the server**
node index.js

5.  **Expose your local server with ngrok**
ngrok http 3000

6.  **Update Twilio Sandbox Webhook URL**
Take the HTTPS URL from ngrok and append /webhook
Example: https://abcd1234.ngrok-free.app/webhook

##💬 Usage
Send a WhatsApp message to your Twilio Sandbox number
The bot will reply automatically using OpenAI

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


