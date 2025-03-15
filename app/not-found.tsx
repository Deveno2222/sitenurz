import { AlertTriangle, ShieldCheck } from "lucide-react";

export default function Error404Finance() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#8c52ff] text-white text-center px-6">
      <AlertTriangle className="w-20 h-20 text-yellow-300 mb-6" />
      <h1 className="text-5xl font-bold">ERROR 404: Будущее под угрозой</h1>
      <p className="mt-4 text-xl max-w-lg">
        Недостаточно финансовых резервов. Необходим план накоплений.
      </p>
      <div className="mt-8 flex flex-col items-center">
        <p className="text-lg mb-4">🔹 Хотите улучшить прогноз?</p>
        <a
          href="https://kommesk.kz/nsjup"
          className="flex items-center gap-3 bg-white text-[#8c52ff] hover:bg-gray-300 px-8 py-3 rounded-2xl text-xl font-semibold shadow-lg transition-colors ease-in-out cursor-pointer"
        >
          <ShieldCheck className="w-8 h-8" />
          Решение проблемы
        </a>
      </div>
    </div>
  );
}
