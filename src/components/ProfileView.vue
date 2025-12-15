<template>
  <div class="page profile">
    <h2>Личный кабинет</h2>
    <p>Привет, {{ user?.email }}!</p>
    <button @click="logout" class="button">Выйти</button>

    <h3 style="margin-top: 2rem;">Корзина</h3>
    <div v-if="cart.length === 0">
      Корзина пуста
    </div>
    <div v-else>
      <div v-for="item in cart" :key="item.id" class="cart-item">
        <span>{{ item.name }} × {{ item.quantity }}</span>
        <button @click="removeFromCart(item.id)" class="button">Удалить</button>
      </div>
      <button class="order-btn" @click="clearCart">Оформить заказ</button>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'
import { useRouter } from 'vue-router'

const store = inject('store')
const router = useRouter()

const cart = store.cart
const user = store.user

const logout = () => {
  store.setUser(null)
  router.push('/')
}

const removeFromCart = (id) => {
  store.removeFromCart(id)
}

const clearCart = () => {
  store.clearCart()
  alert('Заказ оформлен! Скоро с вами свяжемся.')
}
</script>

<style scoped>
.button{
  background: var(--primary);
  color: white;
  font-weight: 500;
  padding: 0.4rem 0.6rem;
  border-radius: 4px;
  transition: background 0.2s;
}
.profile {
  padding: 2rem;
}
.cart-item {
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 0;
  border-bottom: 1px solid #eee;
}
.order-btn {
  margin-top: 1rem;
  padding: 0.6rem 1.5rem;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 6px;
}
</style>