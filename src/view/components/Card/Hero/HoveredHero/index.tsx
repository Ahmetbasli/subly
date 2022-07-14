import React, { FC } from "react";
import texts from "src/view/static-texts/texts.json";
import Button from "src/view/common/Button";
import { CgTrashEmpty } from "react-icons/cg";
import { TbLanguage } from "react-icons/tb";
import HoveredHeroProps from "./types";
import styles from "./index.module.css";
const HoveredHero: FC<HoveredHeroProps> = ({ languages }) => {
  return (
    <>
      <div className={styles.language}>
        <div className={styles.languageIconWrapper}>
          <TbLanguage className={styles.languageIcon} />
        </div>
        <p className={styles.languageText}>
          {languages.length} {texts.languages}
        </p>
      </div>
      <div className={styles.heroHover}>
        <CgTrashEmpty className={styles.icon} />
        <Button type="whiteOutline">{texts.editBtn}</Button>
      </div>
    </>
  );
};

export default HoveredHero;
