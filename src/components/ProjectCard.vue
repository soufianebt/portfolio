<template>
  <div class="project-card">
    <div class="project-image">
      <img :src="projectImageUrl" :alt="projectName" />
    </div>
    <div class="project-description">
      <h2>{{ projectName }}</h2>
      <p>{{ projectDescription }}</p>
      <button @click="goToProject">Go to project</button>
    </div>
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
.project-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.project-image {
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
}

.project-image img {
  width: 100%;
  height: auto;
}

.project-description {
  text-align: center;
}

.project-description h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.project-description p {
  margin-bottom: 20px;
}

.project-description button {
  border: none;
  background-color: #0080ff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.project-description button:hover {
  background-color: #0066cc;
}
</style>
