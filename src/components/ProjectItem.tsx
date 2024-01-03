import { usePointerGlow } from '../hooks/useGlow'
import './ProjectItem.css'

export function ProjectItem({
  title,
  tags,
  description,
  image,
  idx
}: {
  title: string
  tags: string[]
  description: string
  image: string
  idx: number
}) {
  const [status] = usePointerGlow()
  return (
    <article
      data-glow
      className='gap-4 mb-4'
      //@ts-ignore
      style={{ '--base': (idx + 2) * 30, '--spread': (idx + 2) * 100 }}>
      <span data-glow />
      <h1 className='text-xl font-semibold text-yellow-200 mb-2'>{title}</h1>
      <p className='text-lg text-pretty'>{description}</p>
      <ul className=''>
        {tags.map((tag) => {
          return <li key={tag}>{tag}</li>
        })}
      </ul>
      <img
        className='rounded shadow-2xl shadow-white/10 max-w-xl w-full'
        src={image}
        alt={`Screenshot of ${title} project`}
      />
      <a
        data-glow
        className='flex items-center py-2 justify-center hover:bg-black/10 transition duration-700 hover:text-white hover:cursor-pointer'>
        <span className='text-xl '>Visit</span>
      </a>
    </article>
  )
}
