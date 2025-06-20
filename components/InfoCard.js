import Image from 'next/image'; // ✅ Capitalized
import style from '@/styles/Infocard.module.css';

const InfoCard = ({ iconSrc, title, subtitle }) => {
  return (
    <div className={style.InfoCard}>
      <div className={style.iconSrc}>
        <Image src={iconSrc} height={85} width={85} alt={title} /> {/* ✅ Correct JSX */}
      </div>
      <div>
        <h3 className={style.h}>{title}</h3>
        <p className={style.p}>{subtitle}</p>
      </div>
    </div>
  );
};

export default InfoCard;
