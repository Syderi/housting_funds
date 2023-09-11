<script>
export default {
  props: {
    id: Number,
    name: String,
    email: String,
  },
  methods: {
    shortenText(text) {
      if (text.length > 12) {
        return text.substring(0, 12) + '...';
      } else {
        return text;
      }
    },
    selectUser(userId) {
      // Вызываем действие fetchUserById для загрузки пользователя по ID
      this.$store.dispatch('fetchUserById', userId);
    },
  },
};
</script>

<template>
  <div :class="$style.wrapper" @click="selectUser(id)">
    <img src="../../../assets/image/prevue_user.png" alt="prevue avatar" />
    <div :class="$style.description">
      <h4 :class="$style.name">{{ shortenText(name) }}</h4>
      <p :class="$style.email">{{ shortenText(email) }}</p>
    </div>
  </div>
</template>

<style module>
@import './userPrevueCard.module.scss';
</style>
