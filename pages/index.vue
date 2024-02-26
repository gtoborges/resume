<script setup>
import resume_config from '../assets/config/resume_config.json'
const lang = ref(Object.keys(resume_config.languages)[0])

useHead({
  titleTemplate: () => {
    return `${resume_config.name}`
  },
  htmlAttrs: {
    lang: lang
  },
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Lora:400,700|Open+Sans:400,300,800,700',
      crossorigin: '',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }  
  ],
  bodyAttrs: {
    class: "theme-default wrapper"
  }
})

useSeoMeta({
  description: `Resumé of ${resume_config.name}`,
  ogTitle:  `${resume_config.name}`,
  ogDescription: `Resumé of ${resume_config.name}`,
  ogImage: '/avatar.png',
  ogUrl: 'https://gtoborges.github.io/resume/',
  twitterTitle: `${resume_config.name}`,
  twitterDescription: `Resumé of ${resume_config.name}`,
  twitterImage: '/avatar.png',
  twitterCard: 'summary'
})

// watch(lang)
</script>
<template>
  <div class="no-print select-language-container">
    <nav>
      <label for="lang">Language</label>
      <select v-if="Object.keys(resume_config.languages).length > 1" 
        v-model="lang" 
        name="languages" 
        id="lang"   
      >
        <option v-for="language of Object.keys(resume_config.languages)" :value="language" :key="language">{{resume_config.languages[language]}}</option>
      </select>
    </nav>
  </div>
  <HeaderComponent :config="resume_config" :lang="lang"/>
  <ExperiencesComponent 
    v-if="resume_config.resume_sections['experiences']" 
    :lang="lang"
    :translations="resume_config[lang]['experiences']"
  />
  <EducationComponent 
    v-if="resume_config.resume_sections['education']" 
    :lang="lang"
    :translations="resume_config[lang]['education']"
  />
  <ProjectsComponent 
    v-if="resume_config.resume_sections['projects']" 
    :lang="lang"
    :translations="resume_config[lang]['projects']"
  />
  <SkillsComponent 
    v-if="resume_config.resume_sections['skills']" 
    :lang="lang"
    :translations="resume_config[lang]['skills']"
  />
  <RecognitionsComponent 
    v-if="resume_config.resume_sections['recognitions']" 
    :lang="lang"
    :translations="resume_config[lang]['recognitions']"
  />
  <AssociationsComponent 
    v-if="resume_config.resume_sections['associations']" 
    :lang="lang"
    :translations="resume_config[lang]['associations']"
  />
  <LinksComponent 
    v-if="resume_config.resume_sections['links']" 
    :lang="lang"
    :translations="resume_config[lang]['links']"
  />
</template>

