import React, { FC } from "react";
import texts from "src/view/static-texts/texts.json";
import getMonthDifference from "src/view/utils/getMonthDifference";
import styles from "src/view/components/Card/Info/index.module.css";
import InfoProps from "./types";

const Info: FC<InfoProps> = ({ createdAt, updatedAt, name, status }) => {
  const monthPassedFromLastEdit = getMonthDifference(
    new Date(updatedAt || createdAt),
    new Date()
  );
  const renderPassedMonthMessage = () => {
    if (status === "ready") {
      return `Edited ${monthPassedFromLastEdit} month ago `;
    } else if (status === "error") {
      return texts.errorInfo;
    } else {
      return texts.transcribingInfo;
    }
  };
  return (
    <div className={styles.info}>
      <p className={styles.title}>{name}</p>
      <p className={styles.monthPassedMessage}>{renderPassedMonthMessage()}</p>
    </div>
  );
};

export default Info;
