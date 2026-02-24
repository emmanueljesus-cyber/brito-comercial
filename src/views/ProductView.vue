<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { findProductById, getRelatedProducts } from '@/data/products'
import type { Product } from '@/data/products'
import ProductCard from '@/components/sections/ProductCard.vue'
import { cartStore } from '@/stores/cartStore'

const route = useRoute()
const productId = computed(() => Number(route.params.id))

const product = computed<Product | undefined>(() => findProductById(productId.value))

const related = computed<Product[]>(() =>
  product.value ? getRelatedProducts(product.value, 4) : [],
)

const added = ref(false)

const WA_P1 = '5573981019260'
const WA_P2 = '5573982361945'

function addToCart(): void {
  if (!product.value) return
  cartStore.add(product.value)
  added.value = true
  setTimeout(() => { added.value = false }, 2000)
}
</script>

<template>
  <div v-if="product" class="product-page">
    <!-- Breadcrumb -->
    <div class="breadcrumb">
      <div class="breadcrumb__inner">
        <RouterLink to="/" class="breadcrumb__link">Início</RouterLink>
        <span class="breadcrumb__sep">›</span>
        <span v-if="product.category" class="breadcrumb__link">{{ product.category }}</span>
        <span v-if="product.category" class="breadcrumb__sep">›</span>
        <span class="breadcrumb__current">{{ product.name }}</span>
      </div>
    </div>

    <!-- Hero do produto -->
    <div class="product-hero">
      <div class="product-hero__container">
        <!-- Imagem -->
        <div class="product-hero__gallery">
          <div class="product-hero__img-wrap">
            <img
              :src="product.image"
              :alt="product.name"
              class="product-hero__img"
              decoding="async"
            />
          </div>
        </div>

        <!-- Detalhes -->
        <div class="product-hero__details">
          <h1 class="product-hero__title">{{ product.name }}</h1>

          <div class="product-hero__meta">
            <span class="product-hero__label">Categorias:</span>
            <RouterLink to="/" class="product-hero__cat">{{ product.category ?? 'Geral' }}</RouterLink>
          </div>

          <div class="product-hero__share">
            <span class="product-hero__label">Share Tag:</span>
            <div class="product-hero__share-icons">
              <a href="#" class="share-icon share-icon--blue" aria-label="Compartilhar no Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
              </a>
              <a href="#" class="share-icon share-icon--sky" aria-label="Compartilhar no Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
              </a>
              <a :href="`https://wa.me/${WA_P1}`" target="_blank" rel="noopener noreferrer" class="share-icon share-icon--green" aria-label="Compartilhar no WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

          <!-- Descrição -->
          <p v-if="product.description" class="product-hero__desc">
            {{ product.description }}
          </p>

          <!-- Badges -->
          <div class="product-hero__badges">
            <div class="product-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              <div>
                <strong>Frete Grátis</strong>
                <span>Consulte sua região</span>
              </div>
            </div>
            <div class="product-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <div>
                <strong>Safety Insurance</strong>
                <span>Sua compra protegida</span>
              </div>
            </div>
          </div>

          <!-- CTAs -->
          <div class="product-hero__ctas">
            <!-- Adicionar ao carrinho -->
            <button
              class="product-hero__add-cart"
              :class="added ? 'product-hero__add-cart--added' : ''"
              @click="addToCart"
            >
              <svg v-if="!added" viewBox="0 0 1000 1000" fill="currentColor" width="20" height="20">
                <path d="M188 167H938C943 167 949 169 953 174 957 178 959 184 958 190L926 450C919 502 875 542 823 542H263L271 583C281 631 324 667 373 667H854C866 667 875 676 875 687S866 708 854 708H373C304 708 244 659 230 591L129 83H21C9 83 0 74 0 62S9 42 21 42H146C156 42 164 49 166 58L188 167ZM771 750C828 750 875 797 875 854S828 958 771 958 667 912 667 854 713 750 771 750ZM354 750C412 750 458 797 458 854S412 958 354 958 250 912 250 854 297 750 354 750Z"/>
              </svg>
              <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" width="20" height="20">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
              {{ added ? 'Adicionado!' : 'Adicionar à lista' }}
            </button>

            <!-- WhatsApps -->
            <div class="product-hero__whatsapp-grid">
              <!-- <a
                :href="`https://wa.me/${WA_P2}?text=${encodeURIComponent('Olá! Tenho interesse no ' + product.name)}`"
                target="_blank"
                rel="noopener noreferrer"
                class="product-hero__whatsapp"
              >
                <svg viewBox="0 0 448 512" fill="currentColor" width="18" height="18"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                <span>Vendas 1 (73) 9 8236-1945</span>
              </a> -->
              <a
                :href="`https://wa.me/${WA_P1}?text=${encodeURIComponent('Olá! Tenho interesse no ' + product.name)}`"
                target="_blank"
                rel="noopener noreferrer"
                class="product-hero__whatsapp"
              >
                <svg viewBox="0 0 448 512" fill="currentColor" width="18" height="18"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                <span>Vendas 2 (73) 9 8101-9260</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Avaliações (estático, sem backend) -->
    <div class="product-reviews">
      <div class="product-reviews__container">
        <div class="reviews-tab">
          <span class="reviews-tab__label">Avaliações (0)</span>
        </div>
        <div class="reviews-body">
          <h3 class="reviews-body__title">AVALIAÇÕES</h3>
          <p class="reviews-body__empty">Não há avaliações ainda.</p>
          <p class="reviews-body__invite">
            Seja o primeiro a avaliar
            <strong>{{ product.name }}</strong>
          </p>
          <p class="reviews-body__cancel">O seu endereço de email não será publicado. Campos obrigatórios marcados com <span class="required">*</span></p>

          <form class="reviews-form" @submit.prevent>
            <div class="reviews-form__stars">
              <label class="reviews-form__label">Sua avaliação <span class="required">*</span></label>
              <div class="stars-row">
                <span v-for="n in 5" :key="n" class="star">★</span>
              </div>
            </div>
            <label class="reviews-form__label">Sua avaliação sobre o produto <span class="required">*</span></label>
            <textarea class="reviews-form__textarea" rows="5" placeholder="Escreva sua avaliação..."></textarea>
            <div class="reviews-form__row">
              <div class="reviews-form__field">
                <label class="reviews-form__label">Nome <span class="required">*</span></label>
                <input type="text" class="reviews-form__input" />
              </div>
              <div class="reviews-form__field">
                <label class="reviews-form__label">E-mail <span class="required">*</span></label>
                <input type="email" class="reviews-form__input" />
              </div>
            </div>
            <label class="reviews-form__checkbox-label">
              <input type="checkbox" />
              Salvar meu nome, e-mail e site neste navegador para a próxima vez que eu comentar.
            </label>
            <button type="submit" class="reviews-form__submit">ENVIAR</button>
          </form>
        </div>
      </div>
    </div>

    <!-- Produtos relacionados -->
    <div v-if="related.length" class="product-related">
      <div class="product-related__container">
        <h2 class="product-related__title">PRODUTOS RELACIONADOS</h2>
        <ul class="product-related__grid">
          <ProductCard
            v-for="rel in related"
            :key="rel.id"
            :product="rel"
          />
        </ul>
      </div>
    </div>
  </div>

  <!-- Produto não encontrado -->
  <div v-else class="not-found">
    <div class="not-found__inner">
      <h1>Produto não encontrado</h1>
      <p>O produto que você está procurando não foi encontrado.</p>
      <RouterLink to="/" class="not-found__btn">← Voltar para a loja</RouterLink>
    </div>
  </div>
</template>

<style scoped>
/* ── Breadcrumb ─────────────────────────────────────────── */
.breadcrumb {
  background: #1e3a5f;
  padding: 0.6rem 0;
}
.breadcrumb__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  flex-wrap: wrap;
}
.breadcrumb__link {
  color: rgba(255,255,255,0.8);
  font-size: 0.8rem;
  text-decoration: none;
  transition: color 0.15s;
}
.breadcrumb__link:hover { color: #f5a623; }
.breadcrumb__sep {
  color: rgba(255,255,255,0.5);
  font-size: 0.8rem;
}
.breadcrumb__current {
  color: #fff;
  font-size: 0.8rem;
  font-weight: 600;
  max-width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* ── Hero produto ───────────────────────────────────────── */
.product-hero {
  background: #fff;
  padding: 2.5rem 0;
}
.product-hero__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}
.product-hero__gallery {
  position: sticky;
  top: 1rem;
}
.product-hero__img-wrap {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
  background: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
  padding: 1rem;
}
.product-hero__img {
  max-width: 100%;
  max-height: 380px;
  object-fit: contain;
}
.product-hero__title {
  font-size: clamp(1.1rem, 2.5vw, 1.6rem);
  font-weight: 700;
  color: #1e3a5f;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  line-height: 1.3;
  margin: 0 0 1rem;
}
.product-hero__meta {
  margin-bottom: 0.6rem;
  font-size: 0.85rem;
  color: #6b7280;
}
.product-hero__label {
  font-weight: 600;
  color: #374151;
  margin-right: 0.3rem;
}
.product-hero__cat {
  color: #1e3a5f;
  text-decoration: none;
  font-weight: 500;
}
.product-hero__cat:hover { text-decoration: underline; }

.product-hero__share {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  font-size: 0.85rem;
}
.product-hero__share-icons {
  display: flex;
  gap: 0.4rem;
}
.share-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: #fff;
  text-decoration: none;
  transition: opacity 0.2s;
}
.share-icon:hover { opacity: 0.8; }
.share-icon--blue { background: #1877f2; }
.share-icon--sky { background: #1da1f2; }
.share-icon--green { background: #25d366; }

.product-hero__desc {
  font-size: 0.9rem;
  color: #4b5563;
  line-height: 1.7;
  margin: 1rem 0;
  border-top: 1px solid #e5e7eb;
  padding-top: 1rem;
}

.product-hero__badges {
  display: flex;
  gap: 1rem;
  margin: 1.2rem 0;
}
.product-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #374151;
  font-size: 0.78rem;
}
.product-badge svg {
  color: #1e3a5f;
  flex-shrink: 0;
}
.product-badge strong {
  display: block;
  font-weight: 600;
  font-size: 0.78rem;
}
.product-badge span {
  color: #6b7280;
  font-size: 0.72rem;
}

.product-hero__ctas {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 0.5rem;
}
.product-hero__add-cart {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: #1e3a5f;
  color: #fff;
  font-weight: 700;
  font-size: 0.9rem;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s;
  width: 100%;
}
.product-hero__add-cart:hover {
  background: #163356;
  transform: translateY(-1px);
}
.product-hero__add-cart--added {
  background: #16a34a !important;
}

.product-hero__whatsapp-grid {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.product-hero__whatsapp {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: #25d366;
  color: #fff;
  font-weight: 700;
  font-size: 0.85rem;
  text-decoration: none;
  padding: 0.7rem 1.2rem;
  border-radius: 6px;
  transition: background 0.2s, transform 0.2s;
  width: 100%;
}
.product-hero__whatsapp:hover {
  background: #1da755;
  transform: translateY(-2px);
}

/* ── Avaliações ─────────────────────────────────────────── */
.product-reviews {
  background: #f3f4f6;
  padding: 2rem 0;
}
.product-reviews__container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
.reviews-tab {
  border-bottom: 2px solid #ddd;
  margin-bottom: 1.5rem;
}
.reviews-tab__label {
  display: inline-block;
  padding: 0.5rem 1.2rem;
  background: #fff;
  border: 1px solid #ddd;
  border-bottom: none;
  font-size: 0.85rem;
  font-weight: 600;
  color: #374151;
}
.reviews-body {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.5rem;
}
.reviews-body__title {
  font-size: 1rem;
  font-weight: 700;
  color: #1e3a5f;
  margin: 0 0 0.5rem;
}
.reviews-body__empty {
  color: #6b7280;
  font-size: 0.85rem;
}
.reviews-body__invite {
  color: #374151;
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
}
.reviews-body__cancel {
  font-size: 0.78rem;
  color: #9ca3af;
  margin-bottom: 1rem;
}
.required { color: #e53e3e; }

.reviews-form__stars { margin-bottom: 0.75rem; }
.reviews-form__label {
  display: block;
  font-size: 0.82rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.3rem;
}
.stars-row { display: flex; gap: 0.15rem; }
.star { color: #d1d5db; font-size: 1.2rem; cursor: pointer; transition: color 0.15s; }
.star:hover { color: #f5a623; }

.reviews-form__textarea,
.reviews-form__input {
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  font-size: 0.85rem;
  color: #374151;
  outline: none;
  transition: border-color 0.15s;
  box-sizing: border-box;
}
.reviews-form__textarea:focus,
.reviews-form__input:focus {
  border-color: #1e3a5f;
}
.reviews-form__textarea { resize: vertical; margin-bottom: 1rem; }

.reviews-form__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}
.reviews-form__field { margin-bottom: 0; }
.reviews-form__checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: #6b7280;
  margin-bottom: 1rem;
}
.reviews-form__submit {
  background: #1e3a5f;
  color: #fff;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  border: none;
  border-radius: 4px;
  padding: 0.65rem 1.8rem;
  cursor: pointer;
  transition: background 0.2s;
}
.reviews-form__submit:hover { background: #f5a623; color: #1e3a5f; }

/* ── Produtos relacionados ──────────────────────────────── */
.product-related {
  background: #fff;
  padding: 2.5rem 0;
}
.product-related__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
.product-related__title {
  text-align: center;
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e3a5f;
  letter-spacing: 0.08em;
  margin: 0 0 1.5rem;
}
.product-related__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 0;
  margin: 0;
  list-style: none;
}
@media (min-width: 640px) {
  .product-related__grid { grid-template-columns: repeat(4, 1fr); }
}

/* ── Responsive ─────────────────────────────────────────── */
@media (max-width: 767px) {
  .product-hero__container {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .product-hero__gallery { position: static; }
  .reviews-form__row { grid-template-columns: 1fr; }
  .product-hero__badges { flex-direction: column; }
}
</style>
