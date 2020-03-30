<template>
  <div class="charts-container">
    <vc-card class="chart-container" title="Speed & Average Speed">
      <vc-line-chart
        class="chart"
        :chartData="graphData.speedChartData"
        :max="100"
      />
    </vc-card>
    <vc-card class="chart-container" title="Energy Consumption">
      <vc-line-chart
        class="chart"
        :max="100"
        :chartData="graphData.energyChartData"
      />
    </vc-card>
  </div>
</template>

<script>
import VcLineChart from "../vc-line-chart";
import VcCard from "../vc-card";
import moment from "moment";

export default {
  name: "App",
  components: {
    VcLineChart,
    VcCard
  },
  data() {
    return {
      graphData: {
        speed: [],
        time: [],
        energy: [],
        energyChartData: [],
        speedChartData: []
      },
      tickLength: 100
    };
  },
  methods: {
    updateGraphs(payload, key) {
      const copyOfPayload =
        this.graphData[key].length >= this.tickLength
          ? this.graphData[key].slice(1)
          : this.graphData[key];
      const updatedArray = copyOfPayload.concat([], [payload]);
      this.graphData[key] = updatedArray;
    },
    updateGraphData() {
      const averages =
        this.graphData.speed.reduce((p, c) => p + c, 0) /
        this.graphData.speed.length;

      this.graphData.energyChartData = {
        labels: this.graphData.time,
        datasets: [
          {
            backgroundColor: "#d9bae8",
            label: "State of Charge",
            borderColor: "#8a4baf",
            data: this.graphData.energy,
            fill: "origin",
            pointRadius: 0
          }
        ]
      };

      this.graphData.speedChartData = {
        labels: this.graphData.time,
        datasets: [
          {
            label: "Speed",
            borderColor: "#8a4baf",
            data: this.graphData.speed,
            fill: false,
            pointRadius: 0
          },
          {
            label: "Average",
            borderWidth: 1,
            borderColor: "#d9bae8",
            borderDash: [5, 5],
            data: this.graphData.speed.map(() => averages),
            fill: false,
            pointRadius: 0
          }
        ]
      };
    }
  },
  mounted() {
    this.unsubscribe = this.$store.subscribe(async mutation => {
      const data = JSON.parse(mutation.payload.data);
      if (data.speed === "" || data.time === "") {
        return;
      } else {
        this.updateGraphs(data.speed, "speed");
        this.updateGraphs(data.energy, "energy");
        this.updateGraphs(moment(data.time).format("HH:mm:ss"), "time");
        this.updateGraphData();
      }
    });
  },
  beforeDestroy() {
    this.unsubscribe();
  }
};
</script>

<style scoped>
.charts-container {
  display: flex;
  flex-direction: column;
}
.chart-container {
  margin-bottom: 20px;
}
.chart {
  width: 100%;
  height: 160px;
  position: relative;
  margin-top: 15px;
}

.chart-title {
  font-weight: 800;
}
</style>
