<template>
  <div :class="`card card--${variant}`">
    <h2 class="title" v-if="title">{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["variant", "title"]
};
</script>

<style scoped>
.card {
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 20px 20px;
}

.card--np {
  padding: 0;
}

.title {
  margin: 0;
}
</style>
