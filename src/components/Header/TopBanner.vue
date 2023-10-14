<template>
  <div class="flex flex-wrap bg-white py-1 border border-b-gray-300 w-full text-black font-sans">
    <div class="container mx-auto flex justify-between px-6 py-1">
      <div class="currency p-1 text-sm text-zinc-500 font-semibold relative">
        <button @click="toggleShow">
          {{ currency }}
          <svg class="inline" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path fill="#000"
              d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z" />
          </svg>
        </button>
        <div v-if="show"
          class="absolute w-[120px] bg-white border-zinc-200 tracking-wide rounded-b-lg rounded-tr-lg border p-2 bottom-[-40px] z-20 h-10">
          <button @click="changeCurrency(alternateCurrency, currency)">
            {{
              alternateCurrency == 'EUR'
              ? alternateCurrency + '- EURO'
              : alternateCurrency + '- US Dollar'
            }}
          </button>
        </div>
      </div>

      <div class="fast-links">
        <ul class="list flex flex-wrap justify-between">
          <li v-for="(link, i) in links" :key="i"
            class="p-1 w-auto sm-w-[50px] text-center text-sm cursor-pointer px-5 uppercase hover:text-black transition relative after:absolute after:content-[''] after:w-[3px] after:h-[10px] after:rounded after:last:hidden after:bg-zinc-300 after:right-0 after:top-[31%]">
            <RouterLink :to="link.path" @click="link.signOutMethod" class="font-[500] font-sans text-zinc-400">{{
              link.title
            }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import TopBannerMixin from '@/mixins/TopBannerMixin'
const { links,
  show,
  currency,
  alternateCurrency,
  toggleShow,
  changeCurrency,
  RouterLink } = TopBannerMixin()
</script>
