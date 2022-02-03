<template>
  <section class="section w-full h-screen max-h-screen overflow-hidden" v-bind="$attrs">
    <slot></slot>
  </section>
</template>
<script>
export default {
  name: 'BaseSection',
}
</script>
