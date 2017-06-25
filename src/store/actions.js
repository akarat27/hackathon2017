import Vue from 'vue'

export const loadData = function({commit} ,name) {
  Vue.http.get(name+'.json')
    .then(function (response){
      // console.log(response.json())
      return response.json()
    }).then(function (data){
      if(data) {
        const stocks = data.stocks
        const funds = data.funds
        const stockportfolio = data.stockportfolio
        const portfolio = {
          stockportfolio,
          funds
        }
        commit('SET_STOCKS', stocks);
        commit('SET_PORTFOLIO', portfolio);
      }
    })
}
