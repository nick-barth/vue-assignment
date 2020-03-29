<template>
  <div class="dashboard" id="app">
    <h1 class="dashboard__title">Truck Tracker</h1>
    <div class="dashboard__container" v-if="isConnected">
      <vc-map />
    </div>
  </div>
</template>

<script>
import VcMap from "./components/vc-map";

export default {
  name: "App",
  components: {
    VcMap
  },
  computed: {
    isConnected() {
      return this.$store.state.socket.data;
    }
  }
};
</script>
