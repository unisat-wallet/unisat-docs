<template>
  <div>
    <div>
      <div v-for="contributor in contributorList" class="card">
        <img :src="contributor.avatar_url" width="100px" />
        <h4>
          <a :href="contributor.html_url" target="_blank">
            {{ contributor.login }}
          </a>
        </h4>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
  display: inline-block;
  min-width: 175px;
  text-align: center;
}
h4 {
  margin-top: 0;
}
</style>

<script>
export default {
  props: {
    repoName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      contributorList: [],
    };
  },
  mounted() {
    fetch(`https://api.github.com/repos/unisat/${this.repoName}/contributors`)
      .then((response) => response.json())
      .then((data) => {
        this.contributorList = data;
      });
  },
};
</script>
