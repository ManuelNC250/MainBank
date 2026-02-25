<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="screen">
        <main class="card">
          <div class="illustration" aria-hidden="true">
            <div class="phone">
              <span>✓</span>
            </div>
            <div class="lock"></div>
          </div>

          <h1>Change password successfully!</h1>
          <p>You have successfully change password. Please use the new password when Sign in.</p>

          <router-link to="/home" class="ok">Ok</router-link>
        </main>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonContent, IonPage } from "@ionic/vue";

export default defineComponent({
  name: "ChangePassword2Page",
  components: {
    IonPage,
    IonContent,
  },
});
</script>

<style scoped>
.screen {
  min-height: 100dvh;
  background: #f3f3f3;
  font-family: "Poppins", sans-serif;
  padding: 40px 22px 30px;
}

.card {
  padding-top: 80px;
  text-align: center;
}

.illustration {
  margin: 0 auto 26px;
  width: 240px;
  height: 180px;
  position: relative;
  background: radial-gradient(ellipse at center, #9aa89f 0%, #9aa89f 45%, transparent 46%);
}

.phone {
  position: absolute;
  left: 58px;
  top: 10px;
  width: 84px;
  height: 130px;
  border: 4px solid #0b7a3a;
  border-radius: 12px;
  background: #f3f3f3;
  display: grid;
  place-items: center;
}

.phone span {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #0b7a3a;
  color: #fff;
  display: grid;
  place-items: center;
  font-size: 22px;
}

.lock {
  position: absolute;
  right: 34px;
  bottom: 30px;
  width: 36px;
  height: 30px;
  border-radius: 3px;
  background: #f3ad2b;
}

.lock::before {
  content: "";
  position: absolute;
  left: 8px;
  top: -13px;
  width: 20px;
  height: 16px;
  border: 4px solid #f3ad2b;
  border-bottom: 0;
  border-radius: 10px 10px 0 0;
}

h1 {
  margin: 0;
  color: #0b7a3a;
  font-size: 34px;
}

p {
  margin: 16px 0 26px;
  color: #343434;
  font-size: 16px;
  line-height: 1.35;
}

.ok {
  width: 100%;
  height: 42px;
  border-radius: 14px;
  background: #0b7a3a;
  color: #fff;
  text-decoration: none;
  display: grid;
  place-items: center;
  font-size: 32px;
  font-weight: 600;
}
</style>
