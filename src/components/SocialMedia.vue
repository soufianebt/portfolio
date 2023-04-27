<template>
    <div class="social-media">
        <a href="https://github.com/soufianebt" target="_blank">
            <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a href="https://www.linkedin.com/in/soufianeboutahiri/" target="_blank">
            <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
        <a href="https://www.credly.com/users/soufiane-boutahiri/badges" target="_blank">
            <img src="credly.svg"/>
        </a>

    </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
export default {
    components: {
        FontAwesomeIcon
    },
    name: "SocialMedia"
}
</script>

<style>

</style>
