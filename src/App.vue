<template>
  <div class="app">
    <router-view>
      <div>
        <Home/>
      </div>
     </router-view>
  </div>
 

</template>

<script>
import Home from './views/Home.vue';


export default
{
  name: 'Search',
  components: { Home },
};

</script>
