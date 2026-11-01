<template>
    <div ref="headerRef">
        <div :style="{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }">
            <div
                ref="titleRef"
                class="flex flex-col justify-center gap-3 md:gap-6 pb-6 pt-12 lg:pt-24 lg:gap-12 px-3 md:px-6 lg:px-12 max-w-300"
            >
                <slot name="heading" />
            </div>
        </div>

        <div
            v-if="$slots.default"
            class="relative px-3 md:px-6 lg:px-12"
        >
            <div class="py-3 md:py-8 lg:py-12">
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

const { withScrollTrigger = true } = defineProps<{
    withScrollTrigger?: boolean
}>()

const headerRef = useTemplateRef('headerRef')

const titleRef = useTemplateRef('titleRef')

let animation: gsap.core.Timeline | undefined

onMounted(() => {
    animation = gsap.timeline({
        scrollTrigger: withScrollTrigger
            ? {
                trigger: headerRef.value,
                start: 'top 90%',
                toggleActions: 'play none none none',
            }
            : undefined,
    })

    animation.from(headerRef.value, {
        y: '30vh',
        duration: 1,
        ease: 'circ.out',
    })

    animation.from(titleRef.value, {
        opacity: 0,
        y: 200,
        duration: 1,
        ease: 'circ.out',
    }, '<0.2')
})

onBeforeUnmount(() => {
    animation?.kill()
})
</script>
