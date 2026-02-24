<script setup lang="ts">
import { cartStore } from '@/stores/cartStore'

const WA_P1 = '5573981019260'

function sendToWhatsApp(phone: string): void {
  const url = cartStore.buildWhatsAppUrl(phone)
  window.open(url, '_blank', 'noopener,noreferrer')
}
</script>

<template>
  <!-- Overlay -->
  <Transition name="overlay">
    <div
      v-if="cartStore.isOpen"
      class="cart-overlay"
      @click="cartStore.closeCart()"
    ></div>
  </Transition>

  <!-- Drawer lateral -->
  <Transition name="drawer">
    <aside v-if="cartStore.isOpen" class="cart-drawer" role="dialog" aria-label="Carrinho de interesse">
      <!-- Header do drawer -->
      <div class="cart-drawer__header">
        <h2 class="cart-drawer__title">
          <svg viewBox="0 0 1000 1000" fill="currentColor" width="20" height="20" aria-hidden="true">
            <path d="M188 167H938C943 167 949 169 953 174 957 178 959 184 958 190L926 450C919 502 875 542 823 542H263L271 583C281 631 324 667 373 667H854C866 667 875 676 875 687S866 708 854 708H373C304 708 244 659 230 591L129 83H21C9 83 0 74 0 62S9 42 21 42H146C156 42 164 49 166 58L188 167ZM771 750C828 750 875 797 875 854S828 958 771 958 667 912 667 854 713 750 771 750ZM354 750C412 750 458 797 458 854S412 958 354 958 250 912 250 854 297 750 354 750Z"/>
          </svg>
          Lista de Interesse
        </h2>
        <button class="cart-drawer__close" aria-label="Fechar carrinho" @click="cartStore.closeCart()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="20" height="20">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Lista de itens -->
      <div class="cart-drawer__body">
        <!-- Vazio -->
        <div v-if="cartStore.items.length === 0" class="cart-empty">
          <svg viewBox="0 0 1000 1000" fill="currentColor" width="56" height="56" opacity="0.2">
            <path d="M188 167H938C943 167 949 169 953 174 957 178 959 184 958 190L926 450C919 502 875 542 823 542H263L271 583C281 631 324 667 373 667H854C866 667 875 676 875 687S866 708 854 708H373C304 708 244 659 230 591L129 83H21C9 83 0 74 0 62S9 42 21 42H146C156 42 164 49 166 58L188 167ZM771 750C828 750 875 797 875 854S828 958 771 958 667 912 667 854 713 750 771 750ZM354 750C412 750 458 797 458 854S412 958 354 958 250 912 250 854 297 750 354 750Z"/>
          </svg>
          <p>Nenhum produto na lista ainda.</p>
          <button class="cart-empty__btn" @click="cartStore.closeCart()">Explorar produtos</button>
        </div>

        <!-- Itens -->
        <ul v-else class="cart-items">
          <li
            v-for="item in cartStore.items"
            :key="item.product.id"
            class="cart-item"
          >
            <img
              :src="item.product.image"
              :alt="item.product.name"
              class="cart-item__img"
              loading="lazy"
            />
            <div class="cart-item__info">
              <p class="cart-item__name">{{ item.product.name }}</p>
              <!-- Controle de quantidade -->
              <div class="cart-item__qty">
                <button
                  class="qty-btn"
                  aria-label="Diminuir quantidade"
                  @click="cartStore.decreaseQty(item.product.id)"
                >−</button>
                <span class="qty-value">{{ item.quantity }}</span>
                <button
                  class="qty-btn"
                  aria-label="Aumentar quantidade"
                  @click="cartStore.increaseQty(item.product.id)"
                >+</button>
              </div>
            </div>
            <button
              class="cart-item__remove"
              aria-label="Remover produto"
              @click="cartStore.remove(item.product.id)"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                <path d="M18 6 6 18M6 6l12 12"/>
              </svg>
            </button>
          </li>
        </ul>
      </div>

      <!-- Footer do drawer -->
      <div v-if="cartStore.items.length > 0" class="cart-drawer__footer">
        <p class="cart-drawer__summary">
          {{ cartStore.totalCount.value }} {{ cartStore.totalCount.value === 1 ? 'produto' : 'produtos' }} na sua lista
        </p>

        <div class="flex flex-col gap-2">
          <button class="cart-drawer__whatsapp" @click="sendToWhatsApp(WA_P1)">
            <svg viewBox="0 0 448 512" fill="currentColor" width="18" height="18" aria-hidden="true">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>
            Enviar pelo WhatsApp
          </button>
        </div>

        <button class="cart-drawer__clear" @click="cartStore.clear()">
          Limpar lista
        </button>
      </div>
    </aside>
  </Transition>
</template>

<style scoped>
/* ── Overlay ───────────────────────────────────────────────── */
.cart-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  z-index: 200;
}
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.25s;
}
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

/* ── Drawer ────────────────────────────────────────────────── */
.cart-drawer {
  position: fixed;
  top: 0;
  right: 0;
  height: 100dvh;
  width: min(380px, 100vw);
  background: #fff;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.18);
  z-index: 201;
  display: flex;
  flex-direction: column;
}
.drawer-enter-active,
.drawer-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.drawer-enter-from,
.drawer-leave-to {
  transform: translateX(100%);
}

/* ── Header ────────────────────────────────────────────────── */
.cart-drawer__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 2px solid #1e3a5f;
  background: #1e3a5f;
  color: #fff;
}
.cart-drawer__title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin: 0;
}
.cart-drawer__close {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  padding: 0.3rem;
  border-radius: 4px;
  display: flex;
  transition: color 0.15s, background 0.15s;
}
.cart-drawer__close:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
}

/* ── Body ──────────────────────────────────────────────────── */
.cart-drawer__body {
  flex: 1;
  overflow-y: auto;
  padding: 0.75rem 1.25rem;
}

/* ── Vazio ─────────────────────────────────────────────────── */
.cart-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  height: 100%;
  min-height: 300px;
  text-align: center;
  color: #9ca3af;
}
.cart-empty p {
  font-size: 0.9rem;
  margin: 0;
}
.cart-empty__btn {
  background: #1e3a5f;
  color: #fff;
  font-weight: 600;
  font-size: 0.8rem;
  border: none;
  border-radius: 4px;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  transition: background 0.2s;
}
.cart-empty__btn:hover { background: #f5a623; color: #1e3a5f; }

/* ── Itens ─────────────────────────────────────────────────── */
.cart-items {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.cart-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 0.6rem;
}
.cart-item__img {
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 4px;
  background: #fff;
  flex-shrink: 0;
}
.cart-item__info {
  flex: 1;
  min-width: 0;
}
.cart-item__name {
  font-size: 0.78rem;
  font-weight: 500;
  color: #374151;
  line-height: 1.3;
  margin: 0 0 0.4rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.cart-item__qty {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}
.qty-btn {
  width: 22px;
  height: 22px;
  border: 1px solid #d1d5db;
  background: #fff;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 700;
  color: #374151;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
}
.qty-btn:hover { background: #1e3a5f; color: #fff; border-color: #1e3a5f; }
.qty-value {
  font-size: 0.85rem;
  font-weight: 700;
  color: #1e3a5f;
  min-width: 18px;
  text-align: center;
}
.cart-item__remove {
  background: transparent;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  padding: 0.2rem;
  border-radius: 4px;
  display: flex;
  flex-shrink: 0;
  transition: color 0.15s;
}
.cart-item__remove:hover { color: #ef4444; }

/* ── Footer ────────────────────────────────────────────────── */
.cart-drawer__footer {
  padding: 1rem 1.25rem;
  border-top: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  background: #fff;
}
.cart-drawer__summary {
  font-size: 0.82rem;
  color: #6b7280;
  margin: 0;
  text-align: center;
}
.cart-drawer__whatsapp {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: #25d366;
  color: #fff;
  font-weight: 700;
  font-size: 0.85rem;
  border: none;
  border-radius: 6px;
  padding: 0.75rem;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s;
  width: 100%;
}
.cart-drawer__whatsapp:hover {
  background: #1da755;
  transform: translateY(-1px);
}
.cart-drawer__clear {
  background: transparent;
  border: 1px solid #e5e7eb;
  color: #6b7280;
  font-size: 0.78rem;
  border-radius: 4px;
  padding: 0.45rem;
  cursor: pointer;
  transition: border-color 0.15s, color 0.15s;
}
.cart-drawer__clear:hover { border-color: #ef4444; color: #ef4444; }
</style>
