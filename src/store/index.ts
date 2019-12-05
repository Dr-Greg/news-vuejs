import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [],
    countries: [
      ['us', 'USA'],
      ['fr', 'France'],
      ['ru', 'Russia'],
    ],
    selectedCountry: ['us', 'USA'],
  },
  getters: {
    selectedCountry: (state) => {
      return state.selectedCountry;
    },
    articles: (state) => {
      return state.articles;
    },
  },
  mutations: {
    selectNewCountry: (
      state,
      data: { country: [string, string]; articles: any }
    ) => {
      state.articles = data.articles;
      state.selectedCountry = data.country;
    },
  },
  actions: {
    async selectNewCountry(context, payload: [string, string]) {
      let articles: [] = [];
      const apiKey: string = '1331d44e2a9545019c4835d49151627e';
      const url = `https://newsapi.org/v2/top-headlines?country=${payload[0]}&apiKey=${apiKey}`;

      await axios
        .get(url)
        .then((response) => (articles = response.data.articles))
        .catch((error) => console.error(error));
      context.commit('selectNewCountry', { country: payload, articles });
    },
  },
  modules: {},
});
