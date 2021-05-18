<template>
  <div>
    <Dropdown v-model="selectedProduct" :options="products" optionLabel="name" optionValue="value" placeholder="Välj en produkt" />
    <Dropdown v-model="selectedWarehouse" :options="warehouses" optionLabel="name" optionValue="value" placeholder="Välj ett lager" />
    <span class="p-float-label">
      <InputText id="quantity" type="number" v-model="quantity" />
      <label for="quantity">Antal</label>
    </span>
    <button @click="submit()">Skicka</button>
  </div>
</template>

<script>
import Dropdown from 'primevue/dropdown'
import InputText from 'primevue/inputtext'

export default {
  name: 'ingoing',
  data() {
    return {
      quantity: null,
      selectedProduct: null,
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
    InputText
  },
  methods: {
    submit() {
      console.log(this.selectedWarehouse)
      console.log(this.selectedProduct)
      console.log(this.quantity)
    }
  }
}
</script>

<style scoped>

</style>