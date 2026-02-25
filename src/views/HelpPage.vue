<template>
  <ion-page>
    <ion-content :fullscreen="true" :scroll-y="false">
      <div class="screen">
        <header class="top">
          <div class="top-row">
            <router-link to="/menu-settings" class="back" aria-label="Back to settings">&lt;</router-link>
            <h1>Help</h1>
          </div>
          <div class="avatar">DM</div>
        </header>

        <main class="panel">
          <h2>Daniel Martinez</h2>

          <div class="content-scroll">
            <section class="faq">
              <div class="section-title">
                <span>FAQ</span>
                <span class="arrow">></span>
              </div>
              <p><strong>1. What should I do if I see suspicious activity?</strong><br />Immediately contact customer support through the "Contact us" section and we temporarily block your card in the "Cards" menu if needed.</p>
              <p><strong>2. What if I forget my password?</strong><br />Tap "Forgot password your password?" on the login screen, enter your phone number, and follow the instructions to reset it securely.</p>
              <p><strong>3. Is the app safe to use?</strong><br />Yes, the app uses advanced encryption and two-factor authentication to protect your personal and financial information.</p>
              <div class="section-title">
                <span>...</span>
                <span class="arrow">></span>
              </div>
              <router-link to="/chat-ai" class="section-title link-row">
                <span>Chat AI</span>
                <span class="arrow">></span>
              </router-link>
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
  name: "HelpPage",
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
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
}

.top {
  padding: 20px 18px 0;
  height: 130px;
}

.top-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.back {
  color: #f2f6f2;
  text-decoration: none;
  font-size: 30px;
  line-height: 1;
}

.top h1 {
  margin: 0;
  color: #f2f6f2;
  font-size: 30px;
}

.avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 2px solid #d9ded9;
  background: linear-gradient(145deg, #d8d8d8, #777);
  margin: 8px auto 0;
  display: grid;
  place-items: center;
  color: #fff;
  font-weight: 700;
}

.panel {
  flex: 1;
  background: #f3f4f3;
  border-radius: 28px 28px 0 0;
  padding: 12px 16px 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.panel h2 {
  margin: 0 0 10px;
  text-align: center;
  color: #0b7a3a;
  font-size: 28px;
}

.content-scroll {
  flex: 1;
  overflow-y: auto;
}

.faq p {
  margin: 10px 0;
  color: #666;
  font-size: 14px;
  line-height: 1.35;
}

.faq p strong {
  color: #2f2f2f;
}

.section-title {
  height: 42px;
  border-bottom: 1px solid #dfdfdf;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #2f2f2f;
  font-size: 20px;
}

.link-row {
  text-decoration: none;
}

.arrow {
  color: #cdcdcd;
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
