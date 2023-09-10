<script setup></script>

<template>
  <aside :class="$style.wrapper">
    <h3>Поиск сотрудников</h3>
    <input type="text" placeholder="Введите Id или имя" />
    <h3>Результаты</h3>
  </aside>
</template>

<style module>
@import './aside.module.scss';
</style>
