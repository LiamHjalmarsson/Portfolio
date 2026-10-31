
<template>
    <section
        id="home"
        class="relative flex flex-col justify-end overflow-hidden"
    >
        <div
            class="h-[30vh] lg:h-[55vh] flex flex-col max-xl:flex-1 w-full items-start xl:items-end xl:justify-end pt-24 md:pt-32 xl:pt-34 px-3 md:px-6 lg:px-12"
        >
            <div
                class="grid max-lg:flex-1 min-h-0 w-full h-1/2 lg:h-130 2xl:h-162 xl:w-180 2xl:w-220 grid-cols-12 grid-rows-12 gap-3 overflow-hidden"
            >
                <div
                    ref="leftCardRef"
                    class="col-span-6 sm:col-span-6 row-span-6 max-sm:row-span-12 sm:row-span-12 relative overflow-hidden rounded-2xl lg:rounded-4xl p-6"
                >
                    <NuxtImg
                        src="/images/me.png"
                        format="webp"
                        :preload="{ fetchPriority: 'high' }"
                        fetchpriority="high"
                        loading="eager"
                        quality="80"
                        sizes="50vw lg:45vw xl:360px 2xl:440px"
                        alt="Svartvit bild på Liam Hjalmarsson som står utomhus vid ett räcke med hav och klippor i bakgrunden och under en molnig himmel."
                        class="absolute inset-0 h-full w-full object-cover"
                    />
                </div>

                <div
                    ref="socialsCardRef"
                    class="col-span-6 sm:col-span-6 row-span-2 sm:row-span-2 flex items-center justify-between overflow-hidden rounded-2xl lg:rounded-4xl bg-black p-3 text-white"
                >
                    <NuxtLink
                        v-for="social in socials"
                        :key="social.name"
                        :to="social.href"
                        target="_blank"
                        :aria-label="`Besök ${social.name}`"
                        class="flex h-full items-center justify-center w-full"
                    >
                        <Icon :name="social.icon" size="36" />
                    </NuxtLink>
                </div>

                <div
                    ref="rotatingCardRef"
                    class="col-span-6 sm:col-span-6 row-span-6 max-sm:row-span-10 sm:row-span-10 relative overflow-hidden rounded-2xl lg:rounded-4xl"
                >
                    <div class="absolute inset-0">
                        <NuxtImg
                            :src="rotatingImageSources[currentImageIndex]"
                            alt=""
                            format="webp"
                            quality="80"
                            sizes="50vw lg:45vw xl:360px 2xl:440px"
                            class="h-full w-full object-cover"
                        />
                    </div>

                    <div
                        v-if="incomingImageSrc"
                        ref="incomingImageRef"
                        class="absolute inset-0 opacity-0"
                        aria-hidden="true"
                    >
                        <NuxtImg
                            :src="incomingImageSrc"
                            alt=""
                            format="webp"
                            quality="80"
                            sizes="50vw lg:45vw xl:360px 2xl:440px"
                            fetchpriority="low"
                            class="h-full w-full object-cover"
                            @load="onIncomingImageLoad"
                        />
                    </div>
                </div>
            </div>
        </div>

        <Header
            title="Liam Hjalmarsson"
            subtitle="~/Fullstackutvecklare - Skåne"
            theme="dark"
            :with-scroll-trigger="false"
        >
            <TextLines
                :text="heroDescriptionText"
            />
        </Header>
    </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { socials } from '~/data/socials'

const heroDescriptionText = `Här utforskar jag kod, design och digitala lösningar.
Kika runt och hör av dig om du vill bygga något tillsammans,
eller bara ta en kopp kaffe och prata idéer.`

const rotatingImageSources = [
    '/images/nemo.png',
    '/images/murphy.png',
    '/images/nemo1.png',
]

const leftCardRef = ref<HTMLDivElement | null>(null)

const socialsCardRef = ref<HTMLDivElement | null>(null)

const rotatingCardRef = ref<HTMLDivElement | null>(null)

const incomingImageRef = ref<HTMLDivElement | null>(null)

const currentImageIndex = ref(0)

const incomingImageSrc = ref<string | null>(null)

let introAnimation: gsap.core.Tween

let swapAnimation: gsap.core.Tween

let imageSwapTimeout: ReturnType<typeof setTimeout> | undefined

function scheduleImageSwap() {
    clearTimeout(imageSwapTimeout)

    imageSwapTimeout = setTimeout(() => {
        const nextIndex = (currentImageIndex.value + 1) % rotatingImageSources.length

        incomingImageSrc.value = rotatingImageSources[nextIndex] ?? null
    }, 5000)
}

async function onIncomingImageLoad() {
    await nextTick()

    const element = incomingImageRef.value

    if (!element || !incomingImageSrc.value) {
        return
    }

    swapAnimation?.kill()

    swapAnimation = gsap.to(element, {
        opacity: 1,
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: () => {
            currentImageIndex.value = (currentImageIndex.value + 1) % rotatingImageSources.length

            incomingImageSrc.value = null

            scheduleImageSwap()
        },
    })
}

onMounted(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reducedMotion) {
        return
    }

    const cards = [
        leftCardRef.value,
        socialsCardRef.value,
        rotatingCardRef.value,
    ].filter((element): element is HTMLDivElement => element !== null)

    introAnimation = gsap.fromTo(
        cards,
        {
            y: 40,
            scale: 0.96,
        },
        {
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: 'power2.out',
            stagger: 0.08,
            clearProps: 'transform',
        },
    )

    scheduleImageSwap()
})

onBeforeUnmount(() => {
    clearTimeout(imageSwapTimeout)

    introAnimation?.kill()

    swapAnimation?.kill()
})
</script>
