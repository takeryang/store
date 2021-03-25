<template>
  <div>
    <div class="text-right" style="background:red">
      <button class="btn btn-primary">建立新的產品</button>
    </div>

    <table class="table mt-4">
      <thead></thead>
      <tbody>
        <tr v-for="(item, key) in products" :key="item.id">
          <td>{{item.category}}</td>
          <td>{{item.title}}</td>
          <td class="text-right">{{item.origin_price}}</td>
          <td class="text-right">{{item.price}}</td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <button class="btn btn-outline-primary btn-sm">編輯</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        products: [],
      }
    },

    methods: {
      getProducts() {
        const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/products`;
        this.$http.get(api).then((response) => {
          console.log(response.data);
          this.products = response.data.products;
        });
      },
    },

    created() {
      this.getProducts();
    },
  }
</script>