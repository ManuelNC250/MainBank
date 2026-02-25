<template>
  <ion-page>
    <ion-content :fullscreen="true" :scroll-y="false">
      <div class="screen">
        <main class="panel">
          <h1>Transfer</h1>

          <div class="content-scroll">
            <div class="account-box">
              <span>VISA **** **** **** {{ activeAccount.suffix }}</span>
              <button type="button" class="swap" @click="toggleAccount" aria-label="Switch account">
                <span>&lt;&gt;</span>
              </button>
            </div>
            <p class="balance">Available balance: {{ activeAccount.balance }}</p>

            <p class="section-label">Choose transaction</p>
            <section class="tx-row">
              <button class="tx-card active" type="button">Transfer via<br />card number</button>
              <button class="tx-card" type="button">Transfer to<br />the same bank</button>
              <button class="tx-card" type="button">Transfer to<br />another bank</button>
            </section>

            <div class="head-row">
              <p class="section-label">Choose beneficiary</p>
              <button type="button">Find beneficiary</button>
            </div>

            <section class="beneficiaries">
              <button
                type="button"
                class="beneficiary new"
                :class="{ selected: selectedBeneficiary === 'new', dimmed: selectedBeneficiary !== 'new' }"
                @click="selectBeneficiary('new')"
              >
                +
              </button>

              <button
                type="button"
                class="beneficiary person"
                :class="{ selected: selectedBeneficiary === 'patricio' }"
                @click="selectBeneficiary('patricio')"
              >
                <img class="avatar" src="/images/patricio.png" alt="Patricio" />
                <span>Patricio</span>
              </button>

              <button
                type="button"
                class="beneficiary person"
                :class="{ selected: selectedBeneficiary === 'arcides' }"
                @click="selectBeneficiary('arcides')"
              >
                <img class="avatar" src="/images/arcides.png" alt="Arcides" />
                <span>Arcides</span>
              </button>
            </section>

            <form class="form" @submit.prevent="onConfirm">
              <input v-model="formData.name" type="text" placeholder="Name" />
              <imask-input
                v-model="formData.card"
                class="masked-input"
                mask="0000 0000 0000 0000"
                placeholder="Card number"
              />
              <input v-model="formData.content" type="text" placeholder="Content" />
              <imask-input
                v-model="formData.amount"
                class="masked-input"
                :mask="/^\d{0,6}([.,]\d{0,2})?$/"
                placeholder="Amount"
              />
              <p v-if="errorText" class="error">{{ errorText }}</p>
              <button type="submit">Confirm</button>
            </form>
          </div>

          <nav class="bottom-nav">
            <router-link to="/menu">Home</router-link>
            <router-link to="/menu-search">Search</router-link>
            <router-link to="/transfer" class="active">Transfer</router-link>
            <router-link to="/menu-settings">Settings</router-link>
          </nav>
        </main>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from "vue";
import { IonContent, IonPage } from "@ionic/vue";
import { useRouter } from "vue-router";
import { IMaskComponent } from "vue-imask";

type Beneficiary = "new" | "patricio" | "arcides";

export default defineComponent({
  name: "MenuTransferPage",
  components: {
    IonPage,
    IonContent,
    "imask-input": IMaskComponent,
  },
  setup() {
    const router = useRouter();
    const accountIndex = ref(0);
    const accounts = [
      { suffix: "0457", balance: "2.567,69EUR" },
      { suffix: "0459", balance: "0,80EUR" },
    ];

    const selectedBeneficiary = ref<Beneficiary>("patricio");
    const formData = reactive({
      name: "",
      card: "",
      content: "",
      amount: "",
    });
    const errorText = ref("");

    const presets: Record<Exclude<Beneficiary, "new">, typeof formData> = {
      patricio: {
        name: "Patricio Lopez",
        card: "4578 9812 7456 0034",
        content: "Dinner split",
        amount: "27,40EUR",
      },
      arcides: {
        name: "Arcides Silva",
        card: "5012 7754 3980 1197",
        content: "Monthly rent",
        amount: "380,00EUR",
      },
    };

    const fillForm = (data: typeof formData) => {
      formData.name = data.name;
      formData.card = data.card;
      formData.content = data.content;
      formData.amount = data.amount;
    };

    const clearForm = () => {
      formData.name = "";
      formData.card = "";
      formData.content = "";
      formData.amount = "";
    };

    const selectBeneficiary = (beneficiary: Beneficiary) => {
      selectedBeneficiary.value = beneficiary;
      errorText.value = "";
      if (beneficiary === "new") {
        clearForm();
      } else {
        fillForm(presets[beneficiary]);
      }
    };

    const toggleAccount = () => {
      accountIndex.value = accountIndex.value === 0 ? 1 : 0;
    };

    const activeAccount = computed(() => accounts[accountIndex.value]);
    const allFieldsFilled = computed(() => {
      return Boolean(
        formData.name.trim() &&
          formData.card.trim() &&
          formData.content.trim() &&
          formData.amount.trim()
      );
    });

    const firstName = (value: string) => {
      const token = value.trim().split(" ")[0];
      return token || "User";
    };

    const normalizeAmount = (value: string | number) => {
      const raw = String(value);
      const match = raw.match(/[0-9]+([.,][0-9]+)?/);
      return match ? match[0].replace(".", ",") : raw.trim();
    };

    const onConfirm = () => {
      if (!allFieldsFilled.value) {
        errorText.value = "Fill all fields before confirming.";
        return;
      }
      errorText.value = "";
      router.push({
        path: "/transfer-success",
        query: {
          name: firstName(formData.name),
          amount: normalizeAmount(formData.amount),
          beneficiary: selectedBeneficiary.value,
        },
      });
    };

    selectBeneficiary("patricio");

    return {
      activeAccount,
      selectedBeneficiary,
      formData,
      errorText,
      toggleAccount,
      selectBeneficiary,
      onConfirm,
    };
  },
});
</script>

<style scoped>
.screen {
  height: 100dvh;
  background: #f3f4f3;
  font-family: "Poppins", sans-serif;
}

.panel {
  height: 100dvh;
  padding: 22px 18px 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

h1 {
  margin: 0;
  color: #323232;
  font-size: 38px;
}

.content-scroll {
  flex: 1;
  overflow-y: auto;
  padding-right: 2px;
}

.content-scroll::-webkit-scrollbar {
  width: 4px;
}

.content-scroll::-webkit-scrollbar-thumb {
  background: #d5d5d5;
  border-radius: 4px;
}

.account-box {
  margin-top: 10px;
  border: 1px solid #c7c7c7;
  border-radius: 16px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
}

.account-box span {
  color: #363636;
  font-size: 16px;
}

.swap {
  border: 0;
  background: transparent;
  color: #8a8a8a;
  font-size: 20px;
  line-height: 1;
}

.balance {
  margin: 8px 10px 0;
  color: #0b7a3a;
  font-size: 14px;
  font-weight: 600;
}

.section-label {
  margin: 8px 0 6px;
  color: #8e8e8e;
  font-size: 14px;
  font-weight: 600;
}

.tx-row {
  flex: 0 0 auto;
  display: flex;
  gap: 10px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 2px;
}

.tx-row::-webkit-scrollbar {
  display: none;
}

.tx-card {
  flex: 0 0 auto;
  min-width: 98px;
  height: 84px;
  border: 0;
  border-radius: 14px;
  text-align: center;
  padding: 10px 6px;
  color: #fff;
  background: #d5d5d5;
  font-size: 12px;
  line-height: 1.2;
  white-space: normal;
  word-break: break-word;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tx-card.active {
  background: #0b7a3a;
}

.head-row {
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.head-row button {
  border: 0;
  background: transparent;
  color: #0b7a3a;
  font-size: 14px;
  font-weight: 600;
}

.beneficiaries {
  display: flex;
  gap: 12px;
}

.beneficiary {
  width: 98px;
  height: 110px;
  border-radius: 14px;
  border: 2px solid transparent;
  background: #fff;
  color: #2f2f2f;
  font-size: 14px;
}

.beneficiary.new {
  background: #dedede;
  color: #8aa091;
  font-size: 42px;
}

.beneficiary.new.dimmed {
  background: #cdcdcd;
}

.beneficiary.person {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.beneficiary .avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.beneficiary.selected {
  border-color: #0b7a3a;
  background: #0b7a3a;
  color: #fff;
}

.form {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 0 0 auto;
}

.form input {
  height: 38px;
  border: 1px solid #c6c6c6;
  border-radius: 16px;
  padding: 0 12px;
  background: transparent;
  color: #1f1f1f;
  -webkit-text-fill-color: #1f1f1f;
  font-size: 16px;
}

.form .masked-input {
  height: 38px;
  border: 1px solid #c6c6c6;
  border-radius: 16px;
  padding: 0 12px;
  background: transparent;
  color: #1f1f1f;
  -webkit-text-fill-color: #1f1f1f;
  font-size: 16px;
}

.form input::placeholder {
  color: #8f8f8f;
}

.form button {
  margin-top: 2px;
  height: 38px;
  border: 0;
  border-radius: 19px;
  background: #0b7a3a;
  color: #fff;
  font-size: 30px;
}

.error {
  margin: 0;
  color: #d63a52;
  font-size: 13px;
}

.bottom-nav {
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.bottom-nav button,
.bottom-nav a {
  border: 0;
  height: 36px;
  border-radius: 18px;
  font-size: 13px;
  color: #7a7a7a;
  background: transparent;
  text-decoration: none;
  display: grid;
  place-items: center;
}

.bottom-nav .active {
  background: #0b7a3a;
  color: #fff;
}
</style>
