<template>
  <article class="project-card">
    <div class="project-card__media">
      <img class="project-card__image" :src="projectImageUrl" :alt="`${projectName} preview`" loading="lazy">
      <span class="project-card__number">{{ projectNumber }}</span>
    </div>
    <div class="project-card__content">
      <h2 class="project-card__title">{{ projectName }}</h2>
      <p class="project-card__description">{{ projectDescription }}</p>
      <a class="project-card__link" :href="projectUrl" target="_blank" rel="noopener noreferrer">
        Explore project <span aria-hidden="true">↗</span>
      </a>
    </div>
  </article>
</template>

<script setup>
defineProps({
  projectNumber: { type: String, required: true },
  projectImageUrl: { type: String, required: true },
  projectName: { type: String, required: true },
  projectDescription: { type: String, required: true },
  projectUrl: { type: String, required: true },
})
</script>

<style scoped>

</style>
