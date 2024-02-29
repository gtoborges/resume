<script setup>
const { resume_config, lang } = useResumeConfig()

</script>
<template>
  <MainComponent :lang="lang" :resume_config="resume_config" />
</template>
