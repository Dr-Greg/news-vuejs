<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>This app uses</strong>
        <a href="https://newsapi.org/" target="blanc"> News API</a>
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class AppFooter extends Vue {}
</script>

<style scoped></style>
