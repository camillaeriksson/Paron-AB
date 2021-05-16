<template>
  <div>
    <PageHeader heading="Lagersaldo" />
    <div v-for="product in products" v-bind:key="product">
      <p>{{product.name}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios"

import PageHeader from './PageHeader.vue'

export default {
  name: 'stock',
    components: {
    PageHeader
  },
  data() {
    return {
      products: []
    }
  },
  created() {
    this.getAllProducts()
  },
  methods: {
    getAllProducts() {
      axios.get('http://localhost:8081/products')
      .then(response => (this.products = response.data))
    }
  }
}
</script>

<style lang="scss">
.page-heading-container {
  width: 100%;
  border-bottom: 5px solid red;
}

</style>
