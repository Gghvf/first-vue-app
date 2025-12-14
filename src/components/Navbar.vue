<!-- src/Navbar.vue -->
<template>
  <nav class="navbar">
    <div class="logo-container">
      <img src="/public/logo.svg" class="logo-img" />
      <div class="logo">ЖивДвор</div>
    </div>
    <ul class="nav-links">
      <li><router-link to="/">Главная</router-link></li>
      <li><router-link to="/products">Товары</router-link></li>
      <li><router-link to="/contacts">Контакты</router-link></li>
    </ul>
    <div class="auth-actions">
      <!-- Кнопка корзины (всегда видна) -->
      <button class="cart-btn" @click="$router.push('/profile?tab=cart')">
        🛒 ({{ cart.length }})
      </button>
      <!-- Кнопка профиля -->
      <button v-if="user" class="profile-btn" @click="$router.push('/profile')">
        👤 {{ user.email }}
      </button>
      <button v-else class="login-btn" @click="showLogin = true">
        Войти
      </button>
    </div>

    <!-- Модальное окно входа/регистрации -->
    <Teleport to="body" v-if="showLogin">
      <div class="modal-overlay" @click="closeModal">
        <div class="auth-modal" @click.stop>
          <h3>{{ isRegister ? 'Регистрация' : 'Вход' }}</h3>
          <form @submit.prevent="handleSubmit">
            <input v-model="form.email" type="email" placeholder="Email" required />
            <input v-model="form.password" type="password" placeholder="Пароль" required />
            <label v-if="!isRegister">
              <input type="checkbox" v-model="agreed" required />
              <div class="text">Согласен на обработку персональных данных</div>
            </label>
            <button type="submit" class="auth-btn">
              {{ isRegister ? 'Зарегистрироваться' : 'Войти' }}
            </button>
          </form>
          <p class="toggle-form" @click="toggleForm">
            {{ isRegister ? 'Уже есть аккаунт? Войти' : 'Нет аккаунта? Зарегистрироваться' }}
          </p>
          <button class="close-modal" @click="closeModal">✖</button>
        </div>
      </div>
    </Teleport>
  </nav>
</template>

<script setup>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'

const store = inject('store')
const router = useRouter()

const showLogin = ref(false)
const isRegister = ref(false)
const form = ref({ email: '', password: '' })
const agreed = ref(false)

const closeModal = () => {
  showLogin.value = false
  isRegister.value = false
  form.value = { email: '', password: '' }
  agreed.value = false
}

const toggleForm = () => {
  isRegister.value = !isRegister.value
  agreed.value = false
}

const handleSubmit = () => {
  if (!isRegister.value && !agreed.value) {
    alert('Пожалуйста, примите соглашение')
    return
  }

  if (isRegister.value) {
    // Простая регистрация: сохраняем первого пользователя
    const newUser = { email: form.value.email }
    store.setUser(newUser)
    closeModal()
    router.push('/profile')
  } else {
    // Простой вход: проверяем email (пароль игнорируем для демо)
    if (form.value.email) {
      store.setUser({ email: form.value.email })
      closeModal()
      router.push('/profile')
    }
  }
}

// Доступ к корзине и пользователю
const cart = store.cart
const user = store.user
</script>

<style scoped>
.text{
  color: #121212;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #121212;
  box-shadow: 0 2px 8px var(--shadow);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 8px; 
}

.logo-img {
  align-items: left;
  height: 100px;        
  width: auto;         
  object-fit: contain; 
}

.logo {
  font-family: Segoe Script;
  align-items: left;
  font-size: 2rem;
  font-weight: bold;
  color: var(--primary);
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
}

.nav-links a {
  font-weight: 500;
  padding: 0.4rem 0.6rem;
  border-radius: 4px;
  transition: background 0.2s;
}

.nav-links a:hover {
  background: var(--primary);
  color: white;
}

.auth-actions {
  display: flex;
  gap: 12px;
  align-items: center;
}
.cart-btn, .login-btn, .profile-btn {
  background: var(--primary);
  color: white;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
}
.cart-btn {
  position: relative;
}
.modal-overlay {
  position: fixed;
  top: 0; left: 0; width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}
.auth-modal {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  position: relative;
}
.auth-modal input {
  width: 100%;
  padding: 0.6rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.auth-btn {
  width: 100%;
  padding: 0.7rem;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 6px;
  margin-top: 1rem;
}
.toggle-form {
  text-align: center;
  margin-top: 1rem;
  color: var(--primary);
  cursor: pointer;
}
.close-modal {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}
</style>