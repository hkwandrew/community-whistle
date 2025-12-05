export const heroImage = 'hero-image.png'
export const logoImage = 'cw-logo.png'

export const hotlineUrl = 'https://nnirr.org/education-resources/community-resources-legal-assistance-recursos-comunitarios-asistencia-legal/immigration-hotlines-lineas-directas-de-inmigracion/'

export const localResources = [
  { label: 'California', url: 'https://www.ccijustice.org/carrn' },
  { label: 'South California', url: 'https://www.aclusocal.org/en/socal-rapid-response-networks' },
  { label: 'Chicago', url: 'https://www.pilsenartscommunityhouse.org/' },
  { label: 'Portland', url: 'http://migrawhistlepdx.org/' },
  { label: 'Washington State', url: 'https://waisn.org/' }
]

export const contentByLanguage = {
  en: {
    navLinks: [
      { href: '#why', label: 'Why a Whistle?' },
      { href: '#codes', label: 'Codes to Learn' },
      { href: '#streets', label: 'On the Streets' },
      { href: '#why-it-works', label: 'Why it Works' },
      { href: '#actions', label: 'What You Can Do' },
      { href: '#resources', label: 'Resources' },
      { href: '#contact', label: 'Contact' }
    ],
    hero: {
      titleLines: ['Together,', 'we keep our community safe.']
    },
    navHotlineLabel: 'Find a hotline',
    hotlineLabel: 'Find a Hotline',
    codesSectionTitle: 'Codes to Learn',
    whistleCodes: [
      {
        title: 'Code 1: Danger Nearby',
        rhythm: 'PRE-PRE-PRE',
        instruction: 'Blow in short bursts:',
        details: ['This alerts the community that agents are in the area.'],
        emphasis: null
      },
      {
        title: 'Code 2: Code Red',
        rhythm: 'PREEEE–PREEEE–PREEEEE',
        instruction: 'Blow in long blasts:',
        details: ['Agents are detaining someone.', 'FORM A CROWD, STAY LOUD.'],
        emphasis: 'FORM A CROWD, STAY LOUD.'
      }
    ],
    guidanceSections: [
      {
        id: 'why',
        title: 'Why a Whistle?',
        intro: null,
        items: [
          'A simple tool for fast alerts.',
          'Loud. Recognizable. Impossible to ignore.',
          'Our voices are stronger together.'
        ],
        footer: null
      },
      {
        id: 'streets',
        title: 'On the Streets',
        intro: 'Whistles guide people to',
        items: ['Follow agent caravans', 'Catch up with the crowd', 'Our voices are stronger together'],
        footer: 'Noise = Visibility'
      },
      {
        id: 'why-it-works',
        title: 'Why it Works',
        intro: null,
        items: ['Instant alert system', 'Faster than social media', 'Turns silence into community action'],
        footer: null
      },
      {
        id: 'actions',
        title: 'What You Can Do',
        intro: null,
        items: [
          'Wear your whistle around your neck',
          'Teach family and neighbors the codes',
          'Use it when agents are spotted'
        ],
        footer: 'Protect each other, always'
      }
    ],
    statement: {
      lines: ['Stay nonviolent.', 'Don’t stay silent.']
    },
    resources: {
      title: 'Resources',
      intro: 'Has someone in your family been detained by agents or are you a witness of an agent raid in your community?',
      toggleLabel: 'More local resources'
    },
    contact: {
      title: 'Contact Us',
      intro: 'Have a question or suggestion? Use the form below to reach our site admins. We’ll respond as quickly as possible.',
      labels: {
        name: 'Your Name (required)',
        email: 'Email Address (required)',
        message: 'Your Message (required)'
      },
      placeholders: {
        name: 'Fran Wilson',
        email: 'name@domain.com',
        message: 'Please type your message here...'
      },
      submit: 'Submit'
    },
    credit: {
      caption: 'These materials were created by the community for the community. <br />Special thanks to @pilsenartscommunityhouse in Chicago for their generosity!',
      imageAlt: 'Woodcut illustration of a whistle'
    },
    footer: {
      prompt: 'Has someone in your family been detained by agents or are you a witness of a raid in your community?',
      hotlineLabel: 'Find a Hotline'
    }
  },
  es: {
    navLinks: [
      { href: '#why', label: '¿Por qué un silbato?' },
      { href: '#codes', label: 'Códigos para aprender' },
      { href: '#streets', label: 'En las calles' },
      { href: '#why-it-works', label: 'Por qué funciona' },
      { href: '#actions', label: 'Lo que puedes hacer' },
      { href: '#resources', label: 'Recursos' },
      { href: '#contact', label: 'Contacto' }
    ],
    hero: {
      titleLines: ['Juntos,', 'mantenemos segura a nuestra comunidad.']
    },
    navHotlineLabel: 'Encuentra una línea directa',
    hotlineLabel: 'Encuentra una línea directa',
    codesSectionTitle: 'Códigos para aprender',
    whistleCodes: [
      {
        title: 'Código 1: Peligro cerca',
        rhythm: 'PRE-PRE-PRE',
        instruction: 'Sopla en ráfagas cortas:',
        details: ['Esto alerta a la comunidad de que hay agentes en el área.'],
        emphasis: null
      },
      {
        title: 'Código 2: Código rojo',
        rhythm: 'PREEEE–PREEEE–PREEEEE',
        instruction: 'Sopla en explosiones largas:',
        details: ['Los agentes están deteniendo a alguien.', 'FORMA UNA MULTITUD, HAZ RUIDO.'],
        emphasis: 'FORMA UNA MULTITUD, HAZ RUIDO.'
      }
    ],
    guidanceSections: [
      {
        id: 'why',
        title: '¿Por qué un silbato?',
        intro: null,
        items: [
          'Una herramienta simple para alertas rápidas.',
          'Ruidoso. Reconocible. <br />Imposible de ignorar.',
          'Nuestras voces son más fuertes juntas.'
        ],
        footer: null
      },
      {
        id: 'streets',
        title: 'En las calles',
        intro: 'Los silbatos guían a la gente a',
        items: ['Seguir caravanas de agentes', 'Alcanzar a la multitud', 'Nuestras voces son más fuertes juntas'],
        footer: 'Ruido = Visibilidad'
      },
      {
        id: 'why-it-works',
        title: 'Por qué funciona',
        intro: null,
        items: ['Sistema de alerta instantáneo', 'Más rápido que las redes sociales', 'Convierte el silencio en acción comunitaria'],
        footer: null
      },
      {
        id: 'actions',
        title: 'Lo que puedes hacer',
        intro: null,
        items: [
          'Lleva tu silbato alrededor del cuello',
          'Enseña los códigos a tu familia y vecinos',
          'Úsalo cuando se vean agentes'
        ],
        footer: 'Protéjanse mutuamente, siempre'
      }
    ],
    statement: {
      lines: ['Mantente pacífico.', 'No te quedes en silencio.']
    },
    resources: {
      title: 'Recursos',
      intro: '¿Han detenido a alguien de tu familia los agentes o eres testigo de una redada en tu comunidad?',
      toggleLabel: 'Más recursos locales'
    },
    contact: {
      title: 'Contáctanos',
      intro: '¿Tienes una pregunta o sugerencia? Usa el formulario para comunicarte con los administradores del sitio. Responderemos lo más rápido posible.',
      labels: {
        name: 'Tu nombre (requerido)',
        email: 'Correo electrónico (requerido)',
        message: 'Tu mensaje (requerido)'
      },
      placeholders: {
        name: 'Fran Wilson',
        email: 'name@domain.com',
        message: 'Escribe tu mensaje aquí...'
      },
      submit: 'Enviar'
    },
    credit: {
      caption: 'Estos materiales fueron creados por la comunidad para la comunidad. ¡Gracias especiales a @pilsenartscommunityhouse en Chicago por su generosidad!',
      imageAlt: 'Ilustración en grabado de un silbato'
    },
    footer: {
      prompt: '¿Han detenido a alguien de tu familia los agentes o eres testigo de una redada en tu comunidad?',
      hotlineLabel: 'Encuentra una línea directa'
    }
  }
}
