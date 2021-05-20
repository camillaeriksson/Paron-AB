<template>
  <!--Component for register both ingoing and outgoing stock-->
  <div class="p-d-flex p-flex-column p-ai-center" style="width: 100vw">
  <!--Header for the register page-->
    <PageHeader :heading="$route.name === 'ingoing' ? 'Registrera ingående saldo' : 'Registrera utgående saldo'" />
    <!--Card with input fields to register ingoing/outgoing stock-->
    <Card class="register-content-container p-shadow-5">
      <template #content>
        <div class="p-d-flex p-flex-column p-ai-center">
          <div class="p-d-flex p-jc-evenly p-flex-wrap inputs-container">
            <Dropdown v-model="selectedProductId" :options="products" optionLabel="name" optionValue="value" placeholder="Produkt" />
            <Dropdown v-model="selectedWarehouse" :options="warehouses" optionLabel="name" optionValue="value" placeholder="Lager" />
            <span class="p-float-label">
              <InputNumber id="quantity" :useGrouping="false" v-model="quantity" />
              <label for="quantity">Antal</label>
            </span>
          </div>
          <Button class="p-button-success" :disabled="selectedProductId === null || selectedWarehouse === null || quantity === null" label="Registrera" @click="submit()" />
        </div>
        <!--Component with confirmation dialog from PrimeVue--> 
        <ConfirmDialog></ConfirmDialog>
      </template>
    </Card>
  </div>    
</template>

<script>
import axios from 'axios'
import Dropdown from 'primevue/dropdown'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'
import ConfirmDialog from 'primevue/confirmdialog'
import PageHeader from './PageHeader.vue'
import Card from 'primevue/card'

export default {
  name: 'register-products',
  data() {
    return {
      quantity: null,
      selectedProductId: null,
      selectedWarehouse: null,
      // Data for dropdowns
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
    Button,
    Card,
    ConfirmDialog,
    PageHeader
  },
  methods: {
    // Function for getting the correct name of the inserted warehouse 
    // and product to display in the confirmation popup
    findName(valueKey, array) {
      for (var i=0; i < array.length; i++) {
        if (array[i].value === valueKey) {
          return array[i].name
        }
      }
    },
    // Function for emptying all input fields
    emptyFields() {
      this.quantity = null
      this.selectedProductId = null
      this.selectedWarehouse = null
    },
    // Function that is called when the "registrera" button is clicked
    submit() {
      // Finding correct names to display in confirmation popup
      const product = this.findName(this.selectedProductId, this.products)
      const warehouse = this.findName(this.selectedWarehouse, this.warehouses)
      const endRoute = this.$route.name
      this.$confirm.require({
        message: this.$route.name === 'ingoing' ? `Vill du registrera ${this.quantity} st ingående ${product} till lagret i ${warehouse}?` :
        `Vill du registrera ${this.quantity} st utgående ${product} från lagret i ${warehouse}?`,
        header: 'Bekräfta',
        acceptLabel: 'Ja',
        rejectLabel: 'Nej',
        // If confirmed
        accept: () => {
          axios.patch(`http://localhost:8081/products/${this.selectedProductId}/${endRoute}`, 
          { quantityToAdd: parseInt(`${this.quantity}`), warehouse: `${this.selectedWarehouse}` })
          this.emptyFields()
        },
        // If not confirmed
        reject: () => {
          this.emptyFields()
        }
      })
    }
  }
}
</script>

<style lang="scss">
.inputs-container {
  width: 100%;
}
.register-content-container {
  @media (max-width: 768px) {
    width: 90%;
  }
  width: 70%;
  margin-top: 30px;
  button {
    margin-top: 20px;
  }
  .p-dropdown, .p-float-label, .p-inputnumber-input {
  @media (max-width: 536px) {
    margin: 10px 0;
  }
    width: 30%;
    min-width: 150px;
  }
}
.p-button.p-confirm-dialog-accept {
  background: #699461;
  border: 1px solid #699461;
}
.p-button.p-confirm-dialog-reject.p-button-text {
  color: #699461;
}

</style>