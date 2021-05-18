<template>
  <div>
    <PageHeader heading="Lagersaldo" />
    <div class="p-d-flex p-flex-wrap">
      <Card v-for="product in products" v-bind:key="product" class="product-card">
        <template #header>
          <img alt="user header" src="demo/images/usercard.png">
        </template>
        <template #title>
          {{product.name}}
        </template>
        <template #content>
          <p style="font-weight: bold;">Antal i lager</p>
          <p>Cupertino: {{product.stock.cupertino}} st</p>
          <p>Norrköping: {{product.stock.norrkoping}} st</p>
          <p>Frankurt: {{product.stock.frankurt}} st</p>
        </template>
      </Card>
      
      
      
      
      
      
      
      
      <!--<p style="font-weight: bold;">{{product.name}}</p>
      <div class="product-information-container">
        <p>Produktnr: {{product.productnr}}</p>
        <p>Pris: {{product.price}}kr</p>
      </div>
      <p>Antal i lager:</p>
      <p>Cupertino: {{product.stock.cupertino}}</p>
      <p>Norrköping: {{product.stock.norrkoping}}</p>
      <p>Frankurt: {{product.stock.frankurt}}</p>-->
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import PageHeader from './PageHeader.vue'
import Card from 'primevue/card'

export default {
  name: 'stock',
  data() {
    return {
      products: []
    }
  },
  components: {
    PageHeader,
    Card
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
.product-card {
  margin: 20px;
  width: 200px;
}
</style>
