import Vue from 'vue'
import Router from 'vue-router'
import rankingRouter from './ranking'
import recommendRouter from './recommend'
import singerRouter from './singer'
import detailRoter from './detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    rankingRouter,
    recommendRouter,
    singerRouter,
    detailRoter,
    {
      path: '/*',
      redirect: '/recommend'
    }
  ]
})




