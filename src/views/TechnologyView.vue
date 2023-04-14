<template>
  <div class="technology-view">
    <h1 class="technology-view__title"> <font-awesome-icon icon="microchip" /> Technologies</h1>
    <div class="technology-view__cards">
      <TechnologyCard
          v-for="tech in technologies"
          :key="tech.id"
          :image="tech.image"
          :name="tech.name"
      />
    </div>
  </div>
</template>

<script>
import TechnologyCard from "@/components/TechnologyCard.vue";

export default {
  components: {
    TechnologyCard,
  },
  data() {
    return {
      technologies: [
        {
          id: 1,
          name: "Vue.js",
          image: "images/Technologies/Vujs.svg",
        },
        {
          id: 2,
          name: "Android",
          image: "images/Technologies/Android.svg",
        },
        {
          id: 3,
          name: "angular",
          image: "images/Technologies/angular-icon.svg",
        },
        {
          id: 4,
          name: "C",
          image: "images/Technologies/C.svg",
        },
        {
          id: 5,
          name: "Git",
          image: "images/Technologies/Git.svg",
        },
        {
          id: 6,
          name: "Ionic",
          image: "images/Technologies/Ionic.svg",
        },
        {
          id: 7,
          name: "Java",
          image: "images/Technologies/Java.svg",
        },
        {
          id: 8,
          name: "Linux",
          image: "images/Technologies/Linux.svg",
        },
        {
          id: 9,
          name: "Node.js",
          image: "images/Technologies/Nodejs.svg",
        },
        {
          id: 10,
          name: "Spring",
          image: "images/Technologies/Spring.svg",
        },
        {
          id: 11,
          name: "Sql server",
          image: "images/Technologies/mssql.png",
        }
      ]
        };
  },
};
</script>

<style scoped>
.technology-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.technology-view__title {
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
}

.technology-view__cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

@media (max-width: 600px) {
  .technology-view__cards {
    gap: 1rem;
  }
}
</style>
