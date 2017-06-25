<template>
  <div>
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock" :placeQuantity="stock.quantity" ></app-stock>
  </div>
</template>
<script>
    import Stock from './Stock.vue'

    export default {
      computed: {
        stocks(){
          console.log('computed stocks in portfolio ')
          return this.$store.getters.stockPortfolio
        }
      },
      components: {
        appStock: Stock
      }
    }
</script>
<style scoped>

</style>
