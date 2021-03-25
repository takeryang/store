import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'*',
    redirect:'/login'
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=>import('../views/Login.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: ()=>import('../views/DashBoard.vue'),
    meta: { requiresAuth: true },
    children:[
      {
        path: 'products',
        name: 'Products',
        component: ()=>import('../components/Products.vue'),
        meta: { requiresAuth: true },
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
