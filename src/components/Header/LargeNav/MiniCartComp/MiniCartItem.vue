<template>
    <div class="cart-item flex justify-between my-5 items-center pb-5 border-b border-zinc-300 box-content">
        <div class="flex flex-col justify-center">
            <span :title="item.title"
                class="item-title text-sm font-bold text-black text-ellipsis whitespace-nowrap w-36 overflow-hidden ">{{
                    item.title }}</span>
            <span class="item-title text-xs font-semibold  text-zinc-500 my-1">Price : {{ item.price }}$</span>
            <span class="item-title text-xs font-semibold  text-zinc-500  ">Qty : {{ item.quantity }}</span>
        </div>
        <div class="w-24 bg-zinc-100 h-16 flex justify-center items-center  ">
            <img :src="img" alt="" class="w-20" />
        </div>
    </div>
</template>
<script setup>
import { onBeforeMount, ref } from 'vue'
import FastAccessMixin from '../../../../mixins/FastAccessMixin';
const props = defineProps({
    item: {
        type: Object
    }
})
const img = ref()
const { singleProduct, getProduct } = FastAccessMixin()
onBeforeMount(async () => {
    await getProduct(props.item.id)
    img.value = singleProduct.value.thumbnail
})
</script>