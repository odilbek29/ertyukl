import React, { useState } from "react";
import "./App.css";

function App() {
  const [started, setStarted] = useState(false);

  const text = `🇺🇿 KONSTITUTSIYA — HUQUQIY DAVLAT VA BAXTIYOR JAMIYAT 🇺🇿

Konstitutsiya – har bir davlatning bosh qonuni bo‘lib, u jamiyat hayotining barcha sohalarini tartibga soladi.
Huquqiy davlatda qonun ustuvor bo‘ladi, inson huquq va erkinliklari oliy qadriyat sifatida e’tirof etiladi.
Konstitutsiya ana shunday huquqiy davlatni shakllantirishning mustahkam asosidir.

Baxtiyor jamiyat esa shunday davlatda yashaydigan, o‘z huquqlarini biladigan, farovon va erkin fuqarolardan iborat jamiyatdir.
Shu bois, har bir fuqaro Konstitutsiyani bilishi va unga amal qilishi muhimdir.`;

  const copyText = () => {
    navigator.clipboard.writeText(text);
    alert("✅ Referat matni muvaffaqiyatli nusxalandi!");
  };

  // Agar foydalanuvchi hali "Davom etish" bosmagan bo‘lsa
  if (!started) {
    return (
      <div className="welcome-screen">
        <div className="welcome-box">
          <h1>🇺🇿 HUSH KELIBSIZ! 🇺🇿</h1>
          <p>O‘zbekiston Konstitutsiyasi haqidagi sahifaga xush kelibsiz!</p>
          <button className="start-btn" onClick={() => setStarted(true)}>
            🚀 Davom etish
          </button>
        </div>
      </div>
    );
  }

  // Asosiy sahifa
  return (
    <div className="wrapper">
      <header className="header">
        <h1>📘 KONSTITUTSIYA, HUQUQIY DAVLAT VA BAXTIYOR JAMIYAT</h1>
      </header>

      <main>
        <div className="content">
          <img
            src="https://xabar.uz/static/crop/3/9/920__95_3956614739.jpg"
            alt="Konstitutsiya rasmi"
          />
          <div className="referat-card">
            <p>{text}</p>
          </div>
   
        </div>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} O‘zbekiston Konstitutsiyasi haqida | tayyor sayt
        </p>
      </footer>
    </div>
  );
}

export default App;
