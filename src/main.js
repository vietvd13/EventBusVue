import Vue from 'vue';
import App from './App.vue';
import Bus from './EventBus/index.js';

Vue.use(Bus);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
