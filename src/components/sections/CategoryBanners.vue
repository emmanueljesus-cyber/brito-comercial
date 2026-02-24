<script setup lang="ts">
interface CategoryBanner {
  image: string
  label: string
  sectionId: string
}

defineProps<{
  banners: CategoryBanner[]
}>()

function scrollToSection(id: string): void {
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <section class="cat-banners">
    <div class="cat-banners__container">
      <div class="cat-banners__grid">
        <a
          v-for="(banner, i) in banners"
          :key="i"
          href="javascript:void(0)"
          class="cat-banners__item"
          @click="scrollToSection(banner.sectionId)"
        >
          <img
            :src="banner.image"
            :alt="banner.label"
            loading="lazy"
            decoding="async"
            class="cat-banners__img"
          />
          <div class="cat-banners__overlay">
            <span class="cat-banners__label">{{ banner.label }}</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cat-banners {
  background: #f3f4f6;
  padding: 1rem 0;
}
.cat-banners__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
.cat-banners__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.cat-banners__item {
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 6px;
}
.cat-banners__item:hover .cat-banners__img {
  transform: scale(1.04);
}
.cat-banners__img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s;
}
.cat-banners__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: flex-end;
  padding: 0.75rem;
  pointer-events: none;
}
.cat-banners__label {
  color: #fff;
  font-size: 0.95rem;
  font-weight: 700;
  text-shadow: 0 1px 4px rgba(0,0,0,0.6);
  background: rgba(30,58,95,0.7);
  padding: 0.25rem 0.6rem;
  border-radius: 3px;
}
@media (max-width: 600px) {
  .cat-banners__grid {
    grid-template-columns: 1fr;
  }
}
</style>
