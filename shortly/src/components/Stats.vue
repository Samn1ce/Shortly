<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import Brand from "../assets/icons/IconBrand.vue";
import Customizable from "../assets/icons/IconCustomizable.vue";
import Detailed from "../assets/icons/IconDetailed.vue";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
const statsContainer = ref(null); // Ref for the container of the 3 flexed divs
const bgLining = ref(null); // Ref for the blue background line
const section = ref(null); // Ref for the entire section

onMounted(() => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: section.value, // The section to watch
      start: "top center", // When the top of the section hits the center of the viewport
      once: true, // Only trigger the animation once
    },
  });

  // Stagger animation for the 3 flexed divs
  timeline.from(statsContainer.value.children, {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
  });

  // Animation for the blue background lining
  timeline.fromTo(
    bgLining.value,
    { scaleX: 0 }, // Start with the line not visible
    {
      scaleX: 1, // Fully visible
      duration: 1,
      transformOrigin: "left center", // Expand from left to right
      ease: "power2.out",
    }
  );
});
</script>

<template>
  <section
    ref="section"
    class="mx-auto w-11/12 flex justify-center items-center py-20 md:pt-5 font-poppins text-txt"
  >
    <div class="w-11/12 pt-20 md:pt- flex flex-col gap-20 items-center">
      <div class="w-full md:w-96 grid gap-3 text-center">
        <h2 class="text-3xl md:text-4xl font-bold">Advanced Statistics</h2>
        <p class="text-zinc-400 text-semibold font-medium">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <!-- Marginal divs -->
      <div class="w-full relative border">
        <!-- BG lining -->
        <div
          ref="bgLining"
          class="w-2 md:w-full h-full md:h-2 bg-[#2acfcf] absolute z-10 md:top-1/2 md:translate-y-1/2 left-1/2 -translate-x-1/2"
        ></div>
        <!-- Flexed divs -->
        <div
          ref="statsContainer"
          class="relative flex flex-wrap md:flex-nowrap gap-8 md:gap-4 z-20"
        >
          <!-- First div -->
          <div
            class="w-full md:w-2/6 bg-gradient-to-b from-white to-zinc-200 rounded-md px-6 mt-10 md:mt-0 pb-3"
          >
            <div
              class="bg-dark w-16 lg:w-20 -mt-10 md:ml-5 mb-5 mx-auto h-16 lg:h-20 rounded-full flex justify-center items-center"
            >
              <Brand />
            </div>
            <div class="flex flex-col gap-4 md:gap-2 lg:gap-6">
              <h1 class="md:text-md lg:text-2xl font-bold">
                Brand Recognition
              </h1>
              <p class="text-zinc-400 md:text-sm lg:text-base font-medium">
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
          </div>
          <!-- Second div -->
          <div
            class="w-full md:w-2/6 bg-gradient-to-b from-white to-zinc-200 rounded-md px-6 mt-10 md:mt-10 pb-3"
          >
            <div
              class="bg-dark w-16 lg:w-20 -mt-10 md:ml-5 mx-auto mb-5 h-16 lg:h-20 rounded-full flex justify-center items-center"
            >
              <Detailed />
            </div>
            <div class="flex flex-col gap-4 md:gap-2 lg:gap-6">
              <h1 class="md:text-md lg:text-2xl font-bold">Detailed Records</h1>
              <p class="font-medium text-zinc-400 md:text-sm lg:text-base">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
          </div>
          <!-- Third div -->
          <div
            class="w-full md:w-2/6 bg-gradient-to-b from-white to-zinc-200 rounded-md px-6 mt-10 md:mt-20 pb-3"
          >
            <div
              class="bg-dark w-16 lg:w-20 -mt-10 md:ml-5 mx-auto mb-5 h-16 lg:h-20 rounded-full flex justify-center items-center"
            >
              <Customizable />
            </div>
            <div class="flex flex-col gap-4 md:gap-2 lg:gap-6">
              <h1 class="md:text-md lg:text-2xl font-bold">
                Fully Customizable
              </h1>
              <p class="font-medium text-zinc-400 md:text-sm lg:text-base">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
