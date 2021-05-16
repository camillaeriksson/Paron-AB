<template>
  <p>Stock</p>
</template>

<script>
import axios from "axios"
export default {
  name: 'stock',
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
