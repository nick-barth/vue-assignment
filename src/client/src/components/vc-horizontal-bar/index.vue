<template>
  <div class="bar">
    <div class="measure" v-bind:style="{ width: barWidth + '%' }"></div>
  </div>
</template>

<script>
export default {
  props: ["max", "value"],
  computed: {
    barWidth() {
      return (this.value / this.max) * 100;
    }
  }
};
</script>

<style scoped>
.bar {
  max-width: 400px;
  height: 30px;
  position: relative;
}
.measure {
  background-color: red;
  height: 28px;
  transition: 0.1s ease-in-out all;
}
</style>
