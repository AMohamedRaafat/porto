import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/porto',
      name: 'Home',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginPage.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/RegisterPage.vue')
    },
    {
      path: '/product/:id',
      name: 'Product Details',
      component: () => import('../views/ProductDetailsPage.vue')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../views/CartPage.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.name
  next()
})

export default router
