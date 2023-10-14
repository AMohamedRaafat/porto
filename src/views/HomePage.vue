<script setup>
import { storeToRefs } from 'pinia'
import HeroSection from '@/components/Home/HeroSection.vue'
import ProductsView from '@/components/Home/ProductsView.vue'
import CategoryView from '@/components/Home/CategoryView.vue'
import DivCenter from '@/components/Home/DivCenter.vue'
import FlashSale from '@/components/Home/FlashSale.vue'
import useProducts from '@/stores/Product/useProducts'
const allProducts = useProducts()
const { products } = storeToRefs(allProducts)

</script>
<template>
  <HeroSection />
  <ProductsView title="most popular products" :productsInfo="products" />
  <CategoryView />
  <DivCenter />
  <ProductsView title="trending accessories" :productsInfo="products" />
  <FlashSale />
</template>
