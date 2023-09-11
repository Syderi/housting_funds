<script>
import AsideSection from './AsideSection.vue';

export default {
  components: {
    AsideSection,
  },
};
</script>

<template>
  <main :class="$style.wrapper">
    <AsideSection />
  </main>
</template>

<style module>
@import './mainContent.module.scss';
</style>
