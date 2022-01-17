<template id="temp" class="text-center">
  <div id="main" class="text-center b-container">

  <b-button class="button mt-2 mb-2" @click="handleInput">Load Players Data</b-button>
  <div id="cont" class="b-container border border-danger">
  <div id="box" class="b-container text-center p-2 m2 border border-dark bg-dark">
    <div id="post" class="b-container border border-lights mt-1 mb-1 p-1"
    v-for="post in posts" :key="post.id" justify="center" align="center">
      <h4>{{post.id}} - {{post.first_name}} {{post.last_name}}
        <!-- <a :href="'https://www.balldontlie.io/api/v1/players/' + post.id">detail</a> -->
        {{post.team.full_name}}
        <Details :listdata="post.id"/>
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
      button: false,
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
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  background-color: bisque;
}

#box{
    align-items: center;
    justify-content: center;
}
#cont{
  text-align: center;
  margin: auto;
}
#main{
  background-color: bisque;
}

</style>