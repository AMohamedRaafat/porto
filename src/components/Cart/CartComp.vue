<template>
    <div class="container mx-auto m-10 px-6">
        <div class="flex flex-col-reverse    md:flex-row flex-wrap  ">
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
                            <tr class="border-b border-b-zinc-300 text-black py-5">
                                <td class="h-32 flex items-center">
                                    <div class="item-img p-4 mr-3 bg-slate-100">
                                        <img src="/img/caro.png" class="w-24" alt="Product Title" />
                                    </div>
                                    <div class="item-title">
                                        <h3 class="font-[400]">Product Short Name</h3>
                                    </div>
                                </td>
                                <td>$299.00</td>
                                <td>
                                    <div class="">
                                        <button @click="decreaseQty" class="p-2 h-14 w-10 border font-bold">-</button>
                                        <input type="text" v-model="Qty" class="w-14 h-14 p-2 font-bold border text-center">
                                        <button @click="increaseQty" class="p-2 h-14 w-10 border font-bold">+</button>
                                    </div>
                                </td>
                                <td class="font-bold">$299.00</td>
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
                            <strong>$895.00
                            </strong>
                        </span>
                        <span class=" text-[12px] flex justify-between">
                            <strong>Discount:</strong>
                            <strong>-$179.00</strong>
                        </span>

                    </p>
                    <p class="font-[500] text-[24px] py-3 mb-1 border-b flex justify-between">
                        <strong class="">Order Total:</strong>
                        <strong class="">$716.00</strong>
                    </p>
                    <button class="w-full bg-zinc-900 text-white p-3 text-[18px]">Go To Checkout</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const Qty = ref(1);
const increaseQty = () => {
    Qty.value++;
}
const decreaseQty = () => {
    Qty.value == 1 ? Qty.value : Qty.value--
}
</script>