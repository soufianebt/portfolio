<script setup>
import ProjectCard from '@/components/ProjectCard.vue'

const projectList = [
  {
    name: 'Dwirty',
    description: 'A rental platform for Moroccan and international residents, as well as tourists, to search for accommodation.',
    url: 'https://github.com/soufianebt/Dwerty-Location',
    imageUrl: 'images/Projects/Dwirty.png',
  },
  {
    name: 'My Coiffeur',
    description: 'A mobile app for managing appointments at local hairdressers, with a social space for sharing offers and haircuts.',
    url: 'https://github.com/soufianebt/MyCoiffeur',
    imageUrl: 'images/Projects/MyCoiffeur.png',
  },
  {
    name: 'KALAH',
    description: 'A two-player strategy game where players plan moves to capture more stones than their opponent.',
    url: 'https://github.com/soufianebt/KALAH',
    imageUrl: 'images/Projects/Kalah.png',
  },
  {
    name: 'Dwirty Location mobile',
    description: 'A mobile project for the Dwirty rental platform.',
    url: 'https://github.com/soufianebt/DwirtyLocation_app',
    imageUrl: 'images/Projects/Dwirty.png',
  },
  {
    name: 'Litifli',
    description: 'A platform for medical centers and Moroccan citizens to manage vaccination appointments for babies.',
    url: 'https://github.com/soufianebt/Litefli',
    imageUrl: 'images/Projects/Litefli.png',
  },
  {
    name: 'Contact App',
    description: 'An academic cross-platform contact management app built with Ionic, Cordova, Angular, and Firebase.',
    url: 'https://github.com/soufianebt/contactApp',
    imageUrl: 'images/Projects/ContactApp.png',
  },
  {
    name: 'Syndic Management',
    description: 'A residential building management application.',
    url: 'https://github.com/soufianebt/contactApp',
    imageUrl: 'images/Projects/ContactApp.png',
  },
]
</script>

<template>
  <section class="projects-view" aria-labelledby="projects-title">
    <header class="projects-heading">
      <p class="projects-heading__eyebrow">Selected work <span>{{ projectList.length }} projects</span></p>
      <h1 id="projects-title">Small ideas, built into <em>real things.</em></h1>
      <p class="projects-heading__summary">
        A selection of web and mobile projects exploring useful products, thoughtful interfaces, and practical engineering.
      </p>
    </header>

    <div class="project-list">
      <ProjectCard
        v-for="(project, index) in projectList"
        :key="project.name"
        :project-number="String(index + 1).padStart(2, '0')"
        :project-image-url="project.imageUrl"
        :project-name="project.name"
        :project-description="project.description"
        :project-url="project.url"
      />
    </div>
  </section>
</template>
