<template>
  <div>
    <app-stock v-for="(value, key, index) in sets" :key="key" :stock="{value, key, index}"></app-stock>
  </div>
</template>
<script>
    import Stock from './Stock.vue'
    export default {
      data() {
        return {
          tmp_stocks: [
            {id:1, name: 'BMW', price: 110},
            {id:2, name: 'Google', price: 200},
            {id:3, name: 'Apple', price: 250},
            {id:4, name: 'Twitter', price: 8},
          ]
        }
      },
      components:{
        appStock:Stock
      },
      computed: {
        sets() {
          return this.$store.getters.stocks
        }
      },
      created: function(){
        // this.$http.get('https://www.set.or.th/set/commonslookup.do?language=en&country=US&prefix=A').then(function(response){
        // console.log('Get stocks success...')
        // console.log(response.body)
        // })
      }
    }
</script>
<style scoped>

</style>
