<template>
  <div>
    <full-page>
      <!-- Hero Section -->
      <BaseSection id="hero" class="bg-backgroundColor1">
        <div class="max-w-screen-xl px-4 sm:px-8 mx-auto">
          <BaseNavbar />
          <div class="mt-8 px-4 grid grid-cols-12 gap-x-6 overflow-hidden">
            <div
              class="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-6 px-2 text-center sm:text-left"
            >
              <div class="space-y-3">
                <span class="text-base text-secondary font-semibold uppercase">Start Today</span>
                <h1
                  class="relative text-[2.5rem] sm:text-5xl xl:text-6xl text-primaryText font-bold leading-tight capitalize"
                >
                  Make Your
                  <span class="text-secondary">Custom Keyboard</span> Come True
                  <img
                    :src="require('@/assets/img/keyboard.svg')"
                    class="absolute top-[6.85rem] right-36 w-16 h-16"
                    alt=""
                  />
                </h1>
              </div>
              <p class="paragraph hidden sm:block">
                Horizon is a place to create custom keycaps for mechanical keyboard easily.
              </p>
              <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2">
                <BaseButton class="max-w-full px-8 py-4 bg-secondary text-white">
                  Try It Now
                </BaseButton>
                <BaseButton
                  class="max-w-full px-6 py-4 bg-inherit text-secondary border border-secondary flex items-center justify-center space-x-1"
                  @click="openFrame = !openFrame"
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
          <transition name="transform-fade-down">
            <div
              v-show="openFrame"
              class="w-full h-screen absolute z-20 top-0 left-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center"
            >
              <BaseButton
                class="absolute top-0 right-0 p-4 m-4 text-white bg-[rgba(0,0,0,0.7)] hover:shadow-gray-700/50"
                @click="openFrame = !openFrame"
              >
                <XIcon size="30" />
              </BaseButton>
              <iframe
                width="840"
                height="472"
                src="https://www.youtube.com/embed/k84N-KCyRYM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                class="rounded shadow-md"
              ></iframe>
            </div>
          </transition>
          <img
            :src="require('~/assets/img/star.svg')"
            class="hidden sm:block absolute top-20 sm:top-36 right-16 lg:right-0 lg:left-[30rem] w-8"
          />
        </div>
      </BaseSection>
      <!-- About Section -->
      <BaseSection id="about" class="bg-backgroundColor2">
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
      </BaseSection>
      <!-- Structure Section -->
      <BaseSection id="structure" class="relative bg-backgroundColor3">
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
      </BaseSection>
      <!-- Designs Section -->
      <BaseSection id="designs" class="relative bg-backgroundColor2">
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
      </BaseSection>
      <!-- Create Section -->
      <BaseSection id="create" class="relative bg-backgroundColor3">
        <div class="w-full mt-8 px-4 sm:px-8">
          <h2 class="text-5xl font-semibold text-tertiary text-center">
            Start Creating Your Own<br />Custom Keyboard
          </h2>
          <div class="w-full flex items-center justify-center">
            <div class="w-[10%] space-y-4 ml-4">
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
            <div
              class="w-[10%] h-full relative -left-8 bottom-4 flex flex-col items-center justify-center space-y-4 mb-4"
            >
              <span class="text-lg font-semibold text-center text-white"
                >Pick color <br />
                from here</span
              >
              <input
                v-model="pickedColor"
                type="color"
                class="border-none w-8 h-8 rounded-md shadow-md"
              />
            </div>
          </div>
          <div class="w-full flex justify-center -mt-8">
            <BaseButton
              class="max-w-full px-6 py-4 rounded-md bg-inherit font-medium text-tertiary border border-tertiary hover:shadow-tertiary/50"
              @click="onClickDownloadSVG"
            >
              Download Design
            </BaseButton>
          </div>
        </div>
      </BaseSection>
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
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        slidesPerView: 1.65,
        centeredSlides: true,
        spaceBetween: 50,
        initialSlide: 2,
      },
      pickedColor: '#ffffff',
      clickedSwitch: 'silent-red',
      openFrame: false,
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
  mounted() {
    this.downloadSVG()
  },
  methods: {
    onClickSwitch(name) {
      this.clickedSwitch = name
    },
    handleKeyClick() {
      if (this.clickedSwitch === 'silent-red') {
        const audio = new Audio(
          'https://github.com/self-learnary/random-store/blob/main/switch-sound/red-switch.wav?raw=true'
        )
        audio.play()
      } else if (this.clickedSwitch === 'blue') {
        const audio = new Audio(
          'https://github.com/self-learnary/random-store/blob/main/switch-sound/blue-switch.wav?raw=true'
        )
        audio.play()
      } else {
        const audio = new Audio(
          'https://github.com/self-learnary/random-store/blob/main/switch-sound/black-switch.wav?raw=true'
        )
        audio.play()
      }
    },
    downloadSVG() {
      const svg = document.getElementById('custom-keyboard').outerHTML
      const blob = new Blob([svg.toString()])
      const element = document.createElement('a')
      element.download = 'custom-keycaps.svg'
      element.href = window.URL.createObjectURL(blob)
    },
    onClickDownloadSVG() {
      const svg = document.getElementById('custom-keyboard').outerHTML
      const blob = new Blob([svg.toString()])
      const element = document.createElement('a')
      element.download = 'custom-keycaps.svg'
      element.href = window.URL.createObjectURL(blob)
      element.click()
      element.remove()
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
