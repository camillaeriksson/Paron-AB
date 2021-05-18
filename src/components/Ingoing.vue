<template>
  <div>
    <PageHeader heading="Registrera ingående saldo" />
    <Dropdown v-model="selectedProductId" :options="products" optionLabel="name" optionValue="value" placeholder="Välj en produkt" />
    <Dropdown v-model="selectedWarehouse" :options="warehouses" optionLabel="name" optionValue="value" placeholder="Välj ett lager" />
    <span class="p-float-label">
      <InputText id="quantity" type="number" v-model="quantity" />
      <label for="quantity">Antal</label>
    </span>
    <button @click="submit()">Skicka</button>
  </div>
</template>

<script>
import axios from 'axios'
import Dropdown from 'primevue/dropdown'
import InputText from 'primevue/inputtext'
import PageHeader from './PageHeader.vue'

export default {
  name: 'ingoing',
  data() {
    return {
      quantity: null,
      selectedProductId: null,
      selectedWarehouse: null,
      warehouses: [
        {name: 'Cupertino', value: 'cupertino'},
        {name: 'Norrköping', value: 'norrkoping'},
        {name: 'Frankurt', value: 'frankurt'}
      ],
      products: [
        {name: 'jTelefon', value: 1},
        {name: 'jPlatta', value: 2},
        {name: 'Päronklocka', value: 3}
      ]
    }
  },
  components: {
    Dropdown,
    InputText,
    PageHeader
  },
  methods: {
    submit() {
      axios.patch(`http://localhost:8081/products/${this.selectedProductId}/ingoing`, 
      { quantityToAdd: parseInt(`${this.quantity}`), warehouse: `${this.selectedWarehouse}` })
      // .then(response => (this.products = response.data))
    }
  }
}
</script>

<style scoped>

</style>