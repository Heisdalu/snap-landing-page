import Mobile_Image from "../../assets/image-hero-mobile.png";
import Desktop_Image from "../../assets/image-hero-desktop.png";

const Illustration = () => {
  return (
    <picture>
      <source media="(max-width: 500px)" srcSet={Mobile_Image} />
      <source media="(min-width: 501px)" srcSet={Desktop_Image} />
      <img src={Mobile_Image} alt="A boy with a Laptop" />
    </picture>
  );
};

export default Illustration;
