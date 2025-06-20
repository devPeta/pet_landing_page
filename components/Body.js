import styles from '../styles/Body.module.css';

export default function Body() {
  return (
    <>
    <section className={styles.Section}>
          <div>
              <h1 className={styles.h1}>Pet Store <br />& Beyond.</h1>
              <h2 className={styles.p}>
                  This is a sample landing page, created with Figma and Anima. <br />No coding involved.
              </h2>

              <button className={styles.GetStarted}>
                  Get Started
              </button>
          </div>

          <div className={styles.img}>
              <img src="/Image.svg" alt="Illustration" />
          </div>
        </section>

        <section className={styles.vid}>
              <div className={styles.vimg}>
                  <img src="/Mask group.svg" />
              </div>
        </section>
    
    
    </>

  )
}
