<template>
  <div class="relative">
    <button class="p-2 w-14 lg:hidden text-center" @click="showBar">

      <Icon icon="carbon:search" class="text-3xl" />
    </button>

    <button class="p-2 w-14 text-center">
      <Icon icon="ph:heart-bold" class="text-3xl" />
    </button>
    <div class="inline relative">
      <button class="p-2  w-14 text-center relative" @click="handleShowCart">
        <Icon icon="ph:handbag" class="text-3xl" />
        <span
          class="content-[''] absolute p-1 w-6 h-6 top-0 right-2 rounded-full bg-red-700 z-10 text-white text-[12px] font-bold">{{
            cart ? cart.products.length : '0' }}</span>
      </button>

      <MiniCart v-if="cartShow" />
    </div>
  </div>
</template>
<script setup>
import FastAccessMixin from '../../../mixins/FastAccessMixin';

defineProps({
  showBar: {
    type: Function
  }
})
const { cartShow,
  handleShowCart,
  cart,
  MiniCart,
  Icon } = FastAccessMixin()
</script>
