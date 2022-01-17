<template>
  <div id="app">
      <div id="main" class="b-container text-center">
        <Home/>
      </div>
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

<style>
body {
  background-color: bisque;
}
</style>
