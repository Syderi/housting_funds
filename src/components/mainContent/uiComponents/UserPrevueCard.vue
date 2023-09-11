<script setup></script>

<template>
  <div :class="$style.wrapper">
    <img src="../../../assets/image/prevue_user.png" alt="prevue avatar" />
    <div :class="$style.description">
      <h4 :class="$style.name">Bret</h4>
      <p :class="$style.email">Sincere@april.biz</p>
    </div>
  </div>
</template>

<style module>
@import './userPrevueCard.module.scss';
</style>
