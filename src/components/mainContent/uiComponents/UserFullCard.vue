<script>
export default {
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
    <p v-if="isLoading">Загрузка данных пользователя...</p>
    <div v-else-if="user" :class="$style.description">
      <h4 :class="$style.name">{{ user.name }}</h4>
      <p :class="$style.email">{{ user.email }}</p>
      <p :class="$style.email">{{ user.phone }}</p>
    </div>
    <div v-else>Выберите сотрудника, чтобы посмотреть его профиль</div>
  </div>
</template>

<style module>
@import './userFullCard.module.scss';
</style>
