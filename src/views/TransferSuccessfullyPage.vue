<template>
  <ion-page>
    <ion-content :fullscreen="true" :scroll-y="false">
      <div class="screen">
        <main class="card">
          <h1>Confirm</h1>

          <div class="hero">
            <img v-if="avatarSrc" class="avatar photo" :src="avatarSrc" :alt="nameText" />
            <div v-else class="avatar user">{{ avatarLetter }}</div>
          </div>

          <h2>Transfer successful!</h2>
          <p>
            You have successfully transferred
            <span class="accent">{{ amountText }}</span>
            to
            <span class="accent">{{ nameText }}</span>.
          </p>

          <router-link to="/transfer" class="confirm-btn">Confirm</router-link>
        </main>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { IonContent, IonPage } from "@ionic/vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "TransferSuccessfullyPage",
  components: {
    IonPage,
    IonContent,
  },
  setup() {
    const route = useRoute();

    const nameText = computed(() => {
      const value = String(route.query.name || "Patricio").trim();
      return value || "Patricio";
    });

    const amountText = computed(() => {
      const value = String(route.query.amount || "69").trim();
      return value.endsWith("EUR") ? value : `${value}EUR`;
    });

    const beneficiary = computed(() => String(route.query.beneficiary || "patricio"));

    const avatarSrc = computed(() => {
      if (beneficiary.value === "arcides") return "/images/arcides.png";
      if (beneficiary.value === "patricio") return "/images/patricio.png";
      return "";
    });

    const avatarLetter = computed(() => {
      if (beneficiary.value === "new") return "U";
      return nameText.value.charAt(0).toUpperCase();
    });

    return {
      nameText,
      amountText,
      avatarSrc,
      avatarLetter,
    };
  },
});
</script>

<style scoped>
.screen {
  min-height: 100dvh;
  background: #f3f3f3;
  font-family: "Poppins", sans-serif;
  padding: 22px 14px;
}

.card {
  text-align: center;
}

h1 {
  margin: 0 0 8px;
  color: #333;
  text-align: left;
  font-size: 38px;
}

.hero {
  margin: 10px auto 24px;
  width: 312px;
  height: 312px;
  border-radius: 50%;
  background: radial-gradient(circle at 50% 44%, #f9f9fb 0%, #d7dbe6 70%);
  border: 4px solid #dfe4eb;
  display: grid;
  place-items: center;
}

.avatar {
  width: 210px;
  height: 210px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  font-size: 72px;
  font-weight: 700;
}

.avatar.user {
  background: linear-gradient(160deg, #557f73, #9eb8ad);
}

.avatar.photo {
  object-fit: cover;
  border: 2px solid #dfe4eb;
}

h2 {
  margin: 0;
  color: #0b7a3a;
  font-size: 38px;
}

p {
  margin: 12px 0 26px;
  color: #333;
  font-size: 14px;
  line-height: 1.35;
}

.accent {
  color: #0b7a3a;
  font-weight: 700;
  margin: 0 3px;
}

.confirm-btn {
  width: 100%;
  height: 44px;
  border-radius: 14px;
  background: #0b7a3a;
  color: #fff;
  text-decoration: none;
  display: grid;
  place-items: center;
  font-size: 36px;
  font-weight: 600;
}
</style>
