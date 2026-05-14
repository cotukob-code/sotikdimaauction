<!doctype html>
<html lang="ru" class="h-full">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Документация и условия — Аукцион Сотика Pro</title>

  <script src="https://cdn.tailwindcss.com/3.4.17"></script>
  <script src="https://cdn.jsdelivr.net/npm/lucide@0.263.0/dist/umd/lucide.min.js"></script>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Source+Sans+3:wght@300;400;600;700&display=swap" rel="stylesheet">

  <style>
    body { font-family: "Source Sans 3", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    .font-heading { font-family: "Playfair Display", serif; }
    .card { @apply bg-[#020617] border border-[#1f2937] rounded-2xl shadow-lg; }
    .nav-link { @apply text-xs md:text-sm font-semibold text-slate-300 hover:text-white transition-colors; }
    .doc-item { @apply flex items-start gap-3 text-sm text-slate-200; }
    .doc-icon { @apply w-4 h-4 text-[#fbbf24] mt-0.5 flex-shrink-0; }
  </style>
</head>
<body class="min-h-full bg-[#020617] text-slate-100">
<header class="sticky top-0 z-40 bg-[#020617]/95 border-b border-[#020617] backdrop-blur-xl">
  <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
    <a href="/auction" class="flex items-center gap-3">
      <div class="w-9 h-9 rounded-xl bg-[#e94560] flex items-center justify-center shadow-md shadow-[#e94560]/40">
        <i data-lucide="file-text" class="w-5 h-5 text-white"></i>
      </div>
      <div class="hidden sm:flex flex-col">
        <span class="font-heading text-base font-bold text-white leading-tight">Документация и условия</span>
        <span class="text-[10px] uppercase tracking-[0.18em] text-slate-500">Аукцион Сотика Pro</span>
      </div>
    </a>

    <nav class="flex items-center gap-4">
      <a href="/auction" class="nav-link">Главная</a>
      <a href="/auction/auction" class="nav-link">Онлайн‑торги</a>
      <a href="/auction/profile" class="nav-link">Профиль</a>
      <a href="/auction/participants" class="nav-link">Участники</a>
      <a href="/auction/admin" class="nav-link hidden md:inline">Админ</a>
      <a href="/auction/docs" class="nav-link text-white">Документация</a>
    </nav>
  </div>
</header>

<main class="max-w-5xl mx-auto px-4 py-6 md:py-10 space-y-6">
  <section class="card p-5 md:p-6 space-y-4">
    <h1 class="font-heading text-xl md:text-2xl text-white">Правила аукциона Аукцион Сотика Pro</h1>
    <p class="text-sm text-slate-300">
      Настоящий документ описывает ключевые правила участия в аукционе по продаже объекта недвижимости
      «Дом в Семьянах» и порядок проведения торгов на платформе <strong>Аукцион Сотика Pro</strong>.
    </p>

    <div class="space-y-3 text-sm text-slate-200">
      <h2 class="font-heading text-lg text-white mt-2">1. Общие положения</h2>
      <p>1.1. Аукцион проводится на платформе <strong>Аукцион Сотика Pro</strong>.</p>
      <p>1.2. Участие в аукционе означает полное согласие с настоящими правилами.</p>
      <p>1.3. Организатор оставляет за собой право приостанавливать торги при технических сбоях или нарушениях правил.</p>

      <h2 class="font-heading text-lg text-white mt-4">2. Регистрация участников</h2>
      <p>2.1. Для участия в аукционе пользователь обязан пройти регистрацию на платформе.</p>
      <p>2.2. Для допуска к торгам участник вносит регистрационный взнос <strong>50 000 ₽</strong>.</p>
      <p>2.3. Эти средства направляются <strong>регуляторам аукциона</strong> и <strong>не возвращаются</strong>, если участник отказывается от участия.</p>

      <h2 class="font-heading text-lg text-white mt-4">3. Порядок торгов</h2>
      <p>3.1. Торги проходят в онлайн-режиме на странице лота.</p>
      <p>3.2. Участники делают ставки, соблюдая минимальный шаг, установленный системой.</p>
      <p>3.3. Все ставки фиксируются автоматически и отображаются в интерфейсе аукциона.</p>
      <p>3.4. При одинаковых ставках преимущество получает участник, сделавший ставку раньше.</p>

      <h2 class="font-heading text-lg text-white mt-4">4. Завершение аукциона</h2>
      <p>4.1. Аукцион завершается в момент, когда участник предложит наивысшую ставку, <strong>превышающую целевую цену лота</strong>.</p>
      <p>4.2. После достижения целевой цены система автоматически фиксирует победителя.</p>
      <p>4.3. Победитель обязан оплатить итоговую сумму в течение <strong>5 рабочих дней</strong>.</p>

      <h2 class="font-heading text-lg text-white mt-4">5. Ответственность сторон</h2>
      <p>5.1. Организатор не несёт ответственности за технические проблемы на стороне участника.</p>
      <p>5.2. Все спорные ситуации решаются путём переговоров; при невозможности — решением организатора.</p>

      <h2 class="font-heading text-lg text-white mt-4">6. Контакты</h2>
      <p>6.1. <strong>Платформа:</strong> Аукцион Сотика Pro</p>
      <p>6.2. <strong>Email:</strong> info@sotika.pro</p>
      <p>6.3. <strong>Телефон:</strong> +7 920 000‑00‑42</p>
    </div>
  </section>

  <section class="card p-5 md:p-6 space-y-3">
    <h2 class="font-heading text-lg text-white mb-2">Перечень документов (кратко)</h2>
    <ul class="space-y-2">
      <li class="doc-item">
        <i data-lucide="file-text" class="doc-icon"></i>
        Свидетельство о праве собственности на дом и земельный участок
      </li>
      <li class="doc-item">
        <i data-lucide="file-text" class="doc-icon"></i>
        Кадастровый паспорт и выписка из ЕГРН
      </li>
      <li class="doc-item">
        <i data-lucide="file-text" class="doc-icon"></i>
        Технический план БТИ
      </li>
      <li class="doc-item">
        <i data-lucide="file-text" class="doc-icon"></i>
        Проект договора купли‑продажи
      </li>
    </ul>
  </section>
</main>

<script>
  if (window.lucide) window.lucide.createIcons();
</script>
</body>
</html>