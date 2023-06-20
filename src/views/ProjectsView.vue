<template>
  <div class="projects-view">
    <h1><font-awesome-icon icon="star" /> Projects</h1>
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
            description: 'Dwerty rental is a space for Moroccan and non-Moroccan residents as well as for tourists in which they can search and find a good accommodation that meets their expectations',          url: 'https://github.com/soufianebt/Dwerty-Location',
          imageUrl: 'images/Projects/Dwirty.png',
        },
        {
          name: 'My Coiffeur',
          description: 'My Coiffeur is a mobile application to manage appointments at local hairdressers, as well as a social media for the coifeur where they share their offers and haircuts.',
          url: 'https://github.com/soufianebt/MyCoiffeur',
          imageUrl: 'images/Projects/MyCoiffeur.png',
        },
        {
          name: 'KALAH',
          description: 'Kalah is a two-player strategy game played on a wooden board with two rows of six pits. The objective is to capture as many stones as possible from your opponent\'s side of the board. The game requires strategic planning and critical thinking and ends when one player no longer has any stones on their side of the board.',
          url: 'https://github.com/soufianebt/KALAH',
          imageUrl: 'images/Projects/Kalah.png',
        },
        {
          name: 'dwirty Location mobile',
            description: 'Dwerty rental is a space for Moroccan and non-Moroccan residents as well as for tourists in which they can search and find a good accommodation that meets their expectations',          url: 'https://github.com/soufianebt/DwertyLocation_app',
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
        },
        {
          name: 'Syndic Management',
          description: 'Syndic app',
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
