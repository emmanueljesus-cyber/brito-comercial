<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import BritoLogo from '@/components/ui/BritoLogo.vue'
import { cartStore } from '@/stores/cartStore'

const menuOpen = ref(false)

function toggleMenu(): void {
  menuOpen.value = !menuOpen.value
}

function closeMenu(): void {
  menuOpen.value = false
}

const WA_P1 = '5573981019260'
const WA_P2 = '5573982361945'

const navLinks = [
  { label: 'Início',      href: '/#/' },
  { label: 'Quem Somos',  href: '/#/quem-somos' },
  {
    label: 'Fale Conosco',
    href: `https://wa.me/${WA_P1}?text=${encodeURIComponent('Olá! Gostaria de mais informações.')}`,
    external: true,
  },
] as const

const whatsappIcon = `M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z`
</script>

<template>
  <header class="site-header sticky top-0 z-50 shadow-md">

    <!-- Topbar -->
    <div class="bg-[#2a3799] text-white text-[11px] md:text-sm py-2">
      <div class="max-w-[1200px] mx-auto px-6 flex items-center justify-end gap-x-6 gap-y-1 flex-wrap">

        <!-- E-mail -->
        <a
          href="mailto:comercial@comercialbritoatacado.com.br"
          class="flex items-center gap-2 text-white/90 hover:text-[#F5C518] transition-colors"
        >
          <svg class="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 512 512" aria-hidden="true">
            <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/>
          </svg>
          <span class="hidden sm:inline">comercial@comercialbritoatacado.com.br</span>
          <span class="sm:hidden">E-mail</span>
        </a>

        <!-- Fixo -->
        <a href="tel:+557333012395" class="flex items-center gap-2 text-white/90 hover:text-[#F5C518] transition-colors">
          <svg class="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 512 512" aria-hidden="true">
            <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"/>
          </svg>
          <span class="hidden sm:inline">(73) 3301-2395</span>
          <span class="sm:hidden">Fixo</span>
        </a>

        <!-- WhatsApps -->
        <div class="flex items-center gap-3">
          <svg class="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 448 512" aria-hidden="true">
            <path :d="whatsappIcon" />
          </svg>
          <div class="flex items-center gap-2">
            <!-- <a
              :href="`https://wa.me/${WA_P2}`"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white/95 hover:text-[#F5C518] transition-colors font-medium"
            >(73) 9 8236-1945</a> -->
            <!-- <span class="opacity-40">/</span> -->
            <a
              :href="`https://wa.me/${WA_P1}`"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white/95 hover:text-[#F5C518] transition-colors font-medium"
            >(73) 9 8101-9260</a>
          </div>
        </div>

      </div>
    </div>

    <!-- Navbar -->
    <nav
      class="bg-[#3B4DC0] relative"
      role="navigation"
      aria-label="Navegação principal"
    >
      <div class="max-w-[1200px] mx-auto px-6 flex items-center justify-between gap-6 py-3">

        <!-- Logo -->
        <RouterLink to="/" class="flex items-center shrink-0" aria-label="Brito Comercial - Início">
          <BritoLogo class="h-10 md:h-14 w-auto" />
        </RouterLink>

        <!-- Menu desktop -->
        <ul class="hidden md:flex items-center gap-1 list-none" role="list">
          <li v-for="link in navLinks" :key="link.label">
            <a
              :href="link.href"
              :target="'external' in link && link.external ? '_blank' : undefined"
              :rel="'external' in link && link.external ? 'noopener noreferrer' : undefined"
              class="block px-4 py-2 text-white text-sm font-semibold uppercase tracking-wide rounded transition-colors hover:bg-white/15 hover:text-[#F5C518]"
              @click="closeMenu"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>

        <!-- Ações (busca + carrinho + hamburguer) -->
        <div class="flex items-center gap-3">

          <!-- Carrinho -->
          <button
            class="relative flex items-center justify-center text-white p-2 rounded transition-colors hover:bg-white/15"
            aria-label="Abrir lista de interesse"
            @click="cartStore.openCart()"
          >
            <svg class="w-5 h-5 fill-current" viewBox="0 0 1000 1000" aria-hidden="true">
              <path d="M188 167H938C943 167 949 169 953 174 957 178 959 184 958 190L926 450C919 502 875 542 823 542H263L271 583C281 631 324 667 373 667H854C866 667 875 676 875 687S866 708 854 708H373C304 708 244 659 230 591L129 83H21C9 83 0 74 0 62S9 42 21 42H146C156 42 164 49 166 58L188 167ZM771 750C828 750 875 797 875 854S828 958 771 958 667 912 667 854 713 750 771 750ZM354 750C412 750 458 797 458 854S412 958 354 958 250 912 250 854 297 750 354 750Z"/>
            </svg>
            <span
              v-if="cartStore.totalCount.value > 0"
              class="absolute -top-1.5 -right-1.5 bg-[#F5C518] text-black text-[10px] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center leading-none"
              :aria-label="`${cartStore.totalCount.value} itens`"
            >{{ cartStore.totalCount.value }}</span>
            <span
              v-else
              class="absolute -top-1.5 -right-1.5 bg-[#F5C518] text-black text-[10px] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center leading-none"
              aria-label="0 itens"
            >0</span>
          </button>

          <!-- Hamburguer (mobile) -->
          <button
            class="md:hidden flex flex-col gap-[5px] p-2 rounded transition-colors hover:bg-white/15"
            :aria-expanded="menuOpen"
            aria-label="Abrir menu"
            @click="toggleMenu"
          >
            <span
              class="block w-6 h-0.5 bg-white rounded-full transition-transform duration-300"
              :class="menuOpen ? 'translate-y-[7px] rotate-45' : ''"
            />
            <span
              class="block w-6 h-0.5 bg-white rounded-full transition-opacity duration-300"
              :class="menuOpen ? 'opacity-0' : ''"
            />
            <span
              class="block w-6 h-0.5 bg-white rounded-full transition-transform duration-300"
              :class="menuOpen ? '-translate-y-[7px] -rotate-45' : ''"
            />
          </button>
        </div>

      </div>

      <!-- Menu mobile (dropdown) -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <ul
          v-if="menuOpen"
          class="md:hidden absolute top-full left-0 right-0 bg-[#2a3799] shadow-lg py-2 z-50 list-none"
          role="list"
        >
          <li v-for="link in navLinks" :key="link.label">
            <a
              :href="link.href"
              :target="'external' in link && link.external ? '_blank' : undefined"
              :rel="'external' in link && link.external ? 'noopener noreferrer' : undefined"
              class="block px-6 py-3 text-white text-sm font-semibold uppercase tracking-wide hover:bg-white/10 hover:text-[#F5C518] transition-colors"
              @click="closeMenu"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </Transition>
    </nav>

  </header>
</template>
