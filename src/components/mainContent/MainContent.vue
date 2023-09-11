<script>
import AsideSection from './AsideSection.vue';
import UserFullCard from './uiComponents/UserFullCard.vue';

export default {
  components: {
    AsideSection,
    UserFullCard,
  },
};
</script>

<template>
  <main :class="$style.wrapper">
    <AsideSection />
    <UserFullCard />
  </main>
</template>

<style module>
@import './mainContent.module.scss';
</style>
