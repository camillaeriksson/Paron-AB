<template>
  <div>
    <PageHeader heading="Lagersaldo" />
    <div v-for="product in products" v-bind:key="product" class="product-container">
      <p style="font-weight: bold;">{{product.name}}</p>
      <div class="product-information-container">
        <p>Produktnr: {{product.productnr}}</p>
        <p>Pris: {{product.price}}kr</p>
      </div>
      <p>Antal i lager:</p>
      <p>Cupertino: {{product.stock.cupertino}}</p>
      <p>Norrköping: {{product.stock.norrkoping}}</p>
      <p>Frankurt: {{product.stock.frankurt}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import PageHeader from './PageHeader.vue'

export default {
  name: 'stock',
  data() {
    return {
      products: []
    }
  },
  components: {
    PageHeader
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
.product-container {
  margin: 20px
  p {
    margin: 0
  }
}
.product-information-container {
  display: flex
}

</style>
