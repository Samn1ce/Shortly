<script setup>
import BG from "../assets/icons/Iconillustration-working.vue";

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
  <div
    class="mx-auto w-full lg:h-screen max-h-700 flex md: md:justify-end md:items-center font-poppins text-txt"
  >
    <div
      class="w-full md:w-11/12 md:h-full flex flex-col md:flex-row justify-center items-center lg:justify-start lg:items-start"
    >
      <div
        class="w-[90%] mb-32 md:mb-0 text-center md:text-left md:w-1/2 md:h-full flex flex-col justify-center order-last md:order-first"
      >
        <div class="mb-10 grid gap-4">
          <h1 class="text-4xl md:text-4xl lg:text-7xl font-bold">
            More than just shorter links
          </h1>
          <p class="text-xl md:text-lg lg:text-2xl text-zinc-400 font-medium">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
        </div>
        <button
          @click="scrollToShorten"
          class="bg-[#2acfcf] hover:bg-[#33b4b4] mx-auto md:mx-0 transition-all w-40 h-10 rounded-full text-white font-bold"
        >
          Get Started
        </button>
      </div>
      <div
        class="max-h-[395px] max-h md:w-1/2 md:h-full order-first md:order-last"
      >
        <BG class="scale-75 md:scale-100 -mr-40 -mt-7 md:mt-0" />
      </div>
    </div>
  </div>
</template>
