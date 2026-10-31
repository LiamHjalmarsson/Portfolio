<template>
    <section
        id="projects"
        class="relative flex flex-col justify-between py-16 md:py-24 lg:py-48">
        <Header
            title="Projekt"
            subtitle="~/några-projekt"
            theme="dark"
            :with-scroll-trigger="true" />

        <ul class="relative flex-1 lg:px-12 lg:pt-12">
            <li
                v-for="project in projects"
                :key="project.id"
                class="group relative z-10 mx-auto max-w-400 transition duration-300 lg:hover:bg-black lg:hover:text-white"
                @pointerenter="showPreview(project, $event)"
                @pointermove="movePreview"
                @pointerleave="hidePreview">
                <div ref="projectRefs">
                    <NuxtLink
                        :to="project.href"
                        target="_blank"
                        :aria-label="`Besök Projekt ${project.title}`">
                        <div
                            class="lg:border-b px-3 md:px-12 py-6 md:py-12 lg:py-20 relative max-lg:flex max-md:flex-col max-md:space-y-3 max-md:space-x-0 max-lg:space-x-6 max-lg:overflow-hidden">
                            <div class="flex justify-between items-center relative z-10">
                                <h2 class="text-4xl font-semibold md:text-5xl lg:text-6xl 2xl:text-7xl group-hover:text-primary duration-300 transition">
                                    {{ project.title }}
                                </h2>

                                <div
                                    class="flex max-lg:space-y-3 max-md:flex-row max-lg:flex-col lg:space-x-6 max-md:space-x-6">
                                    <p
                                        v-for="tech in project.technologies"
                                        :key="tech"
                                        class="uppercase"
                                    >
                                        {{ tech }}
                                    </p>
                                </div>
                            </div>

                            <div class="lg:hidden">
                                <NuxtImg
                                    :src="project.image.src"
                                    :alt="project.image.alt"
                                    class="object-cover object-center rounded-2xl"
                                    format="webp"
                                    loading="lazy" />
                            </div>
                        </div>
                    </NuxtLink>
                </div>
            </li>
        </ul>

        <div
            ref="previewRef"
            class="invisible max-lg:hidden pointer-events-none fixed left-0 top-0 z-50 overflow-hidden rounded-3xl shadow-xl will-change-transform w-100 2xl:w-160 h-64 2xl:h-80">
            <NuxtImg
                v-if="activeProject"
                :src="activeProject.image.src"
                :alt="activeProject.image.alt"
                format="webp"
                class="h-full w-full object-cover object-center" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const { data: projects } = await useAsyncData('projects', () =>
    queryCollection('projects').order('order', 'ASC').all(),
)

const projectRefs = ref<HTMLDivElement[]>([])

const previewRef = ref<HTMLDivElement | null>(null)

const activeProject = shallowRef<Project | null>(null)

let revealAnimations: GSAPTimeline[] = []

let previewAnimation: GSAPTimeline

let previewX: gsap.QuickToFunc

let previewY: gsap.QuickToFunc

function showPreview(project: Project, event: PointerEvent) {
    if (event.pointerType !== 'mouse') {
        return
    }

    activeProject.value = project

    previewX(event.clientX + 50, event.clientX + 50)

    previewY(event.clientY - 250, event.clientY - 250)

    previewAnimation?.kill()

    previewAnimation = gsap.timeline()

    previewAnimation.to(previewRef.value, {
        autoAlpha: 1,
        duration: 0.14,
        ease: 'power2.out',
    })
}

function movePreview(event: PointerEvent) {
    if (event.pointerType !== 'mouse') {
        return
    }

    previewX(event.clientX + 50)

    previewY(event.clientY - 250)
}

function hidePreview() {
    if (!activeProject.value) {
        return
    }

    previewAnimation?.kill()

    previewAnimation = gsap.timeline({
        onComplete: () => {
            activeProject.value = null
        },
    })

    previewAnimation.to(previewRef.value, {
        autoAlpha: 0,
        duration: 0.12,
        ease: 'power2.out',
    })
}

onMounted(() => {
    previewX = gsap.quickTo(previewRef.value, 'x', {
        duration: 0.3,
        ease: 'power3.out',
    })

    previewY = gsap.quickTo(previewRef.value, 'y', {
        duration: 0.3,
        ease: 'power3.out',
    })

    revealAnimations = projectRefs.value.map((project) => {
        const animation = gsap.timeline({
            scrollTrigger: {
                trigger: project,
                start: 'top 85%',
                once: true,
            },
        })

        animation.fromTo(project, {
            autoAlpha: 0,
            y: 200,
        }, {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            clearProps: 'transform',
        })

        return animation
    })
})

onBeforeUnmount(() => {
    revealAnimations.forEach(animation => animation.kill())

    previewAnimation?.kill()

    previewX?.tween.kill()

    previewY?.tween.kill()
})
</script>
