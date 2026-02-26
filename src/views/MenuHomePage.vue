<template>
  <ion-page>
    <ion-content :fullscreen="true" :scroll-y="false">
      <div class="screen">
        <header class="top">
          <img class="avatar" src="/images/daniel.png" alt="Daniel Martinez" />
          <p>Hello, Daniel Martinez</p>
        </header>

        <main class="card">
          <router-link to="/cards" class="account">
            <div class="account-deep"></div>
            <div class="account-info">
              <h2>Account</h2>
              <p class="sub">*0457</p>
              <p class="sub">Debit</p>
              <div class="row">
                <strong>2.567,69EUR</strong>
                <span>VISA</span>
              </div>
            </div>
          </router-link>

          <div class="tx-scroll">
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

          <nav class="bottom-nav">
            <router-link to="/menu" class="active">Home</router-link>
            <router-link to="/menu-search">Search</router-link>
            <router-link to="/transfer">Transfer</router-link>
            <router-link to="/menu-settings">Settings</router-link>
          </nav>
        </main>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonContent, IonPage } from "@ionic/vue";

export default defineComponent({
  name: "MenuHomePage",
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
  gap: 16px;
  padding: 54px 22px 28px;
  color: #f1f6f1;
}

.avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.top p {
  margin: 0;
  font-size: 16px;
}

.card {
  height: calc(100dvh - 134px);
  background: #f3f4f3;
  border-radius: 28px 28px 0 0;
  padding: 14px 20px 18px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.account {
  display: block;
  text-decoration: none;
  background: #41c49b;
  border-radius: 14px;
  height: 190px;
  position: relative;
  overflow: hidden;
}

.account-deep {
  position: absolute;
  inset: 0 auto 0 0;
  width: 68%;
  background: #0f7260;
  border-radius: 0 100% 100% 0 / 0 100% 100% 0;
}

.account-info {
  position: relative;
  z-index: 1;
  color: #fff;
  padding: 16px 18px;
}

.account-info h2,
.account-info .sub {
  margin: 0;
}

.account-info h2 {
  font-size: 34px;
  font-weight: 500;
}

.account-info .sub {
  font-size: 17px;
  line-height: 1.2;
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

.tx-scroll {
  flex: 1;
  overflow-y: auto;
  padding-right: 2px;
}

.tx-scroll::-webkit-scrollbar {
  width: 4px;
}

.tx-scroll::-webkit-scrollbar-thumb {
  background: #d5d5d5;
  border-radius: 4px;
}

.tx h3 {
  margin: 20px 0 10px;
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

.bottom-nav {
  margin-top: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding-top: 16px;
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

@media (max-width: 430px) {
  .account-info h2 {
    font-size: 34px;
  }

  .account-info .sub {
    font-size: 16px;
  }

  .row strong {
    font-size: 18px;
  }
}
</style>
