import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    products:[
      {name: 'Glass Jar', price: 10, category: 'Jars' },
      {name: 'Plastic Jar', price: 5, category: 'Jars'},
      {name: 'Plastic Jug', price: 15, category: 'Jugs'},
      {name: 'Glass Jug', price: 25, category: 'Jugs'},
      {name: 'Gold Jar', price: 50, category: 'Jars'},
    ]
  },
  getters: {
    saleProducts: state => {
      let saleProducts = state.products.map(product => {
        return {
          name: '**'+product.name+'**',
          price: product.price / 2
        }
      })
      return saleProducts
    }
  }
})
