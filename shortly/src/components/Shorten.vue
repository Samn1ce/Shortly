<script setup>
import { ref } from "vue";
import Shorten from "../assets/icons/IconShorten.vue";
import ShortenMobile from "../assets/icons/IconShortenMobile.vue";

import { shortenLink } from "../api/cleanuri.js";

const url = defineModel();

const error = ref("");

function submitLink() {
  if (url.value == "" || url.value == undefined) {
    error.value = "Please, add link";
    return;
  }
  try {
    shortenLink(url.value);
  } catch (error) {
    error.value = error.data.error;
    throw new Error(error.data.error);
  }
}
</script>

<template>
  <div
    class="z-20 absolute bg-dark -translate-y-1/2 left-1/2 transform -translate-x-1/2 overflow-hidden w-11/12 md:w-4/5 lg:w-11/12 md:h-28 rounded-lg max-w-7xl"
  >
    <Shorten class="hidden md:block" />
    <ShortenMobile class="block md:hidden" />
    <div
      class="text-zinc-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 rounded-xl md:p-3 flex flex-col gap-2 md:flex-row md:gap-4 h-4/5 md:h-20"
    >
      <div class="w-full">
        <div
          class="w-full h-1/2 md:h-full rounded-md overflow-hidden md:px-8 px-3 py-3 bg-white"
          :class="{ 'border border-red-500': error != '' }"
        >
          <input
            type="text"
            v-model="url"
            placeholder="Shorten a link here..."
            class="w-full h-full text-md md:text-2xl outline-none"
          />
        </div>
        <p class="text-red-500 italic">{{ error }}</p>
      </div>
      <button
        @click="submitLink"
        class="bg-[#2acfcf] hover:bg-[#33b4b4] transition-all w-full h-14 md:w-44 md:h-full rounded-md text-white text-lg font-bold"
      >
        Shorten It!
      </button>
    </div>
  </div>
</template>
