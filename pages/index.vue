<template>
  <div>
    <full-page>
      <!-- Hero Section -->
      <section class="section bg-backgroundColor1 w-full h-screen max-h-screen overflow-hidden">
        <div class="max-w-screen-xl px-4 sm:px-8 mx-auto">
          <nav class="w-full flex items-center justify-between py-4">
            <div>
              <img :src="require('@/assets/img/logo.png')" class="w-22 xl:w-36" alt="" />
            </div>
            <ul class="flex flex-row items-center space-x-2">
              <NavLink name="Home" url="#" />
              <NavLink name="Product" url="#" />
              <NavLink name="Structure" url="#" />
              <NavLink name="Our Designs" url="#" />
              <NavLink name="Create New" url="#" />
            </ul>
            <base-button class="px-8 py-3 mt-2 bg-secondary text-white">Contact Us</base-button>
          </nav>
          <div class="mt-8 px-4 grid grid-cols-12 gap-x-6 overflow-hidden">
            <div
              class="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-6 px-2 text-center sm:text-left"
            >
              <div class="space-y-3">
                <span class="text-base text-secondary font-semibold uppercase">Start Today</span>
                <h1
                  class="text-[2.5rem] sm:text-5xl xl:text-6xl text-primaryText font-bold leading-tight capitalize"
                >
                  Make Your
                  <span class="text-secondary">Custom Keyboard</span> Come True
                </h1>
              </div>
              <p class="paragraph hidden sm:block">
                Is a place for those who want to make a custom keyboard that has a solid quality
                with easily.
              </p>
              <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2">
                <BaseButton class="max-w-full px-8 py-4 bg-secondary text-white">
                  Try It Now
                </BaseButton>
                <BaseButton
                  class="max-w-full px-6 py-4 bg-inherit text-secondary border border-secondary flex items-center justify-center space-x-1"
                >
                  <span>Watch Tutorial</span>
                  <PlayCircleIcon size="22" />
                </BaseButton>
              </div>
            </div>
            <div class="hidden sm:block col-span-12 lg:col-span-6">
              <div class="w-full">
                <img :src="require('~/assets/img/hero-image.png')" class="ml-16 mt-4" alt="" />
              </div>
            </div>
          </div>
          <img
            :src="require('~/assets/img/star.svg')"
            class="hidden sm:block absolute top-20 sm:top-36 right-16 lg:right-0 lg:left-[30rem] w-8"
          />
        </div>
      </section>
      <!-- About Section -->
      <section class="section bg-backgroundColor2 w-full h-screen max-h-screen overflow-hidden">
        <div class="max-w-screen-xl mt-16 px-4 sm:px-8 mx-auto grid grid-cols-12 gap-x-6">
          <div class="col-span-12 lg:col-span-6 mt-4">
            <div class="w-full">
              <img :src="require('~/assets/img/keycaps.png')" class="w-full" alt="" />
            </div>
          </div>
          <div class="col-span-12 lg:col-span-5 space-y-8 sm:space-y-6 xl:px-8">
            <h2 class="text-4xl font-semibold text-tertiary">Meet Horizon 3087</h2>
            <div class="space-y-2">
              <h4 class="text-lg font-medium text-blueSecondary">
                Professional Access, Non-stop Availability
              </h4>
              <p class="paragraph text-white text-sm">
                We provide premium access to crypto trading for both individuals and institutions
                through high liquidity, reliable order execution and constant uptime.
              </p>
            </div>
            <div class="space-y-2">
              <h4 class="text-lg font-medium text-blueSecondary">A Range of Powerful Apis</h4>
              <p class="paragraph text-white text-sm">
                Set up your own trading interface or deploy your algorithmic strategy with our
                high-performance FIX and HTTP APIs. Connect to our WebSocket for real-time data
                streaming.
              </p>
            </div>
            <div class="space-y-2">
              <h4 class="text-lg font-medium text-blueSecondary">Customer Support</h4>
              <p class="paragraph text-white text-sm">
                Premium 24/7 support available to all customers worldwide by phone or email.
                Dedicated account managers for partners.
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- Structure Section -->
      <section
        class="section relative bg-backgroundColor3 w-full h-screen max-h-screen overflow-hidden"
      >
        <div class="w-full flex flex-col items-center justify-center mt-10 px-4 sm:px-8">
          <h2 class="text-5xl font-semibold text-tertiary">Horizon Diagram Structure</h2>
          <div class="w-[70%] mt-2">
            <img :src="require('@/assets/img/structure-diagram.png')" alt="" />
          </div>
        </div>
        <img
          :src="require('@/assets/img/diagram-text.png')"
          class="absolute -bottom-20 left-4 w-16"
          alt=""
        />
        <img
          :src="require('@/assets/img/structure-text.png')"
          class="absolute -top-28 right-4 w-14"
          alt=""
        />
      </section>
    </full-page>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style scoped>
.swiper-slide {
  width: 800px !important;
  margin: auto 0;
}
.swiper-slide-active {
  width: 894px !important;
}
.sections-menu {
  position: fixed;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
}

.sections-menu .menu-point {
  width: 10px;
  height: 10px;
  background-color: #fff;
  display: block;
  margin: 1rem 0;
  opacity: 0.6;
  transition: 0.4s ease all;
  cursor: pointer;
}

.sections-menu .menu-point.active {
  opacity: 1;
  transform: scale(1.5);
}
</style>
