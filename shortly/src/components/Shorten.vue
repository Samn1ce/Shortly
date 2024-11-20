<script setup>
import Shorten from "../assets/icons/IconShorten.vue";
</script>

<template>
  <div
    class="z-20 absolute -bottom-30 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-dark w-4/5 h-40 rounded-xl overflow-hidden max-w-7xl"
  >
    <Shorten />
    <div
      class="text-zinc-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 h-20 rounded-xl p-3 flex gap-4"
    >
      <div class="w-full h-full rounded-md overflow-hidden px-8 py-3 bg-white">
        <input
          type="text"
          placeholder="Shorten a link here..."
          class="w-full h-full text-2xl outline-none"
        />
      </div>
      <button
        class="bg-[#2acfcf] hover:bg-[#33b4b4] transition-all w-44 h-full rounded-md text-white text-lg font-bold"
      >
        Shorten It!
      </button>
    </div>
  </div>
</template>
