<template>
  <div class="card border border-zinc-200 font-poppins">
    <div class="py-4 px-5 flex justify-around items-center">
      <div class="title">
        <span class="text-[16x] text-black font-bold uppercase">{{ category.name }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  category: Object
})
</script>