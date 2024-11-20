<script setup>
import BG from "../assets/icons/Iconillustration-working.vue";
</script>

<template>
  <div
    class="mx-auto w-full lg:h-[90%] flex md:justify-end font-poppins text-txt"
  >
    <div
      class="w-full md:w-11/12 md:h-full flex flex-col md:flex-row justify-center items-center lg:justify-start lg:items-start"
    >
      <div
        class="w-[90%] mb-32 md:mb-0 text-center md:text-left md:w-1/2 md:h-full flex flex-col justify-center order-last md:order-first"
      >
        <div class="mb-10 grid gap-4">
          <h1 class="text-4xl md:text-4xl lg:text-7xl font-bold">
            More than just shorter links
          </h1>
          <p class="text-xl md:text-lg lg:text-2xl text-zinc-400 font-medium">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
        </div>
        <button
          class="bg-[#2acfcf] hover:bg-[#33b4b4] mx-auto md:mx-0 transition-all w-40 h-10 rounded-full text-white font-bold"
        >
          Get Started
        </button>
      </div>
      <div class="max-h-[400px] md:w-1/2 md:h-full order-first md:order-last">
        <BG class="scale-75 md:scale-100 -mr-40 -mt-14 md:mt-0" />
      </div>
    </div>
  </div>
</template>
