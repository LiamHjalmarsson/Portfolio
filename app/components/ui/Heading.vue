<template>
    <component
        :is="tag"
        :class="tagClass"
    >
        <slot/>
    </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Heading {
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const { tag } = defineProps<Heading>()

const tagClass = computed(() => {
    switch (tag) {
        case 'h1':
            return 'uppercase text-4xl sm:text-5xl md:text-6xl lg:text-8xl 2xl:text-9xl font-bold tracking-wider'
        case 'h2':
            return 'text-3xl font-semibold md:text-5xl lg:text-7xl 2xl:text-8xl'
        case 'h3':
            return 'text-2xl font-semibold md:text-3xl lg:text-4xl 2xl:text-5xl'
        case 'h4':
            return 'text-lg font-semibold tracking-wide md:text-xl'
        case 'h5':
        case 'h6':
        default:
            return 'text-2xl'
    }
})
</script>
