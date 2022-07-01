import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore, setupStoreCart } from './store'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import 'aos/dist/aos.css'
// import axios from 'axios'

const app = createApp(App)
app.use(Quasar, quasarUserOptions)
app.use(VueSweetalert2)
app.use(store)
setupStore()
setupStoreCart()
app.use(router)
app.mount('#app')

// const $q = useQuasar()
// axios.interceptors.request.use((config) => {
//   console.log(config)
//   console.log('inteceptors')

// setTimeout(() => {
//   $q.loading.show()
// }, 5000)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const promise = new Promise<any>(function (resolveParam) {
//   resolveParam
// })
// promise.then(() => $q.loading.show()).then(() => console.log('123'))
// return config
// })

// axios.interceptors.response.use((res) => {
//   console.log(res)
//   $q.loading.hide()
//   return res
// })

// router.beforeEach((to, from, next) => {
//   const user_mail = sessionStorage.getItem('userinfo')
//   if (to.name === 'LikeProducts' && !user_mail) {
//     next({ name: 'Login' })
//   }
// })

// router.beforeEach((to, from, next) => {
//   const user_mail = sessionStorage.getItem('userinfo')
//   if (to.name === 'OrderHistory' && !user_mail) {
//     next({ name: 'Login' })
//   } else {
//     next()
//   }
// })
