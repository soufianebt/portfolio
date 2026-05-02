<template>
    <div class="about">
        <h1><font-awesome-icon icon="lightbulb" /> About Me</h1>
        <ul>
            <li><span>Full Name :</span> Soufiane BOUTAHIRI</li>
            <li><span>Age :</span> {{ getMyAge() }}</li>
            <li><span>Qualification :</span> State Engineer (Bac +5)</li>
            <li><span>Post :</span> Full-Stack Engineer Dot Net/ Vue js</li>
            <li><span>Languages :</span> Arabic(Native), French(C1), English (C1)</li>
        </ul>
    </div>
</template>
<script>

export default {
  methods: {
     getMyAge: function () {
      const birthDate = new Date(1999, 1, 6);
      let age = new Date().getFullYear() - birthDate.getFullYear();
      let monthDiff = new Date().getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && new Date().getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }
  }
}
</script>

