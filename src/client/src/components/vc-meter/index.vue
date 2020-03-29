<template>
  <div class="meter">
    <div class="meter-title">
      Current Speed:
    </div>
    <div class="meter-value">{{ value }} {{ unit }}</div>
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
