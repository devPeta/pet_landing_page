import styles from '../styles/Body.module.css';
import InfoCard from './InfoCard';
import ImageRow from './Rowimage';
import UserComment from './UserComment';
import Footer from './Footer';


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
              <img src="/Image.svg" alt="Illustration" height={360} width={475}/>
          </div>
        </section>

        <section className={styles.vid}>
              <div className={styles.vimg}>
                  <img src="/Mask group.svg" />
              </div>
        </section>
    
    
    <ImageRow/>

   <section className={styles.infoCardStyle}>
    <div className={styles.cardRow}>
    <InfoCard
      iconSrc="/pet food icon.svg"
      title="Best quality pet food"
      subtitle={
        <>
          Super delicious food. <br />
          Available in a range of <br />
          delicious flavors.
        </>
      }
    />

    <InfoCard
      iconSrc="/Accessories icon.svg"
      title="Toys & Accessories"
      subtitle={
        <>
          Soft toys, chew toys, and <br />
          rope toys. Strong, <br />
          interactive, and fun.
        </>
      }
    />

    <InfoCard
      iconSrc="/Illustration.svg"
      title="Pets medical care"
      subtitle={
        <>
          You can get a wide <br />
          range of great <br />
          treatments for your dog.
        </>
      }
    />

    <InfoCard
      iconSrc="/Illustration.svg"
      title="Pets grooming"
      subtitle={
        <>
          It's the right time to <br />
          groom your dog with a <br />
          variety of treatments.
        </>
      }
    />
  </div>
    </section>

      <UserComment/>



          <section className={styles.Section}>
          <div>
              <h1 className={styles.h1}>Let's talk, <br />Wroof!</h1>
              <h2 className={styles.p}>
                You can ask us questions about your pet,<br />and we will be happy to answer you.
              </h2>

              <button className={styles.GetStarted}>
                  Contact Us
              </button>
          </div>

          <div className={styles.img}>
              <img src="/dog.svg" alt="Illustration" height={360} width={475}/>
          </div>
        </section>

      <Footer />
  
    </>
  );
}
