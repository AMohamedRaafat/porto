<template>
    <datalist id="products">
        <option v-for="item in products" :key="item.id" :value="item.id" class=" cursor-pointer">{{ item.title
        }}</option>
    </datalist>
</template>
<script setup>
import useProducts from '@/stores/Product/useProducts'
import { storeToRefs } from 'pinia'
const allProducts = useProducts()
const { products } = storeToRefs(allProducts)
</script>