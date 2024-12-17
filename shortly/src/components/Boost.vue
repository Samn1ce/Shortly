<script setup>
import BoostBG from "../assets/icons/IconBoost.vue";

defineProps({
  onScrollToShorten: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <div class="w-full bg-dark overflow-hidden relative font-poppins">
    <BoostBG class="w-full" />
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col gap-8 w-11/12 md:w-fit"
    >
      <h2 class="text-2xl md:text-3xl text-white font-bold">
        Boost Your Links Today
      </h2>
      <button
        @click="onScrollToShorten"
        class="bg-[#2acfcf] hover:bg-[#33b4b4] transition-all w-44 h-12 rounded-full text-white font-bold text-xl"
      >
        Get Started
      </button>
    </div>
  </div>
</template>
