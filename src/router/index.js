import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import Ad from '@/components/Ads/Ad'
import AdList from '@/components/Ads/AdList'
import NewAd from '@/components/Ads/NewAd'
import Orders from '@/components/User/Orders'
import AuthGuard from './auth-guard'


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/registration',
    name: 'reg',
    component: Registration
  },
  {
    path: '/ad/:id',
    props: true,
    name: 'ad',
    component: Ad
  },
  {
    path: '/list',
    name: 'list',
    component: AdList,
    beforeEnter: AuthGuard
  },
  {
    path: '/new',
    name: 'newAd',
    component: NewAd,
    beforeEnter: AuthGuard
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders,
    beforeEnter: AuthGuard
  }

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
