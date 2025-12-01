<template>

  <title>Главная</title>
  <div class="hero-section">
    <div class="hero-content">
      <h1>Натуральные продукты из сердца природы</h1>
      <p class="text">Мясо, кисломолочная продукция и сыры — свежие, экологичные, вкусные.</p>
      <router-link to="/products" class="btn">Смотреть товары</router-link>
    </div>
  </div>

  <div class="why-us-section">
    <h2 class="description">Почему мы?</h2>
    <div class="why-us-grid">
      <div class="why-card">
        <h3>Местное производство</h3>
        <p>Все наши продукты производятся на фермах Владимирской области. Мы знаем каждого фермера и контролируем весь процесс — от корма до доставки.</p>
      </div>
      <div class="why-card">
        <h3>Натуральные продукты</h3>
        <p>Без антибиотиков, гормонов, консервантов и искусственных добавок. Только натуральное молоко, мясо и сыр — как у бабушки.</p>
      </div>
      <div class="why-card">
        <h3>С заботой о природе</h3>
        <p>Мы используем экологичную упаковку, перерабатываем отходы и заботимся о благополучии животных. Наша философия — жить в гармонии с природой.</p>
      </div>
    </div>
  </div>

  <div class="mascot-section">
    <div class="mascot-placeholder">
      Наш маскот
      <img src="/public/mascot.svg" alt="Маскот ЖивДвор" />
    </div>
  </div>

</template>

<script setup>
</script>

<style scoped>

.why-us-section {
  padding: 4rem 2rem;
}

.why-us-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.why-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px var(--shadow);
  text-align: center;
  transition: transform 0.2s;
}

.why-card:hover {
  transform: translateY(-4px);
}

.why-card h3 {
  color: var(--primary);
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.why-card p {
  color: var(--background);
  line-height: 1.6;
  margin: 0;
}

.description{
  text-align: center;
  font-size: 4rem;
  color: var(--primary);
  padding: 16px;
}
.hero-section {
  background-image: url('../assets/homepage.png'); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 2rem;
  color: white;
  text-align: center;
}

.hero-content {
  background: var(--background);
  /* background: rgba(0, 0, 0, 0.55); */
  padding: 2.5rem;
  border-radius: 16px;
  max-width: 800px;
  backdrop-filter: blur(2px);
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 0 2px 4px rgba(0,0,0,0.4);
}

.text {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.95);
}

.btn {
  display: inline-block;
  padding: 0.8rem 2rem;
  background: var(--primary);
  color: white;
  border-radius: 30px;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.3s;
}

.btn:hover {
  background: #388E3C;
}

.mascot-section {
  padding: 3rem 2rem;
  text-align: center;
}

.mascot-placeholder {
  text-align: center;
  font-size: 4rem;
  color: var(--text);
}


/* .mascot-placeholder img {
  width: 120px;
  height: auto;
  display: block;
  margin: 0 auto;
} */
</style>