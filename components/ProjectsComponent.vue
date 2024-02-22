<script setup>
import projects from '../assets/projects.json'
const props = defineProps(['lang', 'translations'])
</script>

<template>
  <section class="content-section">
    <header class="section-header">
      <h2>{{ props.translations.title }}</h2>
    </header>
    <div class="resume-item" v-for="project in projects[props.lang]">
      <h3 class="resume-item-title">
        <a :href="project.url">{{ project.project }}</a>
      </h3>
      <h4 class="resume-item-details group">
        {{ project.role }} <template v-if="project.duration">&bull; {{ project.duration.start }} &mdash; {{ project.duration.finish }}</template>
      </h4>
      <p class="resume-item-copy">{{ project.description }}</p>
      <ul class="resume-item-list" v-if="project.bullet_points.length">
        <li v-for="point in project.bullet_points">{{ point }}</li>
      </ul>
      <p class="resume-item-copy" v-if="project.stack"><b>{{props.translations.skills}}:&nbsp;</b>{{ project.stack }}</p>
    </div>
  </section>
</template>
