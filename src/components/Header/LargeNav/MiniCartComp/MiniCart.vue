<template>
    <div class="absolute p-5 w-[320px] bg-white right-[0%]  border text-zinc-500 border-zinc-300 ">
        <div v-if="haveToken" class="card">
            <div class="cart-head flex justify-between border-b border-zinc-500 py-2">
                <span class="font-poppins font-bold text-black text-sm">{{ cartLength }} ITEM</span>
                <RouterLink to="/cart" class="font-poppins font-bold text-black text-sm">View Cart</RouterLink>
            </div>
            <div class="cart-body overflow-scroll overflow-x-hidden my-5 p-1 h-60">
                <MiniCartItem v-for="item in cartProducts" :key="item.id" :item="item" />
            </div>
            <div class="cart-head flex justify-between  py-2">
                <span class="font-poppins font-bold text-black text-[15px]">SUBTOTAL :</span>
                <RouterLink to="/cart" class="font-poppins font-bold text-black text-[15px] ">{{ cart.total }} $
                </RouterLink>
            </div>
            <router-link to="/checkout"
                class="block my-3 bg-zinc-900 text-white text-sm font-bold p-4 w-full text-center">GO TO
                CHECK
                OUT</router-link>
        </div>
        <div v-else class="">
            You don't have items in the cart
        </div>
    </div>
</template>
<script setup>
import { onBeforeMount, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import useCart from '@/stores/Cart/useCart';
import MiniCartItem from './MiniCartItem.vue'
const $user = JSON.parse(localStorage.getItem('user'))

const useCartStore = useCart();
const { cart } = storeToRefs(useCartStore)
const haveToken = ref(false)
const cartLength = ref(null)
const cartProducts = ref(null)

onBeforeMount(() => {
    if ($user) {
        haveToken.value = true
        cartLength.value = cart.value.products.length
        cartProducts.value = cart.value.products
    }
})



</script>