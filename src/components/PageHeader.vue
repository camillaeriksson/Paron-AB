<template>
  <div class="page-header-container">
    <p>{{heading}}</p>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: ['heading']
}
</script>

<style lang="scss">
.page-header-container {
  width: 100%;
  border-bottom: 1px solid #699461;
  p {
    color: #699461;
    font-size: 26px;
    margin-left: 10px;
  }
}
</style>