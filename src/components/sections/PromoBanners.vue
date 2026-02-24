<script setup lang="ts">
interface Banner {
  image: string
  alt: string
  link: string
}

defineProps<{
  banners: [Banner, Banner]
}>()
</script>

<template>
  <section class="promo-banners">
    <div class="promo-banners__container">
      <div class="promo-banners__grid">
        <a
          v-for="(banner, i) in banners"
          :key="i"
          :href="banner.link"
          class="promo-banners__item"
        >
          <img
            :src="banner.image"
            :alt="banner.alt"
            loading="lazy"
            decoding="async"
            class="promo-banners__img"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.promo-banners {
  background: #fff;
  padding: 1rem 0;
}
.promo-banners__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
.promo-banners__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.promo-banners__item {
  display: block;
  overflow: hidden;
  border-radius: 6px;
  transition: transform 0.2s, box-shadow 0.2s;
}
.promo-banners__item:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}
.promo-banners__img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}
@media (max-width: 600px) {
  .promo-banners__grid {
    grid-template-columns: 1fr;
  }
}
</style>
