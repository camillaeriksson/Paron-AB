<template>
  <div>
    <div v-for="product in products" v-bind:key="product">
      <p>{{product.name}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'stock',
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

<style scoped>

</style>
