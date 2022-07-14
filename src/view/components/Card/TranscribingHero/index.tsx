import { FC } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import TranscribingHeroProps from "./types";
import styles from "./index.module.css";
const TranscribingHero: FC<TranscribingHeroProps> = ({
  cover,
  progressRatio,
}) => {
  return (
    <div className={styles.hero}>
      <p className={styles.text}>Transcribing subtitles</p>
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
