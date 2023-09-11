<script>
import UserPrevueCard from './uiComponents/UserPrevueCard.vue';

export default {
  components: {
    UserPrevueCard,
  },

  computed: {
    users() {
      return this.$store.state.users;
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
    <ul :class="$style.usersWrapper">
      <li v-for="user in users" :key="user.id">
        <UserPrevueCard :name="user.name" :email="user.email" />
      </li>
    </ul>
  </aside>
</template>

<style module>
@import './asideSection.module.scss';
</style>
