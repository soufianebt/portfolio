<template>
  <article class="education-entry">
    <span class="education-entry__marker" aria-hidden="true"></span>
    <img class="education-entry__logo" :src="img" alt="" loading="lazy">
    <div class="education-entry__content">
      <p class="education-entry__date">{{ date }}</p>
      <h2 class="education-entry__school">{{ school }}</h2>
      <p class="education-entry__field">{{ field }}</p>
      <p class="education-entry__location">{{ location }}</p>
    </div>
  </article>
</template>

<script setup>
defineProps({
  school: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: String, required: true },
  field: { type: String, required: true },
  img: { type: String, required: true },
})
</script>

<style scoped>

</style>