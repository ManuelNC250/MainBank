<template>
  <ion-page>
    <ion-content :fullscreen="true" :scroll-y="false">
      <div class="screen">
        <header class="top">
          <router-link to="/help" class="back" aria-label="Back to help">&lt;</router-link>
          <h1>BankAId</h1>
        </header>

        <main class="chat-area">
          <div class="messages" ref="messagesRef">
            <p class="date">18/12/2025</p>
            <div class="bubble ai">
              Did you attempt a QUESTIONABLE transaction on debit card ending in *0457 at Puig Castellar in Spain for 69EUR? Reply YES or NO.
            </div>

            <div class="bubble user">Yes</div>

            <p class="date">18/12/2025</p>
            <div class="bubble ai">
              MainBank : 256486 is your authorization code which expires in 10 minutes. If you didn't request the code.
              Call : 18009898 for assistance
            </div>

            <div v-for="(msg, index) in chatMessages" :key="index" class="bubble user dynamic">
              {{ msg }}
            </div>
          </div>
        </main>

        <form class="composer" @submit.prevent="sendMessage">
          <input v-model="newMessage" type="text" placeholder="Type something...." />
          <button type="submit" aria-label="Send">-&gt;</button>
        </form>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref } from "vue";
import { IonContent, IonPage } from "@ionic/vue";

export default defineComponent({
  name: "ChatAIPage",
  components: {
    IonPage,
    IonContent,
  },
  setup() {
    const newMessage = ref("");
    const chatMessages = ref<string[]>([]);
    const messagesRef = ref<HTMLElement | null>(null);

    const sendMessage = async () => {
      const text = newMessage.value.trim();
      if (!text) return;
      chatMessages.value.push(text);
      newMessage.value = "";
      await nextTick();
      if (messagesRef.value) {
        messagesRef.value.scrollTop = messagesRef.value.scrollHeight;
      }
    };

    return {
      newMessage,
      chatMessages,
      messagesRef,
      sendMessage,
    };
  },
});
</script>

<style scoped>
.screen {
  height: 100dvh;
  background: #f3f4f3;
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
}

.top {
  padding: 18px 16px 8px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.back {
  color: #323232;
  text-decoration: none;
  font-size: 32px;
  line-height: 1;
}

.top h1 {
  margin: 0;
  color: #333;
  font-size: 32px;
}

.chat-area {
  flex: 1;
  overflow: hidden;
}

.messages {
  height: 100%;
  overflow-y: auto;
  padding: 0 16px 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.date {
  margin: 0;
  text-align: center;
  color: #9f9f9f;
  font-size: 12px;
}

.bubble {
  max-width: 80%;
  border-radius: 12px;
  padding: 10px 12px;
  font-size: 14px;
  line-height: 1.35;
}

.bubble.ai {
  background: #9aa89f;
  color: #25302b;
}

.bubble.user {
  align-self: flex-end;
  background: #0b7a3a;
  color: #fff;
}

.bubble.user.dynamic {
  background: #1a8b4b;
}

.composer {
  padding: 10px 16px 14px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.composer input {
  flex: 1;
  height: 34px;
  border: 1px solid #cfcfcf;
  border-radius: 14px;
  padding: 0 12px;
  font-size: 14px;
  background: #f3f4f3;
  color: #1f1f1f;
  -webkit-text-fill-color: #1f1f1f;
}

.composer button {
  width: 34px;
  height: 34px;
  border: 0;
  border-radius: 50%;
  background: #0b7a3a;
  color: #fff;
  font-size: 18px;
  line-height: 1;
}
</style>
