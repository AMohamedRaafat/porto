<template>
  <div class="bg-[#4db7b3] flex flex-wrap items-center font-poppins">
    <div class="container mx-auto flex flex-wrap">
      <div class="flex flex-row items-center p-5">
        <div class="logo mr-3">
          <Icon icon="ic:outline-email" class="text-6xl text-white" />
        </div>
        <div class="text">
          <p class="font-bold text-white text-lg">Get Special Offers and Savings</p>
          <p class="text-zinc-300">Get all the latest information on Events, Sales and Offers.</p>
        </div>
      </div>
      <div class="flex flex-row items-center p-5 xs:w-full">
        <input type="email"
          class="xs:w-[200px] md:w-[600px] p-3 rounded-l-full focus:outline-none italic indent-4 text-sm text-black"
          placeholder="Enter Your Email" />
        <button class="p-3 px-5 rounded-r-full bg-white text-black font-semibold focus:outline-none text-sm">
          Subscribe
        </button>
      </div>
      <div class="flex flex-row items-center justify-between px-8 p-5 w-[220px]">
        <a href="#" class="flex items-center justify-center rounded-full bg-white text-black w-9 h-9 p-2">
          <Icon icon="bx:bxl-facebook" class="text-6xl text-gray-700" />
        </a><a href="#" class="flex items-center justify-center rounded-full bg-white text-black w-9 h-9 p-2">
          <Icon icon="bytesize:twitter" class="text-6xl text-gray-700" />

        </a><a href="#" class="flex items-center justify-center rounded-full bg-white text-black w-9 h-9 p-2">
          <Icon icon="bx:bxl-linkedin" class="text-6xl text-gray-700" />

        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Icon } from '@iconify/vue'
</script>