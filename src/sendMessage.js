  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await fetch("http://localhost:11434/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "llama3.2",
          messages: newMessages,
          stream: true
        }),
      });

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let aiReply = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.trim().split("\n");

        for (let line of lines) {
          if (line.startsWith("data:")) {
            try {
              const json = JSON.parse(line.replace("data:", "").trim());
              if (json.message && json.message.content) {
                aiReply += json.message.content;
              }
            } catch (err) {
              console.error("JSON parse error:", err);
            }
          }
        }
      }

      setMessages((prev) => [...prev, { role: "assistant", content: aiReply }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Ollama ile bağlantı kurulamadı." },
      ]);
    }
  };
