<script setup>
import resume_config from '../assets/config/resume_config.json'
console.log(resume_config)
</script>
<template>
  <nav style="display:flex; gap:10px;">
    <template v-for="language of Object.keys(resume_config.languages)">
      <NuxtLink :to="`/${language}`">{{ resume_config.languages[language] }}</NuxtLink>
    </template>
  </nav>
  <slot></slot>
</template>
