<template>
    <section
        id="background"
        class="min-h-screen lg:px-3">
        <div class="rounded-t-4xl bg-black pb-6">
                <Header
                    title="Vägen hit"
                    subtitle="~/vad-jag-har-gjort"
                    theme="light"
                    :with-scroll-trigger="true"
                >
                    <TextLines
                        :text="sectionText"
                        class="font-light uppercase"
                    />
                </Header>

            <div ref="stackRef" class="max-w-[1800px] mx-auto">
                <BackgroundItem
                    v-for="(background, index) in data"
                    :key="`${background.id}-${index}`"
                    :background="background"
                    :index="index"
                    :total="data?.length ?? 0"
                    :is-first-item="index === 0"
                />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const { data } = await useAsyncData('background', () =>
    queryCollection('background')
        .order('order', 'ASC')
        .all()
)

const sectionText = `Min resa inom tech började under utbildningen och har
sedan vuxit genom projekt, teamarbete och erfarenhet.
Här är en översikt av min bakgrund från studier till arbete.`

const stackRef = ref<HTMLElement | null>(null)

const TOP_OFFSET = 20

const PEEK = 50

let media: gsap.MatchMedia | undefined

onMounted(() => {
    media = gsap.matchMedia()

    media.add('(min-width: 1024px)', () => {
        const cards = gsap.utils.toArray<HTMLElement>('[data-stack-card]', stackRef.value)

        const lastCard = cards.at(-1)

        cards.forEach((card, index) => {
            const nextCard = cards[index + 1]

            if (!nextCard || !lastCard) {
                return
            }

            ScrollTrigger.create({
                trigger: card,
                start: `top top+=${TOP_OFFSET + index * PEEK}`,
                endTrigger: lastCard,
                end: `top top+=${TOP_OFFSET + (cards.length - 1) * PEEK}`,
                pin: true,
                pinSpacing: false,
            })

            gsap.fromTo(card.querySelector('[data-stack-inner]'), {
                scale: 1,
                filter: 'brightness(1)',
            }, {
                filter: 'brightness(0.55)',
                ease: 'none',
                scrollTrigger: {
                    trigger: nextCard,
                    start: 'top bottom',
                    end: `top top+=${TOP_OFFSET + (index + 1) * PEEK}`,
                    scrub: true,
                },
            })
        })
    })
})

onBeforeUnmount(() => {
    media?.revert()
})
</script>
