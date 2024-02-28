<script setup>
const { resume_config, lang } = useResumeConfig()

const language = ref(lang)
const selectLanguage = (e) => {
  navigateTo({ path: `/${e.target.value}`})
  language.value = e.target.value
}
</script>
<template>
  <div class="no-print select-language-container">
    <nav>
      <label for="languageSelect">Language</label>
      <select 
        @input="selectLanguage"
        v-if="Object.keys(resume_config.languages).length > 1" 
        v-model="language" 
        name="languageSelect" 
        id="languageSelect"   
      >
        <option v-for="language of Object.keys(resume_config.languages)" :value="language" :key="language">{{resume_config.languages[language]}}</option>
      </select>
    </nav>
  </div>
  <slot></slot>
</template>
