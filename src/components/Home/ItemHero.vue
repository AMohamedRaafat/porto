<template>
  <span
    class="text-zinc-900 uppercase text-3xl text-center relative before:absolute before:content-[''] before:w-[70px] before:h-1 before:rounded-full before:left-0 before:top-4 before:bg-zinc-900 font-bold after:absolute after:content-[''] after:w-[70px] after:h-1 after:rounded-full after:right-0 after:top-4 after:bg-zinc-900"
    >{{ text }}</span
  >
</template>
<script setup>
defineProps({
  text: {
    type: String
  }
})
</script>
