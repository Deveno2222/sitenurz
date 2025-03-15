"use client";
import Image from "next/image";
import bgImage from "../public/756230866806840.jpg";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  PiggyBank,
  GraduationCap,
  Home as HomeIcon,
  TrendingUp,
} from "lucide-react";

import { FaGraduationCap, FaBriefcase, FaSmile } from "react-icons/fa";

const EducationIcon = FaGraduationCap;
const CareerIcon = FaBriefcase;
const HappinessIcon = FaSmile;

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (isLoading) {
      timer = setTimeout(() => {
        router.push("/notfound");
      }, 10000);
    }

    return () => clearTimeout(timer);
  }, [isLoading, router]);

  const cards = [
    {
      id: 1,
      icon: <PiggyBank size={48} />,
      text: "Уровень накоплений и финансовые резервы семьи",
    },
    {
      id: 2,
      icon: <GraduationCap size={48} />,
      text: "Качество и доступность образования в Казахстане",
    },
    {
      id: 3,
      icon: <HomeIcon size={48} />,
      text: "Экономическая среда и уровень жизни в вашем регионе",
    },
    {
      id: 4,
      icon: <TrendingUp size={48} />,
      text: "Рыночные тренды и перспективы профессии",
    },
  ];

  return (
    <>
      <header className="h-20 shadow-sm">
        <div className="relative flex justify-between items-center h-full container mx-auto px-6 bg-white">
          {/* Навигация */}
          <nav className="flex gap-6 flex-1">
            {["Главная", "О нас", "Контакты"].map((item) => (
              <button
                key={item}
                className="relative px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors
           after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-primary
           after:transition-all after:duration-300 after:ease-in-out after:-translate-x-1/2
           hover:after:w-full cursor-pointer"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Логотип (по центру) */}
          <div className="flex items-center gap-2">
            <Image
              src="/brain.svg" 
              alt="Логотип FutureScan"
              width={40} 
              height={40} 
              className="cursor-pointer" 
            />
            <div className="text-xl font-semibold text-gray-900 cursor-pointer">
              FutureScan
            </div>
          </div>

          {/* Профиль */}
          <div className="flex-1 flex justify-end">
            <button
              className="relative px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors
           after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-primary
           after:transition-all after:duration-300 after:ease-in-out after:-translate-x-1/2
           hover:after:w-full cursor-pointer"
            >
              Профиль
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto mt-8 bg-white">
        <div className="relative min-h-[700px] rounded-2xl flex flex-col justify-center items-center text-white overflow-hidden">
          <Image
            src={bgImage}
            alt="Фон"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 w-full h-full blur-xs brightness-50 sepia-[0.3] transform translate-y-0 group-hover:translate-y-[-10%] transition-transform duration-1000 ease-in-out"
          />
          {/* Наложение полупрозрачного темного слоя */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Контент поверх */}
          <div className="relative z-10 text-center px-6">
            <h1 className="text-6xl font-extrabold mb-10">
              Узнайте будущее вашего ребенка
            </h1>
            <p className="mb-8">
              Проанализируйте и будьте в курсе, что ждет вашего ребенка в
              будущем.
            </p>

            <div className="pb-20 font-light text-[20px] flex flex-col sm:flex-row justify-center items-center gap-4">
              {/* Карточка "Образование" */}
              <div className="group relative w-64 h-32">
                <div className="w-full h-full px-6 py-4 border border-[#D8D0C1] text-[#2D3748] bg-[#fee5cf] rounded-lg shadow-md cursor-pointer hover:bg-[#fdd8b5] transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex flex-col items-center justify-center gap-2">
                  <FaGraduationCap className="w-8 h-8 text-[#2D3748]" />
                  <span className="uppercase tracking-wide font-semibold text-center">
                    ОБРАЗОВАНИЕ
                  </span>
                </div>
                {/* Тултип */}
                <div className="absolute top-full mt-2 w-64 p-4 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  Узнайте, какое образование лучше всего подойдет вашему
                  ребенку.
                </div>
              </div>

              {/* Карточка "Карьера" */}
              <div className="group relative w-64 h-32">
                <div className="w-full h-full px-6 py-4 border border-[#C0B8A9] text-[#2D3748] bg-[#fee5cf] rounded-lg shadow-md cursor-pointer hover:bg-[#fdd8b5] transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex flex-col items-center justify-center gap-2">
                  <FaBriefcase className="w-8 h-8 text-[#2D3748]" />
                  <span className="uppercase tracking-wide font-semibold text-center">
                    КАРЬЕРА
                  </span>
                </div>
                {/* Тултип */}
                <div className="absolute top-full mt-2 w-64 p-4 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  Узнайте, какая карьера будет наиболее успешной для вашего
                  ребенка.
                </div>
              </div>

              {/* Карточка "Счастье" */}
              <div className="group relative w-64 h-32">
                <div className="w-full h-full px-6 py-4 border border-[#A89F91] text-[#2D3748] bg-[#fee5cf] rounded-lg shadow-md cursor-pointer hover:bg-[#fdd8b5] transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex flex-col items-center justify-center gap-2">
                  <FaSmile className="w-8 h-8 text-[#2D3748]" />
                  <span className="uppercase tracking-wide font-semibold text-center">
                    СЧАСТЬЕ
                  </span>
                </div>
                {/* Тултип */}
                <div className="absolute top-full mt-2 w-64 p-4 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  Узнайте, что принесет счастье вашему ребенку в будущем.
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsLoading(!isLoading)}
              className="w-56 px-8 py-3 bg-[#81c27e] text-black rounded-2xl 
  hover:bg-[#759b73] active:scale-95 transition-all 
  duration-200 ease-in-out shadow-lg cursor-pointer flex justify-center items-center gap-2 mx-auto"
            >
              {isLoading ? (
                <span className="flex items-center">
                  Загрузка
                  <span
                    className="dot"
                    style={{
                      animation: "blink 1.5s infinite",
                      animationDelay: "0s",
                    }}
                  >
                    .
                  </span>
                  <span
                    className="dot"
                    style={{
                      animation: "blink 1.5s infinite",
                      animationDelay: "0.3s",
                    }}
                  >
                    .
                  </span>
                  <span
                    className="dot"
                    style={{
                      animation: "blink 1.5s infinite",
                      animationDelay: "0.6s",
                    }}
                  >
                    .
                  </span>
                </span>
              ) : (
                "Загрузить будущее"
              )}

              <style>
                {`
      @keyframes blink {
        0%, 100% { opacity: 0; }
        50% { opacity: 1; }
      }
    `}
              </style>
            </button>
          </div>
        </div>
      </main>

      <div className="container mx-auto pt-40 h-[1000px] bg-white">
        <div className="flex flex-col">
          <h3 className="text-4xl px-32 text-center pb-8">
            Искусственный интеллект анализирует данные и точно предсказывает
            будущее жизни вашего ребенка. Узнайте, какое образование, карьеру и
            уровень счастья он сможет получить!
          </h3>
          <p className="text-center text-[20px] font-extralight italic pb-12">
            Система анализирует доступные параметры
          </p>

          <div className="flex flex-wrap justify-center gap-6 p-6 pb-20">
            {cards.map((card) => (
              <div
                key={card.id}
                className="w-72 bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 flex flex-col items-center p-6"
              >
                <div className="text-green-500">{card.icon}</div>
                <p className="text-gray-600 text-center mt-4">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
