import Link from 'next/link'
import styles from '../styles/project.module.css'

type ProjectCardProps = {
  project: {
    id: string | number
    title: string
    description: string
    tags: string[]
    location: string
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={styles.projectCard}>
      <img
        src="/project-thumb.jpg"
        alt="Project thumbnail"
        className={styles.projectImage}
      />

      <div className={styles.projectContent}>
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        {project.tags && project.tags.length > 0 && (
        <div className={styles.tags}>
          {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
          ))}
        </div>
)}


        <p className={styles.location}>📍 {project.location}</p>

        <Link href={`/project/${project.id}`} className={styles.learnMore}>
  Learn more
</Link>

      </div>
    </div>
  )
}
