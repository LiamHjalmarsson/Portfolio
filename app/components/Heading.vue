<template>
    <component
        :is="headingTag"
        :class="tagClass"
        class="font-semibold capitalize"
    >
        <slot>
            {{ title }}
        </slot>
    </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Heading {
    title?: string;
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    isFirstHeading?: boolean;
}

const props = defineProps<Heading>()

const headingTag = computed(() => (props.isFirstHeading ? 'h1' : props.tag))

const tagClass = computed(() => {
    switch (headingTag.value) {
        case 'h1':
            return 'text-4xl'
        case 'h2':
            return 'text-2xl'
        case 'h3':
            return 'text-base'
        case 'h4':
            return 'text-base'
        case 'h5':
        case 'h6':
        default:
            return 'text-2xl'
    }
})
</script>
