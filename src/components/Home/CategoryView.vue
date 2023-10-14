<template>
  <section class="container mx-auto px-8 my-8">
    <div class="title text-center font-bold">
      <h2 class="text-black uppercase">{{ title }}</h2>
    </div>
    <div class="swiper py-5 my-5">
      <Swiper :slides-per-view="1" :loop="true" :breakpoints="{
        600: { slidesPerView: 2 },
        900: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
        400: { slidesPerView: 2 }
      }">
        <SwiperSlide v-for="(category, i) in categories" :key="i">
          <CategoryCard :category="category" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import useCategory from '@/stores/Category/useCategory'
import { Swiper, SwiperSlide } from 'swiper/vue'
import CategoryCard from './CategoryCard.vue'
defineProps({
  title: {
    type: String
  }
})
const CategoryStore = useCategory()
const { categories } = storeToRefs(CategoryStore)
</script>
