<template>
    <NuxtLink
        :to="project.href"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="`Besök Projekt ${project.title}`">
        <div
            class="lg:border-b px-3 md:px-12 py-6 md:py-12 lg:py-20 relative max-lg:flex max-lg:flex-col max-md:space-y-3 max-md:space-x-0 max-lg:space-x-6 max-lg:overflow-hidden group hover:bg-black transition duration-300">
            <div class="flex max-lg:flex-col justify-between items-center relative z-10">
                <Heading tag="h3" class="group-hover:text-primary duration-300 transition max-lg:mb-3">
                    {{ project.title }}
                </Heading>

                <div
                    class="flex max-lg:space-y-3 max-md:flex-row max-lg:flex-col lg:space-x-6 max-md:space-x-6">
                    <p
                        v-for="tech in project.technologies"
                        :key="tech"
                        class="uppercase font-medium group-hover:text-neutral-100 transition duration-300"
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
</template>

<script setup lang="ts">
defineProps<{project: Project}>()
</script>
