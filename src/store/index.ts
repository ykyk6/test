/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore } from 'vuex'
// import { IRootState } from './type'
import LoginModule from './login'

interface IRootState {
  mail?: string
  password?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cartItem1: any
  OrderDetail?: any
}

const store = createStore<IRootState>({
  state() {
    return {
      // mail: '',
      // password: '',
      cartItem1: [],
      OrderDetail: {}
    }
  },
  getters: {
    TotalPrice(state) {
      let sum = 0
      if (state.cartItem1.length !== 0) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        state.cartItem1.forEach((item: any) => {
          sum += item.price * item.quantity
        })
      }
      return sum
    },
    ShippingFee(state, getters) {
      const Shipping = 350
      const Free = 0
      if (getters.TotalPrice > 5000) {
        return Free
      } else {
        return Shipping
      }
    }
  },
  mutations: {
    addCart(state, data) {
      const originalProduct = state.cartItem1.find((item: any) => {
        return item._id === data._id && item.color === data.color
      })
      if (originalProduct) {
        const index = state.cartItem1.indexOf(originalProduct)
        state.cartItem1[index].quantity += data.quantity
      } else {
        state.cartItem1.push(data)
        localStorage.setItem('cartItems', JSON.stringify(state.cartItem1))
        console.log(state.cartItem1)
      }
    },
    deleteCart(state, data) {
      const index = state.cartItem1.indexOf(data)
      state.cartItem1.splice(index, 1)
      localStorage.setItem('cartItems', JSON.stringify(state.cartItem1))
    },
    setCart(state, data) {
      state.cartItem1 = data
    },
    orderDetail(state, data) {
      state.OrderDetail = data
      state.cartItem1 = ''
      localStorage.removeItem('cartItems')
    }
  },
  actions: {
    CartLocalStorage({ commit }) {
      const LocalCart = localStorage.getItem('cartItems')
      if (LocalCart) {
        commit('setCart', JSON.parse(LocalCart))
      }
    }
  },
  modules: {
    LoginModule
  }
})
export function setupStore() {
  store.dispatch('LoginModule/LoadSessionLogin')
}
export function setupStoreCart() {
  store.dispatch('CartLocalStorage')
}
export default store
