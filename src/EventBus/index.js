import Vue from 'vue';

class EventBus {
  constructor() {
   this.bus = new Vue();
  }

  /**
   * Chờ đợi bất kì event nào
   * @param {*} event 
   * @param {*} handler 
   */
  on(event, handler) {
   this.bus.$on(event, handler);
  }

  /**
   * Chỉ muốn nhấn event 1 lần duy nhất
   * @param {*} event 
   * @param {*} handler 
   */
  once(event, handler) {
   this.bus.$once(event, handler);
  }

  /**
   * Tắt không muốn nhận event nữa
   * @param {*} event 
   * @param {*} handler 
   */
  off(event, handler) {
   this.bus.$off(event, handler);
  }

  /**
   * Thực hiên event
   * @param {*} event 
   * @param  {...any} args 
   */
  emit(event, ...args) {
   this.bus.$emit(event, ...args);
  }
}

export default {
 install(Vue) {
  const bus = new EventBus();

  Vue.prototype.$bus = bus;
 }
};