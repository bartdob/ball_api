<template class="text-center">
  <div id="app" class="text-center b-container mt-2">

  <b-button class="button" @click="handleInput">Load Players Data</b-button>
  <div id="cont" class="b-container border border-danger text-center">
  <div id="box" class="b-container text-center p-2 m2">
    <div id="post" class="b-container border border-lights"
    v-for="post in posts" :key="post.id" justify="center" align="center">
      <h4>{{post.id}} - {{post.first_name}} {{post.last_name}}
        <!-- <a :href="'https://www.balldontlie.io/api/v1/players/' + post.id">detail</a> -->
        {{post.team.full_name}}
        <Details/>
      </h4>

      <!-- <router-link v-bind:to="'https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]=' + post.id">Home</router-link> -->
      <!-- <a :href="'https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]=' + post.id">details</a> -->
    </div>
  </div>
  </div>
  </div>
</template>

<script>

const axios = require('axios');
const debounce = require('lodash.debounce');
import Details from './Details.vue'


export default
{
  name: 'Home',
  components: { Details },
  data() {
    return {
      // loading: false,
      // step: 0,
      // searchValue: '',
      // result: '',
      // desc: '',
      posts: [],
      players_id: '',
      details: false,
    };
  },
  methods: {
    handleInput: debounce(function handle() {
      // this.loading = true;
      console.log(this.searchValue);
        axios.get('https://www.balldontlie.io/api/v1/players/', {
        params: {
          date: '',
          api_key: '',  // key is in priv repo
        },

      })
        .then((response) => {
          console.log(response.data);
          this.posts = response.data.data
        })
        .catch((error) => {
          console.log(error);
        });
    }, 700),
  },
};

</script>

<style scoped>
#post{
  max-width: 700px;
}

#box{
    margin-left: 300px;
    align-items: center;
    justify-content: center;
}
#cont{
  text-align: center;
  margin: auto;
}
</style>