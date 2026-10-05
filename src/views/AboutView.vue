<script setup>
import { RouterLink } from 'vue-router'

function calculateAge() {
  const birthDate = new Date(1999, 1, 6)
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const monthDifference = today.getMonth() - birthDate.getMonth()

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1
  }

  return age
}

const age = calculateAge()
</script>

<template>
  <div class="about-page">
    <header class="about-intro">
      <div class="about-intro__copy">
        <p class="about-intro__eyebrow"><span></span> A little about me</p>
        <h1>I build software with <em>clarity and care.</em></h1>
        <p class="about-intro__summary">
          I'm Soufiane Boutahiri, a full-stack engineer drawn to thoughtful .NET systems,
          useful web experiences, and the architecture that helps them grow.
        </p>
        <div class="about-intro__actions">
          <RouterLink class="about-link about-link--primary" to="/projects">
            See what I build <span aria-hidden="true">↗</span>
          </RouterLink>
          <RouterLink class="about-link about-link--quiet" to="/contacts">Get in touch</RouterLink>
        </div>
      </div>

      <figure class="about-portrait">
        <img src="/soufianeBoutahiri.jpg" alt="Soufiane Boutahiri, software developer">
        <figcaption><span>Soufiane Boutahiri</span><span>Engineer · lifelong learner</span></figcaption>
      </figure>
    </header>

    <section class="about-principles" aria-label="Professional interests">
      <div class="about-principles__item">
        <span>01</span>
        <div><h2>Build for change</h2><p>Microservices, maintainable architecture, and systems that can evolve.</p></div>
      </div>
      <div class="about-principles__item">
        <span>02</span>
        <div><h2>Keep it human</h2><p>Clear interfaces and collaborative, iterative ways of working.</p></div>
      </div>
      <div class="about-principles__item">
        <span>03</span>
        <div><h2>Stay curious</h2><p>Learning new tools and adapting as the problem changes.</p></div>
      </div>
    </section>

    <section class="about-details" aria-labelledby="about-details-title">
      <div class="about-details__heading">
        <p>Profile</p>
        <h2 id="about-details-title">The details</h2>
      </div>
      <dl class="about-facts">
        <div class="about-facts__row"><dt>Role</dt><dd>Full-stack engineer · .NET &amp; Vue.js</dd></div>
        <div class="about-facts__row"><dt>Education</dt><dd>State Engineer degree · Bac +5</dd></div>
        <div class="about-facts__row"><dt>Age</dt><dd>{{ age }}</dd></div>
        <div class="about-facts__row about-facts__row--languages">
          <dt>Languages</dt>
          <dd class="about-languages">
            <span class="about-languages__item">Arabic <small>Native</small></span>
            <span class="about-languages__item">French <small>C1</small></span>
            <span class="about-languages__item">English <small>C1</small></span>
          </dd>
        </div>
      </dl>
    </section>
  </div>
</template>

