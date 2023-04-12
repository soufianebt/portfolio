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
          name: 'Dwirty',
          description: 'Dwerty location est un espace pour les résidents marocains et non marocains ainsi que pour les touristes dans lequel ils peuvent chercher et trouver un bon logement qui répond à leurs attentes',
          url: 'https://github.com/soufianebt/Dwerty-Location',
          imageUrl: 'images/Projects/Dwirty.png',
        },
        {
          name: 'My Coiffeur',
          description: 'My Coiffeur',
          url: 'https://github.com/soufianebt/MyCoiffeur',
          imageUrl: 'images/Projects/MyCoiffeur.png',
        },
        {
          name: 'KALAH',
          description: 'kalah',
          url: 'https://github.com/soufianebt/KALAH',
          imageUrl: 'images/Projects/Kalah.png',
        },
        {
          name: 'dwirty Location mobile',
          description: 'Dwerty location est un espace pour les résidents marocains et non marocains ainsi que pour les touristes dans lequel ils peuvent chercher et trouver un bon logement qui répond à leurs attentes',
          url: 'https://github.com/soufianebt/DwertyLocation_app',
          imageUrl: 'images/Projects/Dwirty.png',
        },
        {
          name: 'Litifli',
          description: 'Litefli is a platform dedicated to medical centers and Moroccan citizens to manage vaccination appointments for babies.',
          url: 'https://github.com/soufianebt/Litefli',
          imageUrl: 'images/Projects/Litefli.png',
        },
        {
          name: 'contactApp',
          description: 'Contacte App It is a cross-platform application developed with Ionic, Cordova, Angular, fireBase technologies (As part of an academic project). Our application provides its users with a telephone contact management,',
          url: 'https://github.com/soufianebt/contactApp',
          imageUrl: 'images/Projects/ContactApp.png',
        }
      ],
    };
  },
};
</script>

<style scoped>

</style>
