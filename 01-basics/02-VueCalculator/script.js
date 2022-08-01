import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
createApp({
  data() {
    return {
      numberOne: 0,
      numberTwo: 0,
      operator: 'sum',
    };
  },

  computed: {
    result() {
      let value = '';

      switch (this.operator) {
        case 'sum':
          value = this.numberOne + this.numberTwo;
          break;
        case 'subtract':
          value = this.numberOne - this.numberTwo;
          break;
        case 'multiply':
          value = this.numberOne * this.numberTwo;
          break;
        case 'divide':
          value = this.numberOne / this.numberTwo;
          break;
      }

      return value;
    },
  },
}).mount('#app');
