<template>
  <Swiper :slides-per-view="3" :breakpoints="{
    600: { slidesPerView: 3 },
    900: { slidesPerView: 3 },
    400: { slidesPerView: 1 }
  }">
    <SwiperSlide class="">
      <div class="flex p-3 w-full bg-[#4db7b3] text-white justify-center items-center">
        <Icon icon="mdi:truck-fast" class="text-white mr-2 text-2xl" />
        <p class="uppercase font-bold">Free Shipping & Return</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="flex p-3 w-full bg-[#43ada9] text-white justify-center items-center">
        <Icon icon="ic:twotone-attach-money" class="font-bold text-white mr-2 text-2xl" />
        <p class="uppercase font-bold">MONEY BACK GUARANTEE</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="flex p-3 w-full bg-[#4db7b3] text-white justify-center items-center">

        <Icon icon="ri:24-hours-fill" class="text-white mr-2 text-2xl" />
        <p class="uppercase font-bold">ONLINE SUPPORT 24/7</p>
      </div>
    </SwiperSlide>
  </Swiper>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Icon } from '@iconify/vue'
</script>
