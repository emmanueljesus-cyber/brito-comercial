<script setup lang="ts">
// HeroSection: texto à esquerda + imagem de produto à direita
// Imagem real: wp-content/uploads/2025/05/ac3-1.png (servida via publicDir)
</script>

<template>
  <section class="hero">
    <div class="hero__bg"></div>
    <div class="hero__container">
      <!-- Texto -->
      <div class="hero__text" data-aos="fade-right">
        <h1 class="hero__title">
          Bem-vindo à<br />
          <span class="hero__brand">Brito Comercial</span>
        </h1>
        <p class="hero__subtitle">
          Com larga experiência em distribuição e logística. Valorizamos a
          parceria com nossos clientes e nosso time.
        </p>
        <a href="#" class="hero__cta">Compre aqui</a>
      </div>

      <!-- Imagem produto -->
      <div class="hero__image-wrap" data-aos="fade-left">
        <img
          src="/wp-content/uploads/2025/05/ac3-1.png"
          alt="Produtos Brito Comercial"
          class="hero__image"
          fetchpriority="high"
          decoding="async"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  background: linear-gradient(135deg, #0d2137 0%, #1e3a5f 60%, #163356 100%);
  overflow: hidden;
  min-height: 420px;
  display: flex;
  align-items: center;
}
.hero__bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      ellipse at 80% 50%,
      rgba(245, 166, 35, 0.12) 0%,
      transparent 60%
    ),
    radial-gradient(
      ellipse at 20% 80%,
      rgba(34, 197, 94, 0.08) 0%,
      transparent 50%
    );
  pointer-events: none;
}
.hero__container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;
}
.hero__text {
  flex: 1;
  color: #fff;
}
.hero__title {
  font-family: "Bebas Neue", "Impact", sans-serif;
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  line-height: 1.1;
  font-weight: 400;
  color: #fff;
  margin: 0 0 1rem;
  letter-spacing: 0.02em;
}
.hero__brand {
  color: #f5a623;
  display: block;
}
.hero__subtitle {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
  margin: 0 0 1.5rem;
  max-width: 420px;
}
.hero__cta {
  display: inline-block;
  background: #f5a623;
  color: #1e3a5f;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0.75rem 2rem;
  border-radius: 4px;
  transition:
    background 0.2s,
    transform 0.2s;
}
.hero__cta:hover {
  background: #e09010;
  transform: translateY(-2px);
}
.hero__image-wrap {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero__image {
  max-width: 100%;
  max-height: 360px;
  object-fit: contain;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.4));
}
@media (max-width: 767px) {
  .hero__container {
    flex-direction: column-reverse;
    text-align: center;
  }
  .hero__subtitle {
    margin-left: auto;
    margin-right: auto;
  }
  .hero__image {
    max-height: 220px;
  }
}
</style>
