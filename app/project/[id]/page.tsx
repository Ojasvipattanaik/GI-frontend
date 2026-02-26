
import Image from 'next/image'
import styles from 'styles/project.module.css'

export default function ProjectsPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <Image
          src="/project-hero.jpg"
          alt="GISPP"
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}>
          <h1>GISPP</h1>
          <p>German Informatics Society Project Platform</p>
          <button className={styles.joinBtn}>Join the Project</button>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.container}>
        <div className={styles.profile}>
          <div className={styles.avatar} />
          <div>
            <p className={styles.name}>Prof. Dr. Martin Wolf</p>
            <h2>German Informatics Society Project Collaboration Platform</h2>
            <p className={styles.description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>

        <hr className={styles.divider} />

        {/* TIMELINE */}
        <h3 className={styles.timelineTitle}>Project Timeline</h3>

        <div className={styles.timeline}>
          {[
            ['Team formation', '30 September'],
            ['Project planning', '31 October'],
            ['Interviews & Requirement gathering', '30 November'],
            ['Web design', '31 December'],
            ['Web development & Beta release', '31 January'],
            ['Full release', '28 February']
          ].map((m, i) => (
            <div key={i} className={styles.timelineRow}>
              <div className={styles.left}>
                <strong>Milestone {i + 1}</strong>
                <p>{m[0]}</p>
                <span>{m[1]}</span>
              </div>

              <div className={styles.circle}>{i + 1}</div>

              <div className={styles.right}>
                <strong>Milestone {i + 1}</strong>
                <p>{m[0]}</p>
                <span>{m[1]}</span>
              </div>
            </div>
          ))}
        </div>

        <hr className={styles.divider} />

        {/* COMMENTS */}
        <div className={styles.commentsHeader}>Comments (3)</div>

        {[1, 2, 3].map((c) => (
          <div key={c} className={styles.comment}>
            <div className={styles.avatar} />
            <div>
              <strong>Prof. Dr. Martin Wolf</strong>
              <p className={styles.affiliation}>FH Aachen</p>
              <p>
                Lorem Ipsum has been the industry’s standard dummy text ever
                since the 1500s.
              </p>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
