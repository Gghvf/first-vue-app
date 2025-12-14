<template>
  <title>Продукция</title>
  <div class="page products">
    <h2>Наша продукция</h2>
    <div class="products-grid">
      <div class="product-card">
        <div class="meat">
          <img src="../assets/meat.png" class="img" />
          <h3>Свежее мясо</h3>
          <p class="description">Высший сорт, без антибиотиков, от местных ферм.</p>
          <button class="add-to-cart" @click="() => addToCart({ id: 1, name: 'Свежее мясо' })">
            В корзину
          </button>
        </div>
      </div>
      <div class="product-card">
        <div class="milk">
          <img src="../assets/moloko.jpg" class="img" />
          <h3 class="mh3">Кисломолочные продукты</h3>
          <p class="mh3">Ряженка, йогурт, кефир — 100% натуральные.</p>
          <button class="add-to-cart" @click="() => addToCart({ id: 2, name: 'Кисломолочные продукты' })">
            В корзину
          </button>
        </div>
      </div>
      <div class="product-card">
        <div class="cheese">
          <img src="../assets/cheeses.jpg" class="img" />
          <h3>Сыры ручной работы</h3>
          <p class="description">Твёрдые и мягкие сыры из коровьего и козьего молока.</p>
          <button class="add-to-cart" @click="() => addToCart({ id: 3, name: 'Сыры ручной работы' })">
            В корзину
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const store = inject('store')
const addToCart = (product) => {
  store.addToCart(product)
  alert('Добавлено в корзину!')
}
</script>

<style scoped>
.description {
  color: var(--text) !important;
}
.meat {
  background-color: var(--chatbotback);
  border-radius: 12px;
  padding: 1.5rem;
}
.milk {
  background-color: white;
  border-radius: 12px;
  padding: 1.5rem;
}
.cheese {
  background-color: var(--secondary);
  border-radius: 12px;
  padding: 1.5rem;
}
.products h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--primary);
}
.products-grid {
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}
.product-card {
  border-radius: 12px;
  box-shadow: 0 4px 12px var(--shadow);
  text-align: center;
}
.img {
  width: 240px;
  height: 240px;
  border-radius: 16px;
  object-fit: contain;
  display: block;
  margin: 0 auto 1rem;
}
.product-card h3 {
  margin-bottom: 0.8rem;
  color: var(--text);
}
.mh3 {
  color: black !important;
}
.product-card p {
  color: #666;
  line-height: 1.5;
}
.add-to-cart {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.add-to-cart:hover {
  opacity: 0.9;
}
</style>