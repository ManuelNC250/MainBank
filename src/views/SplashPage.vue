<template>
  <ion-page>
    <ion-content :fullscreen="true" :scroll-y="false">
      <div class="screen">
        <main class="card" :class="{ leaving: isLeaving }">
          <h1>Welcome Back!</h1>
          <img class="bank-image" src="/images/mainbank-splash.png" alt="MainBank" />
        </main>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { IonContent, IonPage, useIonRouter } from "@ionic/vue";

export default defineComponent({
  name: "SplashPage",
  components: {
    IonPage,
    IonContent,
  },
  setup() {
    const ionRouter = useIonRouter();
    const isLeaving = ref(false);

    onMounted(() => {
      window.setTimeout(() => {
        isLeaving.value = true;
        window.setTimeout(() => {
          ionRouter.navigate("/home", "forward", "replace");
        }, 420);
      }, 1100);
    });

    return {
      isLeaving,
    };
  },
});
</script>

<style scoped>
.screen {
  height: 100dvh;
  background: #0b7a3a;
  font-family: "Poppins", sans-serif;
  padding: 82px 0 40px;
}

.card {
  height: 100%;
  background: #f3f4f3;
  border-radius: 30px;
  padding: 120px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: opacity 0.42s ease, transform 0.42s ease;
}

.card.leaving {
  opacity: 0;
  transform: translateY(-4px);
}

h1 {
  margin: 0;
  color: #0b7a3a;
  font-size: 52px;
  line-height: 1.05;
  text-align: center;
}

.bank-image {
  margin-top: 40px;
  width: 100%;
  max-width: 374px;
  height: auto;
  object-fit: contain;
}
</style>
