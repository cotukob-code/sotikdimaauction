/**
 * element_sdk.js - Минимальная заглушка для работы конфигурации
 */
window.elementSdk = {
  config: null,
  callbacks: [],
  
  init(configObj) {
    this.config = { ...configObj.defaultConfig };
    
    if (configObj.onConfigChange) {
      this.onConfigChange = configObj.onConfigChange;
      this.onConfigChange(this.config);
    }
    
    console.log('elementSdk инициализирован');
  },
  
  setConfig(newConfig) {
    this.config = { ...this.config, ...newConfig };
    if (this.onConfigChange) {
      this.onConfigChange(this.config);
    }
  }
};