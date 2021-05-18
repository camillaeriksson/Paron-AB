<template>
  <div>
  <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>Cupertino</option>
    <option>Norrköping</option>
    <option>Frankurt</option>
  </select>
    <button @click="submit()">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'ingoing',
  data() {
    return {
      selected: ''
    }
  },
  methods: {
    submit() {
      console.log(this.message)
    }
  }
}
</script>

<style scoped>

</style>