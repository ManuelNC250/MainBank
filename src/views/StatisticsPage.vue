<template>
  <ion-page>
    <ion-content :fullscreen="true" :scroll-y="false">
      <div class="screen">
        <main class="panel">
          <header class="top">
            <router-link to="/menu-search" class="back" aria-label="Back to search">&lt;</router-link>
            <div class="brand">
              <span class="spot-logo">S</span>
              <p>SPOT <small>(Spotify)</small></p>
            </div>
          </header>

          <section class="value">
            <h1>226.<span>90EUR</span></h1>
            <p><span>+2,02 (0,90%)</span> Today</p>
          </section>

          <section class="chart">
            <VChart class="stock-chart" :option="candlesOption" autoresize />
          </section>

          <section class="ranges">
            <button type="button">12H</button>
            <button type="button">1D</button>
            <button type="button" class="active">1W</button>
            <button type="button">1M</button>
            <button type="button">1Y</button>
          </section>

          <h2>Statistics</h2>
          <section class="stats-card">
            <div class="stat"><small>Open</small><strong class="up">224.54</strong></div>
            <div class="stat"><small>High</small><strong class="up">227.29</strong></div>
            <div class="stat"><small>Low</small><strong class="down">224.10</strong></div>
            <div class="stat"><small>Volume</small><strong>834,146</strong></div>
            <div class="stat"><small>Avg. Volume</small><strong>1,461,009</strong></div>
            <div class="stat"><small>Market Cap</small><strong>43.419B</strong></div>
          </section>
        </main>

        <nav class="bottom-nav">
          <router-link to="/menu">Home</router-link>
          <router-link to="/menu-search" class="active">Search</router-link>
          <router-link to="/transfer">Transfer</router-link>
          <router-link to="/menu-settings">Settings</router-link>
        </nav>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonContent, IonPage } from "@ionic/vue";
import VChart from "vue-echarts";
import { use } from "echarts/core";
import { CandlestickChart } from "echarts/charts";
import { GridComponent, TooltipComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

use([CandlestickChart, GridComponent, TooltipComponent, CanvasRenderer]);

export default defineComponent({
  name: "StatisticsPage",
  components: {
    IonPage,
    IonContent,
    VChart,
  },
  setup() {
    const candlesOption = {
      animation: true,
      grid: { left: 36, right: 10, top: 10, bottom: 26 },
      xAxis: {
        type: "category",
        data: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        axisLine: { lineStyle: { color: "#bcbcbc" } },
        axisTick: { show: false },
        axisLabel: { color: "#7b7b7b", fontSize: 12 },
      },
      yAxis: {
        scale: true,
        min: 200,
        max: 280,
        splitNumber: 4,
        axisLabel: { color: "#8a8a8a", formatter: "{value}EUR", fontSize: 11 },
        splitLine: { lineStyle: { color: "#ececec", type: "dashed" } },
      },
      tooltip: { trigger: "axis" },
      series: [
        {
          type: "candlestick",
          data: [
            [212, 224, 208, 228],
            [224, 220, 216, 230],
            [220, 227, 219, 232],
            [227, 244, 223, 250],
            [244, 266, 240, 270],
            [266, 248, 244, 272],
            [248, 258, 246, 276],
          ],
          itemStyle: {
            color: "#35a565",
            color0: "#ff4c71",
            borderColor: "#35a565",
            borderColor0: "#ff4c71",
          },
        },
      ],
    };

    return { candlesOption };
  },
});
</script>

<style scoped>
.screen {
  height: 100dvh;
  background: #f3f4f3;
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
}

.panel {
  flex: 1;
  padding: 18px 14px 8px;
  overflow-y: auto;
}

.top {
  display: flex;
  align-items: center;
  gap: 14px;
}

.back {
  color: #333;
  text-decoration: none;
  font-size: 32px;
  line-height: 1;
}

.brand {
  display: flex;
  align-items: center;
  gap: 8px;
}

.spot-logo {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #22c45e;
  color: #fff;
  display: grid;
  place-items: center;
  font-size: 14px;
  font-weight: 700;
}

.brand p {
  margin: 0;
  font-size: 34px;
  color: #2f2f2f;
  font-weight: 700;
}

.brand small {
  color: #b3b3b3;
  font-size: 14px;
  font-weight: 600;
}

.value {
  margin-top: 12px;
  text-align: center;
}

.value h1 {
  margin: 0;
  color: #2f2f2f;
  font-size: 50px;
}

.value h1 span {
  color: #9d9d9d;
  font-size: 38px;
}

.value p {
  margin: 0;
  font-size: 18px;
  color: #0b7a3a;
  font-weight: 700;
}

.value p span {
  color: #ff3f64;
}

.chart {
  margin-top: 10px;
}

.stock-chart {
  height: 180px;
  width: 100%;
}

.ranges {
  margin-top: 8px;
  display: flex;
  justify-content: space-around;
}

.ranges button {
  border: 0;
  background: transparent;
  color: #333;
  font-size: 12px;
  font-weight: 700;
  height: 24px;
  min-width: 36px;
  border-radius: 12px;
}

.ranges .active {
  background: #ff426d;
  color: #fff;
}

h2 {
  margin: 16px 0 8px;
  color: #0b7a3a;
  font-size: 18px;
}

.stats-card {
  background: #f8f8f8;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px 8px;
}

.stat {
  text-align: center;
}

.stat small {
  color: #8d9aa3;
  font-size: 12px;
}

.stat strong {
  display: block;
  color: #333;
  font-size: 14px;
}

.stat .up {
  color: #1f9a61;
}

.stat .down {
  color: #ff426d;
}

.bottom-nav {
  background: #f3f4f3;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 10px 14px 14px;
}

.bottom-nav a {
  border: 0;
  height: 36px;
  border-radius: 18px;
  font-size: 13px;
  color: #7a7a7a;
  text-decoration: none;
  display: grid;
  place-items: center;
}

.bottom-nav .active {
  background: #0b7a3a;
  color: #fff;
}
</style>
