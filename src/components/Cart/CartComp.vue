<template>
    <div class="container mx-auto m-10 px-6">
        <LoaderVue v-if="load" />
        <div v-else class="flex flex-col-reverse    md:flex-row flex-wrap  ">
            <div class="card-items w-[100%] md:w-[65%] overflow-x-auto md:overflow-hidden">
                <div class="items">
                    <table class=" font-poppins w-full text-left gap-2 ">
                        <thead>
                            <tr class="border-b border-b-zinc-300  text-black">
                                <th class="font-semibold py-5">ITEM</th>
                                <th class="font-semibold py-5">PRICE</th>
                                <th class="font-semibold py-5">QTY</th>
                                <th class="font-semibold py-5">SUBTOTAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in cartProduct" :key="item.id" class="border-b border-b-zinc-300 text-black">
                                <CartItem :item="item" />
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="summary-cart mb-10 md:my-0 md:p-5 w-[100%] md:w-[35%] ">
                <div class="border-2  mx-auto w-[90%] p-5 font-poppins text-black">
                    <h3 class="font-bold text-[16px] py-3 border-b">SUMMARY</h3>
                    <p class="font-bold text-[14px] py-3 border-b"> Estimate Shipping and Tax</p>
                    <p class=" text-[12px] py-3 border-b f">
                        <span class=" text-[12px] py-2  flex justify-between">
                            <strong>Subtotal:</strong>
                            <strong>${{ cart.total }}
                            </strong>
                        </span>
                        <span class=" text-[12px] flex justify-between">
                            <strong>Discount:</strong>
                            <strong>-${{ cart.total - cart.discountedTotal }}</strong>
                        </span>

                    </p>
                    <p class="font-[500] text-[24px] py-3 mb-1 border-b flex justify-between">
                        <strong class="">Order Total:</strong>
                        <strong class="">${{ cart.discountedTotal }}</strong>
                    </p>
                    <button class="w-full bg-zinc-900 text-white p-3 text-[18px]">Go To Checkout</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onBeforeMount } from 'vue'
import { storeToRefs } from 'pinia'
import useCart from '@/stores/Cart/useCart'
import LoaderVue from '@/components/Utilities/LoaderVue.vue'
import CartItem from './CartItem.vue'
const cartItem = useCart()
const { cart } = storeToRefs(cartItem)
const cartProduct = ref(null)
const $t = document.cookie.slice(6)
const load = ref()
onBeforeMount(() => {
    load.value = true
    setTimeout(() => {
        console.log(cart.value);
        if ($t) {
            cartProduct.value = cart.value.products
            console.log(cartProduct.value)
        }
        load.value = false
    }, 2000)
})


</script>