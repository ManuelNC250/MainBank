<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="screen">
        <header class="top">
          <router-link class="back" to="/forgot-password-2" aria-label="Back to forgot password code">&lt;</router-link>
          <h1>Change password</h1>
        </header>

        <main class="card">
          <label class="label" for="new-password">Type your new password</label>
          <div class="password-row">
            <input id="new-password" v-model="newPassword" :type="showNew ? 'text' : 'password'" placeholder="Password" />
            <button type="button" class="eye-btn" @click="showNew = !showNew" :aria-label="showNew ? 'Hide password' : 'Show password'">
              <svg viewBox="0 0 24 24" class="eye" aria-hidden="true">
                <path d="M2 12s3.5-5 10-5 10 5 10 5-3.5 5-10 5-10-5-10-5Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
                <circle cx="12" cy="12" r="2.8" fill="currentColor"/>
                <path v-if="showNew" d="M4 20L20 4" fill="none" stroke="currentColor" stroke-width="1.8"/>
              </svg>
            </button>
          </div>

          <label class="label second" for="confirm-password">Confirm password</label>
          <div class="password-row">
            <input id="confirm-password" v-model="confirmPassword" :type="showConfirm ? 'text' : 'password'" placeholder="Password" />
            <button type="button" class="eye-btn" @click="showConfirm = !showConfirm" :aria-label="showConfirm ? 'Hide password' : 'Show password'">
              <svg viewBox="0 0 24 24" class="eye" aria-hidden="true">
                <path d="M2 12s3.5-5 10-5 10 5 10 5-3.5 5-10 5-10-5-10-5Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
                <circle cx="12" cy="12" r="2.8" fill="currentColor"/>
                <path v-if="showConfirm" d="M4 20L20 4" fill="none" stroke="currentColor" stroke-width="1.8"/>
              </svg>
            </button>
          </div>

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

export default defineComponent({
  name: "ChangePasswordPage",
  components: {
    IonPage,
    IonContent,
  },
  setup() {
    const router = useRouter();
    const newPassword = ref("");
    const confirmPassword = ref("");
    const errorText = ref("");
    const showNew = ref(false);
    const showConfirm = ref(false);

    const goNext = () => {
      if (!newPassword.value.trim() || !confirmPassword.value.trim()) {
        errorText.value = "Fill all fields before continuing.";
        return;
      }
      if (newPassword.value !== confirmPassword.value) {
        errorText.value = "Passwords do not match.";
        return;
      }
      errorText.value = "";
      router.push("/change-password-2");
    };

    return {
      showNew,
      showConfirm,
      newPassword,
      confirmPassword,
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
  border-radius: 18px;
  padding: 16px 14px;
}

.label {
  display: block;
  color: #8d8d8d;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
}

.label.second {
  margin-top: 16px;
}

.password-row {
  display: flex;
  align-items: center;
  border: 1px solid #cecece;
  border-radius: 14px;
  background: #f8f8f8;
  height: 40px;
  padding: 0 8px 0 12px;
}

.password-row input {
  flex: 1;
  border: 0;
  background: transparent;
  color: #1f1f1f;
  -webkit-text-fill-color: #1f1f1f;
  font-size: 16px;
  outline: none;
}

.password-row input::placeholder {
  color: #b5b5b5;
}

.eye-btn {
  border: 0;
  background: transparent;
  color: #8f8f8f;
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
}

.eye {
  width: 20px;
  height: 20px;
}

.change {
  margin-top: 62px;
  width: 100%;
  height: 42px;
  border: 0;
  border-radius: 14px;
  background: #0b7a3a;
  color: #fff;
  font-size: 32px;
  font-weight: 600;
  cursor: pointer;
}

.error {
  margin: 12px 0 0;
  color: #d63a52;
  font-size: 13px;
}
</style>
