<template>
    <div class="about">
        <h1><font-awesome-icon icon="lightbulb" /> About Me</h1>
        <ul>
            <li><span>Full Name :</span> Soufiane BOUTAHIRI</li>
            <li><span>Age :</span> 24</li>
            <li><span>Qualification :</span> State Engineer (Bac +5)</li>
            <li><span>Post :</span> Full-Stack Engineer Dot Net/ Vue js</li>
            <li><span>Languages :</span> Arabic(Native), French(C1), English (B2)</li>
        </ul>
        <button title="Click to download the Resume" @click="downloadFile">Download CV</button>
    </div>
</template>
<script>
import {CV_LINKS} from "@/CONST/PUBLIC_Const";

export default {
  methods: {
    // TODO: Fix this function
    downloadFile: function () {
      window.open(CV_LINKS.FRENCH, '_blank')
    }
  }
}
</script>

