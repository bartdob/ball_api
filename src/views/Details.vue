<template class="bg-dark">
<div class="container">
  <b-button @click="handleGet">go</b-button>
      <div id="post" class="b-container border border-lights"
        v-for="x in player_stats" :key="x" justify="center" align="center">
        <h4> statistic: {{x.ast}}
      </h4>
    </div>

  </div>
</template>

<script>
const axios = require('axios');
const debounce = require('lodash.debounce');

export default
{
  name: 'Details',
  components: { },
  data() {
    return {
      player_id: '',
      player_stats: [],
    };
  },
  methods: {
    handleGet: debounce(function handle() {
      // this.loading = true;
        axios.get('https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]=1', {
        params: {
          date: '',
          api_key: '',  // key is in priv repo
        },

      })
        .then((response) => {
          console.log(response.data.data);
          this.player_stats = response.data.data
        })
        .catch((error) => {
          console.log(error);
        });
    }, 700),
  },
};

</script>

<style scoped>
</style>

