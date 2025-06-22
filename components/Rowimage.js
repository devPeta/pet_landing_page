import Image from 'next/image';
import styles from '@/styles/Body.module.css';

const imageList = [
  '/Amazon.svg',
  '/Apple.svg',
  '/Beco.svg',
  '/Nestle.svg',
  '/Walmart.svg',
];

export default function ImageRow() {
  return (
    <section className={styles.imageRowSection}>
      <div className={styles.imageRow}>
        {imageList.map((src, index) => (
          <div key={index} className={styles.imageWrapper}>
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={100}
              height={50}
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
}