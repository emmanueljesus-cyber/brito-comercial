<script setup lang="ts">
type Variant = 'primary' | 'outline' | 'yellow' | 'ghost'
type Size    = 'sm' | 'md' | 'lg'

interface Props {
  variant?: Variant
  size?:    Size
  href?:    string
  target?:  string
  type?:    'button' | 'submit' | 'reset'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant:  'primary',
  size:     'md',
  type:     'button',
  disabled: false,
})

const variantClasses: Record<Variant, string> = {
  primary: 'bg-[#3B4DC0] hover:bg-[#2a3799] text-white shadow-sm hover:shadow-md hover:shadow-[#3B4DC0]/30',
  outline: 'border-2 border-[#3B4DC0] text-[#3B4DC0] hover:bg-[#3B4DC0] hover:text-white',
  yellow:  'bg-[#F5C518] hover:bg-[#d4a900] text-black font-bold shadow-sm',
  ghost:   'border-2 border-white/30 text-white hover:border-white hover:bg-white/10',
}

const sizeClasses: Record<Size, string> = {
  sm: 'text-xs px-4 py-2',
  md: 'text-sm px-6 py-3',
  lg: 'text-base px-8 py-4',
}
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :target="href ? target : undefined"
    :rel="href && target === '_blank' ? 'noopener noreferrer' : undefined"
    :type="!href ? type : undefined"
    :disabled="!href ? disabled : undefined"
    class="inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-wide transition-all duration-200 cursor-pointer active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
    :class="[variantClasses[variant], sizeClasses[size]]"
  >
    <slot />
  </component>
</template>
