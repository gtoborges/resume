<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
// "Reset" styles and SCSS reusable components
@import "./assets/scss/normalize";
@import "./assets/scss/mixins";
@import "./assets/scss/variables";

// Generic site base & layout styles
@import "./assets/scss/base";
@import "./assets/scss/layout";

// Layouts
@import "./assets/scss/resume";
</style>
