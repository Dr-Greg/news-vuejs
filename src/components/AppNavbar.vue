<template>
  <b-navbar class="navbar is-fixed-top">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">NEWS</b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-dropdown :label="selectedLang">
        <b-navbar-item
          v-for="(lang, index) in langs"
          v-bind:key="index"
          @click="selectedLang = lang"
        >{{lang}}</b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <b-navbar-item tag="router-link" :to="{ path: '/register' }" class="button is-primary">
            <strong>Sign up</strong>
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/login' }" class="button is-light">Log in</b-navbar-item>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class AppNavbar extends Vue {
  langs = ["en", "fr"];
  selectedLang = "en";
}
</script>

<style scoped>
.navbar {
  padding: 0 5vh;
  box-shadow: 0 1px grey;
  background-color: #fafafa;
}
</style>