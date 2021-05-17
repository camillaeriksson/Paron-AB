<template>
  <div>
  <v-select />
    <input v-model="message" placeholder="edit me">
    <button @click="submit()">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'ingoing',
  data() {
    return {
      message: ''
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