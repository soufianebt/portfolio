<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SocialMedia from '@/components/SocialMedia.vue'

const currentYear = new Date().getFullYear()
</script>

<template>
    <div class="site-shell">
        <a class="site-shell__skip-link" href="#main-content">Skip to content</a>
        <header class="site-header">
            <div class="site-header__inner">
                <RouterLink class="site-brand" to="/" aria-label="Soufiane Boutahiri, home">
                    <span class="site-brand__mark" aria-hidden="true">SB</span>
                    <span class="site-brand__text">
                        <strong>Soufiane Boutahiri</strong>
                        <span>Software developer · .NET</span>
                    </span>
                </RouterLink>

                <nav class="site-nav" aria-label="Main navigation">
                    <RouterLink class="site-nav__link" to="/" exact-active-class="site-nav__link--active">Home</RouterLink>
                    <RouterLink class="site-nav__link" to="/about" active-class="site-nav__link--active">About</RouterLink>
                    <RouterLink class="site-nav__link" to="/education" active-class="site-nav__link--active">Education</RouterLink>
                    <RouterLink class="site-nav__link" to="/technologies" active-class="site-nav__link--active">Technologies</RouterLink>
                    <RouterLink class="site-nav__link" to="/projects" active-class="site-nav__link--active">Projects</RouterLink>
                    <RouterLink class="site-nav__link" to="/blog" active-class="site-nav__link--active">Blog</RouterLink>
                </nav>

                <a class="site-header__contact" href="mailto:soufianeboutahiri@gmail.com">
                    Let's talk <span aria-hidden="true">↗</span>
                </a>
            </div>
        </header>

        <main id="main-content" class="site-main">
            <RouterView v-slot="{ Component, route }">
                <Transition name="route-fade" mode="out-in">
                    <component :is="Component" :key="route.fullPath" />
                </Transition>
            </RouterView>
        </main>

        <footer class="site-footer">
            <p>© {{ currentYear }} Soufiane Boutahiri</p>
            <p>Thoughtful software, built with .NET and Vue.</p>
            <SocialMedia />
        </footer>
    </div>
</template>

