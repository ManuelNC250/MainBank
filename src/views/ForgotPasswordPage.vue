<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="screen">
        <header class="top">
          <router-link class="back" to="/home" aria-label="Back to home">&lt;</router-link>
          <h1>Forgot password</h1>
        </header>

        <main class="card">
          <label for="phone" class="label">Type your phone number</label>
          <imask-input
            id="phone"
            v-model="phone"
            class="masked-input"
            mask="+{34} 000 000 000"
            placeholder="(+34)"
          />
          <p>We texted you a code to verify your phone number</p>
          <p v-if="errorText" class="error">{{ errorText }}</p>
          <button type="button" class="send-btn" @click="goNext">Send</button>
        </main>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { IonContent, IonPage } from "@ionic/vue";
import { useRouter } from "vue-router";
import { IMaskComponent } from "vue-imask";

export default defineComponent({
  name: "ForgotPasswordPage",
  components: {
    IonPage,
    IonContent,
    "imask-input": IMaskComponent,
  },
  setup() {
    const router = useRouter();
    const phone = ref("");
    const errorText = ref("");

    const goNext = () => {
      if (!phone.value.trim()) {
        errorText.value = "Fill all fields before continuing.";
        return;
      }
      errorText.value = "";
      router.push("/forgot-password-2");
    };

    return {
      phone,
      errorText,
      goNext,
    };
  },
});
</script>

<style scoped>
.screen {
  min-height: 100dvh;
  background: #f3f3f3;
  font-family: "Poppins", sans-serif;
  padding: 60px 22px 30px;
}

.top {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
}

.back {
  color: #363636;
  text-decoration: none;
  font-size: 34px;
  line-height: 1;
}

.top h1 {
  margin: 0;
  color: #313131;
  font-size: 36px;
  font-weight: 700;
}

.card {
  background: #f8f8f8;
  border-radius: 18px;
  padding: 18px 16px 16px;
}

.label {
  display: block;
  color: #8d8d8d;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
}

.card input,
.card .masked-input {
  width: 100%;
  height: 44px;
  border: 1px solid #dfdfdf;
  border-radius: 14px;
  background: #f8f8f8;
  padding: 0 14px;
  font-size: 24px;
  color: #1f1f1f;
  -webkit-text-fill-color: #1f1f1f;
}

.card input::placeholder {
  color: #b7b7b7;
  opacity: 1;
}

.card p {
  margin: 22px 0 20px;
  color: #2f2f2f;
  font-size: 36px;
  line-height: 1.2;
}

.send-btn {
  width: 100%;
  height: 46px;
  border: 0;
  border-radius: 14px;
  background: #0b7a3a;
  color: #fff;
  font-size: 32px;
  font-weight: 600;
  text-decoration: none;
  display: grid;
  place-items: center;
  cursor: pointer;
}

.error {
  margin: 0 0 10px;
  color: #d63a52;
  font-size: 13px;
}

@media (max-width: 430px) {
  .top h1 {
    font-size: 40px;
  }

  .card p {
    font-size: 18px;
  }
}
</style>
