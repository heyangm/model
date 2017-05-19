import Vue from 'vue'
import Router from 'vue-router'
import productList from '@/components/productList'
import productDetail from '@/components/productDetail'
import Cart from '@/components/Cart'
import address from '@/components/address'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'productList',
      component: productList
    },
    {
    	path: '/productDetail',
      name: 'productDetail',
      component: productDetail
    },
    {
    	path: '/Cart',
      name: 'Cart',
      component: Cart
    },
    {
    	path: '/address',
      name: 'address',
      component: address
    }
  ]
})
