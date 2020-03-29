<template>
  <div class="map">
    <MglMap :accessToken="accessToken" :mapStyle="mapStyle" @load="onMapLoaded">
      <MglMarker v-if="carLocs" :coordinates="carLocs"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-truck"
          slot="marker"
        >
          <rect x="1" y="3" width="15" height="13"></rect>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle></svg
      ></MglMarker>
    </MglMap>
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap, MglMarker } from "vue-mapbox";

export default {
  components: {
    MglMap,
    MglMarker
  },
  data() {
    return {
      accessToken:
        "pk.eyJ1IjoiaGlzb3duZm9vdDY5IiwiYSI6ImNrOGQwc2RtejBya20zbG1qc285ajFicDEifQ.LMbzuCFEUPG4JDc0bhQg-Q",
      mapStyle: "mapbox://styles/mapbox/light-v9",
      carLocs: null
    };
  },
  methods: {
    onMapLoaded(event) {
      this.map = event.map;
    }
  },
  created() {
    this.map = null;
    this.mapbox = Mapbox;
    this.unsubscribe = this.$store.subscribe(async (mutation, state) => {
      if (this.map) {
        const locs = state.socket.data.gps
          .split(["|"])
          .map(i => parseFloat(i))
          .reverse();
        this.carLocs = locs;
        await this.map.flyTo({
          center: locs,
          zoom: 15,
          speed: 3
        });
      }
    });
  },
  beforeDestroy() {
    this.unsubscribe();
  }
};
</script>

<style scoped>
.map {
  height: 400px;
  width: 400px;
  position: relative;
}
</style>
