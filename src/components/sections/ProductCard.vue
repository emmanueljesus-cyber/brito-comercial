<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Product } from '@/data/products'
import { cartStore } from '@/stores/cartStore'

defineProps<{
  product: Product
}>()
</script>

<template>
  <li class="product-card group relative">
    
    <!-- Área da Imagem + Botão Flutuante -->
    <div class="relative overflow-hidden bg-[#f9fafb]">
      <RouterLink :to="`/produto/${product.id}`" class="block p-4">
        <div class="aspect-square flex items-center justify-center overflow-hidden">
          <img
            :src="product.image"
            :alt="product.name"
            loading="lazy"
            decoding="async"
            class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </RouterLink>

      <!-- Botão Adicionar Rápido (Fixo no canto inferior direito) -->
      <button 
        class="absolute bottom-3 right-3 w-9 h-9 bg-[#1e3a5f] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:bg-[#f5a623] hover:text-[#1e3a5f] active:scale-95 z-20" 
        aria-label="Adicionar à lista"
        @click.stop="cartStore.add(product)"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" width="18" height="18" aria-hidden="true">
          <path d="M12 5v14M5 12h14"/>
        </svg>
      </button>
    </div>

    <!-- Info -->
    <RouterLink :to="`/produto/${product.id}`" class="flex-1 p-4 pt-2 flex flex-col items-center">
      <h2 class="text-[11px] font-medium text-gray-700 text-center leading-tight line-clamp-3 h-[3.3em] uppercase tracking-wider mb-2">
        {{ product.name }}
      </h2>
    </RouterLink>
    
    <!-- Botão Leia Mais (Full width na base) -->
    <RouterLink 
      :to="`/produto/${product.id}`" 
      class="block w-full bg-[#1e3a5f] text-white text-[10px] font-bold uppercase tracking-widest text-center py-2.5 transition-colors group-hover:bg-[#f5a623] group-hover:text-[#1e3a5f]"
    >
      Leia mais
    </RouterLink>

  </li>
</template>

<style scoped>
.product-card {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.2s, transform 0.2s;
  list-style: none;
}
.product-card:hover {
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  transform: translateY(-4px);
}

/* Feedback visual ao adicionar no mobile */
.product-card button:active {
  transform: scale(0.9);
}
</style>
