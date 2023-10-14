<template>
  <div class="flex justify-around flex-wrap my-10 font-poppins">
    <div class="xl:w-[30%] xs:w-full h-[500px]">
      <img src="/img/person.jpg" alt="person" />
    </div>
    <div class="w-[68%] h-[475px] bg-center-bg bg-cover hidden xl:block">
      <div class="flex flex-col items-center">
        <span class="text-2xl font-semibold text-zinc-500 ml-[-12%]">GET READY</span>
        <div class="ml-[25%] mt-[-4%] flex justify-between gap-8 items-center">
          <div>
            <h2 class="text-black xl:text-[3.5rem] xs:text-[1rem] font-bold">20% OFF</h2>
          </div>
          <div>
            <button
              class="uppercase bg-zinc-900 p-4 tracking-wider text-[17px] text-white my-8 w-[235px]"
            >
              Shop All Sale
            </button>
          </div>
        </div>
        <div class="mt-[-1%] ml-[20%] flex justify-center">
          <span
            class="text-zinc-900 uppercase text-3xl text-center relative before:absolute before:content-[''] before:w-[120px] before:h-1 before:rounded-full before:left-[-125px] before:top-4 before:bg-zinc-900 font-bold after:absolute after:content-[''] after:w-[120px] after:h-1 after:rounded-full after:right-[-125px] after:top-4 after:bg-zinc-900"
            >Bikes
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
