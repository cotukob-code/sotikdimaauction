/**
 * bids_loader.js - Загружает ставки с GitHub и обновляет интерфейс
 */

async function loadBids() {
  try {
    // Загружаем данные ставок
    const response = await fetch('./bids/index.json');
    const bids = await response.json();
    
    // Сортируем по убыванию суммы
    const sortedBids = bids.sort((a, b) => b.bid_amount - a.bid_amount);
    
    // Обновляем рейтинг
    updateLeaders(sortedBids);
    
  } catch (error) {
    console.warn('Не удалось загрузить ставки:', error);
    // Показываем сообщение о том, что нет участников
    document.getElementById('leadersList').innerHTML = `
      <div class="p-8 text-center">
        <i data-lucide="users" style="width:40px;height:40px;color:#8B7355;opacity:0.3;margin:0 auto 1rem;"></i>
        <p class="text-warmgray">Пока нет участников. Будьте первым!</p>
      </div>
    `;
    lucide.createIcons();
  }
}

function updateLeaders(bids) {
  const container = document.getElementById('leadersList');
  const top3 = bids.slice(0, 3);

  if (top3.length === 0) {
    container.innerHTML = `
      <div class="p-8 text-center">
        <i data-lucide="users" style="width:40px;height:40px;color:#8B7355;opacity:0.3;margin:0 auto 1rem;"></i>
        <p class="text-warmgray">Пока нет участников. Будьте первым!</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  const badges = ['badge-gold', 'badge-silver', 'badge-bronze'];
  let html = '';
  top3.forEach((bid, i) => {
    const formattedDate = new Date(bid.bid_date).toLocaleDateString('ru-RU');
    const formattedAmount = parseInt(bid.bid_amount).toLocaleString('ru-RU');
    
    // Маскируем телефон
    const cleanPhone = bid.buyer_phone.replace(/\D/g, '');
    const last4 = cleanPhone.slice(-4);
    const maskedPhone = `+7 (${cleanPhone.slice(1, 4)}) ***-**-${last4}`;
    
    html += `
      <div class="flex items-center gap-4 p-6 hover:bg-cream transition-colors">
        <div class="leader-badge ${badges[i]}">${i + 1}</div>
        <div class="flex-1">
          <p class="font-semibold text-charcoal">${bid.buyer_name}</p>
          <p class="text-xs text-warmgray">${maskedPhone}</p>
        </div>
        <div class="text-right">
          <p class="font-serif font-semibold text-gold text-lg">${formattedAmount} ₽</p>
          <p class="text-xs text-warmgray">${formattedDate}</p>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  lucide.createIcons();
}

// Загружаем ставки при загрузке страницы
window.addEventListener('load', loadBids);

// Обновляем каждые 30 секунд
setInterval(loadBids, 30000);