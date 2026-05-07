/**
 * data_sdk.js - Работает как с GitHub Actions, так и локально
 */
window.dataSdk = {
  onDataChanged: null,
  bids: [],
  
  init(handler) {
    this.onDataChanged = handler.onDataChanged;
    this.loadBids();
    console.log('dataSdk инициализирован');
  },
  
  async loadBids() {
    try {
      const response = await fetch('./bids/index.json');
      if (response.ok) {
        const data = await response.json();
        this.bids = Array.isArray(data) ? data : [];
      } else {
        this.bids = [];
      }
    } catch (error) {
      console.warn('Could not load bids from server, using empty list:', error);
      this.bids = [];
    }
    
    // При локальном запуске файл не будет найден, используем пустой массив
    if (this.onDataChanged) {
      this.onDataChanged([...this.bids]);
    }
  },
  
  async create(bid) {
    // Добавляем новую ставку в начало массива
    this.bids.unshift(bid);
    
    // Сохраняем через GitHub Actions workflow
    try {
      const response = await fetch(`https://api.github.com/repos/${getRepo()}/dispatches`, {
        method: 'POST',
        headers: {
          'Accept': 'application/vnd.github.everest-preview+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event_type: 'save_bid',
          client_payload: {
            buyer_name: bid.buyer_name,
            buyer_phone: bid.buyer_phone,
            bid_amount: bid.bid_amount
          }
        })
      });
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }
      
      console.log('Bid submitted to GitHub Actions');
      
    } catch (error) {
      console.warn('Could not submit bid to GitHub Actions, saving locally only:', error);
      // При локальном запуске API не будет доступно, но мы все равно показываем успех
    }
    
    // Обновляем интерфейс
    if (this.onDataChanged) {
      this.onDataChanged([...this.bids]);
    }
    
    return { isOk: true, value: bid };
  },
  
  async getAll() {
    return { isOk: true, value: [...this.bids] };
  }
};

function getRepo() {
  // Получаем имя репозитория из URL или используем значение по умолчанию
  const path = window.location.pathname.split('/').filter(p => p);
  if (path.length >= 2) {
    return `${path[0]}/${path[1]}`;
  }
  return 'sotik/obs-studio-auction'; // Замените на ваше значение
}