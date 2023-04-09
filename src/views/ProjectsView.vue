<template>
  <div class="projects-view">
    <h1>Projects</h1>
    <div class="project-list">
      <ProjectCard
          v-for="(project, index) in projectList"
          :key="index"
          :projectImageUrl="project.imageUrl"
          :projectName="project.name"
          :projectDescription="project.description"
          :projectUrl="project.url"
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue';

export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projectList: [
        {
          name: 'Project 1',
          description: 'This is a project description',
          url: 'https://www.google.com',
          imageUrl: 'https://picsum.photos/300/200',
        },
        {
          name: 'Project 2',
          description: 'This is a project description',
          url: 'https://www.google.com',
          imageUrl: 'https://picsum.photos/300/200',
        },
        {
          name: 'Project 3',
          description: 'This is a project description',
          url: 'https://www.google.com',
          imageUrl: 'https://picsum.photos/300/200',
        },
        {
          name: 'Project 4',
          description: 'This is a project description',
          url: 'https://www.google.com',
          imageUrl: 'https://picsum.photos/300/200',
        },
        {
          name: 'Project 5',
          description: 'This is a project description',
          url: 'https://www.google.com',
          imageUrl: 'https://picsum.photos/300/200',
        },
        {
          name: 'Project 6',
          description: 'This is a project description',
          url: 'https://www.google.com',
          imageUrl: 'https://picsum.photos/300/200',
        },
        {
          name: 'Project 7',
          description: 'This is a project description',
          url: 'https://www.google.com',
          imageUrl: 'https://picsum.photos/300/200',
        },
        {
          name: 'Project 8',
          description: 'This is a project description',
          url: 'https://www.google.com',
          imageUrl: 'https://picsum.photos/300/200',
        },
        {
          name: 'Project 9',
          description: 'This is a project description',
          url: 'https://www.google.com',
          imageUrl: 'https://picsum.photos/300/200',
        },
        {
          name: 'Project 10',
          description: 'This is a project description',
          url: 'https://www.google.com',
          imageUrl: 'https://picsum.photos/300/200',
        },
      ],
    };
  },
};
</script>

<style scoped>
.project-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
}
</style>
