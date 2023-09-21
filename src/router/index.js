import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: {name: 'userInfo'},
    component: () => import('@/Layout/main.vue'),
    children: [
      {
        path: '/user',
        name: 'userInfo',
        component: () => import('@/pages/select-type.vue'),
      },      
    ]
  },
  {
    path: '/exportWord2',
    name: 'exportWord2',
    component: () => import('@/components/export-word2.vue'),  
  },
  {
    path: '/seuif97',
    name: 'seuif97',
    component: () => import('@/components/seuif97.vue'),  
  },

  // 404 page must be placed at the end !!!
  // { path: '*', redirect: '/404', hidden: true }
]

const router = new Router({
  routes
})

export default router