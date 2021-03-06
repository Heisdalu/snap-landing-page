import Mobile_Image from "../../assets/image-hero-mobile.png";
import Desktop_Image from "../../assets/image-hero-desktop.png";
import style from './Illustration.module.css'

const Illustration = () => {
  return (
    <figure className={style.imageContainer}>
      <picture>
        <source media="(max-width: 600px)" srcSet={Mobile_Image} />
        <source media="(min-width: 601px)" srcSet={Desktop_Image} />
        <img
          className={style.image}
          src={Mobile_Image}
          alt="A boy with a Laptop"
        />
        
      </picture>
    </figure>
  );
};

export default Illustration;
