<template>
  <div class="carousel font-poppins">
    <Swiper :slides-per-view="1">
      <SwiperSlide class="">
        <div
          class="flex sm:flex-col flex-wrap lg:flex-row mb-5 p-8 justify-evenly items-center border border-b-zinc-300 h-auto overflow-hidden">
          <div class="flex flex-col p-8">
            <span class="text-zinc-500 uppercase text-3xl font-semibold my-1">extra</span>
            <span class="text-zinc-900 uppercase text-6xl font-bold my-1">20% OFF</span>
            <ItemHero text="Bikes" />
            <span class="text-zinc-900 text-5xl text-center font-bold font-summer my-1">Summer Sale</span>
            <button class="uppercase w-full bg-zinc-900 p-4 tracking-wider text-[17px] text-white my-8">
              Shop All Sale
            </button>
          </div>
          <div class="img relative">
            <img src="/img/caro.png" alt="" class="w-[700px] h-[400px]" />
            <div class="offer flex justify-start m-8 text-zinc-900">
              <div class="price w-[200px] text-lg font-bold">
                ONLY <span class="text-3xl font-bold text-orange-700">$399</span>
              </div>
              <div class="ml-5 text-xs text-left w-fit">
                <p class="font-semibold text-sm">Start Shopping Right Now</p>
                <p>* Get Puls Discount Buying Package</p>
              </div>
            </div>
            <div
              class="absolute hidden xl:block w-[500px] h-[700px] top-0 left-10 bg-gradient-to-b from-zinc-100 to-zinc-300 -skew-x-12 -z-10">
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="border-b-zinc-300">
        <div
          class="flex sm:flex-col md:flex-row-reverse flex-col-reverse flex-wrap p-8 justify-evenly items-center border border-b-zinc-300">
          <div class="flex flex-col">
            <span class="text-zinc-500 uppercase text-3xl font-semibold my-1">extra</span>
            <span class="text-zinc-900 uppercase text-6xl font-bold my-1">20% OFF</span>
            <ItemHero text="Bikes" />
            <span class="text-zinc-900 text-5xl text-center font-bold font-summer my-1">Summer Sale</span>
            <button class="uppercase w-full bg-zinc-900 p-4 tracking-wider text-[17px] text-white my-8">
              Shop All Sale
            </button>
          </div>
          <div class="img">
            <img src="/img/caro2.png" class="w-[700px] h-[500px]" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import ItemHero from './ItemHero.vue'
</script>
