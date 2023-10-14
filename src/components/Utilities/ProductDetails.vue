<template>
    <LoaderVue v-if="load" />
    <div v-else>
        <div class="nav-direction flex w-full h-14 items-center px-10 bg-gray-100 font-poppins">
            <RouterLink to="/" class="text-xs font-bold text-black mr-2">Home</RouterLink>
            <Icon icon="ic:round-arrow-forward-ios" class="text-xs font-bold text-black mr-2" />
            <span class="text-xs font-bold text-black mr-2">{{ singleProduct.title }}</span>
        </div>
        <div class="container mx-auto px-8 ">
            <div class="product flex flex-wrap my-20">
                <div class="product-images w-[100%] lg:w-[40%] px-2 my-5">
                    <div class="big-img text-center h-[500px] flex flex-col ">
                        <div class="w-full h-[400px] overflow-hidden flex flex-col items-center justify-center bg-zinc-100">
                            <img :src="singleProduct.thumbnail" alt="" class="w-[80%]" />
                        </div>



                        <!-- <div class="img">
                            <Swiper :slides-per-view="5" :space-between="0" :loop="true" class="w-[full] h-[80px]">
                                <SwiperSlide v-for="(image, index) in singleProduct.images" :key="index"
                                    class="w-[full] h-[100px]">
                                    <img :src="image" alt="" class="w-[90%] block mx-auto h-full"
                                        @click="() => setBigImage(e)" />
                                </SwiperSlide>
                            </Swiper>
                    </div> -->



                    </div>
                </div>
                <div class="product-details w-[100%] lg:w-[60%] text-left font-poppins my-5">
                    <div class="product-name ">
                        <h1 class="text-3xl font-bold text-black ">{{ singleProduct.title }}</h1>
                    </div>
                    <div class="product-price my-5">
                        <span v-if="singleProduct.discountPercentage"
                            class=" line-through text-1xl font-[400] text-black mr-2">${{
                                singleProduct.price + singleProduct.discountPercentage
                            }}</span>
                        <span class=" text-2xl font-[500] text-zinc-700">${{ singleProduct.price }}</span>
                    </div>
                    <div class="product-desc pb-10 border-b border-zinc-300">
                        <p class="text-[16px] w-[100%]  text-zinc-700">{{ singleProduct.description }}
                        </p>
                        <span class="text-[12px] block w-[100%] my-5 text-zinc-700">
                            AVAILABILITY: <span class="font-bold text-black">{{ singleProduct.stock }} IN STOCK</span>
                        </span>
                        <span class="text-[12px] block w-[100%] my-5 text-zinc-700">
                            Brand : <span class="font-bold text-black"> {{ singleProduct.brand }}</span>
                        </span>
                    </div>
                    <div class="product-action flex my-2">
                        <div class="product-action flex items-center">
                            <button class="h-12 font-bold text-xl text-black w-8 border" @click="minusQuantity">-</button>
                            <input type="text" id="quantity" v-model="quantity"
                                class="w-20 h-12 text-black font-bold text-center border border-zinc-300" />
                            <button class="h-12 font-bold text-xl text-black w-8 border" @click="plusQuantity">+</button>
                        </div>
                        <div class="product-action ml-2 flex items-center">
                            <button class=" px-10 font-bold text-sm py-4 text-white bg-zinc-900 border" @click="addItem">ADD
                                TO
                                CART</button>
                            <button class="border-zinc-300 border p-3 mx-2 ">
                                <Icon icon="ph:heart" class="text-2xl text-black" />
                            </button>
                            <button class="border-zinc-300 border p-3  bg-white-500 ">
                                <Icon icon="uil:signal-alt" class="text-2xl text-black" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import ProductDetailsMixin from '@/mixins/ProductDetailsMixin.js'
const { singleProduct,
    load,
    plusQuantity,
    minusQuantity,
    addItem,
    quantity,
    Icon,
    LoaderVue,
    RouterLink, } = ProductDetailsMixin()
</script>