"use client";

import { Footer } from "components/layout/footer";
import { Navbar } from "components/layout/navbar";
import { CartProvider } from "components/cart/cart-context";
import { getCart } from "lib/shopify";
import { Toaster } from "sonner";
import { Suspense } from "react";

export const metadata = {
  title: "Профиль - Аукцион недвижимости",
  description: "Личный кабинет участника аукциона по продаже дома в Семьянах, Нижегородская область."
};

export default function ProfilePage() {
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
                  Личный кабинет
                </p>
                <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
                  Мой профиль
                </h1>
                <p className="text-[#a0aec0] text-sm md:text-base mb-6 max-w-2xl mx-auto">
                  Управление личными данными и ставками в аукционе.
                </p>
              </div>
            </div>
          </section>

          <section className="max-w-7xl mx-auto px-4 py-10">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="bg-[#16213e] border border-[#0f3460] rounded-2xl shadow-lg p-6">
                  <div className="text-center">
                    <div className="h-20 w-20 rounded-full bg-[#0f3460] flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-medium text-[#e94560]">А</span>
                    </div>
                    <h2 className="text-xl font-bold text-white">Александр Петров</h2>
                    <p className="text-[#a0aec0]">alex.petrov@example.com</p>
                    <p className="text-sm text-[#a0aec0] mt-2">Участник с 14 мая 2026</p>
                  </div>
                </div>

                <nav className="mt-6 bg-[#16213e] border border-[#0f3460] rounded-2xl shadow-lg overflow-hidden">
                  <ul className="divide-y divide-[#0f3460]">
                    <li>
                      <a href="#" className="block px-6 py-4 text-white font-medium bg-[#0f3460]">
                        Личные данные
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-6 py-4 text-[#a0aec0] hover:text-white">
                        Мои ставки
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-6 py-4 text-[#a0aec0] hover:text-white">
                        Уведомления
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

              <div className="lg:col-span-2">
                <div className="bg-[#16213e] border border-[#0f3460] rounded-2xl shadow-lg p-6">
                  <h2 className="text-xl font-bold text-white mb-6">Личные данные</h2>
                  
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#a0aec0] mb-1">Фамилия</label>
                        <input type="text" defaultValue="Петров" className="w-full px-3 py-2 bg-[#0f172a] border border-[#0f3460] rounded-lg text-white" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#a0aec0] mb-1">Имя</label>
                        <input type="text" defaultValue="Александр" className="w-full px-3 py-2 bg-[#0f172a] border border-[#0f3460] rounded-lg text-white" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-[#a0aec0] mb-1">Email</label>
                      <input type="email" defaultValue="alex.petrov@example.com" className="w-full px-3 py-2 bg-[#0f172a] border border-[#0f3460] rounded-lg text-white" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-[#a0aec0] mb-1">Телефон</label>
                      <input type="tel" defaultValue="+7 (999) 123-45-67" className="w-full px-3 py-2 bg-[#0f172a] border border-[#0f3460] rounded-lg text-white" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-[#a0aec0] mb-1">Паспорт</label>
                      <div className="grid md:grid-cols-2 gap-4">
                        <input type="text" defaultValue="45 12 345678" className="w-full px-3 py-2 bg-[#0f172a] border border-[#0f3460] rounded-lg text-white" placeholder="Серия и номер" />
                        <input type="text" defaultValue="14.05.2026" className="w-full px-3 py-2 bg-[#0f172a] border border-[#0f3460] rounded-lg text-white" placeholder="Дата выдачи" />
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <input id="notifications" type="checkbox" defaultChecked className="w-4 h-4 text-[#e94560] bg-[#0f172a] border-[#0f3460] rounded" />
                      <label htmlFor="notifications" className="ml-2 block text-sm text-[#a0aec0]">
                        Получать уведомления о новых ставках
                      </label>
                    </div>
                    
                    <div className="flex space-x-4">
                      <button type="submit" className="px-6 py-2 bg-[#e94560] text-white font-semibold rounded-lg hover:bg-[#d63851] transition">
                        Сохранить изменения
                      </button>
                      <button type="button" className="px-6 py-2 bg-[#0f172a] text-[#a0aec0] font-semibold rounded-lg hover:text-white transition">
                        Отмена
                      </button>
                    </div>
                  </form>
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