<template>
  <!--Nav Bar Show only large Screen-->
  <div class="nav mx-[20px] hidden md:flex">
    <ul class="flex text-[13.3px]">
      <li class="p-3">
        <RouterLink class="font-semibold uppercase" to="/">Home</RouterLink>
      </li>
      <li class="p-3">
        <RouterLink class="font-semibold uppercase" to="/shop">Shop</RouterLink>
      </li>
      <li class="p-3">
        <RouterLink class="font-semibold uppercase" to="/products">Products</RouterLink>
      </li>
      <li class="p-3 relative">
        <RouterLink @click="showMenu" class="font-semibold uppercase cursor-pointer" to="/pages">Pages
          <svg class="inline" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path fill="#000"
              d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z" />
          </svg>
        </RouterLink>
        <ul class="w-[100px] hidden p-1 bg-white z-10 border border-zinc-300 absolute mt-2 text-[13.3px]">
          <li class="py-2 px-1">Page 1</li>
          <li class="py-2 px-1">Page 1</li>
          <li class="py-2 px-1">Page 1</li>
          <li class="py-2 px-1">Page 1</li>
          <li class="py-2 px-1">Page 1</li>
        </ul>
      </li>
      <li class="p-3">
        <a class="font-semibold uppercase" href="/features">Features</a>
      </li>
      <li class="p-3">
        <RouterLink class="font-semibold uppercase" to="/buy">Buy Porto!</RouterLink>
      </li>
    </ul>
  </div>

  <div class="flex-1 relative hidden md:flex xs:hidden justify-center items-center">
    <input
      class="bg-zinc-100 xl:w-[400px] md:w-[150px] focus:outline-none p-3 indent-2 border-none border-r-zinc-300 rounded-l-full rounded-lb-full"
      type="text" placeholder="Search ..." name="search" />
    <select class="bg-zinc-100 p-3 text-sm focus:outline-none" name="cat">
      <option value="all">All Categories</option>
      <option value="laptops">Laptops</option>
      <option value="mobiles">Mobiles</option>
      <option value="cameras" class="icon-[mdi--arrow-left]">Cameras</option>
      <option value="accessories">Accessories</option>
    </select>
    <button
      class="bg-zinc-900 flex justify-center p-2 w-[70px] text-center border-zinc-900 rounded-r-full rounded-rb-full">
      <Icon icon="carbon:search" class="text-3xl text-white " />
    </button>
  </div>
  <!---->
</template>
<script setup>
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'
const showMenu = (e) => {
  let name = e.target.getAttribute('data-drop')
  console.log(name)
  document.querySelector(`[data-dropmenu=${name}]`)
}
</script>

<style scoped>
a.router-link-exact-active {
  color: #4db7b3;
}
</style>
