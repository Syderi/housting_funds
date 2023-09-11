<script>
import UserPrevueCard from './uiComponents/UserPrevueCard.vue';
import Preloader from '../../ui_global/Preloader.vue';

export default {
  data() {
    return {
      searchQuery: '',
    };
  },
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
    filteredUsers() {
      if (!this.$store.state.users) {
        return [];
      }
      const query = this.searchQuery.toLowerCase();

      return this.users.filter((user) => {
        return (
          user.name.toLowerCase().includes(query) ||
          user.id.toString().includes(query)
        );
      });
    },
    errorMessage() {
      return this.$store.state.errorMessage;
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
    <input type="text" placeholder="Введите Id или имя" v-model="searchQuery" />
    <h3>Результаты</h3>
    <div :class="$style.preloader" v-if="isLoadingUsers">
      <Preloader />
      <br />
      <p>Загрузка данных пользователей...</p>
    </div>
    <div v-if="errorMessage && !users" :class="$style.errorMessage">
      Произошла ошибка: {{ errorMessage }}
    </div>
    <ul :class="$style.usersWrapper">
      <li v-for="user in filteredUsers" :key="user.id">
        <UserPrevueCard :name="user.name" :email="user.email" :id="user.id" />
      </li>
    </ul>
    <div
      :class="$style.notUsers"
      v-if="filteredUsers.length === 0 && !isLoadingUsers"
      class="not-found"
    >
      Ничего не найдено
    </div>
  </aside>
</template>

<style module>
@import './asideSection.module.scss';
</style>
