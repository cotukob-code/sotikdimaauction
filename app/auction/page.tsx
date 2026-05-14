"use client";

import { Footer } from "components/layout/footer";
import { Navbar } from "components/layout/navbar";
import { CartProvider } from "components/cart/cart-context";
import { getCart } from "lib/shopify";
import { Toaster } from "sonner";
import { Suspense } from "react";

export const metadata = {
  title: "Онлайн-торги - Аукцион недвижимости",
  description: "Участвуйте в онлайн-торгах по продаже дома в Семьянах, Нижегородская область. Прозрачные условия, фиксированный шаг ставки, юридически чистая сделка."
};

export default function AuctionPage() {
  const cart = getCart();

  return (
    <CartProvider cartPromise={cart}>
      <div className="min-h-full bg-[#1a1a2e] text-[#e0e0e0]">
        <Navbar />
        <main className="pb-10">
          <section className="hero-gradient border-b border-[#0f172a]">
            <div className="max-w-7xl mx-auto px-4 py-10 md:py-16">
              <div className="text-center mb-8">
                <p className="text-[#e94560] font-semibold tracking-[0.25em] uppercase text-[11px] mb-3">
                  Онлайн-торги
                </p>
                <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
                  Дом в Семьянах<br className="hidden md:block" /> на открытых торгах
                </h1>
                <p className="text-[#a0aec0] text-sm md:text-base mb-6 max-w-2xl mx-auto">
                  Двухэтажный кирпичный дом с участком 0.5 га в Нижегородской области.
                  Прозрачные условия, фиксированный шаг ставки, юридически чистая сделка.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-[#16213e] border border-[#0f3460] rounded-2xl shadow-lg p-4 md:p-5">
                  <img src="/auction-site/photo/genhome1.png"
                       alt="Дом для аукциона" className="w-full h-48 md:h-56 object-cover rounded-xl" />
                  <p className="text-red-500 text-xs font-semibold mt-2">Внимание: это компьютерная генерация проекта</p>
                  <div className="text-xs text-[#a0aec0] space-y-1 mt-2">
                    <p><span className="text-slate-400">Адрес:</span> Нижегородская обл., Воротынский р-н, с. Семьяны, ул. Безводная, д. 42</p>
                    <p><span className="text-slate-400">Площадь дома:</span> 130+ м² • <span className="text-slate-400">Участок:</span> 0.5 га</p>
                    <p><span className="text-slate-400">Статус аукциона:</span> <span className="text-[#4ade80] font-semibold">Активен</span></p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-[#16213e] border border-[#0f3460] rounded-2xl shadow-lg p-6">
                    <h2 className="text-xl font-bold text-white mb-4">Текущие ставки</h2>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-[#0f3460] rounded-xl p-3 text-center">
                        <p className="text-[#a0aec0] text-xs uppercase tracking-wide">Текущая</p>
                        <p className="text-[#4ade80] font-bold text-lg">950 000 ₽</p>
                      </div>
                      <div className="bg-[#0f3460] rounded-xl p-3 text-center">
                        <p className="text-[#a0aec0] text-xs uppercase tracking-wide">Всего</p>
                        <p className="text-[#fbbf24] font-bold text-lg">0</p>
                      </div>
                      <div className="bg-[#0f3460] rounded-xl p-3 text-center">
                        <p className="text-[#a0aec0] text-xs uppercase tracking-wide">Участников</p>
                        <p className="text-[#e94560] font-bold text-lg">0</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#16213e] border border-[#0f3460] rounded-2xl shadow-lg p-6">
                    <h2 className="text-xl font-bold text-white mb-4">Условия участия</h2>
                    <ul className="space-y-2 text-sm text-[#a0aec0]">
                      <li className="flex gap-2"><i data-lucide="check" className="w-4 h-4 text-[#4ade80] mt-0.5"></i>Залог: 100 000 ₽</li>
                      <li className="flex gap-2"><i data-lucide="check" className="w-4 h-4 text-[#4ade80] mt-0.5"></i>Минимальный шаг: 150 000 ₽</li>
                      <li className="flex gap-2"><i data-lucide="check" className="w-4 h-4 text-[#4ade80] mt-0.5"></i>��ачальная цена: 950 000 ₽</li>
                    </ul>
                  </div>

                  <button className="w-full py-3 bg-[#e94560] text-white font-semibold rounded-lg hover:bg-[#d63851] transition">
                    Подать заявку на участие
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-7xl mx-auto px-4 py-10">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-[#16213e] border border-[#0f3460] rounded-2xl shadow-lg p-6">
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
                </div>
              </div>

              <div className="bg-[#16213e] border border-[#0f3460] rounded-2xl shadow-lg p-6">
                <h2 className="font-heading text-2xl text-white mb-5 flex items-center gap-2">
                  📋 Условия аукциона
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-6">
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
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
      <Toaster />
    </CartProvider>
  );
}