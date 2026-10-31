<template>
    <button
        type="button"
        :aria-label="open ? 'Stäng meny' : 'Öppna meny'"
        :aria-expanded="open"
        aria-controls="sidebar"
        class="fixed z-50 flex flex-col items-center justify-center space-y-1 transition-all duration-300 bg-black rounded-full cursor-pointer w-14 h-14 md:h-20 md:w-20 top-4 right-10"
        @click="toggleMenu"
    >
        <span class="relative block w-7 md:w-9 h-5 md:h-7 overflow-hidden" aria-hidden="true">
            <span
                ref="topRef"
                class=" absolute w-full bg-white h-0.5 left-0 top-0"
            />
            <span
                ref="midRef"
                class=" absolute w-full bg-white h-0.5 left-0 top-1/2 -translate-y-1/2"
            />
            <span
                ref="bottomRef"
                class=" absolute w-full bg-white h-0.5 left-0 bottom-0"
            />
        </span>
    </button>
</template>

<script setup lang="ts">
import gsap from 'gsap'

const open = defineModel<boolean>('open', { default: false })

const topRef = useTemplateRef('topRef')

const midRef = useTemplateRef('midRef')

const bottomRef = useTemplateRef('bottomRef')

const toggleMenu = () => {
    open.value = !open.value
}

let animation : GSAPTimeline

onMounted(() => {
    animation = gsap.timeline({ paused: true })

    animation.to(midRef.value, {
        x: '100%',
        opacity: 0,
        ease: 'circ.inOut',
    })

    animation.to(topRef.value, {
        top: '50%',
        yPercent: -50,
        duration: 0.15,
    }, '<0.25')


    animation.to(bottomRef.value, {
        bottom: '50%',
        yPercent: 50,
        duration: 0.15,
    }, '<')

    animation.to(topRef.value, {
        rotate: -45,
        duration: 0.15,
        ease: 'back.out',
    })

    animation.to(bottomRef.value, {
        rotate: 45,
        duration: 0.15,
        ease: 'back.out',
    }, '<')
})

watch(open, (isOpen) => {
    if (isOpen) {
        animation.play()
    } else {
        animation.reverse()
    }
})

onBeforeUnmount(() => {
    animation?.kill()
})
</script>
