import React, { useEffect } from "react";
import api from "src/infrastructure/services/api/";
import styles from "src/view/index.module.css";

function App() {
  useEffect(() => {
    (async () => {
      const res = await api.MediaItems.getAll();
      console.log(res);
    })();
  });
  return (
    <>
      <header className={styles.header}>
        <h1>Welcome to </h1>
        <img
          src="https://uploads-ssl.webflow.com/61e81392cdf29f010bb62bdc/61ebf06b9f28244a2c0f9122_logo-light.svg"
          loading="eager"
          width="110"
          height="50"
          alt="logo"
          className={styles.logo}
        ></img>
      </header>
    </>
  );
}

export default App;
