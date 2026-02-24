<script setup lang="ts">
import BritoLogo from '@/components/ui/BritoLogo.vue'

const WA_P1 = '5573981019260'

const menuLinks = [
  { label: 'Início', href: '/#/' },
  { label: 'Quem Somos', href: '/#/quem-somos' },
  {
    label: 'Fale Conosco',
    href: `https://wa.me/${WA_P1}?text=${encodeURIComponent('Olá! Gostaria de mais informações.')}`,
    external: true,
  },
] as const
</script>

<template>
  <footer class="bg-[#181b3a] text-white" role="contentinfo">

    <!-- Grid principal -->
    <div class="max-w-[1200px] mx-auto px-6 pt-16 pb-10">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-10 justify-items-center">

        <!-- Col 1: Logo + Endereço -->
        <div class="flex flex-col items-center sm:items-start text-center sm:text-left w-full">
          <RouterLink to="/" class="inline-block mb-5" aria-label="Brito Comercial - Início">
            <BritoLogo class="h-14 w-auto" />
          </RouterLink>
          <address class="not-italic flex items-start gap-3 text-sm text-white/60 leading-relaxed">
            <svg class="w-3.5 h-3.5 fill-[#F5C518] shrink-0 mt-0.5" viewBox="0 0 384 512" aria-hidden="true">
              <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
            </svg>
            <span>Rua Francolino Gonçalves dos Santos,<br>Centro, Nº 123 A — Itajuípe-BA<br>CEP: 45.630-000</span>
          </address>
        </div>

        <!-- Col 2: Menu -->
        <div class="flex flex-col items-center sm:items-start text-center sm:text-left w-full">
          <h2 class="font-heading text-2xl uppercase tracking-wide text-white mb-3">Menu</h2>
          <hr class="border-none h-[3px] w-10 bg-[#3B4DC0] rounded-full mb-6 mx-auto sm:mx-0">
          <ul class="space-y-3 list-none">
            <li v-for="link in menuLinks" :key="link.label">
              <a
                :href="link.href"
                :target="'external' in link && link.external ? '_blank' : undefined"
                :rel="'external' in link && link.external ? 'noopener noreferrer' : undefined"
                class="text-sm text-white/60 hover:text-white transition-colors"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Col 3: Contato -->
        <div class="flex flex-col items-center sm:items-start text-center sm:text-left w-full">
          <h2 class="font-heading text-2xl uppercase tracking-wide text-white mb-3">Contato</h2>
          <hr class="border-none h-[3px] w-10 bg-[#3B4DC0] rounded-full mb-6 mx-auto sm:mx-0">
          <ul class="space-y-3 list-none">
            <li class="flex items-center gap-3 text-sm text-white/60">
              <svg class="w-3.5 h-3.5 fill-[#F5C518] shrink-0" viewBox="0 0 512 512" aria-hidden="true">
                <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"/>
              </svg>
              <a href="tel:+557333012395" class="hover:text-white transition-colors">(73) 3301-2395</a>
            </li>
            <li class="flex items-start gap-3 text-sm text-white/60">
              <svg class="w-3.5 h-3.5 fill-[#F5C518] shrink-0 mt-1" viewBox="0 0 448 512" aria-hidden="true">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
              <div class="flex flex-col gap-2">
                <!-- <a :href="`https://wa.me/${WA_P2}`" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">(73) 9 8236-1945</a> -->
                <a :href="`https://wa.me/${WA_P1}`" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">(73) 9 8101-9260</a>
              </div>
            </li>
            <li class="flex items-center gap-3 text-sm text-white/60">
              <svg class="w-3.5 h-3.5 fill-[#F5C518] shrink-0" viewBox="0 0 512 512" aria-hidden="true">
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/>
              </svg>
              <div class="flex flex-col gap-1">
                <a href="mailto:comercial@comercialbritoatacado.com.br" class="hover:text-white transition-colors">comercial@comercialbritoatacado.com.br</a>
                <a href="mailto:financeiro@comercialbritoatacado.com.br" class="hover:text-white transition-colors">financeiro@comercialbritoatacado.com.br</a>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>

    <!-- Separador + Copyright -->
    <div class="border-t border-white/8">
      <div class="max-w-[1200px] mx-auto px-6 py-5">
        <p class="text-sm text-white/40 text-center leading-relaxed">
          Copyright &copy; 2026. Todos os direitos reservados &mdash;
          <strong class="text-white/60">BRITO COMERCIAL LTDA</strong>
        </p>
      </div>
    </div>

  </footer>

  <!-- WhatsApp Flutuante -->
  <a
    :href="`https://wa.me/${WA_P1}`"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:scale-110 transition-transform"
    aria-label="Falar pelo WhatsApp"
  >
    <svg class="w-7 h-7 fill-white" viewBox="0 0 448 512" aria-hidden="true">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
  </a>
</template>
