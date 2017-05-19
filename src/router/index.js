import Vue from 'vue'
import Router from 'vue-router'
import productList from '@/components/productList'
import productDetail from '@/components/productDetail'

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
    }
  ]
})
