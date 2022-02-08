<template>
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
    <base-button class="px-8 py-3 mt-2 bg-secondary text-white" @click="onContactClick">
      Contact Us
    </base-button>
  </nav>
</template>
<script>
export default {
  name: 'BaseNavbar',
  methods: {
    onContactClick() {
      window.open('https://t.me/rsurya99', '_blank')
    },
  },
}
</script>
