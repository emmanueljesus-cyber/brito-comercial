<script setup lang="ts">
import type { Product } from '@/data/products'
import ProductCard from './ProductCard.vue'

interface Props {
  title: string
  products: Product[]
  bg?: 'white' | 'gray'
  id?: string
}

const props = withDefaults(defineProps<Props>(), {
  bg: 'white',
})

function scrollToSelf(): void {
  if (!props.id) return
  const el = document.getElementById(props.id)
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <section
    :id="id"
    class="product-section"
    :class="bg === 'gray' ? 'product-section--gray' : ''"
  >
    <div class="product-section__container">
      <div class="product-section__header">
        <h2 class="product-section__title">{{ title }}</h2>
        <button class="product-section__more" @click="scrollToSelf">Ver mais</button>
      </div>

      <ul class="product-section__grid">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </ul>
    </div>
  </section>
</template>

<style scoped>
.product-section {
  padding: 2rem 0;
  background: #fff;
}
.product-section--gray {
  background: #f3f4f6;
}
.product-section__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
.product-section__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  border-bottom: 3px solid #1e3a5f;
  padding-bottom: 0.5rem;
}
.product-section__title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e3a5f;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 0;
}
.product-section__more {
  font-size: 0.8rem;
  color: #1e3a5f;
  font-weight: 600;
  text-decoration: none;
  border: 2px solid #1e3a5f;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  transition: background 0.2s, color 0.2s;
  background: transparent;
  cursor: pointer;
}
.product-section__more:hover {
  background: #1e3a5f;
  color: #fff;
}
.product-section__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 0;
  margin: 0;
  list-style: none;
}
@media (min-width: 480px) {
  .product-section__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 768px) {
  .product-section__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (min-width: 1024px) {
  .product-section__grid {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
