<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="screen">
        <header class="top">
          <router-link class="back" to="/home" aria-label="Back to sign in">&lt;</router-link>
          <h1>Sign up</h1>
        </header>

        <main class="card">
          <h2>Welcome to us,</h2>
          <p class="subtitle">Hello there, create New account</p>

          <div class="hero">
            <span class="dot dot-green"></span>
            <span class="dot dot-pink"></span>
            <span class="dot dot-cyan"></span>
            <span class="dot dot-yellow"></span>
            <span class="dot dot-blue"></span>
            <div class="hero-circle">
              <div class="phone-icon" aria-hidden="true"></div>
            </div>
          </div>

          <form class="form" @submit.prevent="goToMenu">
            <input v-model="name" type="text" placeholder="Name" />

            <div class="password-wrap">
              <input v-model="passwordOne" :type="showPasswordOne ? 'text' : 'password'" placeholder="Password" />
              <button type="button" class="eye-btn" @click="showPasswordOne = !showPasswordOne" :aria-label="showPasswordOne ? 'Hide password' : 'Show password'">
                <svg viewBox="0 0 24 24" class="eye" aria-hidden="true">
                  <path d="M2 12s3.5-5 10-5 10 5 10 5-3.5 5-10 5-10-5-10-5Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
                  <circle cx="12" cy="12" r="2.8" fill="currentColor"/>
                  <path v-if="showPasswordOne" d="M4 20L20 4" fill="none" stroke="currentColor" stroke-width="1.8"/>
                </svg>
              </button>
            </div>

            <div class="password-wrap">
              <input v-model="passwordTwo" :type="showPasswordTwo ? 'text' : 'password'" placeholder="Password" />
              <button type="button" class="eye-btn" @click="showPasswordTwo = !showPasswordTwo" :aria-label="showPasswordTwo ? 'Hide password' : 'Show password'">
                <svg viewBox="0 0 24 24" class="eye" aria-hidden="true">
                  <path d="M2 12s3.5-5 10-5 10 5 10 5-3.5 5-10 5-10-5-10-5Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
                  <circle cx="12" cy="12" r="2.8" fill="currentColor"/>
                  <path v-if="showPasswordTwo" d="M4 20L20 4" fill="none" stroke="currentColor" stroke-width="1.8"/>
                </svg>
              </button>
            </div>
            <p v-if="errorText" class="error">{{ errorText }}</p>
            <button type="submit">Sign up</button>
          </form>

          <p class="footer">
            Have an account?
            <router-link to="/home">Sign In</router-link>
          </p>
        </main>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { IonContent, IonPage } from "@ionic/vue";
import { useRouter } from "vue-router";
import { useForm } from "vee-validate";
import * as yup from "yup";

export default defineComponent({
  name: "SignUpPage",
  components: {
    IonPage,
    IonContent,
  },
  setup() {
    const router = useRouter();
    const name = ref("");
    const passwordOne = ref("");
    const passwordTwo = ref("");
    const errorText = ref("");
    const showPasswordOne = ref(false);
    const showPasswordTwo = ref(false);
    const { validate, setValues } = useForm({
      validationSchema: yup.object({
        name: yup.string().required(),
        passwordOne: yup.string().required(),
        passwordTwo: yup
          .string()
          .required()
          .oneOf([yup.ref("passwordOne")], "Passwords do not match."),
      }),
    });

    const goToMenu = async () => {
      setValues({
        name: name.value,
        passwordOne: passwordOne.value,
        passwordTwo: passwordTwo.value,
      });
      const result = await validate();
      if (!result.valid) {
        errorText.value = "Fill all fields before continuing.";
        return;
      }
      errorText.value = "";
      router.push("/menu");
    };

    return {
      goToMenu,
      name,
      passwordOne,
      passwordTwo,
      errorText,
      showPasswordOne,
      showPasswordTwo,
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
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 48px 20px 20px;
}

.back {
  color: #f2f6f2;
  text-decoration: none;
  font-size: 34px;
  line-height: 1;
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
  padding: 28px 22px 34px;
}

.card h2 {
  margin: 0;
  color: #0b7a3a;
  font-size: 46px;
  line-height: 1.05;
}

.subtitle {
  margin: 6px 0 0;
  color: #222;
  font-size: 28px;
}

.hero {
  position: relative;
  margin: 28px auto 30px;
  width: 230px;
  height: 230px;
}

.hero-circle {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: #9ead9f;
  margin: 35px auto 0;
  display: grid;
  place-items: center;
}

.phone-icon {
  width: 62px;
  height: 94px;
  border-radius: 8px;
  background: #2c945f;
  border: 3px solid #e9ebe8;
  position: relative;
}

.phone-icon::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 19px;
  width: 18px;
  height: 4px;
  border-radius: 3px;
  background: #d9ded9;
}

.dot {
  position: absolute;
  border-radius: 50%;
}

.dot-green {
  width: 12px;
  height: 12px;
  background: #0b7a3a;
  top: 18px;
  left: 108px;
}

.dot-pink {
  width: 28px;
  height: 28px;
  background: #ff4d79;
  top: 38px;
  right: 12px;
}

.dot-cyan {
  width: 14px;
  height: 14px;
  background: #54c9b0;
  top: 102px;
  left: 4px;
}

.dot-yellow {
  width: 24px;
  height: 24px;
  background: #f3ad2b;
  bottom: 58px;
  left: 44px;
}

.dot-blue {
  width: 14px;
  height: 14px;
  background: #1e8fe2;
  bottom: 54px;
  right: 42px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
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

.form > button[type="submit"] {
  margin-top: 10px;
  width: 100%;
  height: 46px;
  border: 0;
  border-radius: 14px;
  background: #0b7a3a;
  color: #fff;
  font-size: 36px;
  font-weight: 600;
}

.error {
  margin: 0;
  color: #d63a52;
  font-size: 13px;
}

.footer {
  margin: 22px 0 0;
  text-align: center;
  color: #3f3f3f;
  font-size: 14px;
}

.footer a {
  color: #0b7a3a;
  font-weight: 600;
  margin-left: 6px;
  text-decoration: none;
}

@media (max-width: 430px) {
  .top h1 {
    font-size: 38px;
  }

  .card h2 {
    font-size: 40px;
  }

  .subtitle {
    font-size: 24px;
  }
}
</style>
