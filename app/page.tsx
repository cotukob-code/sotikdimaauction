"use client";

import { Footer } from "components/layout/footer";
import { Navbar } from "components/layout/navbar";
import { CartProvider } from "components/cart/cart-context";
import { getCart } from "lib/shopify";
import { Toaster } from "sonner";
import { Suspense } from "react";

export const metadata = {
  description:
    "High-performance ecommerce store built with Next.js, Vercel, and Shopify.",
  openGraph: {
    type: "website",
  },
};

// Преобразованн��й HTML из auction-site/index.html
export default function HomePage() {
  // Получаем корзину для CartProvider
  const cart = getCart();

  return (
    <CartProvider cartPromise={cart}>
      <div className="min-h-full bg-[#1a1a2e] text-[#e0e0e0]">
        <Navbar />
        <main className="pb-10">
          {/* HERO */}
          <section className="hero-gradient border-b border-[#0f172a]">
            <div className="max-w-7xl mx-auto px-4 py-10 md:py-16 grid md:grid-cols-[1.4fr,1fr] gap-10 items-center">
              <div>
                <p className="text-[#e94560] font-semibold tracking-[0.25em] uppercase text-[11px] mb-3">
                  Живой аукцион недвижимости
                </p>
                <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
                  Дом в Семьянах<br className="hidden md:block" /> на открытых торгах
                </h1>
                <p className="text-[#a0aec0] text-sm md:text-base mb-6 max-w-xl">
                  Двухэтажный кирпичный дом с участком 0.5 га в Нижегородской области.
                  Прозрачные условия, фиксированный шаг ставки, юридически чистая сделка.
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <a href="/auction.html" className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#e94560] text-white text-sm font-semibold shadow-md shadow-[#e94560]/40 hover:bg-[#d63851] transition">
                    Перейти к онлайн‑торгам
                  </a>
                  <a href="/docs.html" className="text-xs md:text-sm text-slate-300 hover:text-white underline-offset-4 hover:underline">
                    Смотреть полные условия и документы
                  </a>
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="bg-[#16213e] border border-[#0f3460] rounded-2xl shadow-lg px-6 py-4 flex flex-col items-center justify-center min-w-[150px]">
                    <p className="text-[#a0aec0] text-xs uppercase tracking-wide mb-1">Текущая ставка</p>
                    <p id="home-current-bid" className="font-bold text-2xl text-[#4ade80]">950 000 ₽</p>
                  </div>
                  <div className="bg-[#16213e] border border-[#0f3460] rounded-2xl shadow-lg px-6 py-4 flex flex-col items-center justify-center min-w-[150px]">
                    <p className="text-[#a0aec0] text-xs uppercase tracking-wide mb-1">Всего ставок</p>
                    <p id="home-bid-count" className="font-bold text-2xl text-[#fbbf24]">0</p>
                  </div>
                  <div className="bg-[#16213e] border border-[#0f3460] rounded-2xl shadow-lg px-6 py-4 flex flex-col items-center justify-center min-w-[150px]">
                    <p className="text-[#a0aec0] text-xs uppercase tracking-wide mb-1">Участников</p>
                    <p id="home-participant-count" className="font-bold text-2xl text-[#e94560]">0</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#16213e] border border-[#0f3460] rounded-2xl shadow-lg p-4 md:p-5 flex flex-col gap-4">
                <img src="/auction-site/photo/genhome1.png"
                     alt="Дом для аукциона" className="w-full h-48 md:h-56 object-cover rounded-xl" />
                <p className="text-red-500 text-xs font-semibold">Внимание: это компьютерная генерация проекта</p>
                <div className="text-xs text-[#a0aec0] space-y-1">
                  <p><span className="text-slate-400">Адрес:</span> Нижегородская обл., Воротынский р-н, с. Семьяны, ул. Безводная, д. 42</p>
                  <p><span className="text-slate-400">Площадь дома:</span> 130+ м² • <span className="text-slate-400">Участок:</span> 0.5 га</p>
                  <p><span className="text-slate-400">Статус аукциона:</span> <span className="text-[#4ade80] font-semibold">Активен</span></p>
                </div>
              </div>
            </div>
          </section>

          {/* ОПИСАНИЕ + УСЛОВИЯ */}
          <section className="max-w-7xl mx-auto px-4 py-10 space-y-10">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Описание */}
              <article className="bg-[#16213e] border border-[#0f3460] rounded-2xl shadow-lg p-6 md:p-7">
                <h2 className="font-heading text-2xl text-white mb-5 flex items-center gap-2">
                  🏠 Описание объекта
                </h2>

                <div className="space-y-6 text-sm md:text-base">
                  <div>
                    <h3 className="text-[#e94560] font-semibold mb-2">Основная информация</h3>
                    <ul className="space-y-2 text-[#cbd5e0]">
                      <li className="flex gap-2"><i data-lucide="check" className="w-4 h-4 text-[#4ade80] mt-0.5 flex-shrink-0"></i>Двухэтажный дом, кирпичная кладка</li>
                      <li className="flex gap-2"><i data-lucide="check" className="w-4 h-4 text-[#4ade80] mt-0.5 flex-shrink-0"></i>Общая площадь: 130+ м²</li>
                      <li className="flex gap-2"><i data-lucide="check" className="w-4 h-4 text-[#4ade80] mt-0.5 flex-shrink-0"></i>Земельный участок: 0.5 га</li>
                      <li className="flex gap-2"><i data-lucide="check" className="w-4 h-4 text-[#4ade80] mt-0.5 flex-shrink-0"></i>Год постройки: 1985</li>
                    </ul>
                  </div>

                  <div className="border-t border-[#0f3460] pt-4">
                    <h3 className="text-[#e94560] font-semibold mb-2">1 этаж (54 м²)</h3>
                    <ul className="space-y-1 text-sm text-[#a0aec0] list-disc list-inside">
                      <li>Гостиная-столовая (20 м²)</li>
                      <li>Кухня (12 м²)</li>
                      <li>Спальня (15 м²)</li>
                      <li>Ванная комната</li>
                      <li>Коридор и входная зона</li>
                      <li>Котельная с отоплением</li>
                    </ul>
                  </div>

                  <div className="border-t border-[#0f3460] pt-4">
                    <h3 className="text-[#e94560] font-semibold mb-2">2 этаж (54 м²)</h3>
                    <ul className="space-y-1 text-sm text-[#a0aec0] list-disc list-inside">
                      <li>Две спальни (18 м² + 16 м²)</li>
                      <li>Кабинет/гостевая (15 м²)</li>
                      <li>Ванная комната</li>
                      <li>Балкон (10 м²)</li>
                      <li>Коридор с лестницей</li>
                    </ul>
                  </div>

                  <div className="border-t border-[#0f3460] pt-4">
                    <h3 className="text-[#e94560] font-semibold mb-2">Состояние и удобства</h3>
                    <ul className="space-y-1 text-sm text-[#a0aec0] list-disc list-inside">
                      <li>Водоснабжение и канализация</li>
                      <li>Электроснабжение 15 кВт</li>
                      <li>Газоснабжение (конденсационный котел)</li>
                      <li>Пластиковые окна (2010 г.)</li>
                      <li>Деревянные двери</li>
                      <li>Косметический ремонт</li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* Условия */}
              <article className="bg-[#16213e] border border-[#0f3460] rounded-2xl shadow-lg p-6 md:p-7">
                <h2 className="font-heading text-2xl text-white mb-5 flex items-center gap-2">
                  📋 Условия аукциона
                </h2>

                <div className="bg-[#16213e] border border-[#0f3460] rounded-2xl shadow-lg px-6 py-4 flex flex-col items-center justify-center min-w-[150px] w-full mb-6">
                  <p className="text-[#a0aec0] text-xs uppercase tracking-wide mb-1">Текущая ставка</p>
                  <p id="terms-current-bid" className="font-bold text-3xl text-[#4ade80]">950 000 ₽</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm md:text-base">
                  <div className="bg-[#0f3460] rounded-xl p-4 flex flex-col gap-1">
                    <p className="text-[#a0aec0] text-xs uppercase tracking-wide">Стартовая цена</p>
                    <p className="text-white font-semibold text-lg">950 000 ₽</p>
                  </div>
                  <div className="bg-[#0f3460] rounded-xl p-4 flex flex-col gap-1">
                    <p className="text-[#a0aec0] text-xs uppercase tracking-wide">Шаг ставки</p>
                    <p className="text-white font-semibold text-lg">150 000 ₽</p>
                  </div>
                  <div className="bg-[#0f3460] rounded-xl p-4 flex flex-col gap-1">
                    <p className="text-[#a0aec0] text-xs uppercase tracking-wide">Целевая цена</p>
                    <p className="text-[#e94560] font-semibold text-lg">1 750 000 ₽</p>
                  </div>
                  <div className="bg-[#0f3460] rounded-xl p-4 flex flex-col gap-1">
                    <p className="text-[#a0aec0] text-xs uppercase tracking-wide">Статус</p>
                    <p className="text-[#fbbf24] font-semibold text-lg">Активен</p>
                  </div>
                </div>

                <div className="border-t border-[#0f3460] pt-4 mb-4 text-sm">
                  <h3 className="text-[#e94560] font-semibold mb-2">Важная информация</h3>
                  <ul className="space-y-2 text-[#a0aec0]">
                    <li className="flex gap-2"><i data-lucide="alert-circle" className="w-4 h-4 text-[#fbbf24] mt-0.5 flex-shrink-0"></i>Аукцион проводится хозяином дома</li>
                    <li className="flex gap-2"><i data-lucide="alert-circle" className="w-4 h-4 text-[#fbbf24] mt-0.5 flex-shrink-0"></i>Начальная цена: 950 000 ₽</li>
                    <li className="flex gap-2"><i data-lucide="alert-circle" className="w-4 h-4 text-[#fbbf24] mt-0.5 flex-shrink-0"></i>Минимальный шаг: 150 000 ₽</li>
                    <li className="flex gap-2"><i data-lucide="alert-circle" className="w-4 h-4 text-[#fbbf24] mt-0.5 flex-shrink-0"></i>Залог: 100 000 ₽</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-[#e94560]/10 to-[#d63851]/10 border border-[#e94560]/30 rounded-xl p-4 text-sm">
                  <p className="text-[#e94560] font-semibold mb-1">⏰ Статус аукциона</p>
                  <p className="text-[#4ade80]">Аукцион активен и открыт для участников.</p>
                </div>
              </article>
            </div>
          </section>

          {/* ГАЛЕРЕЯ */}
          <section className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex items-center justify-between gap-4 mb-4">
              <h2 className="font-heading text-2xl text-white flex items-center gap-2">
                📸 Галерея объекта
              </h2>
              <span className="text-xs text-slate-400">Заменишь ссылки на свои фото</span>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-[#16213e] border border-[#0f3460] rounded-2xl shadow-lg overflow-hidden">
                <img src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800"
                     alt="Фасад дома" className="w-full h-40 object-cover" />
                <p className="px-4 py-3 text-sm">Фасад дома</p>
              </div>
              <div className="bg-[#16213e] border border-[#0f3460] rounded-2xl shadow-lg overflow-hidden