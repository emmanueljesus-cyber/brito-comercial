<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import CartDrawer from '@/components/layout/CartDrawer.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <AppHeader />
    <main id="main-content" class="flex-1">
      <RouterView />
    </main>
    <AppFooter />
    <!-- Drawer do carrinho (global) -->
    <CartDrawer />
  </div>
</template>
