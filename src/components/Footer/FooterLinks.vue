<template>
  <div class="container mx-auto px-8 pt-10 pb-3 mt-10">
    <div class="grid lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 border-b border-b-zinc-700">
      <div class="flex">
        <div class="logo mb-5">
          <img src="/img/logo-white.png" alt="" class="w-[110px]" />
          <p class="my-10 text-sm">Lorem ipsum dolor sit amet, consectetur adipis.</p>
          <div class="text-white">
            <p>QUESTIONS?</p>
            <p class="font-bold text-2xl text-white">1-888-123-456</p>
          </div>
        </div>
      </div>

      <!--Account List-->

      <FooterList title="Account" :link-list="accountList" />
      <FooterList title="About" :link-list="aboutList" />
      <div class="text-right">
        <FooterList title="Features" :link-list="featList" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import FooterList from './FooterList.vue'
const accountList = ref([
  {
    name: 'About us',
    href: '#'
  },
  {
    name: 'Contact us',
    href: '#'
  },
  {
    name: 'My Account',
    href: '#'
  },
  {
    name: 'Payment Methods',
    href: '#'
  },
  {
    name: 'Order History',
    href: '#'
  },
  {
    name: 'Advanced Search',
    href: '#'
  },
  {
    name: 'Login',
    href: '/login'
  }
])
const aboutList = ref([
  {
    name: 'About Porto',
    href: '#'
  },
  {
    name: 'Our Guarantees',
    href: '#'
  },
  {
    name: 'Terms And Conditions',
    href: '#'
  },
  {
    name: 'Privacy Policy',
    href: '#'
  },
  {
    name: 'Return Policy',
    href: '#'
  },
  {
    name: 'Intellectual Property Claims',
    href: '#'
  },
  {
    name: 'Site Map',
    href: '#'
  }
])
const featList = ref([
  {
    name: 'Powerful Admin Panel',
    href: '#'
  },
  {
    name: 'Mobile & Retina Optimized',
    href: '#'
  },
  {
    name: 'Super Fast WordPress Theme',
    href: '#'
  }
])
</script>
