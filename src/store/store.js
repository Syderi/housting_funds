import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: null,
    users: null,
    isLoadingUser: false,
    isLoadingUsers: false,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_LOADING_USER(state, isLoading) {
      state.isLoadingUser = isLoading;
    },
    SET_LOADING_USERS(state, isLoading) {
      state.isLoadingUsers = isLoading;
    },
  },
  actions: {
    async fetchUserById({ commit }, userId) {
      try {
        commit('SET_LOADING_USER', true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const data = await response.json();
        commit('SET_USER', data);
      } catch (error) {
        console.error('Ошибка при запросе пользователя:', error);
      } finally {
        commit('SET_LOADING_USER', false);
      }
    },
    async fetchUsers({ commit }) {
      try {
        commit('SET_LOADING_USERS', true);
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        const data = await response.json();
        commit('SET_USERS', data);
      } catch (error) {
        console.error('Ошибка при запросе пользователей:', error);
      } finally {
        commit('SET_LOADING_USERS', false);
      }
    },
  },
});

export default store;
