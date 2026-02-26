'use client'
import { useState } from 'react'
import styles from '../styles/faq.module.css'

const faqs = [
  {
    q: 'What is the GI project collaboration platform for?',
    a: 'The goal is to improve networking among GI members across Germany.'
  },
  {
    q: 'Who can join projects?',
    a: 'Students, researchers, and GI members.'
  }
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className={styles.faq}>
      <h2>FAQs - Frequently Asked Questions</h2>

      {faqs.map((f, i) => (
        <div key={i} className={styles.item}>
          <button onClick={() => setOpen(open === i ? null : i)}>
            {f.q}
          </button>
          {open === i && <p>{f.a}</p>}
        </div>
      ))}
    </section>
  )
}
