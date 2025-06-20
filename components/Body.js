import styles from '../styles/Body.module.css';
import InfoCard from './InfoCard';

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
    
    <section>
        <div>
            <InfoCard iconSrc="\dog.svg" title="Best quality pet food" subtitle ={
    "Super delicious food. <br />Available in a range of  <br />delicious flavors."</>

            <InfoCard iconSrc="\Beco.svg" title="Toys & Accessories" subtitle= ={
    <></>"Soft toys, chew toys, and  <br />rope toys. Strong,  <br />interactive, and fun."/>

            <InfoCard iconSrc="\Accessories icon.svg" title="Pets medical care" subtitle= ={
    <></>"You can get a wide  <br />range of great  <br />treatments for your dog."/>

            <InfoCard iconSrc="\globe.svg" title="Pets medical care" subtitle= ={
    <></>"It's the right time to  <br />groom your dog with a  <br />variety of treatments.s"/>
        </div>
        </section>
    

  )
}
