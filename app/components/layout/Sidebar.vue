<template>
    <nav
        id="sidebar"
        ref="menuRef"
        class="invisible fixed z-50 flex h-full w-full flex-col justify-between bg-black px-3 md:px-6 lg:px-12 pb-8 max-lg:pt-14 lg:py-28 uppercase text-white/80 md:left-1/2 md:w-1/2"
    >
        <ul class="flex flex-col space-y-4 overflow-hidden">
            <li
                v-for="link in links"
                :key="link.sectionId"
                ref="linkRefs"
            >
                <button
                    type="button"
                    class="cursor-pointer transition-all duration-300 hover:text-white text-5xl md:text-6xl lg:text-8xl 2xl:text-9xl"
                    @click="scrollToSection(link.sectionId)"
                >
                    {{ link.name }}
                </button>
            </li>
        </ul>

        <div
            ref="contactRef"
            class="flex flex-col flex-wrap justify-between space-y-3 lg:space-y-6 xl:flex-row"
        >
            <div class="font-light">
                <p class="tracking-wider text-white/50">
                    E-post
                </p>

                <NuxtLink
                    to="mailto:liam.hjalmarssons@gmail.com"
                    class="text-pretty text-lg lg:text-xl tracking-widest lowercase"
                >
                    liam.hjalmarssons@gmail.com
                </NuxtLink>
            </div>

            <div class="font-light">
                <p class="tracking-wider text-white/50">
                    Sociala medier
                </p>

                <div class="flex flex-col md:flex-row md:space-x-2 max-md:space-y-2">
                    <NuxtLink
                        v-for="social in socials"
                        :key="social.name"
                        :to="social.href"
                        target="_blank"
                        :aria-label="`Gå till sektion ${social.name}`"
                        class="text-xs lg:text-sm leading-loose tracking-widest uppercase transition-colors duration-300 hover:text-white"
                    >
                        {{ social.name }}
                    </NuxtLink>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { links } from '~/data/links'
import { socials } from '~/data/socials'

const open = defineModel<boolean>('open', { default: false })

const menuRef = ref<HTMLElement | null>(null)

const linkRefs = ref<HTMLLIElement[]>([])

const contactRef = ref<HTMLDivElement | null>(null)

let animation: GSAPTimeline

function scrollToSection(id: string) {
    open.value = false

    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const menuAnimation = () => {
    animation?.kill()

    animation = gsap.timeline()

    if (open.value) {
        animation.set(menuRef.value, { autoAlpha: 1 })

        animation.fromTo(menuRef.value, {
            xPercent: 100,
        }, {
            xPercent: 0,
            duration: 0.9,
            ease: 'power3.out',
        })

        animation.fromTo(linkRefs.value, {
            autoAlpha: 0,
            x: -200,
        }, {
            autoAlpha: 1,
            x: 0,
            duration: 0.5,
            ease: 'power2.out',
            stagger: 0.2,
        }, '<0.1')

        animation.fromTo(contactRef.value, {
            autoAlpha: 0,
            y: 200,
        }, {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
        }, '<0.4')
    } else {
        animation.to(contactRef.value, {
            autoAlpha: 0,
            y: 200,
            duration: 0.3,
            ease: 'power2.in',
        })

        animation.to(linkRefs.value, {
            autoAlpha: 0,
            x: -200,
            duration: 0.3,
            ease: 'power2.in',
            stagger: {
                amount: 0.15,
                from: 'end',
            },
        }, '<')

        animation.to(menuRef.value, {
            xPercent: 100,
            duration: 0.6,
            ease: 'power3.in',
        }, '<0.2')

        animation.set(menuRef.value, { autoAlpha: 0 })
    }
}

watch(open, () => {
    menuAnimation()
})

onBeforeUnmount(() => {
    animation?.kill()
})
</script>
