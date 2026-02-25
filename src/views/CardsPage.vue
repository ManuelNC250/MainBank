<template>
  <ion-page>
    <ion-content :fullscreen="true" :scroll-y="false">
      <div class="screen">
        <header class="top">
          <router-link class="back" to="/menu" aria-label="Back to menu">&lt;</router-link>
          <h1>Cards</h1>
        </header>

        <main class="panel">
          <section class="cards-scroll">
            <article class="bank-card">
              <div class="bank-card-deep"></div>
              <div class="bank-card-info">
                <p class="date">06/29</p>
                <p class="number">4892 2025 5783 0457</p>
                <p class="cvv">789</p>
                <div class="row">
                  <strong>2.567,69EUR</strong>
                  <span>VISA</span>
                </div>
              </div>
            </article>

            <article class="bank-card second">
              <div class="bank-card-deep"></div>
              <div class="bank-card-info">
                <p class="date">07/29</p>
                <p class="number">5098 2024 4987 0459</p>
                <p class="cvv">764</p>
                <div class="row">
                  <strong>0,80EUR</strong>
                  <span>VISA</span>
                </div>
              </div>
            </article>
          </section>

          <div class="content-scroll">
            <section class="balance">
              <p>Balance</p>
              <h2>1000EUR</h2>

              <div class="chart">
                <div class="grid"></div>
                <div class="bars">
                  <div class="bar-wrap"><span class="out" style="height: 28px"></span><span class="in" style="height: 22px"></span></div>
                  <div class="bar-wrap"><span class="out" style="height: 42px"></span><span class="in" style="height: 46px"></span></div>
                  <div class="bar-wrap"><span class="out" style="height: 55px"></span><span class="in" style="height: 74px"></span></div>
                  <div class="bar-wrap"><span class="out" style="height: 34px"></span><span class="in" style="height: 37px"></span></div>
                  <div class="bar-wrap"><span class="out" style="height: 26px"></span><span class="in" style="height: 16px"></span></div>
                  <div class="bar-wrap"><span class="out" style="height: 44px"></span><span class="in" style="height: 52px"></span></div>
                  <div class="bar-wrap"><span class="out" style="height: 25px"></span><span class="in" style="height: 17px"></span></div>
                  <div class="bar-wrap"><span class="out" style="height: 37px"></span><span class="in" style="height: 40px"></span></div>
                </div>
                <div class="months">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span class="active">Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                </div>
              </div>
            </section>

            <section class="tx">
              <h3>Today</h3>
              <div class="item">
                <div class="icon green"></div>
                <p>Water Bill</p>
                <strong class="out">-280EUR</strong>
              </div>
            </section>

            <section class="tx">
              <h3>Yesterday</h3>
              <div class="item">
                <div class="icon pink"></div>
                <div>
                  <p>Bizum: Manuel Navarro</p>
                  <small>Para el 10 profe (^_^)</small>
                </div>
                <strong class="in">+1000EUR</strong>
              </div>
              <div class="item">
                <div class="icon blue"></div>
                <p>Electric Bill</p>
                <strong class="out">-480EUR</strong>
              </div>
              <div class="item">
                <div class="icon yellow"></div>
                <p>Questionable Transfer</p>
                <strong class="out">-69EUR</strong>
              </div>
              <div class="item">
                <div class="icon cyan"></div>
                <p>Internet Bill</p>
                <strong class="out">-100EUR</strong>
              </div>
            </section>
          </div>
        </main>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonContent, IonPage } from "@ionic/vue";

export default defineComponent({
  name: "CardsPage",
  components: {
    IonPage,
    IonContent,
  },
});
</script>

<style scoped>
.screen {
  height: 100dvh;
  background: #0b7a3a;
  font-family: "Poppins", sans-serif;
}

.top {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 54px 20px 28px;
  position: relative;
}

.back {
  position: absolute;
  left: 20px;
  color: #f2f6f2;
  text-decoration: none;
  font-size: 34px;
  line-height: 1;
}

.top h1 {
  margin: 0;
  color: #f2f6f2;
  font-size: 34px;
  font-weight: 700;
}

.panel {
  height: calc(100dvh - 134px);
  background: #f3f4f3;
  border-radius: 28px 28px 0 0;
  padding: 14px 0 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.cards-scroll {
  display: flex;
  gap: 14px;
  overflow-x: auto;
  padding: 0 10px 12px;
  scroll-snap-type: x mandatory;
}

.cards-scroll::-webkit-scrollbar {
  display: none;
}

.bank-card {
  min-width: calc(100% - 24px);
  height: 190px;
  border-radius: 14px;
  background: #41c49b;
  position: relative;
  overflow: hidden;
  scroll-snap-align: start;
}

.bank-card.second {
  background: #37a172;
}

.bank-card-deep {
  position: absolute;
  inset: 0 auto 0 0;
  width: 68%;
  background: #0f7260;
  border-radius: 0 100% 100% 0 / 0 100% 100% 0;
}

.bank-card-info {
  position: relative;
  z-index: 1;
  color: #fff;
  padding: 16px 18px;
}

.date {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
}

.number {
  margin: 0;
  font-size: 14px;
  letter-spacing: 0.3px;
}

.cvv {
  margin: 0;
  font-size: 32px;
  font-weight: 500;
}

.row {
  margin-top: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.row strong {
  font-size: 18px;
}

.row span {
  font-size: 34px;
  font-weight: 700;
}

.content-scroll {
  flex: 1;
  overflow-y: auto;
  padding: 8px 0 18px;
}

.content-scroll::-webkit-scrollbar {
  width: 4px;
}

.content-scroll::-webkit-scrollbar-thumb {
  background: #d5d5d5;
  border-radius: 4px;
}

.balance {
  margin: 0 20px 0;
  border-radius: 24px;
  background: #f8f8f8;
  padding: 18px 16px 20px;
}

.balance p {
  margin: 0;
  color: #333;
  font-size: 28px;
  font-weight: 600;
}

.balance h2 {
  margin: 2px 0 8px;
  color: #0b7a3a;
  font-size: 52px;
}

.chart {
  position: relative;
}

.grid {
  position: absolute;
  left: 0;
  right: 0;
  top: 18px;
  bottom: 46px;
  background-image: repeating-linear-gradient(
    to bottom,
    transparent 0,
    transparent 19px,
    #ececec 19px,
    #ececec 20px
  );
}

.bars {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 8px;
  height: 170px;
  padding: 8px 10px 0;
}

.bar-wrap {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 4px;
}

.bar-wrap .out,
.bar-wrap .in {
  width: 8px;
  border-radius: 6px;
}

.bar-wrap .out {
  background: #ff456a;
}

.bar-wrap .in {
  background: #0b7a3a;
}

.months {
  display: flex;
  justify-content: space-between;
  padding: 0 4px;
  color: #b8b8b8;
  font-size: 14px;
  font-weight: 600;
}

.months .active {
  color: #0b7a3a;
}

.tx {
  margin: 8px 20px 0;
}

.tx h3 {
  margin: 16px 0 8px;
  color: #8a8a8a;
  font-size: 22px;
  font-weight: 600;
}

.item {
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid #e2e2e2;
  padding: 14px 0;
}

.icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  flex: 0 0 auto;
}

.icon.green {
  background: #0b7a3a;
}

.icon.pink {
  background: #ff4d79;
}

.icon.blue {
  background: #1e8fe2;
}

.icon.yellow {
  background: #f3ad2b;
}

.icon.cyan {
  background: #52c4d9;
}

.item p,
.item small {
  margin: 0;
  color: #323232;
}

.item p {
  font-size: 18px;
}

.item small {
  color: #8b8b8b;
  font-size: 14px;
}

.item strong {
  margin-left: auto;
  font-size: 18px;
}

.item .in {
  color: #047835;
}

.item .out {
  color: #ff3f64;
}

@media (max-width: 430px) {
  .date {
    font-size: 19px;
  }
}
</style>
