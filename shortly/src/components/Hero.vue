<script setup>
import BG from "../assets/icons/Iconillustration-working.vue";
</script>

<template>
  <div class="mx-auto w-full h-[90%] flex justify-end">
    <div class="w-11/12 h-full flex">
      <div class="w-1/2 h-full flex flex-col justify-center">
        <div class="mb-10 grid gap-4">
          <h1 class="text-7xl font-bold">More than just shorter links</h1>
          <p class="text-2xl">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
        </div>
        <button
          class="bg-[#2acfcf] hover:bg-[#33b4b4] transition-all w-40 h-10 rounded-full text-white font-bold"
        >
          Get Started
        </button>
      </div>
      <div class="w-1/2 h-full"><BG /></div>
    </div>
  </div>
</template>
