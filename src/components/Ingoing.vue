<template>
  <div>
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
		selectedWarehouse: null,
		warehouses: [
			{name: 'Cupertino', value: 'cupertino'},
			{name: 'Norrköping', value: 'norrkoping'},
			{name: 'Frankurt', value: 'frankurt'},
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