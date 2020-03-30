<template>
  <div class="meter">
    <div class="meter-content">
      <div>{{ title }}</div>
      <div>
        <span class="value">{{ value }}</span> {{ unit }}
      </div>
    </div>
    <vc-horizontal-bar :max="max" :value="value" />
  </div>
</template>

<script>
import VcHorizontalBar from "../vc-horizontal-bar";
export default {
  components: {
    VcHorizontalBar
  },
  props: ["max", "value", "title", "unit"]
};
</script>

<style scoped>
.meter {
  margin-bottom: 20px;
}
.meter-content {
  font-weight: 100;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.value {
  font-weight: 800;
  font-size: 32px;
}
</style>
