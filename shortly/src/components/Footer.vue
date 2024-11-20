<script setup>
import X from "../assets/icons/IconTwitter.vue";
</script>

<template>
  <footer
    class="w-full h-[40vh] max-h-[500px] bg-[#232127] flex justify-center items-center"
  >
    <div class="text-white w-4/5 mx-auto flex justify-between">
      <h1 class="text-4xl font-bold">Shortly</h1>
      <div class="flex gap-20">
        <div class="flex flex-col gap-4">
          <h2 class="font-bold">Features</h2>
          <div class="flex flex-col gap-1 text-zinc-400 font-semivold">
            <div>Link Shortening</div>
            <div>Branded Links</div>
            <div>Analytics</div>
          </div>
        </div>
        <!--  -->
        <div class="flex flex-col gap-4">
          <h2 class="font-bold">Resources</h2>
          <div class="flex flex-col gap-1 text-zinc-400 font-semivold">
            <div>Blog</div>
            <div>Developers</div>
            <div>Support</div>
          </div>
        </div>
        <!--  -->
        <div class="flex flex-col gap-4">
          <h2 class="font-bold">Company</h2>
          <div class="flex flex-col gap-1 text-zinc-400 font-semivold">
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
