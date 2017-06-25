<template>
  <el-col :xs="12" :sm="8" >
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price | getAllPrice | getPrice }} ) Quantity is {{ stock.quantity }}</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <el-input
            placeholder="Quantity"
            type="number"
            :disabled="placeQuantity > 0"
            v-model="placeQuantity"
          ></el-input>
        </div>
        <div class="pull-right">
          <el-button
            type="success"
            @click="sellStock"
            :disabled="placeQuantity <= 0">Force Sell</el-button> <!-- || !Number.isInteger(quantity) -->
        </div>
      </div>
    </div>
  </el-col>
</template>
<script>
  export default {
    props: ['stock','placeQuantity'],
    /*
    data() {
      return {
        placeQuantity: 0
      }
    },
    */
    methods: {
      sellStock() {
        const order = {
          stockId: this.stock.key,
          stockName: this.stock.name,
          quantity: this.placeQuantity,
          stockPrice: this.$options.filters.getAllPrice(this.stock.price)[3]
        }
        this.$store.dispatch('sellStock', order)
      }
    },
    filters: {
      getAllPrice(value) {
        return _.split(value, ',', 5)
      },
      getPrice(value) {
        return value[3]
      },
      getPriceChange(value) {
        return value[4]
      }
    }
  }
</script>
<style scoped>

</style>
