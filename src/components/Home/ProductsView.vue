<template>
  <section class="container mx-auto px-8 my-5">
    <div class="title text-center font-bold">
      <h2 class="text-black uppercase">{{ title }}</h2>
    </div>
    <div class="swiper py-5 my-5">
      <Swiper v-if="!load" :slides-per-view="1" :space-between="10" :loop="true" :breakpoints="{
        600: { slidesPerView: 2 },
        900: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
        400: { slidesPerView: 2 }
      }">
        <SwiperSlide v-for="item in productsInfo" :key="item.id">
          <ProductCard :item="item" />
        </SwiperSlide>
      </Swiper>
      <div v-else>
        <LoaderVue />
      </div>
    </div>
  </section>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import ProductCard from './ProductCard.vue'
import useProducts from '@/stores/Product/useProducts'
import { storeToRefs } from 'pinia'
import LoaderVue from '../utilities/LoaderVue.vue'

defineProps({
  title: {
    type: String
  },
  productsInfo: {
    type: Array,
    default: () => []
  }
})
const loading = useProducts()
const { load } = storeToRefs(loading)
</script>
