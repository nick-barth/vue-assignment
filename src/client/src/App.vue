<template>
  <div class="dashboard" id="app">
    <h1 class="title">Truck Tracker</h1>
    <div class="container" v-if="dataLoaded">
      <div class="map">
        <vc-map />
      </div>
      <div class="meters">
        <vc-meter :max="80" :value="speed" title="Current Speed:" unit="km/h" />
        <vc-meter :max="100" :value="soc" title="State of Charge:" unit="%" />
      </div>
    </div>
  </div>
</template>

<script>
import VcMap from "./components/vc-map";
import VcMeter from "./components/vc-meter";

export default {
  name: "App",
  components: {
    VcMap,
    VcMeter
  },
  computed: {
    soc() {
      return this.$store.state.socket.data.soc;
    },
    speed() {
      return this.$store.state.socket.data.speed;
    },
    dataLoaded() {
      return this.$store.state.socket.data;
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
}
</style>
