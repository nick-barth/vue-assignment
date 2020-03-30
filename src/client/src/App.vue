<template>
  <div class="dashboard" id="app">
    <h1 class="title">Truck Tracker</h1>
    <div class="container" v-if="isDataLoaded">
      <div class="map-container">
        <vc-card variant="np" class="map">
          <vc-map />
        </vc-card>
        <vc-card title="Stats" class="meters">
          <vc-meter
            :max="80"
            :value="speed"
            title="Current Speed:"
            unit="km/h"
          />
          <vc-meter :max="100" :value="soc" title="State of Charge:" unit="%" />
          <div class="stats">
            <div class="stat">
              <div class="stat-title">Time:</div>
              {{ time | toReadableTime }}
            </div>
            <div class="stat">
              <div class="stat-title">Odometer:</div>
              {{ odo | toFixed }} km
            </div>
            <div class="stat">
              <div class="stat-title">Energy:</div>
              {{ energy | toFixed }} kw
            </div>
          </div>
        </vc-card>
      </div>
      <div class="charts-charts">
        <vc-chart-container />
      </div>
    </div>
  </div>
</template>

<script>
import VcCard from "./components/vc-card";
import VcMap from "./components/vc-map";
import VcMeter from "./components/vc-meter";
import VcChartContainer from "./components/vc-chart-container";
import { mapState } from "vuex";
import moment from "moment";

export default {
  name: "App",
  components: {
    VcMap,
    VcMeter,
    VcCard,
    VcChartContainer
  },
  filters: {
    toReadableTime: function(value) {
      return moment(value).format("HH:mm:ss");
    },
    toFixed: function(value) {
      return parseFloat(value).toFixed();
    }
  },
  computed: mapState({
    soc: state => state.socket.data.soc,
    speed: state => state.socket.data.speed,
    isDataLoaded: state => state.socket.data,
    energy: state => state.socket.data.energy,
    odo: state => state.socket.data.odo,
    time: state => state.socket.data.time
  })
};
</script>
<style>
html {
  background-color: #fcfaff;
  font-family: "Ubuntu", sans-serif;
  padding: 20px;
}
</style>
<style scoped>
.dashboard {
  max-width: 800px;
}
.container {
  display: flex;
  flex-direction: column;
}
.map {
  width: 100%;
  height: 300px;
}
.map-container {
  margin-bottom: 20px;
}
.stats {
  display: flex;
  justify-content: space-between;
}
.stat-title {
  font-size: 18px;
}

@media (min-width: 576px) {
  .map-container {
    display: flex;
  }
  .meters {
    width: 100%;
  }
}
</style>
