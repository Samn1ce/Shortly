<script setup>
import Brand from "../assets/icons/IconBrand.vue";
import Customizable from "../assets/icons/IconCustomizable.vue";
import Detailed from "../assets/icons/IconDetailed.vue";
</script>

<template>
  <section class="mx-auto w-11/12 h-full flex justify-center items-center pt-5">
    <div class="w-11/12 h-4/5 pt-10 flex flex-col gap-20 items-center">
      <div class="w-96 grid gap-3 text-center">
        <h2 class="text-4xl font-bold">Advanced Statistics</h2>
        <p class="text-zinc-400 text-semibold font-semibold">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <!-- MArginal divs -->
      <div class="w-full h-60 relative">
        <!-- BG lining -->
        <div
          class="w-full h-2 bg-[#2acfcf] absolute z-10 top-1/2 translate-y-1/2"
        ></div>
        <!-- !st div -->
        <div class="relative flex gap-4 z-20">
          <div
            class="w-2/6 h-60 bg-gradient-to-b from-white to-zinc-200 rounded-md px-6"
          >
            <div
              class="bg-dark w-20 -mt-10 ml-5 mb-5 h-20 rounded-full flex justify-center items-center"
            >
              <Brand />
            </div>
            <div class="flex flex-col gap-6">
              <h1 class="text-2xl font-bold">Brand Recognition</h1>
              <p class="font-semibold text-zinc-400">
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
          </div>
          <!-- 2nd div -->
          <div
            class="w-2/6 h-60 bg-gradient-to-b from-white to-zinc-200 rounded-md px-6 mt-10"
          >
            <div
              class="bg-dark w-20 -mt-10 ml-5 mb-5 h-20 rounded-full flex justify-center items-center"
            >
              <Detailed />
            </div>
            <div class="flex flex-col gap-6">
              <h1 class="text-2xl font-bold">Detailed Records</h1>
              <p class="font-semibold text-zinc-400">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
          </div>
          <!-- 3rd div -->
          <div
            class="w-2/6 h-60 bg-gradient-to-b from-white to-zinc-200 rounded-md px-6 mt-20"
          >
            <div
              class="bg-dark w-20 -mt-10 ml-5 mb-5 h-20 rounded-full flex justify-center items-center"
            >
              <Customizable />
            </div>
            <div class="flex flex-col gap-6">
              <h1 class="text-2xl font-bold">Fully Customizable</h1>
              <p class="font-semibold text-zinc-400">
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
