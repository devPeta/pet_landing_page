import styles from '../styles/Footer.module.css';


export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.container}data-aos="fade-up">

        <div className={styles.subscribe} >
            <h3 className={styles.h}>PETWORLD</h3>
                <p className={styles.p}>Updates right to your inbox</p>
                    <div>
                        <input type = "email" placeholder='Email Address' className={styles.inputGround}/>
                        <button className={styles.btn}>Send</button>
                        </div>    
                        <p className={styles.copyright}>PETWORLD 2022</p>     
        </div>


        <div data-aos="fade-up">
            <h4 className={styles.lih}>Our story </h4>
            <ul> 
                <li className={styles.lip}>FAQ</li>
                <li className={styles.lip}>COntact</li>
            </ul>
        </div>

        <div data-aos="fade-up">
            <h4 className={styles.lih}>Pet care</h4>
            <ul> 
                <li className={styles.lip}>Treatments</li>
                <li className={styles.lip}>Health</li>
                <li className={styles.lip}>Hygiene</li>
            </ul>
        </div>

        <div data-aos="fade-up">
            <h4 className={styles.lih}>Shop</h4>
            <ul> 
                <li className={styles.lip}>Pet Food</li>
                <li className={styles.lip}>Toys</li>
                <li className={styles.lip}>Accessories</li>
            </ul>
        </div>
      </div >
          <div className={styles.row} data-aos="fade-up">
            <h2 className={styles.h2}>PETWORLD 2022</h2>
            <h2 className={styles.h2}>Privacy Policy</h2>
             <h2 className={styles.h2}>Terms of Use</h2>
        </div>
    </section>
    

  );
}