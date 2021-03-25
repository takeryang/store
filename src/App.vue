<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
  @import "./assets/style/all";

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>


<script>
  export default {

    // created() {
    //   const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/products`;
    //   this.$http.get(api).then((response) => {
    //     console.log(response.data)
    //   });
    // },
  }
</script>