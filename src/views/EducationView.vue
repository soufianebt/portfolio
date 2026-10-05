<script setup>
import EducationCard from '../components/EducationCard.vue'

const educations = [
  {
    id: 1,
    school: 'National School of Computer Science and Systems Analysis',
    location: 'Rabat, Morocco',
    date: '2019-2022',
    field: 'Master Degree in Web&Mobile Computing Engineering',
    img: 'images/Education/ENSIAS.png',
  },
  {
    id: 2,
    school: 'Faculty of Sciences Rabat',
    location: 'Rabat, Morocco',
    date: '2017-2019',
    field: 'DEUG in Applied Mathematics',
    img: 'images/Education/fsr.png',
  },
  {
    id: 3,
    school: 'Lyce Abou Bakr Errazi',
    location: 'Skhirat, Morocco',
    date: '2017',
    field: 'Baccalaureate in Applied Mathematics-A',
    img: 'images/Education/khazarizmi.jpg',
  },
]
</script>

<template>
  <section class="education-page" aria-labelledby="education-title">
    <header class="education-heading">
      <p class="education-heading__eyebrow">Learning path</p>
      <h1 id="education-title">Built on a foundation of <em>curiosity.</em></h1>
      <p class="education-heading__summary">
        A path through mathematics, computer science, and engineering for the web and mobile.
      </p>
    </header>

    <div class="education-timeline">
      <EducationCard
        v-for="education in educations"
        :key="education.id"
        :date="education.date"
        :field="education.field"
        :img="education.img"
        :location="education.location"
        :school="education.school"
      />
    </div>
  </section>
</template>