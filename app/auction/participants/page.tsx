"use client";

import { Footer } from "components/layout/footer";
import { Navbar } from "components/layout/navbar";
import { CartProvider } from "components/cart/cart-context";
import { getCart } from "lib/shopify";
import { Toaster } from "sonner";
import { Suspense } from "react";

export const metadata = {
  title: "Участники - Аукцион недвижимости",
  description: "Список зарегистрированных участников аукциона по продаже дома в Семьянах, Нижегородская область."
};

export default function ParticipantsPage() {
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
                  Участники
                </p>
                <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
                  Зарегистрированные участники
                </h1>
                <p className="text-[#a0aec0] text-sm md:text-base mb-6 max-w-2xl mx-auto">
                  Список всех зарегистрированных участников аукциона с возможностью подачи заявки.
                </p>
              </div>
            </div>
          </section>

          <section className="max-w-7xl mx-auto px-4 py-10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Текущие участники</h2>
              <span className="text-[#a0aec0]">0 из 50 возможных</span>
            </div>

            <div className="bg-[#16213e] border border-[#0f3460] rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#0f172a]">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#a0aec0] uppercase tracking-wider">Участник</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#a0aec0] uppercase tracking-wider">Дата регистрации</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#a0aec0] uppercase tracking-wider">Статус</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#0f3460]">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <div className="h-10 w-10 rounded-full bg-[#0f3460] flex items-center justify-center">
                              <span className="text-sm font-medium text-[#e94560]">А</span>
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-white">Александр Петров</div>
                            <div className="text-sm text-[#a0aec0]">alex.petrov@example.com</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#a0aec0]">
                        14 мая 2026
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-[#4ade80]/20 text-[#4ade80]">
                          Подтвержден
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 bg-[#16213e] border border-[#0f3460] rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Подать заявку на участие</h3>
              <p className="text-[#a0aec0] mb-6">Для участия в аукционе необходимо внести залог в размере 100 000 ₽ и предоставить паспортные данные.</p>
              
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#a0aec0] mb-1">Фамилия</label>
                    <input type="text" className="w-full px-3 py-2 bg-[#0f172a] border border-[#0f3460] rounded-lg text-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#a0aec0] mb-1">Имя</label>
                    <input type="text" className="w-full px-3 py-2 bg-[#0f172a] border border-[#0f3460] rounded-lg text-white" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#a0aec0] mb-1">Email</label>
                  <input type="email" className="w-full px-3 py-2 bg-[#0f172a] border border-[#0f3460] rounded-lg text-white" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#a0aec0] mb-1">Телефон</label>
                  <input type="tel" className="w-full px-3 py-2 bg-[#0f172a] border border-[#0f3460] rounded-lg text-white" />
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="terms" type="checkbox" className="w-4 h-4 text-[#e94560] bg-[#0f172a] border-[#0f3460] rounded" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-medium text-[#a0aec0]">
                      Я согласен с <a href="/auction/docs" className="text-[#e94560] hover:text-[#d63851]">условиями участия</a> в аукционе
                    </label>
                  </div>
                </div>
                
                <button type="submit" className="w-full py-3 bg-[#e94560] text-white font-semibold rounded-lg hover:bg-[#d63851] transition">
                  Подать заявку
                </button>
              </form>
            </div>
          </section>
        </main>
        <Footer />
      </div>
      <Toaster />
    </CartProvider>
  );
}