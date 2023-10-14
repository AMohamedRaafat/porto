<template>
  <nav class="h-24 w-full bg-white text-black font-bold font-poppins sticky top-0 z-10">
    <div class="container mx-auto justify-between flex flex-wrap items-center h-full px-6">
      <LogoVue />
      <!--Nav Bar Show only large Screen-->
      <NavigationVue />
      <!---->
      <FastAccess :showSearch="showSearch" />
    </div>
    <input :class="`bg-zinc-100 w-[400px] absolute right-10  ${searchBarMobile ? 'md:hidden' : 'hidden'
      } md:hidden focus:outline-none p-3 indent-2 border-zinc-300 border rounded-full text-sm font-normal`" type="text"
      placeholder="Search ..." name="search" />
  </nav>
</template>

<script setup>

import NavigationVue from './LargeNav/NavigationVue.vue'
import FastAccess from './LargeNav/FastAccess.vue'
import LogoVue from './LargeNav/LogoVue.vue'
import { ref } from 'vue'

const searchBarMobile = ref(false)
const showSearch = () => {
  searchBarMobile.value = !searchBarMobile.value
}

</script>

<style scoped>
a.router-link-exact-active {
  color: #4db7b3;
}
</style>
