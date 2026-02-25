<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="screen">
        <header class="top">
          <h1>Sign in</h1>
        </header>

        <main class="card">
          <h2>Welcome Back</h2>

          <div class="lock-circle" aria-hidden="true">
            <svg viewBox="0 0 64 64" class="lock-icon">
              <path
                d="M22 28v-7a10 10 0 0 1 20 0v7"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
              />
              <rect x="16" y="28" width="32" height="28" rx="2" fill="currentColor" />
              <path
                d="M32 39a4 4 0 0 0-2 7.5V50h4v-3.5A4 4 0 0 0 32 39Z"
                fill="#a2b0a7"
              />
            </svg>
          </div>

          <form class="form" @submit.prevent="goToMenu">
            <input v-model="username" type="text" placeholder="Name" />
            <div class="password-wrap">
              <input v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="Password" />
              <button type="button" class="eye-btn" @click="showPassword = !showPassword" :aria-label="showPassword ? 'Hide password' : 'Show password'">
                <svg viewBox="0 0 24 24" class="eye" aria-hidden="true">
                  <path d="M2 12s3.5-5 10-5 10 5 10 5-3.5 5-10 5-10-5-10-5Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
                  <circle cx="12" cy="12" r="2.8" fill="currentColor"/>
                  <path v-if="showPassword" d="M4 20L20 4" fill="none" stroke="currentColor" stroke-width="1.8"/>
                </svg>
              </button>
            </div>
            <p v-if="errorText" class="error">{{ errorText }}</p>
            <router-link to="/forgot-password" class="forgot">Forgot your password ?</router-link>
            <button type="submit">Sign in</button>
          </form>

          <button
            class="fingerprint"
            :class="{ pressing: isPressing, active: isFingerActive }"
            type="button"
            aria-label="Fingerprint sign in"
            @mousedown="startPress"
            @mouseup="cancelPress"
            @mouseleave="cancelPress"
            @touchstart.prevent="startPress"
            @touchend="cancelPress"
            @touchcancel="cancelPress"
          >
            <span class="fingerprint-core"></span>
          </button>

          <p class="footer">
            Don't have an account?
            <router-link to="/signup">Sign Up</router-link>
          </p>
        </main>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonContent, IonPage } from "@ionic/vue";
import { useRouter } from "vue-router";
import { onBeforeUnmount, ref } from "vue";
import { useForm } from "vee-validate";
import * as yup from "yup";

export default defineComponent({
  name: "HomePage",
  components: {
    IonPage,
    IonContent,
  },
  setup() {
    const router = useRouter();
    const username = ref("");
    const password = ref("");
    const errorText = ref("");
    const showPassword = ref(false);
    const isPressing = ref(false);
    const isFingerActive = ref(false);
    let holdTimer: number | null = null;
    let navigateTimer: number | null = null;

    const { validate, setValues } = useForm({
      validationSchema: yup.object({
        username: yup.string().required(),
        password: yup.string().required(),
      }),
    });

    const goToMenu = async () => {
      setValues({
        username: username.value,
        password: password.value,
      });
      const result = await validate();
      if (!result.valid) {
        errorText.value = "Fill all fields before continuing.";
        return;
      }
      errorText.value = "";
      router.push("/menu");
    };

    const goToMenuByFingerprint = () => {
      errorText.value = "";
      router.push("/menu");
    };

    const resetFinger = () => {
      isPressing.value = false;
      isFingerActive.value = false;
      if (holdTimer) {
        window.clearTimeout(holdTimer);
        holdTimer = null;
      }
      if (navigateTimer) {
        window.clearTimeout(navigateTimer);
        navigateTimer = null;
      }
    };

    const startPress = () => {
      resetFinger();
      isPressing.value = true;
      holdTimer = window.setTimeout(() => {
        isFingerActive.value = true;
        navigateTimer = window.setTimeout(() => {
          goToMenuByFingerprint();
          resetFinger();
        }, 220);
      }, 550);
    };

    const cancelPress = () => {
      if (!isFingerActive.value) {
        resetFinger();
      }
    };

    onBeforeUnmount(() => {
      resetFinger();
    });

    return {
      showPassword,
      username,
      password,
      errorText,
      isPressing,
      isFingerActive,
      goToMenu,
      startPress,
      cancelPress,
    };
  },
});
</script>

<style scoped>
.screen {
  height: 100dvh;
  overflow-y: auto;
  background: #0b7a3a;
  font-family: "Poppins", sans-serif;
}

.top {
  padding: 48px 20px 20px;
}

.top h1 {
  margin: 0;
  color: #f2f6f2;
  font-size: 36px;
  font-weight: 700;
}

.card {
  min-height: calc(100dvh - 132px);
  background: #f3f4f3;
  border-radius: 28px 28px 0 0;
  padding: 28px 20px 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card h2 {
  width: 100%;
  margin: 0;
  color: #0b7a3a;
  font-size: 42px;
  font-weight: 700;
}

.lock-circle {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #9ead9f;
  display: grid;
  place-items: center;
  margin: 56px 0 42px;
}

.lock-icon {
  width: 72px;
  color: #0b7a3a;
}

.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.form input {
  width: 100%;
  height: 44px;
  border: 1px solid #ced1ce;
  border-radius: 14px;
  padding: 0 14px;
  font-size: 16px;
  background: transparent;
  color: #1f1f1f;
  -webkit-text-fill-color: #1f1f1f;
}

.form input::placeholder {
  color: #b8b8b8;
  opacity: 1;
}

.password-wrap {
  position: relative;
}

.eye-btn {
  position: absolute;
  right: 14px;
  top: 9px;
  width: 24px;
  height: 24px;
  border: 0;
  padding: 0;
  background: transparent;
  color: #8f8f8f;
}

.eye {
  width: 20px;
  height: 20px;
}

.forgot {
  align-self: flex-end;
  color: #0b7a3a;
  font-size: 14px;
  text-decoration: none;
}

.error {
  margin: 0;
  color: #d63a52;
  font-size: 13px;
}

.form > button[type="submit"] {
  margin-top: 16px;
  width: 100%;
  height: 46px;
  border: 0;
  border-radius: 14px;
  background: #0b7a3a;
  color: #fff;
  font-size: 32px;
  font-weight: 600;
  cursor: pointer;
}

.fingerprint {
  margin: 34px 0 20px;
  width: 54px;
  height: 54px;
  border: 2px solid #0b7a3a;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: transparent;
  cursor: pointer;
  appearance: none;
  transition: transform 0.22s ease, box-shadow 0.22s ease, background-color 0.22s ease;
}

.fingerprint.pressing {
  transform: scale(1.08);
}

.fingerprint.active {
  transform: scale(1.34);
  background: #dcf7e7;
  box-shadow: 0 0 0 8px rgba(11, 122, 58, 0.18);
}

.fingerprint-core {
  width: 26px;
  height: 26px;
  border: 2px solid #0b7a3a;
  border-radius: 50%;
}

.footer {
  margin: 0;
  color: #3f3f3f;
  font-size: 14px;
}

.footer a {
  color: #0b7a3a;
  font-weight: 600;
  text-decoration: none;
  margin-left: 6px;
}

@media (max-width: 430px) {
  .top h1 {
    font-size: 38px;
  }

  .card h2 {
    font-size: 40px;
  }
}
</style>
