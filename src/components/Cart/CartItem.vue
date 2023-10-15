<template>
    <td class="h-36 flex items-center">
        <div class="item-img p-4 mr-3 bg-slate-100 overflow-hidden">
            <img :src="img" class="w-24 h-24 overflow-hidden" alt="Product Title" />
        </div>
        <div class="item-title">
            <h3 class="font-[400]">{{ item.title }}</h3>
        </div>
    </td>
    <td>${{ item.price }}</td>
    <td>
        <div class="">
            <button @click="decreaseQty" class="p-2 h-14 w-10 border font-bold">-</button>
            <input type="text" v-model="Qty" class="w-14 h-14 p-2 font-bold border text-center">
            <button @click="increaseQty" class="p-2 h-14 w-10 border font-bold">+</button>
        </div>
    </td>
    <td class="font-bold">${{ item.price * Qty }}</td>
</template>
<script setup>
import { ref, onBeforeMount } from 'vue'
import FastAccessMixin from '@/mixins/FastAccessMixin';

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
const Qty = ref(props.item.quantity);
const increaseQty = () => {
    Qty.value++;
}
const decreaseQty = () => {
    Qty.value == 1 ? Qty.value : Qty.value--
}
console.log(props.item);
</script>