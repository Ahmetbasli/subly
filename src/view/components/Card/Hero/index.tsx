import React, { FC } from "react";
import texts from "src/view/static-texts/texts.json";
import Button from "src/view/common/Button";
import { CgTrashEmpty } from "react-icons/cg";
import { TbLanguage } from "react-icons/tb";
import HeroProps from "./types";
import styles from "./index.module.css";

const Hero: FC<HeroProps> = ({ cover, isHovered, languages }) => {
  return (
    <div className={styles.hero}>
      {isHovered && (
        <div className={styles.language}>
          <div className={styles.languageIconWrapper}>
            <TbLanguage className={styles.languageIcon} />
          </div>
          <p className={styles.languageText}>
            {languages.length} {texts.languages}
          </p>
        </div>
      )}
      {isHovered && (
        <div className={styles.heroHover}>
          <CgTrashEmpty className={styles.icon} />
          <Button type="whiteOutline">{texts.editBtn}</Button>
        </div>
      )}
      <img className={styles.img} src={cover} alt="file image" />
    </div>
  );
};

export default Hero;
