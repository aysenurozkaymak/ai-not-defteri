import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSend = async () => {
    try {
      const res = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama3.2",
          prompt: input,
          stream: false,
        }),
      });

      const data = await res.json();
      setResponse(data.response);
    } catch (err) {
      console.error("Hata:", err);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>📝 Not Defteri - Ollama</h1>
      <textarea
        rows={3}
        cols={50}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Bir şey yaz..."
      />
      <br />
      <button onClick={handleSend}>Gönder</button>
      <h2>Cevap:</h2>
      <p>{response}</p>
    </div>
  );
}

export default App;
