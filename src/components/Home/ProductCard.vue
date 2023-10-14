<template>
  <div class="w-full border border-zinc-100 text-center group  font-poppins">
    <!--Card Img-->
    <div class="bg-zinc-100 overflow-hidden -z-10 h-56 relative flex items-center justify-center">
      <div class="p-5">
        <img :src="item.images[item.images.length - 1]" class="w-full h-56" :alt="item.title" />
      </div>

      <!--Quick View Overlay-->
      <div
        class="flex items-center justify-center w-full text-white absolute bg-[#4db7b3] h-0 bottom-[-5px] group-hover:h-12 transition-all">
        <span class="font-semibold">Quick View</span>
      </div>

      <!-- Discount Tag-->
      <div
        class="discount flex items-center justify-center text-white text-xs absolute top-1 left-1 w-12 h-5 font-semibold bg-[#e27c7c]"
        v-if="item.discount">
        - {{ 100 * (item.price - item.oldPrice) / item.price }}%
      </div>
    </div>
    <div class="my-4 h-28">
      <!--Card Name-->

      <h4 class="font-semibold text-black h-12 text-ellipsis">{{ item.title }}</h4>
      <!--Card Rating-->
      <div class="rating flex justify-center h-10 items-center mt-1">
        <div class="flex items-center space-x-1">
          <svg class="w-3 h-3 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
            viewBox="0 0 22 20">
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg class="w-3 h-3 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
            viewBox="0 0 22 20">
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg class="w-3 h-3 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="currentColor" viewBox="0 0 22 20">
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg class="w-3 h-3 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="currentColor" viewBox="0 0 22 20">
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg class="w-3 h-3 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="currentColor" viewBox="0 0 22 20">
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        </div>
      </div>

      <!--Card Price-->
      <div class="price h-12 text-black">
        <!-- <span class="line-through font-bold text-zinc-500 mr-2 text-l">199$</span> -->
        <span class="font-bold text-xl text-zinc-600">{{ item.price }}$</span>
      </div>
    </div>
    <div>
      <!--Card Action-->
      <div class="justify-around relative">
        <!--Heart Button-->
        <button class="border-zinc-300 border p-2 absolute left-18 -z-10 group-hover:left-12 transition-all">
          <Icon icon="ph:heart" class="text-xl text-black" />
        </button>

        <!--Add To Cart Button-->
        <button @click="viewProduct(item.id)"
          class="hover:outline-none p-2 w-[115px] mx-auto bg-white z-10 border-zinc-300 border flex justify-around items-center group-hover:bg-[#4db7b3] group-hover:text-white">
          <Icon icon="ph:handbag" class="text-xl text-black group-hover:text-white" />
          <span class="font-bold text-xs text-zinc-600 group-hover:text-white">View Details</span>
        </button>
        <!--Chart Button-->

        <button
          class="border-zinc-300 border p-[6px] absolute right-15 -z-10 group-hover:right-12 bottom-0 bg-white-500 transition-all">

          <Icon icon="uil:signal-alt" class="text-xl text-black" />

        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
const router = useRouter()
defineProps({
  item: Object
})
const viewProduct = (id) => {
  console.log(id)
  router.push(`/product/${id}`)
}
</script>
