<template class="bg-dark">
<div class="container text-right">
  <b-button @click="handleGet" class="mb-2 pb-2">details</b-button>
      <div id="post" class="b-container border border-dark pt-2"
        v-for="x in player_stats" :key="x.prayer_id">
        <h4 id="stat"> <p>ast: {{x.ast}} blocks: {{x.blk}}</p> 
        <p>points: {{x.pts}} season: {{x.season}} </p>          
        </h4>
    </div>

  </div>
</template>

<script>
const axios = require('axios');
const debounce = require('lodash.debounce');

export default
{
  props:['listdata'],
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
        axios.get('https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]=' + this.listdata, {
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
#stat{
  color: darkcyan
}
</style>

