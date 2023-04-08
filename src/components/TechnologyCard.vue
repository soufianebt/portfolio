<template>
  <div class="tech-card">
    <img :src="image" :alt="name" class="tech-card__image" />
    <h2 class="tech-card__name">{{ name }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
