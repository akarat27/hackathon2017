<template>
  <el-row :xs="24" v-if="display === 'Facebook'">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" >
      <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
         <el-menu-item index="0">{{ display }}</el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
  <el-row :xs="24" v-else-if="display !== 'Facebook'">
    <el-col :xs="12" :sm="11" :md="13" :lg="15" >
      <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" ><router-link to="/">Name : {{display}}</router-link></el-menu-item>
        <el-menu-item index="2" ><router-link to="/portfolio">Portfolio</router-link></el-menu-item>
        <el-menu-item index="3"><router-link to="/stocks">Stocks</router-link></el-menu-item>
      </el-menu>
    </el-col>
    <el-col :xs="12" :sm="13" :md="11" :lg="9">
      <el-menu theme="dark"  class="el-menu-demo" mode="horizontal" @select="handleSelect" >
          <el-menu-item index="4">End Day</el-menu-item>
          <el-submenu index="5">
            <template slot="title">Save & Load</template>
            <el-menu-item index="5-1">save data</el-menu-item>
            <el-menu-item index="5-2">load data</el-menu-item>
          </el-submenu>
          <el-menu-item index="6"><a href="/" target="_self">Funds: {{ funds | currency }}</a></el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
    import {firebase, provider ,db} from './../firebase/firebase'
    export default {
      data() {
        return {
          activeIndex: '1',
          display: 'Facebook'
        }
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
          if(key === '4'){
            this.endDay()
          } else if(key === '5-1') {
            this.saveData()
          } else if(key === '5-2') {
            this.loadData()
          } else if(key === '0') {
            this.facebook_signon()
          }
        },
        facebook_signon() {
          console.log(">>facebook_signon()")
          var vm = this
          firebase.auth().signInWithPopup(provider).then(function (accessFacebook) {
            var token = accessFacebook.credential.accessToken
            var user = accessFacebook.user // user.uid
            var profile = {
              name: accessFacebook.user.displayName
            }
            vm.$store.dispatch('setProfile',profile)
            vm.display = accessFacebook.user.displayName
          }).catch(function (response) {
            // error callback
            console.log(response)
          })
        },
        saveData() {
          const data = {
            funds: this.$store.getters.showFunds,
            stockportfolio: this.$store.getters.stockPortfolio,
            stocks: this.$store.getters.stocks,
          }
          this.$http.put(this.display+'.json',data)
        },
        loadData() {
          this.$store.dispatch('loadData',this.display)
          this.$router.push('/portfolio')
        },
        endDay() {
          return this.$store.dispatch('randomizeStocks')
        }
      },
      computed: {
        funds() {
          return this.$store.getters.showFunds
        }
      },
      creted() {
        var profile = this.$store.getters.showProfile
        if(typeof profile !== 'undefined'){
          this.display = profile.name
        }
      }
    }
</script>
<style scoped>

</style>
