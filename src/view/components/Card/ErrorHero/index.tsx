import React, { FC } from "react";
import texts from "src/view/static-texts/texts.json";
import styles from "src/view/components/Card/ErrorHero/index.module.css";
import Button from "src/view/common/Button";
import { CgDanger } from "react-icons/cg";

const ErrorHero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.errorMessageWrapper}>
        <CgDanger className={styles.icon} />
        <p className={styles.errorMessage}>{texts.errorMessage}</p>
      </div>
      <div className={styles.buttons}>
        <Button type="secondary">{texts.deleteBtn}</Button>
        <Button type="primary">{texts.ReportIssueBtn}</Button>
      </div>
    </div>
  );
};

export default ErrorHero;
