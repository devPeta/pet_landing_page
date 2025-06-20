import styles from '../styles/Navbar.module.css';
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src="/Logo.svg" alt="Logo" width={32} height={17} />
        <h1 className={styles.h1}>PETWORLD</h1>
      </div>

      <div className={styles.actions}>
        <button className={styles.SignUp}>Sign Up</button>
        <button className={styles.Login}>Login</button>
      </div>
    </nav>
  )
}
