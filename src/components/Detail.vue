<template>
  <div>
   <span>Get Action: {{ clicked }}</span>
  </div>
</template>

<script>
export default {
 name: 'Detail',
 data() {
  return {
   clicked: 0
  }
 },
 created () {
  this.$bus.on('doAction', (value) => {
   this.clicked = value;
  });
 },
}
</script>

<style lang="scss" scoped>
  span {
    font-weight: bold;
    color: blue;
  }
</style>