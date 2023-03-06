<template>
  <div>
    <button class="btn primaryBtn" @click="connectToUnisat()">Connect</button>
    <transition name="fade">
      <div class="feedback" v-if="show_feedback">
        <strong>Success! </strong>A pending promise for
        <span style="font-family: monospace">unisat.request()</span> was
        created.
        <br />
        the result is :{{ result }}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coin: null,
      show_feedback: false,
      result: "",
    };
  },
  mounted() {
    this.coin = window.unisat;
  },
  methods: {
    async connectToUnisat() {
      let promise = this.coin.requestAccount();
      // Present feedback
      this.show_feedback = true;
      this.result = await promise;
      // Don't believe just the css feedback, see the console.
      console.log("We got a promise here: ", this.result);
    },
  },
};
</script>
