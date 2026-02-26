<template>
  <ion-page>
    <ion-content :fullscreen="true" :scroll-y="false">
      <div class="screen">
        <main class="panel">
          <h1>Search</h1>

          <div class="search-input">
            <span class="icon">o</span>
            <input v-model="query" type="text" placeholder="" aria-label="Search" />
          </div>

          <div class="content-scroll">
            <div class="head-row">
              <h2>Recently Viewed</h2>
              <button type="button">View all</button>
            </div>

            <section class="cards-scroll">
              <article class="stock-card">
                <div class="stock-top">
                  <div class="logo fb">f</div>
                  <div>
                    <h3>FB</h3>
                    <p>Facebook, Inc</p>
                  </div>
                </div>
              <div class="stock-price">
                <strong>365.51EUR</strong>
                <span class="up">0.59%</span>
              </div>
              <small>367.67EUR</small>
              <VChart class="mini-chart-chart" :option="fbOption" autoresize />
            </article>

              <article class="stock-card">
                <div class="stock-top">
                  <div class="logo apple">
                    <img src="/images/apple.png" alt="Apple" />
                  </div>
                  <div>
                    <h3>AAPL</h3>
                    <p>Apple Inc.</p>
                  </div>
                </div>
              <div class="stock-price">
                <strong>149.62EUR</strong>
                <span class="down">0.21%</span>
              </div>
              <small>149.71EUR</small>
              <VChart class="mini-chart-chart" :option="aaplOption" autoresize />
            </article>
            </section>

            <div class="top-row">
              <h2>Top movers</h2>
              <span class="arrow">&gt;</span>
            </div>

            <div class="list-scroll">
              <div class="item">
                <div class="brand msft">
                  <img src="/images/microsoft.png" alt="Microsoft" />
                </div>
                <div class="name">
                  <strong>MSFT</strong>
                  <p>Microsoft Corp.</p>
                </div>
                <VChart class="spark-chart" :option="msftOption" autoresize />
                <div class="price">
                  <strong>213.10EUR</strong>
                  <span class="down">2.5%</span>
                </div>
              </div>

              <div class="item">
                <div class="brand google">G</div>
                <div class="name">
                  <strong>GOOGLE</strong>
                  <p>Alphabet Inc.</p>
                </div>
                <VChart class="spark-chart" :option="googleOption" autoresize />
                <div class="price">
                  <strong>213.10EUR</strong>
                  <span class="up">1.1%</span>
                </div>
              </div>

              <router-link to="/statistics" class="item spot-link">
                <div class="brand spot">
                  <span>S</span>
                </div>
                <div class="name">
                  <strong>SPOT</strong>
                  <p>Microsoft Corp.</p>
                </div>
                <VChart class="spark-chart" :option="spotOption" autoresize />
                <div class="price">
                  <strong>213.10EUR</strong>
                  <span class="down">2.5%</span>
                </div>
              </router-link>
            </div>
          </div>

          <nav class="bottom-nav">
            <router-link to="/menu">Home</router-link>
            <router-link to="/menu-search" class="active">Search</router-link>
            <router-link to="/transfer">Transfer</router-link>
            <router-link to="/menu-settings">Settings</router-link>
          </nav>
        </main>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { IonContent, IonPage } from "@ionic/vue";
import VChart from "vue-echarts";
import { use } from "echarts/core";
import { LineChart } from "echarts/charts";
import { GridComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

use([LineChart, GridComponent, CanvasRenderer]);

export default defineComponent({
  name: "MenuSearchPage",
  components: {
    IonPage,
    IonContent,
    VChart,
  },
  setup() {
    const query = ref("");
    const baseMini = {
      animation: false,
      grid: { left: 0, right: 0, top: 8, bottom: 0 },
      xAxis: { type: "category", show: false, data: [1, 2, 3, 4, 5, 6, 7, 8] },
      yAxis: { type: "value", show: false },
    };

    const fbOption = {
      ...baseMini,
      series: [
        {
          type: "line",
          smooth: true,
          data: [10, 14, 12, 18, 17, 21, 19, 23],
          showSymbol: false,
          lineStyle: { color: "#2c9f69", width: 2 },
          areaStyle: { color: "rgba(44,159,105,0.25)" },
        },
      ],
    };

    const aaplOption = {
      ...baseMini,
      series: [
        {
          type: "line",
          smooth: true,
          data: [21, 19, 20, 17, 16, 15, 14, 13],
          showSymbol: false,
          lineStyle: { color: "#ff5d7c", width: 2 },
          areaStyle: { color: "rgba(255,93,124,0.25)" },
        },
      ],
    };

    const msftOption = {
      ...baseMini,
      series: [
        {
          type: "line",
          smooth: true,
          data: [20, 19, 18, 17, 16, 15, 14, 13],
          showSymbol: false,
          lineStyle: { color: "#ff7f97", width: 2 },
          areaStyle: { color: "rgba(255,127,151,0.25)" },
        },
      ],
    };

    const googleOption = {
      ...baseMini,
      series: [
        {
          type: "line",
          smooth: true,
          data: [12, 13, 12, 14, 15, 16, 15, 17],
          showSymbol: false,
          lineStyle: { color: "#66ba86", width: 2 },
          areaStyle: { color: "rgba(102,186,134,0.25)" },
        },
      ],
    };

    const spotOption = {
      ...baseMini,
      series: [
        {
          type: "line",
          smooth: true,
          data: [18, 17, 16, 15, 16, 15, 14, 13],
          showSymbol: false,
          lineStyle: { color: "#ff7f97", width: 2 },
          areaStyle: { color: "rgba(255,127,151,0.25)" },
        },
      ],
    };

    return { query, fbOption, aaplOption, msftOption, googleOption, spotOption };
  },
});
</script>

<style scoped>
.screen {
  height: 100dvh;
  background: #f3f4f3;
  font-family: "Poppins", sans-serif;
}

.panel {
  height: 100dvh;
  padding: 28px 16px 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.content-scroll {
  flex: 1;
  overflow-y: auto;
  padding-right: 2px;
}

.content-scroll::-webkit-scrollbar {
  width: 4px;
}

.content-scroll::-webkit-scrollbar-thumb {
  background: #d5d5d5;
  border-radius: 4px;
}

h1 {
  margin: 0;
  color: #333;
  font-size: 38px;
}

.search-input {
  margin-top: 14px;
  height: 44px;
  border: 1px solid #cfcfcf;
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 12px;
}

.search-input .icon {
  color: #9a9a9a;
  font-size: 22px;
}

.search-input input {
  border: 0;
  background: transparent;
  width: 100%;
  font-size: 16px;
  color: #1f1f1f;
  -webkit-text-fill-color: #1f1f1f;
  outline: none;
}

.head-row,
.top-row {
  margin-top: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h2 {
  margin: 0;
  color: #333;
  font-size: 20px;
}

.head-row button {
  border: 0;
  background: transparent;
  color: #0b7a3a;
  font-size: 18px;
  font-weight: 600;
}

.cards-scroll {
  margin-top: 10px;
  display: flex;
  gap: 14px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.cards-scroll::-webkit-scrollbar {
  display: none;
}

.stock-card {
  min-width: 226px;
  background: #e9edf1;
  border-radius: 10px;
  padding: 14px 12px;
  scroll-snap-align: start;
}

.stock-top {
  display: flex;
  gap: 10px;
}

.logo {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  font-weight: 700;
}

.logo.fb {
  background: #2f7de1;
  font-size: 40px;
}

.logo.apple {
  background: #2e2e2e;
  overflow: hidden;
}

.logo.apple img {
  width: 30px;
  height: 30px;
  object-fit: contain;
}

.stock-top h3,
.stock-top p {
  margin: 0;
}

.stock-top h3 {
  font-size: 30px;
  color: #343434;
}

.stock-top p {
  color: #7e7e7e;
  font-size: 14px;
}

.stock-price {
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.stock-price strong {
  font-size: 34px;
  color: #363636;
}

.stock-price span {
  padding: 4px 10px;
  border-radius: 12px;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
}

.up {
  color: #0b7a3a;
}

.down {
  color: #ff3f64;
}

.stock-price .up {
  background: #2b9f63;
  color: #fff;
}

.stock-price .down {
  background: #ff5d7c;
  color: #fff;
}

.stock-card small {
  color: #b3b3b3;
  font-size: 14px;
}

.mini-chart-chart {
  margin-top: 8px;
  height: 84px;
  border-top: 2px dashed #e4b7c0;
}

.top-row .arrow {
  font-size: 30px;
  color: #494949;
}

.list-scroll {
  margin-top: 6px;
}

.item {
  display: grid;
  grid-template-columns: 52px 1fr 84px auto;
  gap: 10px;
  align-items: center;
  padding: 10px 0;
}

.spot-link {
  text-decoration: none;
}

.brand {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: #efefef;
}

.brand.msft {
  overflow: hidden;
  background: #fff;
  border: 1px solid #ececec;
}

.brand.msft img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.brand.google {
  display: grid;
  place-items: center;
  color: #3a7cf0;
  font-weight: 700;
  font-size: 28px;
  background: #fff;
  border: 1px solid #ececec;
}

.brand.spot {
  background: #29c462;
  display: grid;
  place-items: center;
}

.brand.spot span {
  color: #fff;
  font-weight: 700;
  font-size: 24px;
}

.name strong {
  font-size: 18px;
  color: #2e2e2e;
}

.name p {
  margin: 0;
  color: #757575;
  font-size: 14px;
}

.spark-chart {
  height: 34px;
  width: 92px;
  border-radius: 6px;
}

.price {
  text-align: right;
}

.price strong {
  display: block;
  color: #2f2f2f;
  font-size: 14px;
}

.price span {
  font-size: 14px;
}

.bottom-nav {
  margin-top: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding-top: 12px;
}

.bottom-nav button,
.bottom-nav a {
  border: 0;
  height: 36px;
  border-radius: 18px;
  font-size: 13px;
  color: #7a7a7a;
  background: transparent;
  text-decoration: none;
  display: grid;
  place-items: center;
}

.bottom-nav .active {
  background: #0b7a3a;
  color: #fff;
}
</style>
