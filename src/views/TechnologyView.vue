<script setup>
import TechnologyCard from '@/components/TechnologyCard.vue'

const groups = [
    {
        id: 'application',
        title: 'Web & mobile',
        description: 'Interfaces and applications across devices.',
        technologies: [
            { name: 'Vue.js', image: 'images/Technologies/Vujs.svg' },
            { name: 'Angular', image: 'images/Technologies/angular-icon.svg' },
            { name: 'Android', image: 'images/Technologies/Android.svg' },
            { name: 'Ionic', image: 'images/Technologies/Ionic.svg' },
        ],
    },
    {
        id: 'backend',
        title: 'Backend & data',
        description: 'Languages, runtime, frameworks, and databases.',
        technologies: [
            { name: 'C#', image: 'images/Technologies/C.svg' },
            { name: 'SQL Server', image: 'images/Technologies/mssql.png' },
            { name: 'Java', image: 'images/Technologies/Java.svg' },
            { name: 'Spring', image: 'images/Technologies/Spring.svg' },
            { name: 'Node.js', image: 'images/Technologies/Nodejs.svg' },
        ],
    },
    {
        id: 'tooling',
        title: 'Tools & platforms',
        description: 'Everyday tools for development and delivery.',
        technologies: [
            { name: 'Git', image: 'images/Technologies/Git.svg' },
            { name: 'Linux', image: 'images/Technologies/Linux.svg' },
        ],
    },
]
</script>

<template>
    <section class="technology-view" aria-labelledby="technology-title">
        <header class="technology-heading">
            <p class="technology-heading__eyebrow">The toolkit</p>
            <h1 id="technology-title">Tools for building <em>useful things.</em></h1>
            <p class="technology-heading__summary">
                A practical mix of web, mobile, backend, and platform technologies gathered through work and learning.
            </p>
        </header>

        <div class="technology-groups">
            <section v-for="(group, index) in groups" :key="group.id" class="technology-group">
                <header class="technology-group__heading">
                    <span class="technology-group__number">0{{ index + 1 }}</span>
                    <div>
                        <h2>{{ group.title }}</h2>
                        <p>{{ group.description }}</p>
                    </div>
                    <span class="technology-group__count">{{ group.technologies.length }} tools</span>
                </header>
                <div class="technology-grid">
                    <TechnologyCard
                        v-for="technology in group.technologies"
                        :key="technology.name"
                        :image="technology.image"
                        :name="technology.name"
                    />
                </div>
            </section>
        </div>
    </section>
</template>
