<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="screen">
        <header class="top">
          <router-link class="back" to="/forgot-password" aria-label="Back to forgot password">&lt;</router-link>
          <h1>Forgot password</h1>
        </header>

        <main class="card">
          <label class="label" for="code">Type a code</label>

          <div class="code-row">
            <imask-input
              id="code"
              v-model="code"
              class="masked-code"
              mask="000000"
              placeholder="Code"
            />
            <button type="button" class="resend">Resend</button>
          </div>

          <p>This code will expire 10 minutes after this message.</p>
          <p v-if="errorText" class="error">{{ errorText }}</p>
          <button type="button" class="change" @click="goNext">Change password</button>
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
  name: "ForgotPassword2Page",
  components: {
    IonPage,
    IonContent,
    "imask-input": IMaskComponent,
  },
  setup() {
    const router = useRouter();
    const code = ref("");
    const errorText = ref("");

    const goNext = () => {
      if (!code.value.trim()) {
        errorText.value = "Fill all fields before continuing.";
        return;
      }
      errorText.value = "";
      router.push("/change-password");
    };

    return {
      code,
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
  padding: 60px 18px 30px;
}

.top {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
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
  border-radius: 16px;
  padding: 14px 12px 12px;
}

.label {
  display: block;
  color: #8d8d8d;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
}

.code-row {
  display: flex;
  gap: 8px;
}

.code-row input,
.code-row .masked-code {
  flex: 1;
  height: 36px;
  border: 1px solid #cecece;
  border-radius: 13px;
  background: #f8f8f8;
  padding: 0 10px;
  color: #1f1f1f;
  -webkit-text-fill-color: #1f1f1f;
  font-size: 14px;
}

.code-row input::placeholder {
  color: #b5b5b5;
}

.resend {
  width: 82px;
  border: 0;
  border-radius: 13px;
  background: #0b7a3a;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
}

.card p {
  margin: 58px 0 20px;
  color: #6f6f6f;
  font-size: 16px;
  line-height: 1.3;
}

.change {
  width: 100%;
  height: 36px;
  border: 0;
  border-radius: 13px;
  background: #0b7a3a;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
}

.error {
  margin: 0 0 10px;
  color: #d63a52;
  font-size: 13px;
}
</style>
