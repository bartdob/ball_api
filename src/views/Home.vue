<template>
  <div id="app" class="text-center b-container mt-2">
  <b-button @click="handleInput">Load Players Data</b-button>
  <div class="b-container border border-info" v-for="post in posts" :key="post.id">
    <h4>{{post.id}} - {{post.first_name}} {{post.last_name}} 
      <a :href="'https://www.balldontlie.io/api/v1/players/' + post.id">detail</a>
      {{post.team.full_name}}
      
    </h4>
    
    <router-link v-bind:to="'details'">Home</router-link>
  </div>
   <router-view/>
  </div>
</template>

<script>

const axios = require('axios');
const debounce = require('lodash.debounce');


export default
{
  name: 'Home',
  components: { },
  data() {
    return {
      // loading: false,
      // step: 0,
      // searchValue: '',
      // result: '',
      // desc: '',
      posts: [],
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
                    // this.result = response.data.hdurl;
          // this.desc = response.data.explanation;
          // console.log(this.desc);
          // this.loading = false;
          // this.step = 1;
          // // this.result = this.searchValue;
        })
        .catch((error) => {
          console.log(error);
        });
    }, 700),
  },
};

</script>

<style scoped>
.wrapper{
  display: flex;
  margin: 0;
  padding: 0px;
  width: 100%;
  align-items: center;
  flex-direction: column;
}
a, img{
  background: none;
  border: none;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>