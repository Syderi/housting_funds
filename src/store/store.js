import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: null,
    users: null,
    selectedUserId: null,
    isLoadingUser: false,
    isLoadingUsers: false,
    errorMessage: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_SELECTED_USER_ID(state, userId) {
      state.selectedUserId = userId;
    },
    SET_LOADING_USER(state, isLoading) {
      state.isLoadingUser = isLoading;
    },
    SET_LOADING_USERS(state, isLoading) {
      state.isLoadingUsers = isLoading;
    },
    SET_ERROR_MESAGE(state, message) {
      state.errorMessage = message;
    },
  },
  actions: {
    async fetchUserById({ commit }, userId) {
      try {
        commit('SET_LOADING_USER', true);
        commit('SET_ERROR_MESAGE', null);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const data = await response.json();
        commit('SET_USER', data);
      } catch (error) {
        console.error('Ошибка при запросе пользователя:', error);
        commit('SET_ERROR_MESAGE', error.message);
      } finally {
        commit('SET_LOADING_USER', false);
      }
    },
    async fetchUsers({ commit }) {
      try {
        commit('SET_LOADING_USERS', true);
        commit('SET_ERROR_MESAGE', null);
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        const data = await response.json();
        commit('SET_USERS', data);
      } catch (error) {
        console.error('Ошибка при запросе пользователей:', error);
        commit('SET_ERROR_MESAGE', error.message);
      } finally {
        commit('SET_LOADING_USERS', false);
      }
    },
    setSelectedUserId({ commit }, userId) {
      commit('SET_SELECTED_USER_ID', userId);
    },
  },
});

export default store;
