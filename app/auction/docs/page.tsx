"use client";

import { Footer } from "components/layout/footer";
import { Navbar } from "components/layout/navbar";
import { CartProvider } from "components/cart/cart-context";
import { getCart } from "lib/shopify";
import { Toaster } from "sonner";
import { Suspense } from "react";

export const metadata = {
  title: "Документы - Аукцион недвижимости",
  description: "Полный пакет документов для участия в аукционе по продаже дома в Семьянах, Нижегородская область."
};

export default function DocsPage() {
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
                  Документы
                </p>
                <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
                  Полный пакет документов
                </h1>
                <p className="text-[#a0aec0] text-sm md:text-base mb-6 max-w-2xl mx-auto">
                  Все необходимые документы для участия в аукционе и проверки объекта недвижимости.
                </p>
              </div>
            </div>
          </section>

          <section className="max-w-7xl mx-auto px-4 py-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[#16213e] border border-[#0f3460] rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4">Кадастровый паспорт</h2>
                <p className="text-[#a0aec0] mb-4">Официальный документ, подтверждающий характеристики земельного участка и расположенного на нем объекта недвижимости.</p>
                <a href="#" className="inline-flex items-center gap-2 text-[#e94560] hover:text-[#d63851]">
                  <i data-lucide="download" className="w-4 h-4"></i>
                  Скачать PDF
                </a>
              </div>

              <div className="bg-[#16213e] border border-[#0f3460] rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4">Технический паспорт</h2>
                <p className="text-[#a0aec0] mb-4">Документ, содержащий подробную информацию о технических характеристиках здания, его планировке и состоянии.</p>
                <a href="#" className="inline-flex items-center gap-2 text-[#e94560] hover:text-[#d63851]">
                  <i data-lucide="download" className="w-4 h-4"></i>
                  Скачать PDF
                </a>
              </div>

              <div className="bg-[#16213e] border border-[#0f3460] rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4">План участка</h2>
                <p className="text-[#a0aec0] mb-4">Графическое изображение земельного участка с указанием границ, расположения построек и других объектов.</p>
                <a href="#" className="inline-flex items-center gap-2 text-[#e94560] hover:text-[#d63851]">
                  <i data-lucide="download" className="w-4 h-4"></i>
                  Скачать PDF
                </a>
              </div>

              <div className="bg-[#16213e] border border-[#0f3460] rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4">Выписка из ЕГРН</h2>
                <p className="text-[#a0aec0] mb-4">Официальный документ, подтверждающий право собственности на объект недвижимости и отсутствие обременений.</p>
                <a href="#" className="inline-flex items-center gap-2 text-[#e94560] hover:text-[#d63851]">
                  <i data-lucide="download" className="w-4 h-4"></i>
                  Скачать PDF
                </a>
              </div>

              <div className="bg-[#16213e] border border-[#0f3460] rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4">Акт осмотра</h2>
                <p className="text-[#a0aec0] mb-4">Документ, составленный независимым экспертом после осмотра объекта недвижимости.</p>
                <a href="#" className="inline-flex items-center gap-2 text-[#e94560] hover:text-[#d63851]">
                  <i data-lucide="download" className="w-4 h-4"></i>
                  Скачать PDF
                </a>
              </div>

              <div className="bg-[#16213e] border border-[#0f3460] rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4">Условия аукциона</h2>
                <p className="text-[#a0aec0] mb-4">Полный текст правил проведения аукциона, условий участия и порядка оформления сделки.</p>
                <a href="#" className="inline-flex items-center gap-2 text-[#e94560] hover:text-[#d63851]">
                  <i data-lucide="download" className="w-4 h-4"></i>
                  Скачать PDF
                </a>
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