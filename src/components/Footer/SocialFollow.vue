<template>
  <div class="follow-us bg-[#212529]">
    <div class="flex flex-wrap lg:flex-row xs:flex-col gap-4 justify-between">
      <div class="flex flex-row items-center px-11 py-8">
        <div class="logo mr-3">
          <Icon icon="ph:instagram-logo" class="text-6xl text-white" />
        </div>
        <div class="text">
          <p class="font-bold text-white text-lg">Follow Us on Instagram</p>
          <p class="text-zinc-300">@username</p>
        </div>
      </div>
      <Swiper class="xl:w-[70%] swiper-follow" :slides-per-view="6" :loop="true" :breakpoints="{
        600: { slidesPerView: 2 },
        900: { slidesPerView: 4 },
        1024: { slidesPerView: 6 },
        400: { slidesPerView: 2 }
      }">
        <SwiperSlide v-for="index in 10" :key="index" class="mr-reset">
          <div class="w-full h-full relative group cursor-pointer">
            <img src="/img/footer.jpg" alt="" />
            <div
              class="overlay absolute inset-0 bg-[rgba(0,0,0,.6)] group-hover:bg-transparent transition-all duration-500">
            </div>
            <div class="absolute justify-center hidden items-center inset-0 group-hover:flex transition-all">
              <Icon icon="ph:instagram-logo" class="text-5xl text-white" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Icon } from '@iconify/vue'
</script>
