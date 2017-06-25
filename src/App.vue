<template>
  <div id="app">
    <div class="container">
      <app-header v-show="typeof profile !== 'undefined'"></app-header>
      <el-row>
        <el-col :xs="24" >
          <transition name="slide" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  export default {
    name: 'app',
    data() {
      return {
        profile: {}
      }
    },
    components: {
      appHeader: Header
    },
    created: function () {
      this.profile = this.$store.getters.showProfile
      this.$store.dispatch('initStocks')
    }
  }
</script>

<style>
  body {
    margin: 0;
    padding: 30px;
  }
  .slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
  }

  .slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
  }

  @keyframes slide-in {
    from {
      tranform: translateY(-30px);
      opacity: 0;
    }
    to {
      tranform: translateY(0px);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    from {
      tranform: translateY(0px);
      opacity: 1;
    }
    to {
      tranform: translateY(-30px);
      opacity: 0;
    }
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  main {
    text-align: center;
    margin-top: 40px;
  }

  header {
    margin: 0;
    height: 56px;
    padding: 0 16px 0 24px;
    background-color: #4fc08d;
    color: #ffffff;
  }

  header span {
    display: block;
    position: relative;
    font-size: 20px;
    line-height: 1;
    letter-spacing: .02em;
    font-weight: 400;
    box-sizing: border-box;
    padding-top: 16px;
  }
</style>
