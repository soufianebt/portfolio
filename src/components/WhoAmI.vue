<script setup>
import { RouterLink } from 'vue-router'
import blogPosts from '../data/blogPosts.js'

const featuredPosts = blogPosts.slice(0, 2)
const publicBase = import.meta.env.BASE_URL
</script>

<template>
    <div class="home-page">
        <section class="home-hero" aria-labelledby="home-title">
            <div class="home-hero__copy">
                <p class="home-hero__eyebrow"><span></span> Software developer · .NET &amp; web</p>
                <h1 id="home-title">Good software is built to <em>last.</em></h1>
                <p class="home-hero__intro">
                    I'm Soufiane, a software developer focused on .NET and modern web experiences.
                    I enjoy shaping clear architecture, reusable components, and software people can rely on.
                </p>
                <div class="home-hero__actions">
                    <RouterLink class="home-action home-action--primary" to="/projects">
                        Explore projects <span aria-hidden="true">↗</span>
                    </RouterLink>
                    <RouterLink class="home-action home-action--text" to="/blog">Read the blog</RouterLink>
                </div>
                <p class="home-hero__signature">Curious by nature. Deliberate by design.</p>
            </div>

            <div class="home-hero__visual" aria-label="Portrait and a .NET code sample">
                <div class="home-hero__portrait-frame">
                    <img
                        class="home-hero__portrait"
                        :src="`${publicBase}soufianeBoutahiri.jpg`"
                        alt="Soufiane Boutahiri"
                    >
                    <span class="home-hero__portrait-label">The person behind the code</span>
                </div>
                <div class="home-code" aria-label="C sharp code sample">
                    <div class="home-code__topbar">
                        <span class="home-code__lights" aria-hidden="true"><i></i><i></i><i></i></span>
                        <span>DeveloperProfile.cs</span>
                    </div>
                    <pre><code><span class="home-code__keyword">public sealed class</span> Builder
{
    <span class="home-code__keyword">public string</span> Backend =&gt; <span class="home-code__string">".NET"</span>;
    <span class="home-code__keyword">public string</span> Frontend =&gt; <span class="home-code__string">"Vue"</span>;
    <span class="home-code__keyword">public string</span> Principle =&gt; <span class="home-code__string">"Keep it clear"</span>;
}</code></pre>
                </div>
                <span class="home-hero__index" aria-hidden="true">01 / 04</span>
            </div>
        </section>

        <section class="home-focus" aria-label="Areas of focus">
            <div class="home-focus__item"><span>01</span><strong>Reliable .NET systems</strong></div>
            <div class="home-focus__item"><span>02</span><strong>Clear software architecture</strong></div>
            <div class="home-focus__item"><span>03</span><strong>Human-centered interfaces</strong></div>
        </section>

        <section class="home-writing" aria-labelledby="home-writing-title">
            <div class="home-writing__heading">
                <div>
                    <p class="home-writing__eyebrow">Field notes</p>
                    <h2 id="home-writing-title">Ideas from the build</h2>
                </div>
                <RouterLink class="home-writing__all" to="/blog">All writing <span aria-hidden="true">↗</span></RouterLink>
            </div>
            <div class="home-writing__list">
                <article v-for="post in featuredPosts" :key="post.slug" class="home-writing__item">
                    <span class="home-writing__category">{{ post.category }}</span>
                    <div>
                        <h3><RouterLink :to="`/blog/${post.slug}`">{{ post.title }}</RouterLink></h3>
                        <p>{{ post.excerpt }}</p>
                    </div>
                    <span class="home-writing__status">Draft note</span>
                </article>
            </div>
        </section>
    </div>
</template>
