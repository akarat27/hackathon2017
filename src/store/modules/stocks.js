import stocks from '../../data/stocks'

const state = {
  stocks: []
}

const mutations = {
  'SET_STOCKS' (state, stocks) {
    state.stocks = stocks
  },
  'RND_STOCKS' (state) {
    console.log('call RND_STOCKS')
    state.stocks.forEach(function (stock) {
      const randPrice = Math.round(_.split(stock.price, ',', 5)[3] * ( 1 + Math.random() - 0.5))
      stock.price = _.split(stock.price, ',', 5)[0] + ',' + _.split(stock.price, ',', 5)[1] + ',' + _.split(stock.price, ',', 5)[2]  + ',' + randPrice + ',' + _.split(stock.price, ',', 5)[4]
      // console.log( stock.name + ' , ' + stock.price)
    })
  }
}

const actions = {
  buyStock: function({commit}, order){
    commit('BUY_STOCK' ,order)
  },
  initStocks: function({commit}){
    commit('SET_STOCKS',stocks)
  },
  randomizeStocks: function({commit}) {
    console.log('call randomizeStocks')
    commit('RND_STOCKS')
  }
}

const getters = {
  stocks: function(state) {
    return state.stocks
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
