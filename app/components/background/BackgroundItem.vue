<template>
    <div
        data-stack-card
        class="relative w-full px-3 pb-6 md:px-6 lg:px-12"
        :style="{ zIndex: index + 1 }"
    >
        <div
            data-stack-inner
            class="relative origin-top overflow-hidden rounded-3xl border border-white/10 bg-black shadow"
        >
            <span
                class="pointer-events-none absolute -right-3 select-none text-[9rem] font-bold leading-none tracking-tighter text-primary/6 lg:-bottom-6 lg:text-[16rem]"
                aria-hidden="true"
            >
                {{ index + 1 }}
            </span>

            <div class="flex h-14 justify-between items-center gap-x-4 gap-y-2 border-b border-white/10 px-5 py-4 text-xs md:px-8 lg:px-12">
                <span class="text-primary max-lg:hidden">
                    commit {{ background.code }}
                </span>

                <div>
                    <span
                        v-if="index === 0"
                        class="text-green-500 mr-2"
                    >
                        (HEAD → nu)
                    </span>

                    <Badge>
                        {{ background.type === 'work' ? 'Arbete' : 'utbildning' }}
                    </Badge>
                </div>
            </div>

            <div class="relative flex flex-col gap-8 p-5 font-light md:p-8 lg:gap-12 lg:p-12">
                <div class="flex justify-between gap-5 max-sm:flex-col sm:items-center">
                    <h2 class="text-2xl font-semibold md:text-3xl lg:text-4xl 2xl:text-5xl text-white">
                        {{ background.title }}
                    </h2>

                    <p class="flex items-center gap-2 text-sm font-medium tracking-widest text-white uppercase md:text-right md:text-base">
                        <Icon
                            :name="background.type === 'work'
                                ? 'mdi:office-building-outline'
                                : 'mdi:school-outline'"
                            size="24"
                            aria-hidden="true"
                        />

                        {{ background.company }}
                    </p>
                </div>

                <p class="text-base text-pretty leading-relaxed tracking-widest text-neutral-200 md:text-lg lg:text-2xl 2xl:text-3xl">
                    {{ background.description }}
                </p>

                <ul
                    ref="listRef"
                    class="grid gap-3 lg:grid-cols-2 lg:gap-6 2xl:grid-cols-3"
                >
                    <li
                        v-for="area in background.areas"
                        :key="area.title"
                    >
                        <div class="h-full rounded-2xl border border-white/10 bg-white/3 p-6 lg:p-8">
                            <div class="mb-5 flex items-center gap-5">
                                <span class="grid size-11 shrink-0 place-items-center rounded-xl bg-white/5 text-primary-500">
                                    <Icon
                                        :name="area.icon"
                                        size="24"
                                    />
                                </span>

                                <h3 class="text-lg font-semibold tracking-wide text-neutral-200 md:text-xl">
                                    {{ area.title }}
                                </h3>
                            </div>

                            <div class="flex flex-wrap gap-2">
                                <Badge
                                    v-for="tech in area.technologies"
                                    :key="tech"
                                >
                                    {{ tech }}
                                </Badge>

                                <Badge
                                    v-for="skill in  area.skills"
                                    :key="skill"
                                >
                                    {{ skill }}
                                </Badge>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Collections } from '@nuxt/content'

gsap.registerPlugin(ScrollTrigger)

defineProps<{
    background: Collections['background']
    index: number
}>()

const listRef = ref<HTMLUListElement | null>(null)

let animation: GSAPTimeline

onMounted(() => {
    const list = listRef.value

    if (!list) {
        return
    }

    animation = gsap.timeline({
        scrollTrigger: {
            trigger: list,
            start: 'top 85%',
        },
    })

    animation.fromTo(list.children, {
        autoAlpha: 0,
        y: 120,
    }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.12,
    })
})

onBeforeUnmount(() => {
    animation?.kill()
})
</script>
