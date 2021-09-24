<template>
  <div id="app">
    <div>
      <Detail />
    </div>
    <div class="split" />
    <div>
      <Event />
    </div>
  </div>
</template>

<script>
import Event from './components/Event.vue';
import Detail from './components/Detail.vue';

export default {
  name: 'App',
  components: {
    Event,
    Detail
  },
}
</script>

<style lang="scss" scoped>
  .split {
    margin: 10px 0;
    border-bottom: 2px solid #333;
  }
</style>

