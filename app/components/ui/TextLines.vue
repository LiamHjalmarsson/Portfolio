<template>
    <component
        :is="tag"
        ref="textElement"
        class="invisible font-medium leading-relaxed tracking-wide text-pretty max-w-350"
        :class="{
            'text-base md:text-lg lg:text-2xl 2xl:text-3xl': size === 'sm',
            'text-lg md:text-xl lg:text-3xl 2xl:text-4xl': size === 'lg',
            'mr-auto text-left': placement === 'left',
            'mx-auto text-center': placement === 'center',
            'ml-auto text-right': placement === 'right',
        }"
    >
        {{ text }}
    </component>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

const {
    text, tag = 'p', size = 'lg', placement = 'right',
} = defineProps<{
    text: string
    size?: Size
    tag?: string
    placement?: Placement
}>()

const textElement = useTemplateRef<HTMLElement>('textElement')

let context: gsap.Context | undefined

const createLineReveal = (lines: Element[]) =>
    gsap.timeline({
        scrollTrigger: {
            trigger: textElement.value,
            start: 'top 90%',
        },
    }).from(lines, {
        yPercent: 100,
        autoAlpha: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.15,
    })

onMounted(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.set(textElement.value, { autoAlpha: 1 })

        return
    }

    context = gsap.context(() => {
        SplitText.create(textElement.value, {
            type: 'lines',
            mask: 'lines',
            aria: 'none',
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
