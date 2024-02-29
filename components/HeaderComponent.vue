<script setup>
import { IconGithub, IconFacebook, IconTwitter, IconLinkedin, IconInstagram, IconWebsite, IconMedium, IconPdf } from './icons'

const props = defineProps(['config', 'lang'])

const components = {
  'Github': IconGithub,
  'Facebook': IconFacebook,
  'Twitter': IconTwitter,
  'Linkedin': IconLinkedin,
  'Instagram': IconInstagram,
  'Website': IconWebsite,
  'Medium': IconMedium,
  'Pdf': IconPdf
}
</script>

<template>
  <header class="page-header"> 
    <img src="../resume/avatar.png" 
      alt="my photo" 
      class="avatar no-print" 
      item-prop="image"
      width="95" height="95"
      v-if="props.config.avatar"
    >
    <h1 class="header-name" item-prop="name">{{ props.config.name }}</h1>
    <div class="title-bar no-print">
      <h2 class="header-title" item-prop="jobTitle">{{ props.config[props.lang].resume_title }}</h2>
      <ul class="icon-links" >
        <template v-for="social of props.config.social_links">
          <li class="icon-link-item" v-if="social.show">
            <a class="icon-link" :href="social.url" :aria-label="`Link to access the ${social.name} of ${config.name}`">
              <component :is="components[social.name]"></component>
            </a>
          </li>
        </template>
      </ul>
    </div>
    <div class="executive-summary" itemprop="description">
      <p>{{props.config[props.lang].resume_intro}}</p>
    </div>
    <a :href="`mailto:${props.config.contact}`" 
      class="contact-button no-print"
      v-if="props.config.show_contact"
    >
      {{ props.config[props.lang].contact_button_message }}
    </a>
  </header>
</template>
