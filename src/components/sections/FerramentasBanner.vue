<script setup lang="ts">
function scrollToFerramentas(): void {
  const el = document.getElementById('ferramentas')
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <section class="ferramentas-banner">
    <div class="ferramentas-banner__overlay"></div>
    <div class="ferramentas-banner__container">
      <div class="ferramentas-banner__text">
        <h2 class="ferramentas-banner__title">Seleção de Ferramentas</h2>
        <p class="ferramentas-banner__sub">
          Seja qual for o seu projeto, certamente, vai precisar de alguma.
        </p>
        <button class="ferramentas-banner__btn" @click="scrollToFerramentas">Ver ferramentas</button>
      </div>
      <div class="ferramentas-banner__img-wrap">
        <img
          src="/wp-content/uploads/2024/06/vonder_img.png"
          alt="Seleção de Ferramentas Vonder"
          loading="lazy"
          decoding="async"
          class="ferramentas-banner__img"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.ferramentas-banner {
  position: relative;
  background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
  overflow: hidden;
  padding: 3rem 0;
}
.ferramentas-banner__overlay {
  position: absolute;
  inset: 0;
  background-image:
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 20px,
      rgba(255,255,255,0.02) 20px,
      rgba(255,255,255,0.02) 40px
    );
  pointer-events: none;
}
.ferramentas-banner__container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;
}
.ferramentas-banner__text {
  flex: 1;
  color: #fff;
}
.ferramentas-banner__title {
  font-family: 'Bebas Neue', 'Impact', sans-serif;
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 400;
  letter-spacing: 0.05em;
  color: #f5a623;
  margin: 0 0 0.75rem;
}
.ferramentas-banner__sub {
  font-size: 1rem;
  color: rgba(255,255,255,0.8);
  line-height: 1.6;
  margin: 0 0 1.5rem;
}
.ferramentas-banner__btn {
  display: inline-block;
  background: #f5a623;
  color: #111827;
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-decoration: none;
  padding: 0.7rem 1.8rem;
  border-radius: 4px;
  transition: background 0.2s, transform 0.2s;
}
.ferramentas-banner__btn:hover {
  background: #e09010;
  transform: translateY(-2px);
}
.ferramentas-banner__img-wrap {
  flex: 1;
  display: flex;
  justify-content: center;
}
.ferramentas-banner__img {
  max-width: 100%;
  max-height: 280px;
  object-fit: contain;
  filter: drop-shadow(0 8px 20px rgba(0,0,0,0.5));
}
@media (max-width: 767px) {
  .ferramentas-banner__container {
    flex-direction: column;
    text-align: center;
  }
}
</style>
