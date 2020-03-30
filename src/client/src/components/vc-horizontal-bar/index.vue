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
  width: 100%;
  height: 30px;
  position: relative;
  border: 1px dotted #f1defa;
}
.measure {
  background-color: #8a4baf;
  height: 30px;
  transition: 0.1s ease-in-out all;
}
</style>
