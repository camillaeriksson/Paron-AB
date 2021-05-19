<template>
  <div>
    <PageHeader heading="Registrera utgående saldo" />
    <Dropdown v-model="selectedProductId" :options="products" optionLabel="name" optionValue="value" placeholder="Välj en produkt" />
    <Dropdown v-model="selectedWarehouse" :options="warehouses" optionLabel="name" optionValue="value" placeholder="Välj ett lager" />
    <span class="p-float-label">
      <InputNumber id="quantity" :useGrouping="false" v-model="quantity" />
      <label for="quantity">Antal</label>
    </span>
    <Button label="Registrera" @click="submit()" />
    <ConfirmDialog></ConfirmDialog>
  </div>
</template>

<script>
import axios from 'axios'
import Dropdown from 'primevue/dropdown'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'
import ConfirmDialog from 'primevue/confirmdialog'
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
    InputNumber,
    PageHeader,
    ConfirmDialog,
    Button
  },
  methods: {
    findName(valueKey, array) {
      for (var i=0; i < array.length; i++) {
        if (array[i].value === valueKey) {
          return array[i].name
        }
      }
    },
    emptyFields() {
      this.quantity = null
      this.selectedProductId = null
      this.selectedWarehouse = null
    },
    submit() {
      const product = this.findName(this.selectedProductId, this.products)
      const warehouse = this.findName(this.selectedWarehouse, this.warehouses)
      this.$confirm.require({
        message: `Vill du registrera ${this.quantity} st utgående ${product} från lagret i ${warehouse}?`,
        header: 'Bekräfta',
        acceptLabel: 'Ja',
        rejectLabel: 'Nej',
        accept: () => {
          axios.patch(`http://localhost:8081/products/${this.selectedProductId}/outgoing`, 
          { quantityToAdd: parseInt(`${this.quantity}`), warehouse: `${this.selectedWarehouse}` })
          this.emptyFields()
        },
        reject: () => {
          this.emptyFields()
        }
      })
    }
  }
}
</script>

<style scoped>

</style>