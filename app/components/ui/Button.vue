<template>
    <NuxtLink
        v-if="to"
        :to="to"
        :aria-label="label"
        :target="to.startsWith('http') ? '_blank' : undefined"
        :rel="to.startsWith('http') ? 'noopener noreferrer' : undefined"
        class="inline-flex">
        <span
            ref="contentRef"
            :class="[baseClass, variantClass]"
            @pointermove="followPointer"
            @pointerleave="resetPosition">
            <slot>{{ label }}</slot>
        </span>
    </NuxtLink>

    <button
        v-else
        :type="type"
        :aria-label="label"
        class="inline-flex">
        <span
            ref="contentRef"
            :class="[baseClass, variantClass]"
            @pointermove="followPointer"
            @pointerleave="resetPosition">
            <slot>{{ label }}</slot>
        </span>
    </button>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

const {
    variant = 'primary',
    type = 'button',
} = defineProps<Button>()

const contentRef = useTemplateRef('contentRef')

const baseClass = 'inline-flex items-center justify-center font-semibold text-lg transition-colors whitespace-nowrap select-none border-2 px-8 md:px-12 py-4 md:py-6 rounded-full'

const variantClass = computed(() => {
    if (variant === 'outline') {
        return 'border-primary-600 text-primary-600 bg-transparent hover:bg-primary-700 hover:text-white active:bg-primary-200'
    }

    if (variant === 'ghost') {
        return 'text-primary-600 font-medium underline-offset-4 hover:underline px-0 py-0 border-transparent'
    }

    return 'bg-primary-600 border-primary-600 text-white hover:bg-primary-700 active:bg-primary-800'
})

let moveX: gsap.QuickToFunc

let moveY: gsap.QuickToFunc

const followPointer = (event: PointerEvent) => {
    const content = contentRef.value

    if (!content) {
        return
    }

    const bounds = content.getBoundingClientRect()

    moveX((event.clientX - (bounds.left + bounds.width / 2)) / 10)

    moveY((event.clientY - (bounds.top + bounds.height / 2)) / 10)
}

const resetPosition = () => {
    moveX(0)
    moveY(0)
}

onMounted(() => {
    moveX = gsap.quickTo(contentRef.value, 'x', {
        duration: 0.3,
        ease: 'power3.out',
    })

    moveY = gsap.quickTo(contentRef.value, 'y', {
        duration: 0.3,
        ease: 'power3.out',
    })
})

onBeforeUnmount(() => {
    moveX?.tween.kill()

    moveY?.tween.kill()
})
</script>
