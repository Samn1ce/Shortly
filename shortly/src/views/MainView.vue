<script setup>
import NavHeader from "../components/NavHeader.vue";
import Hero from "../components/Hero.vue";
import Shorten from "../components/Shorten.vue";
import Stats from "../components/Stats.vue";
import Boost from "../components/Boost.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <header class="w-full h-screen max-h-700 bg-zinc-50 overflow-hidden">
    <div class="max-w-7xl h-full mx-auto relative z-10">
      <NavHeader />
      <Hero />
    </div>
    <Shorten />
  </header>
  <div class="w-full h-screen max-h-700 bg-zinc-200 z-10 relative">
    <main class="w-full max-w-7xl h-full mx-auto relative z-10">
      <Stats />
    </main>
    <Boost />
    <Footer />
  </div>
</template>
