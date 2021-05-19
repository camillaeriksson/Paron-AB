<template>
  <div class="p-d-flex p-flex-column p-ai-center" style="width: 100vw">
    <PageHeader heading="Lagersaldo" />
    <Card class="stock-content-container">
      <template #content>
        <DataTable class="product-data-table" :value="products">
          <Column field="name" header="Produkt">
            <template #body="{data}">
              <div class="p-d-flex p-flex-column">
                {{data.name}}
                <div class="p-d-flex p-flex-wrap">
                  <p>Produktnr: {{data.productnr}}</p> 
                  <p>Pris: {{data.price}} kr</p>
                </div>
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
      </template>
    </Card>
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
    margin: 0 5px 0 0;
    font-size: 10px;
  }
}
.stock-content-container {
  width: 70%;
  margin-top: 30px;
}
</style>
