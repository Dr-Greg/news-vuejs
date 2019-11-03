<template>
  <div class="column is-6-tablet is-3-desktop my-column">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img class="thumbnail" :src="articleData.urlToImage" alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="articleData.urlToImage" alt="Placeholder image" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-6">{{articleData.author}}</p>
            <!-- <p class="subtitle is-6">{{articleData.author}}</p> -->
          </div>
        </div>

        <div class="content">
          {{articleData.title}}
          <br />
          <a :href="articleData.url" target="blanc">Read</a>
          <br />
          <br />
          <b-button style="margin-right: 10px" @click="readArticle(articleData.url)">Like</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: ["article"]
})
export default class Article extends Vue {
  articleData: {} = {};

  mounted() {
    this.articleData = this.$props.article;
  }

  readArticle(url: string) {
    console.log(url);
  }
}
</script>