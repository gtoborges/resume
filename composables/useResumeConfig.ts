import resume from '../assets/config/resume_config.json'

export default function useUseHead() {
  const resume_config = resume
  
  const routeParams = useRoute().params
  console.log(routeParams)
  let lang = routeParams.lang
  if(!lang) lang = Object.keys(resume_config.languages)[0]

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
        href: '/resume/favicon.png'
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
    ogImage: '/resume/avatar.png',
    ogUrl: 'https://gtoborges.github.io/resume/',
    twitterTitle: `${resume_config.name}`,
    twitterDescription: `Resumé of ${resume_config.name}`,
    twitterImage: '/resume/avatar.png',
    twitterCard: 'summary'
  })

  return {
    resume_config, lang
  }
}
