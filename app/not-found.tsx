"use client"

import { AlertTriangle, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Error404Finance() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#8c52ff] text-white text-center px-6">
      <AlertTriangle className="w-20 h-20 text-yellow-300 mb-6" />
      <h1 className="text-5xl font-bold">ERROR 404: Будущее под угрозой</h1>
      <p className="mt-4 text-xl max-w-lg">
        Недостаточно финансовых резервов. Необходим план накоплений.
      </p>
      <div className="mt-8 flex flex-col items-center">
        <p className="text-lg mb-4">🔹 Хотите улучшить прогноз?</p>
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl text-xl font-semibold shadow-lg transition cursor-pointer"
        >
          <ShieldCheck className="w-8 h-8" /> Активировать финансовую защиту
        </button>
      </div>
    </div>
  );
}
