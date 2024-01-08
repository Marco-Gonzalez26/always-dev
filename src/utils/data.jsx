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
    name: 'Astro.build',
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
