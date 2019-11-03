<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-spaced">Get all the news you are looking for...</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <b-navbar-dropdown :label="selectedCountry[1]">
          <b-navbar-item
            v-for="(country, index) in countries"
            v-bind:key="index"
            @click="selectedCountry = country"
          >{{country[1]}}</b-navbar-item>
        </b-navbar-dropdown>
        <b-button @click="getNews()">Search</b-button>
      </div>
    </section>
    <div class="container box" :v-if="articles">
      <div class="columns is-multiline">
        <Article v-for="(article, index) in articles" v-bind:article="article" v-bind:key="index"></Article>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import axios from "axios";
import Article from "@/components/Article.vue";

@Component({
  components: {
    Article
  }
})
export default class Home extends Vue {
  articles: [] = [];
  apiKey: string = "1331d44e2a9545019c4835d49151627e";

  countries = [["us", "USA"], ["fr", "France"], ["ru", "Russia"]];

  selectedCountry = ["us", "USA"];

  getNews() {
    this.articles = [];
    const url = `https://newsapi.org/v2/top-headlines?country=${this.selectedCountry[0]}&apiKey=${this.apiKey}`;

    axios
      .get(url)
      .then(response => (this.articles = response.data.articles))
      .catch(error => console.log(error));
  }

  mounted() {
    this.getNews();
  }
}
</script>
