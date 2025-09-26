<script setup>
import { ref } from "vue";
import NavHeader from "../components/NavHeader.vue";
import Hero from "../components/Hero.vue";
import Shorten from "../components/Shorten.vue";
import Stats from "../components/Stats.vue";
import Boost from "../components/Boost.vue";
import Footer from "../components/Footer.vue";

const isMenuOpen = ref(false);
const shortenedUrl = ref(false);
const shortUrl = ref("");
const originalUrl = ref("");
const error = ref("");
const isLoading = ref(true);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleLoadingChange = (loading) => {
  isLoading.value = loading;
};

const handleError = (errorMsg) => {
  error.value = errorMsg;
  shortenedUrl.value = "";
};

const handleSuccess = (data) => {
  shortUrl.value = data.shortened;
  originalUrl.value = data.original;
  error.value = "";
  shortenedUrl.value = true;
};

const scrollToShorten = () => {
  const shortenSection = document.querySelector(".shorten-section");
  if (shortenSection) {
    // Calculate the scroll position to be in the middle of the screen
    const elementRect = shortenSection.getBoundingClientRect();
    const absoluteElementTop = elementRect.top + window.pageYOffset;
    const middleOfViewport = window.innerHeight / 2;
    const scrollPosition =
      absoluteElementTop - middleOfViewport + elementRect.height / 2;

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  }
};
</script>

<template>
  <header class="w-full md:max-h-700 bg-zinc-50 overflow-hidden">
    <nav
      v-if="isMenuOpen"
      class="absolute top-20 w-11/12 left-1/2 transform -translate-x-1/2 bg-[#3b3054] z-20 flex flex-col items-center justify-center md:hidden font-poppins font-semibold text-2xl gap-8 px-3 py-5 text-zinc-100 rounded-lg"
    >
      <div>Features</div>
      <div>Pricing</div>
      <div>Resources</div>
      <hr class="w-full border-t border-zinc-500/50" />
      <div class="flex flex-col gap-4 w-full">
        <button class="py-2 px-7 rounded-full font-bold">Login</button>
        <button
          class="bg-[#2acfcf] hover:bg-[#33b4b4] w-full transition-all py-2 px-7 rounded-full text-white font-bold"
        >
          Sign Up
        </button>
      </div>
    </nav>
    <div class="max-w-7xl md:h-full mx-auto relative z-10">
      <NavHeader :isMenuOpen="isMenuOpen" @toggle-menu="toggleMenu" />
      <Hero :onScrollToShorten="scrollToShorten" />
    </div>
  </header>
  <div class="w-full xl:max-h-700 bg-zinc-200 relative">
    <main class="w-full max-w-7xl lg:h-full mx-auto relative z-10">
      <Shorten
        @loadingChange="handleLoadingChange"
        @shortenError="handleError"
        @urlShortened="handleSuccess"
      />
      <Stats
        :short-url="shortUrl"
        :shortened-url="shortenedUrl"
        :original-url="originalUrl"
        :error="error"
        :is-loading="isLoading"
      />
    </main>
  </div>
  <Boost :onScrollToShorten="scrollToShorten" />
  <Footer />
</template>
