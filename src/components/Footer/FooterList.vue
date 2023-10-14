<template>
  <div class="flex">
    <div class="head">
      <h3 class="font-bold text-lg text-white">{{ title }}</h3>
      <ul class="my-10 text-sm">
        <li class="my-2" v-for="(link, i) in linkList" :key="i">
          <a :href="link.href" class="hover:text-white"> {{ link.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  linkList: {
    type: Array,
    default: () => []
  }
})
</script>
