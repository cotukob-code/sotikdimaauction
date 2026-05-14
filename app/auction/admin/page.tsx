"use client";

import { Footer } from "components/layout/footer";
import { Navbar } from "components/layout/navbar";
import { CartProvider } from "components/cart/cart-context";
import { getCart } from "lib/shopify";
import { Toaster } from "sonner";
import { Suspense } from "react";

export const metadata = {
  title: "Админ-панель - Аукцион недвижимости",
  description: "Административная панель управления аукционом по продаже дома в Семьянах, Нижегородская область."
};

export default function AdminPage() {
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
                  Административная панель
                </p>
                <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
                  Управление аукционом
                </h1>
                <p className="text-[#a0aec0] text-sm md:text-base mb-6 max-w-2xl mx-auto">
                  Полный контроль над процессом аукциона, участниками и ставками.
                </p>
              </div>
            </div>
          </section>

          <section className="max-w-7xl mx-auto px-4 py-10">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <nav className="bg-[#16213e] border border-[#0f3460] rounded-2xl shadow-lg overflow-hidden">
                  <ul className="divide-y divide-[#0f3460]">
                    <li>
                      <a href="#" className="block px-6 py-4 text-white font-medium bg-[#0f3460]">
                        Обзор
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-6 py-4 text-[#a0aec0] hover:text-white">
                        Участники
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-6 py-4 text-[#a0aec0] hover:text-white">
                        Ставки
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-6 py-4 text-[#a0aec0] hover:text-white">
                        Документы
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-6 py-4 text-[#a0aec0] hover:text-white">
                        Настройки
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="lg:col-span-2 space-y-6">
                <div className="bg-[#16213e] border border-[#0f3460] rounded-2xl shadow-lg p-6">
                  <h2 className="text-xl font-bold text-white mb-6">Статистика аукциона</h2>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="bg-[#0f3460] rounded-xl p-4 text-center">
                      <p className="text-[#a0aec0] text-xs uppercase tracking-wide">Текущая ставка</p>
                      <p className="text-[#4ade80] font-bold text-lg">950 000 ₽</p>
                    </div>
                    <div className="bg-[#0f3460] rounded-xl p-4 text-center">
                      <p className="text-[#a0aec0] text-xs uppercase tracking-wide">Всего ставок</p>
                      <p className="text-[#fbbf24] font-bold text-lg">0</p>
                    </div>
                    <div className="bg-[#0f3460] rounded-xl p-4 text-center">
                      <p className="text-[#a0aec0] text-xs uppercase tracking-wide">Участников</p>
                      <p className="text-[#e94560] font-bold text-lg">1</p>
                    </div>
                    <div className="bg-[#0f3460] rounded-xl p-4 text-center">
                      <p className="text-[#a0aec0] text-xs uppercase tracking-wide">Залогов</p>
                      <p className="text-[#4ade80] font-bold text-lg">100 000 ₽</p>
                    </div>
                  </div>
                  
                  <div className="h-64 bg-[#0f172a] rounded-xl flex items-center justify-center">
                    <p className="text-[#a0aec0]">График ставок</p>
                  </div>
                </div>

                <div className="bg-[#16213e] border border-[#0f3460] rounded-2xl shadow-lg p-6">
                  <h2 className="text-xl font-bold text-white mb-6">Последние действия</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-[#0f172a] rounded-lg">
                      <div className="h-8 w-8 rounded-full bg-[#4ade80]/20 flex items-center justify-center mr-3">
                        <i data-lucide="user-plus" className="w-4 h-4 text-[#4ade80]"></i>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-white">Новый участник</p>
                        <p className="text-xs text-[#a0aec0]">Александр Петров зарегистрировался как участник</p>
                      </div>
                      <span className="text-xs text-[#a0aec0]">14:30</span>
                    </div>
                    
                    <div className="flex items-center p-3 bg-[#0f172a] rounded-lg">
                      <div className="h-8 w-8 rounded-full bg-[#4ade80]/20 flex items-center justify-center mr-3">
                        <i data-lucide="download" className="w-4 h-4 text-[#4ade80]"></i>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-white">Документ скачан</p>
                        <p className="text-xs text-[#a0aec0]">Кадастровый паспорт был скачан участником</p>
                      </div>
                      <span className="text-xs text-[#a0aec0]">14:15</span>
                    </div>
                    
                    <div className="flex items-center p-3 bg-[#0f172a] rounded-lg">
                      <div className="h-8 w-8 rounded-full bg-[#4ade80]/20 flex items-center justify-center mr-3">
                        <i data-lucide="message-circle" className="w-4 h-4 text-[#4ade80]"></i>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-white">Сообщение</p>
                        <p className="text-xs text-[#a0aec0]">Получен вопрос от участника о документах</p>
                      </div>
                      <span className="text-xs text-[#a0aec0]">14:05</span>
                    </div>
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