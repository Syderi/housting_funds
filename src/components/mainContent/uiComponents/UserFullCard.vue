<script>
import Preloader from '../../../ui_global/Preloader.vue';

export default {
  components: {
    Preloader,
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    isLoading() {
      return this.$store.state.isLoadingUser;
    },
  },
};
</script>

<template>
  <div :class="$style.wrapper">
    <div v-if="isLoading">
      <Preloader />
      <br />
      <p>Загрузка данных пользователя...</p>
    </div>
    <div v-else-if="user" :class="$style.descriptionContainer">
      <img src="../../../assets/image/full_user.png" alt="big image" />
      <div :class="$style.description">
        <h4 :class="$style.name">{{ user.name }}</h4>
        <p :class="$style.email">
          email: <span>{{ user.email }}</span>
        </p>
        <p :class="$style.email">
          phone: <span>{{ user.phone }}</span>
        </p>
        <h5 :class="$style.about">О себе</h5>
        <p :class="$style.content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
    <div v-else>Выберите сотрудника, чтобы посмотреть его профиль</div>
  </div>
</template>

<style module>
@import './userFullCard.module.scss';
</style>
