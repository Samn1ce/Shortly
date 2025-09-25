<script setup>
import { ref, defineEmits } from "vue";
import Shorten from "../assets/icons/IconShorten.vue";
import ShortenMobile from "../assets/icons/IconShortenMobile.vue";
import { shortenLink } from "../api/cleanuri.js";

const emit = defineEmits(["loadingChange", "shortenError", "urlShortened"]);
const url = defineModel();
const isLoading = ref(false);
const error = ref("");

async function submitLink() {
  if (url.value == "" || url.value == undefined) {
    error.value = "Please, add link";
    return;
  }
  isLoading.value = true;
  error.value = "";
  emit("loadingChange", true);
  try {
    console.log("🍕 Taking pizza order:", url.value);
    const result = await shortenLink(url.value);
    console.log("🍕 Pizza finished cooking:", result);

    if (result.error) {
      error.value = result.message || "Failed to shorten URL";
      emit("shortenError", error.value); // Tell others "Pizza burned!"
    } else {
      // 🍕 Pizza is perfect! Find the actual pizza (shortened URL)
      const shortenedUrl =
        result.shortUrl ||
        result.shortened_url ||
        result.url ||
        result.result_url;

      if (shortenedUrl) {
        emit("urlShortened", {
          original: url.value,
          shortened: shortenedUrl,
          fullResponse: result,
        });
        error.value = "";
      } else {
        error.value = "Invalid response from server";
        emit("shortenError", error.value);
      }
    }
  } catch (err) {
    error.value = err.data?.error || "An unexpected error occured.";
    emit("shortenError", error.value);
  } finally {
    isLoading.value = false;
    emit("loadingChange", false);
  }
}
</script>

<template>
  <div
    class="shorten-section z-20 absolute bg-dark -translate-y-1/2 top-0 left-1/2 transform -translate-x-1/2 overflow-hidden w-11/12 md:w-4/5 lg:w-11/12 md:h-28 rounded-lg max-w-7xl"
  >
    <Shorten class="hidden md:block" />
    <ShortenMobile class="block md:hidden" />
    <div
      class="text-zinc-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 rounded-xl md:p-3 flex flex-col gap-2 md:flex-row md:gap-4 h-4/5 md:h-20"
    >
      <div class="w-full h-full">
        <div
          class="w-full h-full md:h-full rounded-md overflow-hidden md:px-8 px-3 py-3 bg-white"
          :class="{ 'border border-red-500': error != '' }"
        >
          <input
            type="text"
            v-model="url"
            placeholder="Shorten a link here..."
            class="w-full h-full text-md md:text-2xl outline-none"
            :disabled="isLoading"
          />
        </div>
        <p class="text-red-500 italic hidden md:block">{{ error }}</p>
      </div>
      <p class="text-red-500 text-xs italic md:hidden block">{{ error }}</p>
      <button
        @click="submitLink"
        :disabled="isLoading"
        @keyup.enter="submitLink"
        class="bg-[#2acfcf] hover:bg-[#33b4b4] transition-all w-full h-20 md:w-44 md:h-full rounded-md text-white text-lg font-bold disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {{ isLoading ? "Shortening..." : "Shorten It!" }}
      </button>
    </div>
  </div>
</template>
