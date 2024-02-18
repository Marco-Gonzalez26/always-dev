import TailwindIcon from '../icons/Tailwind.astro'
import ReactIcon from '../icons/React.astro'
import IconAstro from '../icons/IconAstro.astro'
import NextJSIcon from '../icons/NextJS.astro'
import TypeScriptIcon from '../icons/TypeScript.astro'

export const TAGS = {
  TAILWIND: {
    name: 'Tailwind',
    className: 'bg-[#38B2AC]/20 border-[#38B2AC]/60',
    icon: TailwindIcon
  },
  REACT: {
    name: 'React',
    className: 'bg-[#61DAFB]/20 border-[#61DAFB]/60',
    icon: ReactIcon
  },
  ASTRO: {
    name: 'Astro',
    className: 'bg-[#654FF0]/20 border-[#654FF0]/60',
    icon: IconAstro
  },
  NEXTJS: {
    name: 'Next.js',
    className: 'bg-[#000000]/20 border-[#000000]/60',
    icon: NextJSIcon
  },
  TYPESCRIPT: {
    name: 'TypeScript',
    className: 'bg-[#3178C6]/20 border-[#3178C6]/60',
    icon: TypeScriptIcon
  }
}
export const PROJECTS_EN = [
  {
    title: 'Project 1 ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: '#',
    image: '/placeholder_v2.webp',
    tags: [TAGS.ASTRO, TAGS.TAILWIND, TAGS.REACT, TAGS.TYPESCRIPT]
  },
  {
    title: 'Project 2 ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: '#',
    image: '/placeholder_v2.webp',

    tags: [TAGS.NEXTJS, TAGS.TAILWIND, TAGS.REACT, TAGS.TYPESCRIPT]
  }
]
export const PROJECTS_ES = [
  {
    title: 'Proyecto 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: '#',
    image: '/placeholder_v2.webp',
    tags: [TAGS.ASTRO, TAGS.TAILWIND, TAGS.REACT, TAGS.TYPESCRIPT]
  },
  {
    title: 'Proyecto 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: '#',
    image: '/placeholder_v2.webp',

    tags: [TAGS.NEXTJS, TAGS.TAILWIND, TAGS.REACT, TAGS.TYPESCRIPT]
  }
]

export const LINKS_EN = [
  {
    link: '#top',
    title: 'Home'
  },
  {
    link: '#experience',
    title: 'Experience'
  },
  {
    link: '#projects',
    title: 'Projects'
  },
  {
    link: '#about',
    title: 'About'
  },
  {
    link: '#contact',
    title: 'Contact'
  }
]
export const LINKS_ES = [
  {
    link: '#top',
    title: 'Inicio'
  },
  {
    link: '#experience',
    title: 'Experiencia'
  },
  {
    link: '#projects',
    title: 'Proyectos'
  },
  {
    link: '#about',
    title: 'Sobre mí'
  },
  {
    link: '#contact',
    title: 'Contacto'
  }
]

export const EXPERIENCE_EN = [
  {
    date: 'October 2023',
    title: 'Fullstack Developer at Eatplus',
    actual: true,

    type: 'Internship',
    description: `Main backend developer that successfully integrate Google API and Google Drive API with NestJS, successful decision making to make the frontend communication easier, successfully integrate Chatgpt and Dalle-3 AI models, and successfully contribute with frontend development with React.`
  },
  {
    date: 'March 2022',
    title: 'Frontend Developer with React at Joga Fantasy',
    type: 'Freelance',
    description: `Successfully colaborate with a frontend team, and improve the user experience by persisting the data on localStorage to prevent a flash of data, successfully usage of React and Redux to connect the server endpoints`
  }
]
export const EXPERIENCE_ES = [
  {
    date: 'Octubre 2023',
    actual: true,
    title: 'Desarrollador Fullstack en EatPlus',
    type: 'Pasantía',
    description: `Desarrollador Backend principal que integró existosamente Google y Google Drive con NestJS, toma de decisiones acertadas que hacen que la comunicación entre el Backend y el Frontend sea más sencilla y entendible, integré exitosamente los modelos de IA Chatgpt y Dalle-3, y contribuyo eficazmente con el desarrollo del Frontend con React y Redux`
  },

  {
    date: 'Marzo 2022',
    title: 'Desarrollador Frontend con React en Joga Fantasy',
    type: 'Freelance',
    description: `Get access to over 20+ pages including a dashboard layout charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.`
  }
] 