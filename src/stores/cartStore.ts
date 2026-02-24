import { reactive, computed } from 'vue'
import type { Product } from '@/data/products'

export interface CartItem {
  product: Product
  quantity: number
}

const state = reactive({
  items: [] as CartItem[],
  open: false,
})

export const cartStore = {
  // Leituras
  get items(): CartItem[] {
    return state.items
  },
  get isOpen(): boolean {
    return state.open
  },
  totalCount: computed(() =>
    state.items.reduce((acc, item) => acc + item.quantity, 0),
  ),

  // Ações
  add(product: Product): void {
    const existing = state.items.find((i) => i.product.id === product.id)
    if (existing) {
      existing.quantity++
    } else {
      state.items.push({ product, quantity: 1 })
    }
    state.open = true
  },

  remove(productId: number): void {
    const idx = state.items.findIndex((i) => i.product.id === productId)
    if (idx !== -1) state.items.splice(idx, 1)
  },

  increaseQty(productId: number): void {
    const item = state.items.find((i) => i.product.id === productId)
    if (item) item.quantity++
  },

  decreaseQty(productId: number): void {
    const item = state.items.find((i) => i.product.id === productId)
    if (!item) return
    if (item.quantity > 1) {
      item.quantity--
    } else {
      cartStore.remove(productId)
    }
  },

  clear(): void {
    state.items.splice(0)
  },

  openCart(): void {
    state.open = true
  },

  closeCart(): void {
    state.open = false
  },

  /** Gera a URL do WhatsApp com a lista de produtos formatada */
  buildWhatsAppUrl(phone: string): string {
    if (state.items.length === 0) return `https://wa.me/${phone}`

    const lines = state.items.map(
      (item, i) => `${i + 1}. ${item.product.name} (Qtd: ${item.quantity})`,
    )
    const message = [
      'Olá! Tenho interesse nos seguintes produtos:',
      '',
      ...lines,
      '',
      'Poderia me enviar mais informações?',
    ].join('\n')

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
  },
}
