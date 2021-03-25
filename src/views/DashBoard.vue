<template>
  <div>
    <NavBar></NavBar>
    <div class="container-fluid">
      <div class="row">
        <SideBar></SideBar>
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from "../components/NavBar.vue";
  import SideBar from "../components/SideBar.vue";

  export default {
    components: {
      NavBar,
      SideBar,
    }
  }
</script>