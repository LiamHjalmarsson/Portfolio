
<template>
    <div
        ref="previewElement"
        class="pointer-events-none invisible fixed top-0 left-0 z-50 hidden h-64 w-100 overflow-hidden rounded-3xl shadow-xl will-change-transform lg:block 2xl:h-80 2xl:w-160"
        aria-hidden="true"
    >
        <NuxtImg
            v-if="activeProject"
            :src="activeProject.image.src"
            :alt="activeProject.image.alt"
            format="webp"
            class="h-full w-full object-cover object-center"
        />
    </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

const CURSOR_OFFSET_X = 50

const CURSOR_OFFSET_Y = -250

const FADE_IN_DURATION = 0.14

const FADE_OUT_DURATION = 0.12

const previewElement = useTemplateRef<HTMLDivElement>('previewElement')

const activeProject = shallowRef<Project | null>(null)

let positionX: gsap.QuickToFunc | undefined

let positionY: gsap.QuickToFunc | undefined

let visibilityTween: gsap.core.Tween | undefined

const getPosition = (event: PointerEvent) => ({
    x: event.clientX + CURSOR_OFFSET_X,

    y: event.clientY + CURSOR_OFFSET_Y,
})

const show = (project: Project, event: PointerEvent) => {
    if (event.pointerType !== 'mouse' || !previewElement.value || !positionX || !positionY) {
        return
    }

    visibilityTween?.kill()

    activeProject.value = project

    const {
        x, y,
    } = getPosition(event)

    positionX(x, x)
    positionY(y, y)

    visibilityTween = gsap.to(previewElement.value, {
        autoAlpha: 1,
        duration: 0.14,
        ease: 'power2.out',
    })
}

const move = (event: PointerEvent) => {
    if (event.pointerType !== 'mouse' || !positionX || !positionY) {
        return
    }

    const {
        x, y,
    } = getPosition(event)

    positionX(x)
    positionY(y)
}

const hide = () => {
    if (!previewElement.value || !activeProject.value) {
        return
    }

    visibilityTween?.kill()

    visibilityTween = gsap.to(previewElement.value, {
        autoAlpha: 0,
        duration: 0.12,
        ease: 'power2.out',
        onComplete: () => {
            activeProject.value = null
        },
    })
}

onMounted(() => {
    if (!previewElement.value) {
        return
    }

    gsap.set(previewElement.value, { autoAlpha: 0 })

    positionX = gsap.quickTo(previewElement.value, 'x', {
        duration: 0.3,
        ease: 'power3.out',
    })

    positionY = gsap.quickTo(previewElement.value, 'y', {
        duration: 0.3,
        ease: 'power3.out',
    })
})

onBeforeUnmount(() => {
    visibilityTween?.kill()
    positionX?.tween.kill()
    positionY?.tween.kill()
})

defineExpose({
    show,
    move,
    hide,
})
</script>
