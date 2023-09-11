<script>
import UserPrevueCard from './uiComponents/UserPrevueCard.vue';
import Preloader from '../../ui_global/Preloader.vue';

export default {
  components: {
    UserPrevueCard,
    Preloader,
  },

  computed: {
    users() {
      return this.$store.state.users;
    },
    isLoadingUsers() {
      return this.$store.state.isLoadingUsers;
    },
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      this.$store.dispatch('fetchUsers');
    },
  },
};
</script>

<template>
  <aside :class="$style.wrapper">
    <h3>Поиск сотрудников</h3>
    <input type="text" placeholder="Введите Id или имя" />
    <h3>Результаты</h3>
    <div :class="$style.preloader" v-if="isLoadingUsers">
      <Preloader />
      <br />
      <p>Загрузка данных пользователей...</p>
    </div>
    <ul :class="$style.usersWrapper">
      <li v-for="user in users" :key="user.id">
        <UserPrevueCard :name="user.name" :email="user.email" :id="user.id" />
      </li>
    </ul>
  </aside>
</template>

<style module>
@import './asideSection.module.scss';
</style>
