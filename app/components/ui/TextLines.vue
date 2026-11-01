<template>
    <component
        :is="tag"
        ref="textElement"
        class="invisible font-medium leading-relaxed tracking-wide text-pretty max-w-200"
        :class="[
            size === 'lg' ? 'text-lg md:text-xl lg:text-3xl 2xl:text-5xl' : 'text-base md:text-lg lg:text-2xl 2xl:text-4xl',
        ]"
    >
        {{ text }}
    </component>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

const {
    text, tag = 'p', size = 'sm', placment = 'right',
} = defineProps<{
    text: string
    size?: Size
    tag?: string
    placment?: 'right' | 'center' | 'left'
}>()

const textElement = useTemplateRef<HTMLElement>('textElement')

let context: gsap.Context | undefined

const createLineReveal = (lines: Element[]) =>
    gsap.timeline({
        scrollTrigger: {
            trigger: textElement.value,
            start: 'top 90%',
            once: true,
        },
    }).from(lines, {
        yPercent: 100,
        autoAlpha: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.15,
    })

onMounted(() => {
    context = gsap.context(() => {
        SplitText.create(textElement.value, {
            type: 'lines',
            mask: 'lines',
            autoSplit: true,
            onSplit: (split) => {
                gsap.set(textElement.value, { autoAlpha: 1 })

                return createLineReveal(split.lines)
            },
        })
    })
})

onBeforeUnmount(() => context?.revert())

</script>
