<template>
    <div class="social-media">
        <a href="https://github.com/soufianebt" target="_blank">
            <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a href="https://www.linkedin.com/in/soufianeboutahiri/" target="_blank">
            <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
        <a href="https://www.credly.com/users/soufiane-boutahiri/badges" target="_blank">
            <img :src="`${publicBase}credly.svg`" alt="Credly profile"/>
        </a>

    </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const publicBase = import.meta.env.BASE_URL
</script>

<style>

</style>
