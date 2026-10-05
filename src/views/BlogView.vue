<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import blogPosts from '../data/blogPosts.js'

const route = useRoute()
const activePost = computed(() => blogPosts.find((post) => post.slug === route.params.slug))
</script>

<template>
  <div class="blog-view">
    <template v-if="activePost">
      <article class="blog-article">
        <RouterLink class="blog-article__back" to="/blog">← All notes</RouterLink>
        <p class="blog-article__eyebrow">{{ activePost.category }} <span>·</span> Draft note</p>
        <h1 class="blog-article__title">{{ activePost.title }}</h1>
        <p class="blog-article__dek">{{ activePost.excerpt }}</p>
        <div class="blog-article__body">
          <p v-for="paragraph in activePost.paragraphs" :key="paragraph">{{ paragraph }}</p>
        </div>
        <RouterLink class="blog-article__back blog-article__back--bottom" to="/blog">← Back to all notes</RouterLink>
      </article>
    </template>

    <template v-else>
      <header class="blog-view__intro">
        <p class="blog-view__eyebrow">The writing desk</p>
        <h1>Notes on building <em>better software.</em></h1>
        <p>Ideas on .NET, architecture, and the small decisions that make products easier to build and maintain.</p>
      </header>
      <div class="blog-view__list">
        <article v-for="(post, index) in blogPosts" :key="post.slug" class="blog-entry">
          <span class="blog-entry__number">{{ String(index + 1).padStart(2, '0') }}</span>
          <div class="blog-entry__content">
            <p class="blog-entry__category">{{ post.category }} <span>·</span> Draft note</p>
            <h2><RouterLink :to="`/blog/${post.slug}`">{{ post.title }}</RouterLink></h2>
            <p class="blog-entry__excerpt">{{ post.excerpt }}</p>
            <RouterLink class="blog-entry__read" :to="`/blog/${post.slug}`">
              Read note <span aria-hidden="true">↗</span>
            </RouterLink>
          </div>
        </article>
      </div>
    </template>
  </div>
</template>