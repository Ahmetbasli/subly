import { FC } from "react";
import texts from "src/view/static-texts/texts.json";
import ProgressBar from "react-bootstrap/ProgressBar";
import TranscribingHeroProps from "./types";
import styles from "./index.module.css";
const TranscribingHero: FC<TranscribingHeroProps> = ({
  cover,
  progressRatio,
}) => {
  return (
    <div className={styles.hero}>
      <p className={styles.text}>{texts.transcribingTitle}</p>
      <ProgressBar
        className={styles.progressBar}
        animated
        now={progressRatio}
      />
      <img className={styles.img} src={cover} alt="file image" />
    </div>
  );
};

export default TranscribingHero;
