<script setup>
import X from "../assets/icons/IconTwitter.vue";
</script>

<template>
  <footer
    class="w-full py-5 md:max-h-[500px] bg-[#232127] flex justify-center items-center font-poppins"
  >
    <div
      class="max-w-7xl text-white w-4/5 mx-auto flex md:flex-row flex-col md:justify-between justify-center items-center md:items-start gap-10 md:gap-0 text-center md:text-left py-5"
    >
      <h1 class="text-4xl md:text-2xl lg:text-4xl font-bold">Shortly</h1>
      <div class="flex flex-col md:flex-row md:gap-20 gap-10">
        <div class="flex flex-col gap-4">
          <h2 class="font-bold">Features</h2>
          <div
            class="flex flex-col gap-1 text-zinc-400 font-semibold text-sm lg:text-base"
          >
            <div>Link Shortening</div>
            <div>Branded Links</div>
            <div>Analytics</div>
          </div>
        </div>
        <!--  -->
        <div class="flex flex-col gap-4">
          <h2 class="font-bold">Resources</h2>
          <div
            class="flex flex-col gap-1 text-zinc-400 font-semibold text-sm lg:text-base"
          >
            <div>Blog</div>
            <div>Developers</div>
            <div>Support</div>
          </div>
        </div>
        <!--  -->
        <div class="flex flex-col gap-4">
          <h2 class="font-bold">Company</h2>
          <div
            class="flex flex-col gap-1 text-zinc-400 font-semibold text-sm lg:text-base"
          >
            <div>About</div>
            <div>Our Team</div>
            <div>Career</div>
            <div>Contact</div>
          </div>
        </div>
      </div>
      <X />
    </div>
  </footer>
</template>
