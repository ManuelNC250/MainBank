<template>
  <ion-page>
    <ion-content :fullscreen="true" :scroll-y="false">
      <div class="screen">
        <header class="top">
          <h1>Setting</h1>
          <img class="avatar" src="/images/daniel.png" alt="Daniel Martinez" />
        </header>

        <main class="panel">
          <h2>Daniel Martinez</h2>

          <div class="list-scroll">
            <section class="list">
              <button type="button" class="row"><span>Password</span><span>></span></button>
              <button type="button" class="row"><span>Touch ID</span><span>></span></button>
              <button type="button" class="row"><span>Languages</span><span>></span></button>
              <button type="button" class="row"><span>App information</span><span>></span></button>
              <router-link to="/help" class="row"><span>Help</span><span>></span></router-link>
              <button type="button" class="row"><span>Contact us</span><span>></span></button>
              <router-link to="/home" class="row signout"><span>Sign out</span><span>></span></router-link>
            </section>
          </div>
        </main>

        <nav class="bottom-nav">
          <router-link to="/menu">Home</router-link>
          <router-link to="/menu-search">Search</router-link>
          <router-link to="/transfer">Transfer</router-link>
          <router-link to="/menu-settings" class="active">Setting</router-link>
        </nav>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonContent, IonPage } from "@ionic/vue";

export default defineComponent({
  name: "MenuSettingsPage",
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
  display: flex;
  flex-direction: column;
}

.top {
  height: 170px;
  padding: 34px 20px 0;
  position: relative;
}

.top h1 {
  margin: 0;
  color: #f1f6f1;
  font-size: 34px;
  font-weight: 700;
}

.avatar {
  position: absolute;
  left: 50%;
  bottom: -40px;
  transform: translateX(-50%);
  width: 96px;
  height: 96px;
  border-radius: 50%;
  border: 3px solid #d9ded9;
  object-fit: cover;
}

.panel {
  flex: 1;
  background: #f3f4f3;
  border-radius: 28px 28px 0 0;
  padding: 60px 20px 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.panel h2 {
  margin: 0 0 16px;
  color: #0b7a3a;
  text-align: center;
  font-size: 34px;
}

.list {
  display: flex;
  flex-direction: column;
}

.list-scroll {
  flex: 1;
  overflow-y: auto;
}

.list-scroll::-webkit-scrollbar {
  width: 4px;
}

.list-scroll::-webkit-scrollbar-thumb {
  background: #d5d5d5;
  border-radius: 4px;
}

.row {
  height: 50px;
  border: 0;
  border-bottom: 1px solid #dfdfdf;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #323232;
  font-size: 18px;
  padding: 0;
  text-align: left;
  text-decoration: none;
}

.row span:last-child {
  color: #cecece;
}

.signout {
  color: #d63a52;
}

.bottom-nav {
  background: #f3f4f3;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 12px 20px 16px;
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
