<template>
  <el-col :xs="12" :sm="12" >
    <div class="panel panel-info">
      <div class="panel-heading">
        <h6 class="panel-title">
          {{ stock.value.name }}
          <small>(Price: {{ stock.value.price | getAllPrice | getPrice }} ){{ stock.value.price | getAllPrice | getPriceChange }} </small>
        </h6>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <el-input
            placeholder="Quantity"
            type="number"
            v-model="quantity"
            size="mini"
          ></el-input>
        </div>
        <div class="pull-right">
          <el-button
            type="success"
            @click="buyStock"
            :disabled="insufficentFunds || quantity <= 0"
          >{{ insufficentFunds ? 'Insufficent Funds' : 'Buy' }} </el-button> <!-- || !Number.isInteger(quantity) -->
        </div>
      </div>
    </div>
  </el-col>
</template>
<script>
    export default {
      props: ['stock'],
      data() {
        return {
          quantity:0
        }
      },
      computed: {
        funds() {
          return this.$store.getters.showFunds
        },
        insufficentFunds() {
          // console.log( this.quantity * this.$options.filters.getAllPrice(this.stock.value.price)[3])
          // console.log( this.allfunds )
          return (this.quantity * this.$options.filters.getAllPrice(this.stock.value.price)[3]) > this.funds
        }
      },
      methods: {
        buyStock() {
          // create order object
          const order = {
            stockId: this.stock.key,
            stockName: this.stock.value.name,
            stockPrice: this.$options.filters.getAllPrice(this.stock.value.price)[3],
            quantity: this.quantity
          }
          console.log(order)
          // console.log(!Number.isInteger(this.quantity))
          this.$store.dispatch('buyStock', order)
          this.quantity = 0;
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
