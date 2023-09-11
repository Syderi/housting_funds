# Тестовое задание Frontend разработчик

  Необходимо реализовать страницу поиска сотрудников, с предпросмотром профиля.
Приложение состоит из двух страниц, в sidebar осуществляется поиск и отображение результатов, можно искать одного сотрудника или нескольких.
  На главной отображается карточка пользователя с личными данными.
Готовый проект выложите на github.

### Sidebar
  В строке поиска пользователя необходимо реализовать запрос к API для получения необходимых юзеров.
  В случае если результат вернул ошибку (параметры запроса неверные, либо ошибка сервера), необходимо отобразить эту ошибку пользователю.
  После успешно выполненного запроса, необходимо отобразить полученного пользователя или пользователей в интерфейсе.
### Макет

[Макет в Figma](https://www.figma.com/file/xEn4NVa7jVNgJC65Zx509X/Тестовое-задание-JF

### Шрифт
В проекте используется шрифт Montserrat [Шрифт](https://fonts.google.com/specimen/Montserrat)

### Обязательно:
+ SPA должно быть реализовано с использованием Vue,Vuex.
+ Необходимо создать основные компоненты.
+ Использовать actions, mutations. 
+ Стили должны быть написаны с помощью препроцессора Scss
+ Во время всех запросов нужно сигнализировать пользователю через прелоадер, что происходит запрос.
+ 6.Использовать изоляцию стилей.

### Документация API
[Документация API](https://jsonplaceholder.typicode.com)

### Пример запроса пользователя по id:
[Пример запроса пользователя по id](https://jsonplaceholder.typicode.com/users/1)
method: GET 

## Для запуска

- ```git clone https://github.com/Syderi/housting_funds.git```
- ```npm i```
- ```npm run dev```
