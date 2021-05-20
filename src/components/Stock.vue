<template>
  <div class="p-d-flex p-flex-column p-ai-center" style="width: 100vw">
    <!--Header for the stock page-->
    <PageHeader heading="Lagersaldo" />
    <!--Card with data table to display stock-->
    <Card class="stock-content-container p-shadow-5">
      <template #content>
        <DataTable class="product-data-table" :value="products">
          <Column field="name" header="Produkt">
            <template #body="{data}">
              <div class="p-d-flex p-flex-column product-container">
                {{data.name}}
                <div class="p-d-flex p-flex-wrap product-information-container">
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
    // Calling API function and setting the response to components data
    this.getAllProducts()
  },
  methods: {
    // Function for API call
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
  @media (max-width: 500px) {
    width: 90%;
  }
  width: 70%;
  margin-top: 30px;
}
.product-information-container {
  @media (max-width: 960px) {
    flex-direction: column;
  }
}
.product-container {
  @media (max-width: 960px) {
    text-align: right;
  }
}
</style>
