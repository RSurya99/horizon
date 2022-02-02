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
      <!-- Designs Section -->
      <section
        class="section relative bg-backgroundColor2 w-full h-screen max-h-screen overflow-hidden"
      >
        <div class="w-full mt-16">
          <h2 class="text-5xl font-semibold text-tertiary text-center">Some of Our Designs</h2>
          <div class="py-12">
            <swiper ref="mySwiper" :options="swiperOptions">
              <swiper-slide>
                <div>
                  <img :src="require('@/assets/img/design/seaside.png')" class="w-full" alt="" />
                </div>
              </swiper-slide>
              <swiper-slide>
                <div>
                  <img :src="require('@/assets/img/design/p463-alpha.png')" class="w-full" alt="" />
                </div>
              </swiper-slide>
              <swiper-slide>
                <div>
                  <img :src="require('@/assets/img/design/katakana.png')" class="w-full" alt="" />
                </div>
              </swiper-slide>
              <swiper-slide>
                <div>
                  <img :src="require('@/assets/img/design/vaporwave.png')" class="w-full" alt="" />
                </div>
              </swiper-slide>
              <swiper-slide>
                <div>
                  <img
                    :src="require('@/assets/img/design/the-root-of-all-evil.png')"
                    class="w-full"
                    alt=""
                  />
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </section>
      <!-- Create Section -->
      <section
        class="section relative bg-backgroundColor3 w-full h-screen max-h-screen overflow-hidden"
      >
        <div class="w-full mt-8 px-4 sm:px-8">
          <h2 class="text-5xl font-semibold text-tertiary text-center">
            Start Creating Your Own<br />Custom Keyboard
          </h2>
          <div class="w-full flex items-center justify-center">
            <div class="w-[10%] space-y-4">
              <button
                class="block p-2 rounded-md bg-backgroundColor1 hover:bg-tertiary transition duration-200"
                :class="[clickedSwitch === 'silent-red' ? 'bg-tertiary' : 'bg-backgroundColor1']"
                @click="onClickSwitch('silent-red')"
              >
                <img
                  :src="require('@/assets/img/switch/cherrymx-silent-red.png')"
                  class="w-16"
                  alt=""
                />
              </button>
              <button
                class="block p-2 rounded-md hover:bg-tertiary transition duration-200"
                :class="[clickedSwitch === 'blue' ? 'bg-tertiary' : 'bg-backgroundColor1']"
                @click="onClickSwitch('blue')"
              >
                <img :src="require('@/assets/img/switch/cherrymx-blue.png')" class="w-16" alt="" />
              </button>
              <button
                class="block p-2 rounded-md bg-backgroundColor1 hover:bg-tertiary transition duration-200"
                :class="[clickedSwitch === 'silent-black' ? 'bg-tertiary' : 'bg-backgroundColor1']"
                @click="onClickSwitch('silent-black')"
              >
                <img
                  :src="require('@/assets/img/switch/cherrymx-silent-black.png')"
                  class="w-16"
                  alt=""
                />
              </button>
            </div>
            <div class="w-[90%]">
              <CustomKeyboard
                class="w-full -mt-16"
                :selected-color="pickedColor"
                @key-click="handleKeyClick"
              />
            </div>
            <div class="w-[10%]">
              <input
                v-model="pickedColor"
                type="color"
                class="border-none w-8 h-8 rounded-md shadow-md"
              />
            </div>
          </div>
          <div class="flex items-center justify-center space-x-10 -mt-8">
            <BaseButton
              class="max-w-full px-6 py-4 rounded-md bg-inherit font-medium text-tertiary border border-tertiary hover:shadow-tertiary/50"
            >
              Download Design
            </BaseButton>
            <BaseButton
              class="max-w-full px-8 py-4 rounded-md bg-tertiary font-medium border border-tertiary hover:shadow-tertiary/50 text-backgroundColor3"
              >Buy Now</BaseButton
            >
          </div>
        </div>
      </section>
    </full-page>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
export default {
  name: 'IndexPage',
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      open: false,
      dropdownNavbar: false,
      swiperOptions: {
        slidesPerView: 1.63,
        centeredSlides: true,
        spaceBetween: 50,
        initialSlide: 2,
      },
      pickedColor: '#ffffff',
      clickedSwitch: 'silent-red',
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
  methods: {
    onClickSwitch(name) {
      this.clickedSwitch = name
    },
    handleKeyClick() {
      if (this.clickedSwitch === 'silent-red') {
        const audio = new Audio(
          'https://github.com/RSurya99/random-store/blob/main/red-switch.wav?raw=true'
        )
        audio.play()
      } else if (this.clickedSwitch === 'blue') {
        const audio = new Audio(
          'https://github.com/RSurya99/random-store/blob/main/blue-switch.wav?raw=true'
        )
        audio.play()
      } else {
        const audio = new Audio(
          'https://github.com/RSurya99/random-store/blob/main/blue-switch.wav?raw=true'
        )
        audio.play()
      }
    },
  },
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
