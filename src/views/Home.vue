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
            @click="selectNewCountry(country);"
          >{{ country[1] }}</b-navbar-item>
        </b-navbar-dropdown>
        <b-button @click="selectNewCountry(selectedCountry)">Search</b-button>
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
import { Vue, Component } from 'vue-property-decorator';

import Article from '@/components/Article.vue';
import { mapState, mapGetters } from 'vuex';

@Component({
  components: {
    Article,
  },
  computed: {
    ...mapState(['articles', 'countries']),
    ...mapGetters(['articles', 'selectedCountry']),
  },
  methods: {
    selectNewCountry(country: [string, string]): void {
      this.$store.dispatch('selectNewCountry', country);
    },
  },
})
export default class Home extends Vue {
  private mounted() {
    this.$store.dispatch(
      'selectNewCountry',
      this.$store.getters.selectedCountry
    );
  }
}
</script>
