<template>
  <div>
    <PageHeader heading="Lagersaldo" />
    <div class="p-d-flex p-flex-wrap">
      <Card v-for="product in products" v-bind:key="product" class="product-card">
        <template #title>
          {{product.name}}
        </template>
        <template #content>
          <p style="font-weight: bold;">Antal i lager</p>
            <div class="p-d-flex p-jc-between">
              <div>
                <p>Cupertino:</p>
                <p>Norrköping:</p>
                <p>Frankurt:</p>
              </div>
              <div>
                <p>{{product.stock.cupertino}} st</p>
                <p>{{product.stock.norrkoping}} st</p>
                <p>{{product.stock.frankurt}} st</p>
              </div>
            </div>
        </template>
      </Card>
      

    <DataTable class="product-data-table" :value="products">
      <Column field="name" header="Produkt">
        <template #body="{data}">
          <div class="p-d-flex p-flex-column">
          {{data.name}}
          <p>Produktnr: {{data.productnr}} Pris: {{data.price}} kr</p>
          </div>
        </template>
      </Column>
      <Column field="stock.cupertino" header="Cupertino">
        <template #body="{data}">
          {{data.stock.cupertino}} st
        </template>
      </Column>
      <Column field="stock.norrkoping" header="Norrköping">
        <template #body="{data}">
          {{data.stock.norrkoping}} st
        </template>
      </Column>
      <Column field="stock.frankurt" header="Frankurt">
        <template #body="{data}">
          {{data.stock.frankurt}} st
        </template>
      </Column>
    </DataTable>
      
      
      
      
      
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
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

export default {
  name: 'stock',
  data() {
    return {
      products: []
    }
  },
  components: {
    PageHeader,
    Card,
    DataTable,
    Column
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
.product-data-table {
  p {
    margin: 0;
    font-size: 10px;
  }
}
.product-card {
  margin: 20px;
  width: 230px;
  p {
    margin: 0;
  }
}
</style>
