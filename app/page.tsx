import ProjectCard from '../components/ProjectCard'
import FAQ from '../components/FAQ'
import { getProjects } from '../services/api'
import Link from 'next/link'
import styles from '../styles/project.module.css'

export default async function HomePage() {
  const projects = await getProjects()

  return (
    <section className="container">
      <h1>GI Project Collaboration Platform</h1>
      <p>Here you can find collaborators for your dream project.</p>

      <Link href="/create-project" className={styles.primaryButton}>
  Create a Project
</Link>

      <section className={styles.projectsSection}>
        <div className={styles.projectsHeader}>
          <h2>Projects</h2>

          <input
            type="text"
            placeholder="Search by project name, location or tags..."
            className={styles.search}
          />
        </div>

        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </section>

      <FAQ />
    </section>
  )
}
