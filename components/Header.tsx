'use client'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <Image
          src="/gi-logo.png"
          alt="GI Logo"
          width={250}
          height={80}
          priority
        />
        
      </div>

      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/login" className={styles.loginBtn}>
          Login
        </Link>
      </nav>
    </header>
  )
}
