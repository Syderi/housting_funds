<script setup>
import Aside from './Aside.vue';
</script>

<template>
  <main :class="$style.wrapper">
    <Aside />
  </main>
</template>

<style module>
@import './mainContent.module.scss';
</style>
