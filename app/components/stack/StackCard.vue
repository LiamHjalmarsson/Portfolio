<template>
	<div
		class="group flex items-center justify-center border-r border-b border-black/5 hover:bg-black transition duration-300 relative"
		:class="[
			stack.size === 'large'
				? 'col-span-4 row-span-2 h-40 p-10 md:p-12 lg:h-52 2xl:h-96 last:border-b-0 nth-3:border-r-0'
				: 'col-span-4 h-40 p-6 sm:col-span-2 md:p-7 lg:h-52 2xl:h-80 max-sm:nth-6:border-r-0 last:border-r-0',
		]">
		<span
			ref="iconWrapRef"
			class="font-bold group-hover:text-primary transition duration-300">
			<Icon  v-if="stack.icon" :name="stack.icon" :size=" stack.size === 'large' ?  90 : 75" />
		</span>

        <span class="absolute bottom-0 left-0 px-6 py-4 text-neutral-800 font-semibold text-sm group-hover:text-primary transition duration-300">
            {{ stack.title }}
        </span>
	</div>
</template>

<script setup lang="ts">
import type { Collections } from '@nuxt/content'

defineProps<{
    stack: Collections['technologies']
}>()
</script>
