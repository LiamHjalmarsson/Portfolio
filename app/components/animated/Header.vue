<template>
    <div ref="headerRef">
        <div :style="{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }">
            <div
                ref="titleRef"
                class="flex flex-col justify-center gap-3 md:gap-6 pb-6 pt-12 lg:pt-24 lg:gap-12 px-3 md:px-6 lg:px-12"
            >

                <p
                    class="text-sm lg:text-lg font-medium tracking-[0.5rem] uppercase"
                    :class="theme === 'dark' ? 'text-neutral-800' : 'text-neutral-50'"
                >
                    {{ subtitle }}
                </p>

                <h1
                    class="flex flex-col flex-wrap gap-12 sm:gap-16 md:block uppercase text-4xl sm:text-5xl md:text-6xl lg:text-8xl 2xl:text-9xl font-bold tracking-wider"
                    :class="theme === 'dark' ? 'text-black' : 'text-white'"
                >
                    {{ title }}
                </h1>
            </div>
        </div>

        <div
            v-if="hasDefaultSlotContent"
            class="relative px-3 md:px-6 lg:px-12"
            :class="theme === 'dark' ? 'text-neutral-800' : 'text-neutral-200'"
        >
            <div class="py-3 md:py-8 lg:py-12 text-end">
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type HeaderTheme = 'light' | 'dark'

const {
    theme, withScrollTrigger,
} = defineProps<{
    subtitle: string
    title: string
    theme: HeaderTheme
    withScrollTrigger: boolean
}>()

const slots = useSlots()

const headerRef = ref<HTMLDivElement | null>(null)

const titleRef = ref<HTMLDivElement | null>(null)

const hasDefaultSlotContent = computed(() => {
    const renderedDefaultSlot = slots.default?.() ?? []

    return renderedDefaultSlot.length > 0
})

let animation: GSAPTimeline

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
