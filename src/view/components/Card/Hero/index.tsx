import React, { FC } from "react";
import HeroProps from "./types";
import HoveredHero from "./HoveredHero";
import styles from "./index.module.css";

const Hero: FC<HeroProps> = ({ cover, isHovered, languages }) => {
  return (
    <div className={styles.hero}>
      {isHovered && <HoveredHero languages={languages} />}
      <img className={styles.img} src={cover} alt="file image" />
    </div>
  );
};

export default Hero;
