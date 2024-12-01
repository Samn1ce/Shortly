<script setup>
import { ref } from "vue";
import Hamburger from "../assets/icons/IconHamburger.vue";
import Close from "../assets/icons/IconClose.vue";

const props = defineProps({
  isMenuOpen: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["toggle-menu"]);

// Handler for both opening and closing
const handleToggle = () => {
  emit("toggle-menu");
};
</script>

<template>
  <div
    class="mx-auto w-4/5 h-[70px] flex justify-between items-center font-poppins text-txt z-10 relative"
  >
    <div class="flex justify-center items-center gap-8">
      <h1 class="text-4xl font-bold">Shortly</h1>
      <nav class="hidden md:flex gap-4 text-sm font-semibold">
        <div class="text-zinc-400 hover:text-zinc-500 cursor-pointer">
          Features
        </div>
        <div class="text-zinc-400 hover:text-zinc-500 cursor-pointer">
          Pricing
        </div>
        <div class="text-zinc-400 hover:text-zinc-500 cursor-pointer">
          Resources
        </div>
      </nav>
    </div>
    <div class="hidden md:block">
      <button class="py-2 px-7 rounded-full font-bold hover:text-zinc-500">
        Login
      </button>
      <button
        class="bg-[#2acfcf] hover:bg-[#33b4b4] transition-all py-2 px-7 rounded-full text-white font-bold"
      >
        Sign Up
      </button>
    </div>
    <div class="block md:hidden">
      <Hamburger v-if="!props.isMenuOpen" @click="handleToggle" />
      <Close v-else @click="handleToggle" />
    </div>
  </div>
</template>
