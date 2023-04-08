<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="main-container">
      <div class="container">
        <section class="main-container__left-side">
        <img src="soufianeBoutahiri.jpg" alt="Soufiane Boutahiri PhotoS" >
        <h1 >Soufiane BOUTAHIRI</h1>
        <nav >
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/education">Education</RouterLink>
            <RouterLink to="/technologies">Technologies</RouterLink>
            <RouterLink to="/contacts">Contacts</RouterLink>
          </nav>
      </section>
      </div>
    <div class="container">
    <section class="main-container__right-side">
      <RouterView />
    </section>
    </div>
  </div>
</template>

