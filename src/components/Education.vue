<template>
  <div class="education">
    <img class="education__img" :src="img" alt="img">
    <ul class="education__info">
      <li class="education__school">{{school}}</li>
      <li class="education__location">{{location}}</li>
      <li class="education__field">{{field}}</li>
    </ul>
    <div class="education__date">{{date}}</div>
  </div>
</template>

<script>
export default {
  name: "Education",
  props: {
      school : String,
      location : String,
      date : String,
      field : String,
      img : String,
  }
}
</script>

<style scoped>

</style>