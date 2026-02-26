import styles from '../styles/timeline.module.css'

export default function Timeline({ milestones }: any) {
  return (
    <div className={styles.timeline}>
      {milestones.map((m: any, i: number) => (
        <div key={i} className={styles.step}>
          <div className={styles.center}>
            <div className={styles.circle}>{i + 1}</div>

            {i !== milestones.length - 1 && (
              <div className={styles.line} />
            )}
          </div>

          <div className={styles.content}>
            <h4>{m.title}</h4>
            <p>{m.date}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
