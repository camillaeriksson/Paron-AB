<template>
  <div>
    <Dropdown v-model="selectedProduct" :options="products" optionLabel="name" optionValue="value" placeholder="Välj en produkt" />
    <Dropdown v-model="selectedWarehouse" :options="warehouses" optionLabel="name" optionValue="value" placeholder="Välj ett lager" />
    <button @click="submit()">Submit</button>
  </div>
</template>

<script>
import Dropdown from 'primevue/dropdown'
export default {
  name: 'ingoing',
  data() {
	return {
    selectedProduct: null,
		selectedWarehouse: null,
		warehouses: [
			{name: 'Cupertino', value: 'cupertino'},
			{name: 'Norrköping', value: 'norrkoping'},
			{name: 'Frankurt', value: 'frankurt'},
		],
    products: [
			{name: 'jTelefon', value: 1},
			{name: 'jPlatta', value: 2},
			{name: 'Päronklocka', value: 3},
		]
	}
},
components: {
  Dropdown
},
  methods: {
    submit() {
      console.log(this.selectedWarehouse)
    }
  }
}
</script>

<style scoped>

</style>