<template>
    <div ref="headerRef">
        <div :style="{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }">
            <div
                ref="titleRef"
                class="flex flex-col justify-center gap-3 md:gap-6 pb-6 pt-12 lg:pt-24 lg:gap-12 px-3 md:px-6 lg:px-12 max-w-300"
            >
                <slot name="heading" />
            </div>
        </div>

        <div
            v-if="$slots.default"
            class="relative px-3 md:px-6 lg:px-12"
        >
            <div class="py-3 md:py-8 lg:py-12">
                <slot />
            </div>
        </div>
    </div>
</template>
