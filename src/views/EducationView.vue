<template>

    <div class="education__container">
        <h1 class="education__title">Education</h1>
        <div class="education__container__card">
            <template v-for="education in educations" :key="education.id">
                <Education
                        :date="education.date"
                        :field="education.field"
                        :img="education.img"
                        :location="education.location"
                        :school="education.school"/>
            </template>
        </div>
    </div>
</template>

<script>
import Education from '../components/EducationCard.vue'

export default {
  components: {
    Education
  },
  data() {
    return {
      educations: [
        {
          id: 1,
          school: 'National School of Computer Science and Systems Analysis',
          location: 'Rabat, Morocco',
          date: '2019-2022',
          field: 'Master Degree in Web&Mobile Computing Engineering',
          img: ("images/Education/ENSIAS.png"),
        },
        {
          id: 2,
          school: 'Faculty of Sciences Rabat',
          location: 'Rabat, Morocco',
          date: '2017-2019',
          field: 'DEUG in Applied Mathematics',
          img: ("images/Education/fsr.png")
        },
        {
          id: 3,
          school: 'Lyce Abou Bakr Errazi',
          location: 'Skhirat, Morocco',
          date: '2017',
          field: 'Baccalaureate in Applied Mathematics-A',
          img: ("images/Education/khazarizmi.jpg")
        }
      ]
    }
  }
}
</script>