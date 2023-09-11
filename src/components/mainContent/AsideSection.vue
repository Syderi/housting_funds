<script setup>
import UserPrevueCard from './uiComponents/UserPrevueCard.vue'
</script>

<template>
  <aside :class="$style.wrapper">
    <h3>Поиск сотрудников</h3>
    <input type="text" placeholder="Введите Id или имя" />
    <h3>Результаты</h3>
    <ul>
      <li>
        <UserPrevueCard/>
      </li>
      <li>
        <UserPrevueCard/>
      </li>
    </ul>
  </aside>
</template>

<style module>
@import './asideSection.module.scss';
</style>
