import Image from 'next/image'; // ✅ Capitalized
import style from '@/styles/Infocard.module.css';

const InfoCard = ({ iconSrc, title, subtitle }) => {
  return (
    <div className={style.InfoCard} data-aos="fade-up">
      <div className={style.iconSrc} data-aos="fade-up">
        <Image src={iconSrc} height={85} width={85} alt={title} /> {/* ✅ Correct JSX */}
      </div>
      <div data-aos="fade-up">
        <h3 className={style.h}>{title}</h3>
        <p className={style.p}>{subtitle}</p>
      </div>
    </div>
  );
};

export default InfoCard;
