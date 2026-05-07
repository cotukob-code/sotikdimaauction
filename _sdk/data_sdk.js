/**
 * data_sdk.js - Минимальная заглушка для работы с данными ставок
 */
window.dataSdk = {
  data: [],
  onDataChanged: null,
  
  init(handler) {
    this.onDataChanged = handler.onDataChanged;
    console.log('dataSdk инициализирован');
  },
  
  async create(bid) {
    this.data.unshift(bid);
    
    if (this.onDataChanged) {
      this.onDataChanged([...this.data]);
    }
    
    return { isOk: true, value: bid };
  },
  
  async getAll() {
    return { isOk: true, value: [...this.data] };
  }
};