<template>
  <div>
    <a href="#" class="btn btn-primary" @click.prevent="signout">登出</a>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from "@/components/HelloWorld.vue";

  export default {
    methods: {
      signout() {
        const api = `${process.env.VUE_APP_APIPATH}logout`;
        this.$http.post(api).then((response) => {
          // console.log(response.data);
          if (response.data.success) {
            this.$router.push("/login");
          }
        });
      },
    },
  };
</script>