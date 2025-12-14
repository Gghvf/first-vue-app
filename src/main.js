import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'


import HomeView from './components/HomeView.vue'
import ProductsView from './components/ProductsView.vue'
import ContactsView from './components/ContactsView.vue'
import ProfileView from './components/ProfileView.vue' // ← новый компонент

const routes = [
  { path: '/', component: HomeView },
  { path: '/products', component: ProductsView },
  { path: '/contacts', component: ContactsView },
  { path: '/profile', component: ProfileView }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// Глобальное простое хранилище (реактивное)
const cart = JSON.parse(localStorage.getItem('cart')) || []
const user = JSON.parse(localStorage.getItem('user')) || null

const store = {
  cart,
  user,
  setUser(newUser) {
    this.user = newUser
    localStorage.setItem('user', JSON.stringify(newUser))
  },
  addToCart(product) {
    const existing = this.cart.find(item => item.id === product.id)
    if (existing) {
      existing.quantity++
    } else {
      this.cart.push({ ...product, quantity: 1 })
    }
    localStorage.setItem('cart', JSON.stringify(this.cart))
  },
  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.id !== productId)
    localStorage.setItem('cart', JSON.stringify(this.cart))
  },
  clearCart() {
    this.cart = []
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }
}

const app = createApp(App)
app.use(router)
app.provide('store', store) // доступно во всех компонентах через inject
app.config.globalProperties.$store = store // альтернатива
app.mount('#app')