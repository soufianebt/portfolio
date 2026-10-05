<template>
  <article class="technology-card">
    <span class="technology-card__logo">
      <img :src="image" alt="" class="technology-card__image" loading="lazy">
    </span>
    <h3 class="technology-card__name">{{ name }}</h3>
  </article>
</template>

<script setup>
defineProps({
  image: { type: String, required: true },
  name: { type: String, required: true },
})
</script>

