import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueMapbox from "vue-mapbox";
import Mapbox from "mapbox-gl";
import VueNativeSock from "vue-native-websocket";

Vue.use(VueMapbox, { mapboxgl: Mapbox });
Vue.use(VueNativeSock, "ws://localhost:3000", { store: store });

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
