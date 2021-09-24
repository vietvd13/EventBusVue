<template>
  <div>
   <div class="show-action">
    <span>Action: {{ clicked }}</span>
   </div>

   <div>
    <button @click="doAction()">Do Action</button>
   </div>
  </div>
</template>

<script>
export default {
 name: 'Event',
 data() {
  return {
   clicked: 0
  }
 },
 methods: {
  doAction() {
   this.clicked = this.clicked + 1;
   this.$bus.emit('doAction', this.clicked);
  }
 },
}
</script>

<style lang="scss" scoped>
 .show-action {
  margin-bottom: 10px;

  span {
    font-weight: bold;
    color: red;
  }
 }
</style>