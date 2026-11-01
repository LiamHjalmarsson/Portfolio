<template>
    <section
        id="tech"
        class="flex items-center justify-center py-16 md:py-24 xl:px-12 lg:py-48 2xl:py-64"
    >
        <div class="flex w-full flex-col items-center justify-between space-y-12 lg:px-12 2xl:space-y-24">
            <TextLines
                :text="text"
                placement="center"
                class="max-w-480 text-center text-neutral-800" />


            <div class="w-full overflow-hidden">
                <div class="grid grid-cols-12">
                    <TechnologyCard
                        v-for="item in orderedItems"
                        :key="item.id"
                        :technology="item"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

const containerRef = useTemplateRef('containerRef')

const textRef = useTemplateRef('textRef')

const { data: technologies } = await useAsyncData('technologies', () =>
    queryCollection('technologies')
        .where('featured', '=', true)
        .order('order', 'ASC')
        .all(),
)

const text = 'Genom arbete med både kod och design har jag utvecklat ett helhetsperspektiv på digitala produkter. Det har jag med mig när jag bygger och tänker.'

const orderedItems = computed(() => {
    const items = technologies.value ?? []

    return [
        ...items.filter(item => item.size === 'lg'),
        ...items.filter(item => item.size === 'sm'),
    ]
})

let animation: gsap.core.Timeline | undefined

onMounted(() => {
    animation = gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.value,
            start: 'top 85%',
            toggleActions: 'play none none none',
        },
    })

    animation.fromTo(
        containerRef.value,
        {
            clipPath: 'inset(0% 0% 100% 0%)',
        },
        {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 0.9,
            ease: 'power3.out',
        },
    )

    animation.fromTo(
        textRef.value,
        {
            opacity: 0,
            y: 200,
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            clearProps: 'transform',
        },
        '<0.1',
    )
})

onBeforeUnmount(() => {
    animation?.scrollTrigger?.kill()
    animation?.kill()
})
</script>
