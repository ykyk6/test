/* eslint-disable prettier/prettier */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'


// function toLikeProducts(to, from, next) {
//   const user_mail = sessionStorage.getItem('userinfo')
//   if (!user_mail) {
//     next({ name: 'Login' })
//   } else {
//     next()
//   }
// }
const routes: Array<RouteRecordRaw> = [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: '/shopping',
      name: 'Shopping',
      component: () =>
      import(/* webpackChunkName: "shopping" */'../views/Shopping/components/ShoppingPage.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () =>
      import(/* webpackChunkName: "login" */'../views/Login/components/LoginPage.vue')
    },
    {
      path: '/product/:product_id',
      name: 'Product',
      component: () =>
      import(/* webpackChunkName: "product" */'@/components/shop/ProductPage/ProductPage.vue'),

    },
    {
      path: '/cart',
      name: 'Cart',
      component: () =>
      import(/* webpackChunkName: "cart" */'@/views/Shopping/components/ShoppingCart.vue')
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: () =>
      import(/* webpackChunkName: "checkout" */'@/views/Shopping/components/CheckOut.vue')
    },
    {
      path: '/member',
      name: 'Member',
      component: () =>
      import(/* webpackChunkName: "member" */'../views/MemberPage.vue')
    },
    {
      path: '/test',
      name: 'Test',
      component: () =>
      import(/* webpackChunkName: "member" */'@/components/shop/ShopRanking.vue')
    },
    {
      path: '/orderCompleteDetail',
      name: 'OrderCompleteDetail',
      component: () =>
      import(/* webpackChunkName: "checkout" */'@/views/Shopping/components/OrderCompleteDetail.vue')
    },
    {
      path: '/likeProducts',
      name: 'LikeProducts',
      component: () =>
      import(/* webpackChunkName: "checkout" */'@/components/MemberPage/LikeProducts.vue')
      // beforeEnter: (to, from, next) => {
      //   const user_mail = sessionStorage.getItem('userinfo')
      //   if (!user_mail) {
      //     next({ name: 'Login' })
      //   } else {
      //      next()
      //     }
      //  }
    },
    {
      path: '/orderHistory',
      name: 'OrderHistory',
      component: () =>
      import(/* webpackChunkName: "checkout" */'@/components/MemberPage/OrderHistory.vue')
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
