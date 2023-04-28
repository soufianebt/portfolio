<script setup>
import {RouterLink, RouterView} from 'vue-router'
import SocialMedia from "@/components/SocialMedia.vue";
</script>

<template>
    <div class="main-container">
        <div class="container left-side">
            <section class="main-container__left-side">
                <div class="avatar-container">
                    <img alt="Soufiane Boutahiri PhotoS"  src="/soufianeBoutahiri.jpg" >
                </div>
                <h1>Soufiane BOUTAHIRI</h1>
                <nav>
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/about">About</RouterLink>
                    <RouterLink to="/education">Education</RouterLink>
                    <RouterLink to="/technologies">Technologies</RouterLink>
                    <RouterLink to="/projects">Projects</RouterLink>
                    <RouterLink to="/contacts">Contacts</RouterLink>
                </nav>
                <SocialMedia/>
            </section>
        </div>
        <div class="container">
            <section class="main-container__right-side">
                <RouterView/>
            </section>
        </div>
    </div>
</template>

