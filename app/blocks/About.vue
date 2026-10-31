<template>
    <section
        id="about"
        ref="containerRef"
        class="h-fit lg:px-3">
        <div class="bg-black rounded-b-4xl">
            <Header
                subtitle="~/mer-om-mig"
                title="Om mig"
                theme="light"
                :with-scroll-trigger="true">
                <TextLines :text="aboutPrimaryText" />
            </Header>

            <div
                class="flex max-md:flex-col-reverse md:items-center justify-between max-md:space-y-reverse max-md:mt-6 mt-12 max-md:space-y-12 md:space-x-16 px-3 md:px-6 lg:px-12 pb-16">
                <TextLines :text="aboutSecondaryText" class="text-neutral-200" />

                <div ref="imageRef" class="flex-1 h-140 relative overflow-hidden min-w-80 max-w-200">
                    <NuxtImg
                        src="/images/me.png"
                        format="webp"
                        alt="Svartvit bild på Liam Hjalmarsson som står utomhus vid ett räcke med hav och klippor i bakgrunden och under en molnig himmel."
                        class="rounded-3xl object-cover lg:absolute w-full h-full" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const aboutPrimaryText = `Jag är baserad i Skåne och hämtar mycket inspiration
från naturen och stillheten runt omkring.
Ofta hittar du mig ute på vandring eller med mina två hundar.`

const aboutSecondaryText = `För mig handlar mycket om att vara närvarande i det jag gör.
Att lyssna, justera och låta erfarenhet forma nästa steg,
snarare än att skynda vidare.`

const containerRef = ref<HTMLElement | null>(null)

const imageRef = ref<HTMLDivElement | null>(null)

let scaleAnimation: GSAPTimeline

let imageAnimation: GSAPTimeline

onMounted(() => {
    scaleAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.value,
            start: 'bottom 65%',
            end: 'bottom 10%',
            scrub: true,
        },
    })

    scaleAnimation.to(containerRef.value, {
        scale: 0.85,
        ease: 'power1.inOut',
    })

    imageAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.value,
            start: 'top 45%',
            toggleActions: 'play none none none',
        },
    })

    imageAnimation.fromTo(imageRef.value, {
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
    }, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 2,
        ease: 'power4.out',
    })
})

onBeforeUnmount(() => {
    scaleAnimation?.kill()

    imageAnimation?.kill()
})
</script>
