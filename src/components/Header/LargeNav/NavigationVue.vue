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
        <RouterLink class="font-semibold uppercase cursor-pointer" to="/cart">Cart

        </RouterLink>

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
    <input list="products" v-model="id"
      class="bg-zinc-100 xl:w-[400px] md:w-[150px] focus:outline-none p-3 indent-2 border-none border-r-zinc-300 rounded-l-full rounded-lb-full"
      type="text" placeholder="Search ..." name="search" />
    <select class="bg-zinc-100 p-3 text-sm focus:outline-none" name="cat">
      <option value="all">All Categories</option>
      <option value="laptops">Laptops</option>
      <option value="mobiles">Mobiles</option>
      <option value="cameras" class="icon-[mdi--arrow-left]">Cameras</option>
      <option value="accessories">Accessories</option>
    </select>
    <SearchList />
    <button
      class="bg-zinc-900 flex justify-center p-2 w-[70px] text-center border-zinc-900 rounded-r-full rounded-rb-full"
      @click="$router.push(`/product/${id}`)">
      <Icon icon=" carbon:search" class="text-3xl text-white" />
    </button>
  </div>
  <!---->
</template>
<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { RouterLink, useRouter } from 'vue-router'
import SearchList from './SearchList.vue'

const $router = useRouter()
const id = ref()
</script>

<style scoped>
a.router-link-exact-active {
  color: #4db7b3;
}
</style>
