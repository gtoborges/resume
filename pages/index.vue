<script setup>
const { resume_config } = useResumeConfig()
const lang = ref(Object.keys(resume_config.languages)[0])

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

