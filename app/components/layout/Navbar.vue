<template>
    <Sidebar
        v-model:open="open"
    />

    <Hamburger
        v-model:open="open"
    />
</template>


<script setup lang="ts">
const open = ref(false)

function closeOnEscape(event: KeyboardEvent) {
    if (event.key !== 'Escape') {
        return
    }

    open.value = false
}

onMounted(() => {
    window.addEventListener('keydown', closeOnEscape)
})

onBeforeUnmount(() => {
    window.removeEventListener('keydown', closeOnEscape)
})
</script>
