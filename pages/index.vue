<script setup>
import resume_config from '../assets/config/resume_config.json'
const lang = Object.keys(resume_config.languages)[0]

definePageMeta({
  layout: "default"  
})
</script>
<template>
  <body class="theme-default wrapper">
    <!-- <div class="no-print select-language-container"> -->
    <!--   <select v-if="Object.keys(resume_config.languages).length > 1"  -->
    <!--     v-model="lang"  -->
    <!--     name="languages"  -->
    <!--     id="lang"    -->
    <!--   > -->
    <!--     <option v-for="language of Object.keys(resume_config.languages)" :value="language">{{resume_config.languages[language]}}</option> -->
    <!--   </select> -->
    <!-- </div> -->
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
  </body>
</template>
