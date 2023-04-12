<template>
  <div class="project-card">
      <img class="project-card__image" :src="projectImageUrl" :alt="projectName" />
    <div class="project-card__body" >
      <h2>{{ projectName }}</h2>
      <p>{{ projectDescription }}</p>

    </div>
    <button class="project-card__button" @click="goToProject">Go to project</button>
  </div>
</template>

<script>
export default {
  props: {
    projectImageUrl: {
      type: String,
      required: true,
    },
    projectName: {
      type: String,
      required: true,
    },
    projectDescription: {
      type: String,
      required: true,
    },
    projectUrl: {
      type: String,
      required: true,
    },
  },
  methods: {
    goToProject() {
      window.open(this.projectUrl, '_blank');
    },
  },
};
</script>

<style scoped>

</style>
