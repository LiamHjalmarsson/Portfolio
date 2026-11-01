
<template>
    <section
        id="projects"
        ref="sectionRef"
        class="relative flex flex-col justify-between py-16 md:py-24 lg:py-48"
    >
        <Container>
            <template #heading>
                <Eyebrow>några-projekt</Eyebrow>

                <Heading tag="h2">
                    Projekt
                </Heading>
            </template>
        </Container>

        <ul class="relative flex-1 lg:px-12 lg:pt-12">
            <li
                v-for="project in projects"
                :key="project.id"
                ref="projectRefs"
                @pointerenter="previewRef?.show(project, $event)"
                @pointermove="previewRef?.move($event)"
                @pointerleave="previewRef?.hide()"
            >
                <ProjectItem :project="project" />
            </li>
        </ul>

        <ProjectPreview ref="previewRef" />
    </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

const sectionRef = useTemplateRef<HTMLElement>('sectionRef')

const projectRefs = useTemplateRef<HTMLLIElement[]>('projectRefs')

const previewRef = useTemplateRef('previewRef')

const { data: projects } = await useAsyncData('projects', () =>
    queryCollection('projects').order('order', 'ASC').all(),
)

let scrollContext: gsap.Context | undefined

onMounted(() => {
    scrollContext = gsap.context(() => {
        projectRefs.value?.forEach((element) => {
            gsap.fromTo(
                element,
                {
                    autoAlpha: 0,
                    y: 200,
                },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.9,
                    ease: 'power3.out',
                    clearProps: 'transform',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 85%',
                        once: true,
                    },
                },
            )
        })
    }, sectionRef.value ?? undefined)
})

onBeforeUnmount(() => {
    scrollContext?.revert()
})
</script>
