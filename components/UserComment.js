import styles from '../styles/Usercomment.module.css';

export default function UserComment() {
  return (
    <section className={styles.container}>
      <div className={styles.commentBox}>
        <div className={styles.oval}>
          <img src="/user.png" alt="User Illustration" />
        </div>

        <div className={styles.textBlock}>
          <img src="/quote.png" alt="Quote" className={styles.quoteIcon} />
          <p className={styles.p}>
            We love using 'PETWORLD' products. <br />
            Environmentally friendly and sustainable. <br />
            We have the sustainable dog bowls and <br />
            regularly use the mint scented poo bags <br />
            which were all such great value for money.
          </p>

          <h1 className={styles.h1}>Dylan Shaw</h1>
        </div>
      </div>
    </section>
  );
}
