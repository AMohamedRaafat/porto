<template>
    <section class="font-poppins">
        <div class="shop-header">
            <div
                class="flex sm:flex-col flex-wrap lg:flex-row  p-8 justify-around items-center border border-b-zinc-300 h-auto overflow-hidden">
                <div class="flex flex-col p-8">
                    <span class="text-zinc-500 uppercase text-3xl font-semibold my-1">extra</span>
                    <span class="text-zinc-900 uppercase text-6xl font-bold my-1">20% OFF</span>
                    <ItemHero text="Bikes" />

                </div>
                <div class="img relative my-10 md:my-0">
                    <img src="/img/caro.png" alt="" class="w-[400px] h-[200px]" />

                    <div
                        class="absolute hidden xl:block w-[500px] h-[700px] top-0 left-10 bg-gradient-to-b from-zinc-100 to-zinc-300 -skew-x-12 -z-10">
                    </div>
                </div>
                <div class="flex justify-center flex-col">
                    <span class="text-zinc-900 text-5xl text-center font-bold font-summer my-1">Summer Sale</span>
                    <button class="uppercase w-[100%] bg-zinc-900 p-4 tracking-wider text-[17px] text-white my-8">
                        Shop All Sale
                    </button>
                </div>
            </div>


            <div>
                <div class="nav-direction flex w-full h-14 items-center px-12 bg-gray-100 font-poppins">
                    <RouterLink to="/" class="text-xs font-bold text-black mr-2">Home</RouterLink>
                    <Icon icon="ic:round-arrow-forward-ios" class="text-xs font-bold text-black mr-2" />
                    <span class="text-xs font-bold text-black mr-2">Shop</span>
                </div>
            </div>
        </div>


        <div class="shop-content container mx-auto px-6 my-14">
            <SideBar />
        </div>
    </section>
</template>
<script setup>
import { Icon } from '@iconify/vue'
import SideBar from '@/components/Shop/SideBar.vue'
</script>