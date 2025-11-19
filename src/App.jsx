// src/App.jsx
import React from "react";
import ginaLogo from "./assets/gina-logo.png";

export default function App() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">

      {/* Header */}
      <header className="w-full py-6 px-6 bg-[#1A1A1A] border-b border-gray-700 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src={ginaLogo} className="h-10 w-10 object-contain" />
          <h1 className="text-2xl font-bold">GINA BLOG</h1>
        </div>

        <nav className="space-x-6 text-white/90 font-medium">
          <a href="#">首頁</a>
          <a href="#">文章列表</a>
          <a href="#">關於我</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">享受生活，記錄靈感</h2>
        <p className="max-w-2xl mx-auto text-gray-300">
          歡迎來到 GINA BLOG。
        </p>
      </section>

    </div>
  );
}
