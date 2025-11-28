<template>
  <title>Продукция</title>
  <div class="page products">
    <h2>Наша продукция</h2>
    <div class="products-grid">
      <div
        class="product-card"
        @click="openModal('meat')"
        role="button"
        tabindex="0"
      >
        <div class="meat">
          <div class="product-img">🥩</div>
          <h3>Свежее мясо</h3>
          <p class="description">Высший сорт, без антибиотиков, от местных ферм.</p>
        </div>
      </div>
      <div
        class="product-card"
        @click="openModal('milk')"
        role="button"
        tabindex="0"
      >
        <div class="milk">
          <div class="product-img">🥛</div>
          <h3 class="mh3">Кисломолочные продукты</h3>
          <p class="mh3">Ряженка, йогурт, кефир — 100% натуральные.</p>
        </div>
      </div>
      <div
        class="product-card"
        @click="openModal('cheese')"
        role="button"
        tabindex="0"
      >
        <div class="cheese">
          <div class="product-img">🧀</div>
          <h3>Сыры ручной работы</h3>
          <p class="description">Твёрдые и мягкие сыры из коровьего и козьего молока.</p>
        </div>
      </div>
    </div>

    <Teleport to="body" v-if="activeModal">
      <div class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <h2>{{ modalTitle }}</h2>
          <div class="details-grid">
            <div
              v-for="(item, index) in currentDetails"
              :key="index"
              class="detail-card"
              :style="{ backgroundColor: item.color }"
            >
              <div class="product-img">
              <img :src="item.img" :alt="item.name" />
            </div>
              <h3 class="borderline">{{ item.name }}</h3>
              <p class="borderline">{{ item.desc }}</p>
            </div>
          </div>
          <button class="close-btn" @click="closeModal">✖</button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import beefImg from '../assets/beef.png'
import porkImg from '../assets/pig.png'
import chickenImg from '../assets/chicken.png'
import milkImg from '../assets/milk.png'
import yogurtImg from '../assets/yogurt.png'
import kefirImg from '../assets/kefir.png'
import cheese1 from '../assets/cheese1.png'
import cheese2 from '../assets/cheese2.png'
import cheese3 from '../assets/cheese3.png'
import { ref, computed } from 'vue'

const activeModal = ref(null)

const modalData = {
  meat: {
    title: 'Мясная продукция',
    items: [
      { img: beefImg, name: 'Говядина', desc: 'Мраморная, высший сорт', color: 'var(--chatbotback)' },
      { img: porkImg, name: 'Свинина', desc: 'Фермерская, без гормонов', color: 'var(--chatbotback)' },
      { img: chickenImg, name: 'Курица', desc: 'Домашняя, на зелёном корме', color: 'var(--chatbotback)'}
    ]
  },
  milk: {
    title: 'Кисломолочные продукты',
    items: [
      { img:milkImg, name: 'Свежее молоко', desc: 'Пастеризованное, 3.2%' },
      { img:yogurtImg, name: 'Натуральный йогурт', desc: 'Без сахара и добавок'},
      { img:kefirImg, name: 'Кефир', desc: '1% и 3.2%, на закваске' }
    ]
  },
  cheese: {
    title: 'Сыры',
    items: [
      { img:cheese1, name: 'Твёрдый сыр', desc: 'Из коровьего молока', color: 'var(--secondary)' },
      { img:cheese2, name: 'Мягкий сыр', desc: 'С плесенью или без',  color: 'var(--secondary)'  },
      { img:cheese3, name: 'Сыр из козьего молока', desc: 'Ручная работа',  color: 'var(--secondary)'  }
    ]
  }
}

const modalTitle = computed(() => {
  return activeModal.value ? modalData[activeModal.value].title : ''
})

const currentDetails = computed(() => {
  return activeModal.value ? modalData[activeModal.value].items : []
})

function openModal(type) {
  activeModal.value = type
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  activeModal.value = null
  document.body.style.overflow = ''
}
</script>

<style scoped>

.product-img img {
  width: 120px;
  height: 120px;
  object-fit: contain;
  display: block;
  margin: 0 auto 1rem;
}

.borderline{
  color: var(--background)
}

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
  cursor: pointer; 
  transition: transform 0.2s;
}
.product-card:hover {
  transform: translateY(-4px);
}
.product-img {
  font-size: 3rem;
  margin-bottom: 1rem;
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

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}
.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  width: 90%;
  max-width: 700px;
  position: relative;
}
.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.2rem;
  margin-top: 1.5rem;
}
.detail-card {
  padding: 1.2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  transition: transform 0.2s;
}

.detail-card:hover {
  transform: translateY(-2px);
}

.detail-card--meat {
  background: #FFF5F5;
  border-top: 4px solid #FF6B6B;
}

.detail-card--milk {
  background: #F0F9FF;
  border-top: 4px solid #4FC3F7;
}

.detail-card--cheese {
  background: #FFF8E1;
  border-top: 4px solid #FFB300;
}
.detail-card .product-img {
  font-size: 2.5rem;
  margin-bottom: 0.8rem;
}
.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;
  color: #999;
}
.close-btn:hover {
  color: #333;
}
</style>