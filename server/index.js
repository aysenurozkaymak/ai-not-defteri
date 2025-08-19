import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// CHAT API
app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "llama3",  // Ollama’da hangi model yüklüyse
        prompt: message
      }),
    });

    const data = await response.json();

    res.json({ reply: data.response }); // frontend'e "reply" döner
  } catch (error) {
    console.error("Ollama API Hatası:", error);
    res.status(500).json({ reply: "Asistan şu an cevap veremiyor 😢" });
  }
});

app.listen(5000, () => {
  console.log("✅ Server 5000 portunda çalışıyor");
});
