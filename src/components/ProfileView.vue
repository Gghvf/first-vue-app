<!-- src/ProfileView.vue -->
<template>
  <div class="page profile">
    <h2>Личный кабинет</h2>
    <p v-if="user">Привет, {{ user.email }}!</p>
    <button v-if="user" @click="logout">Выйти</button>
    <p v-else>Вы не вошли в систему.</p>

    <h3 style="margin-top: 2rem;">Корзина</h3>
    <div v-if="cart.length === 0">
      Корзина пуста
    </div>
    <div v-else>
      <div v-for="item in cart" :key="item.id" class="cart-item">
        <div class="item-info">
          <img :src="item.img" class="cart-img" />
          <div class="item-text">
            <h4>{{ item.name }}</h4>
            <!-- Отображение количества в зависимости от категории -->
            <p v-if="item.category === 'milk'">
              <span v-if="item.liters">{{ item.liters }} л</span>
              <span v-if="item.bottles"> ({{ item.bottles }} бут.)</span>
            </p>
            <p v-else>
              {{ item.grams }} г
            </p>
          </div>
        </div>
        <button @click="removeFromCart(item.id)">Удалить</button>
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
.profile {
  padding: 2rem;
}
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0;
  border-bottom: 1px solid #eee;
}
.item-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.cart-img {
  width: 50px;
  height: 50px;
  object-fit: contain;
  border-radius: 6px;
}
.item-text h4 {
  margin: 0;
  font-size: 1rem;
}
.item-text p {
  margin: 0.2rem 0 0;
  font-size: 0.9rem;
  color: #666;
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
