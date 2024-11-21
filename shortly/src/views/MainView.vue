<script setup>
import { ref } from "vue";
import NavHeader from "../components/NavHeader.vue";
import Hero from "../components/Hero.vue";
import Shorten from "../components/Shorten.vue";
import Stats from "../components/Stats.vue";
import Boost from "../components/Boost.vue";
import Footer from "../components/Footer.vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
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
      <Hero />
    </div>
  </header>
  <div class="w-full lg:max-h-700 bg-zinc-200 relative">
    <main class="w-full max-w-7xl lg:h-full mx-auto relative z-10">
      <Shorten />
      <Stats />
    </main>
  </div>
  <Boost />
  <Footer />
</template>
