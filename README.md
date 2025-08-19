# 📝 AI Not Defteri

Bu proje, **Ollama** ve **React** kullanılarak geliştirilmiş basit bir yapay zekâ destekli not defteri uygulamasıdır.  
Kullanıcılar notlarını kaydedebilir, düzenleyebilir ve Ollama üzerinden yapay zekâ ile etkileşime girebilir.  

---

## 🚀 Özellikler
- Not ekleme, silme, düzenleme
- Ollama entegrasyonu ile yapay zekâ desteği
- Modern React arayüzü
- Basit ve kullanışlı tasarım

---
<img width="1886" height="439" alt="image" src="https://github.com/user-attachments/assets/6b95f01e-7851-4261-8483-d31345bb48dc" />

## ⚙️ Kurulum ve Çalıştırma

### 1. Repoyu klonla
```bash
git clone https://github.com/aysenurozkaymak/ai-not-defteri.git
cd ai-not-defteri
2. Gerekli paketleri yükle
npm install

3. Ollama’yı başlat

Bilgisayarında Ollama yüklü olmalı. Terminalden:

ollama serve

4. Uygulamayı başlat
npm start

📡 API Kullanımı

Uygulama, Ollama local API üzerinden çalışır.
Örnek istek:

curl http://localhost:11434/api/generate -d '{
  "model": "llama3.2",
  "prompt": "Merhaba, nasılsın?",
  "stream": false
}'



