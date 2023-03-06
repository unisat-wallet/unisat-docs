<template>
  <div>
    <button type="button" class="btn primaryBtn" @click="getAccount()">
      Connect
    </button>
    <button type="button" class="btn greenBtn" @click="pay()">Send BTC</button>
    <button type="button" class="btn greenBtn" @click="payToken()">
      Send Token
    </button>
    <transition name="fade">
      <div class="feedback" v-if="show_feedback">
        <div v-if="show_account">
          <strong>Account: </strong
          ><span style="font-family: monospace">{{ account }}</span>
        </div>
        <div v-if="show_tx_result">
          <strong>Result: </strong
          ><span style="font-family: monospace">{{ tx_result }}</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import ConnectButton from "./ConnectButton";

export default {
  components: {
    ConnectButton,
  },
  data() {
    return {
      account: null,
      tx_result: null,
      show_feedback: false,
      show_account: false,
      show_tx_result: false,
    };
  },
  methods: {
    async getAccount() {
      this.account = await unisat.requestAccount();
      // We currently only ever provide a single account,
      // Present feedback
      this.show_tx_result = false;
      this.show_account = true;
      this.show_feedback = true;
    },
    pay() {
      unisat
        .sendBitcoin({
          receivers: [
            { address: "1LzBK4E9YcJ5fSVq6jZZZTkvsRgnMXuSuX", amount: 1000 },
          ],
        })
        .then((result) => {
          console.log(result);
          this.tx_result = result;
          // Present feedback
        })
        .catch((e) => {
          console.log(e);

          this.tx_result = e.message;
        })
        .finally(() => {
          this.show_tx_result = true;
          this.show_account = false;
          this.show_feedback = true;
        });
    },
  },
};
</script>
